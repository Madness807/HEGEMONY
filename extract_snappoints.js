#!/usr/bin/env node
/**
 * Extract SnapPoints and VectorLines from TTS JSON and convert to CSS percentages for board zones
 */

const fs = require('fs');

const jsonPath = './workshop_steam/2902422467.json';

console.log('📍 Extracting Board Data from Tabletop Simulator JSON...\n');

// Read the JSON file
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Find the Custom Board object (it usually has VectorLines and SnapPoints)
// We'll look for the object with the most VectorLines
let mainBoard = null;
let maxVectorLines = 0;

// Helper to find board recursively
function findBoard(obj) {
    if (obj.VectorLines && obj.VectorLines.length > maxVectorLines) {
        maxVectorLines = obj.VectorLines.length;
        mainBoard = obj;
    }

    if (obj.ObjectStates) {
        for (const child of obj.ObjectStates) {
            findBoard(child);
        }
    }
}

// Start search from root
if (data.ObjectStates) {
    for (const obj of data.ObjectStates) {
        findBoard(obj);
    }
} else {
    // Maybe the root itself is the object
    findBoard(data);
}

if (!mainBoard) {
    console.error('❌ Could not find Main Board object with VectorLines');
    // Fallback to using root data if it has VectorLines
    if (data.VectorLines) {
        console.log('⚠️ Using root object as fallback');
        mainBoard = data;
    } else {
        process.exit(1);
    }
}

const snapPoints = mainBoard.SnapPoints || [];
const vectorLines = mainBoard.VectorLines || [];

console.log(`Found Main Board with:`);
console.log(`   - ${snapPoints.length} SnapPoints`);
console.log(`   - ${vectorLines.length} VectorLines\n`);

// Calculate bounds based on ALL points (SnapPoints + VectorLines)
let minX = Infinity, maxX = -Infinity;
let minZ = Infinity, maxZ = -Infinity;

// Include SnapPoints in bounds
for (const point of snapPoints) {
    const { x, z } = point.Position;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minZ = Math.min(minZ, z);
    maxZ = Math.max(maxZ, z);
}

// Include VectorLines in bounds
for (const line of vectorLines) {
    for (const point of line.points3) {
        const { x, z } = point;
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minZ = Math.min(minZ, z);
        maxZ = Math.max(maxZ, z);
    }
}

// Add some padding to bounds to represent the board edges
// TTS coordinates usually center at 0,0. The board size is likely slightly larger than the extreme points.
const padding = 1.0; // Estimate
minX -= padding;
maxX += padding;
minZ -= padding;
maxZ += padding;

console.log('📐 Board Boundaries (including padding):');
console.log(`   X: ${minX.toFixed(2)} to ${maxX.toFixed(2)} (Width: ${(maxX - minX).toFixed(2)})`);
console.log(`   Z: ${minZ.toFixed(2)} to ${maxZ.toFixed(2)} (Height: ${(maxZ - minZ).toFixed(2)})`);
console.log('');

// Helper to convert TTS coord to CSS percent
function toPercent(x, z) {
    // In TTS, X is usually Left/Right (inverted?) and Z is Top/Bottom
    // Let's assume:
    // X: minX (Left 0%) -> maxX (Right 100%)
    // Z: minZ (Top 0%) -> maxZ (Bottom 100%) - TTS Z increases downwards usually

    // Check orientation based on user image
    // Policies (1-5) are Top Left.
    // In JSON, we saw VectorLines at X ~ -32, Z ~ -20.
    // If minX is -33 and minZ is -24.
    // Then (-32, -20) is close to (0,0).
    // So MinX = Left, MinZ = Top.

    const left = ((x - minX) / (maxX - minX)) * 100;
    const top = ((z - minZ) / (maxZ - minZ)) * 100;

    return { left, top };
}

// Process VectorLines into Zones
const zones = vectorLines.map((line, index) => {
    // Calculate bounding box of the line loop
    let lMinX = Infinity, lMaxX = -Infinity;
    let lMinZ = Infinity, lMaxZ = -Infinity;

    for (const point of line.points3) {
        lMinX = Math.min(lMinX, point.x);
        lMaxX = Math.max(lMaxX, point.x);
        lMinZ = Math.min(lMinZ, point.z);
        lMaxZ = Math.max(lMaxZ, point.z);
    }

    // Convert to CSS
    const topLeft = toPercent(lMinX, lMinZ);
    const bottomRight = toPercent(lMaxX, lMaxZ);

    return {
        id: `zone_${index}`,
        css: {
            left: `${topLeft.left.toFixed(2)}%`,
            top: `${topLeft.top.toFixed(2)}%`,
            width: `${(bottomRight.left - topLeft.left).toFixed(2)}%`,
            height: `${(bottomRight.top - topLeft.top).toFixed(2)}%`
        },
        center: {
            x: (lMinX + lMaxX) / 2,
            z: (lMinZ + lMaxZ) / 2
        },
        originalBounds: { lMinX, lMaxX, lMinZ, lMaxZ }
    };
});

// Filter out tiny zones (noise) or huge zones (borders)
const validZones = zones.filter(z => {
    const w = parseFloat(z.css.width);
    const h = parseFloat(z.css.height);
    return w > 1 && h > 1 && w < 95 && h < 95;
});

console.log(`🎯 Identified ${validZones.length} valid rectangular zones from VectorLines\n`);

// Sort by position (Top to Bottom, Left to Right) to help identification
validZones.sort((a, b) => {
    const topA = parseFloat(a.css.top);
    const topB = parseFloat(b.css.top);
    if (Math.abs(topA - topB) > 5) return topA - topB;
    return parseFloat(a.css.left) - parseFloat(b.css.left);
});

console.log('📊 Detected Zones (CSS Coordinates):');
validZones.forEach((z, i) => {
    console.log(`${i + 1}. Left: ${z.css.left}, Top: ${z.css.top}, W: ${z.css.width}, H: ${z.css.height}`);
});

// Save detailed report
const report = {
    bounds: { minX, maxX, minZ, maxZ },
    zones: validZones
};

fs.writeFileSync('./vector_zones.json', JSON.stringify(report, null, 2));
console.log('\n✅ Analysis saved to: vector_zones.json');

#!/usr/bin/env node
/**
 * Audit assets directory to find all images and compare with materialData.js usage
 */

const fs = require('fs');
const path = require('path');

const assetsDir = './hegemony_web_site_v1/src/assets/images';
const materialDataPath = './hegemony_web_site_v1/src/constants/materialData.js';

// Recursively find all image files
function findImages(dir, baseDir = dir) {
    let images = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            images = images.concat(findImages(fullPath, baseDir));
        } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(item) && !item.includes('Zone.Identifier')) {
            const relativePath = path.relative(baseDir, fullPath);
            images.push({
                name: item,
                path: relativePath,
                category: relativePath.split(path.sep)[0],
                subcategory: relativePath.split(path.sep)[1],
                fullPath: fullPath
            });
        }
    }

    return images;
}

console.log('🔍 Scanning assets directory...\n');
const allImages = findImages(assetsDir);

// Read materialData.js to see what's being used
const materialDataContent = fs.readFileSync(materialDataPath, 'utf-8');

console.log(`Found ${allImages.length} total images\n`);
console.log('='
    .repeat(80));

// Group by category
const byCategory = {};
for (const img of allImages) {
    const cat = img.category;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(img);
}

// Check which images are referenced in materialData
const unused = [];
const used = [];

for (const img of allImages) {
    const simpleName = img.name.replace(/\.(jpg|png|gif|webp|svg)$/i, '');
    const isUsed = materialDataContent.includes(img.name) ||
        materialDataContent.includes(simpleName) ||
        materialDataContent.includes(img.path);

    if (isUsed) {
        used.push(img);
    } else {
        unused.push(img);
    }
}

console.log(`\n📊 Usage Statistics:`);
console.log(`   ✅ Used: ${used.length}`);
console.log(`   ❌ Unused: ${unused.length}`);

console.log(`\n${'='.repeat(80)}`);
console.log(`\n❌ UNUSED IMAGES (${unused.length}):\n`);

const unusedByCategory = {};
for (const img of unused) {
    const cat = img.category;
    if (!unusedByCategory[cat]) unusedByCategory[cat] = [];
    unusedByCategory[cat].push(img);
}

for (const [category, images] of Object.entries(unusedByCategory).sort()) {
    console.log(`\n📁 ${category.toUpperCase()} (${images.length} images):`);
    for (const img of images) {
        console.log(`   - ${img.path}`);
    }
}

// Save detailed report
const report = {
    totalImages: allImages.length,
    used: used.length,
    unused: unused.length,
    unusedImages: unused.map(img => ({
        name: img.name,
        path: img.path,
        category: img.category
    })),
    usedImages: used.map(img => ({
        name: img.name,
        path: img.path,
        category: img.category
    }))
};

fs.writeFileSync('./asset_audit_report.json', JSON.stringify(report, null, 2));
console.log(`\n${'='.repeat(80)}`);
console.log(`\n📝 Full report saved to: asset_audit_report.json`);

#!/usr/bin/env node
/**
 * Extract unique card deck URLs from Tabletop Simulator JSON
 */

const fs = require('fs');
const path = require('path');

const jsonPath = process.argv[2] || './workshop_steam/2902422467.json';

console.log(`Reading JSON file: ${jsonPath}`);
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

const decks = new Map();

// Recursive function to find CustomDeck entries
function findCustomDecks(obj, path = '') {
    if (!obj || typeof obj !== 'object') return;

    if (obj.CustomDeck && typeof obj.CustomDeck === 'object') {
        for (const [id, deck] of Object.entries(obj.CustomDeck)) {
            if (deck.FaceURL) {
                const key = `${deck.FaceURL}|${deck.BackURL || 'no-back'}`;
                if (!decks.has(key)) {
                    decks.set(key, {
                        id,
                        faceUrl: deck.FaceURL,
                        backUrl: deck.BackURL || null,
                        numWidth: deck.NumWidth,
                        numHeight: deck.NumHeight,
                        totalCards: deck.NumWidth * deck.NumHeight,
                        path
                    });
                }
            }
        }
    }

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            findCustomDecks(value, `${path}/${key}`);
        }
    }
}

findCustomDecks(data);

console.log(`\nFound ${decks.size} unique card decks:\n`);
console.log('='.repeat(80));

let index = 1;
for (const deck of decks.values()) {
    console.log(`\n${index}. Deck ID: ${deck.id}`);
    console.log(`   Grid: ${deck.numWidth}x${deck.numHeight} (${deck.totalCards} cards)`);
    console.log(`   Face: ${deck.faceUrl}`);
    console.log(`   Back: ${deck.backUrl || 'NONE'}`);
    index++;
}

// Save to JSON file for easy processing
const outputPath = path.join(path.dirname(jsonPath), 'extracted_decks.json');
const deckArray = Array.from(decks.values());
fs.writeFileSync(outputPath, JSON.stringify(deckArray, null, 2));
console.log(`\n${'='.repeat(80)}`);
console.log(`\nSaved deck information to: ${outputPath}`);
console.log(`Total unique decks: ${deckArray.length}`);

import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const jsonPath = '/home/joterret/hegemony/steam_workshop/2902422467.json';
const rawData = fs.readFileSync(jsonPath);
const data = JSON.parse(rawData);

const assets = {
    decks: [],
    images: []
};

function traverse(obj) {
    if (!obj || typeof obj !== 'object') return;

    // Check for CustomDeck
    if (obj.CustomDeck) {
        Object.values(obj.CustomDeck).forEach(deck => {
            if (deck.FaceURL && !assets.decks.find(d => d.url === deck.FaceURL)) {
                assets.decks.push({
                    url: deck.FaceURL,
                    backUrl: deck.BackURL,
                    width: deck.NumWidth,
                    height: deck.NumHeight
                });
            }
        });
    }

    // Check for CustomImage
    if (obj.CustomImage && obj.CustomImage.ImageURL) {
        if (!assets.images.find(i => i.url === obj.CustomImage.ImageURL)) {
            assets.images.push({
                url: obj.CustomImage.ImageURL,
                name: obj.Nickname || obj.Name || 'Unknown',
                description: obj.Description || ''
            });
        }
    }

    // Recursive traversal
    if (Array.isArray(obj)) {
        obj.forEach(item => traverse(item));
    } else {
        Object.keys(obj).forEach(key => traverse(obj[key]));
    }
}

traverse(data.ObjectStates);

console.log('Found Decks:', assets.decks.length);
console.log('Found Images:', assets.images.length);

// Write to file
fs.writeFileSync('/home/joterret/hegemony/extracted_assets.json', JSON.stringify(assets, null, 2));
console.log('Assets saved to extracted_assets.json');

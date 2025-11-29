import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKSHOP_JSON_PATH = path.join(__dirname, 'steam_workshop', '2902422467.json');
const SOURCE_IMAGES_DIR = path.join(__dirname, 'steam_workshop', 'Mods', 'Images');
const DEST_BASE = path.join(__dirname, 'src', 'assets', 'images', 'tts');

// Ensure directories exist
const CATEGORIES = ['boards', 'cards', 'tokens', 'player_aids', 'misc'];
CATEGORIES.forEach(dir => {
    const fullPath = path.join(DEST_BASE, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
});

// Helper to extract ID and Hash from URL
const extractIdAndHash = (url) => {
    if (!url) return null;
    // Pattern: /ugc/<ID>/<HASH>/
    const match = url.match(/\/ugc\/(\d+)\/([A-Fa-f0-9]+)\/?/);
    if (match) {
        return { id: match[1], hash: match[2] };
    }
    return null;
};

// Map of "ID+Hash" -> Filename
const fileMap = new Map();
if (fs.existsSync(SOURCE_IMAGES_DIR)) {
    const files = fs.readdirSync(SOURCE_IMAGES_DIR);
    files.forEach(file => {
        // Filename usually contains ID followed by Hash
        // We can't easily regex the filename because the prefix varies.
        // But we can store the filename and search it later.
        // Or better: Pre-process filenames to find ID+Hash sequences?
        // No, let's just iterate. There are only ~300 files.
    });
}

const findLocalFile = (url) => {
    if (!url) return null;

    const parts = extractIdAndHash(url);
    if (!parts) return null;

    const searchString = `${parts.id}${parts.hash}`;

    const files = fs.readdirSync(SOURCE_IMAGES_DIR);
    for (const file of files) {
        // Case insensitive check
        if (file.toLowerCase().includes(searchString.toLowerCase())) {
            return file;
        }
    }
    return null;
};

const processObject = (obj, inventory) => {
    const guid = obj.GUID || Math.random().toString(36).substring(7);

    // 1. CustomDeck (Card Sheets)
    if (obj.CustomDeck) {
        Object.values(obj.CustomDeck).forEach(deck => {
            inventory.cards.push({
                name: obj.Nickname || 'Unknown_Deck',
                url: deck.FaceURL,
                backUrl: deck.BackURL,
                type: 'deck',
                guid: guid
            });
        });
    }

    // 2. CustomImage (Tokens, Boards, etc.)
    if (obj.CustomImage) {
        let category = 'misc';
        const name = obj.Nickname || obj.Name || 'Unknown_Image';
        const lowerName = name.toLowerCase();

        if (lowerName.includes('board') || lowerName.includes('plateau') || lowerName.includes('map')) category = 'boards';
        else if (lowerName.includes('token') || lowerName.includes('jeton') || lowerName.includes('coin') || lowerName.includes('money')) category = 'tokens';
        else if (lowerName.includes('aide') || lowerName.includes('guide') || lowerName.includes('ref')) category = 'player_aids';

        inventory[category].push({
            name: name,
            url: obj.CustomImage.ImageURL,
            secondaryUrl: obj.CustomImage.ImageSecondaryURL,
            type: 'image',
            guid: guid
        });
    }

    // Recursion
    if (obj.ObjectStates) {
        obj.ObjectStates.forEach(child => processObject(child, inventory));
    }
};

const main = () => {
    console.log('Reading JSON...');
    const rawData = fs.readFileSync(WORKSHOP_JSON_PATH);
    const data = JSON.parse(rawData);

    const inventory = {
        boards: [],
        cards: [],
        tokens: [],
        player_aids: [],
        misc: []
    };

    console.log('Processing objects...');
    data.ObjectStates.forEach(obj => processObject(obj, inventory));

    console.log('Copying files...');
    let copyCount = 0;

    Object.entries(inventory).forEach(([category, items]) => {
        items.forEach(item => {
            // Process Face/Main URL
            const processUrl = (url, suffix = '') => {
                if (!url) return;
                const localFile = findLocalFile(url);
                if (localFile) {
                    const ext = path.extname(localFile);
                    // Sanitize name for filename
                    const safeName = item.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
                    // Use GUID to ensure uniqueness
                    const destName = `${safeName}_${item.guid}${suffix}${ext}`;
                    const destPath = path.join(DEST_BASE, category, destName);

                    if (!fs.existsSync(destPath)) {
                        fs.copyFileSync(path.join(SOURCE_IMAGES_DIR, localFile), destPath);
                        copyCount++;
                        console.log(`[${category}] Copied ${item.name} -> ${destName}`);
                    }
                }
            };

            processUrl(item.url);
            processUrl(item.backUrl, '_back');
            processUrl(item.secondaryUrl, '_back');
        });
    });

    console.log(`Done! Copied ${copyCount} files.`);
};

main();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_BASE = path.join(__dirname, 'src', 'assets', 'images', 'tts');
const DEST_BASE = path.join(__dirname, 'src', 'assets', 'images');

const moves = [
    // Boards
    { src: 'boards/labor_board.png', dest: 'classes/working/board.png' },
    { src: 'boards/middleclass_board.png', dest: 'classes/middle/board.png' },
    { src: 'boards/capitalist_board.png', dest: 'classes/capitalist/board.png' },
    { src: 'boards/state_board.png', dest: 'classes/state/board.png' },
    { src: 'boards/main_board.jpg', dest: 'board/main_board.jpg' },

    // Currency
    { src: 'tokens/money_1.png', dest: 'common/currency/coin_1.png' },
    { src: 'tokens/money_5.png', dest: 'common/currency/coin_5.png' },
    { src: 'tokens/money_10.png', dest: 'common/currency/coin_10.png' },
    { src: 'tokens/money_20.png', dest: 'common/currency/coin_20.png' },
    { src: 'tokens/money_50.png', dest: 'common/currency/coin_50.png' },
    { src: 'tokens/money_100.png', dest: 'common/currency/coin_100.png' },

    // Resources
    { src: 'resources/food_1.png', dest: 'common/resources/food/food_1.png' },
    { src: 'resources/food_3.png', dest: 'common/resources/food/food_3.png' },
    { src: 'resources/food_5.png', dest: 'common/resources/food/food_5.png' },
    { src: 'resources/luxe_1.png', dest: 'common/resources/luxury/luxury_1.png' },
    { src: 'resources/luxe_3.png', dest: 'common/resources/luxury/luxury_3.png' },
    { src: 'resources/luxe_5.png', dest: 'common/resources/luxury/luxury_5.png' },
    { src: 'resources/sante_1.png', dest: 'common/resources/health/health_1.png' },
    { src: 'resources/sante_3.png', dest: 'common/resources/health/health_3.png' },
    { src: 'resources/sante_5.png', dest: 'common/resources/health/health_5.png' },
    { src: 'resources/education_1.png', dest: 'common/resources/education/education_1.png' },
    { src: 'resources/education_3.png', dest: 'common/resources/education/education_3.png' },
    { src: 'resources/education_5.png', dest: 'common/resources/education/education_5.png' },

    // Tokens
    { src: 'tokens/strike.png', dest: 'classes/working/tokens/strike.png' },
    { src: 'tokens/machinery.jpg', dest: 'common/tokens/machinery.jpg' },
    { src: 'tokens/free_trade.png', dest: 'common/tokens/free_trade.png' },
    { src: 'tokens/storage.png', dest: 'common/tokens/storage.png' },

    // Roles (if they exist in tts/roles/...) - skipping for now as we know they are missing or elsewhere
];

moves.forEach(({ src, dest }) => {
    const srcPath = path.join(SRC_BASE, src);
    const destPath = path.join(DEST_BASE, dest);

    if (fs.existsSync(srcPath)) {
        fs.renameSync(srcPath, destPath);
        console.log(`Moved: ${src} -> ${dest}`);
    } else {
        console.warn(`Source not found: ${src}`);
    }
});

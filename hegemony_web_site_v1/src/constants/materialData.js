// Remote Assets from Tabletop Simulator
// TTS Assets
import token1 from '@/assets/images/common/currency/coin_1.png';
import token5 from '@/assets/images/common/currency/coin_5.png';
import token10 from '@/assets/images/common/currency/coin_10.png';
import token20 from '@/assets/images/common/currency/coin_20.png';
import token50 from '@/assets/images/common/currency/coin_50.png';
import token100 from '@/assets/images/common/currency/coin_100.png';
import strikeToken from '@/assets/images/classes/working/tokens/strike.png';
import machineryToken from '@/assets/images/common/tokens/machinery.jpg';
import freeTradeToken from '@/assets/images/common/tokens/free_trade.png';
import storageToken from '@/assets/images/common/tokens/storage.png';

// Class Logos
import workerLogo from '@/assets/images/classes/working/worker_logo.png';
import middleLogo from '@/assets/images/classes/middle/middle_class_logo.png';
import capitalistLogo from '@/assets/images/classes/capitalist/capitalist_logo.png';

export const ASSETS = {
    tokens: {
        1: token1,
        5: token5,
        10: token10,
        20: token20,
        50: token50,
        100: token100,
        strike: strikeToken,
        machinery: machineryToken,
        freeTrade: freeTradeToken,
        storage: storageToken
    },
    // Keep existing local imports for items not found in JSON or where local is preferred
    local: {
        food1: '@/assets/images/common/resources/food/food_1.png',
        food3: '@/assets/images/common/resources/food/food_3.png',
        food5: '@/assets/images/common/resources/food/food_5.png',
        luxe1: '@/assets/images/common/resources/luxury/luxury_1.png',
        luxe3: '@/assets/images/common/resources/luxury/luxury_3.png',
        luxe5: '@/assets/images/common/resources/luxury/luxury_5.png',
        health1: '@/assets/images/common/resources/health/health_1.png',
        health3: '@/assets/images/common/resources/health/health_3.png',
        health5: '@/assets/images/common/resources/health/health_5.png',
        education1: '@/assets/images/common/resources/education/education_1.png',
        education3: '@/assets/images/common/resources/education/education_3.png',
        education5: '@/assets/images/common/resources/education/education_5.png',
        boardMiddle: '@/assets/images/classes/middle/board.png',
        boardCapitalist: '@/assets/images/classes/capitalist/board.png',
        boardState: '@/assets/images/classes/state/board.png',
        boardWorker: '@/assets/images/classes/working/board.png',
        // Pawns (using logos as placeholders)
        pawnMiddle: middleLogo,
        pawnCapitalist: capitalistLogo,
        pawnState: null, // Missing logo
        pawnWorker: workerLogo,
        // Actions
        actionBackWorker: '@/assets/images/classes/working/cards/class_worker_back.png',
        cooperativeFarm: null, // Still missing
        actionBackMiddle: '@/assets/images/classes/middle/cards/class_middle__back.png',
        enterpriseMiddle: '@/assets/images/classes/middle/cards/middle_class_company.png',
        actionBackCapitalist: '@/assets/images/classes/capitalist/cards/class_capitalist_back.png',
        enterpriseCapitalist: '@/assets/images/classes/capitalist/cards/capitalist_company.png',
        actionBackState: '@/assets/images/classes/state/cards/class_state_back.png',
        enterpriseState: '@/assets/images/classes/state/cards/state_company.png',
        legitimacyCapitalist: '@/assets/images/classes/state/legitimacy/capitalis_legitimity.png',
        legitimacyWorker: '@/assets/images/classes/state/legitimacy/labor_legitimity.png',
        legitimacyMiddle: '@/assets/images/classes/state/legitimacy/middle_class_legitimity.png',
        demonstration: '@/assets/images/classes/working/tokens/manifestation.png',
        strike: '@/assets/images/classes/working/tokens/strike.png',
        // Action cards placeholders
        midAction1: null,
        midAction2: null,
        midAction3: null,
        midAction4: null,
        midAction5: null,
        midAction6: null,
        midAction7: null,
        midAction8: null,
        midAction9: null,
        midAction10: null,
        midAction11: null,
        workAction1: null,
        workAction2: null,
        workAction3: null,
        workAction4: null,
        workAction5: null,
        workAction6: null,
        workAction7: null,
        // New Assets
        exportCards: '@/assets/images/common/cards/export/exports.jpg',
        immigrationCards: '@/assets/images/classes/state/cards/immigration_cards.jpg',
        politicalAgendas: '@/assets/images/classes/state/cards/political_agendas.jpg',
    }
};

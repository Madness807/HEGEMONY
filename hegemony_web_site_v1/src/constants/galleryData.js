// Import existing local images where available
import actionsFace from '@/assets/images/common/cards/unsorted_do_not_touch/actions.jpg';
import businessFace from '@/assets/images/classes/capitalist/cards/business_deals.jpg';
import businessBack from '@/assets/images/classes/capitalist/cards/business_deals_back.png';
import capitalistFace from '@/assets/images/classes/capitalist/cards/capitalist_class_companies.jpg';
import capitalistBack from '@/assets/images/classes/capitalist/cards/capitalist_class_companies_back.png';
import middleFace from '@/assets/images/classes/middle/cards/middle_class_companies.jpg';
import middleBack from '@/assets/images/classes/middle/cards/middle_class_companies_back.png';
import exportsFace from '@/assets/images/common/cards/export/exports.jpg';
import exportsBack from '@/assets/images/common/cards/export/exports_back.png';
import eventsFace from '@/assets/images/common/cards/events/events.jpg';
import eventsBack from '@/assets/images/common/cards/events/events_back_card.png';
import stateActionsFace from '@/assets/images/classes/state/cards/actions_card_state.jpg';
import stateAgendasFace from '@/assets/images/classes/state/cards/agenda politique card.jpg';
import stateAgendasBack from '@/assets/images/classes/state/cards/agendapolitiquecardback.png';

/**
 * Complete card deck gallery data extracted from Steam Workshop mod
 * 14 unique decks from Tabletop Simulator Hegemony mod
 */
export const CARD_SHEETS = [
    // ================== COMMON DECKS ==================
    {
        id: 1,
        name: "Actions Générales",
        category: "common",
        faceUrl: actionsFace,
        backUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788700574/1C07F777D0A0C3C896B3E81502A2E3D546B84841/",
        grid: "10x4",
        count: 40,
        steamDeckId: "118",
        useRemote: true // Using remote for back
    },
    {
        id: 5,
        name: "Exports",
        category: "common",
        faceUrl: exportsFace,
        backUrl: exportsBack,
        grid: "4x4",
        count: 16,
        steamDeckId: "126",
        useRemote: false
    },
    {
        id: 6,
        name: "Immigration",
        category: "common",
        faceUrl: "http://cloud-3.steamusercontent.com/ugc/2005820614936435206/40DEF9AEADAC4264016E269CA8EE3BFB56A66DAD/",
        backUrl: "http://cloud-3.steamusercontent.com/ugc/2005820614936435500/D29DA62E9D202F2173AC403235D5134024817C1C/",
        grid: "5x5",
        count: 25,
        steamDeckId: "127",
        useRemote: true
    },
    {
        id: 12,
        name: "Événements",
        category: "common",
        faceUrl: eventsFace,
        backUrl: eventsBack,
        grid: "5x5",
        count: 25,
        steamDeckId: "125",
        useRemote: false
    },

    // ================== CAPITALIST CLASS ==================
    {
        id: 2,
        name: "Business Deals (Capitalistes)",
        category: "capitalist",
        faceUrl: businessFace,
        backUrl: businessBack,
        grid: "10x2",
        count: 20,
        steamDeckId: "119",
        useRemote: false
    },
    {
        id: 3,
        name: "Entreprises Capitalistes",
        category: "capitalist",
        faceUrl: capitalistFace,
        backUrl: capitalistBack,
        grid: "10x3",
        count: 30,
        steamDeckId: "120",
        useRemote: false
    },

    // ================== MIDDLE CLASS ==================
    {
        id: 4,
        name: "Entreprises Classe Moyenne",
        category: "middle",
        faceUrl: middleFace,
        backUrl: middleBack,
        grid: "10x2",
        count: 20,
        steamDeckId: "121",
        useRemote: false
    },
    {
        id: 10,
        name: "Actions Classe Moyenne",
        category: "middle",
        faceUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788697469/FAE6888B9151A0286AB544882CEA27D47D77BB20/",
        backUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788697656/2A04E773CC4407890174F7AF74DB73F8EACCB021/",
        grid: "10x4",
        count: 40,
        steamDeckId: "116",
        useRemote: true
    },

    // ================== WORKING CLASS ==================
    {
        id: 9,
        name: "Actions Classe Ouvrière",
        category: "working",
        faceUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788695911/0FF0B94231C95F1015BE58522868027F9CE06D95/",
        backUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788696146/3F47A62CBD2E2BF4A244C5E3CB3A8B38A2EF022B/",
        grid: "10x4",
        count: 40,
        steamDeckId: "115",
        useRemote: true
    },

    // ================== STATE ==================
    {
        id: 7,
        name: "Agendas Politiques (État)",
        category: "state",
        faceUrl: stateAgendasFace,
        backUrl: stateAgendasBack,
        grid: "5x2",
        count: 10,
        steamDeckId: "129",
        useRemote: false
    },
    {
        id: 11,
        name: "Actions État",
        category: "state",
        faceUrl: stateActionsFace,
        backUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788699092/9E554D5097CA5A74F168ACE2D4E7822AB580D664/",
        grid: "10x4",
        count: 40,
        steamDeckId: "117",
        useRemote: true // Using remote for back
    },

    // ================== SPECIAL / UNKNOWN ==================
    {
        id: 8,
        name: "Deck Spécial",
        category: "special",
        faceUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788780122/8504F35FFF26C6025699D98FD695E0A750620583/",
        backUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788780361/923B839D1EF4DE59F5BED82D0E528E444F54BFE5/",
        grid: "6x2",
        count: 12,
        steamDeckId: "122",
        useRemote: true
    },
    {
        id: 13,
        name: "Carte Spéciale A",
        category: "special",
        faceUrl: "http://cloud-3.steamusercontent.com/ugc/2005820614936441737/631F8F876BB5CBE2A2CD596D7B5D5F4E27CFF59F/",
        backUrl: "http://cloud-3.steamusercontent.com/ugc/2005820614936441389/318A431997AC6957E1B18B012CF289AF55F80395/",
        grid: "1x1",
        count: 1,
        steamDeckId: "128",
        useRemote: true
    },
    {
        id: 14,
        name: "Carte Spéciale B",
        category: "special",
        faceUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788781690/AAD7324B0FEDF229797A7ADB2855406C68B4F20B/",
        backUrl: "http://cloud-3.steamusercontent.com/ugc/1957405421788781983/7499CC80AF487B7FE9996FAB4D5605DF6367DAF7/",
        grid: "1x1",
        count: 1,
        steamDeckId: "123",
        useRemote: true
    }
];

// Category labels for UI grouping
export const CATEGORIES = {
    common: { label: "Commun", color: "slate", icon: "🎴" },
    capitalist: { label: "Classe Capitaliste", color: "yellow", icon: "💼" },
    middle: { label: "Classe Moyenne", color: "blue", icon: "🏢" },
    working: { label: "Classe Ouvrière", color: "red", icon: "⚒️" },
    state: { label: "État", color: "purple", icon: "🏛️" },
    special: { label: "Spécial", color: "pink", icon: "⭐" }
};

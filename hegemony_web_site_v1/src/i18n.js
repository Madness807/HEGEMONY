import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enGame from './locales/en/game.json';
import frCommon from './locales/fr/common.json';
import frGame from './locales/fr/game.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: enCommon,
                game: enGame,
            },
            fr: {
                common: frCommon,
                game: frGame,
            },
        },
        lng: 'en', // Force default language to English
        fallbackLng: 'en',
        defaultNS: 'common',
        ns: ['common', 'game'],

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

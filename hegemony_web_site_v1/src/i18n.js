import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enGame from './locales/en/game.json';
import enShop from './locales/en/shop.json';
import enFaq from './locales/en/faq.json';
import enTax from './locales/en/tax.json';

import frCommon from './locales/fr/common.json';
import frGame from './locales/fr/game.json';
import frShop from './locales/fr/shop.json';
import frFaq from './locales/fr/faq.json';
import frTax from './locales/fr/tax.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: enCommon,
                game: enGame,
                shop: enShop,
                faq: enFaq,
                tax: enTax
            },
            fr: {
                common: frCommon,
                game: frGame,
                shop: frShop,
                faq: frFaq,
                tax: frTax
            },
        },
        lng: 'en', // Force default language to English
        fallbackLng: 'en',
        defaultNS: 'common',
        ns: ['common', 'game', 'shop', 'faq', 'tax'],

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

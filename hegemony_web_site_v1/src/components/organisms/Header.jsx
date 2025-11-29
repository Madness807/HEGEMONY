import React from 'react';
import { Scale, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = ({ numPlayers, currentRound }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="p-4 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 glass-effect">
            <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 flex-shrink-0">
                    <Scale className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-1 md:mb-2 drop-shadow-lg">HEGEMONY</h1>
                    <p className="text-sm md:text-lg font-medium text-muted-foreground tracking-widest uppercase drop-shadow-md">Game Assistant</p>
                </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto justify-center md:justify-end items-center">
                <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 glass-inner hover:bg-white/10 text-foreground rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                    title="Change language / Changer de langue"
                >
                    <Globe className="w-4 h-4" />
                    {t('language.code', { ns: 'common' })}
                </button>
                <div className="px-4 py-2 glass-inner-dark text-blue-100 rounded-lg font-bold text-sm">
                    {numPlayers} {t('header.players', { ns: 'common' })}
                </div>
                <div className="px-4 py-2 glass-inner-dark text-purple-100 rounded-lg font-bold text-sm">
                    {t('header.round', { ns: 'common' })} {currentRound}
                </div>
            </div>
        </div>
    );
};

export default Header;

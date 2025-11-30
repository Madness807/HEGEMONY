
import React from 'react';
import {
    Scale,
    Globe,
    Menu,
    X,
    Home,
    Play,
    BookOpen,
    Palette,
    Factory,
    Users,
    Calculator
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGame } from '../../context/GameContext';
import { useGameData } from '../../hooks/useGameData';

// Map string names to components for dynamic rendering
const IconMap = {
    Scale,
    Globe,
    Menu,
    X,
    Home,
    Play,
    BookOpen,
    Palette,
    Factory,
    Users,
    Calculator
};

const Header = () => {
    const { t, i18n } = useTranslation();
    const { activeTab, setActiveTab } = useGame();
    const { TABS } = useGameData();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setIsMenuOpen(false);
    };

    return (
        <header className="p-4 md:p-6 rounded-3xl flex flex-col xl:flex-row items-center justify-between gap-4 md:gap-6 glass-effect relative overflow-visible z-50">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {/* Mobile Header Top Row */}
            <div className="w-full flex items-center justify-between xl:w-auto z-20">
                {/* Left: Logo & Title */}
                <div className="flex items-center gap-3 md:gap-6">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-foreground rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 flex-shrink-0 border border-white/10">
                        <Scale className="w-6 h-6 md:w-10 md:h-10 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-0.5 md:mb-2 drop-shadow-lg">HEGEMONY</h1>
                        <p className="text-xxs md:text-base font-medium text-primary/80 tracking-widest uppercase drop-shadow-md">Game Assistant</p>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="xl:hidden p-2 text-foreground hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex flex-1 justify-center w-full xl:w-auto z-10">
                <nav className="flex items-center gap-2 bg-background-dark/80 p-2 rounded-2xl border border-border shadow-xl backdrop-blur-md">
                    {TABS.map(tab => {
                        const Icon = IconMap[tab.icon] || Home; // Fallback to Home if icon not found
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-base transition-all duration-300 whitespace-nowrap ${isActive
                                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {tab.name}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 glass-effect rounded-2xl xl:hidden flex flex-col gap-2 z-50 animate-fade-in shadow-2xl border border-border bg-background-dark">
                    {TABS.map(tab => {
                        const Icon = IconMap[tab.icon] || Home;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-base transition-all duration-300 w-full ${isActive
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {tab.name}
                            </button>
                        );
                    })}
                    <div className="h-px bg-white/10 my-2" />
                    <button
                        onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-base text-muted-foreground hover:text-foreground hover:bg-white/5 w-full"
                    >
                        <Globe className="w-5 h-5" />
                        {i18n.language === 'en' ? 'Français' : 'English'}
                    </button>
                </div>
            )}

            {/* Desktop Language Toggle */}
            <div className="hidden xl:flex gap-3 w-full xl:w-auto justify-center xl:justify-end items-center z-10">
                <button
                    onClick={toggleLanguage}
                    className="p-3 glass-inner hover:bg-white/10 text-muted-foreground rounded-xl transition-all border border-white/5 hover:border-white/20"
                    title="Change language / Changer de langue"
                >
                    <Globe className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};

export default Header;


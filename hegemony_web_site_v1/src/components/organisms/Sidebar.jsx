import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGameData } from '../../hooks/useGameData';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { t } = useTranslation();
    const { TABS } = useGameData();

    const handleTabClick = (id) => {
        setActiveTab(id);
        setIsMobileOpen(false);
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar Content */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 backdrop-blur-md bg-background/40 border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:bg-transparent lg:border-none lg:w-64 flex-shrink-0
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-4 h-full overflow-y-auto lg:sticky lg:top-8">
                    <div className="flex items-center justify-between mb-6 lg:hidden">
                        <h2 className="text-xl font-bold text-foreground">{t('navigation.menu', { ns: 'common' })}</h2>
                        <button onClick={() => setIsMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="space-y-2">
                        {TABS.map(tab => {
                            const Icon = Icons[tab.icon];
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabClick(tab.id)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-prata text-lg transition-all duration-300 ${isActive
                                        ? 'text-primary-foreground shadow-lg lg:transform lg:scale-105'
                                        : 'text-muted-foreground hover:bg-white/10 hover:text-foreground hover:backdrop-blur-sm'
                                        }`}
                                    style={isActive ? { backgroundColor: 'hsl(var(--primary))' } : {}}
                                >
                                    <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : ''}`} />
                                    {tab.name}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;

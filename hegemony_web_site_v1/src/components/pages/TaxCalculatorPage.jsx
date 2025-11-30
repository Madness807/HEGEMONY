import React from 'react';
import { Calculator, Scale, Users, Building2, Factory } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ClassReference from '../atoms/ClassReference';
import TaxMultiplierTrack from '../molecules/TaxMultiplierTrack';

import { useGame } from '../../context/GameContext';
import { useTranslation } from 'react-i18next';

const TaxCalculatorPage = ({ fiscalMultiplier, taxes }) => {
    const { numPlayers, policies, players, updatePlayerStat } = useGame();
    const { t } = useTranslation('tax');

    return (
        <div className="space-y-4 animate-fade-in w-full mx-auto">


            {/* Compact Info Bar */}
            <div className="bg-card py-2 px-4 rounded-lg border border-border flex flex-col md:flex-row justify-center gap-2 md:gap-6 text-sm md:text-base text-center">
                <span className="text-muted-foreground">{t('labels.taxation')}: <span className="font-bold text-foreground">{policies.taxation}</span></span>
                <span className="text-muted-foreground">{t('labels.health')}: <span className="font-bold text-foreground">{policies.healthWelfare}</span></span>
                <span className="text-muted-foreground">{t('labels.education')}: <span className="font-bold text-foreground">{policies.education}</span></span>
            </div>

            {numPlayers >= 2 && (
                <div className="bg-card rounded-xl border-t-4 border-class-working relative overflow-hidden shadow-xl">
                    <div className="p-4 flex items-center gap-6">
                        {/* Header Section - Logo Only */}
                        <div className="flex flex-col items-center min-w-[80px]">
                            <div className="relative">
                                <Users className="w-12 h-12 text-muted absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
                                <ClassReference type="working" size="h-14 w-14 relative z-10" showLabel={false} />
                            </div>
                        </div>

                        {/* Inputs & Stats Grid */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                            {/* Input */}
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t('labels.population')}</span>
                                <input
                                    type="number"
                                    id="working-population"
                                    aria-label={t('aria.workingPop')}
                                    value={players.working.population}
                                    onChange={(e) => updatePlayerStat('working', 'population', parseInt(e.target.value) || 0)}
                                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-center font-bold text-foreground focus:ring-2 focus:ring-class-working outline-none text-lg transition-all"
                                />
                            </div>

                            {/* Tax Detail */}
                            <div className="flex flex-col gap-1 items-center bg-muted rounded-lg p-3 border border-border">
                                <span className="text-xs font-bold text-class-working/80 uppercase tracking-widest">{t('labels.incomeTax')}</span>
                                <span className="font-black text-class-working text-xl">{taxes.working.income}Ꝟ</span>
                            </div>

                            {/* Total */}
                            <div className="flex flex-col gap-1 items-center bg-class-working rounded-lg p-3 shadow-lg border border-class-working/30 transform transition-transform hover:scale-105">
                                <span className="text-xs font-black text-white/90 uppercase tracking-widest">{t('labels.totalToPay')}</span>
                                <span className="text-2xl font-black text-white">{taxes.working.total}Ꝟ</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {numPlayers >= 3 && (
                <div className="bg-card rounded-xl border-t-4 border-class-middle relative overflow-hidden shadow-xl">
                    <div className="p-4 flex items-center gap-6">
                        {/* Header Section - Logo Only */}
                        <div className="flex flex-col items-center min-w-[80px]">
                            <div className="relative">
                                <Building2 className="w-12 h-12 text-muted absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
                                <ClassReference type="middle" size="h-14 w-14 relative z-10" showLabel={false} />
                            </div>
                        </div>

                        {/* Inputs & Stats Grid */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                            {/* Inputs */}
                            <div className="col-span-1 md:col-span-3 flex flex-row md:flex-col gap-3">
                                <div className="flex-1 flex justify-between items-center gap-2">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest w-8">{t('labels.pop')}</span>
                                    <input
                                        type="number"
                                        id="middle-population"
                                        aria-label={t('aria.middlePop')}
                                        value={players.middle.population}
                                        onChange={(e) => updatePlayerStat('middle', 'population', parseInt(e.target.value) || 0)}
                                        className="w-full px-2 py-1.5 bg-input border border-border rounded text-center font-bold text-foreground focus:ring-2 focus:ring-class-middle outline-none text-sm transition-all"
                                    />
                                </div>
                                <div className="flex-1 flex justify-between items-center gap-2">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest w-8">{t('labels.companies')}</span>
                                    <input
                                        type="number"
                                        id="middle-businesses"
                                        aria-label={t('aria.middleBiz')}
                                        value={players.middle.businesses}
                                        onChange={(e) => updatePlayerStat('middle', 'businesses', parseInt(e.target.value) || 0)}
                                        className="w-full px-2 py-1.5 bg-input border border-border rounded text-center font-bold text-foreground focus:ring-2 focus:ring-class-middle outline-none text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Tax Details */}
                            <div className="col-span-1 md:col-span-5 grid grid-cols-2 gap-3">
                                <div className="flex flex-col items-center bg-muted rounded-lg p-2 border border-border">
                                    <span className="text-xs font-bold text-class-middle/80 uppercase text-center tracking-widest">{t('labels.incomeTaxShort')}</span>
                                    <span className="font-black text-class-middle text-lg">{taxes.middle.income}Ꝟ</span>
                                </div>
                                <div className="flex flex-col items-center bg-muted rounded-lg p-2 border border-border">
                                    <span className="text-xxs font-bold text-class-middle/80 uppercase text-center tracking-widest">{t('labels.employerCost')}</span>
                                    <span className="font-black text-class-middle text-lg">{taxes.middle.patronal}Ꝟ</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="col-span-1 md:col-span-4 flex flex-col gap-1 items-center justify-center bg-class-middle rounded-lg p-3 shadow-lg border border-class-middle/30 h-full transform transition-transform hover:scale-105">
                                <span className="text-xxs font-black text-white/90 uppercase tracking-widest">{t('labels.totalToPay')}</span>
                                <span className="text-2xl font-black text-white">{taxes.middle.total}Ꝟ</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {numPlayers >= 2 && (
                <div className="bg-card rounded-xl border-t-4 border-class-capitalist relative overflow-hidden shadow-xl">
                    <div className="p-4 flex items-center gap-6">
                        {/* Header Section - Logo Only */}
                        <div className="flex flex-col items-center min-w-[80px]">
                            <div className="relative">
                                <Factory className="w-12 h-12 text-muted absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
                                <ClassReference type="capitalist" size="h-14 w-14 relative z-10" showLabel={false} />
                            </div>
                        </div>

                        {/* Inputs & Stats Grid */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                            {/* Inputs */}
                            <div className="col-span-1 md:col-span-3 flex flex-row md:flex-col gap-3">
                                <div className="flex-1 flex justify-between items-center gap-2">
                                    <span className="text-xxs font-bold text-muted-foreground uppercase tracking-widest w-8">{t('labels.revenue')}</span>
                                    <input
                                        type="number"
                                        id="capitalist-revenue"
                                        aria-label={t('aria.capRevenue')}
                                        value={players.capitalist.revenue}
                                        onChange={(e) => updatePlayerStat('capitalist', 'revenue', parseInt(e.target.value) || 0)}
                                        className="w-full px-2 py-1.5 bg-input border border-border rounded text-center font-bold text-foreground focus:ring-2 focus:ring-class-capitalist outline-none text-sm transition-all"
                                    />
                                </div>
                                <div className="flex-1 flex justify-between items-center gap-2">
                                    <span className="text-xxs font-bold text-muted-foreground uppercase tracking-widest w-8">{t('labels.companies')}</span>
                                    <input
                                        type="number"
                                        id="capitalist-businesses"
                                        aria-label={t('aria.capBiz')}
                                        value={players.capitalist.businesses}
                                        onChange={(e) => updatePlayerStat('capitalist', 'businesses', parseInt(e.target.value) || 0)}
                                        className="w-full px-2 py-1.5 bg-input border border-border rounded text-center font-bold text-foreground focus:ring-2 focus:ring-class-capitalist outline-none text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Tax Details */}
                            <div className="col-span-1 md:col-span-5 grid grid-cols-2 gap-3">
                                <div className="flex flex-col items-center bg-muted rounded-lg p-2 border border-border">
                                    <span className="text-xxs font-bold text-class-capitalist/80 uppercase text-center tracking-widest">{t('labels.employerCost')}</span>
                                    <span className="font-black text-class-capitalist text-lg">{taxes.capitalist.patronal}Ꝟ</span>
                                </div>
                                <div className="flex flex-col items-center bg-muted rounded-lg p-2 border border-border">
                                    <span className="text-xxs font-bold text-class-capitalist/80 uppercase text-center tracking-widest">{t('labels.corporateTax')}</span>
                                    <span className="font-black text-class-capitalist text-lg">{taxes.capitalist.corporate}Ꝟ</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="col-span-1 md:col-span-4 flex flex-col gap-1 items-center justify-center bg-class-capitalist rounded-lg p-3 shadow-lg border border-class-capitalist/30 h-full transform transition-transform hover:scale-105">
                                <span className="text-xxs font-black text-white/90 uppercase tracking-widest">{t('labels.totalToPay')}</span>
                                <span className="text-2xl font-black text-white">{taxes.capitalist.total}Ꝟ</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaxCalculatorPage;

import React from 'react';
import { Calculator, Scale, Users, Building2, Factory } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ClassReference from '../../atoms/ClassReference';
import TaxMultiplierTrack from '../../molecules/TaxMultiplierTrack';

import { useGame } from '../../../context/GameContext';

const TaxCalculatorTab = ({ fiscalMultiplier, taxes }) => {
    const { numPlayers, policies, players, setPlayers } = useGame();
    return (
        <div className="space-y-4 animate-fade-in max-w-5xl mx-auto">
            <TaxMultiplierTrack currentValue={fiscalMultiplier} />

            {/* Compact Info Bar */}
            <div className="bg-blue-900/20 py-2 px-4 rounded-lg border border-blue-800/50 flex justify-center gap-6 text-sm">
                <span className="text-blue-300">Imposition: <span className="font-bold text-white">{policies.taxation}</span></span>
                <span className="text-blue-300">Santé: <span className="font-bold text-white">{policies.healthWelfare}</span></span>
                <span className="text-blue-300">Éducation: <span className="font-bold text-white">{policies.education}</span></span>
            </div>

            {numPlayers >= 2 && (
                <Card className="bg-[#1e293b]/80 border-t-4 border-red-500 relative overflow-hidden shadow-xl">
                    <CardContent className="p-4 flex items-center gap-6">
                        {/* Header Section - Logo Only */}
                        <div className="flex flex-col items-center min-w-[80px]">
                            <div className="relative">
                                <Users className="w-12 h-12 text-red-500/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
                                <ClassReference type="working" size="h-14 w-14 relative z-10" showLabel={false} />
                            </div>
                        </div>

                        {/* Inputs & Stats Grid */}
                        <div className="flex-1 grid grid-cols-3 gap-6 items-center">
                            {/* Input */}
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Population</span>
                                <input
                                    type="number"
                                    value={players.working.population}
                                    onChange={(e) => setPlayers({ ...players, working: { ...players.working, population: parseInt(e.target.value) || 0 } })}
                                    className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-center font-bold text-white focus:ring-2 focus:ring-red-500 outline-none text-lg transition-all"
                                />
                            </div>

                            {/* Tax Detail */}
                            <div className="flex flex-col gap-1 items-center bg-red-950/30 rounded-lg p-3 border border-red-900/20">
                                <span className="text-[10px] font-bold text-red-400/80 uppercase tracking-widest">Impôt Revenu</span>
                                <span className="font-black text-red-400 text-xl">{taxes.working.income}Ꝟ</span>
                            </div>

                            {/* Total */}
                            <div className="flex flex-col gap-1 items-center bg-gradient-to-br from-red-700 to-red-900 rounded-lg p-3 shadow-lg border border-red-500/30 transform transition-transform hover:scale-105">
                                <span className="text-[10px] font-black text-white/90 uppercase tracking-widest">Total à Payer</span>
                                <span className="text-2xl font-black text-white">{taxes.working.total}Ꝟ</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {numPlayers >= 3 && (
                <Card className="bg-[#1e293b]/80 border-t-4 border-yellow-500 relative overflow-hidden shadow-xl">
                    <CardContent className="p-4 flex items-center gap-6">
                        {/* Header Section - Logo Only */}
                        <div className="flex flex-col items-center min-w-[80px]">
                            <div className="relative">
                                <Building2 className="w-12 h-12 text-yellow-500/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
                                <ClassReference type="middle" size="h-14 w-14 relative z-10" showLabel={false} />
                            </div>
                        </div>

                        {/* Inputs & Stats Grid */}
                        <div className="flex-1 grid grid-cols-12 gap-4 items-center">
                            {/* Inputs */}
                            <div className="col-span-3 flex flex-col gap-3">
                                <div className="flex justify-between items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-8">Pop.</span>
                                    <input
                                        type="number"
                                        value={players.middle.population}
                                        onChange={(e) => setPlayers({ ...players, middle: { ...players.middle, population: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-2 py-1.5 bg-slate-900/50 border border-slate-700 rounded text-center font-bold text-white focus:ring-2 focus:ring-yellow-500 outline-none text-sm transition-all"
                                    />
                                </div>
                                <div className="flex justify-between items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-8">Ent.</span>
                                    <input
                                        type="number"
                                        value={players.middle.businesses}
                                        onChange={(e) => setPlayers({ ...players, middle: { ...players.middle, businesses: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-2 py-1.5 bg-slate-900/50 border border-slate-700 rounded text-center font-bold text-white focus:ring-2 focus:ring-yellow-500 outline-none text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Tax Details */}
                            <div className="col-span-5 grid grid-cols-2 gap-3">
                                <div className="flex flex-col items-center bg-yellow-950/30 rounded-lg p-2 border border-yellow-900/20">
                                    <span className="text-[10px] font-bold text-yellow-400/80 uppercase text-center tracking-widest">Impôt Rev.</span>
                                    <span className="font-black text-yellow-400 text-lg">{taxes.middle.income}Ꝟ</span>
                                </div>
                                <div className="flex flex-col items-center bg-yellow-950/30 rounded-lg p-2 border border-yellow-900/20">
                                    <span className="text-[10px] font-bold text-yellow-400/80 uppercase text-center tracking-widest">Ch. Pat.</span>
                                    <span className="font-black text-yellow-400 text-lg">{taxes.middle.patronal}Ꝟ</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="col-span-4 flex flex-col gap-1 items-center justify-center bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-3 shadow-lg border border-yellow-500/30 h-full transform transition-transform hover:scale-105">
                                <span className="text-[10px] font-black text-white/90 uppercase tracking-widest">Total à Payer</span>
                                <span className="text-2xl font-black text-white">{taxes.middle.total}Ꝟ</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {numPlayers >= 2 && (
                <Card className="bg-[#1e293b]/80 border-t-4 border-blue-500 relative overflow-hidden shadow-xl">
                    <CardContent className="p-4 flex items-center gap-6">
                        {/* Header Section - Logo Only */}
                        <div className="flex flex-col items-center min-w-[80px]">
                            <div className="relative">
                                <Factory className="w-12 h-12 text-blue-500/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
                                <ClassReference type="capitalist" size="h-14 w-14 relative z-10" showLabel={false} />
                            </div>
                        </div>

                        {/* Inputs & Stats Grid */}
                        <div className="flex-1 grid grid-cols-12 gap-4 items-center">
                            {/* Inputs */}
                            <div className="col-span-3 flex flex-col gap-3">
                                <div className="flex justify-between items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-8">C.A.</span>
                                    <input
                                        type="number"
                                        value={players.capitalist.revenue}
                                        onChange={(e) => setPlayers({ ...players, capitalist: { ...players.capitalist, revenue: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-2 py-1.5 bg-slate-900/50 border border-slate-700 rounded text-center font-bold text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                                    />
                                </div>
                                <div className="flex justify-between items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-8">Ent.</span>
                                    <input
                                        type="number"
                                        value={players.capitalist.businesses}
                                        onChange={(e) => setPlayers({ ...players, capitalist: { ...players.capitalist, businesses: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-2 py-1.5 bg-slate-900/50 border border-slate-700 rounded text-center font-bold text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Tax Details */}
                            <div className="col-span-5 grid grid-cols-2 gap-3">
                                <div className="flex flex-col items-center bg-blue-950/30 rounded-lg p-2 border border-blue-900/20">
                                    <span className="text-[10px] font-bold text-blue-300/80 uppercase text-center tracking-widest">Ch. Pat.</span>
                                    <span className="font-black text-blue-400 text-lg">{taxes.capitalist.patronal}Ꝟ</span>
                                </div>
                                <div className="flex flex-col items-center bg-blue-950/30 rounded-lg p-2 border border-blue-900/20">
                                    <span className="text-[10px] font-bold text-blue-300/80 uppercase text-center tracking-widest">Impôt Soc.</span>
                                    <span className="font-black text-blue-400 text-lg">{taxes.capitalist.corporate}Ꝟ</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="col-span-4 flex flex-col gap-1 items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-3 shadow-lg border border-blue-500/30 h-full transform transition-transform hover:scale-105">
                                <span className="text-[10px] font-black text-white/90 uppercase tracking-widest">Total à Payer</span>
                                <span className="text-2xl font-black text-white">{taxes.capitalist.total}Ꝟ</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default TaxCalculatorTab;

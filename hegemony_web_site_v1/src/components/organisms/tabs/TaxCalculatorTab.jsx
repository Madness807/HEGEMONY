import React from 'react';
import { Calculator, Scale, Users, Building2, Factory } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ClassReference from '../../atoms/ClassReference';

import { useGame } from '../../../context/GameContext';

const TaxCalculatorTab = ({ fiscalMultiplier, taxes }) => {
    const { numPlayers, policies, players, setPlayers } = useGame();
    return (
        <div className="space-y-8 animate-fade-in">


            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-6 rounded-2xl border border-blue-800 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-800 rounded-full">
                        <Scale className="w-6 h-6 text-blue-200" />
                    </div>
                    <span className="text-xl font-bold text-blue-100">Multiplicateur Fiscal : {fiscalMultiplier}</span>
                </div>
                <p className="text-sm text-blue-300 ml-11">
                    Basé sur : Imposition <span className="font-bold text-white">{policies.taxation}</span>,
                    Santé <span className="font-bold text-white">{policies.healthWelfare}</span>,
                    Éducation <span className="font-bold text-white">{policies.education}</span>
                </p>
            </div>

            {numPlayers >= 2 && (
                <Card className="glass-effect border-t-4 border-red-500 relative overflow-hidden">
                    <CardContent className="pt-6">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Users className="w-32 h-32 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                            <span className="w-3 h-8 bg-red-500 rounded-full inline-block"></span>
                            <ClassReference type="working" size="h-8 w-8" />
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-center p-4 glass-inner">
                                <span className="font-semibold text-slate-300">Population</span>
                                <input
                                    type="number"
                                    value={players.working.population}
                                    onChange={(e) => setPlayers({ ...players, working: { ...players.working, population: parseInt(e.target.value) || 0 } })}
                                    className="w-24 px-4 py-2 bg-black/40 border border-white/20 rounded-lg text-center font-bold text-lg text-white focus:ring-2 focus:ring-red-500 outline-none"
                                />
                            </div>
                            <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-xl border border-red-900/30">
                                <span className="font-semibold text-red-200">Impôt sur le Revenu</span>
                                <span className="text-xl font-bold text-red-400">{taxes.working.income}Ꝟ</span>
                            </div>
                            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                                <span className="font-bold text-lg">TOTAL À PAYER</span>
                                <span className="text-3xl font-bold">{taxes.working.total}Ꝟ</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {numPlayers >= 3 && (
                <Card className="glass-effect border-t-4 border-yellow-500 relative overflow-hidden">
                    <CardContent className="pt-6">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Building2 className="w-32 h-32 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                            <span className="w-3 h-8 bg-yellow-500 rounded-full inline-block"></span>
                            <ClassReference type="middle" size="h-8 w-8" />
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 glass-inner">
                                    <span className="block text-sm font-semibold text-slate-400 mb-1">Population</span>
                                    <input
                                        type="number"
                                        value={players.middle.population}
                                        onChange={(e) => setPlayers({ ...players, middle: { ...players.middle, population: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-3 py-2 bg-black/40 border border-white/20 rounded-lg font-bold text-lg text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                                    />
                                </div>
                                <div className="p-4 glass-inner">
                                    <span className="block text-sm font-semibold text-slate-400 mb-1">Entreprises</span>
                                    <input
                                        type="number"
                                        value={players.middle.businesses}
                                        onChange={(e) => setPlayers({ ...players, middle: { ...players.middle, businesses: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-3 py-2 bg-black/40 border border-white/20 rounded-lg font-bold text-lg text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-yellow-900/20 rounded-xl border border-yellow-900/30">
                                <span className="font-semibold text-yellow-200">Impôt sur le Revenu</span>
                                <span className="font-bold text-yellow-400">{taxes.middle.income}Ꝟ</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-yellow-900/20 rounded-xl border border-yellow-900/30">
                                <span className="font-semibold text-yellow-200">Charges Patronales</span>
                                <span className="font-bold text-yellow-400">{taxes.middle.patronal}Ꝟ</span>
                            </div>
                            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                                <span className="font-bold text-lg">TOTAL À PAYER</span>
                                <span className="text-3xl font-bold">{taxes.middle.total}Ꝟ</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {numPlayers >= 2 && (
                <Card className="glass-effect border-t-4 border-blue-500 relative overflow-hidden">
                    <CardContent className="pt-6">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Factory className="w-32 h-32 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                            <span className="w-3 h-8 bg-blue-500 rounded-full inline-block"></span>
                            <ClassReference type="capitalist" size="h-8 w-8" />
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 glass-inner">
                                    <span className="block text-sm font-semibold text-slate-400 mb-1">Chiffre d'Affaires</span>
                                    <input
                                        type="number"
                                        value={players.capitalist.revenue}
                                        onChange={(e) => setPlayers({ ...players, capitalist: { ...players.capitalist, revenue: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-3 py-2 bg-black/40 border border-white/20 rounded-lg font-bold text-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                                <div className="p-4 glass-inner">
                                    <span className="block text-sm font-semibold text-slate-400 mb-1">Entreprises Ops.</span>
                                    <input
                                        type="number"
                                        value={players.capitalist.businesses}
                                        onChange={(e) => setPlayers({ ...players, capitalist: { ...players.capitalist, businesses: parseInt(e.target.value) || 0 } })}
                                        className="w-full px-3 py-2 bg-black/40 border border-white/20 rounded-lg font-bold text-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-blue-900/20 rounded-xl border border-blue-900/30">
                                <span className="font-semibold text-blue-200">Charges Patronales</span>
                                <span className="font-bold text-blue-400">{taxes.capitalist.patronal}Ꝟ</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-blue-900/20 rounded-xl border border-blue-900/30">
                                <span className="font-semibold text-blue-200">Impôt sur les Sociétés</span>
                                <span className="font-bold text-blue-400">{taxes.capitalist.corporate}Ꝟ</span>
                            </div>
                            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                                <span className="font-bold text-lg">TOTAL À PAYER</span>
                                <span className="text-3xl font-bold">{taxes.capitalist.total}Ꝟ</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default TaxCalculatorTab;

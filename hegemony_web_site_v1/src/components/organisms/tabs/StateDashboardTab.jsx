import React from 'react';
import { TrendingUp, Building2, AlertCircle, Landmark, Users, Briefcase, Factory, Coins, Heart, GraduationCap, Megaphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ClassReference from '../../atoms/ClassReference';
import healthIcon from '@/assets/images/common/resources/health/health_1.png';
import educationIcon from '@/assets/images/common/resources/education/education_1.png';
import workerLegitimacy from '@/assets/images/classes/state/legitimity_worker.png';
import middleLegitimacy from '@/assets/images/classes/state/legitimité_classe_moyenne.png';
import capitalistLegitimacy from '@/assets/images/classes/state/legitimité_capitalist.png';

import { useGame } from '../../../context/GameContext';

const StateDashboardTab = () => {
    const { numPlayers, players, setPlayers, policies } = useGame();

    return (
        <div className="space-y-12 animate-fade-in max-w-7xl mx-auto">

            {/* Public Services & Resources Section */}
            <Card className="glass-effect border-white/10">
                <CardContent className="p-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                            <Building2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white font-serif">Services Publics & Ressources</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Santé', key: 'health', color: 'red', icon: <img src={healthIcon} alt="Santé" className="w-16 h-16 object-contain drop-shadow-lg" />, isResource: true },
                            { label: 'Éducation', key: 'education', color: 'orange', icon: <img src={educationIcon} alt="Éducation" className="w-16 h-16 object-contain drop-shadow-lg" />, isResource: true },
                            { label: 'Influence', key: 'influence', color: 'purple', icon: <Megaphone className="w-12 h-12 text-purple-400" />, isResource: false },
                            { label: 'Trésor', key: 'treasury', color: 'green', icon: <Coins className="w-12 h-12 text-green-400" />, isResource: false }
                        ].map((res) => {
                            const colors = {
                                red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', ring: 'focus:ring-red-500' },
                                orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', ring: 'focus:ring-orange-500' },
                                purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', ring: 'focus:ring-purple-500' },
                                green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', ring: 'focus:ring-green-500' }
                            };
                            const style = colors[res.color];

                            // Calculate price
                            let priceDisplay = null;
                            if (res.key === 'influence') {
                                priceDisplay = '10Ꝟ';
                            } else if (res.isResource) {
                                const policyKey = res.key === 'health' ? 'healthWelfare' : 'education';
                                const policyValue = policies[policyKey];
                                priceDisplay = policyValue === 'A' ? 'Gratuit' : policyValue === 'B' ? '5Ꝟ' : '10Ꝟ';
                            }

                            return (
                                <div key={res.key} className={`relative group p-6 rounded-2xl border ${style.border} ${style.bg} transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center gap-4`}>
                                    <div className="h-20 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                                        {res.icon}
                                    </div>

                                    <div className="text-center w-full">

                                        {res.isResource ? (
                                            <div className="bg-black/20 rounded-lg py-2 px-4 border border-white/5">
                                                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Coût Actuel</div>
                                                <div className={`text-2xl font-black ${style.text}`}>{priceDisplay}</div>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={players.state[res.key]}
                                                    onChange={(e) => setPlayers({ ...players, state: { ...players.state, [res.key]: parseInt(e.target.value) || 0 } })}
                                                    className={`w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-center text-3xl font-black text-white focus:ring-2 ${style.ring} outline-none transition-all`}
                                                />
                                                {res.key === 'influence' && (
                                                    <div className="absolute -bottom-6 left-0 w-full text-center text-xs text-slate-400 font-medium">
                                                        Coût: {priceDisplay}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Legitimacy Section */}
            <Card className="glass-effect border-white/10">
                <CardContent className="p-10">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-pink-500/20 border border-pink-500/30">
                                <TrendingUp className="w-6 h-6 text-pink-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white font-serif">Légitimité</h3>
                                <p className="text-slate-400 text-sm">Suivi de l'approbation des classes</p>
                            </div>
                        </div>
                        {numPlayers === 4 && (
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl shadow-lg flex items-center gap-4">
                                <div className="text-right">
                                    <div className="text-xs font-bold text-white/80 uppercase tracking-wider">Points de Victoire</div>
                                    <div className="text-[10px] text-white/60">2 plus faibles scores</div>
                                </div>
                                <div className="text-4xl font-black text-white">
                                    {[players.state.legitimacyWorking, players.state.legitimacyMiddle, players.state.legitimacyCapitalist]
                                        .sort((a, b) => a - b)
                                        .slice(0, 2)
                                        .reduce((a, b) => a + b, 0)}
                                </div>
                            </div>
                        )}
                    </div>

                    {numPlayers === 4 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    class: 'Working',
                                    color: 'accent-red-500',
                                    val: players.state.legitimacyWorking,
                                    image: workerLegitimacy,
                                    borderColor: 'border-red-500/30',
                                    bg: 'bg-red-500/5',
                                    textColor: 'text-red-400'
                                },
                                {
                                    class: 'Middle',
                                    color: 'accent-yellow-500',
                                    val: players.state.legitimacyMiddle,
                                    image: middleLegitimacy,
                                    borderColor: 'border-yellow-500/30',
                                    bg: 'bg-yellow-500/5',
                                    textColor: 'text-yellow-400'
                                },
                                {
                                    class: 'Capitalist',
                                    color: 'accent-blue-500',
                                    val: players.state.legitimacyCapitalist,
                                    image: capitalistLegitimacy,
                                    borderColor: 'border-blue-500/30',
                                    bg: 'bg-blue-500/5',
                                    textColor: 'text-blue-400'
                                }
                            ].map((item) => {
                                return (
                                    <div key={item.class} className={`glass-inner-dark p-8 rounded-2xl border ${item.borderColor} ${item.bg} flex flex-col items-center gap-6 hover-lift`}>
                                        <div className="text-center w-full">
                                            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                                                <img src={item.image} alt={item.class} className="w-full h-full object-contain drop-shadow-2xl" />
                                            </div>
                                        </div>

                                        <div className="w-full px-4">
                                            <input
                                                type="range"
                                                min="0"
                                                max="6"
                                                value={item.val}
                                                onChange={(e) => setPlayers({ ...players, state: { ...players.state, [`legitimacy${item.class}`]: parseInt(e.target.value) } })}
                                                className={`w-full ${item.color} h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer`}
                                            />
                                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-bold px-1">
                                                <span>0</span>
                                                <span>1</span>
                                                <span>2</span>
                                                <span>3</span>
                                                <span>4</span>
                                                <span>5</span>
                                                <span>6</span>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <span className="text-sm text-slate-500 font-medium uppercase tracking-widest">Valeur Actuelle</span>
                                            <div className={`text-4xl font-black ${item.textColor} mt-1 drop-shadow-lg`}>{item.val}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="bg-yellow-500/10 border border-yellow-500/30 p-8 rounded-2xl flex items-center gap-6">
                            <div className="p-4 bg-yellow-500/20 rounded-full">
                                <AlertCircle className="w-8 h-8 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-yellow-200 mb-1">Non Disponible</h3>
                                <p className="text-yellow-400/80">Le tracker de légitimité n'est disponible que dans les parties à 4 joueurs (avec l'État).</p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default StateDashboardTab;

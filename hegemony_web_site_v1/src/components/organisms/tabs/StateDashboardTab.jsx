import React from 'react';
import { TrendingUp, Building2, AlertCircle, Landmark, Users, Briefcase, Factory } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ClassReference from '../../atoms/ClassReference';
import healthIcon from '@/assets/images/common/resources/health/health_1.png';
import educationIcon from '@/assets/images/common/resources/education/education_1.png';

import { useGame } from '../../../context/GameContext';

const StateDashboardTab = () => {
    const { numPlayers, players, setPlayers, policies } = useGame();

    return (
        <div className="space-y-8 animate-fade-in">

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
                    <Landmark className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-white">Gestion de l'État</h2>
                    <p className="text-slate-400">Services Publics, Ressources et Légitimité</p>
                </div>
            </div>

            {/* Public Services & Resources Section */}
            <Card className="glass-effect">
                <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Building2 className="w-6 h-6 text-slate-400" />
                        Services Publics & Ressources
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Santé', key: 'health', color: 'red', icon: <img src={healthIcon} alt="Santé" className="w-12 h-12 mx-auto" />, isResource: true },
                            { label: 'Éducation', key: 'education', color: 'orange', icon: <img src={educationIcon} alt="Éducation" className="w-12 h-12 mx-auto" />, isResource: true },
                            { label: 'Influence', key: 'influence', color: 'purple', icon: '📢', isResource: false },
                            { label: 'Trésor', key: 'treasury', color: 'green', icon: '💰', isResource: false }
                        ].map((res) => {
                            const colors = {
                                red: { bg: 'glass-inner', border: 'border-red-500/30', text: 'text-red-300', inputBorder: 'border-red-500/50', ring: 'focus:ring-red-500' },
                                orange: { bg: 'glass-inner', border: 'border-orange-500/30', text: 'text-orange-300', inputBorder: 'border-orange-500/50', ring: 'focus:ring-orange-500' },
                                purple: { bg: 'glass-inner', border: 'border-purple-500/30', text: 'text-purple-300', inputBorder: 'border-purple-500/50', ring: 'focus:ring-purple-500' },
                                green: { bg: 'glass-inner', border: 'border-green-500/30', text: 'text-green-300', inputBorder: 'border-green-500/50', ring: 'focus:ring-green-500' }
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
                                <div key={res.key} className={`text-center p-6 ${style.bg} rounded-2xl border ${style.border} transition-all hover-lift flex flex-col justify-between`}>
                                    <div>
                                        <div className="text-2xl mb-2">{res.icon}</div>
                                        <div className={`text-sm font-bold ${style.text} uppercase tracking-wider mb-4`}>{res.label}</div>
                                    </div>

                                    {res.isResource ? (
                                        <div className="mt-2">
                                            <div className="text-xs text-slate-400 mb-1">Prix Actuel</div>
                                            <div className={`text-3xl font-black ${style.text}`}>{priceDisplay}</div>
                                        </div>
                                    ) : (
                                        <>
                                            <input
                                                type="number"
                                                value={players.state[res.key]}
                                                onChange={(e) => setPlayers({ ...players, state: { ...players.state, [res.key]: parseInt(e.target.value) || 0 } })}
                                                className={`w-full glass-inner-dark px-3 py-2 text-center border ${style.inputBorder} rounded-lg text-2xl font-black text-white focus:ring-2 ${style.ring} outline-none`}
                                            />
                                            {res.key === 'influence' && (
                                                <div className="text-xs text-slate-400 mt-2 font-medium">
                                                    Prix: {priceDisplay}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Legitimacy Section */}
            <Card className="glass-effect">
                <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-slate-400" />
                        Légitimité
                    </h3>

                    {numPlayers === 4 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {[
                                    { class: 'Working', name: <ClassReference type="working" />, color: 'red', val: players.state.legitimacyWorking, Icon: Factory },
                                    { class: 'Middle', name: <ClassReference type="middle" />, color: 'yellow', val: players.state.legitimacyMiddle, Icon: Users },
                                    { class: 'Capitalist', name: <ClassReference type="capitalist" />, color: 'blue', val: players.state.legitimacyCapitalist, Icon: Briefcase }
                                ].map((item) => {
                                    const colors = {
                                        red: { borderT: 'border-red-500', text: 'text-red-400', border: 'border-red-500/30', accent: 'accent-red-500', bg: 'bg-red-500/20' },
                                        yellow: { borderT: 'border-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500/30', accent: 'accent-yellow-500', bg: 'bg-yellow-500/20' },
                                        blue: { borderT: 'border-blue-500', text: 'text-blue-400', border: 'border-blue-500/30', accent: 'accent-blue-500', bg: 'bg-blue-500/20' }
                                    };
                                    const style = colors[item.color];
                                    const Icon = item.Icon;
                                    return (
                                        <div key={item.class} className={`glass-inner p-6 border-t-4 ${style.borderT} text-center hover-lift`}>
                                            <h3 className={`text-lg font-bold ${style.text} mb-6`}>{item.name}</h3>
                                            <div className={`relative w-32 h-32 mx-auto mb-2 flex items-center justify-center rounded-full ${style.bg}`}>
                                                <Icon className={`w-16 h-16 ${style.text}`} />
                                            </div>
                                            <div className={`text-5xl font-black ${style.text} mb-6`}>{item.val}</div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="6"
                                                value={item.val}
                                                onChange={(e) => setPlayers({ ...players, state: { ...players.state, [`legitimacy${item.class}`]: parseInt(e.target.value) } })}
                                                className={`w-full ${style.accent} h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer`}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-xl flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Points de Victoire</h3>
                                    <p className="opacity-80">Basé sur les deux scores les plus faibles</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-5xl font-black">
                                        {[players.state.legitimacyWorking, players.state.legitimacyMiddle, players.state.legitimacyCapitalist]
                                            .sort((a, b) => a - b)
                                            .slice(0, 2)
                                            .reduce((a, b) => a + b, 0)}
                                    </div>
                                    <div className="text-sm font-bold opacity-80">TOTAL PV</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-yellow-900/20 border-2 border-yellow-700 p-8 rounded-2xl flex items-center gap-4">
                            <AlertCircle className="w-12 h-12 text-yellow-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-yellow-200">Non Disponible</h3>
                                <p className="text-yellow-400">Le tracker de légitimité n'est disponible que dans les parties à 4 joueurs (avec l'État).</p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default StateDashboardTab;

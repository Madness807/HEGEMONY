import React from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import workerLegitimacy from '@/assets/images/classes/state/legitimity_worker.png';
import middleLegitimacy from '@/assets/images/classes/state/legitimité_classe_moyenne.png';
import capitalistLegitimacy from '@/assets/images/classes/state/legitimité_capitalist.png';

const LegitimacyTracker = ({ children }) => {
    const { players, setPlayers, numPlayers } = useGame();

    return (
        <div className="bg-card border border-border p-10 rounded-xl relative overflow-hidden">
            {/* Background Glow Removed */}

            {/* Content passed from parent (State Event Penalties, etc.) */}
            {children && <div className="mb-8">{children}</div>}

            <div className="flex items-center justify-end mb-10">
                {numPlayers === 4 && (
                    <div className="bg-muted px-6 py-3 rounded-xl shadow-lg flex items-center gap-4 border border-border">
                        <div className="text-right">
                            <div className="text-xs font-bold text-primary/80 uppercase tracking-wider">Points de Victoire</div>
                            <div className="text-xxs text-primary/60">2 plus faibles scores</div>
                        </div>
                        <div className="text-4xl font-black text-primary drop-shadow-[0_0_10px_rgba(252,176,64,0.5)]">
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
                            color: 'accent-class-working',
                            val: players.state.legitimacyWorking,
                            image: workerLegitimacy,
                            borderColor: 'border-class-working/30',
                            bg: 'bg-class-working/5',
                            textColor: 'text-class-working',
                            glow: 'shadow-class-working/20'
                        },
                        {
                            class: 'Middle',
                            color: 'accent-class-middle',
                            val: players.state.legitimacyMiddle,
                            image: middleLegitimacy,
                            borderColor: 'border-class-middle/30',
                            bg: 'bg-class-middle/5',
                            textColor: 'text-class-middle',
                            glow: 'shadow-class-middle/20'
                        },
                        {
                            class: 'Capitalist',
                            color: 'accent-class-capitalist',
                            val: players.state.legitimacyCapitalist,
                            image: capitalistLegitimacy,
                            borderColor: 'border-class-capitalist/30',
                            bg: 'bg-class-capitalist/5',
                            textColor: 'text-class-capitalist',
                            glow: 'shadow-class-capitalist/20'
                        }
                    ].map((item) => {
                        return (
                            <div key={item.class} className={`bg-muted p-8 rounded-2xl border ${item.borderColor} flex flex-col items-center gap-6 hover-lift transition-all duration-300 hover:shadow-xl`}>
                                <div className="text-center w-full">
                                    <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                                        <img src={item.image} alt={item.class} className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" />
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max="6"
                                        value={item.val}
                                        onChange={(e) => setPlayers({ ...players, state: { ...players.state, [`legitimacy${item.class}`]: parseInt(e.target.value) } })}
                                        className={`w-full ${item.color} h-2 bg-input rounded-lg appearance-none cursor-pointer`}
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-2 font-bold px-1">
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
                                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Valeur Actuelle</span>
                                    <div className={`text-4xl font-black ${item.textColor} mt-1 drop-shadow-lg`}>{item.val}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="bg-class-middle/10 border border-class-middle/30 p-8 rounded-2xl flex items-center gap-6">
                    <div className="p-4 bg-class-middle/20 rounded-full">
                        <AlertCircle className="w-8 h-8 text-class-middle" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-class-middle mb-1">Non Disponible</h3>
                        <p className="text-class-middle/80">Le tracker de légitimité n'est disponible que dans les parties à 4 joueurs (avec l'État).</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LegitimacyTracker;

import React from 'react';
import { Play, ChevronRight, BookOpen, Factory, Users, Calculator } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import PreparationPhase from '../phase-components/PreparationPhase';
import ActionPhase from '../phase-components/ActionPhase';
import ProductionPhase from '../phase-components/ProductionPhase';
import ElectionPhase from '../phase-components/ElectionPhase';
import ScoringPhase from '../phase-components/ScoringPhase';
import { PHASES } from '../../../constants/gameData';

const ICON_MAP = {
    BookOpen: BookOpen,
    Play: Play,
    Factory: Factory,
    Users: Users,
    Calculator: Calculator
};

import { useGame } from '../../../context/GameContext';

const PhaseAssistantTab = () => {
    const { currentRound, setCurrentRound, currentPhase, setCurrentPhase, numPlayers } = useGame();
    if (!PHASES) {
        return <div className="p-8 text-red-500">Erreur : Données des phases manquantes.</div>;
    }

    const phases = PHASES.map(p => ({
        ...p,
        icon: ICON_MAP[p.icon]
    }));

    if (!phases[currentPhase]) {
        return <div className="p-8 text-red-500">Erreur : Phase {currentPhase} introuvable.</div>;
    }

    return (
        <div className="space-y-8 animate-fade-in">


            <Card className="glass-effect">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-4xl font-black text-white mb-1">Manche {currentRound}</h3>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold text-white ${phases[currentPhase].color}`}>
                                {phases[currentPhase].name}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setCurrentRound(Math.max(1, currentRound - 1))}
                                className="px-4 py-2 glass-inner-dark text-white rounded-lg hover:bg-white/10 font-semibold transition-colors"
                            >
                                ← Préc.
                            </button>
                            <button
                                onClick={() => setCurrentRound(Math.min(5, currentRound + 1))}
                                className="px-4 py-2 glass-inner-dark text-white rounded-lg hover:bg-white/10 font-semibold transition-colors"
                            >
                                Suiv. →
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                        {phases.map((phase, idx) => {
                            const Icon = phase.icon;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentPhase(idx)}
                                    className={`flex-1 min-w-[100px] py-4 rounded-xl font-bold transition-all duration-300 flex flex-col items-center gap-2 ${currentPhase === idx
                                        ? `${phase.color} text-white shadow-lg transform scale-105`
                                        : 'glass-inner-dark text-slate-400 hover:bg-white/10'
                                        }`}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span className="text-sm">{phase.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="glass-inner-dark p-6 animate-slide-up">
                        {currentPhase === 0 && <PreparationPhase round={currentRound} numPlayers={numPlayers} />}
                        {currentPhase === 1 && <ActionPhase numPlayers={numPlayers} />}
                        {currentPhase === 2 && <ProductionPhase />}
                        {currentPhase === 3 && <ElectionPhase numPlayers={numPlayers} />}
                        {currentPhase === 4 && <ScoringPhase numPlayers={numPlayers} />}
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={() => setCurrentPhase((currentPhase + 1) % 5)}
                            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-2"
                        >
                            Phase suivante <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PhaseAssistantTab;

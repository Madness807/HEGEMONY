import React from 'react';
import { Play, ChevronRight, BookOpen, Factory, Users, Calculator, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PreparationPhase from '../phase-components/PreparationPhase';
import ActionPhase from '../phase-components/ActionPhase';
import ProductionPhase from '../phase-components/ProductionPhase';
import ElectionPhase from '../phase-components/ElectionPhase';
import ScoringPhase from '../phase-components/ScoringPhase';
import { PHASES } from '../../../constants/gameData';
import { useGame } from '../../../context/GameContext';
import pionManche from '@/assets/images/pions/pion_manche.png';

const ICON_MAP = {
    BookOpen: BookOpen,
    Play: Play,
    Factory: Factory,
    Users: Users,
    Calculator: Calculator
};

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

    const handleNextPhase = () => {
        if (currentPhase < 4) {
            setCurrentPhase(currentPhase + 1);
        } else {
            // Optional: Auto-advance round if at the end of phases?
            // For now just cycle or stop. Let's cycle for convenience or stop at end.
            // The original code cycled: setCurrentPhase((currentPhase + 1) % 5)
            // But maybe better to just go to next phase if not last, or loop.
            // Let's keep the loop behavior for now as it was in the original.
            setCurrentPhase((currentPhase + 1) % 5);
            if (currentPhase === 4 && currentRound < 5) {
                setCurrentRound(currentRound + 1);
            }
        }
    };

    return (
        <div className="space-y-12 animate-fade-in max-w-7xl mx-auto">
            {/* Header Section with Round Navigation */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentRound(Math.max(1, currentRound - 1))}
                            disabled={currentRound === 1}
                            className={`p-3 rounded-xl glass-inner-dark transition-all duration-300 ${currentRound === 1
                                ? 'opacity-50 cursor-not-allowed text-slate-500'
                                : 'text-white hover:bg-white/10 hover-lift'
                                }`}
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setCurrentRound(Math.min(5, currentRound + 1))}
                            disabled={currentRound === 5}
                            className={`p-3 rounded-xl glass-inner-dark transition-all duration-300 ${currentRound === 5
                                ? 'opacity-50 cursor-not-allowed text-slate-500'
                                : 'text-white hover:bg-white/10 hover-lift'
                                }`}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="relative flex items-center gap-4 bg-black/20 p-3 rounded-2xl border border-white/5">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Manche</span>
                        <div className="flex gap-3">
                            {[1, 2, 3, 4, 5].map((round) => (
                                <div
                                    key={round}
                                    className={`relative w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2 transition-all duration-300 ${currentRound === round
                                            ? 'border-yellow-500 text-transparent bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                                            : 'border-slate-700 text-slate-600 bg-slate-800/30'
                                        }`}
                                >
                                    {round}
                                    {currentRound === round && (
                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                            <img src={pionManche} alt="Pion Manche" className="w-16 h-16 max-w-none object-contain drop-shadow-2xl animate-bounce-slow" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Current Phase Badge */}
                <div className={`px-8 py-4 rounded-2xl glass-effect border border-white/10 flex items-center gap-4 ${phases[currentPhase].color.replace('bg-', 'text-')}`}>
                    {React.createElement(phases[currentPhase].icon, { className: "w-8 h-8" })}
                    <span className="text-2xl font-bold text-white">{phases[currentPhase].name}</span>
                </div>
            </div>

            {/* Phase Stepper Navigation */}
            <div className="relative px-4">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full" />

                <div className="relative flex justify-between gap-4">
                    {phases.map((phase, idx) => {
                        const Icon = phase.icon;
                        const isActive = currentPhase === idx;
                        const isPast = currentPhase > idx;

                        return (
                            <button
                                key={idx}
                                onClick={() => setCurrentPhase(idx)}
                                className={`group relative flex flex-col items-center gap-4 transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'
                                    }`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 z-10 ${isActive
                                    ? `${phase.color} border-white shadow-[0_0_20px_rgba(0,0,0,0.3)]`
                                    : isPast
                                        ? 'bg-slate-700 border-slate-600 text-slate-400'
                                        : 'glass-inner-dark border-transparent text-slate-500 hover:bg-white/10'
                                    }`}>
                                    <Icon className={`w-7 h-7 ${isActive ? 'text-white' : ''}`} />
                                </div>
                                <span className={`absolute -bottom-10 text-base font-bold whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                                    }`}>
                                    {phase.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Area */}
            <Card className="glass-effect border-white/10 overflow-hidden mt-16">
                <CardContent className="p-0">
                    <div className="p-12 min-h-[500px]">
                        <div className="animate-slide-up">
                            {currentPhase === 0 && <PreparationPhase round={currentRound} numPlayers={numPlayers} />}
                            {currentPhase === 1 && <ActionPhase numPlayers={numPlayers} />}
                            {currentPhase === 2 && <ProductionPhase />}
                            {currentPhase === 3 && <ElectionPhase numPlayers={numPlayers} />}
                            {currentPhase === 4 && <ScoringPhase numPlayers={numPlayers} />}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-8 bg-black/20 border-t border-white/5 flex justify-end">
                        <button
                            onClick={handleNextPhase}
                            className="group px-10 py-5 rounded-xl font-bold transition-all duration-300 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg hover:shadow-indigo-500/25 flex items-center gap-4 hover-lift text-lg"
                        >
                            <span>Phase Suivante</span>
                            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PhaseAssistantTab;

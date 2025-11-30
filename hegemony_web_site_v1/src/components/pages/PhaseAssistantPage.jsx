import React from 'react';
import { Play, ChevronRight, BookOpen, Factory, Users, Calculator, ArrowLeft, ArrowRight, CheckCircle2, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PreparationPhase from '../organisms/phase-components/PreparationPhase';
import ActionPhase from '../organisms/phase-components/ActionPhase';
import ProductionPhase from '../organisms/phase-components/ProductionPhase';
import ElectionPhase from '../organisms/phase-components/ElectionPhase';
import ScoringPhase from '../organisms/phase-components/ScoringPhase';
import { PHASES } from '../../constants/gameData';
import { useGame } from '../../context/GameContext';
import pionManche from '@/assets/images/pions/pion_manche.png';


const ICON_MAP = {
    BookOpen: BookOpen,
    Play: Play,
    Factory: Factory,
    Users: Users,
    Calculator: Calculator
};

const PhaseAssistantPage = () => {
    const { currentRound, setCurrentRound, currentPhase, setCurrentPhase, numPlayers, setIsPoliciesModalOpen, fiscalMultiplier } = useGame();

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

    const handlePrevStep = () => {
        if (currentPhase > 0) {
            setCurrentPhase(currentPhase - 1);
        } else if (currentRound > 1) {
            setCurrentRound(currentRound - 1);
            setCurrentPhase(4); // Go to last phase of previous round
        }
    };

    const handleNextStep = () => {
        if (currentPhase < 4) {
            setCurrentPhase(currentPhase + 1);
        } else if (currentRound < 5) {
            setCurrentRound(currentRound + 1);
            setCurrentPhase(0); // Go to first phase of next round
        }
    };

    const isFirstStep = currentRound === 1 && currentPhase === 0;
    const isLastStep = currentRound === 5 && currentPhase === 4;

    return (
        <div className="space-y-12 animate-fade-in w-full mx-auto">
            {/* Header Section with Navigation */}
            <div className="bg-surface-primary border border-border p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-8 md:mb-12 relative overflow-hidden">
                {/* Background decorative glow REMOVED */}

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2 order-3 md:order-1 w-full md:w-auto justify-between md:justify-start">
                    <button
                        onClick={handlePrevStep}
                        disabled={isFirstStep}
                        className={`p-3 md:p-4 rounded-xl border transition-all duration-300 flex-1 md:flex-none flex justify-center ${isFirstStep
                            ? 'border-border/50 text-muted-foreground cursor-not-allowed bg-muted/20'
                            : 'bg-surface-secondary hover:bg-surface-tertiary text-foreground hover:border-border'
                            }`}
                    >
                        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={handleNextStep}
                        disabled={isLastStep}
                        className={`p-3 md:p-4 rounded-xl border transition-all duration-300 flex-1 md:flex-none flex justify-center ${isLastStep
                            ? 'border-border/50 text-muted-foreground cursor-not-allowed bg-muted/20'
                            : 'bg-surface-secondary hover:bg-surface-tertiary text-foreground hover:border-border'
                            }`}
                    >
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Center Section: Round Tracker & Policies */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 order-1 md:order-2 w-full md:w-auto justify-center">
                    {/* Round Tracker - Track Style */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-black text-primary/80 uppercase tracking-[0.2em]">Manche Actuelle</span>
                        <div className="flex items-center gap-4">
                            <div className="relative flex items-center gap-4 bg-surface-secondary p-3 rounded-full border border-border shadow-inner">
                                {[1, 2, 3, 4, 5].map((round) => (
                                    <div key={round} className="relative flex flex-col items-center justify-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-300 ${currentRound === round
                                            ? 'bg-background border-transparent scale-110'
                                            : 'bg-muted text-muted-foreground border-border'
                                            }`}>
                                            {currentRound !== round && round}
                                        </div>

                                        {/* Pawn Image Positioned Absolute */}
                                        {currentRound === round && (
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 z-20 pointer-events-none drop-shadow-lg">
                                                <img
                                                    src={pionManche}
                                                    alt="Pion Manche"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Policies Button - Compact Icon Style */}
                            <button
                                onClick={() => setIsPoliciesModalOpen(true)}
                                className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all overflow-hidden shadow-lg hover:scale-105 active:scale-95 bg-surface-secondary border border-border"
                                title="Politiques"
                            >
                                <Scale className="w-6 h-6 text-foreground group-hover:text-primary relative z-10 transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase Stepper Navigation */}
            <div className="relative px-2 md:px-8">
                {/* Connecting Line */}
                {/* Connecting Line */}
                <div className="absolute top-[28px] md:top-[40px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                <div className="relative flex justify-between gap-4">
                    {phases.map((phase, idx) => {
                        const Icon = phase.icon;
                        const isActive = currentPhase === idx;
                        const isPast = currentPhase > idx;

                        return (
                            <button
                                key={idx}
                                onClick={() => setCurrentPhase(idx)}
                                className={`group relative flex flex-col items-center gap-6 transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-105'
                                    }`}
                            >
                                <div className={`w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl flex items-center justify-center border-2 transition-all duration-500 z-10 ${isActive
                                    ? `bg-surface-primary border-${phase.color.replace('bg-', '')} shadow-xl scale-110`
                                    : isPast
                                        ? 'bg-muted border-border text-muted-foreground'
                                        : 'bg-surface-secondary border-border text-muted-foreground hover:bg-surface-tertiary'
                                    }`}>
                                    <Icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 ${isActive
                                        ? 'text-foreground'
                                        : isPast ? 'text-muted-foreground' : 'text-muted-foreground group-hover:text-foreground'
                                        }`} />

                                    {/* Active Indicator Dot */}
                                    {isActive && (
                                        <div className={`absolute -bottom-2 w-12 h-1 rounded-full ${phase.color} shadow-[0_0_10px_currentColor]`} />
                                    )}
                                </div>

                                <span className={`text-[10px] md:text-base font-bold tracking-wider uppercase transition-all duration-300 text-center ${isActive
                                    ? 'text-foreground'
                                    : 'text-muted-foreground group-hover:text-foreground'
                                    }`}>
                                    {phase.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Area */}
            <Card className="bg-surface-primary border border-border overflow-hidden mt-16">
                <CardContent className="p-0">
                    <div className="p-4 md:p-12 min-h-[500px]">
                        <div className="animate-slide-up">
                            {currentPhase === 0 && <PreparationPhase round={currentRound} numPlayers={numPlayers} />}
                            {currentPhase === 1 && <ActionPhase numPlayers={numPlayers} />}
                            {currentPhase === 2 && <ProductionPhase />}
                            {currentPhase === 3 && <ElectionPhase numPlayers={numPlayers} />}
                            {currentPhase === 4 && <ScoringPhase numPlayers={numPlayers} />}
                        </div>
                    </div>

                    {/* Removed Footer Actions (Next Phase Button) */}
                </CardContent>
            </Card>
        </div>
    );
};

export default PhaseAssistantPage;

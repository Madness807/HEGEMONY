import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { useTaxCalculator } from './hooks/useTaxCalculator';
import Header from './components/organisms/Header';
import Sidebar from './components/organisms/Sidebar';
import SetupGuideTab from './components/organisms/tabs/SetupGuideTab';
import SetupTab from './components/organisms/tabs/SetupTab';
import MaterialTab from './components/organisms/tabs/MaterialTab';
import RulesTab from './components/organisms/tabs/RulesTab';
import PhaseAssistantTab from './components/organisms/tabs/PhaseAssistantTab';
import StateDashboardTab from './components/organisms/tabs/StateDashboardTab';
import TaxCalculatorTab from './components/organisms/tabs/TaxCalculatorTab';
import InteractiveBoard from './components/organisms/InteractiveBoard';
import FMIGuideTab from './components/organisms/tabs/FMIGuideTab';
import GalleryTab from './components/organisms/tabs/GalleryTab';
import CreditsTab from './components/organisms/tabs/CreditsTab';
import HomeTab from './components/organisms/tabs/HomeTab';

const HegemonyContent = () => {
    const {
        activeTab,
        setActiveTab,
        numPlayers,
        setNumPlayers,
        currentRound,
        setCurrentRound,
        currentPhase,
        setCurrentPhase,
        policies,
        setPolicies,
        players,
        setPlayers
    } = useGame();

    const { fiscalMultiplier, taxes } = useTaxCalculator(policies, players);

    return (
        <div className="min-h-screen p-4 md:p-8 font-sans text-foreground overflow-x-hidden">
            <div className="max-w-7xl mx-auto space-y-8">
                <Header numPlayers={numPlayers} currentRound={currentRound} />

                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                    <div className="flex-1 min-w-0">
                        {activeTab === 'home' && <HomeTab />}
                        {activeTab === 'setup-guide' && <SetupGuideTab numPlayers={numPlayers} />}

                        {activeTab === 'setup' && (
                            <SetupTab />
                        )}

                        {activeTab === 'material' && <MaterialTab />}

                        {activeTab === 'rules' && <RulesTab />}

                        {activeTab === 'phases' && (
                            <PhaseAssistantTab />
                        )}

                        {activeTab === 'state-dashboard' && <StateDashboardTab />}

                        {activeTab === 'taxes' && (
                            <TaxCalculatorTab
                                fiscalMultiplier={fiscalMultiplier}
                                taxes={taxes}
                            />
                        )}

                        {activeTab === 'board' && <InteractiveBoard />}

                        {activeTab === 'gallery' && <GalleryTab />}

                        {activeTab === 'fmi' && <FMIGuideTab />}

                        {activeTab === 'credits' && <CreditsTab />}
                    </div>
                </div>
            </div>
        </div>
    );
};

const HegemonyAssistant = () => (
    <GameProvider>
        <HegemonyContent />
    </GameProvider>
);

export default HegemonyAssistant;

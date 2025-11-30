import React, { Suspense } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import Header from './components/organisms/Header';
import PoliciesModal from './components/organisms/PoliciesModal';
import ErrorBoundary from './components/ErrorBoundary';
import MainTemplate from './components/templates/MainTemplate';

// Lazy load all page components to reduce initial bundle size
const HomePage = React.lazy(() => import('./components/pages/HomePage'));
const SetupGuidePage = React.lazy(() => import('./components/pages/SetupGuidePage'));
const PoliciesPage = React.lazy(() => import('./components/pages/PoliciesPage'));
const MaterialPage = React.lazy(() => import('./components/pages/MaterialPage'));
const RulesPage = React.lazy(() => import('./components/pages/RulesPage'));
const PhaseAssistantPage = React.lazy(() => import('./components/pages/PhaseAssistantPage'));
const TaxCalculatorPage = React.lazy(() => import('./components/pages/TaxCalculatorPage'));
const ShopPage = React.lazy(() => import('./components/pages/ShopPage'));
const FAQPage = React.lazy(() => import('./components/pages/FAQPage'));
const OtherRulesPage = React.lazy(() => import('./components/pages/OtherRulesPage'));
const DesignSystemPage = React.lazy(() => import('./components/pages/DesignSystemPage'));


const HegemonyContent = () => {
    const {
        activeTab,
        numPlayers,
        fiscalMultiplier,
        taxes
    } = useGame();

    return (
        <MainTemplate
            header={<Header />}
            modal={<PoliciesModal />}
            isLoading={false} // Suspense handles loading, but we could pass state here
        >
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
                        <p className="mt-4 text-muted-foreground">Chargement...</p>
                    </div>
                </div>
            }>
                {activeTab === 'home' && <HomePage />}
                {activeTab === 'setup-guide' && <SetupGuidePage numPlayers={numPlayers} />}

                {activeTab === 'policies' && (
                    <PoliciesPage />
                )}

                {activeTab === 'material' && <MaterialPage />}

                {activeTab === 'rules' && <RulesPage />}

                {activeTab === 'phases' && (
                    <PhaseAssistantPage />
                )}

                {activeTab === 'taxes' && (
                    <TaxCalculatorPage
                        fiscalMultiplier={fiscalMultiplier}
                        taxes={taxes}
                    />
                )}

                {activeTab === 'other-rules' && <OtherRulesPage />}
                {activeTab === 'shop' && <ShopPage />}
                {activeTab === 'faq' && <FAQPage />}
                {activeTab === 'design-system' && <DesignSystemPage />}
            </Suspense>
        </MainTemplate>
    );
};

const HegemonyAssistant = () => (
    <ErrorBoundary>
        <GameProvider>
            <HegemonyContent />
        </GameProvider>
    </ErrorBoundary>
);

export default HegemonyAssistant;

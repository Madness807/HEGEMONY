import React, { createContext, useContext, useState } from 'react';
import { useTaxCalculator } from '../hooks/useTaxCalculator';

const GameContext = createContext();

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};

export const GameProvider = ({ children, initialPlayers = 4 }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [numPlayers, setNumPlayers] = useState(initialPlayers);
    const [currentRound, setCurrentRound] = useState(1);
    const [currentPhase, setCurrentPhase] = useState(0);
    const [isPoliciesModalOpen, setIsPoliciesModalOpen] = useState(false);

    const [policies, setPolicies] = useState({
        fiscal: 'C',
        labor: 'B',
        taxation: 'B',
        healthWelfare: 'B',
        education: 'B',
        trade: 'B',
        immigration: 'B'
    });

    const [players, setPlayers] = useState({
        working: {
            population: 10,
            prosperity: 0,
            money: 30,
            food: 0,
            health: 0,
            education: 0,
            luxury: 0,
            influence: 1,
            syndicates: 0
        },
        middle: {
            population: 10,
            prosperity: 0,
            money: 40,
            food: 1,
            health: 1,
            luxury: 0,
            education: 0,
            influence: 1,
            businesses: 2
        },
        capitalist: {
            revenue: 120,
            capital: 0,
            wealth: 0,
            warehouseFood: 1,
            warehouseLuxury: 2,
            warehouseHealth: 0,
            warehouseEducation: 2,
            warehouseInfluence: 1,
            businesses: 4
        },
        state: {
            legitimacyWorking: 2,
            legitimacyMiddle: 2,
            legitimacyCapitalist: 2,
            treasury: 120,
            health: initialPlayers === 2 ? 5 : 6,
            education: initialPlayers === 2 ? 5 : 6,
            influence: initialPlayers === 2 ? 3 : 4
        }
    });

    const { fiscalMultiplier, taxes } = useTaxCalculator(policies, players);

    const updatePlayerStat = (className, statName, value) => {
        setPlayers(prev => ({
            ...prev,
            [className]: {
                ...prev[className],
                [statName]: value
            }
        }));
    };

    const updatePolicy = (policyName, value) => {
        setPolicies(prev => ({
            ...prev,
            [policyName]: value
        }));
    };

    const value = {
        activeTab,
        setActiveTab,
        numPlayers,
        setNumPlayers,
        currentRound,
        setCurrentRound,
        currentPhase,
        setCurrentPhase,
        isPoliciesModalOpen,
        setIsPoliciesModalOpen,
        policies,
        setPolicies,
        updatePolicy,
        players,
        setPlayers,
        updatePlayerStat,
        fiscalMultiplier,
        taxes
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

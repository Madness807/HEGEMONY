import { useState } from 'react';

export const useGameState = (initialPlayers = 4) => {
    const [activeTab, setActiveTab] = useState('setup');
    const [numPlayers, setNumPlayers] = useState(initialPlayers);
    const [currentRound, setCurrentRound] = useState(1);
    const [currentPhase, setCurrentPhase] = useState(0);

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
            // Personal resources for the Working Class
            population: 10,
            prosperity: 0,
            money: 30,
            food: 0,              // Personal goods consumed
            health: 0,            // Personal goods consumed
            education: 0,         // Personal goods consumed
            luxury: 0,            // Personal goods consumed
            influence: 1,         // Personal goods consumed
            syndicates: 0
        },
        middle: {
            // Personal resources for the Middle Class
            population: 10,
            prosperity: 0,
            money: 40,
            food: 1,              // Personal goods consumed
            health: 1,            // Personal goods consumed
            luxury: 0,            // Personal goods consumed
            education: 0,         // Personal goods consumed
            influence: 1,         // Personal goods consumed
            businesses: 2
        },
        capitalist: {
            // Business resources for the Capitalist Class
            revenue: 120,         // Chiffre d'Affaires (Business Revenue)
            capital: 0,
            wealth: 0,            // Victory Points
            warehouseFood: 1,            // Warehouse (goods produced by businesses)
            warehouseLuxury: 2,          // Warehouse (goods produced by businesses)
            warehouseHealth: 0,          // Warehouse (goods produced by businesses)
            warehouseEducation: 2,       // Warehouse (goods produced by businesses)
            warehouseInfluence: 1,       // Warehouse (goods produced by businesses)
            businesses: 4
        },
        state: {
            // State resources (4 players only)
            legitimacyWorking: 2,
            legitimacyMiddle: 2,
            legitimacyCapitalist: 2,
            treasury: 120,
            health: numPlayers === 2 ? 5 : 6,      // Public Services
            education: numPlayers === 2 ? 5 : 6,   // Public Services
            influence: numPlayers === 2 ? 3 : 4    // State Influence warehouse
        }
    });

    return {
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
    };
};

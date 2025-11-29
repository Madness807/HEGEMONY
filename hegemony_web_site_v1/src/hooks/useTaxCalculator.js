import { useMemo, useCallback } from 'react';

export const useTaxCalculator = (policies, players) => {
    const fiscalMultiplier = useMemo(() => {
        let base = policies.taxation === 'A' ? 3 : policies.taxation === 'B' ? 2 : 1;
        let healthMod = policies.healthWelfare === 'A' ? 2 : policies.healthWelfare === 'B' ? 1 : 0;
        let eduMod = policies.education === 'A' ? 2 : policies.education === 'B' ? 1 : 0;

        if (policies.taxation === 'A') {
            return base + (healthMod * 2) + (eduMod * 2);
        } else if (policies.taxation === 'B') {
            return base + healthMod + eduMod;
        }
        return base;
    }, [policies]);

    const calculateCorporateTax = useCallback((revenue) => {
        const rates = {
            'A': [1, 5, 12, 24, 40, 100, 160],
            'B': [2, 5, 10, 15, 30, 70, 120],
            'C': [2, 4, 7, 10, 20, 40, 60]
        };
        const thresholds = [5, 10, 25, 50, 100, 200, 300];
        const rate = rates[policies.taxation];

        for (let i = thresholds.length - 1; i >= 0; i--) {
            if (revenue >= thresholds[i]) return rate[i];
        }
        return 0;
    }, [policies.taxation]);

    const taxes = useMemo(() => {
        const taxTable = {
            working: {
                'A-A': 7, 'A-B': 6, 'A-C': 5,
                'B-A': 4, 'B-B': 4, 'B-C': 4,
                'C-A': 1, 'C-B': 2, 'C-C': 3
            },
            middle: {
                'A-A': 7, 'A-B': 6, 'A-C': 5,
                'B-A': 4, 'B-B': 4, 'B-C': 4,
                'C-A': 1, 'C-B': 2, 'C-C': 3
            }
        };

        const key = `${policies.labor}-${policies.taxation}`;

        return {
            working: {
                income: taxTable.working[key] * players.working.population,
                total: taxTable.working[key] * players.working.population
            },
            middle: {
                income: taxTable.middle[key] * players.middle.population,
                patronal: fiscalMultiplier * players.middle.businesses,
                total: (taxTable.middle[key] * players.middle.population) + (fiscalMultiplier * players.middle.businesses)
            },
            capitalist: {
                patronal: fiscalMultiplier * players.capitalist.businesses,
                corporate: calculateCorporateTax(players.capitalist.revenue),
                total: (fiscalMultiplier * players.capitalist.businesses) + calculateCorporateTax(players.capitalist.revenue)
            }
        };
    }, [policies, players, fiscalMultiplier, calculateCorporateTax]);

    return { fiscalMultiplier, taxes };
};

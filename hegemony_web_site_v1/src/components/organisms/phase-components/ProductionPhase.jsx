import React from 'react';
import { Info, Calculator } from 'lucide-react';
import SolidCard from '../../molecules/SolidCard';
import CheckItem from '../../molecules/CheckItem';
import TaxCalculatorPage from '../../pages/TaxCalculatorPage';
import { useGame } from '../../../context/GameContext';
import AccordionSection from '../../molecules/AccordionSection';

const ProductionPhase = () => {
    const { fiscalMultiplier, taxes } = useGame();
    const [checks, setChecks] = React.useState({
        prod_salaries: false,
        prod_resources: false,
        prod_workers: false,
        needs_food: false,
        imf_limit: false,
        tax_calculator: false
    });

    const toggleCheck = (id) => {
        setChecks(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
                <div className="flex items-center gap-2 text-slate-400">
                    <Info className="w-5 h-5" />
                    <span className="font-medium">Ordre inversé :</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 1. Production */}
                    <AccordionSection
                        title="1. Production"
                        defaultOpen={true}
                    >
                        <div className="space-y-4">
                            <CheckItem
                                checked={checks.prod_salaries}
                                onToggle={() => toggleCheck('prod_salaries')}
                            >
                                Payer les Salaires
                            </CheckItem>
                            <CheckItem
                                checked={checks.prod_resources}
                                onToggle={() => toggleCheck('prod_resources')}
                            >
                                Produire les ressources
                            </CheckItem>
                            <CheckItem
                                checked={checks.prod_workers}
                                onToggle={() => toggleCheck('prod_workers')}
                            >
                                Relever les Travailleurs
                            </CheckItem>
                        </div>
                    </AccordionSection>

                    {/* 2. Besoins */}
                    <AccordionSection
                        title="2. Besoins"
                        defaultOpen={true}
                    >
                        <div className="space-y-4">
                            <CheckItem
                                checked={checks.needs_food}
                                onToggle={() => toggleCheck('needs_food')}
                            >
                                Acheter Nourriture
                            </CheckItem>
                        </div>
                    </AccordionSection>

                    {/* 3. FMI */}
                    <AccordionSection
                        title="3. FMI"
                        defaultOpen={true}
                    >
                        <div className="space-y-4">
                            <CheckItem
                                checked={checks.imf_limit}
                                onToggle={() => toggleCheck('imf_limit')}
                            >
                                Vérifier limite d'Emprunts
                            </CheckItem>
                        </div>
                    </AccordionSection>

                    {/* 4. Impôts */}
                    <AccordionSection
                        title="4. Impôts"
                        defaultOpen={true}
                    >
                        <div className="space-y-4">
                            <CheckItem
                                checked={checks.tax_calculator}
                                onToggle={() => toggleCheck('tax_calculator')}
                            >
                                Utiliser le calculateur ci-dessous !
                            </CheckItem>
                        </div>
                    </AccordionSection>
                </div>
            </div>

            {/* Tax Calculator Section - Accordion */}
            <AccordionSection
                title={<h3 className="text-xl font-bold text-yellow-400">Calculateur d'Impôts</h3>}
                icon={Calculator}
                defaultOpen={false}
            >
                <TaxCalculatorPage fiscalMultiplier={fiscalMultiplier} taxes={taxes} />
            </AccordionSection>
        </div>
    );
};

export default ProductionPhase;

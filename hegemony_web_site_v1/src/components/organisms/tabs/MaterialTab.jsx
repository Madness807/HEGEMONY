import React, { useState } from 'react';
import { Package, ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ClassReference from '../../atoms/ClassReference';
import SafeImage from '../../atoms/SafeImage';



import { ASSETS } from '@/constants/materialData';

const Item = ({ name, count, color = 'slate' }) => {
    const colors = {
        red: 'bg-red-900/30 border-red-800 text-red-300',
        yellow: 'bg-yellow-900/30 border-yellow-800 text-yellow-300',
        blue: 'bg-blue-900/30 border-blue-800 text-blue-300',
        gray: 'glass-inner text-slate-300',
        green: 'bg-green-900/30 border-green-800 text-green-300',
        purple: 'bg-purple-900/30 border-purple-800 text-purple-300',
        slate: 'glass-inner text-slate-300'
    };

    return (
        <div className={`flex justify-between items-center p-3 rounded-lg border ${colors[color]}`}>
            <span className="font-medium">{name}</span>
            <span className="text-sm opacity-75">{count}</span>
        </div>
    );
};

const Section = ({ title, total, children, color = 'blue', isOpen, onToggle }) => {
    const colorClasses = {
        blue: 'border-blue-500 text-blue-400',
        green: 'border-green-500 text-green-400',
        purple: 'border-purple-500 text-purple-400',
        red: 'border-red-500 text-red-400',
        yellow: 'border-yellow-500 text-yellow-400',
        gray: 'border-slate-500 text-slate-400'
    };

    return (
        <Card className="glass-effect">
            <CardHeader>
                <button
                    onClick={onToggle}
                    className="w-full flex items-center justify-between hover:opacity-80 transition-opacity"
                    aria-expanded={isOpen}
                    aria-controls={`section-${title.props?.label || title}`}
                >
                    <div className="flex items-center gap-3">
                        {isOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                        <CardTitle className={`text-2xl ${colorClasses[color]}`}>{title}</CardTitle>
                    </div>
                    <div className={`px-4 py-2 rounded-lg font-bold ${colorClasses[color]} bg-opacity-20`}>
                        {total}
                    </div>
                </button>
            </CardHeader>
            {isOpen && (
                <CardContent>
                    {children}
                </CardContent>
            )}
        </Card>
    );
};

const MaterialTab = () => {
    const [expanded, setExpanded] = useState({
        working: true,
        middle: false,
        capitalist: false,
        state: false,
        state: false,
        general: false,
        cardSheets: true
    });

    const {
        boardWorker, pawnWorker, legitimacyWorker, actionBackWorker, cooperativeFarm, demonstration, strike, workAction1, workAction2, workAction3, workAction4, workAction5, workAction6, workAction7,
        boardMiddle, pawnMiddle, legitimacyMiddle, actionBackMiddle, enterpriseMiddle, midAction1, midAction2, midAction3, midAction4, midAction5, midAction6, midAction7, midAction8, midAction9, midAction10, midAction11,
        boardCapitalist, pawnCapitalist, legitimacyCapitalist, actionBackCapitalist, enterpriseCapitalist,
        boardState, pawnState, enterpriseState, actionBackState,
        food1, food3, food5, luxe1, luxe3, luxe5, health1, health3, health5, education1, education3, education5,
        exportCards, immigrationCards, politicalAgendas
    } = ASSETS.local;

    const { working: workingWorkers, middle: middleWorkers, workingFarm } = ASSETS.workers;

    const toggle = (section) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="space-y-8 animate-fade-in">


            {/* CLASSE OUVRIÈRE */}
            <Section
                id="working"
                title={<ClassReference type="working" label="CLASSE OUVRIÈRE" size="h-8 w-8" />}
                total="Complet"
                color="red"
                isOpen={expanded.working}
                onToggle={() => toggle('working')}
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Matériel Joueur</h4>
                            <div className="space-y-4">
                                <SafeImage src={boardWorker} alt="Plateau Ouvrière" className="w-full rounded-lg shadow-lg" />
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <SafeImage src={pawnWorker} alt="Pion Ouvrière" className="w-12 h-12 rounded-full border-2 border-red-500" />
                                        <span className="text-red-400 font-bold">Pion Ouvrier</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 mt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-red-300">Dos Cartes Action</span>
                                        <SafeImage src={actionBackWorker} alt="Dos Action Ouvrier" className="w-full rounded-lg shadow-md" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-red-300">Ferme Coopérative</span>
                                        <SafeImage src={cooperativeFarm} alt="Ferme Coopérative" className="w-full rounded-lg shadow-md" />
                                    </div>
                                </div>
                                <Item name="Cartes Action" count="40 cartes" color="red" />
                                <Item name="Travailleurs" count="48 meeples" color="red" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Types de Travailleurs</h4>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={workingWorkers.unskilledFemale} alt="Ouvrier Non Qualifié" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-red-300 text-center">Non Qualifié</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={workingWorkers.educationFemale} alt="Ouvrier Éducation" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-red-300 text-center">Éducation</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={workingWorkers.healthMale} alt="Ouvrier Santé" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-red-300 text-center">Santé</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={workingWorkers.luxuryFemale} alt="Ouvrier Luxe" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-red-300 text-center">Luxe</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={workingWorkers.mediaMale} alt="Ouvrier Média" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-red-300 text-center">Média</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={workingFarm.farmMale} alt="Ouvrier Agricole (H)" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-red-300 text-center">Agricole (H)</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={workingFarm.farmFemaleAlt} alt="Ouvrier Agricole (Alt)" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-red-300 text-center">Agricole (Alt)</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Actions & Jetons</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {[workAction1, workAction2, workAction3, workAction4, workAction5, workAction6, workAction7].map((card, i) => (
                                    <SafeImage key={`work-${i}`} src={card} alt={`Action Ouvrière ${i + 1}`} className="w-full rounded-lg shadow-lg hover:scale-110 transition-transform duration-200" />
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={strike} alt="Grève" className="w-16 h-auto rounded-full shadow-lg" />
                                    <span className="text-red-400 font-bold text-xs">Grève (x7)</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={demonstration} alt="Manifestation" className="w-16 h-auto rounded-full shadow-lg" />
                                    <span className="text-red-400 font-bold text-xs">Manifestation (x1)</span>
                                </div>
                            </div>

                            {/* Votes Ouvriers */}
                            <div className="mt-4">
                                <h5 className="text-lg font-bold text-red-300 mb-2">🗳️ Votes Ouvriers</h5>
                                <div className="flex gap-4 justify-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.votes.workerYes} alt="Vote Oui Ouvrier" className="w-16 h-auto object-contain shadow-lg" />
                                        <span className="text-red-400 font-bold text-xs">Oui</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.votes.workerNo} alt="Vote Non Ouvrier" className="w-16 h-auto object-contain shadow-lg" />
                                        <span className="text-red-400 font-bold text-xs">Non</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CLASSE MOYENNE */}
            <Section
                id="middle"
                title={<ClassReference type="middle" label="CLASSE MOYENNE" size="h-8 w-8" />}
                total="Complet"
                color="yellow"
                isOpen={expanded.middle}
                onToggle={() => toggle('middle')}
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Matériel Joueur</h4>
                            <div className="space-y-4">
                                <SafeImage src={boardMiddle} alt="Plateau Moyenne" className="w-full rounded-lg shadow-lg" />
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <SafeImage src={pawnMiddle} alt="Pion Moyenne" className="w-12 h-12 rounded-full border-2 border-yellow-500" />
                                        <span className="text-yellow-400 font-bold">Pion Moyenne</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 mt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-yellow-300">Dos Cartes Action</span>
                                        <SafeImage src={actionBackMiddle} alt="Dos Action Moyenne" className="w-full rounded-lg shadow-md" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-yellow-300">Entreprise</span>
                                        <SafeImage src={enterpriseMiddle} alt="Entreprise Moyenne" className="w-full rounded-lg shadow-md" />
                                    </div>
                                </div>
                                <Item name="Cartes Action" count="40 cartes" color="yellow" />
                                <Item name="Entreprises" count="17 cartes" color="yellow" />
                                <Item name="Travailleurs" count="42 meeples" color="yellow" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Types de Travailleurs</h4>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={middleWorkers.unskilledMale} alt="Moyen Non Qualifié" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-yellow-300 text-center">Non Qualifié</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={middleWorkers.educationGeneric} alt="Moyen Éducation" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-yellow-300 text-center">Éducation</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={middleWorkers.healthFemale} alt="Moyen Santé" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-yellow-300 text-center">Santé</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={middleWorkers.luxuryFemale} alt="Moyen Luxe" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-yellow-300 text-center">Luxe</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={middleWorkers.mediaMale} alt="Moyen Média" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-yellow-300 text-center">Média</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <SafeImage src={middleWorkers.farmFemale} alt="Moyen Agricole" className="w-full rounded shadow-sm" />
                                    <span className="text-xs text-yellow-300 text-center">Agricole</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Actions de Classe</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {[midAction1, midAction2, midAction3, midAction4, midAction5, midAction6, midAction7, midAction8, midAction9, midAction10, midAction11].map((card, i) => (
                                    <SafeImage key={`mid-${i}`} src={card} alt={`Action Moyenne ${i + 1}`} className="w-full rounded-lg shadow-lg hover:scale-110 transition-transform duration-200" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CLASSE CAPITALISTE */}
            <Section
                id="capitalist"
                title={<ClassReference type="capitalist" label="CLASSE CAPITALISTE" size="h-8 w-8" />}
                total="Complet"
                color="blue"
                isOpen={expanded.capitalist}
                onToggle={() => toggle('capitalist')}
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Matériel Joueur</h4>
                            <div className="space-y-4">
                                <SafeImage src={boardCapitalist} alt="Plateau Capitaliste" className="w-full rounded-lg shadow-lg" />
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <SafeImage src={pawnCapitalist} alt="Pion Capitaliste" className="w-12 h-12 rounded-full border-2 border-blue-500" />
                                        <span className="text-blue-400 font-bold">Pion Capitaliste</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Cartes & Éléments</h4>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-blue-300">Dos Cartes Action</span>
                                        <SafeImage src={actionBackCapitalist} alt="Dos Action Capitaliste" className="w-full rounded-lg shadow-md" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-blue-300">Entreprise</span>
                                        <SafeImage src={enterpriseCapitalist} alt="Entreprise Capitaliste" className="w-full rounded-lg shadow-md" />
                                    </div>
                                </div>
                                <Item name="Cartes Action" count="40 cartes" color="blue" />
                                <Item name="Entreprises" count="28 cartes" color="blue" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ÉTAT */}
            <Section
                id="state"
                title={<ClassReference type="state" label="L'ÉTAT" size="h-8 w-8" />}
                total="Complet"
                color="gray"
                isOpen={expanded.state}
                onToggle={() => toggle('state')}
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Matériel Joueur</h4>
                            <div className="space-y-4">
                                <SafeImage src={boardState} alt="Plateau État" className="w-full rounded-lg shadow-lg" />
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <SafeImage src={pawnState} alt="Pion État" className="w-12 h-12 rounded-full border-2 border-gray-500" />
                                        <span className="text-gray-400 font-bold">Pion État</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Cartes & Éléments</h4>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-slate-300">Dos Cartes Action</span>
                                        <SafeImage src={actionBackState} alt="Dos Action État" className="w-full rounded-lg shadow-md" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-slate-300">Entreprise Publique</span>
                                        <SafeImage src={enterpriseState} alt="Entreprise Publique" className="w-full rounded-lg shadow-md" />
                                    </div>
                                </div>
                                <Item name="Cartes Action" count="40 cartes" color="gray" />
                                <Item name="Entreprises Publiques" count="12 cartes" color="gray" />
                                <Item name="Cartes Événement" count="25 cartes" color="gray" />
                            </div>
                        </div>
                    </div>

                    {/* Jetons de Légitimité */}
                    <div className="mt-6">
                        <h4 className="text-xl font-bold text-white mb-4">⚖️ Jetons de Légitimité</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center gap-2 glass-effect p-4 rounded-lg">
                                <SafeImage src={ASSETS.legitimacy.worker} alt="Légitimité Ouvrière" className="w-auto h-20 max-w-32 object-contain" />
                                <span className="text-red-400 font-bold text-sm">Classe Ouvrière</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 glass-effect p-4 rounded-lg">
                                <SafeImage src={ASSETS.legitimacy.middle} alt="Légitimité Moyenne" className="w-auto h-20 max-w-32 object-contain" />
                                <span className="text-yellow-400 font-bold text-sm">Classe Moyenne</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 glass-effect p-4 rounded-lg">
                                <SafeImage src={ASSETS.legitimacy.capitalist} alt="Légitimité Capitaliste" className="w-auto h-20 max-w-32 object-contain" />
                                <span className="text-blue-400 font-bold text-sm">Classe Capitaliste</span>
                            </div>
                        </div>
                    </div>

                    {/* Jetons de Vote */}
                    <div className="mt-6">
                        <h4 className="text-xl font-bold text-white mb-4">🗳️ Jetons de Vote État</h4>
                        <div className="flex gap-4 justify-center glass-effect p-4 rounded-lg max-w-xs mx-auto">
                            <div className="flex flex-col items-center gap-2">
                                <SafeImage src={ASSETS.votes.yes} alt="Vote Oui" className="w-16 h-auto object-contain shadow-lg" />
                                <span className="text-slate-400 font-bold text-sm">Oui</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <SafeImage src={ASSETS.votes.no} alt="Vote Non" className="w-16 h-auto object-contain shadow-lg" />
                                <span className="text-slate-400 font-bold text-sm">Non</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>


            {/* MATÉRIEL GÉNÉRAL */}
            <Section
                id="general"
                title="📦 MATÉRIEL GÉNÉRAL"
                total="Divers"
                color="purple"
                isOpen={expanded.general}
                onToggle={() => toggle('general')}
            >
                <div className="space-y-8">
                    {/* Ressources */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Ressources & Monnaie</h4>

                        {/* Ressources Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Nourriture */}
                            <div className="glass-effect p-4 rounded-lg">
                                <h5 className="text-green-400 font-bold flex items-center gap-2 mb-3">
                                    <span>🌾 Nourriture</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.food1} alt="Nourriture 1" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-green-400 font-bold text-sm">x1</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.food3} alt="Nourriture 3" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-green-400 font-bold text-sm">x3</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.food5} alt="Nourriture 5" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-green-400 font-bold text-sm">x5</span>
                                    </div>
                                </div>
                            </div>

                            {/* Luxe */}
                            <div className="glass-effect p-4 rounded-lg">
                                <h5 className="text-blue-400 font-bold flex items-center gap-2 mb-3">
                                    <span>📱 Luxe</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.luxe1} alt="Luxe 1" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-blue-400 font-bold text-sm">x1</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.luxe3} alt="Luxe 3" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-blue-400 font-bold text-sm">x3</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.luxe5} alt="Luxe 5" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-blue-400 font-bold text-sm">x5</span>
                                    </div>
                                </div>
                            </div>

                            {/* Santé */}
                            <div className="glass-effect p-4 rounded-lg">
                                <h5 className="text-red-400 font-bold flex items-center gap-2 mb-3">
                                    <span>❤️ Santé</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.health1} alt="Santé 1" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-red-400 font-bold text-sm">x1</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.health3} alt="Santé 3" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-red-400 font-bold text-sm">x3</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.health5} alt="Santé 5" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-red-400 font-bold text-sm">x5</span>
                                    </div>
                                </div>
                            </div>

                            {/* Éducation */}
                            <div className="glass-effect p-4 rounded-lg">
                                <h5 className="text-yellow-400 font-bold flex items-center gap-2 mb-3">
                                    <span>🎓 Éducation</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.education1} alt="Éducation 1" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-yellow-400 font-bold text-sm">x1</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.education3} alt="Éducation 3" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-yellow-400 font-bold text-sm">x3</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SafeImage src={ASSETS.local.education5} alt="Éducation 5" className="w-20 h-auto object-contain rounded-lg shadow-lg" />
                                        <span className="text-yellow-400 font-bold text-sm">x5</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Billets / Monnaie */}
                        <div className="glass-effect p-6 rounded-lg">
                            <h5 className="text-green-400 font-bold mb-4 text-lg">💵 Billets</h5>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens[1]} alt="Billet 1" className="w-full h-auto object-contain rounded shadow-md" />
                                    <span className="text-green-300 font-bold">1</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens[5]} alt="Billet 5" className="w-full h-auto object-contain rounded shadow-md" />
                                    <span className="text-green-300 font-bold">5</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens[10]} alt="Billet 10" className="w-full h-auto object-contain rounded shadow-md" />
                                    <span className="text-green-300 font-bold">10</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens[20]} alt="Billet 20" className="w-full h-auto object-contain rounded shadow-md" />
                                    <span className="text-green-300 font-bold">20</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens[50]} alt="Billet 50" className="w-full h-auto object-contain rounded shadow-md" />
                                    <span className="text-green-300 font-bold">50</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens[100]} alt="Billet 100" className="w-full h-auto object-contain rounded shadow-md" />
                                    <span className="text-green-300 font-bold">100</span>
                                </div>
                            </div>
                        </div>

                        {/* Jetons Spéciaux */}
                        <div className="mt-6">
                            <h5 className="text-purple-400 font-bold mb-2">✨ Jetons Spéciaux</h5>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens.machinery} alt="Machinerie" className="w-20 h-20 object-contain hover:scale-110 transition-transform" />
                                    <span className="text-purple-300 font-bold text-sm">Machinerie</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens.freeTrade} alt="Zone Libre Échange" className="w-20 h-20 object-contain hover:scale-110 transition-transform" />
                                    <span className="text-purple-300 font-bold text-sm">Zone Libre Échange</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={ASSETS.tokens.storage} alt="Stockage" className="w-20 h-20 object-contain hover:scale-110 transition-transform" />
                                    <span className="text-purple-300 font-bold text-sm">Stockage</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Autres */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Autres Éléments</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <span className="text-sm font-bold text-green-300">Cartes Export</span>
                                <SafeImage src={exportCards} alt="Cartes Export" className="w-full rounded-lg shadow-md" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-sm font-bold text-slate-300">Cartes Immigration</span>
                                <SafeImage src={immigrationCards} alt="Cartes Immigration" className="w-full rounded-lg shadow-md" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-sm font-bold text-purple-300">Agendas Politiques</span>
                                <SafeImage src={politicalAgendas} alt="Agendas Politiques" className="w-full rounded-lg shadow-md" />
                            </div>
                            <Item name="Cubes Vote" count="75 cubes" color="slate" />
                            <Item name="Cubes Influence" count="35 cubes" color="purple" />
                            <Item name="Tuiles Aides Sociales" count="2" color="slate" />
                            <Item name="Engrenages (Automatisé)" count="6" color="slate" />
                        </div>
                    </div>
                </div>
            </Section >

            {/* PLANCHES DE CARTES */}
            < Section
                id="cardSheets"
                title="🃏 PLANCHES DE CARTES"
                total={`${ASSETS.cardDecks.length} decks`}
                color="green"
                isOpen={expanded.cardSheets}
                onToggle={() => toggle('cardSheets')}
            >
                <div className="space-y-8">
                    <p className="text-slate-300">
                        Toutes les planches de cartes du jeu Hegemony. Cliquez sur les images pour les voir en grand.
                    </p>

                    {/* Group by category */}
                    {['common', 'working', 'middle', 'capitalist', 'state', 'special'].map(category => {
                        const categoryDecks = ASSETS.cardDecks.filter(deck => deck.category === category);
                        if (categoryDecks.length === 0) return null;

                        const categoryLabels = {
                            common: { label: '🎴 Commun', color: 'slate' },
                            working: { label: '⚒️ Classe Ouvrière', color: 'red' },
                            middle: { label: '🏢 Classe Moyenne', color: 'yellow' },
                            capitalist: { label: '💼 Classe Capitaliste', color: 'blue' },
                            state: { label: '🏛️ État', color: 'purple' },
                            special: { label: '⭐ Spécial', color: 'pink' }
                        };

                        return (
                            <div key={category} className="space-y-4">
                                <h4 className="text-xl font-bold text-white">
                                    {categoryLabels[category].label}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryDecks.map(deck => (
                                        <div key={deck.id} className="glass-effect rounded-lg overflow-hidden hover:border-pink-500/50 transition-colors group">
                                            <div className="relative aspect-video glass-inner-dark">
                                                <SafeImage
                                                    src={deck.faceUrl}
                                                    alt={`${deck.name} - Face`}
                                                    className="w-full h-full object-contain p-2"
                                                />
                                                {deck.useRemote && (
                                                    <div className="absolute top-2 right-2 bg-pink-500/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                                        Steam
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                                    <a
                                                        href={deck.faceUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                                        title="Voir la face en grand"
                                                    >
                                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                    </a>
                                                    {deck.backUrl && (
                                                        <a
                                                            href={deck.backUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                                            title="Voir le dos en grand"
                                                        >
                                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold text-lg text-white mb-1">{deck.name}</h3>
                                                <div className="flex justify-between text-sm text-slate-400">
                                                    <span>Grille : {deck.grid}</span>
                                                    <span>{deck.count} cartes</span>
                                                </div>
                                                {deck.steamDeckId && (
                                                    <div className="text-xs text-slate-500 mt-1">
                                                        Steam Deck ID: {deck.steamDeckId}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section >
        </div >
    );
};

export default MaterialTab;

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
        general: false
    });

    const {
        boardWorker, pawnWorker, legitimacyWorker, actionBackWorker, cooperativeFarm, demonstration, strike, workAction1, workAction2, workAction3, workAction4, workAction5, workAction6, workAction7,
        boardMiddle, pawnMiddle, legitimacyMiddle, actionBackMiddle, enterpriseMiddle, midAction1, midAction2, midAction3, midAction4, midAction5, midAction6, midAction7, midAction8, midAction9, midAction10, midAction11,
        boardCapitalist, pawnCapitalist, legitimacyCapitalist, actionBackCapitalist, enterpriseCapitalist,
        boardState, pawnState, enterpriseState, actionBackState,
        food1, food3, food5, luxe1, luxe3, luxe5, health1, health3, health5, education1, education3, education5,
        exportCards, immigrationCards, politicalAgendas
    } = ASSETS.local;

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
                                    <div className="flex items-center gap-2">
                                        <SafeImage src={legitimacyWorker} alt="Légitimité Ouvrier" className="w-12 h-12 rounded-full shadow-lg" />
                                        <span className="text-red-400 font-bold">Légitimité</span>
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
                            <h4 className="text-xl font-bold text-white">Actions & Jetons</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {[workAction1, workAction2, workAction3, workAction4, workAction5, workAction6, workAction7].map((card, i) => (
                                    <SafeImage key={`work-${i}`} src={card} alt={`Action Ouvrière ${i + 1}`} className="w-full rounded-lg shadow-lg hover:scale-110 transition-transform duration-200" />
                                ))}
                            </div>
                            <div className="flex gap-4 mt-4">
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={strike} alt="Grève" className="w-16 h-auto rounded-full shadow-lg" />
                                    <span className="text-red-400 font-bold text-xs">Grève (x7)</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <SafeImage src={demonstration} alt="Manifestation" className="w-16 h-auto rounded-full shadow-lg" />
                                    <span className="text-red-400 font-bold text-xs">Manifestation (x1)</span>
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
                                    <div className="flex items-center gap-2">
                                        <SafeImage src={legitimacyMiddle} alt="Légitimité Moyenne" className="w-12 h-12 rounded-full shadow-lg" />
                                        <span className="text-yellow-400 font-bold">Légitimité</span>
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
                                    <div className="flex items-center gap-2">
                                        <SafeImage src={legitimacyCapitalist} alt="Légitimité Capitaliste" className="w-12 h-12 rounded-full shadow-lg" />
                                        <span className="text-blue-400 font-bold">Légitimité</span>
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
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <h5 className="text-green-400 font-bold flex items-center gap-2">
                                    <span>🌾 Nourriture</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { img: ASSETS.local.food1, val: '1' },
                                        { img: ASSETS.local.food3, val: '3' },
                                        { img: ASSETS.local.food5, val: '5' }
                                    ].map((item) => (
                                        <div key={`food-${item.val}`} className="flex flex-col items-center gap-2">
                                            <SafeImage src={item.img} alt={`Nourriture ${item.val}`} className="w-24 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform" />
                                            <span className="text-green-400 font-bold">x{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-blue-400 font-bold flex items-center gap-2">
                                    <span>📱 Luxe</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { img: ASSETS.local.luxe1, val: '1' },
                                        { img: ASSETS.local.luxe3, val: '3' },
                                        { img: ASSETS.local.luxe5, val: '5' }
                                    ].map((item) => (
                                        <div key={`luxe-${item.val}`} className="flex flex-col items-center gap-2">
                                            <SafeImage src={item.img} alt={`Luxe ${item.val}`} className="w-24 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform" />
                                            <span className="text-blue-400 font-bold">x{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-red-400 font-bold flex items-center gap-2">
                                    <span>❤️ Santé</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { img: ASSETS.local.health1, val: '1' },
                                        { img: ASSETS.local.health3, val: '3' },
                                        { img: ASSETS.local.health5, val: '5' }
                                    ].map((item) => (
                                        <div key={`health-${item.val}`} className="flex flex-col items-center gap-2">
                                            <SafeImage src={item.img} alt={`Santé ${item.val}`} className="w-24 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform" />
                                            <span className="text-red-400 font-bold">x{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-yellow-400 font-bold flex items-center gap-2">
                                    <span>🎓 Éducation</span>
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { img: ASSETS.local.education1, val: '1' },
                                        { img: ASSETS.local.education3, val: '3' },
                                        { img: ASSETS.local.education5, val: '5' }
                                    ].map((item) => (
                                        <div key={`edu-${item.val}`} className="flex flex-col items-center gap-2">
                                            <SafeImage src={item.img} alt={`Éducation ${item.val}`} className="w-24 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform" />
                                            <span className="text-yellow-400 font-bold">x{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h5 className="text-green-400 font-bold mb-2">💵 Billets</h5>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                {[
                                    { img: ASSETS.tokens[1], val: '1' },
                                    { img: ASSETS.tokens[5], val: '5' },
                                    { img: ASSETS.tokens[10], val: '10' },
                                    { img: ASSETS.tokens[20], val: '20' },
                                    { img: ASSETS.tokens[50], val: '50' },
                                    { img: ASSETS.tokens[100], val: '100' }
                                ].map((item) => (
                                    <div key={`token-${item.val}`} className="flex flex-col items-center gap-2">
                                        <SafeImage src={item.img} alt={`Billet ${item.val}`} className="w-full h-auto rounded shadow-md hover:scale-105 transition-transform" />
                                        <span className="text-green-300 font-bold">{item.val}</span>
                                    </div>
                                ))}
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
            </Section>
        </div>
    );
};

export default MaterialTab;

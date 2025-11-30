import React, { useState } from 'react';
import { Package } from 'lucide-react';
import ClassReference from '../atoms/ClassReference';
import SafeImage from '../atoms/SafeImage';
import { RulesSection } from '../molecules/RulesComponents';
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
            <span className="font-medium text-base">{name}</span>
            <span className="text-sm opacity-75">{count}</span>
        </div>
    );
};

const MaterialPage = () => {
    const [expanded, setExpanded] = useState({
        working: true,
        middle: false,
        capitalist: false,
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

    const renderTotal = (total, color) => {
        const colorClasses = {
            blue: 'border-blue-500 text-blue-400',
            green: 'border-green-500 text-green-400',
            purple: 'border-purple-500 text-purple-400',
            red: 'border-red-500 text-red-400',
            yellow: 'border-yellow-500 text-yellow-400',
            gray: 'border-slate-500 text-slate-400'
        };
        return (
            <div className={`px-4 py-2 rounded-lg font-bold text-base border ${colorClasses[color]} bg-black/20`}>
                {total}
            </div>
        );
    };

    return (
        <div className="space-y-8 animate-fade-in">

            {/* CLASSE OUVRIÈRE */}
            <RulesSection
                title={<ClassReference type="working" label="CLASSE OUVRIÈRE" size="h-8 w-8" />}
                color="red"
                collapsible
                isOpen={expanded.working}
                onToggle={() => toggle('working')}
                rightElement={renderTotal('35 Éléments', 'red')}
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-xl text-white border-b border-white/10 pb-2">Plateau & Pions</h4>
                        <div className="grid gap-3">
                            <Item name="Plateau Joueur" count="1" color="red" />
                            <div className="relative h-32 rounded-lg overflow-hidden border border-red-500/30">
                                <SafeImage src={boardWorker} alt="Plateau Ouvrier" className="w-full h-full object-cover" />
                            </div>
                            <Item name="Travailleurs" count="30" color="red" />
                            <div className="flex gap-2 justify-center p-4 bg-black/20 rounded-lg">
                                <SafeImage src={workingWorkers.unskilledFemale} alt="Travailleurs" className="h-12 w-auto" />
                            </div>
                            <Item name="Marqueurs Population" count="3" color="red" />
                            <Item name="Marqueurs Score" count="1" color="red" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-xl text-white border-b border-white/10 pb-2">Cartes & Tuiles</h4>
                        <div className="grid gap-3">
                            <Item name="Cartes Action" count="45" color="red" />
                            <div className="grid grid-cols-4 gap-2">
                                {[workAction1, workAction2, workAction3, workAction4].map((src, i) => (
                                    <div key={i} className="aspect-[2/3] rounded overflow-hidden border border-white/10">
                                        <SafeImage src={src} alt={`Action ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <Item name="Tuiles Syndicat" count="15" color="red" />
                            <Item name="Tuiles Grève" count="5" color="red" />
                            <div className="flex gap-4 justify-center">
                                <SafeImage src={strike} alt="Grève" className="h-12 w-12" />
                            </div>
                            <Item name="Aide de Jeu" count="1" color="red" />
                        </div>
                    </div>
                </div>
            </RulesSection>

            {/* CLASSE MOYENNE */}
            <RulesSection
                title={<ClassReference type="middle" label="CLASSE MOYENNE" size="h-8 w-8" />}
                color="yellow"
                collapsible
                isOpen={expanded.middle}
                onToggle={() => toggle('middle')}
                rightElement={renderTotal('32 Éléments', 'yellow')}
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Plateau & Pions</h4>
                        <div className="grid gap-3">
                            <Item name="Plateau Joueur" count="1" color="yellow" />
                            <div className="relative h-32 rounded-lg overflow-hidden border border-yellow-500/30">
                                <SafeImage src={boardMiddle} alt="Plateau Moyen" className="w-full h-full object-cover" />
                            </div>
                            <Item name="Travailleurs" count="20" color="yellow" />
                            <div className="flex gap-2 justify-center p-4 bg-black/20 rounded-lg">
                                <SafeImage src={middleWorkers.unskilledMale} alt="Travailleurs Moyens" className="h-12 w-auto" />
                            </div>
                            <Item name="Marqueurs Population" count="3" color="yellow" />
                            <Item name="Marqueurs Score" count="1" color="yellow" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Cartes & Tuiles</h4>
                        <div className="grid gap-3">
                            <Item name="Cartes Action" count="45" color="yellow" />
                            <div className="grid grid-cols-4 gap-2">
                                {[midAction1, midAction2, midAction3, midAction4].map((src, i) => (
                                    <div key={i} className="aspect-[2/3] rounded overflow-hidden border border-white/10">
                                        <SafeImage src={src} alt={`Action ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <Item name="Tuiles Entreprise" count="15" color="yellow" />
                            <div className="flex justify-center">
                                <SafeImage src={enterpriseMiddle} alt="Entreprise Moyenne" className="h-16 w-auto" />
                            </div>
                            <Item name="Aide de Jeu" count="1" color="yellow" />
                        </div>
                    </div>
                </div>
            </RulesSection>

            {/* CLASSE CAPITALISTE */}
            <RulesSection
                title={<ClassReference type="capitalist" label="CLASSE CAPITALISTE" size="h-8 w-8" />}
                color="blue"
                collapsible
                isOpen={expanded.capitalist}
                onToggle={() => toggle('capitalist')}
                rightElement={renderTotal('28 Éléments', 'blue')}
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Plateau & Pions</h4>
                        <div className="grid gap-3">
                            <Item name="Plateau Joueur" count="1" color="blue" />
                            <div className="relative h-32 rounded-lg overflow-hidden border border-blue-500/30">
                                <SafeImage src={boardCapitalist} alt="Plateau Capitaliste" className="w-full h-full object-cover" />
                            </div>
                            <Item name="Marqueurs Score" count="1" color="blue" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Cartes & Tuiles</h4>
                        <div className="grid gap-3">
                            <Item name="Cartes Action" count="45" color="blue" />
                            <Item name="Tuiles Entreprise" count="25" color="blue" />
                            <div className="flex justify-center">
                                <SafeImage src={enterpriseCapitalist} alt="Entreprise Capitaliste" className="h-16 w-auto" />
                            </div>
                            <Item name="Tuiles Automates" count="8" color="blue" />
                            <Item name="Aide de Jeu" count="1" color="blue" />
                        </div>
                    </div>
                </div>
            </RulesSection>

            {/* ÉTAT */}
            <RulesSection
                title={<ClassReference type="state" label="ÉTAT" size="h-8 w-8" />}
                color="gray"
                collapsible
                isOpen={expanded.state}
                onToggle={() => toggle('state')}
                rightElement={renderTotal('25 Éléments', 'gray')}
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Plateau & Pions</h4>
                        <div className="grid gap-3">
                            <Item name="Plateau Joueur" count="1" color="gray" />
                            <div className="relative h-32 rounded-lg overflow-hidden border border-slate-500/30">
                                <SafeImage src={boardState} alt="Plateau État" className="w-full h-full object-cover" />
                            </div>
                            <Item name="Marqueurs Légitimité" count="3" color="gray" />
                            <div className="flex gap-2 justify-center p-4 bg-black/20 rounded-lg">
                                <SafeImage src={legitimacyWorker} alt="Légitimité" className="h-8 w-8" />
                                <SafeImage src={legitimacyMiddle} alt="Légitimité" className="h-8 w-8" />
                                <SafeImage src={legitimacyCapitalist} alt="Légitimité" className="h-8 w-8" />
                            </div>
                            <Item name="Marqueurs Score" count="1" color="gray" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Cartes & Tuiles</h4>
                        <div className="grid gap-3">
                            <Item name="Cartes Action" count="45" color="gray" />
                            <Item name="Tuiles Entreprise Publique" count="15" color="gray" />
                            <div className="flex justify-center">
                                <SafeImage src={enterpriseState} alt="Entreprise État" className="h-16 w-auto" />
                            </div>
                            <Item name="Cartes Événement" count="40" color="gray" />
                            <Item name="Aide de Jeu" count="1" color="gray" />
                        </div>
                    </div>
                </div>
            </RulesSection>

            {/* MATÉRIEL GÉNÉRAL */}
            <RulesSection
                title="MATÉRIEL GÉNÉRAL"
                icon={Package}
                color="green"
                collapsible
                isOpen={expanded.general}
                onToggle={() => toggle('general')}
                rightElement={renderTotal('100+ Éléments', 'green')}
            >
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Ressources</h4>
                        <div className="grid gap-2">
                            <Item name="Nourriture" count="45" color="green" />
                            <div className="flex gap-2 justify-center">
                                <SafeImage src={food1} className="h-8 w-8" />
                                <SafeImage src={food3} className="h-8 w-8" />
                                <SafeImage src={food5} className="h-8 w-8" />
                            </div>
                            <Item name="Luxe" count="45" color="green" />
                            <div className="flex gap-2 justify-center">
                                <SafeImage src={luxe1} className="h-8 w-8" />
                                <SafeImage src={luxe3} className="h-8 w-8" />
                                <SafeImage src={luxe5} className="h-8 w-8" />
                            </div>
                            <Item name="Santé" count="45" color="green" />
                            <div className="flex gap-2 justify-center">
                                <SafeImage src={health1} className="h-8 w-8" />
                                <SafeImage src={health3} className="h-8 w-8" />
                                <SafeImage src={health5} className="h-8 w-8" />
                            </div>
                            <Item name="Éducation" count="45" color="green" />
                            <div className="flex gap-2 justify-center">
                                <SafeImage src={education1} className="h-8 w-8" />
                                <SafeImage src={education3} className="h-8 w-8" />
                                <SafeImage src={education5} className="h-8 w-8" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Jetons & Marqueurs</h4>
                        <div className="grid gap-2">
                            <Item name="Influence" count="50" color="green" />
                            <Item name="Votes" count="30" color="green" />
                            <Item name="Argent (Billets)" count="80" color="green" />
                            <Item name="Multiplicateur Fiscal" count="1" color="green" />
                            <Item name="Marqueur Manche" count="1" color="green" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-white border-b border-white/10 pb-2">Cartes & Divers</h4>
                        <div className="grid gap-2">
                            <Item name="Cartes Export" count="30" color="green" />
                            <div className="h-20 rounded overflow-hidden border border-white/10">
                                <SafeImage src={exportCards} className="w-full h-full object-cover" />
                            </div>
                            <Item name="Cartes Immigration" count="20" color="green" />
                            <div className="h-20 rounded overflow-hidden border border-white/10">
                                <SafeImage src={immigrationCards} className="w-full h-full object-cover" />
                            </div>
                            <Item name="Sac en Tissu" count="1" color="green" />
                            <Item name="Plateau Principal" count="1" color="green" />
                        </div>
                    </div>
                </div>
            </RulesSection>
        </div>
    );
};

export default MaterialPage;

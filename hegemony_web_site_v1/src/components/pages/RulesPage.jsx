import React, { useState } from 'react';
import { BookOpen, ChevronRight, HelpCircle, Box, FileText, Map, CreditCard, Building2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ClassReference from '../atoms/ClassReference';
import { RULES_DATA } from '../../constants/rulesData';
import { Section, Action } from '../molecules/RulesComponents';
import OtherRulesPage from './OtherRulesPage';
import MaterialPage from './MaterialPage';
import FAQPage from './FAQPage';
import BoardPage from './BoardPage';
import EmpruntsPage from './EmpruntsPage';
import FMIInterventionPage from './FMIInterventionPage';
import PoliciesRulesPage from './PoliciesRulesPage';
import { Scale } from 'lucide-react';

const RulesPage = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [selectedClass, setSelectedClass] = useState('capitalist');

    const classes = [
        { id: 'capitalist', name: <ClassReference type="capitalist" />, color: 'capitalist', icon: '🔵' },
        { id: 'middle', name: <ClassReference type="middle" />, color: 'middle', icon: '🟡' },
        { id: 'working', name: <ClassReference type="working" />, color: 'working', icon: '🔴' },
        { id: 'state', name: <ClassReference type="state" />, color: 'state', icon: '⚪' }
    ];

    const subTabs = [
        { id: 'general', label: 'Règles Générales', icon: BookOpen },
        { id: 'plateau', label: 'Plateau', icon: Map },
        { id: 'emprunts', label: 'Emprunts', icon: CreditCard },
        { id: 'fmi', label: 'Intervention du FMI', icon: Building2 },
        { id: 'other', label: 'Autres Règles', icon: FileText },
        { id: 'politiques', label: 'Politiques', icon: Scale },
        { id: 'material', label: 'Matériel', icon: Box },
        { id: 'faq', label: 'FAQ', icon: HelpCircle },
    ];

    const ClassButton = ({ classData }) => {
        const isActive = selectedClass === classData.id;
        const colorClasses = {
            capitalist: isActive
                ? 'bg-class-capitalist text-white shadow-lg ring-2 ring-class-capitalist/50'
                : 'bg-class-capitalist/20 border-class-capitalist/30 text-class-capitalist hover:bg-class-capitalist/30',
            middle: isActive
                ? 'bg-class-middle text-white shadow-lg ring-2 ring-class-middle/50'
                : 'bg-class-middle/20 border-class-middle/30 text-class-middle hover:bg-class-middle/30',
            working: isActive
                ? 'bg-class-working text-white shadow-lg ring-2 ring-class-working/50'
                : 'bg-class-working/20 border-class-working/30 text-class-working hover:bg-class-working/30',
            state: isActive
                ? 'bg-class-state text-white shadow-lg ring-2 ring-class-state/50'
                : 'glass-inner text-class-state hover:bg-class-state/20'
        };

        return (
            <button
                onClick={() => setSelectedClass(classData.id)}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg border transition-all font-bold ${colorClasses[classData.color]}`}
            >
                <span className="text-2xl">{classData.icon}</span>
                <span>{classData.name}</span>
            </button>
        );
    };

    const renderGeneralRules = (classId) => {
        const data = RULES_DATA[classId];
        const color = classes.find(c => c.id === classId).color;

        // Helper to get background color for overview card
        // Helper to get background color for overview card
        const bgColors = {
            capitalist: 'glass-effect border-class-capitalist/30',
            middle: 'glass-effect border-class-middle/30',
            working: 'glass-effect border-class-working/30',
            state: 'glass-effect border-class-state/30'
        };

        // Helper to get title color
        const titleColors = {
            capitalist: 'text-class-capitalist',
            middle: 'text-class-middle',
            working: 'text-class-working',
            state: 'text-class-state'
        };

        return (
            <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
                    {classes.map(cls => (
                        <ClassButton key={cls.id} classData={cls} />
                    ))}
                </div>

                {/* Overview */}
                <Card className={`${bgColors[color]}`}>
                    <CardContent className="pt-6">
                        <h2 className={`text-2xl font-bold ${titleColors[color]} mb-2`}>{data.overview.title}</h2>
                        <p className="text-base text-muted-foreground">{data.overview.content}</p>
                        {data.overview.extra}
                    </CardContent>
                </Card>

                {/* Preparation */}
                {data.preparation && (
                    <Section title="📋 Phase de Préparation" color={color}>
                        {data.preparation.map((action, i) => (
                            <Action key={i} {...action} />
                        ))}
                    </Section>
                )}

                {/* Base Actions */}
                {data.action_base && (
                    <Section title="⚡ Phase d'Action - Actions de Base" color={color}>
                        {data.action_base.map((action, i) => (
                            <Action key={i} {...action} />
                        ))}
                    </Section>
                )}

                {/* Bonus Actions */}
                {data.action_bonus && (
                    <Section title={`✨ Phase d'Action - Actions Bonus${classId === 'middle' || classId === 'working' ? ' (Gagnent +1 Prospérité)' : ''}`} color={color}>
                        {data.action_bonus.map((action, i) => (
                            <Action key={i} {...action} />
                        ))}
                    </Section>
                )}

                {/* Production */}
                {data.production && (
                    <Section title="🏭 Phase de Production" color={color}>
                        {data.production.map((action, i) => (
                            <Action key={i} {...action} />
                        ))}
                        {data.production_extra}
                    </Section>
                )}

                {/* Elections (State only) */}
                {data.elections && (
                    <Section title="🗳️ Phase d'Élections" color={color}>
                        {data.elections.map((action, i) => (
                            <Action key={i} {...action} />
                        ))}
                    </Section>
                )}

                {/* Scoring */}
                {data.scoring && (
                    <Section title="📊 Phase de Décompte des Points" color={color}>
                        {data.scoring.content}
                        {data.scoring.actions && data.scoring.actions.map((action, i) => (
                            <Action key={i} {...action} />
                        ))}
                    </Section>
                )}

                {/* End Game */}
                {data.end_game && (
                    <Section title="🏁 Fin de la Partie" color={color}>
                        {data.end_game.map((action, i) => (
                            <Action key={i} {...action} />
                        ))}
                    </Section>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-8 animate-fade-in w-full mx-auto">
            {/* Sub-tabs Navigation */}
            <div className="flex flex-nowrap overflow-x-auto gap-2 p-1 bg-black/20 rounded-xl backdrop-blur-sm border border-white/5 scrollbar-hide">
                {subTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold transition-all duration-300 whitespace-nowrap ${isActive
                                ? 'bg-primary text-primary-foreground shadow-lg'
                                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                }`}
                        >
                            <Icon className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-base">{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="min-h-[600px]">
                {activeTab === 'general' && renderGeneralRules(selectedClass)}
                {activeTab === 'plateau' && <BoardPage />}
                {activeTab === 'emprunts' && <EmpruntsPage />}
                {activeTab === 'fmi' && <FMIInterventionPage />}
                {activeTab === 'other' && <OtherRulesPage />}
                {activeTab === 'politiques' && <PoliciesRulesPage />}
                {activeTab === 'material' && <MaterialPage />}
                {activeTab === 'faq' && <FAQPage />}
            </div>
        </div>
    );
};

export default RulesPage;

import React, { useState } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ClassReference from '../../atoms/ClassReference';
import { RULES_DATA } from '../../../constants/rulesData';

import { Section, Action } from '../../molecules/RulesComponents';

const RulesTab = () => {
    const [selectedClass, setSelectedClass] = useState('capitalist');

    const classes = [
        { id: 'capitalist', name: <ClassReference type="capitalist" />, color: 'blue', icon: '🔵' },
        { id: 'middle', name: <ClassReference type="middle" />, color: 'yellow', icon: '🟡' },
        { id: 'working', name: <ClassReference type="working" />, color: 'red', icon: '🔴' },
        { id: 'state', name: <ClassReference type="state" />, color: 'gray', icon: '⚪' }
    ];

    const ClassButton = ({ classData }) => {
        const isActive = selectedClass === classData.id;
        const colorClasses = {
            blue: isActive
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg ring-2 ring-blue-300'
                : 'bg-blue-900/30 border-blue-800 text-blue-300 hover:bg-blue-800',
            yellow: isActive
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg ring-2 ring-yellow-300'
                : 'bg-yellow-900/30 border-yellow-800 text-yellow-300 hover:bg-yellow-800',
            red: isActive
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg ring-2 ring-red-300'
                : 'bg-red-900/30 border-red-800 text-red-300 hover:bg-red-800',
            gray: isActive
                ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg ring-2 ring-slate-300'
                : 'glass-inner text-slate-300 hover:bg-slate-700'
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

    const renderRules = (classId) => {
        const data = RULES_DATA[classId];
        const color = classes.find(c => c.id === classId).color;

        // Helper to get background color for overview card
        const bgColors = {
            blue: 'glass-effect border-blue-500/30',
            yellow: 'glass-effect border-yellow-500/30',
            red: 'glass-effect border-red-500/30',
            gray: 'glass-effect border-slate-500/30'
        };

        // Helper to get title color
        const titleColors = {
            blue: 'text-blue-400',
            yellow: 'text-yellow-400',
            red: 'text-red-400',
            gray: 'text-slate-300'
        };

        return (
            <div className="space-y-4">
                {/* Overview */}
                <Card className={`${bgColors[color]}`}>
                    <CardContent className="pt-6">
                        <h2 className={`text-2xl font-bold ${titleColors[color]} mb-2`}>{data.overview.title}</h2>
                        <p className="text-slate-300">{data.overview.content}</p>
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
        <div className="space-y-8 animate-fade-in">


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {classes.map(cls => (
                    <ClassButton key={cls.id} classData={cls} />
                ))}
            </div>

            <div>
                {renderRules(selectedClass)}
            </div>
        </div>
    );
};

export default RulesTab;

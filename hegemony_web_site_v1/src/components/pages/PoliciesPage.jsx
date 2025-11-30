import React, { useState } from 'react';
import { Users, BookOpen, Settings, AlertTriangle, Scale, Vote } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { POLICY_NAMES } from '../../constants/gameData';
import { useGame } from '../../context/GameContext';
import SafeImage from '../atoms/SafeImage';

const PolicySlider = ({ value, onChange, color }) => {
    return (
        <div className="relative pt-4 pb-2 px-2">
            {/* Track Line */}
            <div className="absolute top-1/2 left-2 right-2 h-1 bg-muted rounded-full -translate-y-1/2" />

            {/* Selection Indicator */}
            <div
                className="absolute top-1/2 w-4 h-4 rounded-full shadow-lg border-2 border-background transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                style={{
                    left: `calc(8px + (100% - 16px) * ${value === 'A' ? 0 : value === 'B' ? 0.5 : 1})`,
                    backgroundColor: 'hsl(var(--secondary))'
                }}
            />

            {/* Clickable Areas & Labels */}
            <div className="relative flex justify-between items-center">
                {['A', 'B', 'C'].map((option) => (
                    <div key={option} className="flex flex-col items-center gap-1 cursor-pointer group" onClick={() => onChange(option)}>
                        {/* Dot on the line */}
                        <div className={`w-2 h-2 rounded-full transition-colors ${value === option ? 'bg-transparent' : 'bg-muted group-hover:bg-muted-foreground'}`} />

                        {/* Label */}
                        <span className="font-bold text-foreground text-sm mt-1">{option}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const VerticalPolicySlider = ({ value, onChange, color }) => {
    return (
        <div className="relative h-full w-full flex justify-center py-2">
            {/* Track Line */}
            <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-muted rounded-full -translate-x-1/2" />

            {/* Selection Indicator */}
            <div
                className="absolute left-1/2 w-4 h-4 rounded-full shadow-lg border-2 border-background transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out z-10"
                style={{
                    top: `calc(16px + (100% - 32px) * ${value === 'A' ? 0 : value === 'B' ? 0.5 : 1})`,
                    backgroundColor: 'hsl(var(--secondary))'
                }}
            />

            {/* Clickable Areas & Labels */}
            <div className="relative flex flex-col justify-between items-center h-full w-full">
                {['A', 'B', 'C'].map((option) => (
                    <div
                        key={option}
                        className="flex items-center gap-2 cursor-pointer group w-full justify-center"
                        onClick={() => onChange(option)}
                    >
                        {/* Label Left */}
                        <span className="font-bold text-foreground text-sm w-4 text-right">{option}</span>

                        {/* Dot on the line */}
                        <div className={`w-2 h-2 rounded-full transition-colors z-0 ${value === option ? 'bg-transparent' : 'bg-muted group-hover:bg-muted-foreground'}`} />

                        {/* Spacer Right to balance */}
                        <div className="w-4" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const PoliciesPage = () => {
    const { policies, setPolicies } = useGame();

    const handlePolicyChange = (policy, value) => {
        setPolicies(prev => ({ ...prev, [policy]: value }));
    };

    const horizontalPolicies = ['fiscal', 'labor', 'taxation', 'healthWelfare', 'education'];
    const verticalPolicies = ['trade', 'immigration'];

    return (
        <div className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 animate-fade-in items-stretch">
                {/* Left Column: Horizontal Policies (1-5) */}
                <div className="lg:col-span-3 flex flex-col gap-2">
                    {horizontalPolicies.map((key) => {
                        const index = Object.keys(POLICY_NAMES).indexOf(key);
                        const name = POLICY_NAMES[key];
                        return (
                            <div
                                key={key}
                                className={`relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.01] bg-surface-secondary border border-border`}
                            >
                                <div className={`absolute inset-0 bg-policy-${key} opacity-10 pointer-events-none`} />
                                <div className="relative p-2 flex items-center gap-4">
                                    <div className="flex-shrink-0 w-8 text-3xl font-bold text-muted-foreground/50 select-none text-center">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-foreground font-bold uppercase tracking-wider text-xs mb-1 truncate">
                                            {name}
                                        </h3>
                                        <PolicySlider
                                            value={policies[key]}
                                            onChange={(val) => handlePolicyChange(key, val)}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Vertical Policies (6-7) */}
                <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 h-full">
                    {verticalPolicies.map((key) => {
                        const index = Object.keys(POLICY_NAMES).indexOf(key);
                        const name = POLICY_NAMES[key];
                        return (
                            <div
                                key={key}
                                className={`relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.01] bg-surface-secondary border border-border flex-1 flex flex-col min-h-[150px]`}
                            >
                                <div className={`absolute inset-0 bg-policy-${key} opacity-10 pointer-events-none`} />
                                <div className="relative p-2 flex flex-col items-center h-full flex-1">
                                    <div className="flex w-full justify-between items-start mb-2">
                                        <div className="text-3xl font-bold text-muted-foreground/50 select-none">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-foreground font-bold uppercase tracking-wider text-xs text-right max-w-[80px] leading-tight">
                                            {name}
                                        </h3>
                                    </div>

                                    <div className="flex-1 w-full min-h-0">
                                        <VerticalPolicySlider
                                            value={policies[key]}
                                            onChange={(val) => handlePolicyChange(key, val)}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PoliciesPage;

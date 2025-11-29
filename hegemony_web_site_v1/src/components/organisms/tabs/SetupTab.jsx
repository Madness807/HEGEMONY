
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { POLICY_NAMES, POLICY_COLORS } from '../../../constants/gameData';
import { useGame } from '../../../context/GameContext';
import ClassReference from '../../atoms/ClassReference';

const PolicySlider = ({ value, onChange, color }) => {
    const positions = { 'A': '0%', 'B': '50%', 'C': '100%' };

    return (
        <div className="relative pt-6 pb-2 px-4">
            {/* Track Line */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-black/20 rounded-full -translate-y-1/2" />

            {/* Selection Indicator */}
            <div
                className="absolute top-1/2 w-6 h-6 rounded-full shadow-lg border-2 border-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                style={{
                    left: `calc(16px + (100% - 32px) * ${value === 'A' ? 0 : value === 'B' ? 0.5 : 1})`,
                    backgroundColor: '#334155' // Dark slate color for the knob
                }}
            />

            {/* Clickable Areas & Labels */}
            <div className="relative flex justify-between items-center">
                {['A', 'B', 'C'].map((option) => (
                    <div key={option} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => onChange(option)}>
                        {/* Dot on the line */}
                        <div className={`w-3 h-3 rounded-full transition-colors ${value === option ? 'bg-transparent' : 'bg-black/20 group-hover:bg-black/40'}`} />

                        {/* Label */}
                        <span className="font-bold text-white text-lg mt-2">{option}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SetupTab = () => {
    const { numPlayers, setNumPlayers, policies, setPolicies } = useGame();

    const handlePolicyChange = (policy, value) => {
        setPolicies(prev => ({ ...prev, [policy]: value }));
    };

    return (
        <div className="space-y-8 animate-fade-in">


            <div className="grid grid-cols-1 gap-8">
                {/* Policies Section - Full width */}
                <div className="w-full">
                    <div className="space-y-4">
                        {Object.entries(POLICY_NAMES).map(([key, name], index) => (
                            <div
                                key={key}
                                className="relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.01] glass-effect border-0"
                                style={{ backgroundColor: `${POLICY_COLORS[key]}dd` }}
                            >
                                {/* Background Pattern/Texture overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

                                <div className="relative p-4 flex items-center gap-6">
                                    {/* Number */}
                                    <div className="flex-shrink-0 w-16 text-6xl font-bold text-white/20 select-none">
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2 opacity-90">
                                            {name}
                                        </h3>
                                        <PolicySlider
                                            value={policies[key]}
                                            onChange={(val) => handlePolicyChange(key, val)}
                                            color={POLICY_COLORS[key]}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetupTab;

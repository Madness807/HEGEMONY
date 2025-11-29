import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Section = ({ title, children, color = 'blue' }) => {
    const colorClasses = {
        blue: 'glass-effect border-blue-500/30 text-blue-300',
        yellow: 'glass-effect border-yellow-500/30 text-yellow-300',
        red: 'glass-effect border-red-500/30 text-red-300',
        gray: 'glass-effect border-slate-500/30 text-slate-300'
    };

    return (
        <div className={`p-4 rounded-lg border ${colorClasses[color]} mb-4`}>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            {children}
        </div>
    );
};

export const Action = ({ name, description }) => (
    <div className="flex items-start gap-2 mb-2">
        <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
            <strong>{name}</strong>
            {description && <p className="text-sm text-slate-400 mt-1">{description}</p>}
        </div>
    </div>
);

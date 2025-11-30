import React from 'react';

const PhaseHeader = ({ title, icon: Icon, color }) => {
    const colorClasses = {
        blue: 'text-blue-300',
        green: 'text-green-400',
        yellow: 'text-yellow-400',
        purple: 'text-purple-400',
        red: 'text-red-400'
    };

    return (
        <div className="glass-effect px-6 py-4 rounded-xl border-l-4 border-l-current flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-white/5 ${colorClasses[color] || 'text-white'}`}>
                {Icon && <Icon className="w-6 h-6" />}
            </div>
            <h4 className={`text-2xl font-bold ${colorClasses[color] || 'text-white'}`}>
                {title}
            </h4>
        </div>
    );
};

export default PhaseHeader;

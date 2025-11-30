import React from 'react';
import { CheckCircle } from 'lucide-react';

const CheckItem = ({ children, checked, onToggle }) => {
    const isInteractive = typeof onToggle === 'function';

    return (
        <div
            onClick={isInteractive ? onToggle : undefined}
            className={`glass-inner p-4 flex items-start gap-4 transition-colors ${isInteractive ? 'cursor-pointer hover:bg-white/5' : ''
                }`}
        >
            <div className="mt-1">
                {checked ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                    <div className={`w-5 h-5 rounded-full border-2 ${isInteractive ? 'border-slate-500' : 'border-slate-600'
                        }`} />
                )}
            </div>
            <span className={`text-slate-300 font-medium leading-relaxed ${checked ? 'text-slate-400 line-through' : ''
                }`}>
                {children}
            </span>
        </div>
    );
};

export default CheckItem;

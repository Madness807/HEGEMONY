import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const AccordionSection = ({ title, icon: Icon, children, defaultOpen = false, className = "" }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`glass-effect rounded-xl overflow-hidden ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-4">
                    {Icon && <Icon className="w-8 h-8" />}
                    {title}
                </div>
                {isOpen ? (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                ) : (
                    <ChevronRight className="w-6 h-6 text-slate-400" />
                )}
            </button>

            {isOpen && (
                <div className="animate-accordion-down">
                    <div className="p-6 pt-0 border-t border-white/10 mt-2">
                        <div className="pt-4">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccordionSection;

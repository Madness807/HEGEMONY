import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const RulesSection = ({
    title,
    icon: Icon,
    children,
    color = 'slate',
    className = '',
    collapsible = false,
    defaultOpen = true,
    rightElement = null,
    isOpen,
    onToggle
}) => {
    const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

    const isControlled = typeof isOpen !== 'undefined';
    const currentIsOpen = isControlled ? isOpen : internalIsOpen;

    const colors = {
        blue: { border: 'border-class-capitalist', text: 'text-class-capitalist', bg: 'bg-class-capitalist/20', icon: 'text-class-capitalist' },
        red: { border: 'border-class-working', text: 'text-class-working', bg: 'bg-class-working/20', icon: 'text-class-working' },
        yellow: { border: 'border-class-middle', text: 'text-class-middle', bg: 'bg-class-middle/20', icon: 'text-class-middle' },
        purple: { border: 'border-primary', text: 'text-primary', bg: 'bg-primary/20', icon: 'text-primary' },
        green: { border: 'border-brand-kickstarter', text: 'text-brand-kickstarter', bg: 'bg-brand-kickstarter/20', icon: 'text-brand-kickstarter' },
        orange: { border: 'border-policy-education', text: 'text-policy-education', bg: 'bg-policy-education/20', icon: 'text-policy-education' },
        slate: { border: 'border-border', text: 'text-muted-foreground', bg: 'glass-inner', icon: 'text-muted-foreground' }
    };

    const theme = colors[color] || colors.slate;

    const toggle = () => {
        if (collapsible) {
            if (isControlled && onToggle) {
                onToggle();
            } else {
                setInternalIsOpen(!currentIsOpen);
            }
        }
    };

    return (
        <Card className={`glass-effect border-l-4 ${theme.border} ${className} mb-6`}>
            <CardContent className="p-0">
                {title && (
                    <div
                        className={`flex items-center justify-between p-6 ${collapsible ? 'cursor-pointer hover:bg-white/5 transition-colors' : ''} ${currentIsOpen ? 'border-b border-white/10' : ''}`}
                        onClick={toggle}
                    >
                        <div className="flex items-center gap-3">
                            {Icon && (
                                <div className={`p-2 rounded-lg ${theme.bg}`}>
                                    <Icon className={`w-6 h-6 ${theme.icon}`} />
                                </div>
                            )}
                            <h3 className={`text-2xl font-bold text-white`}>{title}</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            {rightElement}
                            {collapsible && (
                                <div className={`transition-transform duration-200 ${currentIsOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {currentIsOpen && (
                    <div className="p-6 pt-6">
                        {children}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

// Legacy Section support for gradual migration if needed, but mapping to new style
export const Section = ({ title, children, color = 'blue' }) => (
    <RulesSection title={title} color={color}>
        {children}
    </RulesSection>
);

export const Action = ({ name, description }) => (
    <div className="flex items-start gap-2 mb-2">
        <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted-foreground" />
        <div>
            <strong className="text-foreground">{name}</strong>
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
    </div>
);

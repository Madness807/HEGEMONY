import React from 'react';

const GlassCard = ({ children, className = '', ...props }) => (
    <div className={`glass-effect ${className}`} {...props}>
        {children}
    </div>
);

export default GlassCard;

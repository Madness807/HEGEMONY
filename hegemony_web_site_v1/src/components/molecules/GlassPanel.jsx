import React from 'react';

const GlassPanel = ({ children, className = '', ...props }) => (
    <div className={`glass-panel ${className}`} {...props}>
        {children}
    </div>
);

export default GlassPanel;

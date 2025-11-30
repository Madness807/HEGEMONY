import React from 'react';

const SolidCard = ({ children, className = '', ...props }) => (
    <div className={`glass-effect ${className}`} {...props}>
        {children}
    </div>
);

export default SolidCard;

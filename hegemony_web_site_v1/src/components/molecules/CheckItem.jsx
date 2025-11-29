import React from 'react';
import { CheckCircle } from 'lucide-react';

const CheckItem = ({ children }) => (
    <div className="flex items-start gap-3">
        <div className="mt-1">
            <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
        <span className="text-slate-300 font-medium">{children}</span>
    </div>
);

export default CheckItem;

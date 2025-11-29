import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

const SafeImage = ({ src, alt, className, ...props }) => {
    const [error, setError] = useState(false);

    if (error || !src) {
        return (
            <div
                className={`flex flex-col items-center justify-center bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg p-4 text-center ${className}`}
                {...props}
            >
                <ImageOff className="w-8 h-8 text-slate-500 mb-2" />
                <span className="text-xs text-slate-400 font-medium break-words w-full">{alt || 'Image manquante'}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            loading="lazy"
            {...props}
        />
    );
};

export default SafeImage;

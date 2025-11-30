import React from 'react';
import pawnImage from '../../assets/images/pions/pion_mutliplicateur_fiscal.png';

const TaxMultiplierTrack = ({ currentValue }) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 9, 11];

    return (
        <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex flex-col items-center">
                <span className="text-xxs font-black text-primary/80 uppercase tracking-[0.2em] leading-tight">Multiplicateur</span>
                <span className="text-sm font-black text-primary uppercase tracking-[0.1em] leading-tight">Fiscal</span>
            </div>

            <div className="relative flex items-center justify-between gap-2 md:gap-4 bg-card p-3 rounded-full border border-border shadow-inner w-full md:w-auto overflow-x-auto">
                {values.map((value) => (
                    <div key={value} className="relative flex flex-col items-center justify-center flex-shrink-0">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-base md:text-lg font-bold border-2 transition-all duration-300 ${value === currentValue
                            ? 'bg-background border-transparent scale-110'
                            : 'bg-muted text-foreground border-border'
                            }`}>
                            {value !== currentValue && value}
                        </div>

                        {/* Pawn Image Positioned Absolute */}
                        {value === currentValue && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 z-20 pointer-events-none drop-shadow-lg">
                                <img
                                    src={pawnImage}
                                    alt="Pion Multiplicateur Fiscal"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaxMultiplierTrack;

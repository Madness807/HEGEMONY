import React from 'react';
import pawnImage from '../../assets/images/pions/pion_mutliplicateur_fiscal.png';

const TaxMultiplierTrack = ({ currentValue }) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 9, 11];

    return (
        <div className="w-full rounded-xl p-4 border border-slate-700 shadow-lg mb-6 relative" style={{ backgroundColor: '#16232b' }}>
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-yellow-500 font-bold text-lg leading-none">TAX</span>
                    <span className="text-yellow-500 font-bold text-lg leading-none">MULTIPLIER</span>
                </div>

                <div className="flex-1 flex justify-between items-center relative px-2">
                    {/* Track Line (Optional, if we want a line behind) */}
                    {/* <div className="absolute left-0 right-0 top-1/2 h-1 bg-slate-700 -z-10"></div> */}

                    {values.map((value) => (
                        <div key={value} className="relative flex flex-col items-center justify-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-300 ${value === currentValue
                                    ? 'bg-transparent border-transparent scale-110'
                                    : 'bg-slate-800 text-white border-slate-600'
                                }`}>
                                {value !== currentValue && value}
                            </div>

                            {/* Pawn Image Positioned Absolute */}
                            {value === currentValue && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 z-20 pointer-events-none drop-shadow-lg">
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
        </div>
    );
};

export default TaxMultiplierTrack;

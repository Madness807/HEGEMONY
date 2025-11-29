import React, { useState } from 'react';
import mainBoard from '@/assets/images/board/main_board.jpg';

import { BOARD_ZONES } from '../../constants/boardZones';

const InteractiveBoard = () => {
    const [activeZone, setActiveZone] = useState(null);

    const zones = BOARD_ZONES;

    return (
        <div className="glass-effect rounded-xl p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">🗺️</span>
                Plateau de Jeu Interactif
            </h2>

            <div className="relative w-full max-w-5xl mx-auto bg-slate-900 rounded-lg overflow-hidden shadow-2xl border border-slate-600">
                <img
                    src={mainBoard}
                    alt="Plateau de jeu Hegemony"
                    className="w-full h-auto object-contain"
                />

                {/* Overlay Zones */}
                {zones.map((zone) => (
                    <button
                        key={zone.id}
                        className={`absolute transition-all duration-200 border-2 
                            ${activeZone?.id === zone.id
                                ? 'bg-amber-400/20 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                                : 'bg-transparent border-transparent hover:bg-white/10 hover:border-white/30'
                            }`}
                        style={zone.style}
                        onMouseEnter={() => setActiveZone(zone)}
                        onMouseLeave={() => setActiveZone(null)}
                        onClick={() => setActiveZone(activeZone?.id === zone.id ? null : zone)}
                        aria-label={zone.label}
                    />
                ))}

                {/* Tooltip / Popover */}
                {activeZone && (
                    <div
                        className="absolute z-50 p-4 glass-effect text-slate-100 w-[90%] md:max-w-sm pointer-events-none transition-all duration-200"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <h3 className="text-lg font-bold text-amber-400 mb-2 border-b border-slate-700 pb-2">
                            {activeZone.label}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-300">
                            {activeZone.description}
                        </p>
                    </div>
                )}
            </div>
            <p className="text-center text-slate-400 mt-4 text-sm italic">
                <span className="hidden md:inline">Survolez les différentes zones du plateau pour afficher les explications.</span>
                <span className="md:hidden">Touchez les zones du plateau pour voir les détails.</span>
            </p>
        </div>
    );
};

export default InteractiveBoard;

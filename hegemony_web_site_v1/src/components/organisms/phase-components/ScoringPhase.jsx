import React, { useState } from 'react';
import blankEventScore from '../../../assets/images/common/cards/events/blank_envent_score.png';
import { Calculator, Users, Star, MessageCircle, HardHat } from 'lucide-react';
import SolidCard from '../../molecules/SolidCard';
import CheckItem from '../../molecules/CheckItem';
import ClassReference from '../../atoms/ClassReference';
import PhaseHeader from '../../molecules/PhaseHeader';
import LegitimacyTracker from '../LegitimacyTracker';

const ScoringPhase = ({ numPlayers }) => {
    const [eventPenalty, setEventPenalty] = useState(0);
    return (
        <div className="space-y-6">

            <SolidCard className="p-10 rounded-xl border border-border">
                <div className="space-y-6">
                    {/* Union Scoring Visual */}
                    <div className="bg-muted p-6 rounded-xl border border-border space-y-4">
                        {/* Header Rule */}
                        <div className="flex items-center justify-between text-foreground mb-4">
                            <div className="flex items-center gap-2 bg-card px-3 py-1 rounded-lg border border-border">
                                <Users className="w-5 h-5" />
                                <span className="font-bold">≥ 4</span>
                                <span>=</span>
                                <Users className="w-5 h-5 text-foreground" />
                            </div>

                            <div className="text-center">
                                <h4 className="font-bold text-lg tracking-widest">SYNDICATS</h4>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold uppercase text-muted-foreground">Nombre de Syndicats =</span>
                                <div className="flex items-center gap-1 glass-inner px-2 py-1 rounded border border-border">
                                    <Star className="w-4 h-4 text-foreground fill-current" />
                                    <span className="font-bold">2</span>
                                </div>
                                <span>+</span>
                                <MessageCircle className="w-5 h-5 text-class-working fill-current" />
                            </div>
                        </div>

                        {/* Sector Cards */}
                        <div className="grid grid-cols-5 gap-4">
                            {/* Agriculture */}
                            <div className="bg-sectors-agriculture p-4 rounded-xl flex flex-col items-center gap-2 border-b-4 border-sectors-agriculture shadow-lg">
                                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                                    <HardHat className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <span className="text-xxs font-bold text-white uppercase tracking-wider mt-2">Agriculture</span>
                            </div>

                            {/* Luxe */}
                            <div className="bg-sectors-luxury p-4 rounded-xl flex flex-col items-center gap-2 border-b-4 border-sectors-luxury shadow-lg">
                                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                                    <HardHat className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <span className="text-xxs font-bold text-white uppercase tracking-wider mt-2">Luxe</span>
                            </div>

                            {/* Santé */}
                            <div className="bg-policy-healthWelfare p-4 rounded-xl flex flex-col items-center gap-2 border-b-4 border-policy-healthWelfare shadow-lg">
                                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                                    <HardHat className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <span className="text-xxs font-bold text-white uppercase tracking-wider mt-2">Santé</span>
                            </div>

                            {/* Éducation */}
                            <div className="bg-policy-education p-4 rounded-xl flex flex-col items-center gap-2 border-b-4 border-policy-education shadow-lg">
                                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                                    <HardHat className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <span className="text-xxs font-bold text-white uppercase tracking-wider mt-2">Éducation</span>
                            </div>

                            {/* Média */}
                            <div className="bg-sectors-media p-4 rounded-xl flex flex-col items-center gap-2 border-b-4 border-sectors-media shadow-lg">
                                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                                    <HardHat className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <span className="text-xxs font-bold text-white uppercase tracking-wider mt-2">Média</span>
                            </div>
                        </div>
                    </div>

                    {numPlayers >= 3 && <CheckItem><ClassReference type="middle" /> : +1 Prospérité si &lt; Entreprises Ops</CheckItem>}

                    {/* Capitalist Wealth Scoring Visual */}
                    <div className="bg-background-dark/80 p-6 rounded-xl border border-border space-y-4">
                        <div className="flex items-center justify-between text-foreground mb-2">
                            <h4 className="font-bold text-lg tracking-widest text-class-capitalist">TABLEAU DE RICHESSE</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <ClassReference type="capitalist" />
                                <span>Capital → PV</span>
                            </div>
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-class-capitalist scrollbar-track-card">
                            {[
                                { val: '10', pts: 1 }, { val: '25', pts: 2 }, { val: '50', pts: 3 },
                                { val: '75', pts: 4 }, { val: '100', pts: 5 }, { val: '125', pts: 6 },
                                { val: '150', pts: 7 }, { val: '175', pts: 8 }, { val: '200', pts: 9 },
                                { val: '250', pts: 10 }, { val: '300', pts: 11 }, { val: '350', pts: 12 },
                                { val: '400', pts: 13 }, { val: '450', pts: 14 }, { val: '500+', pts: 15 }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-class-capitalist rounded-lg overflow-hidden flex flex-col border border-class-capitalist/50 shadow-lg min-w-[60px] flex-shrink-0">
                                    <div className="bg-class-capitalist/50 p-1 text-center border-b border-class-capitalist/30">
                                        <span className="text-xxs font-bold text-white">{item.val} Ꝟ</span>
                                    </div>
                                    <div className="p-2 flex items-center justify-center gap-1 bg-class-capitalist">
                                        <Star className="w-3 h-3 text-white fill-current" />
                                        <span className="font-bold text-white text-sm">{item.pts}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {numPlayers === 4 && (
                        <>
                            <CheckItem><ClassReference type="state" /> : PV Agenda Politique</CheckItem>
                        </>
                    )}
                </div>
            </SolidCard>

            {/* Legitimacy Tracker Section */}
            <LegitimacyTracker>
                {numPlayers === 4 && (
                    <>
                        {/* State Event Penalties Visual */}
                        <div className="relative w-full max-w-md mx-auto mb-8 group">
                            <img
                                src={blankEventScore}
                                alt="Event Penalties"
                                className="w-full rounded-xl shadow-lg border border-border"
                            />
                            {/* Slider Overlay on White Part */}
                            <div className="absolute bottom-[15%] left-[10%] right-[10%] flex flex-col items-center bg-white/90 rounded-lg p-2 backdrop-blur-sm">
                                <div className="flex items-center gap-4 w-full">
                                    <span className="text-2xl font-bold text-destructive min-w-[2ch] text-center">{eventPenalty}</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        step="1"
                                        value={eventPenalty}
                                        onChange={(e) => setEventPenalty(Number(e.target.value))}
                                        className="w-full h-2 bg-input rounded-lg appearance-none cursor-pointer accent-destructive"
                                    />
                                </div>
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">Pénalités</span>
                            </div>
                        </div>

                        <CheckItem><ClassReference type="state" /> : PV Agenda Politique</CheckItem>
                    </>
                )}
            </LegitimacyTracker>
        </div>
    );
};

export default ScoringPhase;

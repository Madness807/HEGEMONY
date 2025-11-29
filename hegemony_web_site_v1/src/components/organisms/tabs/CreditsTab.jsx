import React from 'react';
import { Award, Users, Palette, Building, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CreditsTab = () => {
    return (
        <div className="space-y-6 animate-fadeIn">
            <Card className="glass-effect">
                <CardContent className="pt-6">
                    <div className="glass-inner p-6">


                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Game Design */}
                            <div className="glass-inner-dark hover:border-blue-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-bold text-white">Auteurs</h3>
                                </div>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                        Vangelis Bagiartakis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                        Varnavas Timotheou
                                    </li>
                                </ul>
                            </div>

                            {/* Art */}
                            <div className="glass-inner-dark hover:border-pink-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Palette className="w-6 h-6 text-pink-400" />
                                    <h3 className="text-lg font-bold text-white">Artiste</h3>
                                </div>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                        Jakub Skop
                                    </li>
                                </ul>
                            </div>

                            {/* Publisher */}
                            <div className="glass-inner-dark hover:border-yellow-500/30 transition-colors md:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building className="w-6 h-6 text-yellow-400" />
                                    <h3 className="text-lg font-bold text-white">Éditeur</h3>
                                </div>
                                <p className="text-slate-300">
                                    Hegemonic Project Games
                                </p>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-8 p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
                            <div className="flex gap-3">
                                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-slate-400 space-y-2">
                                    <p>
                                        Cette application est un assistant de jeu non-officiel développé par des fans pour des fans.
                                        Elle n'est pas affiliée à, soutenue, ou sponsorisée par Hegemonic Project Games.
                                    </p>
                                    <p>
                                        Tous les droits relatifs au jeu de société Hegemony: Lead Your Class to Victory, y compris les mécaniques,
                                        les illustrations et les noms, appartiennent à leurs propriétaires respectifs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreditsTab;


import React from 'react';
import { ScrollText, Coins } from 'lucide-react';
import { RulesSection } from '../molecules/RulesComponents';

const OtherRulesPage = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <RulesSection title="Matériel Limité" icon={ScrollText} color="slate">
                <div className="space-y-4">
                    <p className="text-slate-300 text-base leading-relaxed">
                        Dans Hegemony, la plupart des éléments sont limités par le matériel disponible.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                            <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
                                <span className="text-lg">⚠</span>
                                Strictement Limité
                            </h4>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
                                <li><strong>Travailleurs :</strong> Vous ne pouvez pas avoir plus de travailleurs que ceux fournis dans la boîte.</li>
                                <li><strong>Entreprises :</strong> Limitées aux tuiles disponibles.</li>
                                <li><strong>Cartes Action :</strong> Si la pioche est vide, mélangez la défausse.</li>
                                <li><strong>Jetons de Vote :</strong> Limités au matériel.</li>
                            </ul>
                        </div>

                        <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                            <h4 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                                <span className="text-lg">∞</span>
                                Illimité
                            </h4>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
                                <li><strong>Argent :</strong> Si la banque est vide, utilisez un substitut.</li>
                                <li><strong>Ressources :</strong> (Cubes) Illimitées.</li>
                                <li><strong>Influence :</strong> Illimitée.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RulesSection>

            <RulesSection title="Crédits" icon={Coins} color="yellow">
                <div className="space-y-4 text-slate-300 text-base">
                    <p>
                        Hegemony: Lead Your Class to Victory est un jeu créé par <strong>Vangelis Bagiartakis</strong> et <strong>Varnavas Timotheou</strong>.
                    </p>
                    <p>
                        Illustré par <strong>Jakub Skop</strong>.
                    </p>
                    <p className="text-xs text-slate-500 mt-4">
                        Site non-officiel d'aide de jeu. Les images et concepts appartiennent à Hegemonic Project Games.
                    </p>
                </div>
            </RulesSection>
        </div>
    );
};

export default OtherRulesPage;


import React from 'react';
import { Coins, CreditCard } from 'lucide-react';
import { RulesSection } from '../molecules/RulesComponents';

const EmpruntsPage = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <RulesSection title="Les Emprunts" icon={CreditCard} color="yellow">
                <div className="space-y-4">
                    <p className="text-slate-300 text-base leading-relaxed">
                        Les joueurs seront souvent amenés à payer certaines sommes (Imposition, Salaires, Besoins, etc.).
                        S'ils ne peuvent pas payer, ils <strong>doivent</strong> faire un Emprunt.
                    </p>

                    <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                        <h4 className="font-bold text-xl text-yellow-400 mb-2 flex items-center gap-2">
                            <Coins className="w-5 h-5" />
                            Comment faire un Emprunt ?
                        </h4>
                        <p className="text-base text-slate-300">
                            Placez une carte Emprunt près de votre Plateau Joueur et gagnez <strong>50 Ꝟ</strong>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 className="font-bold text-xl text-white border-b border-white/10 pb-2">Règles Importantes</h4>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">⚠</span>
                                    <span>Vous ne pouvez faire d'Emprunt que s'il vous manque de l'argent pour un paiement <strong>obligatoire</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">⚠</span>
                                    <span>Interdit pour les achats optionnels (Entreprises, Cartes Action, etc.).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 font-bold">ℹ</span>
                                    <span><strong>Intérêts :</strong> À chaque Phase de Préparation, payez <strong>5 Ꝟ</strong> par Emprunt. (Sinon, nouvel Emprunt).</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-bold text-xl text-white border-b border-white/10 pb-2">Remboursement</h4>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 font-bold">✓</span>
                                    <span><strong>Action Bonus :</strong> Payez <strong>50 Ꝟ</strong> pendant votre tour pour défausser une carte Emprunt.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 font-bold">✓</span>
                                    <span><strong>Fin de Partie :</strong> Dernière chance de rembourser à <strong>55 Ꝟ</strong> (sauf Capitaliste).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RulesSection>

            <RulesSection title="Spécificités par Classe" color="blue">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                        <h4 className="font-bold text-xl text-blue-300 mb-2">Classe Capitaliste</h4>
                        <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                            <li>L'argent de l'Emprunt (50 Ꝟ) va dans le <strong>Capital</strong>.</li>
                            <li>Les intérêts et remboursements sont payés depuis le <strong>Capital</strong>.</li>
                            <li>Perd <strong>5 PV</strong> par Emprunt non remboursé en fin de partie.</li>
                        </ul>
                    </div>
                    <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                        <h4 className="font-bold text-xl text-purple-300 mb-2">L'État (2-3 joueurs)</h4>
                        <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                            <li>Si le Trésor Public est vide, l'État fait un Emprunt.</li>
                            <li>Carte Emprunt sur le Trésor Public + 50 Ꝟ.</li>
                            <li>Rembourse automatiquement dès qu'il a 50 Ꝟ lors de la Phase de Préparation.</li>
                        </ul>
                    </div>
                </div>
            </RulesSection>
        </div>
    );
};

export default EmpruntsPage;

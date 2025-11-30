import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, Vote } from 'lucide-react';

const PoliciesRulesPage = () => {
    return (
        <div className="space-y-8 animate-fade-in w-full mx-auto">
            {/* Introduction */}
            <Card className="glass-effect">
                <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Tableau des Politiques</h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                        Le tableau des politiques occupe une part importante du jeu puisqu'il affecte la plupart des actions des joueurs.
                        Pour gagner, il est crucial de changer ces politiques au bon moment afin d'en tirer profit.
                    </p>
                </CardContent>
            </Card>

            {/* 1. Politique Fiscale */}
            <Card className="glass-effect border-l-4 border-blue-500">
                <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center gap-3">
                        <span className="text-4xl font-bold text-blue-500/20">1</span>
                        Politique Fiscale
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-base text-slate-300">
                        Elle détermine la taille du Secteur Public et le nombre d'Emprunts que l'État peut faire avant que son économie chute et que le FMI doive intervenir.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                            <h4 className="font-bold text-blue-300 mb-2">Entreprises Publiques</h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li><strong className="text-white">C :</strong> 3 Entreprises disponibles.</li>
                                <li><strong className="text-white">B :</strong> 6 Entreprises disponibles (3 nouvelles).</li>
                                <li><strong className="text-white">A :</strong> 9 Entreprises disponibles (toutes).</li>
                            </ul>
                            <p className="text-xs text-slate-400 mt-2 italic">Le coût des nouvelles Entreprises est à la charge de l'État.</p>
                        </div>
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                            <h4 className="font-bold text-blue-300 mb-2">Limite d'Emprunts (Avant FMI)</h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li><strong className="text-white">C :</strong> 1 Emprunt max.</li>
                                <li><strong className="text-white">A ou B :</strong> 2 Emprunts max.</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 2. Marché du Travail */}
            <Card className="glass-effect border-l-4 border-indigo-500">
                <CardHeader>
                    <CardTitle className="text-indigo-400 flex items-center gap-3">
                        <span className="text-4xl font-bold text-indigo-500/20">2</span>
                        Marché du Travail
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-base text-slate-300">
                        Le Marché du Travail détermine le <strong>Salaire Minimum</strong>. Aucune Entreprise n'a le droit de réduire ses Salaires en outrepassant cette Politique.
                    </p>
                    <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-500/30">
                        <ul className="space-y-2 text-slate-300">
                            <li><strong className="text-white">A :</strong> Seuls les Salaires de <strong>Niveau 3</strong> sont autorisés.</li>
                            <li><strong className="text-white">B :</strong> Salaires de <strong>Niveau 2 et 3</strong> autorisés.</li>
                            <li><strong className="text-white">C :</strong> Tous les Niveaux (1, 2, 3) sont autorisés.</li>
                        </ul>
                    </div>
                    <div className="flex items-start gap-3 bg-indigo-500/10 p-4 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                        <p className="text-sm text-indigo-200">
                            Lorsque cette Politique change, les joueurs possédant des Entreprises doivent <strong>immédiatement</strong> modifier tous les Salaires pour se soumettre à la nouvelle Politique.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* 3. Imposition */}
            <Card className="glass-effect border-l-4 border-purple-500">
                <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center gap-3">
                        <span className="text-4xl font-bold text-purple-500/20">3</span>
                        Imposition
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-base text-slate-300">
                        L'Imposition détermine le montant en impôts que chaque Classe doit verser à l'État à chaque manche.
                    </p>
                    <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                        <h4 className="font-bold text-purple-300 mb-2">Multiplicateur Fiscal (Base)</h4>
                        <ul className="space-y-2 text-slate-300">
                            <li><strong className="text-white">A :</strong> Base de <strong>3</strong>. (Modificateurs Aides Sociales doublés).</li>
                            <li><strong className="text-white">B :</strong> Base de <strong>2</strong>. (Modificateurs Aides Sociales simples).</li>
                            <li><strong className="text-white">C :</strong> Base de <strong>1</strong>. (Modificateurs Aides Sociales ignorés).</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* 4. Aides Sociales : Santé */}
            <Card className="glass-effect border-l-4 border-red-500">
                <CardHeader>
                    <CardTitle className="text-red-400 flex items-center gap-3">
                        <span className="text-4xl font-bold text-red-500/20">4</span>
                        Aides Sociales : Santé et Allocations
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-base text-slate-300">
                        Définit le coût de la Santé Publique et modifie le Multiplicateur Fiscal.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30 text-center">
                            <div className="font-bold text-red-300 mb-1">Section A</div>
                            <div className="text-white font-bold text-lg">Gratuit</div>
                            <div className="text-xs text-red-200">+2 au Multiplicateur</div>
                        </div>
                        <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30 text-center">
                            <div className="font-bold text-red-300 mb-1">Section B</div>
                            <div className="text-white font-bold text-lg">5 Ꝟ</div>
                            <div className="text-xs text-red-200">+1 au Multiplicateur</div>
                        </div>
                        <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30 text-center">
                            <div className="font-bold text-red-300 mb-1">Section C</div>
                            <div className="text-white font-bold text-lg">10 Ꝟ</div>
                            <div className="text-xs text-red-200">+0 au Multiplicateur</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 5. Aides Sociales : Éducation */}
            <Card className="glass-effect border-l-4 border-orange-500">
                <CardHeader>
                    <CardTitle className="text-orange-400 flex items-center gap-3">
                        <span className="text-4xl font-bold text-orange-500/20">5</span>
                        Aides Sociales : Éducation
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-base text-slate-300">
                        Définit le coût de l'Éducation Publique et modifie le Multiplicateur Fiscal.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/30 text-center">
                            <div className="font-bold text-orange-300 mb-1">Section A</div>
                            <div className="text-white font-bold text-lg">Gratuit</div>
                            <div className="text-xs text-orange-200">+2 au Multiplicateur</div>
                        </div>
                        <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/30 text-center">
                            <div className="font-bold text-orange-300 mb-1">Section B</div>
                            <div className="text-white font-bold text-lg">5 Ꝟ</div>
                            <div className="text-xs text-orange-200">+1 au Multiplicateur</div>
                        </div>
                        <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/30 text-center">
                            <div className="font-bold text-orange-300 mb-1">Section C</div>
                            <div className="text-white font-bold text-lg">10 Ꝟ</div>
                            <div className="text-xs text-orange-200">+0 au Multiplicateur</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 6. Commerce Extérieur */}
            <Card className="glass-effect border-l-4 border-amber-500">
                <CardHeader>
                    <CardTitle className="text-amber-400 flex items-center gap-3">
                        <span className="text-4xl font-bold text-amber-500/20">6</span>
                        Commerce Extérieur
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-base text-slate-300">
                        Détermine les droits de douane sur les biens importés et le nombre de cartes Accord Commercial piochées.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                            <div className="font-bold text-amber-300 mb-1 border-b border-amber-500/30 pb-1">Section A</div>
                            <ul className="text-xs text-slate-300 space-y-1">
                                <li>Douane Nourriture : <strong>10 Ꝟ</strong></li>
                                <li>Douane Luxe : <strong>6 Ꝟ</strong></li>
                                <li>Accords Commerciaux : <strong>0</strong></li>
                            </ul>
                        </div>
                        <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                            <div className="font-bold text-amber-300 mb-1 border-b border-amber-500/30 pb-1">Section B</div>
                            <ul className="text-xs text-slate-300 space-y-1">
                                <li>Douane Nourriture : <strong>5 Ꝟ</strong></li>
                                <li>Douane Luxe : <strong>3 Ꝟ</strong></li>
                                <li>Accords Commerciaux : <strong>1</strong></li>
                            </ul>
                        </div>
                        <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                            <div className="font-bold text-amber-300 mb-1 border-b border-amber-500/30 pb-1">Section C</div>
                            <ul className="text-xs text-slate-300 space-y-1">
                                <li>Douane Nourriture : <strong>0 Ꝟ</strong></li>
                                <li>Douane Luxe : <strong>0 Ꝟ</strong></li>
                                <li>Accords Commerciaux : <strong>2</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-amber-200 bg-amber-900/30 p-2 rounded">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Les droits de douane sont versés à l'État.</span>
                    </div>
                </CardContent>
            </Card>

            {/* 7. Immigration */}
            <Card className="glass-effect border-l-4 border-slate-500">
                <CardHeader>
                    <CardTitle className="text-slate-400 flex items-center gap-3">
                        <span className="text-4xl font-bold text-slate-500/20">7</span>
                        Immigration
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-base text-slate-300">
                        Détermine si les frontières sont fermées. Affecte le nombre de travailleurs supplémentaires obtenus par les Classes Moyenne et Ouvrière lors de la Phase de Préparation.
                    </p>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                        <ul className="space-y-2 text-slate-300">
                            <li><strong className="text-white">A :</strong> +0 Travailleur supplémentaire.</li>
                            <li><strong className="text-white">B :</strong> +1 Travailleur supplémentaire chacune.</li>
                            <li><strong className="text-white">C :</strong> +2 Travailleurs supplémentaires chacune.</li>
                        </ul>
                    </div>
                    <div className="text-sm text-red-400 font-bold bg-red-900/20 p-3 rounded border border-red-900/50">
                        Ne piochez pas une seule carte pour les deux joueurs ! Chacun tire ses propres cartes.
                    </div>
                </CardContent>
            </Card>

            {/* Exemple d'Élection */}
            <Card className="glass-effect mt-12 border-2 border-yellow-500/30">
                <CardHeader>
                    <CardTitle className="text-yellow-400 flex items-center gap-3 text-2xl">
                        <Vote className="w-8 h-8" />
                        Exemple d'Élection
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-yellow-900/10 p-4 rounded-xl border border-yellow-500/20">
                        <p className="text-slate-300 italic mb-4">
                            "Jim (Classe Ouvrière) a proposé un Projet de Loi concernant la Politique d'Aides Sociales : Éducation au cours de cette manche..."
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-white">Déclaration</h4>
                                    <p className="text-sm text-slate-400">
                                        Jim est favorable (c'est son projet). Claire (Moyenne) est favorable. Mike (Capitaliste) est contre (impôts). Anna (État) est contre.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-white">Pioche des Cubes</h4>
                                    <p className="text-sm text-slate-400">
                                        5 cubes piochés : 2 Ouvriers (Pour), 1 Moyenne (Pour), 2 Capitalistes (Contre).
                                        <br />
                                        <span className="text-yellow-400">Résultat provisoire : 3 Pour vs 2 Contre. Jim est en tête.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-white">Influence</h4>
                                    <p className="text-sm text-slate-400">
                                        Jim dépense 1 Influence. Mike et Anna dépensent 1 Influence chacun.
                                        <br />
                                        Total : 3 Pour + 1 Influence (Jim) = 4.
                                        <br />
                                        Total : 2 Contre + 2 Influence (Mike + Anna) = 4.
                                        <br />
                                        <span className="text-yellow-400 font-bold">Égalité ! Le joueur qui a proposé le projet l'emporte. Le Projet est adopté.</span>
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

export default PoliciesRulesPage;

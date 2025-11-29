import React, { useState } from 'react';
import { CheckCircle2, Circle, Package, ChevronDown, ChevronRight, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ClassReference from '../../atoms/ClassReference';
import { useGame } from '../../../context/GameContext';

const CheckItem = ({ id, children, checkedState, toggleFn }) => {
    const isChecked = checkedState[id];
    return (
        <button
            onClick={() => toggleFn(id)}
            className={`w-full flex items-start gap-3 p-3 md:p-4 rounded-lg transition-all active:scale-95 touch-manipulation ${isChecked
                ? 'bg-green-900/20 border border-green-800 text-green-200'
                : 'glass-inner text-slate-300 hover:bg-white/5'
                }`}
        >
            {isChecked ? (
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
                <Circle className="w-5 h-5 md:w-6 md:h-6 text-slate-500 flex-shrink-0 mt-0.5" />
            )}
            <span className="text-left text-sm md:text-base">{children}</span>
        </button>
    );
};

const SetupSection = ({ title, icon: Icon, children, defaultOpen = false, className = "" }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <Card className={`glass-effect overflow-hidden ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-4">
                    {Icon && <Icon className="w-8 h-8" />}
                    {title}
                </div>
                {isOpen ? (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                ) : (
                    <ChevronRight className="w-6 h-6 text-slate-400" />
                )}
            </button>

            {isOpen && (
                <div className="animate-accordion-down">
                    <CardContent className="pt-0 pb-6 border-t border-white/10 mt-2">
                        <div className="pt-4">
                            {children}
                        </div>
                    </CardContent>
                </div>
            )}
        </Card>
    );
};

const SetupGuideTab = () => {
    const { numPlayers, setNumPlayers } = useGame();
    const [checked, setChecked] = useState({});

    const toggleCheck = (id) => {
        setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const servicesData = {
        2: { sante: 5, education: 5, influence: 3 },
        3: { sante: 6, education: 6, influence: 4 },
        4: { sante: 6, education: 6, influence: 4 }
    };

    const services = servicesData[numPlayers] || servicesData[4];

    return (
        <div className="space-y-6 animate-fade-in">

            {/* Player Configuration Section */}
            <Card className="glass-effect">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                                <Users className="w-6 h-6 text-blue-400" />
                                Configuration de la partie
                            </h3>
                            <p className="text-slate-400 text-sm">Sélectionnez le nombre de joueurs pour adapter la mise en place</p>
                        </div>

                        <div className="flex gap-2 w-full md:w-auto">
                            {[2, 3, 4].map(num => (
                                <button
                                    key={num}
                                    onClick={() => setNumPlayers(num)}
                                    className={`flex-1 md:flex-none px-6 py-3 rounded-lg font-bold transition-all ${numPlayers === num
                                        ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400'
                                        : 'glass-inner text-slate-400 hover:bg-white/10'
                                        }`}
                                >
                                    {num} Joueurs
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Classes Display */}
                    <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="flex items-center gap-2 p-2 glass-inner">
                            <ClassReference type="working" />
                        </div>
                        <div className="flex items-center gap-2 p-2 glass-inner">
                            <ClassReference type="capitalist" />
                        </div>
                        <div className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${numPlayers >= 3 ? 'glass-inner opacity-100' : 'bg-black/40 opacity-30'}`}>
                            <ClassReference type="middle" />
                        </div>
                        <div className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${numPlayers === 4 ? 'glass-inner opacity-100' : 'bg-black/40 opacity-30'}`}>
                            <ClassReference type="state" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Collapsible Setup Sections */}
            <SetupSection
                title={<h3 className="text-xl font-bold text-blue-400">Plateau de Jeu</h3>}
                icon={Package}
                defaultOpen={true}
            >
                <div className="space-y-2">
                    <CheckItem id="plateau" checkedState={checked} toggleFn={toggleCheck}>Placer le plateau au milieu de la table</CheckItem>
                    <CheckItem id="manche" checkedState={checked} toggleFn={toggleCheck}>Placer le pion Manche sur le décompte de Manches, case 1</CheckItem>
                    <CheckItem id="pion-score" checkedState={checked} toggleFn={toggleCheck}>Placer le pion Score de chaque joueur sur la case 0 de la piste de Score</CheckItem>
                </div>
            </SetupSection>

            <SetupSection
                title={<h3 className="text-xl font-bold text-slate-300"><ClassReference type="state" label="L'État" /></h3>}
            >
                <div className="space-y-2">
                    <CheckItem id="tresor" checkedState={checked} toggleFn={toggleCheck}>Déposer <strong>120Ꝟ</strong> dans le Trésor Public</CheckItem>
                    <CheckItem id="sante" checkedState={checked} toggleFn={toggleCheck}>
                        Placer <strong>{services.sante} jetons Santé</strong> sur les emplacements correspondants dans la zone Services Publics
                    </CheckItem>
                    <CheckItem id="education" checkedState={checked} toggleFn={toggleCheck}>
                        Placer <strong>{services.education} jetons Éducation</strong> sur les emplacements correspondants dans la zone Services Publics
                    </CheckItem>
                    <CheckItem id="influence" checkedState={checked} toggleFn={toggleCheck}>
                        Placer <strong>{services.influence} jetons Influence</strong> sur les emplacements correspondants dans la zone Services Publics
                    </CheckItem>
                    {numPlayers === 4 && (
                        <>
                            <CheckItem id="legitimite" checkedState={checked} toggleFn={toggleCheck}>
                                Placer chaque pion Légitimité sur la <strong>case 2</strong> (rouge, jaune, bleu)
                            </CheckItem>
                            <CheckItem id="agenda" checkedState={checked} toggleFn={toggleCheck}>Révéler un nouvel Agenda Politique</CheckItem>
                            <CheckItem id="evenements" checkedState={checked} toggleFn={toggleCheck}>Révéler 2 nouvelles cartes Événement</CheckItem>
                        </>
                    )}
                </div>
            </SetupSection>

            <SetupSection
                title={<h3 className="text-xl font-bold text-red-400"><ClassReference type="working" label="Classe Ouvrière" /></h3>}
            >
                <div className="space-y-2">
                    <CheckItem id="ouvriere-plateau" checkedState={checked} toggleFn={toggleCheck}>Installer le Plateau Joueur de la Classe Ouvrière</CheckItem>
                    <CheckItem id="ouvriere-prosperite" checkedState={checked} toggleFn={toggleCheck}>Placer un pion <strong>Prospérité</strong> sur la première case (0)</CheckItem>
                    <CheckItem id="ouvriere-argent" checkedState={checked} toggleFn={toggleCheck}>Prendre <strong>30Ꝟ</strong> et 1 jeton Influence</CheckItem>
                    <CheckItem id="ouvriere-cartes" checkedState={checked} toggleFn={toggleCheck}>Prendre les <strong>cartes Action</strong> de la Classe Ouvrière (7 cartes en main)</CheckItem>
                    <CheckItem id="ouvriere-travailleurs" checkedState={checked} toggleFn={toggleCheck}>Prendre les cartes Travailleur et jetons Vote</CheckItem>
                </div>
            </SetupSection>

            {numPlayers >= 3 && (
                <SetupSection
                    title={<h3 className="text-xl font-bold text-yellow-400"><ClassReference type="middle" label="Classe Moyenne" /></h3>}
                >
                    <div className="space-y-2">
                        <CheckItem id="moyenne-plateau" checkedState={checked} toggleFn={toggleCheck}>Installer le Plateau Joueur de la Classe Moyenne</CheckItem>
                        <CheckItem id="moyenne-suivi" checkedState={checked} toggleFn={toggleCheck}>Placer un marqueur sur la première case du <strong>Suivi Démographique</strong> (10)</CheckItem>
                        <CheckItem id="moyenne-prosperite" checkedState={checked} toggleFn={toggleCheck}>Placer un pion <strong>Prospérité</strong> sur la première case (0)</CheckItem>
                        <CheckItem id="moyenne-argent" checkedState={checked} toggleFn={toggleCheck}>Prendre <strong>30Ꝟ</strong> et 1 jeton Influence</CheckItem>
                        <CheckItem id="moyenne-nourriture" checkedState={checked} toggleFn={toggleCheck}>Prendre 1 <strong>Nourriture</strong> et 1 <strong>Santé</strong></CheckItem>
                        <CheckItem id="moyenne-cartes" checkedState={checked} toggleFn={toggleCheck}>Prendre les <strong>cartes Action</strong> de la Classe Moyenne (7 cartes en main)</CheckItem>
                        <CheckItem id="moyenne-entreprises" checkedState={checked} toggleFn={toggleCheck}>Révéler les 3 premières Entreprises, placez-les face visible (zone Marché)</CheckItem>
                        <CheckItem id="moyenne-travailleurs" checkedState={checked} toggleFn={toggleCheck}>Placer les Travailleurs de la Classe Moyenne près du plateau</CheckItem>
                    </div>
                </SetupSection>
            )}

            <SetupSection
                title={<h3 className="text-xl font-bold text-blue-400"><ClassReference type="capitalist" label="Classe Capitaliste" /></h3>}
            >
                <div className="space-y-2">
                    <CheckItem id="capitaliste-plateau" checkedState={checked} toggleFn={toggleCheck}>Installer le Plateau Joueur de la Classe Capitaliste</CheckItem>
                    <CheckItem id="capitaliste-ca" checkedState={checked} toggleFn={toggleCheck}>Prenez <strong>120Ꝟ</strong> et stockez dans la zone Chiffre d'Affaires</CheckItem>
                    <CheckItem id="capitaliste-nourriture" checkedState={checked} toggleFn={toggleCheck}>Placer 1 <strong>Nourriture</strong> et 2 <strong>Luxe</strong> dans les Entrepôts</CheckItem>
                    <CheckItem id="capitaliste-education" checkedState={checked} toggleFn={toggleCheck}>Placer 2 <strong>Éducation</strong> et 1 <strong>Influence</strong> dans les Entrepôts</CheckItem>
                    <CheckItem id="capitaliste-cartes" checkedState={checked} toggleFn={toggleCheck}>Prendre les <strong>cartes Action</strong> de la Classe Capitaliste (7 cartes en main)</CheckItem>
                    <CheckItem id="capitaliste-entreprises" checkedState={checked} toggleFn={toggleCheck}>Prendre les cartes <strong>Entreprise</strong> de la Classe Capitaliste, mélangez-les</CheckItem>
                    <CheckItem id="capitaliste-marche" checkedState={checked} toggleFn={toggleCheck}>Révélez les 4 premières et placez-les face visible (zone Marché)</CheckItem>
                    <CheckItem id="capitaliste-export" checkedState={checked} toggleFn={toggleCheck}>Mélangez les cartes Export, piochez la première carte</CheckItem>
                    <CheckItem id="capitaliste-commerce" checkedState={checked} toggleFn={toggleCheck}>Piochez les cartes Accord Commercial selon Politique 6</CheckItem>
                </div>
            </SetupSection>

            <SetupSection
                title={<h3 className="text-xl font-bold text-purple-400">🎲 Politiques</h3>}
            >
                <div className="space-y-2">
                    <CheckItem id="politiques" checkedState={checked} toggleFn={toggleCheck}>Placez les pions Politique sur le tableau des Politiques</CheckItem>
                    <CheckItem id="politiques-note" checkedState={checked} toggleFn={toggleCheck}>
                        <strong>Suggestion départ :</strong> Fiscale C, Travail B, Imposition B, Santé B, Éducation B, Commerce B, Immigration B
                    </CheckItem>
                </div>
            </SetupSection>

            <SetupSection
                title={<h3 className="text-xl font-bold text-green-400">🎯 Ressources</h3>}
            >
                <div className="space-y-2">
                    <CheckItem id="ressources" checkedState={checked} toggleFn={toggleCheck}>Disposez les ressources en tas (Nourriture, Luxe, Santé, Éducation, Influence)</CheckItem>
                    <CheckItem id="argent" checkedState={checked} toggleFn={toggleCheck}>Disposez l'argent, cartes Emprunt, tuiles Entrepôt, marqueurs</CheckItem>
                    <CheckItem id="travailleurs" checkedState={checked} toggleFn={toggleCheck}>Gardez les Travailleurs des Classes Moyenne et Ouvrière près du plateau</CheckItem>
                    <CheckItem id="aides" checkedState={checked} toggleFn={toggleCheck}>Gardez les Aides de Jeu près du plateau pour référence</CheckItem>
                </div>
            </SetupSection>

            <Card className="glass-effect bg-gradient-to-r from-green-900/40 to-transparent border-2 border-green-800">
                <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                        <CheckCircle2 className="w-12 h-12 text-green-500 flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-bold text-green-300 mb-2">Prêt à Jouer !</h3>
                            <p className="text-green-200">
                                Une fois toutes les étapes complétées, vous pouvez commencer la <strong>Manche 1 - Phase d'Action</strong> !
                            </p>
                            <p className="text-sm text-green-300 mt-2 italic">
                                (La Phase de Préparation est ignorée lors de la première manche)
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SetupGuideTab;

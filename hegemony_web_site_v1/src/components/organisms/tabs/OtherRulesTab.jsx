import React, { useState } from 'react';
import { ScrollText, Building2, AlertTriangle, Coins, CreditCard, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SafeImage from '../../atoms/SafeImage';
import { ASSETS } from '../../../constants/materialData';

// Re-using some FMI content logic but adapted
const OtherRulesTab = () => {
    const [activeSection, setActiveSection] = useState('emprunts');

    const sections = [
        { id: 'emprunts', label: 'Emprunts', icon: CreditCard, color: 'text-yellow-400', borderColor: 'border-yellow-500' },
        { id: 'fmi', label: 'Intervention du FMI', icon: Building2, color: 'text-red-400', borderColor: 'border-red-500' },
        { id: 'limited', label: 'Autres Règles', icon: ScrollText, color: 'text-slate-300', borderColor: 'border-slate-500' }
    ];

    const renderEmprunts = () => (
        <div className="space-y-6 animate-fade-in">
            <Card className="glass-effect border-l-4 border-yellow-500">
                <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                        <div className="hidden md:block p-4 bg-yellow-500/20 rounded-xl">
                            <CreditCard className="w-12 h-12 text-yellow-500" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">Les Emprunts</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Les joueurs seront souvent amenés à payer certaines sommes (Imposition, Salaires, Besoins, etc.).
                                S'ils ne peuvent pas payer, ils <strong>doivent</strong> faire un Emprunt.
                            </p>

                            <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                                <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                                    <Coins className="w-5 h-5" />
                                    Comment faire un Emprunt ?
                                </h4>
                                <p className="text-slate-300">
                                    Placez une carte Emprunt près de votre Plateau Joueur et gagnez <strong>50 Ꝟ</strong>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <h4 className="font-bold text-white border-b border-white/10 pb-2">Règles Importantes</h4>
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
                                    <h4 className="font-bold text-white border-b border-white/10 pb-2">Remboursement</h4>
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
                    </div>
                </CardContent>
            </Card>

            <Card className="glass-effect border-l-4 border-blue-500">
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Spécificités par Classe</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                            <h4 className="font-bold text-blue-300 mb-2">Classe Capitaliste</h4>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                                <li>L'argent de l'Emprunt (50 Ꝟ) va dans le <strong>Capital</strong>.</li>
                                <li>Les intérêts et remboursements sont payés depuis le <strong>Capital</strong>.</li>
                                <li>Perd <strong>5 PV</strong> par Emprunt non remboursé en fin de partie.</li>
                            </ul>
                        </div>
                        <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="font-bold text-purple-300 mb-2">L'État (2-3 joueurs)</h4>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                                <li>Si le Trésor Public est vide, l'État fait un Emprunt.</li>
                                <li>Carte Emprunt sur le Trésor Public + 50 Ꝟ.</li>
                                <li>Rembourse automatiquement dès qu'il a 50 Ꝟ lors de la Phase de Préparation.</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const renderFMI = () => (
        <div className="space-y-6 animate-fade-in">
            <Card className="glass-effect border-2 border-red-900/30">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                        <div className="p-4 bg-red-900/30 rounded-full flex-shrink-0">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Déclenchement</h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Le FMI intervient lors de l'étape "Contrôle du FMI" (Phase de Production) si l'État a plus d'Emprunts
                                que ne l'autorise la Politique Fiscale ET ne peut pas les rembourser.
                            </p>
                            <div className="p-6 bg-red-900/20 rounded-xl border border-red-800">
                                <p className="font-bold text-red-300 mb-3 uppercase tracking-wide text-sm">Limite d'Emprunts selon Politique 1 (Fiscale)</p>
                                <ul className="space-y-2 text-red-200 font-medium">
                                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Section A ou B : <strong>2 Emprunts max</strong></li>
                                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Section C : <strong>1 Emprunt max</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="glass-effect">
                <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-white mb-8">Conséquences de l'Intervention</h3>

                    <div className="space-y-8">
                        {[
                            {
                                title: "1. Annulation des Projets de Loi",
                                desc: "Tous les Projets de Loi en cours sont défaussés immédiatement.",
                                sub: "Compensation : Chaque joueur reçoit 1 Influence par Projet de Loi qu'il avait proposé."
                            },
                            {
                                title: "2. Politique d'Austérité (Changements imposés)",
                                desc: "Le FMI impose un nouveau tableau politique drastique.",
                                content: (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                        {[
                                            { id: '1', val: 'C', label: 'Fiscale' },
                                            { id: '2', val: 'C', label: 'Travail' },
                                            { id: '3', val: 'A', label: 'Imposition' },
                                            { id: '4', val: 'B', label: 'Santé' },
                                            { id: '5', val: 'C', label: 'Éducation' },
                                            { id: '6', val: 'B', label: 'Commerce' },
                                            { id: '7', val: 'A', label: 'Immigration' }
                                        ].map(p => (
                                            <div key={p.id} className="glass-inner-dark p-3 text-center rounded-lg border border-white/5">
                                                <div className="text-xs text-slate-500 uppercase">{p.label}</div>
                                                <div className="text-xl font-bold text-white">{p.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            },
                            {
                                title: "3. Application des Effets",
                                desc: "Les changements de politiques ont des effets immédiats :",
                                list: [
                                    "Fermeture d'Entreprises Publiques (Politique Fiscale C)",
                                    "Baisse des Salaires au niveau N1 (Politique Travail C)",
                                    "Ajustement du Multiplicateur Fiscal (Imposition A + Santé B + Éducation C)",
                                    "Ajustement des prix (Santé/Éducation/Import)"
                                ]
                            },
                            {
                                title: "4. Remboursement Forcé",
                                desc: "L'État utilise tout son argent (y compris celui gagné par la vente forcée d'entreprises) pour rembourser ses Emprunts.",
                                sub: "S'il ne peut toujours pas tout rembourser, il paie le maximum et les Emprunts restants sont défaussés."
                            },
                            {
                                title: "5. Perte de Légitimité (Chute du Gouvernement)",
                                desc: "Les 3 scores de Légitimité de l'État sont divisés par 2 (arrondi au supérieur).",
                                icon: <Scale className="w-6 h-6 text-red-400" />
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 relative">
                                {idx !== 4 && <div className="absolute left-6 top-16 bottom-[-32px] w-1 bg-slate-700"></div>}
                                <div className="w-12 h-12 glass-inner-dark rounded-full flex items-center justify-center font-bold text-xl text-white border border-white/10 flex-shrink-0">
                                    {idx + 1}
                                </div>
                                <div className="flex-1 pt-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-xl font-bold text-white">{step.title}</h4>
                                        {step.icon}
                                    </div>
                                    <p className="text-slate-400 mb-2">{step.desc}</p>
                                    {step.sub && <p className="text-sm font-bold text-slate-400 glass-inner-dark p-3 rounded-lg mt-2">{step.sub}</p>}
                                    {step.list && (
                                        <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 bg-black/20 p-3 rounded-lg">
                                            {step.list.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    )}
                                    {step.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-xl flex gap-4 items-start">
                <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-orange-400 text-lg mb-2">Impact Majeur</h4>
                    <p className="text-orange-200/80">
                        L'intervention du FMI change drastiquement le cours de la partie.
                        Si l'État semble proche de la faillite, il est recommandé d'en informer les autres joueurs.
                    </p>
                </div>
            </div>
        </div>
    );

    const renderLimited = () => (
        <div className="space-y-6 animate-fade-in">
            <Card className="glass-effect">
                <CardContent className="p-6 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <ScrollText className="w-8 h-8 text-slate-400" />
                            Matériel Limité
                        </h3>
                        <div className="prose prose-invert max-w-none text-slate-300">
                            <p className="text-lg">
                                Dans Hegemony, la règle générale concernant le matériel est la suivante :
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                                    <h4 className="font-bold text-red-400 text-xl mb-4">Matériel Limité</h4>
                                    <p className="mb-4">Si une réserve est vide, vous <strong>ne pouvez plus</strong> obtenir cet élément.</p>
                                    <ul className="list-disc list-inside space-y-2 text-slate-300">
                                        <li>Cubes de Vote</li>
                                        <li>Cubes d'Influence</li>
                                        <li>Travailleurs</li>
                                        <li>Jetons (Ressources, etc.)</li>
                                    </ul>
                                </div>
                                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
                                    <h4 className="font-bold text-green-400 text-xl mb-4">Matériel Illimité</h4>
                                    <p className="mb-4">Il n'y a qu'une seule exception à la règle de limitation :</p>
                                    <ul className="list-disc list-inside space-y-2 text-slate-300">
                                        <li className="text-lg font-bold text-white">L'Argent (Billets)</li>
                                    </ul>
                                    <p className="mt-4 text-sm text-slate-400 italic">
                                        Si la banque est à court de billets, utilisez un substitut approprié.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Crédits</h3>
                        <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                            <p className="text-slate-300 mb-2">Un jeu créé par</p>
                            <h4 className="text-xl font-bold text-white mb-6">Vangelis Bagiartakis & Varnavas Timotheou</h4>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-400">
                                <div>
                                    <span className="block font-bold text-slate-300">Illustrations</span>
                                    Jakub Skop
                                </div>
                                <div>
                                    <span className="block font-bold text-slate-300">Développement</span>
                                    Hegemonic Project Games
                                </div>
                                <div>
                                    <span className="block font-bold text-slate-300">Édition</span>
                                    Hegemonic Project Games
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    return (
        <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
            {/* Navigation */}
            <div className="flex flex-wrap gap-4 justify-center">
                {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`
                                flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all duration-300
                                ${isActive
                                    ? `bg-slate-800 text-white shadow-lg ring-2 ring-offset-2 ring-offset-slate-900 ${section.borderColor.replace('border', 'ring')}`
                                    : 'glass-effect text-slate-400 hover:bg-white/5 hover:text-white'
                                }
                            `}
                        >
                            <Icon className={`w-6 h-6 ${isActive ? section.color : ''}`} />
                            <span>{section.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <div className="min-h-[500px]">
                {activeSection === 'emprunts' && renderEmprunts()}
                {activeSection === 'fmi' && renderFMI()}
                {activeSection === 'limited' && renderLimited()}
            </div>
        </div>
    );
};

export default OtherRulesTab;

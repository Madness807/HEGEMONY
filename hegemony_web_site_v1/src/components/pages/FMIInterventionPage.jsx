import React from 'react';
import { Building2, AlertTriangle, Scale } from 'lucide-react';
import { RulesSection } from '../molecules/RulesComponents';

const FMIInterventionPage = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <RulesSection title="Déclenchement" icon={AlertTriangle} color="red">
                <div>
                    <p className="text-slate-300 text-base leading-relaxed mb-6">
                        Le FMI intervient lors de l'étape "Contrôle du FMI" (Phase de Production) si l'État a plus d'Emprunts
                        que ne l'autorise la Politique Fiscale ET ne peut pas les rembourser.
                    </p>
                    <div className="p-6 bg-red-900/20 rounded-xl border border-red-800">
                        <p className="font-bold text-red-300 mb-3 uppercase tracking-wide text-xs">Limite d'Emprunts selon Politique 1 (Fiscale)</p>
                        <ul className="space-y-2 text-red-200 font-medium text-sm">
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Section A ou B : <strong>2 Emprunts max</strong></li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Section C : <strong>1 Emprunt max</strong></li>
                        </ul>
                    </div>
                </div>
            </RulesSection>

            <RulesSection title="Conséquences de l'Intervention" color="slate">
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
                                    <h4 className="text-lg font-bold text-white">{step.title}</h4>
                                    {step.icon}
                                </div>
                                <p className="text-slate-400 mb-2 text-base">{step.desc}</p>
                                {step.sub && <p className="text-sm font-bold text-slate-400 glass-inner-dark p-3 rounded-lg mt-2">{step.sub}</p>}
                                {step.list && (
                                    <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 bg-black/20 p-3 rounded-lg text-sm">
                                        {step.list.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                )}
                                {step.content}
                            </div>
                        </div>
                    ))}
                </div>
            </RulesSection>

            <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-xl flex gap-4 items-start">
                <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-orange-400 text-lg mb-2">Impact Majeur</h4>
                    <p className="text-orange-200/80 text-base">
                        L'intervention du FMI change drastiquement le cours de la partie.
                        Si l'État semble proche de la faillite, il est recommandé d'en informer les autres joueurs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FMIInterventionPage;

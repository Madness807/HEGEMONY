import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const FMIGuideTab = () => (
    <div className="space-y-8 animate-fade-in">


        <Card className="glass-effect border-2 border-red-900/30">
            <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                    <div className="p-4 bg-red-900/30 rounded-full flex-shrink-0">
                        <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Déclenchement</h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Le FMI intervient lors de l'étape "Contrôle du FMI" si l'État a plus d'Emprunts
                            que ne l'autorise la Politique Fiscale ET ne peut pas les rembourser.
                        </p>
                        <div className="p-6 bg-red-900/20 rounded-xl border border-red-800">
                            <p className="font-bold text-red-300 mb-3 uppercase tracking-wide text-sm">Limite d'Emprunts selon Politique 1</p>
                            <ul className="space-y-2 text-red-200 font-medium">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Section A ou B: 2 Emprunts maximum</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Section C: 1 Emprunt maximum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card className="glass-effect">
            <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-8">Étapes de l'Intervention</h3>

                <div className="space-y-8">
                    {[
                        { title: "Rejeter les Projets de Loi", desc: "Tous les Projets de Loi sont défaussés immédiatement.", sub: "Compensation: Chaque joueur reçoit 1 Influence par Projet de Loi perdu." },
                        {
                            title: "Modifier le Tableau Politique", desc: "Nouvelles positions imposées par le FMI.", content: (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                    {['Fiscale: C', 'Travail: C', 'Imposition: A', 'Santé: B', 'Éducation: C', 'Commerce: B', 'Immigration: A'].map(p => (
                                        <div key={p} className="glass-inner-dark p-2 text-center rounded-lg text-sm font-bold text-slate-300">{p}</div>
                                    ))}
                                </div>
                            )
                        },
                        { title: "Appliquer les Effets", desc: "Vente Entreprises Publiques, Salaires au minimum (N1), Recalcul Multiplicateur, Ajustement prix." },
                        { title: "Rembourser les Emprunts", desc: "L'État utilise tout son argent pour rembourser. Le reste est effacé." },
                        { title: "Perte de Légitimité", desc: "(4 joueurs) Les 3 scores de Légitimité de l'État sont divisés par 2." }
                    ].map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                            {idx !== 4 && <div className="absolute left-6 top-16 bottom-[-32px] w-1 bg-slate-700"></div>}
                            <div className="w-12 h-12 glass-inner-dark rounded-full flex items-center justify-center font-bold text-xl text-white border border-white/10">
                                {idx + 1}
                            </div>
                            <div className="flex-1 pt-1">
                                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-slate-400 mb-2">{step.desc}</p>
                                {step.sub && <p className="text-sm font-bold text-slate-400 glass-inner-dark p-3 rounded-lg mt-2">{step.sub}</p>}
                                {step.content}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
);

export default FMIGuideTab;

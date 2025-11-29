import React from 'react';
import { Factory } from 'lucide-react';
import GlassCard from '../../molecules/GlassCard';
import CheckItem from '../../molecules/CheckItem';

const ProductionPhase = () => (
    <div className="space-y-6">
        <h4 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
            <Factory className="w-6 h-6" />
            Phase de Production
        </h4>
        <p className="text-slate-400 font-bold">Ordre inversé :</p>
        <div className="grid md:grid-cols-2 gap-4">
            <GlassCard className="p-5 rounded-xl border border-slate-700">
                <h5 className="font-bold mb-3 text-white flex items-center gap-2">
                    <span className="bg-slate-700 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs">1</span>
                    Production
                </h5>
                <ul className="text-sm space-y-2">
                    <CheckItem>Payer les Salaires</CheckItem>
                    <CheckItem>Produire les ressources</CheckItem>
                    <CheckItem>Relever les Travailleurs</CheckItem>
                </ul>
            </GlassCard>
            <GlassCard className="p-5 rounded-xl border border-slate-700">
                <h5 className="font-bold mb-3 text-white flex items-center gap-2">
                    <span className="bg-slate-700 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs">2</span>
                    Besoins
                </h5>
                <ul className="text-sm space-y-2">
                    <CheckItem>Acheter Nourriture</CheckItem>
                </ul>
            </GlassCard>
            <GlassCard className="p-5 rounded-xl border border-slate-700">
                <h5 className="font-bold mb-3 text-white flex items-center gap-2">
                    <span className="bg-slate-700 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs">3</span>
                    FMI
                </h5>
                <ul className="text-sm space-y-2">
                    <CheckItem>Vérifier limite d'Emprunts</CheckItem>
                </ul>
            </GlassCard>
            <GlassCard className="p-5 rounded-xl border border-slate-700">
                <h5 className="font-bold mb-3 text-white flex items-center gap-2">
                    <span className="bg-slate-700 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs">4</span>
                    Impôts
                </h5>
                <ul className="text-sm space-y-2">
                    <CheckItem>Utiliser le calculateur !</CheckItem>
                </ul>
            </GlassCard>
        </div>
    </div>
);

export default ProductionPhase;

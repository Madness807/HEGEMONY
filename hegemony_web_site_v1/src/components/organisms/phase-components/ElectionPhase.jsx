import React from 'react';
import { Users } from 'lucide-react';
import GlassCard from '../../molecules/GlassCard';
import CheckItem from '../../molecules/CheckItem';
import ClassReference from '../../atoms/ClassReference';

const ElectionPhase = ({ numPlayers }) => (
    <div className="space-y-6">
        <h4 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Phase d'Élections
        </h4>
        <div className="space-y-6">
            <GlassCard className="p-8 rounded-xl border-l-4 border-purple-500">
                <h5 className="font-bold mb-3 text-lg text-white">1. Remplir le Sac</h5>
                <ul className="space-y-2">
                    <CheckItem><ClassReference type="working" /> : ½ Population</CheckItem>
                    {numPlayers >= 3 && <CheckItem><ClassReference type="middle" /> : max(½ Pop, ½ Ent)</CheckItem>}
                    <CheckItem><ClassReference type="capitalist" /> : ½ Entreprises Ops</CheckItem>
                    {numPlayers === 4 && <CheckItem><ClassReference type="state" /> : Influence selon légitimité</CheckItem>}
                </ul>
            </GlassCard>
            <GlassCard className="p-8 rounded-xl border-l-4 border-purple-700">
                <h5 className="font-bold mb-3 text-lg text-white">2. Organiser les Élections</h5>
                <ul className="space-y-2">
                    <CheckItem>Pour chaque Projet de Loi</CheckItem>
                    <CheckItem>Déclarer Pour/Contre</CheckItem>
                    <CheckItem>Tirer 5 cubes</CheckItem>
                    <CheckItem>Dépenser Influence</CheckItem>
                    <CheckItem>Résolution & PV</CheckItem>
                </ul>
            </GlassCard>
        </div>
    </div>
);

export default ElectionPhase;

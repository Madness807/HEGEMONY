import React from 'react';
import { Users } from 'lucide-react';
import SolidCard from '../../molecules/SolidCard';
import CheckItem from '../../molecules/CheckItem';
import ClassReference from '../../atoms/ClassReference';
import PhaseHeader from '../../molecules/PhaseHeader';

const ElectionPhase = ({ numPlayers }) => (
    <div className="space-y-6">
        <div className="space-y-6">
            <SolidCard className="p-8 rounded-xl border-l-4 border-purple-500">
                <h5 className="font-bold mb-3 text-lg text-white">1. Remplir le Sac</h5>
                <ul className="space-y-2">
                    <CheckItem><ClassReference type="working" /> : ½ Population</CheckItem>
                    {numPlayers >= 3 && <CheckItem><ClassReference type="middle" /> : max(½ Pop, ½ Ent)</CheckItem>}
                    <CheckItem><ClassReference type="capitalist" /> : ½ Entreprises Ops</CheckItem>
                    {numPlayers === 4 && <CheckItem><ClassReference type="state" /> : Influence selon légitimité</CheckItem>}
                </ul>
            </SolidCard>
            <SolidCard className="p-8 rounded-xl border-l-4 border-purple-700">
                <h5 className="font-bold mb-3 text-lg text-white">2. Organiser les Élections</h5>
                <ul className="space-y-2">
                    <CheckItem>Pour chaque Projet de Loi</CheckItem>
                    <CheckItem>Déclarer Pour/Contre</CheckItem>
                    <CheckItem>Tirer 5 cubes</CheckItem>
                    <CheckItem>Dépenser Influence</CheckItem>
                    <CheckItem>Résolution & PV</CheckItem>
                </ul>
            </SolidCard>
        </div>
    </div>
);

export default ElectionPhase;

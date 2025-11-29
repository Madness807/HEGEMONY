import React from 'react';
import { Calculator } from 'lucide-react';
import GlassCard from '../../molecules/GlassCard';
import CheckItem from '../../molecules/CheckItem';
import ClassReference from '../../atoms/ClassReference';

const ScoringPhase = ({ numPlayers }) => (
    <div className="space-y-6">
        <h4 className="text-2xl font-bold text-red-400 flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Phase de Décompte
        </h4>
        <GlassCard className="p-8 rounded-xl border border-red-800">
            <div className="space-y-4">
                <CheckItem><ClassReference type="working" /> : +2 PV par Syndicat</CheckItem>
                {numPlayers >= 3 && <CheckItem><ClassReference type="middle" /> : +1 Prospérité si &lt; Entreprises Ops</CheckItem>}
                <CheckItem><ClassReference type="capitalist" /> : Transférer CA → Capital, PV selon tableau</CheckItem>
                {numPlayers === 4 && (
                    <>
                        <CheckItem><ClassReference type="state" /> : Pénalités Événements</CheckItem>
                        <CheckItem><ClassReference type="state" /> : PV = 2 légitimités faibles / 2</CheckItem>
                        <CheckItem><ClassReference type="state" /> : PV Agenda Politique</CheckItem>
                    </>
                )}
            </div>
        </GlassCard>
    </div>
);

export default ScoringPhase;

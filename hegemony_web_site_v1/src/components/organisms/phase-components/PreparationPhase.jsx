import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import CheckItem from '../../molecules/CheckItem';
import ClassReference from '../../atoms/ClassReference';

const PreparationPhase = ({ round, numPlayers }) => (
    <div className="space-y-6">
        <h4 className="text-2xl font-bold text-blue-300 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Phase de Préparation
        </h4>
        {round > 1 && (
            <div className="space-y-6">
                <CheckItem>Tous : Payer 5Ꝟ d'intérêts par Emprunt</CheckItem>
                <CheckItem><ClassReference type="working" /> : Réduire Prospérité de 1</CheckItem>
                {numPlayers >= 3 && <CheckItem><ClassReference type="middle" /> : Réduire Prospérité de 2</CheckItem>}
                <CheckItem>Tous : Piocher 5 cartes Action (7 en main)</CheckItem>
                {numPlayers >= 3 && <CheckItem><ClassReference type="middle" /> : Dévoiler nouvelles Entreprises (3 au marché)</CheckItem>}
                <CheckItem><ClassReference type="capitalist" /> : Dévoiler nouvelles Entreprises (4 au marché)</CheckItem>
                <CheckItem><ClassReference type="capitalist" /> : Piocher Accords Commerciaux selon Politique 6</CheckItem>
                <CheckItem><ClassReference type="capitalist" /> : Piocher nouvelle carte Export</CheckItem>
                <CheckItem><ClassReference type="working" /> : +2 Travailleurs non qualifiés + Immigration</CheckItem>
                {numPlayers >= 3 && <CheckItem><ClassReference type="middle" /> : +1 qualifié + 1 non qualifié + Immigration</CheckItem>}
                {numPlayers === 4 && (
                    <>
                        <CheckItem><ClassReference type="state" /> : Révéler 2 nouvelles cartes Événement</CheckItem>
                        <CheckItem><ClassReference type="state" /> : Révéler nouvel Agenda Politique</CheckItem>
                    </>
                )}
            </div>
        )}
        {round === 1 && (
            <div className="glass-inner p-6 flex items-center gap-4 border-l-4 border-l-green-500">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <p className="text-green-200 font-bold text-lg">Première manche : Passez directement à la Phase d'Action !</p>
            </div>
        )}
    </div>
);

export default PreparationPhase;

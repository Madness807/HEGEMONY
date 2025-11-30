import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import AccordionSection from '../../molecules/AccordionSection';
import CheckItem from '../../molecules/CheckItem';
import ClassReference from '../../atoms/ClassReference';
import SetupGuidePage from '../../pages/SetupGuidePage';
import PhaseHeader from '../../molecules/PhaseHeader';

const PreparationPhase = ({ round, numPlayers }) => {
    if (round === 1) {
        return <SetupGuidePage />;
    }

    return (
        <div className="space-y-6">
            <PhaseHeader
                title="Aperçu de la Phase"
                subtitle="Ordre du tour :"
                icon={BookOpen}
                color="blue"
            />

            <div className="space-y-4">
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
        </div>
    );
};

export default PreparationPhase;

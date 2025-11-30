import React, { useState } from 'react';
import { Map } from 'lucide-react';
import SafeImage from '../atoms/SafeImage';
import { ASSETS } from '../../constants/materialData';
import { BOARD_ZONES } from '../../constants/boardZones';
import { RulesSection } from '../molecules/RulesComponents';

const BoardPage = () => {
    const [selectedBoard, setSelectedBoard] = useState('main');
    const [activeZone, setActiveZone] = useState(null);

    const boards = {
        main: {
            title: 'Main Board',
            image: ASSETS.boards.main,
            interactive: true,
            description: `Le plateau principal de Hegemony contient tous les éléments centraux du jeu qui affectent toutes les classes. Survolez ou cliquez sur les zones pour voir les détails.`
        },
        working: {
            title: 'Worker Class Board',
            image: ASSETS.boards.working,
            interactive: false,
            description: `**Suivi Démographique** : Utilisez la piste du haut pour suivre la Population de la Classe Ouvrière. Placez le nombre de Travailleurs de la Classe Ouvrière (pions rouges) dans chaque zone. Ce nombre représente la Population du joueur, qui est en outre utilisée en dessous de la Population est très importante pour l'Éveil de la Classe Ouvrière car elle détermine la quantité de ressources nécessaires pour la réveiller, ainsi que sa limite d'achat.

**Prospérité** : Cette piste indique la Prospérité de la Classe Ouvrière. La Prospérité augmente lorsque la Classe Ouvrière lorsque la Classe Ouvrière permet à sa Population d'accéder à la Santé, l'Éducation ou au Luxe. Plus cet indicateur est haut, Plus le joueur gagne de Points de Victoire (PV).

**Syndicats** : La Classe Ouvrière peut mettre en place des Syndicats dans les Secteurs qul permettent une action Syndicat. Lorsqu'elle se réveille de sa propre Classe. Un Syndicat octroi de l'Influence et des PV supplémentaires.

**Revenus** : Il s'agit de la réserve d'argent de la Classe Ouvrière

**Biens et Services** : Les ressources achetées et obtenues sont disposées ici jusqu'à leur utilisation (Santé, Éducation, Luxe et Influence).`
        },
        middle: {
            title: 'Middle Class Board',
            image: ASSETS.boards.middle,
            interactive: false,
            description: `**Suivi Démographique** : Utilisez la piste du haut pour suivre la Population de la Classe Moyenne. Placez le nombre de Travailleurs de la Classe Moyenne (pions jaunes) dans chaque zone. Ce nombre représente la Population du joueur, qui est en au-dessous. Bien qu'il se fonctionne de la même manière, la piste de Prospérité de la Classe Moyenne s'affiche séparément de la piste Classe Ouvrière.

**Prospérité** : Cette piste indique la Prospérité de la Classe Moyenne. La Prospérité augmente lorsque la Classe Moyenne permet à sa Population d'accéder à la Santé, l'Éducation ou au Luxe. Plus cet indicateur est haut, Plus le joueur gagne de Points de Victoire (PV). Bien que cet indicateur fonctionne de la même manière, la piste de Prospérité de la Classe Moyenne peut permettre à la Classe d'obtenir des prix spéciaux.

**Entreprôts** : Les biens et les services produits par les Entreprises de la Classe Moyenne sont placés ici. Chaque Entreprôt a sa propre limite de stockage indiquée en bas. Sous chaque Entrepôt figurent les prix auxquels peuvent être vendues les ressources correspondantes aux autres joueurs. L'Influence ne peut pas être vendue et son Entrepôt n'a aucune limite de stockage.

**Revenus** : Il s'agit de la réserve d'argent de la Classe Moyenne.

**Biens et Services** : Les ressources achetées et obtenues sont disposées ici jusqu'à leur utilisation (Sant, Éducation, Luxe et Influence).`
        },
        capitalist: {
            title: 'Capitalist Class Board',
            image: ASSETS.boards.capitalist,
            interactive: false,
            description: `**Chiffre d'Affaires** : L'argent accumulé par la Classe Capitaliste est entreposé ici. Les Salaires sont payés à partir de ce Chiffre d'Affaires, sauf si l'inverse est précisé.

**Capital** : À chaque manche, après que la Classe Capitaliste paie ses Salaires et paie ses impôts, l'argent restant du Chiffre d'Affaires est déplacé à cet emplacement et devient le Capital de la Classe Capitaliste.

**Richesse** : Cette piste indique les PV marqués par le joueur à la fin de chaque manche. Ces Points ne dépendent que du montant total marqué par le Capital (Salaires+ Chiffre d'Affaires si été transféré). Si le montant augmente, le joueur remporte des Points de Victoire supplémentaires.

**Entrepôts** : Les biens et les services produits par les Entreprises de la Classe Capitaliste sont placés ici. Chaque Entreprôt a sa propre limite de stockage indiquée en bas. Sous chaque Entrepôt figurent les prix auxquels peuvent être vendues les ressources correspondantes aux autres joueurs. L'Influence ne peut pas être vendue et son Entrepôt n'a aucune limite de stockage.`
        },
        state: {
            title: 'State Board',
            image: ASSETS.boards.state,
            interactive: false,
            description: `**Légitimité** : Ces pistes indiquent la Légitimité de l'État selon le point de vue de chaque Classe. Chaque pion de Légitimité commence sur la case 2 (idéal). Lorsque la rancœur grandissant et que l'État envisage de manière égalitaire, À la fin de chaque manche, l'État gagne des PV basés sur les deux scores les moins élevés.

**Entrepôt d'Influence** : Les jetons d'Influence Personnelle de l'État sont stockés ici. Contrairement aux Joueurs-Entreprises, l'Influence Personnelle de l'État ne peut pas être achetée par les autres joueurs.

**Entrepôt de Nourriture et de Luxe** : En début de partie, l'État ne possède aucune Entreprise produisant de la Nourriture ou des produits de Luxe. Mais cette situation peut évoluer. Si tel est le cas, ces biens seront placés ici et pourront être achetés par les autres joueurs aux prix indiqués.`
        }
    };

    const boardButtons = [
        { id: 'main', label: 'Main Board', color: 'primary' },
        { id: 'working', label: 'Worker Class', color: 'working' },
        { id: 'middle', label: 'Middle Class', color: 'middle' },
        { id: 'capitalist', label: 'Capitalist Class', color: 'capitalist' },
        { id: 'state', label: 'State', color: 'state' }
    ];

    const getButtonClasses = (boardId, color) => {
        const baseClasses = 'px-4 py-3 rounded-lg font-bold text-base transition-all flex-1 md:flex-none';
        if (selectedBoard === boardId) {
            const colorMap = {
                primary: 'bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/50',
                working: 'bg-class-working text-white shadow-lg ring-2 ring-class-working/50',
                middle: 'bg-class-middle text-white shadow-lg ring-2 ring-class-middle/50',
                capitalist: 'bg-class-capitalist text-white shadow-lg ring-2 ring-class-capitalist/50',
                state: 'bg-class-state text-white shadow-lg ring-2 ring-class-state/50'
            };
            return `${baseClasses} ${colorMap[color]}`;
        }
        return `${baseClasses} bg-surface-secondary text-muted-foreground hover:bg-surface-tertiary`;
    };

    const currentBoard = boards[selectedBoard];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Board Selection Buttons */}
            <div className="bg-surface-primary border border-border p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Sélectionner un Plateau</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {boardButtons.map(({ id, label, color }) => (
                        <button
                            key={id}
                            onClick={() => {
                                setSelectedBoard(id);
                                setActiveZone(null);
                            }}
                            className={getButtonClasses(id, color)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Board Display */}
            <RulesSection title={currentBoard.title} icon={Map} color="slate">
                {/* Interactive Main Board */}
                {currentBoard.interactive ? (
                    <div className="space-y-4">
                        <p className="text-base text-muted-foreground">{currentBoard.description}</p>
                        <div className="relative w-full mx-auto bg-surface-board rounded-lg overflow-hidden shadow-2xl border border-border">
                            <SafeImage
                                src={currentBoard.image}
                                alt={currentBoard.title}
                                className="w-full h-auto object-contain"
                            />

                            {/* Overlay Zones */}
                            {BOARD_ZONES.map((zone) => (
                                <button
                                    key={zone.id}
                                    className={`absolute transition-all duration-200 border-2 
                                        ${activeZone?.id === zone.id
                                            ? 'bg-primary border-primary shadow-[0_0_15px_rgba(251,191,36,0.5)] opacity-50'
                                            : 'bg-transparent border-transparent hover:bg-white/20 hover:border-white/40'
                                        }`}
                                    style={zone.style}
                                    onMouseEnter={() => setActiveZone(zone)}
                                    onMouseLeave={() => setActiveZone(null)}
                                    onClick={() => setActiveZone(activeZone?.id === zone.id ? null : zone)}
                                    aria-label={zone.label}
                                />
                            ))}

                            {/* Tooltip / Popover */}
                            {activeZone && (
                                <div
                                    className="absolute z-50 p-4 bg-surface-tertiary border border-border text-foreground w-[90%] md:max-w-sm pointer-events-none transition-all duration-200 rounded-xl shadow-xl"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <h3 className="text-lg font-bold text-primary mb-2 border-b border-border pb-2">
                                        {activeZone.label}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {activeZone.description}
                                    </p>
                                </div>
                            )}
                        </div>
                        <p className="text-center text-muted-foreground text-sm italic">
                            <span className="hidden md:inline">Survolez les différentes zones du plateau pour afficher les explications.</span>
                            <span className="md:hidden">Touchez les zones du plateau pour voir les détails.</span>
                        </p>
                    </div>
                ) : (
                    /* Simple Board Display for Classes */
                    <div className="space-y-6">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <SafeImage
                                src={currentBoard.image}
                                alt={currentBoard.title}
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="bg-surface-secondary border border-border p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-foreground mb-4">Description</h3>
                            <div className="text-base text-muted-foreground space-y-3 whitespace-pre-line leading-relaxed">
                                {currentBoard.description}
                            </div>
                        </div>
                    </div>
                )}
            </RulesSection>
        </div>
    );
};

export default BoardPage;

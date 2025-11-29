export const BOARD_ZONES = [
    {
        id: 'policies',
        label: 'Tableau des Politiques',
        description: "Ce tableau dénombre toutes les Politiques du jeu et indique celles en vigueur. Chaque Politique peut se trouver dans l'une des trois sections (A, B ou C) qui représentent chacune une idéologie politique. Pour les Politiques 1 à 5, ces sections vont du Socialisme (A) au Néolibéralisme (C), alors que les Politiques 6 et 7 vont du Nationalisme (A) au Mondialisme (C). Au cours de la partie, les joueurs essaieront de changer ces Politiques à leur avantage.",
        style: { top: '18%', left: '28%', width: '18%', height: '18%' }
    },
    {
        id: 'score',
        label: 'Piste de Score',
        description: "Permet de tenir le compte des points de chaque joueur au cours de la partie.",
        style: { top: '16%', left: '28%', width: '44%', height: '3%' }
    },
    {
        id: 'round',
        label: 'Décompte de Manches',
        description: "Indique la manche actuelle.",
        style: { top: '18%', left: '58%', width: '14%', height: '4%' }
    },
    {
        id: 'trade',
        label: 'Accords Commerciaux',
        description: "C'est ici que sont placées les cartes Accord Commercial utilisées par la Classe Capitaliste. Le nombre de cartes placées est déterminé par la Politique 6 : Commerce Extérieur.",
        style: { top: '38%', left: '31%', width: '7%', height: '5%' }
    },
    {
        id: 'export',
        label: 'Export',
        description: "Les cartes Export sont placées ici. Elles permettent aux joueurs de vendre des Biens et des Services sur le Marché Étranger. Les valeurs affichées donnent une indication des prix par ressource figurant sur les cartes.",
        style: { top: '38%', left: '40%', width: '7%', height: '5%' }
    },
    {
        id: 'import',
        label: 'Import',
        description: "Si nécessaire, les Biens (Nourriture et Luxe) peuvent être achetés sur le Marché Étranger. Les prix sont indiqués en bas mais peuvent fluctuer selon la Politique de Commerce Extérieur en vigueur (Politique 6). Des droits de douane à payer à l'État peuvent s'appliquer si indiqués par un marqueur sur cet emplacement.",
        style: { top: '38%', left: '48%', width: '7%', height: '5%' }
    },
    {
        id: 'private_sector',
        label: 'Secteur Privé',
        description: "Les Entreprises construites par les Classes Moyenne et Capitaliste sont placées ici.",
        style: { top: '45%', left: '28%', width: '27%', height: '42%' }
    },
    {
        id: 'public_sector',
        label: 'Secteur Public',
        description: "Les Entreprises Publiques sont placées ici dès la Mise en Place du jeu. Cependant, certaines seront inactives (face cachée) en fonction de la « taille » du Secteur Public, qui est déterminée par la Politique 1 : la Politique Fiscale.",
        style: { top: '45%', left: '56%', width: '14%', height: '42%' }
    },
    {
        id: 'fiscal_multiplier',
        label: 'Multiplicateur Fiscal',
        description: "Indique la valeur du Multiplicateur Fiscal. Ce multiplicateur est utilisé pour déterminer le montant de l'impôt auquel les Classes Moyenne et Capitaliste sont assujetties. Cette valeur est affectée par les Politiques 3, 4 et 5.",
        style: { top: '21%', left: '53%', width: '15%', height: '3%' }
    },
    {
        id: 'voting',
        label: 'Résultats des Votes',
        description: "En cas de vote, chaque joueur déclare s'il est pour ou contre la motion proposée, puis on tire des cubes du sac pour déterminer le résultat. Les cubes sont placés sur ces emplacements selon la préférence de chaque joueur.",
        style: { top: '24%', left: '53%', width: '18%', height: '5%' }
    },
    {
        id: 'events',
        label: 'Événements',
        description: "(4 joueurs uniquement) Les cartes Événement que l'État doit gérer sont placées ici.",
        style: { top: '29%', left: '53%', width: '18%', height: '8%' }
    },
    {
        id: 'allocations',
        label: 'Allocations de l\'État',
        description: "(4 joueurs uniquement) Les allocations attribuées par l'État (généralement de l'argent ou des ressources) sont placées ici. Elles peuvent être générées par des Événements ou des effets de cartes.",
        style: { top: '37%', left: '53%', width: '18%', height: '4%' }
    },
    {
        id: 'public_services',
        label: 'Services Publics',
        description: "Emplacement destiné aux ressources produites par l'État (Santé, Éducation et Influence). Les Classes Moyenne et Ouvrière peuvent acheter ces ressources, en suivant les prix indiqués par les Politiques 4 et 5 pour la Santé et l'Éducation.",
        style: { top: '41%', left: '53%', width: '18%', height: '4%' }
    },
    {
        id: 'immigration',
        label: 'Immigration',
        description: "Les cartes Immigration sont placées ici. Quand les Immigrants entrent en jeu, leur type (s'ils sont qualifiés ou non, et dans quel Secteur) est déterminé par ces cartes. Le nombre de cartes piochées est déterminé par la Politique 7 : Immigration.",
        style: { top: '80%', left: '64%', width: '7%', height: '7%' }
    },
    {
        id: 'inactive_workers',
        label: 'Travailleurs Inactifs',
        description: "Les nouveaux Travailleurs sont placés ici quand ils entrent en jeu, généralement au début de chaque manche. Les Travailleurs qui deviennent inactifs au cours de la partie sont également placés ici.",
        style: { top: '80%', left: '55%', width: '8%', height: '7%' }
    },
    {
        id: 'public_treasury',
        label: 'Trésor Public',
        description: "L'argent de l'État est disposé ici.",
        style: { top: '38%', left: '58%', width: '10%', height: '5%' }
    }
];

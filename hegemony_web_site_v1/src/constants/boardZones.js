export const BOARD_ZONES = [
    {
        id: 'policies',
        label: 'Tableau des Politiques',
        description: "Ce tableau dénombre toutes les Politiques du jeu et indique celles en vigueur. Chaque Politique peut se trouver dans l'une des trois sections (A, B ou C).",
        style: { top: '12%', left: '5%', width: '38%', height: '25%' }
    },
    {
        id: 'foreign_trade',
        label: 'Politique 6 : Commerce Extérieur',
        description: "Détermine le nombre de cartes Accord Commercial disponibles et les prix Import/Export.",
        style: { top: '12%', left: '44%', width: '9%', height: '25%' }
    },
    {
        id: 'immigration_policy',
        label: 'Politique 7 : Immigration',
        description: "Détermine le nombre de cartes Immigration piochées à chaque manche.",
        style: { top: '12%', left: '54%', width: '9%', height: '25%' }
    },
    {
        id: 'score',
        label: 'Piste de Score',
        description: "Permet de tenir le compte des points de chaque joueur.",
        style: { top: '2%', left: '2%', width: '96%', height: '5%' }
    },
    {
        id: 'round',
        label: 'Décompte de Manches',
        description: "Indique la manche actuelle (1 à 5).",
        style: { top: '8%', left: '68%', width: '25%', height: '5%' }
    },
    {
        id: 'tax_multiplier',
        label: 'Multiplicateur Fiscal',
        description: "Indique le montant de l'impôt pour les Classes Moyenne et Capitaliste.",
        style: { top: '14%', left: '65%', width: '30%', height: '5%' }
    },
    {
        id: 'voting',
        label: 'Résultats des Votes',
        description: "Zone où sont placés les cubes de vote pour déterminer l'issue des lois.",
        style: { top: '20%', left: '65%', width: '30%', height: '8%' }
    },
    {
        id: 'events',
        label: 'Événements',
        description: "Les cartes Événement que l'État doit gérer sont placées ici.",
        style: { top: '29%', left: '65%', width: '30%', height: '10%' }
    },
    {
        id: 'state_benefits',
        label: 'Allocations de l\'État',
        description: "Les allocations (argent/ressources) attribuées par l'État sont placées ici.",
        style: { top: '40%', left: '65%', width: '30%', height: '10%' }
    },
    {
        id: 'business_deals',
        label: 'Accords Commerciaux',
        description: "Cartes utilisées par la Classe Capitaliste pour le commerce.",
        style: { top: '52%', left: '5%', width: '15%', height: '12%' }
    },
    {
        id: 'export',
        label: 'Export',
        description: "Permet de vendre des Biens et Services sur le Marché Étranger.",
        style: { top: '52%', left: '21%', width: '15%', height: '12%' }
    },
    {
        id: 'import',
        label: 'Import',
        description: "Permet d'acheter des Biens (Nourriture/Luxe) sur le Marché Étranger.",
        style: { top: '52%', left: '37%', width: '15%', height: '12%' }
    },
    {
        id: 'public_treasury',
        label: 'Trésor Public',
        description: "L'argent de l'État est disposé ici.",
        style: { top: '52%', left: '54%', width: '10%', height: '12%' }
    },
    {
        id: 'private_sector',
        label: 'Secteur Privé',
        description: "Les Entreprises construites par les Classes Moyenne et Capitaliste.",
        style: { top: '66%', left: '5%', width: '48%', height: '30%' }
    },
    {
        id: 'public_sector',
        label: 'Secteur Public',
        description: "Les Entreprises Publiques gérées par l'État.",
        style: { top: '66%', left: '54%', width: '15%', height: '30%' }
    },
    {
        id: 'public_services',
        label: 'Services Publics',
        description: "Ressources produites par l'État (Santé, Éducation, Influence).",
        style: { top: '52%', left: '65%', width: '30%', height: '15%' }
    },
    {
        id: 'inactive_workers',
        label: 'Travailleurs Inactifs',
        description: "Zone pour les travailleurs au chômage.",
        style: { top: '80%', left: '54%', width: '8%', height: '10%' }
    },
    {
        id: 'immigration',
        label: 'Immigration',
        description: "Les cartes Immigration sont placées ici.",
        style: { top: '80%', left: '63%', width: '6%', height: '10%' }
    }
];

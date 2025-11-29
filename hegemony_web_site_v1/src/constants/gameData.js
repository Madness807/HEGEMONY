// Game constants and static data
export const PHASES = [
    { name: 'Préparation', color: 'bg-blue-500', icon: 'BookOpen' },
    { name: 'Action', color: 'bg-green-500', icon: 'Play' },
    { name: 'Production', color: 'bg-yellow-500', icon: 'Factory' },
    { name: 'Élections', color: 'bg-purple-500', icon: 'Users' },
    { name: 'Décompte', color: 'bg-red-500', icon: 'Calculator' }
];

export const POLICY_NAMES = {
    fiscal: 'Politique Fiscale',
    labor: 'Marché du Travail',
    taxation: 'Imposition',
    healthWelfare: 'Santé et Allocations',
    education: 'Éducation',
    trade: 'Commerce Extérieur',
    immigration: 'Immigration'
};

export const POLICY_COLORS = {
    fiscal: '#0584b7',
    labor: '#726e9f',
    taxation: '#ab55a4',
    healthWelfare: '#c6151d',
    education: '#ec8f1d',
    trade: '#a18157',
    immigration: '#6d6f70'
};

export const TABS = [
    { id: 'setup-guide', name: 'Mise en Place', icon: 'Package' },
    { id: 'setup', name: 'Config', icon: 'Users' },
    { id: 'phase', name: 'Phases', icon: 'Play' },
    { id: 'board', name: 'Plateau', icon: 'Map' },
    { id: 'taxes', name: 'Impôts', icon: 'Calculator' },
    { id: 'legitimacy', name: 'Légitimité', icon: 'TrendingUp' },
    { id: 'resources', name: 'Ressources', icon: 'Wallet' },
    { id: 'fmi', name: 'FMI', icon: 'AlertCircle' },
    { id: 'rules', name: 'Règles', icon: 'BookOpen' },
    { id: 'material', name: 'Matériel', icon: 'Box' },
    { id: 'gallery', name: 'Galerie', icon: 'Image' },
    { id: 'credits', name: 'Crédits', icon: 'Info' }
];

export const CLASS_ACTIONS = {
    working: {
        name: 'Classe Ouvrière',
        color: 'red',
        base: [
            { name: 'Proposer un Projet de Loi', desc: 'Placez votre pion sur une section adjacente. Option: 1 Influence pour Vote Immédiat.' },
            { name: 'Assigner des Travailleurs', desc: 'Assignez jusqu\'à 3 Travailleurs à des Entreprises et/ou Syndicats.' },
            { name: 'Acheter Biens/Services', desc: 'Choisissez 1 ressource, achetez auprès de 2 fournisseurs max. Limite: Population par fournisseur.' },
            { name: 'Grève', desc: 'Placez jusqu\'à 2 jetons Grève sur Entreprises (Travailleurs non sous contrat, Salaire N1-N2).' },
            { name: 'Manifestation', desc: 'Si ≥2 Travailleurs Inactifs de plus que postes disponibles: placez jeton Manifestation.' },
            { name: 'Exercer Pression Politique', desc: 'Ajoutez 3 cubes Vote dans le sac.' }
        ],
        bonus: [
            { name: 'Services de Santé', desc: 'Dépensez Santé = Population → +1 Prospérité, +2 PV, +1 Travailleur gris' },
            { name: 'Formation/Éducation', desc: 'Dépensez Éducation = Population → +1 Prospérité, améliorez 1 Travailleur' },
            { name: 'Utiliser le Luxe', desc: 'Dépensez Luxe = Population → +1 Prospérité' },
            { name: 'Muter des Travailleurs', desc: 'Échangez Travailleurs qualifiés (postes non qualifiés) avec Inactifs' },
            { name: 'Percevoir Allocations', desc: '(4j) Prenez ressources de la zone Allocations État' },
            { name: 'Rembourser Emprunt', desc: 'Payez 50Ꝟ, défaussez 1 Emprunt' }
        ]
    },
    middle: {
        name: 'Classe Moyenne',
        color: 'yellow',
        base: [
            { name: 'Proposer un Projet de Loi', desc: 'Placez votre pion sur section adjacente. Option: 1 Influence pour Vote Immédiat.' },
            { name: 'Assigner des Travailleurs', desc: 'Assignez jusqu\'à 3 de vos Travailleurs à des Entreprises.' },
            { name: 'Construire une Entreprise', desc: 'Choisissez du marché, payez coût, créez avec Travailleurs Classe Moyenne. Option: assigner 1 Classe Ouvrière.' },
            { name: 'Vendre une Entreprise', desc: 'Défaussez Entreprise, recevez argent = coût. Travailleurs → Inactifs.' },
            { name: 'Vendre Marché Étranger', desc: 'Vendez selon carte Export. +1 PV par transaction.' },
            { name: 'Acheter Biens/Services', desc: 'Choisissez 1 ressource + 2 fournisseurs. Limite: Population par fournisseur.' },
            { name: 'Heures Supplémentaires', desc: 'Choisissez Entreprise sans Travailleurs sous contrat → produit. Mettez sous contrat, payez Salaire si Classe Ouvrière.' },
            { name: 'Exercer Pression Politique', desc: 'Ajoutez 3 cubes Vote dans le sac.' }
        ],
        bonus: [
            { name: 'Services de Santé', desc: 'Dépensez Santé = Population → +1 Prospérité, +2 PV, +1 Travailleur gris' },
            { name: 'Formation/Éducation', desc: 'Dépensez Éducation = Population → +1 Prospérité, améliorez 1 Travailleur' },
            { name: 'Utiliser le Luxe', desc: 'Dépensez Luxe = Population → +1 Prospérité' },
            { name: 'Ajuster les Prix', desc: 'Modifiez prix de vente sur votre plateau' },
            { name: 'Ajuster les Salaires', desc: 'Modifiez Salaires. Si ↑: mettez Travailleurs sous contrat' },
            { name: 'Muter des Travailleurs', desc: 'Échangez Travailleurs qualifiés avec Inactifs' },
            { name: 'Percevoir Allocations', desc: '(4j) Prenez ressources zone Allocations État' },
            { name: 'Rembourser Emprunt', desc: 'Payez 50Ꝟ, défaussez 1 Emprunt' }
        ]
    },
    capitalist: {
        name: 'Classe Capitaliste',
        color: 'blue',
        base: [
            { name: 'Proposer un Projet de Loi', desc: 'Placez sur section adjacente. Option: Vote Immédiat.' },
            { name: 'Achats Biens/Services', desc: 'Choisissez 1 ressource. Limite: Entreprises par fournisseur.' },
            { name: 'Investir dans Entreprise', desc: 'Choisissez et achetez. Assignez Travailleurs.' },
            { name: 'Vendre Entreprise', desc: 'Défaussez, recevez argent = coût.' },
            { name: 'Exportations', desc: 'Vendez selon Accords Commerciaux.' },
            { name: 'Privatisations', desc: 'Achetez Services Publics État.' },
            { name: 'Lobbying', desc: 'Dépensez 10Ꝟ → +2 Influence.' },
            { name: 'Exercer Pression Politique', desc: '+3 cubes dans le sac.' }
        ],
        bonus: [
            { name: 'Services de Santé', desc: 'Dépensez = Entreprises → +2 PV' },
            { name: 'Formation/Éducation', desc: 'Améliorez Travailleur' },
            { name: 'Utiliser le Luxe', desc: 'Dépensez = Entreprises → +2 PV' },
            { name: 'Ajuster Prix', desc: 'Modifiez prix de vente' },
            { name: 'Ajuster Salaires', desc: 'Modifiez. Si ↑: contrats' },
            { name: 'Rembourser Emprunt', desc: '50Ꝟ → défausser' }
        ]
    },
    state: {
        name: 'État',
        color: 'gray',
        base: [
            { name: 'Proposer un Projet de Loi', desc: 'Section adjacente. Option: Vote.' },
            { name: 'Acheter Services Publics', desc: 'Payez coût Santé/Éducation.' },
            { name: 'Vendre Services Publics', desc: 'Privatisation.' },
            { name: 'Ajuster Prix Services', desc: 'Changez prix.' },
            { name: 'Vote', desc: 'Vote Immédiat gratuit.' },
            { name: 'Emprunter', desc: 'Prenez 100Ꝟ + Emprunt.' }
        ],
        bonus: [
            { name: 'Acheter Influence', desc: '10Ꝟ → +1 Influence' },
            { name: 'Rembourser Emprunt', desc: '50Ꝟ → défausser' }
        ]
    }
};

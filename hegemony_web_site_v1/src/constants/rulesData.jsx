import React from 'react';
import ClassReference from '../components/atoms/ClassReference';

export const RULES_DATA = {
    capitalist: {
        overview: {
            title: "Vue d'Ensemble",
            content: (
                <>
                    Votre but en tant que <ClassReference type="capitalist" size="h-5 w-5" /> est de <strong>maximiser vos bénéfices</strong>. Construisez des Entreprises et signez des accords commerciaux pour produire des biens et des services que vous pourrez ensuite vendre à profit. Efforcez-vous d'augmenter vos bénéfices en minimisant vos dépenses.
                </>
            ),
            extra: (
                <div className="mt-4 p-3 bg-blue-900/30 rounded-lg">
                    <strong className="text-blue-300">Argent séparé :</strong>
                    <ul className="text-sm text-slate-300 mt-2 space-y-1">
                        <li>• <strong>Chiffre d'Affaires</strong> : Argent que vous gagnez (impôts, production, ventes)</li>
                        <li>• <strong>Capital</strong> : Argent qui vous possédez et qui a déjà été soumis aux impôts</li>
                    </ul>
                </div>
            )
        },
        preparation: [
            { name: "Payer les Intérêts de ses Emprunts", description: "5Ꝟ d'intérêts par Emprunt" },
            { name: "Piocher des Cartes Action", description: "Piochez 5 cartes (7 en main max)" },
            { name: "Dévoiler de Nouvelles Entreprises", description: "Défaussez et piochez jusqu'à en avoir 4" },
            { name: "Piocher des Cartes Accord Commercial et Export", description: "Selon Politique 6 (Commerce Extérieur)" }
        ],
        action_base: [
            { name: "Proposer un Projet de Loi", description: "Placer un pion sur une Politique (adjacente uniquement)" },
            { name: "Construire une Entreprise", description: "Payer le prix, assigner Travailleurs, max 12 Entreprises" },
            { name: "Vendre sur le Marché Étranger", description: "Selon carte Export (max 1 transaction par bien/service par action)" },
            { name: "Vendre une Entreprise", description: "Défaussez une Entreprise, récupérez argent = coût" },
            { name: "Conclure un Accord Commercial", description: "Acheter Nourriture/Luxe sur Marché Étranger à prix réduit" },
            { name: "Lobbying", description: "Dépensez 30Ꝟ du Capital pour gagner 3 Influence" },
            { name: "Exercer une Pression Politique", description: "Ajoutez 3 cubes Vote au sac" }
        ],
        action_bonus: [
            { name: "Ajuster les Prix", description: "Changer prix de vente (marqueurs sur Plateau Joueur)" },
            { name: "Ajuster les Salaires", description: "Changer Salaires dans Entreprises (déplacer marqueur sur Niveau de Salaire)" },
            { name: "Accorder une Prime", description: "Prime financière aux employés (Travailleurs sous contrat)" },
            { name: "Acheter un Entrepôt", description: "20Ꝟ pour 1 tuile Entrepôt" },
            { name: "Percevoir des Allocations (4j)", description: "Récupérer allocations de l'État (cubes Vote)" },
            { name: "Rembourser un Emprunt", description: "50Ꝟ depuis Capital" }
        ],
        production: [
            { name: "Production de Biens et Services", description: "Entreprises produisent ressources, payez Salaires" },
            { name: "Répondre aux Besoins", description: "Joueurs peuvent acheter (transactions puis toujours placé dans CA)" },
            { name: "Payer ses Impôts", description: "2 impôts : Charges Patronales + Impôt sur les Sociétés" }
        ],
        production_extra: (
            <div className="mt-3 p-3 bg-blue-900/30 rounded-lg text-sm">
                <strong className="text-blue-300">Charges Patronales :</strong>
                <p className="text-slate-300 mt-1">Dépend du nombre d'Entreprises opérationnelles et Multiplicateur Fiscal</p>
                <strong className="text-blue-300 mt-2 block">Impôt sur les Sociétés :</strong>
                <p className="text-slate-300 mt-1">Basé sur les profits (selon Politique d'Imposition) - Voir tableau</p>
            </div>
        ),
        scoring: {
            content: (
                <>
                    <p className="text-slate-300">
                        Transférez l'<strong>argent du Chiffre d'Affaires</strong> dans votre <strong>Capital</strong>. Comptez ensuite l'argent de votre Capital et gagnez le <strong>nombre de PV selon le montant</strong> en vous référant au tableau de Richesse.
                    </p>
                    <p className="text-sm text-slate-400 mt-2 italic">
                        Marquez 3 PV pour chaque case dans laquelle il entre.
                    </p>
                    <div className="mt-3 p-3 bg-blue-900/30 rounded-lg text-sm">
                        <strong className="text-blue-300">Exemple :</strong>
                        <p className="text-slate-300">Mike possède 166Ꝟ dans son Capital. Selon le tableau de Richesse, ce montant correspond à 7 PV. Il avance son pion de 4 cases et marque donc 12 PV supplémentaires (4 × 3 PV). Au total, il remporte 19 PV au cours de cette manche.</p>
                    </div>
                </>
            )
        },
        end_game: [
            { name: "Politiques Néolibérales", description: "Vérifiez Politiques 1-5, gagnez PV selon nombre de Politiques en section C" },
            { name: "Entrepôts", description: "Gagnez 1 PV tous les 2🌾 / 3📱 / 3❤️ / 3🎓 / 3💬 dans vos Entrepôts" },
            { name: "Emprunts", description: "Perdez 5 PV par Emprunt non remboursé" }
        ]
    },
    middle: {
        overview: {
            title: "Vue d'Ensemble",
            content: (
                <>
                    En tant que <ClassReference type="middle" size="h-5 w-5" />, votre but est d'<strong>augmenter la Prospérité de votre Population</strong> en couvrant ses besoins primaires (Nourriture, Santé, Éducation et Divertissement), tout en dirigeant vos Entreprises avec succès. Pour cela, vous devrez trouver le juste équilibre entre production, vente et consommation.
                </>
            ),
            extra: (
                <div className="mt-4 p-3 bg-yellow-900/30 rounded-lg">
                    <strong className="text-yellow-300">Suivi Démographique :</strong>
                    <p className="text-sm text-slate-300 mt-1">
                        Le marqueur doit toujours correspondre au nombre réel de Travailleurs que vous possédez. Ajustez-le en conséquence.
                    </p>
                </div>
            )
        },
        preparation: [
            { name: "Payer les Intérêts de ses Emprunts", description: "5Ꝟ d'intérêts par Emprunt" },
            { name: "Réduire sa Prospérité", description: "Prospérité -2 cases" },
            { name: "Piocher des Cartes Action", description: "Piochez 5 cartes (7 en main max)" },
            { name: "Dévoiler de Nouvelles Entreprises", description: "Défaussez et piochez jusqu'à en avoir 3" },
            { name: "Obtenir de Nouveaux Travailleurs et Ajuster sa Population", description: "Ajoutez Travailleurs Inactifs selon Politique d'Immigration (Politique 7)" }
        ],
        action_base: [
            { name: "Proposer un Projet de Loi", description: "Placer un pion sur une Politique (adjacente uniquement)" },
            { name: "Assigner des Travailleurs", description: "Assignez jusqu'à 3 Travailleurs sur Entreprises disponibles" },
            { name: "Vendre une Entreprise", description: "Défaussez une Entreprise, récupérez argent = coût" },
            { name: "Vendre sur le Marché Étranger", description: "Gagnez 1 PV par transaction réalisée" },
            { name: "Acheter des Biens et des Services", description: "1 seul bien/service max, auprès de 2 fournisseurs max" },
            { name: "Construire une Entreprise", description: "Payer le prix, assigner Travailleurs, max 8 Entreprises" },
            { name: "Exercer une Pression Politique", description: "Ajoutez 3 cubes Vote au sac" }
        ],
        action_bonus: [
            { name: "Recourir aux Services de Santé", description: "Distribuez jetons Santé, gagnez +1 Prospérité + 2 PV + Travailleur non qualifié gris" },
            { name: "Formation et Éducation", description: "Dépensez jetons Éducation, gagnez +1 Prospérité + améliorez 1 Travailleur qualifié" },
            { name: "Utiliser le Luxe", description: "Dépensez jetons Luxe, gagnez +1 Prospérité" },
            { name: "Ajuster les Prix", description: "Changer prix de vente sur Plateau Joueur" },
            { name: "Ajuster les Salaires", description: "Changer Salaires dans Entreprises" },
            { name: "Muter des Travailleurs", description: "Réorganiser Travailleurs (1 Travailleur blanc peut prendre place d'un gris)" },
            { name: "Percevoir des Allocations (4j)", description: "Récupérer allocations de l'État" },
            { name: "Rembourser un Emprunt", description: "50Ꝟ depuis trésorerie" }
        ],
        production: [
            { name: "Production de Biens et Services", description: "Entreprises avec Travailleurs produisent, payez Salaires (dont Classe Ouvrière assignée)" },
            { name: "Répondre aux Besoins", description: "Fournir Nourriture (obligatoire) = Population actuelle. Sinon acheter ou Emprunt" },
            { name: "Payer ses Impôts", description: "2 impôts : Impôt sur le Revenu + Charges Patronales" }
        ],
        production_extra: (
            <div className="mt-3 p-3 bg-yellow-900/30 rounded-lg text-sm">
                <strong className="text-yellow-300">Impôt sur le Revenu :</strong>
                <p className="text-slate-300 mt-1">Dépend des Politiques 2 et 3. Vous devez payer le montant calculé × nombre d'Entreprises.</p>
                <strong className="text-yellow-300 mt-2 block">Charges Patronales :</strong>
                <p className="text-slate-300 mt-1">Dépend du nombre d'Entreprises opérationnelles et Multiplicateur Fiscal.</p>
            </div>
        ),
        scoring: {
            content: (
                <>
                    <p className="text-slate-300">
                        Durant cette phase, vous pouvez encore améliorer votre Prospérité. Si sa valeur est inférieure à votre nombre d'<strong>Entreprises totalement opérationnelles</strong>, vous gagnez +1 point de Prospérité.
                    </p>
                    <div className="mt-3 p-3 bg-yellow-900/30 rounded-lg text-sm">
                        <strong className="text-yellow-300">Entreprise totalement opérationnelle :</strong>
                        <p className="text-slate-300 mt-1">2 Travailleurs Classe Moyenne OU 3 Travailleurs (Classe Moyenne + Ouvrière assignée)</p>
                    </div>
                </>
            )
        },
        end_game: [
            { name: "Politiques (Section B)", description: "Vérifiez Politiques 1-5, gagnez PV selon nombre en section B" },
            { name: "Entrepôts", description: "Gagnez 1 PV tous les 2🌾 / 3📱 / 3❤️ / 3🎓 / 3💬" },
            { name: "Par Tranche de 15Ꝟ", description: "Gagnez 1 PV pour chaque tranche de 15Ꝟ sur votre Plateau Joueur" }
        ]
    },
    working: {
        overview: {
            title: "Vue d'Ensemble",
            content: (
                <>
                    En tant que joueur de la <ClassReference type="working" size="h-5 w-5" />, vous devez améliorer la <strong>Prospérité de votre Population</strong>. Pour cela, assignez des Travailleurs dans les Entreprises, ils percevront ainsi des Salaires. Dépensez ensuite cet argent pour acheter des ressources, c'est-à-dire la Nourriture, la Santé, l'Éducation et, si possible, le Divertissement.
                </>
            ),
            extra: (
                <div className="mt-4 p-3 bg-red-900/30 rounded-lg">
                    <strong className="text-red-300">Important :</strong>
                    <p className="text-sm text-slate-300 mt-1">
                        Les Travailleurs de votre Classe uniquement, sauf indication contraire. Ajustez le marqueur du Suivi Démographique en conséquence.
                    </p>
                </div>
            )
        },
        preparation: [
            { name: "Payer les Intérêts de ses Emprunts", description: "5Ꝟ d'intérêts par Emprunt" },
            { name: "Réduire sa Prospérité", description: "Prospérité -1 case" },
            { name: "Piocher des Cartes Action", description: "Piochez 5 cartes (7 en main max)" },
            { name: "Obtenir de Nouveaux Travailleurs et Ajuster sa Population", description: "Ajoutez 2 Travailleurs non qualifiés (gris) selon Politique d'Immigration" }
        ],
        action_base: [
            { name: "Proposer un Projet de Loi", description: "Placer un pion sur une Politique (adjacente uniquement)" },
            { name: "Assigner des Travailleurs", description: "Assigner jusqu'à 3 Travailleurs sur Entreprises disponibles" },
            { name: "Acheter des Biens et des Services", description: "1 seul bien/service max, auprès de 2 fournisseurs max" },
            { name: "Assigner des Travailleurs aux Syndicats", description: "Min 4 Travailleurs assignés dans un secteur disponible" },
            { name: "Grève", description: "Placer jeton Grève sur 2 Entreprises max (Salaires Niveau 3)" },
            { name: "Manifestation", description: "Si ≥2 Travailleurs Inactifs de plus que postes disponibles (peu importe qualifiés)" }
        ],
        action_bonus: [
            { name: "Recourir aux Services de Santé", description: "Distribuez jetons Santé, gagnez +1 Prospérité + 2 PV + Travailleur non qualifié gris" },
            { name: "Formation et Éducation", description: "Dépensez jetons Éducation, gagnez +1 Prospérité + améliorez 1 Travailleur qualifié" },
            { name: "Utiliser le Luxe", description: "Dépensez jetons Luxe, gagnez +1 Prospérité" },
            { name: "Muter des Travailleurs", description: "Réorganiser Travailleurs (1 Travailleur blanc peut prendre place d'un gris)" },
            { name: "Percevoir des Allocations (4j)", description: "Récupérer allocations de l'État" },
            { name: "Rembourser un Emprunt", description: "50Ꝟ depuis trésorerie" }
        ],
        production: [
            { name: "Production de Biens et Services", description: "Fermes Coopératives produisent 2 jetons Nourriture chacune" },
            { name: "Syndicats", description: "Syndicats gagnent 1 jeton Influence chacun" },
            { name: "Répondre aux Besoins", description: "Fournir Nourriture (obligatoire) = Population actuelle. Sinon acheter ou Emprunt" },
            { name: "Payer ses Impôts", description: "Uniquement Impôt sur le Revenu (par Population)" }
        ],
        production_extra: (
            <div className="mt-3 p-3 bg-red-900/30 rounded-lg text-sm">
                <strong className="text-red-300">Impôt sur le Revenu :</strong>
                <p className="text-slate-300 mt-1">Dépend du Marché du Travail et Politique d'Imposition (Politiques 2 et 3). Le montant doit être payé par Population.</p>
            </div>
        ),
        scoring: {
            content: (
                <p className="text-slate-300">
                    Lors de cette phase, vous gagnez des PV selon votre <strong>nombre de Syndicats</strong>. Chaque Syndicat vous rapporte <strong>2 PV</strong>.
                </p>
            )
        },
        end_game: [
            { name: "Politiques Socialistes", description: "Vérifiez Politiques 1-5, gagnez PV selon nombre de Politiques en section A" },
            { name: "Par Tranche de 10Ꝟ", description: "Gagnez 1 PV par tranche de 10Ꝟ sur votre Plateau Joueur (15 PV max)" }
        ]
    },
    state: {
        overview: {
            title: "Vue d'Ensemble (4 joueurs uniquement)",
            content: (
                <>
                    En tant qu'<ClassReference type="state" size="h-5 w-5" />, votre but est de <strong>satisfaire les 3 Classes</strong> en répondant à leurs besoins, ce qui améliorera votre Légitimité. Vous devez également gérer les problèmes majeurs auxquels vous êtes confronté, tout en maintenant une certaine harmonie entre les autres joueurs.
                </>
            ),
            extra: (
                <div className="mt-4 p-3 bg-slate-800 rounded-lg">
                    <strong className="text-slate-300">Suivi de Légitimité :</strong>
                    <p className="text-sm text-slate-400 mt-1">
                        Les 3 suivis de Légitimité sont sur la Légitimité de votre Plateau Joueur, chacun correspond à une Classe. Vos PV = somme des 2 scores de Légitimité les plus faibles (pas la plus haute !).
                    </p>
                </div>
            )
        },
        preparation: [
            { name: "Payer les Intérêts de ses Emprunts", description: "5Ꝟ d'intérêts par Emprunt" },
            { name: "Révéler de Nouvelles Cartes Événement", description: "Piochez 2 cartes Événement et placez-les face visible" },
            { name: "Révéler le Nouvel Agenda Politique", description: "Piochez la première carte du paquet Agenda Politique" },
            { name: "Piocher des Cartes Action", description: "Piochez 5 cartes (7 en main max)" }
        ],
        action_base: [
            { name: "Proposer un Projet de Loi", description: "Placer un pion sur une Politique (adjacente uniquement)" },
            { name: "Action Événement", description: "Occuper d'une carte Événement, effectuer la tâche indiquée" },
            { name: "Vendre sur le Marché Étranger", description: "Vendre de biens (Nourriture ou Luxe) uniquement" },
            { name: "Rencontrer le Député d'un Parti", description: "Donnez 2 jetons Influence Personnelle à un joueur" },
            { name: "Taxe d'Urgence", description: "Récoltez 10Ꝟ par joueur. Perdez 1 point de Légitimité auprès des 2 Classes dont Légitimité est la plus faible" },
            { name: "Faire Campagne", description: "Convertissez jusqu'à 3 jetons Influence Médiatique en Influence Personnelle" }
        ],
        action_bonus: [
            { name: "Ajuster les Salaires", description: "Changer Salaires dans Entreprises Publiques" },
            { name: "Rembourser un Emprunt", description: "50Ꝟ depuis Capital" }
        ],
        production: [
            { name: "Production de Biens et Services", description: "Entreprises Publiques produisent ressources, payez Salaires" },
            { name: "Répondre aux Besoins", description: "Joueurs peuvent acheter Nourriture" },
            { name: "Payer ses Impôts", description: "Tous les autres joueurs vous versent leurs impôts. Placez cet argent dans le Trésor Public et non dans la Réserve" }
        ],
        elections: [
            { name: "Remplir le Sac", description: "Influence Personnelle = Légitimité la plus faible sur votre Plateau Joueur" },
            { name: "Organiser les Elections", description: "Puisque vous n'avez pas de cube Vote, vous ne pouvez agir sur l'issue d'une élection qu'en dépensant des jetons Influence Personnelle" }
        ],
        scoring: {
            content: (
                <div className="mt-3 p-3 bg-slate-800 rounded-lg text-sm">
                    <strong className="text-slate-300">Important :</strong>
                    <p className="text-slate-400 mt-1">Vos PV sont calculés selon les 2 pistes de Légitimité les plus faibles, PAS la plus haute !</p>
                </div>
            ),
            actions: [
                { name: "Subir les Pénalités d'Événements", description: "Événements non gérés = baisse Légitimité (colonne INACTION)" },
                { name: "Calculer les Suivis de la Légitimité", description: "Gagnez PV = somme des 2 scores de Légitimité les plus faibles" },
                { name: "Agenda Politique et Points", description: "Vérifiez carte Agenda à côté du Plateau Joueur. Pour chaque Politique, gagnez 1 PV" }
            ]
        },
        end_game: [
            { name: "Entrepôts", description: "Gagnez 1 PV tous les 2🌾 / 3📱 / 3❤️ / 3🎓 / 3💬 MÉDIATIQUES dans vos Entrepôts" },
            { name: "Trésor Public", description: "Gagnez 1 PV par tranche de 30Ꝟ dans le Trésor Public" }
        ]
    }
};

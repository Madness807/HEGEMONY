import React, { useState } from 'react';
import { HelpCircle, BookOpen, Layers, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-2 flex items-start justify-between gap-4 text-left hover:bg-white/5 transition-colors rounded-lg"
            >
                <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="font-bold text-slate-200 text-lg">{question}</span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
            </button>
            {isOpen && (
                <div className="px-10 pb-6 pt-2 animate-fade-in">
                    <p className="text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-white/5">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
};

const FAQSection = ({ title, icon: Icon, items }) => (
    <Card className="glass-effect mb-8">
        <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
            </div>
        </CardContent>
    </Card>
);

const FAQTab = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const rulesFAQ = [
        {
            question: "Les Travailleurs d'une Entreprise en Grève peuvent-ils être assignés ailleurs par la Classe Ouvrière ?",
            answer: "Tant qu'ils ne sont pas sous contrat, la Classe Ouvrière peut les réassigner où elle souhaite."
        },
        {
            question: "Une Entreprise en Grève peut-elle être vendue ?",
            answer: "Oui, tant que les Travailleurs qui s'y trouvent ne sont pas sous contrat."
        },
        {
            question: "Lorsque une Grève est résolue, que se passe-t-il s'il n'y a plus de Travailleurs dans une Entreprise avec un jeton de Grève ?",
            answer: "Puisque l'Entreprise n'est plus opérationnelle, il ne se passe rien et le jeton de grève est simplement retiré. Notez que la Classe Ouvrière ne gagne pas d'Influence grâce à ce jeton."
        },
        {
            question: "Si une Entreprise de la Classe Moyenne qui a un poste pour un Travailleur de la Classe Ouvrière n'a plus de Travailleur de la Classe Moyenne parce qu'il a été assigné ailleurs, faut-il prendre ce poste en compte pour faire une Manifestation ?",
            answer: "Non. Comme le Travailleur de la Classe Ouvrière ne peut être assigné à ce poste sans qu'un Travailleur de la Classe Moyenne ne dirige l'Entreprise, ce poste ne doit pas être pris en considération."
        },
        {
            question: "Si des Entreprises Publiques sont vendues suite à l'intervention du FMI, où vont les ressources excédentaires à la (nouvelle) limite de stockage ?",
            answer: "Ces ressources sont immédiatement défaussées puisqu'elles ne peuvent plus être entreposées."
        },
        {
            question: "Si, lors d'une intervention du FMI, une Entreprise Publique avec des Travailleurs de la Classe Moyenne doit fermer, la Classe Moyenne en tient-elle compte lorsqu'elle paie ses Impôts ?",
            answer: "L'Entreprise n'est plus sur le plateau et aucun Travailleur de la Classe Moyenne n'y est assigné au moment de Payer ses Impôts, la Classe Moyenne ne paie donc pas d'Impôts pour elle."
        },
        {
            question: "Que se passe-t-il si la Classe Moyenne ou la Classe Ouvrière gagne des points de Prospérité mais que celle-ci est déjà au maximum ?",
            answer: "Le pion Prospérité n'est pas déplacé et le joueur gagne autant de PV qu'il a de points de Prospérité."
        },
        {
            question: "Si la Classe Capitaliste construit une Entreprise qui requiert uniquement des Travailleurs non qualifiés, mais que des Travailleurs non qualifiés de la Classe Ouvrière et des Travailleurs qualifiés de la Classe Moyenne sont disponibles, peut-elle choisir d'assigner ceux de la Classe Moyenne ?",
            answer: "Oui. Puisque des Travailleurs des deux Classes sont disponibles, la Classe Capitaliste choisit la Classe qu'elle souhaite employer. Elle choisit ensuite les Travailleurs qu'elle souhaite, en priorisant les Travailleurs non qualifiés."
        },
        {
            question: "En assignant des Travailleurs, si j'en déplace un d'une Entreprise pour l'assigner ailleurs, et que j'en assigne un autre à sa place au cours de la même action, ce nouveau Travailleur est-il sous contrat ?",
            answer: "Une Entreprise (autre que celles de la Classe Moyenne) ne peut pas avoir à la fois des Travailleurs sous contrat et d'autres qui ne le sont pas. Si cette situation devait arriver, tous les Travailleurs perdraient leur contrat. Ainsi, on procède comme pour l'action Muter des Travailleurs."
        },
        {
            question: "Puis-je effectuer l'action Assigner des Travailleurs pour simplement mettre sous contrat mes Travailleurs déjà assignés à une Entreprise ?",
            answer: "Non. Ils doivent être assignés à une nouvelle Entreprise pour être sous contrat."
        },
        {
            question: "Si, dans une partie à 4 joueurs, des Entreprises Publiques doivent être vendues suite à un changement de Politique Fiscale, l'État peut-il vendre une Entreprise avec des Travailleurs sous contrat ?",
            answer: "Oui, comme dans une partie à 2 ou 3 joueurs, lorsqu'une rangée entière d'Entreprises est vendue. Il s'agit du seul cas où une Entreprise avec des Travailleurs sous contrat peut être vendue."
        },
        {
            question: "Dans une Entreprise opérationnelle de la Classe Moyenne, si le Travailleur de la Classe Ouvrière est sous contrat et que le Travailleur de la Classe Moyenne ne l'est pas, la Classe Moyenne peut-elle déplacer son Travailleur ailleurs ?",
            answer: "Non. Cela reviendrait à rendre l'Entreprise non opérationnelle, ce qui rendrait Inactif le Travailleur de la Classe Ouvrière et comme il est sous contrat, c'est impossible."
        },
        {
            question: "Si les Salaires sont augmentés grâce à un changement de Politique, les Travailleurs sont-ils mis sous contrat ?",
            answer: "Non, les Travailleurs ne peuvent être mis sous contrat que si cette augmentation est due à une Action Bonus effectuée par un autre joueur."
        },
        {
            question: "L'État peut-il prélever une Taxe d'Urgence si son score de Légitimité est déjà de 1 ?",
            answer: "Non, il doit pouvoir perdre de la Légitimité pour être en mesure d'effectuer l'action Taxe d'Urgence."
        }
    ];

    const cardsFAQ = [
        {
            question: "Carte Action : Lorsqu'une carte demande à un joueur d'assigner des Travailleurs, sont-ils mis sous contrat ?",
            answer: "Oui. Quand une carte indique à un joueur d'effectuer une Action, et sauf contre-indication, il doit appliquer les règles habituelles relatives à cette Action."
        },
        {
            question: "Sujet Prioritaire : Que devient la carte qui n'est pas choisie ? Est-elle défaussée ?",
            answer: "L'autre carte est remise sur le dessus du paquet Événements."
        },
        {
            question: "Sujet Prioritaire : Dois-je effectuer l'Action Événement que je viens de placer sur le plateau ?",
            answer: "Non. S'il y a 2 Événements sur le plateau, vous pouvez effectuer l'Action Événement de votre choix."
        },
        {
            question: "Sujet Prioritaire : Si je joue cette carte au premier tour, que se passe-t-il si l'un des deux premiers événements concerne les tours 2 à 5 ?",
            answer: "Remettez-le dans la pile et tirez un nouvel Événement à sa place."
        },
        {
            question: "Offre Truquée : Puis-je vendre plus de biens de Luxe que ce que l'État peut stocker ?",
            answer: "Vous ne pouvez pas vendre à l'État plus de ressources que ce qu'il peut stocker, mais, s'il peut les stocker, vous pouvez lui vendre plus que ce qu'il peut payer. L'État doit alors faire un Emprunt."
        },
        {
            question: "Offre Truquée : Dans une partie à 2 joueurs, où vont les biens de Luxe vendus par la Classe Capitaliste ?",
            answer: "Elles retournent dans la Réserve."
        },
        {
            question: "Ferme Coopérative : Si je construis une Ferme Coopérative, les Travailleurs assignés pourront-ils être assignés dans une autre Entreprise ?",
            answer: "Durant le tour où la Ferme Coopérative est construite, les Travailleurs qui y sont assignés sont sous contrat. Les Travailleurs sous contrat ne peuvent pas être assignés ailleurs. Lors des tours suivants, vous pouvez assigner ces Travailleurs ailleurs comme vous pouvez le faire avec tous vos Travailleurs. Si vous le faites, la Ferme Coopérative reste à côté de votre plateau et vous pourrez plus tard y affecter à nouveau des Travailleurs si vous le souhaitez."
        },
        {
            question: "Ferme Coopérative : Les Travailleurs qui y sont assignés font-ils partie des 4 qui sont requis pour avoir un Syndicat dans le secteur Agricole ?",
            answer: "Oui."
        },
        {
            question: "Déni de la Liberté d'Expression : Puis-je jouer cette carte si mon score de Légitimité est de 1 ?",
            answer: "Non, il faut pouvoir perdre de la Légitimité pour être en mesure de jouer cette carte."
        },
        {
            question: "État d'Urgence : Si je joue cette carte pour changer de Politique, est-ce que je gagne des PV ?",
            answer: "Non. Les PV ne sont attribués que si une Politique est modifiée à la suite d'une élection."
        },
        {
            question: "Heures Supplémentaires : Puis-je jouer cette carte si je n'ai pas assez d'argent pour payer les salaires ?",
            answer: "Non. Pouvoir payer les Salaires est une condition pour que l'effet de la carte soit appliqué. Il est impossible d'effectuer des actions qui sont optionnelles si vous ne pouvez pas assumer leur coût ou remplir leurs conditions."
        },
        {
            question: "Prestations de Santé : La réduction concerne-t-elle chaque jeton Santé acheté ou le total ?",
            answer: "La réduction est appliquée au total. Si le prix de la Santé est de 5 et que vous souhaitez acheter 5 jetons Santé, vous devrez payer 13 (la moitié de 25, arrondi à l'unité supérieure)."
        },
        {
            question: "Prestations de Santé : Si Aides Sociales : Santé et Allocations est dans la section B, l'État gagne-t-il quand même 1 PV grâce aux Aides Sociales ?",
            answer: "Oui, l'État gagne 1 PV quel que soit son coût final, parce que le prix initial de la Santé était de 5. La Légitimité inscrite sur la carte est également fournie normalement."
        },
        {
            question: "Crise Sanitaire / Programme d'Enseignement Supérieur : Puis-je vendre plus de Santé/Éducation que ce que l'État peut stocker ?",
            answer: "Vous ne pouvez pas vendre à l'État plus de ressources que ce qu'il peut stocker. Mais, s'il peut les stocker, vous pouvez lui vendre plus que ce qu'il peut payer, ce qui l'obligera à faire un emprunt."
        },
        {
            question: "Hausse de la TVA : Puis-je jouer cette carte si mon score de Légitimité est de 1 ?",
            answer: "Non, il faut pouvoir perdre de la Légitimité pour être en mesure de jouer cette carte."
        },
        {
            question: "Réaction Immédiate : Si j'exécute deux fois une Action Événement qui fournit des biens à une Classe, les ressources du premier Événement sont-ils supprimés ?",
            answer: "Non. Comme les deux Actions Événement sont effectuées au cours du même tour, leurs ressources sont placées dans la zone des Allocations de l'État en même temps."
        },
        {
            question: "Déréglementation du Marché du Travail : Cette carte permet-elle de réassigner des Travailleurs sous contrat ?",
            answer: "Non."
        },
        {
            question: "Déréglementation du Marché du Travail : Si je joue cette carte, que je retire tous mes Travailleurs d'une Entreprise et que j'en assigne de nouveaux, le tout dans la même action, les nouveaux Travailleurs sont-ils sous contrat ?",
            answer: "Non. L'Entreprise était déjà opérationnelle avec des Travailleurs qui n'étaient pas sous contrat et elle continue à l'être, c'est comme si les Travailleurs avaient été mutés."
        },
        {
            question: "Émigration : Si je joue cette carte au premier tour et que je me retrouve avec moins de 10 Travailleurs, qu'advient-il de ma Population ?",
            answer: "La Population reste à 3."
        },
        {
            question: "Le Changement, c'est Maintenant ! / Faire Pression sur l'Agenda Politique : Puis-je dépenser de l'Influence pour un Vote Immédiat sur ces Projets de Loi ?",
            answer: "Chaque Projet de Loi est proposé indépendamment. Vous pouvez dépenser 1 Influence pour demander un Vote Immédiat, mais pour le demander sur les deux Projets de Loi, vous devrez dépenser 2 Influence. Si vous proposez le premier Projet de Loi et demandez un Vote Immédiat, vous pouvez attendre la fin de la Phase d'Élection pour choisir l'autre Projet de Loi."
        },
        {
            question: "Privatisation : Que se passera-t-il si la Politique Fiscale change à nouveau par la suite ? Combien d'Entreprises aurai-je au final ?",
            answer: "Lorsque la Politique Fiscale change, vous devez terminer avec le nombre d'Entreprises indiqué dans la nouvelle section. (Détails complexes : voir carte pour exemples spécifiques sur les sections C, B, A)."
        },
        {
            question: "Privatisation : Cette carte peut-elle être utilisée pour vendre une Entreprise avec des Travailleurs sous contrat ?",
            answer: "Oui. Même si l'Entreprise est « vendue », les Travailleurs y restent et recevront le Salaire convenu lors de leur assignation."
        },
        {
            question: "Privatisation : Si je joue cette carte et que je vends une Entreprise Publique à la Classe Capitaliste, cette dernière peut-elle la vendre plus tard ?",
            answer: "Tant qu'il n'y a pas de Travailleur sous contrat dans l'Entreprise, elle peut être vendue normalement. La carte est alors remise face cachée dans le Secteur Public."
        },
        {
            question: "Sondage d'Opinion Publique : Les autres joueurs doivent-ils dire s'ils sont pour ou contre le Projet de loi avant que je ne décide s'il y aura un Vote Immédiat ?",
            answer: "Non. Comme il n'y a pas encore de vote, les autres joueurs n'ont pas à dire s'ils sont pour ou contre la Proposition de Loi. Vous devez décider si vous souhaitez un Vote Immédiat, et ce n'est qu'à ce moment que les autres joueurs doivent se prononcer."
        },
        {
            question: "Changement d'Objectif : Que faire de la carte que je ne choisis pas ?",
            answer: "L'autre carte est remise sur le dessus de la pile Événement."
        },
        {
            question: "Changement d'Objectif : Dois-je effectuer l'Action Événement que je viens de placer sur le plateau ?",
            answer: "Non. S'il y a 2 Événements sur le plateau, vous pouvez effectuer l'Action Événement sur l'une ou l'autre."
        },
        {
            question: "Bourse d'État : La réduction concerne-t-elle chaque jeton Éducation acheté ou le total ?",
            answer: "La réduction est appliquée au total."
        },
        {
            question: "Bourse d'État : Si Aides Sociales : Éducation est dans la section B, l'État gagne-t-il quand même 1 PV ?",
            answer: "Oui, l'État gagne 1 PV quel que soit son coût final."
        },
        {
            question: "Démonstration de Force : Si je n'ai pas d'Influence Personnelle, puis-je acheter de l'Influence Médiatique auprès des Services Publics ?",
            answer: "Non. L'Influence Personnelle et l'Influence Médiatique sont différentes. Votre Action Faire Campagne convertit l'une en l'autre, elle ne « l'achète » pas."
        },
        {
            question: "Accident du Travail : D'où vient l'argent que la Classe Capitaliste verse ?",
            answer: "À chaque fois que la Classe Capitaliste dépense de l'argent, sauf indication contraire, c'est depuis le Chiffre d'Affaires. Si les fonds ne sont pas suffisants, la somme restante est prélevée sur le Capital."
        },
        {
            question: "Cartes Événement : Puis-je acheter plus de ressources que je ne peux en stocker (en les défaussant) pour gagner des PV ?",
            answer: "Non. Vos possibilités d'achat sont limitées par vos Entrepôts disponibles."
        },
        {
            question: "Désobéissance Civile : Si je propose le Projet de Loi d'un autre joueur, ce dernier peut-il refuser ?",
            answer: "Non. Vous choisissez un autre joueur et lui demandez quel Projet de Loi proposer. Ce joueur doit choisir une Politique s'il le peut. Vous proposez alors ce Projet de Loi, en utilisant votre propre marqueur. C'est aussi vous qui décidez si vous souhaitez un Vote Immédiat."
        },
        {
            question: "Industrie Naissante dans le Besoin : Qui décide de l'Entreprise à construire ?",
            answer: "Vous (l'État) décidez quelle Entreprise construire parmi celles disponibles sur les Marchés des joueurs. Ensuite, toutes les décisions sont prises par le joueur qui possède la nouvelle Entreprise (par exemple, s'il y affectera des Travailleurs et lesquels)."
        },
        {
            question: "Représentativité Inégalitaire : Si l'État n'a pas d'Influence Personnelle, peut-il acheter de l'Influence Médiatique ?",
            answer: "Non. L'Influence Personnelle et l'Influence Médiatique sont différentes. L'Action Faire Campagne de l'État convertit l'une en l'autre, elle ne « l'achète » pas."
        }
    ];

    const filteredRules = rulesFAQ.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredCards = cardsFAQ.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Rechercher dans la FAQ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
            </div>

            {/* Rules FAQ */}
            {filteredRules.length > 0 && (
                <FAQSection
                    title="F.A.Q. Règles"
                    icon={BookOpen}
                    items={filteredRules}
                />
            )}

            {/* Cards FAQ */}
            {filteredCards.length > 0 && (
                <FAQSection
                    title="F.A.Q. Cartes"
                    icon={Layers}
                    items={filteredCards}
                />
            )}

            {filteredRules.length === 0 && filteredCards.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                    Aucun résultat trouvé pour "{searchTerm}"
                </div>
            )}
        </div>
    );
};

export default FAQTab;

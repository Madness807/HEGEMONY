import os

files = {
    "01_Introduction.md": "# Introduction\n\n## Contenu\n\n## Symboles\n",
    "02_Materiel.md": "# Détails du Contenu\n\n## Cartes Entreprise\n## Cartes Action\n## Cartes Export\n## Cartes Agenda Politique\n## Cartes Immigration\n## Cartes Événement\n## Cartes Accord Commercial\n## Tuiles Entrepôt\n\n# Plateau de Jeu\n\n# Plateaux Joueur\n",
    "03_Mise_en_Place.md": "# Mise en Place\n\n## Plateau de Jeu\n## Rôles\n",
    "04_Regles_de_Base.md": "# Comment Jouer ? - Règles de Base\n\n## Phase de Préparation\n## Phase d'Action\n## Phase de Production\n## Phase d'Élections\n## Phase de Décompte des Points\n## Fin de la Partie\n",
    "05_Classe_Ouvriere.md": "# Classe Ouvrière\n\n## Vue d'ensemble\n## Phase de Préparation\n## Phase d'Action\n## Phase de Production\n## Phase de Décompte des Points\n## Fin de la Partie\n",
    "06_Classe_Capitaliste.md": "# Classe Capitaliste\n\n## Vue d'ensemble\n## Infos Générales\n## Phase de Préparation\n## Phase d'Action\n## Phase de Production\n## Phase de Décompte des Points\n## Fin de la Partie\n",
    "07_Classe_Moyenne.md": "# Classe Moyenne\n\n## Vue d'ensemble\n## Phase de Préparation\n## Phase d'Action\n## Phase de Production\n## Phase de Décompte des Points\n## Fin de la Partie\n",
    "08_L_Etat.md": "# L'État\n\n## Vue d'ensemble\n## Infos Générales\n## Phase de Préparation\n## Phase d'Action\n## Phase de Production\n## Phase d'Élections\n## Phase de Décompte des Points\n## Fin de la Partie\n",
    "09_Politiques.md": "# Tableau des Politiques\n\n## Politique Fiscale\n## Marché du Travail\n## Imposition\n## Aides Sociales : Santé et Allocations\n## Aides Sociales : Éducation\n## Commerce Extérieur\n## Immigration\n",
    "10_Autres_Regles.md": "# Exemple d'Élection\n\n# Autres Règles\n\n## Emprunts\n## Intervention du FMI\n## Matériel Limité\n## Crédits\n",
    "11_FAQ_et_Annexes.md": "# F.A.Q Règles\n\n# F.A.Q Cartes\n\n# Cartes Action\n\n# Cartes Événement\n"
}

os.makedirs("doc/rules", exist_ok=True)
for filename, content in files.items():
    with open(os.path.join("doc/rules", filename), "w") as f:
        f.write(content)

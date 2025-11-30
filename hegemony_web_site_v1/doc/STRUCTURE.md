# Architecture du Projet Hegemony

Ce document décrit la structure du projet et l'organisation du code source.

## Structure Racine

*   **`src/`** : Contient tout le code source de l'application.
*   **`public/`** : Contient les fichiers statiques (images, favicon, etc.) qui sont servis tels quels.
*   **`doc/`** : Documentation du projet.
*   **`index.html`** : Point d'entrée HTML de l'application.
*   **`vite.config.js`** : Configuration de l'outil de build Vite.
*   **`tailwind.config.js`** : Configuration du framework CSS Tailwind.
*   **`package.json`** : Liste des dépendances et scripts du projet.
*   **`jsconfig.json`** : Configuration pour l'autocomplétion et les alias (ex: `@/` pour `src/`).

## Dossier `src`

Le dossier `src` suit une architecture **Atomic Design** modifiée pour React.

### 1. `components/` (Atomic Design)

*   **`atoms/`** : Composants les plus petits et indivisibles (ex: `Button`, `Input`, `Icon`).
*   **`molecules/`** : Combinaisons d'atomes (ex: `SearchBar`, `FormField`).
*   **`organisms/`** : Sections complexes de l'interface (ex: `Header`, `Footer`, `GameBoard`).
*   **`templates/`** : Structures de mise en page (ex: `MainLayout`).
*   **`pages/`** : Composants représentant des pages entières ou des onglets majeurs (ex: `ShopPage`, `TaxCalculatorPage`).

### 2. `context/`

Contient les contextes React pour la gestion d'état global.
*   **`GameContext.jsx`** : Gère l'état global du jeu (ressources, politiques, tours).

### 3. `hooks/`

Hooks personnalisés pour la logique réutilisable.
*   **`useGameData.js`** : Centralise les données statiques du jeu et les traductions.

### 4. `locales/`

Fichiers de traduction pour l'internationalisation (i18n).
*   **`fr/`** : Traductions françaises.
*   **`en/`** : Traductions anglaises.
*   Fichiers clés : `common.json` (général), `game.json` (termes du jeu), `shop.json`, `faq.json`, `tax.json`.

### 5. `assets/`

Ressources statiques importées dans le code (images, icônes SVG).

### 6. Fichiers Racine de `src/`

*   **`main.jsx`** : Point d'entrée JavaScript. Initialise React et le router (si présent).
*   **`App.jsx`** : Composant racine de l'application.
*   **`HegemonyAssistant.jsx`** : Composant principal qui gère la logique de l'assistant de jeu.
*   **`i18n.js`** : Configuration de la librairie `i18next`.
*   **`index.css`** : Styles globaux et directives Tailwind.

## Conventions

*   **Design Tokens** : Les couleurs et styles sont définis dans `src/components/ions/design-tokens.json` et utilisés via Tailwind (ex: `bg-surface-primary`).
*   **Imports** : Utilisez l'alias `@/` pour importer depuis `src/`.
*   **Traductions** : Utilisez le hook `useTranslation` pour tout texte visible.

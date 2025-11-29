# Assets Directory Structure

## 📁 Organization

This directory contains all visual assets for the Hegemony board game assistant.

### Structure

```
public/assets/
├── cards/                      # All game cards
│   ├── actions/               # Action cards (40 per class)
│   │   ├── working/          # Working class (red)
│   │   ├── middle/           # Middle class (yellow)
│   │   ├── capitalist/       # Capitalist class (blue)
│   │   └── state/            # State (gray)
│   ├── enterprises/           # Enterprise cards
│   │   ├── middle/           # Middle class enterprises (17)
│   │   ├── capitalist/       # Capitalist enterprises (28)
│   │   ├── public/           # Public enterprises (12)
│   │   └── cooperatives/     # Cooperative farms (2)
│   ├── export/                # Export cards (16)
│   ├── immigration/           # Immigration cards (25)
│   ├── events/                # Event cards (25, 4 players only)
│   ├── agendas/               # Political agenda cards (10)
│   ├── loans/                 # Loan cards (10)
│   └── trade/                 # Commercial agreements (20)
│
├── tokens/                     # All game tokens (222 total)
│   ├── resources/             # Resource tokens
│   │   ├── food/             # Food tokens (24)
│   │   ├── luxury/           # Luxury tokens (26)
│   │   ├── health/           # Health tokens (26)
│   │   ├── education/        # Education tokens (26)
│   │   └── influence/        # Influence tokens (4)
│   ├── special/               # Special tokens
│   │   ├── gear/             # Gear/automated (6)
│   │   ├── protest/          # Protest token (1)
│   │   ├── strike/           # Strike tokens (7)
│   │   └── social-tiles/     # Social aid tiles (2)
│   └── money/                 # Currency tokens (82 total, various denominations)
│       ├── 1/
│       ├── 5/
│       ├── 10/
│       ├── 20/
│       ├── 50/
│       └── 100/
│
├── wooden-pieces/             # Wooden components (231 total)
│   ├── workers/               # Worker meeples
│   │   ├── working/          # Working class workers (48)
│   │   └── middle/           # Middle class workers (42)
│   ├── cubes/                 # Vote cubes (75, 3 colors)
│   │   ├── red/
│   │   ├── yellow/
│   │   └── blue/
│   ├── influence/             # Influence cubes (35)
│   ├── score/                 # Score pawns (4)
│   ├── law-projects/          # Law project pawns (12, 4 colors)
│   ├── richesse/              # Wealth pawn (1)
│   ├── prosperity/            # Prosperity pawns (2)
│   ├── politics/              # Political pawns (7)
│   ├── legitimacy/            # Legitimacy pawns (4)
│   ├── fiscal-multiplier/     # Fiscal multiplier pawn (1)
│   └── round/                 # Round pawn (1)
│
├── boards/                     # Player boards
│   ├── working/               # Working class board
│   ├── middle/                # Middle class board
│   ├── capitalist/            # Capitalist class board
│   └── state/                 # State board
│
├── icons/                      # UI icons and symbols
│   ├── classes/               # Class symbols
│   │   ├── working.svg       # Red working class icon
│   │   ├── middle.svg        # Yellow middle class icon
│   │   ├── capitalist.svg    # Blue capitalist class icon
│   │   └── state.svg         # Gray state icon
│   ├── resources/             # Resource symbols
│   │   ├── food.svg
│   │   ├── luxury.svg
│   │   ├── health.svg
│   │   ├── education.svg
│   │   └── influence.svg
│   ├── policies/              # Policy symbols
│   ├── workers/               # Worker type symbols
│   └── misc/                  # Other symbols (gear, star, etc.)
│
└── misc/                       # Miscellaneous assets
    ├── player-aids/           # Player aid cards
    ├── rule-images/           # Rule reference images
    └── components/            # Warehouse tiles, bags, etc.
```

## 📝 Naming Conventions

- Use lowercase with hyphens: `action-card-01.png`
- Include class color in filename: `working-action-01.png`
- Use descriptive names: `supermarket-enterprise.png`
- Use consistent file formats: `.png` for images, `.svg` for icons

## 📊 Asset Inventory

### Cards (270 total)
- **Action Cards**: 160 (40 × 4 classes)
- **Enterprises**: 59 total
  - Middle Class: 17
  - Capitalist: 28
  - Public: 12
  - Cooperatives: 2
- **Export**: 16
- **Political Agendas**: 10
- **Events**: 25
- **Immigration**: 25
- **Loans**: 10
- **Trade Agreements**: 20

### Tokens (222 total)
- **Resources**: 106
  - Food: 24
  - Luxury: 26
  - Health: 26
  - Education: 26
  - Influence: 4
- **Money**: 82 (various denominations)
- **Special**: 18
  - Gear: 6
  - Protest: 1
  - Strike: 7
  - Social aid: 2
  - Legitimacy: 18

### Wooden Pieces (231 total)
- **Workers**: 90 (48 working + 42 middle)
- **Vote Cubes**: 75 (25 per class)
- **Influence Cubes**: 35
- **Pawns**: 31 (score, law projects, legitimacy, etc.)

## 🎯 Usage

When adding assets:
1. Place files in appropriate subfolder
2. Use consistent naming
3. Optimize images (compress PNGs)
4. Update this README if adding new categories

## 🔮 Future Implementation

Assets will be used for:
- Visual card display in UI
- Interactive game components
- Enhanced tooltips and references
- Digital game board experience

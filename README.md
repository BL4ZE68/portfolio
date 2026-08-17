Portfolio ultramoderne — BL4ZE68

Ce dépôt contient un scaffold Vite + React + Tailwind pour un portfolio ultramoderne en français, prêt à déployer sur GitHub Pages.

Commandes rapides

1. Installer dépendances
   npm install

2. Lancer en dev
   npm run dev

3. Construire
   npm run build

Déploiement sur GitHub Pages

- Construire puis pousser `dist/` sur la branche gh-pages (ou utiliser une action GH). Exemple rapide :
  1. npm run build
  2. npx gh-pages -d dist

Personnalisation

- Modifier `src/App.jsx` pour ajouter/supprimer projets
- Modifier styles dans `src/index.css` et `tailwind.config.cjs`

Remarques

Le contenu des cartes projets a été extrait des README des dépôts sélectionnés : FriendsChat, Romance-app, memory-game.

Si vous voulez :
- ajout d'une page « À propos » ou CV
- ajout d'un blog
- config GitHub Actions pour déploiement automatique
Dites-le et je l'ajouterai.

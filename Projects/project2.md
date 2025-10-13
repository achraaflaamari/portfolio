# 🎮 Push Tiles - Multiplayer Puzzle Game

Un jeu de puzzle multijoueur en temps réel avec des mécaniques innovantes de push et d'échange de tuiles.

## 🎯 Concept du Jeu

Push Tiles est un jeu de stratégie pour deux joueurs où chacun possède une grille 4x6 avec des thèmes distincts :
- **Joueur 1** : Thème Robotique 🤖
- **Joueur 2** : Thème Développement 💻

### Mécaniques de Jeu

1. **Pioche** : Le joueur actif prend une tuile depuis la pile centrale
2. **Placement** : Si la tuile correspond à son thème → placement automatique sur sa grille
3. **Échange** : Si la tuile ne correspond pas → transmission automatique à l'adversaire
4. **Objectif** : Premier à remplir toute sa grille gagne !

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone <repository-url>
cd push-tiles-game

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Démarrage
```bash
# Mode développement (serveur + client)
npm run dev

# Mode production
npm run build
npm start
```

Le jeu sera accessible sur :
- **Frontend** : http://localhost:3000
- **WebSocket Server** : ws://localhost:3001

## 🏗️ Architecture Technique

### Stack Technologique
- **Frontend** : Next.js 15, React 19, Three.js
- **3D Engine** : React Three Fiber + Drei
- **WebSocket** : Native WebSocket (ws library)
- **Styling** : Tailwind CSS + CSS Modules
- **Storage** : JSON files (local development)

### Structure du Projet
```
src/
├── components/           # Composants React
│   ├── LoginScreen.js   # Écran de connexion
│   ├── LobbyScreen.js   # Lobby multijoueur
│   ├── GameRoom.js      # Salle de jeu pré-partie
│   ├── PuzzleGame3D.js  # Jeu principal 3D
│   └── ...
├── hooks/               # Hooks personnalisés
├── pages/               # Pages Next.js
├── styles/              # Styles CSS
└── utils/               # Utilitaires
```

## 🎮 Fonctionnalités

### ✅ Implémenté
- **Système de connexion** avec usernames uniques
- **Lobby multijoueur** avec invitations en temps réel
- **Salle de jeu** avec système de ready et countdown
- **Jeu 3D complet** avec mécaniques de push
- **Synchronisation temps réel** via WebSocket
- **Interface moderne** avec animations et glass morphism
- **Gestion des déconnexions** et reconnexions

### 🔄 Architecture Multijoueur
- **WebSocket Server** : Gestion des rooms et états de jeu
- **État autoritaire** : Le serveur contrôle la logique de jeu
- **Synchronisation** : Tous les événements sont synchronisés en temps réel

## 🎨 Design System

### Palette de Couleurs
- **Primaire** : Bleu (#3b82f6)
- **Secondaire** : Noir/Blanc
- **Gradients** : Noir vers bleu, violet vers rose

### Effets Visuels
- **Glass Morphism** : Effets de verre avec backdrop-filter
- **Animations** : fadeIn, slideIn, pulse, bounce, glow
- **3D** : Éclairage dynamique et matériaux modernes
- **Responsive** : Adaptation mobile complète



### Configuration
```bash
# Variables d'environnement
PORT=3001                    # Port WebSocket
NODE_ENV=production         # Mode production
```




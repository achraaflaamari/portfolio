# Styli — Convertisseur HTML/CSS ⇄ TailwindCSS

Styli est une application web Next.js qui permet de convertir du code HTML/CSS classique en HTML utilisant TailwindCSS, et inversement. Cette application facilite la migration ou l’expérimentation entre les deux approches de stylisation pour les développeurs front-end.

---

## Fonctionnalités principales

- **Éditeurs de code interactifs** :
  - Trois éditeurs (HTML, CSS, HTML+TailwindCSS) via Monaco Editor.
  - Possibilité de copier le contenu de chaque éditeur.
- **Conversion automatique** :
  - Conversion de HTML+CSS → HTML+TailwindCSS.
  - Conversion de HTML+TailwindCSS → HTML+CSS.
- **Interface moderne** :
  - UI réactive grâce à React et TailwindCSS.
  - Indicateurs de chargement lors des conversions.
- **API d’IA** :
  - Utilisation de Google GenAI pour la conversion intelligente des styles.

---

## Structure du projet

```
Styli/
├── src/
│   ├── components/
│   │   ├── EditorBody.jsx      # Éditeur de code avec en-tête et Monaco Editor
│   │   ├── EditorHeader.jsx    # Barre supérieure de chaque éditeur (copie)
│   │   ├── Glisser.jsx         # Sélecteur de mode de conversion (tabs)
│   │   └── Menu.jsx            # Barre de menu principale (logo, bouton convertir)
│   ├── pages/
│   │   ├── api/
│   │   │   └── convert.js      # API interne pour la conversion via GenAI
│   └── styles/                 # (Styles additionnels si besoin)
└── ...
```

---

## Détail des composants principaux

### 1. `src/pages/index.js`
- Page principale avec trois éditeurs (HTML, CSS, HTML+TailwindCSS).
- Gère l’état du code, le mode de conversion, et l’appel à l’API `/api/convert`.
- Utilise les composants `EditorBody`, `Menu`, et `Glisser`.

### 2. `src/pages/api/convert.js`
- API Next.js qui reçoit le code à convertir.
- Utilise Google GenAI (`@google/genai`) pour générer la conversion.
- Retourne un JSON structuré avec le code converti.

### 3. `src/components/EditorBody.jsx`
- Affiche un éditeur de code avec en-tête et Monaco Editor.
- Prend en charge le mode lecture seule et l’indicateur de chargement.

### 4. `src/components/EditorHeader.jsx`
- Barre supérieure de chaque éditeur avec le titre et un bouton pour copier le code.
- Affiche un retour visuel lors de la copie.

### 5. `src/components/Menu.jsx`
- Barre de menu principale avec le logo, le sélecteur de mode (`Glisser`) et le bouton de conversion.

### 6. `src/components/Glisser.jsx`
- Sélecteur d’onglet pour choisir le sens de la conversion (CSS → TailwindCSS ou TailwindCSS → CSS).

---

## Utilisation
1. **Configuration de la clé API Google GenAI**

  Pour utiliser la conversion basée sur l’IA, tu dois fournir ta clé API Google GenAI :
    -  Crée un fichier `.env.local` à la racine du projet.
    -  Ajoute la ligne suivante : GOOGLE_GENAI_API_KEY=ta_cle_api_google
    -  Remplace `ta_cle_api_google` par ta propre clé API.

2. **Lancer le projet en développement**
   ```bash
   npm install
   npm run dev
   ```
   Accéder à [http://localhost:3000](http://localhost:3000).

3. **Utilisation de l’interface**
   - Saisir ou coller le code dans les éditeurs.
   - Choisir le sens de conversion (CSS → TailwindCSS ou inversement).
   - Cliquer sur « Convert » pour lancer la conversion.

4. **API**
   - `/api/convert` : route interne qui utilise Google GenAI pour convertir le code selon le mode sélectionné.

---

## Dépendances principales

- `next`, `react`, `react-dom`
- `@monaco-editor/react`
- `@google/genai`
- `axios`
- `tailwindcss`

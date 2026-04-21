---
name: github-pages-publisher
description: >
  Use this skill whenever the user wants to publish, push, deploy or add HTML pages
  to their GitHub Pages repo (webpage). Triggers on: "publie cette page", "ajoute cette
  page sur GitHub", "push ce fichier html", "mets en ligne", "déploie sur GitHub Pages",
  "ajoute dans le repo webpage", or any request to make an HTML page publicly accessible
  via a URL. Also use when the user asks to organize pages into folders/categories.
  Always use this skill before pushing ANY HTML file to GitHub Pages — it defines the
  folder structure, naming conventions, commit message format, and index update procedure.
---

# GitHub Pages Publisher

Skill pour publier des pages HTML dans le repo `webpage` de l'utilisateur via GitHub Actions.

## Infos du repo

- **Owner** : `annesophierouxconsulting-sys`
- **Repo** : `webpage`
- **Branche** : `main`
- **URL de base** : `https://annesophierouxconsulting-sys.github.io/webpage/`
- **Déploiement** : automatique via GitHub Actions à chaque push

---

## Structure des dossiers

Organise toujours les pages dans un sous-dossier thématique cohérent :

```
webpage/
├── index.html                  ← page d'accueil / liste des pages
├── .github/workflows/
│   └── deploy.yml              ← workflow GitHub Actions (déjà en place)
│
├── consulting/                 ← pages liées au consulting / services
├── marketing/                  ← pages marketing, landing pages, promos
├── outils/                     ← outils, calculateurs, générateurs
├── ressources/                 ← guides, articles, ressources téléchargeables
├── presentations/              ← présentations, pitch decks en HTML
└── [nouveau-theme]/            ← créer un nouveau dossier si aucun ne correspond
```

### Règle de choix du dossier

| Type de page | Dossier |
|---|---|
| Page de service, offre, devis | `consulting/` |
| Landing page, campagne, promo | `marketing/` |
| Calculateur, formulaire, outil interactif | `outils/` |
| Article, guide, FAQ, ressource | `ressources/` |
| Présentation HTML, pitch | `presentations/` |
| Autre / inclassable | Créer un nouveau dossier descriptif |

---

## Convention de nommage des fichiers

- Tout en **minuscules**
- Séparateurs : **tirets** (`-`), pas d'espaces ni d'underscores
- Nom court et descriptif
- Extension `.html`

**Exemples :**
- `consulting/offre-accompagnement.html`
- `marketing/landing-formation.html`
- `outils/calculateur-tarif.html`
- `ressources/guide-transition.html`

---

## Workflow de publication

### Étape 1 — Créer le fichier HTML

Pousser la page dans le bon sous-dossier :

```
github:create_or_update_file(
  owner: "annesophierouxconsulting-sys",
  repo: "webpage",
  branch: "main",
  path: "[dossier]/[nom-fichier].html",
  content: [contenu HTML complet],
  message: "Ajout : [description courte de la page]"
)
```

### Étape 2 — Mettre à jour index.html

Après chaque nouvelle page, récupérer le SHA actuel de `index.html` puis le mettre à jour pour ajouter un lien vers la nouvelle page.

**Format du lien à ajouter dans `index.html` :**
```html
<li><a href="[dossier]/[fichier].html">[Titre lisible de la page]</a> <span class="tag">[dossier]</span></li>
```

---

## Template index.html de référence

Si `index.html` doit être recréé from scratch :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mes Pages</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; max-width: 860px; margin: 60px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 2rem; border-bottom: 2px solid #764ba2; padding-bottom: 10px; margin-bottom: 24px; }
    h2 { font-size: 1.1rem; color: #764ba2; margin: 28px 0 8px; text-transform: uppercase; letter-spacing: 0.05em; }
    ul { list-style: none; padding: 0; }
    li { margin: 8px 0; display: flex; align-items: center; gap: 10px; }
    a { text-decoration: none; color: #0070f3; font-size: 1rem; }
    a:hover { text-decoration: underline; }
    .tag { background: #f0ebff; color: #764ba2; font-size: 0.75rem; padding: 2px 8px; border-radius: 20px; }
  </style>
</head>
<body>
  <h1>📄 Mes Pages</h1>
  <!-- PAGES_LIST -->
</body>
</html>
```

---

## Messages de commit

Format standard :
- Ajout : `Ajout : [nom court de la page]`
- Mise à jour : `Mise à jour : [nom court de la page]`
- Suppression : `Suppression : [nom court de la page]`
- Index : `Index : ajout lien vers [nom court]`

---

## Après le push

Toujours communiquer à l'utilisateur :
1. ✅ Confirmation du fichier pushé
2. 🔗 L'URL publique complète de la page
3. ⏱️ Rappel : déploiement en ~1 minute via GitHub Actions

Format de réponse type :
```
✅ Page publiée : `[dossier]/[fichier].html`
🔗 URL : https://annesophierouxconsulting-sys.github.io/webpage/[dossier]/[fichier].html
⏱️ En ligne dans ~1 minute via GitHub Actions
```

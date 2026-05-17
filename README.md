# Maat — maat.so

Site officiel de **Maat**, cabinet d'audit CRO par Anne-Sophie Roux.
Servi via GitHub Pages avec domaine custom `maat.so`.

## Structure du repo

### Fichiers Maat (actifs)

- `index.html` — Homepage FR (toute la page : hero, synthèse, état des lieux, démarche, méthodes, livrables, équipe, modulable + booking, footer). CSS et JS inline.
- `mentions-legales.html` — Mentions légales FR
- `en/index.html` — Homepage EN (version anglaise miroir)
- `en/legal-notice.html` — Legal notice EN
- `favicon.svg` — Plume bauhaus champagne sur aubergine (symbole de marque)
- `CNAME` — Domaine custom `maat.so` (auto-géré par GitHub Pages)

### `_archive/` — anciens projets, à ignorer

Contient des prototypes / anciennes versions / autres marques :
- `_archive/marketing/` — anciennes itérations Maat + un site Chroma
- `_archive/consulting/` — un audit Chroma
- `_archive/test.html` — fichier test orphelin

**Ces fichiers ne sont pas du Maat.** Un outil qui extrait un design system depuis ce repo doit **ignorer `_archive/`** pour éviter la contamination chromatique / typographique.

## Stack technique

- HTML monolithique (CSS + JS inline, pas de build)
- Polices : Newsreader (display) + DM Mono (mono) via Google Fonts
- DA : palette aubergine / champagne / crème, signature plume bauhaus
- Calendly : intégration via popup widget
- View Transitions API (FR ↔ EN, home ↔ legal)
- Pas de framework : du JS vanilla dans une IIFE

## Pour extraire un design system

Cibler uniquement :
- `index.html` (source principale : tokens CSS dans `<style>:root`, atoms, composants, patterns)
- `mentions-legales.html` (variante "page utilitaire")
- `favicon.svg` (symbole de marque)

Ignorer : `_archive/`, `.github/`, `.skills/`, `.claude/`.

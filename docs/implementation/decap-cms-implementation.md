<div lang="fr">

([Français](#francais))

</div>

# Decap CMS Implementation for Digital Accessibility Toolkit

**Date**: November 3, 2025 (Initial implementation)
**Updated**: November 14, 2025 (Config generator added)
**Status**: ✅ Implemented with auto-generated config
**Branch**: feature/decapCMS-pages

## Overview

This document describes the implementation of Decap CMS (formerly Netlify CMS) for the Government of Canada Digital Accessibility Toolkit. Decap CMS provides a user-friendly content management interface for non-technical content editors to manage individual resource items for the Additional Resources page, with full bilingual support for English and French content.

## Why Decap CMS?

### Benefits
- **User-friendly interface**: Content editors can add/edit resources through a web-based UI
- **Git-based workflow**: All changes are committed to Git, maintaining version control
- **Editorial workflow**: Built-in draft/review/publish workflow
- **Bilingual support**: Native i18n support with single entry point for English/French resources
- **No database required**: Works with static site generators like Eleventy
- **Open source**: Free and actively maintained

### Use Cases
- Adding new resources to the Additional Resources page
- Managing resource metadata (title, description, URL, topic)
- Organizing resources by topic categories
- Indicating language availability for resources
- Allowing non-technical team members to contribute content

## Architecture

### Files Created

```
src/
├── admin/
│   ├── index.html           # CMS admin interface
│   ├── config.yml           # CMS configuration
│   └── README.md            # Admin documentation
├── resources/
│   ├── en/                  # English resource items
│   │   ├── accessible-meeting-event-guidelines.md
│   │   ├── accessibility-support.md
│   │   ├── accessibility-courses.md
│   │   └── resources.11tydata.js  # Auto-toggle generation
│   └── fr/                  # French resource items
│       ├── accessible-meeting-event-guidelines.md
│       ├── accessibility-support.md
│       ├── accessibility-courses.md
│       └── resources.11tydata.js  # Auto-toggle generation
├── _data/
│   └── resourceTopics.js    # Topic definitions with labels, order, descriptions
└── pages/
    ├── en/
    │   ├── additional-resources.md          # Dynamic template page
    │   └── additional-resources.11tydata.js # Custom TOC generation
    └── fr/
        ├── ressources-additionnelles.md          # Dynamic template page
        └── ressources-additionnelles.11tydata.js # Custom TOC generation
```

### Files Modified

1. **eleventy/plugins/collections-plugin.js**
   - Added `resourcesEn` and `resourcesFr` collections
   - Added `resourcesByTopicEn` and `resourcesByTopicFr` grouped collections

2. **eleventy/config/passthrough.js**
   - Added passthrough copy for admin folder to _site/admin

3. **package.json**
   - Added decap-cms-app dependency

## Configuration Details

### Auto-Generated Configuration

**⚠️ Important**: `src/admin/config.yml` is auto-generated and should NOT be edited manually.

**Generator Script**: `scripts/generate-cms-config.js`

**Data Sources**:
- `src/_data/tagList.js` - Subjects (6) and tags (21) for page collections
- `src/_data/roles.js` - User roles (13) for filtering
- `src/_data/resourceTopics.js` - Resource topics (6) with labels and descriptions

**When Config is Generated**:
- `npm run build` - Production build (no local backend)
- `npm run dev` - Development build (no local backend)
- `npm run start-cms` - CMS development (with local backend)
- `npm run cms:config` - Manual generation (production mode)
- `npm run cms:config -- --local` - Manual generation (local mode)

**Generated Files**:
- `src/admin/config.yml` - CMS configuration (ignored by git via `.gitignore`)

**Features of Generator**:
1. **Environment-aware**: Detects `--local` flag or `ELEVENTY_ENV=dev/development/local` for local backend
2. **Reusable field definitions**: DRY principle with `commonFields` object
3. **Data-driven**: Collections and field options populated from data files
4. **Inline comments**: Adds helpful comments to generated YAML
5. **Single source of truth**: All configuration logic in one JavaScript file

**npm Scripts Overview**:
```bash
# Regular Development (no CMS)
npm start          # Dev server (local env)
npm run start-dev  # Dev server (dev env)
npm run start-prod # Dev server (prod env)

# CMS Development
npm run start-cms  # Generates config + starts decap-server + dev server

# Build Commands
npm run build      # Generate config + build site (production)
npm run dev        # Generate config + build site (development)

# Manual Config Generation
npm run cms:config           # Production mode
npm run cms:config -- --local # Local mode with local_backend: true
```

### Backend Configuration

The CMS uses GitHub backend for authentication and content storage:

```yaml
backend:
  name: github
  repo: gc-da11yn/gc-da11yn.github.io
  branch: main
  base_url: https://api.netlify.com  # Netlify's OAuth provider
  auth_endpoint: auth                 # OAuth endpoint
```

This configuration:
- Uses **GitHub authentication** via Netlify's OAuth provider service
- Creates **pull requests** for all content changes (editorial workflow)
- Provides **individual user attribution** through GitHub accounts
- Requires users to have **write access** to the repository

**For local development**, uncomment this line in `src/admin/config.yml`:
```yaml
# local_backend: true
```

Then run the Decap CMS proxy server:
```bash
npx decap-server
```

### Collections Structure

#### Resources Collection (Primary Collection)

The main CMS collection manages individual resource items with bilingual support using i18n structure.

**Location**: `src/resources/` with separate `en/` and `fr/` folders
**Structure**: `multiple_folders` with automatic toggle generation
**Format**: Frontmatter-only markdown files (no body content)

**Fields**:
- **title** (i18n: true) - Resource title in both languages
- **description** (i18n: true) - Brief description, supports HTML
- **url** (i18n: duplicate) - Link URL (same for both languages)
- **topic** (i18n: duplicate) - Category selection from resourceTopics
- **internalLinks** (i18n: duplicate) - Boolean for GC network resources
- **languageAvailability** (i18n: duplicate) - Select: "both", "en", or "fr"

**Topic Options** (from `src/_data/resourceTopics.js`):
1. **meetingsEvents** - Accessible meetings and events (has description)
2. **development** - Development resources
3. **learning** - Learning and training resources
4. **policy** - Policy and standards
5. **procurement** - Procurement resources
6. **services** - Accessibility services

**Language Availability**:
- **both** (default) - Resource appears on both EN and FR pages without language indicator
- **en** - English-only resource, appears on FR page with "(en anglais seulement)" label
- **fr** - French-only resource, appears on EN page with "(in French only)" label

**Auto-Toggle Feature**:
- `src/resources/resources.11tydata.js` automatically generates cross-language toggle links
- Links resources with matching filenames across EN/FR folders
- No manual toggle configuration needed

### Bilingual Support

The configuration uses Decap CMS's i18n structure with a single entry point for bilingual content:

```yaml
i18n:
  structure: multiple_folders
  locales: [en, fr]
  default_locale: en
```

**Field-Level i18n Control**:
- **i18n: true** - Separate field per language (title, description)
- **i18n: duplicate** - Shared field across languages (url, topic, internalLinks, languageAvailability)

This allows content editors to enter one resource with language tabs for bilingual fields while keeping metadata consistent.

### Dynamic Page Templates

The Additional Resources pages (`src/pages/en/additional-resources.md` and `src/pages/fr/ressources-additionnelles.md`) are dynamic templates that:

1. **Query resources** from Eleventy collections (`resourcesByTopicEn`/`resourcesByTopicFr`)
2. **Group by topic** and sort by alphabetical order
3. **Display topic descriptions** if defined in `resourceTopics.js`
4. **Show all resources** with language indicators for single-language items
5. **Preserve legacy content** with "(Legacy)" labels for gradual migration

### Table of Contents (TOC) System

Custom TOC generation for Additional Resources pages:

**Files**:
- `src/pages/en/additional-resources.11tydata.js`
- `src/pages/fr/ressources-additionnelles.11tydata.js`

**How it works**:
1. Reads topic data from `resourceTopics.js`
2. Generates h2 heading entries for each topic
3. Creates proper heading IDs using same slugification as markdown-it-anchor
4. Sorts topics alphabetically (matching page display order)
5. Overrides default filesystem-based TOC extraction

**Result**: TOC shows actual topic labels ("Accessible meetings and events", "Development", etc.) instead of template variables like `{{ topicData.label }}`

### Resource Topics Data File

**Location**: `src/_data/resourceTopics.js`

Defines topic categories with bilingual labels, display order, and optional descriptions:

```javascript
{
  en: {
    meetingsEvents: {
      label: "Accessible meetings and events",
      order: 1,  // Alphabetical order
      description: "Virtual meetings and events come in various formats..."
    },
    // ... more topics
  },
  fr: {
    learning: {
      label: "Apprentissage",
      order: 1,  // Alphabetical order in French
      description: ""
    },
    // ... more topics
  }
}
```

**Usage**:
- **CMS config** - Topic options in select dropdown
- **Page templates** - Topic headings and descriptions
- **TOC generation** - Heading labels and IDs
- **Collections** - Grouping resources by topic

**Display Order**: Topics sorted alphabetically per language (EN: Accessible meetings, Development, Learning...; FR: Apprentissage, Approvisionnement, Développement...)

## Setup Requirements

### Prerequisites

1. **GitHub Account**: All users need a GitHub account with write access to the repository
2. **Netlify OAuth**: Site configured to use Netlify's OAuth provider service (automatically set up)

### Netlify OAuth Configuration

The CMS uses Netlify's OAuth provider service to enable GitHub authentication:

1. **Automatic Setup**: Netlify handles OAuth configuration when you use:
   ```yaml
   backend:
     base_url: https://api.netlify.com
     auth_endpoint: auth
   ```

2. **No Manual OAuth App**: Unlike direct GitHub backend, Netlify's service manages the OAuth application

3. **User Access**: Users must have write permissions on the GitHub repository to create pull requests

### Granting Repository Access

To add content editors:

1. Go to GitHub repository settings
2. Navigate to **Collaborators** or **Teams**
3. Invite users and grant **Write** or **Maintain** access
4. Users can now log in to the CMS with their GitHub account

## Local Development

### Running CMS Locally

1. **Install Decap Server** (if not already installed):
   ```bash
   npm install -g decap-server
   ```

2. **Start the local backend**:
   ```bash
   npx decap-server
   ```

3. **Uncomment local backend** in `src/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

4. **Start Eleventy dev server**:
   ```bash
   npm start
   ```

5. **Access CMS**:
   Navigate to `http://localhost:{PORT}/admin/`
   - Port is auto-detected (usually 8080, but may vary if port is in use)
   - Check the console output for the actual URL displayed by the generator script

### Testing Changes

1. Make content changes in the CMS
2. Check that markdown files are updated in `src/resources/`
3. Verify changes appear in the Eleventy build
4. Test cross-language toggle links work correctly

## Content Editor Workflow

### Accessing the CMS

1. **Production**: Navigate to `https://a11ycanada.netlify.app/admin/`
2. **Local**: Navigate to `http://localhost:{PORT}/admin/`
   - Port is auto-detected (usually 8080, but may vary if port is in use)
   - Check the console output for the actual URL displayed by the generator script

### Adding a New Resource

1. **Login** using your GitHub account (click "Login with GitHub")
2. Click **Resources** collection
3. Click **New Resources**
4. **Fill in the fields**:
   - Switch between **English** and **French** tabs for bilingual fields
   - Enter title and description in both languages
   - Set shared URL (appears once, not in tabs)
   - Select topic from dropdown
   - Choose language availability:
     - **both** - Resource available in both languages (default)
     - **en** - English-only resource (shows on FR page with language indicator)
     - **fr** - French-only resource (shows on EN page with language indicator)
   - Toggle **internalLinks** if resource requires GC network access
5. **Save** to create a draft
6. **Publish** → **Publish now** to create a pull request

**Note**: Changes create pull requests in GitHub. After merging the PR, Netlify will automatically deploy the updated site.

### Editing an Existing Resource

1. **Login** to the CMS with your GitHub account
2. Click **Resources** collection
3. **Find the resource** in the list (shown as English title)
4. Click to edit
5. **Update fields** as needed in both language tabs
6. **Save** and **Publish** to create a pull request

### Understanding Resource Display

Resources appear on both English and French Additional Resources pages:

- **Alphabetical topic order**: Topics sorted A-Z in each language
- **All resources shown**: Resources display on both language pages
- **Language indicators**:
  - English page: French-only resources show "(in French only)"
  - French page: English-only resources show "(en anglais seulement)"
  - Resources marked "both" show no indicator
- **Topic descriptions**: Some topics have intro text (like "Accessible meetings and events")

### Editorial Workflow

Decap CMS includes a built-in editorial workflow:

- **Draft**: Work in progress, not published
- **In Review**: Ready for review by team members
- **Ready**: Approved and ready to publish

Enable this in production by setting in `config.yml`:

```yaml
publish_mode: editorial_workflow
```

## Content Management Best Practices

### Resource Metadata

- **Title**: Keep concise and descriptive (appears in heading)
- **Description**: Brief overview, can include HTML for formatting
- **URL**: Use complete URLs including https://
- **Topic**: Choose the most appropriate category
- **Language availability**: Set correctly to show proper indicators

### Bilingual Content

- **Fill both language tabs**: Enter title and description in both EN and FR
- **Consistent messaging**: Keep descriptions equivalent across languages
- **URL stays same**: Link URL doesn't change between languages (appears once)
- **Match existing style**: Review current resources for formatting patterns

### Topic Organization

Topics display alphabetically in each language:

- **English**: Accessible meetings and events, Development, Learning, Policy, Procurement, Services
- **French**: Apprentissage, Approvisionnement, Développement, Politique, Réunions et événements accessibles, Services

### Internal Links

- **Enable internalLinks** for GC-network-only resources
- Shows special icon and "Internal link" / "Lien interne" text
- Helps users identify resources requiring VPN/GC network access

### Images and Media

Currently not used in Resources collection (frontmatter-only). For future use:

- Upload images through CMS media library
- Files saved to `src/_images/`
- Automatically copied to `/img/` in build
- Use descriptive alt text for accessibility

## Security Considerations

### Access Control

- **Invite-only registration**: Prevents unauthorized access
- **Role-based permissions**: Configure in Netlify Identity settings
- **Git commit attribution**: All changes tracked to user accounts

### Content Validation

- **Editorial workflow**: Requires review before publishing
- **Git history**: Full audit trail of all content changes
- **Preview before publish**: Test changes before going live

## Performance Impact

### Build Time

- **No impact**: CMS runs client-side, doesn't affect build
- **Git operations**: Standard commit/push workflow
- **Eleventy builds**: Triggered by Netlify on content changes

### Page Load

- **Admin only**: CMS scripts only load on `/admin/` pages
- **Identity widget**: ~30KB, loaded on all pages for login functionality
- **Production**: No CMS overhead on public-facing pages

## Troubleshooting

### Can't Access CMS

1. Check Netlify Identity is enabled
2. Verify Git Gateway is configured
3. Confirm user has been invited
4. Clear browser cache and retry

### Changes Not Appearing

1. Check editorial workflow status (draft/review/ready)
2. Verify changes were published, not just saved
3. Wait for Netlify build to complete
4. Clear browser cache

### Local Development Issues

1. Ensure `decap-server` is running
2. Verify `local_backend: true` is uncommented
3. Check Eleventy dev server is running
4. Try a different browser

### Markdown Formatting Issues

1. Use CMS visual editor instead of raw editor
2. Preview changes before publishing
3. Check markdown syntax in raw mode
4. Compare with existing working pages

## Future Enhancements

### Planned Features

1. **Migration of legacy content**:
   - Move remaining hardcoded resources to CMS
   - Remove "(Legacy)" sections from Additional Resources pages
   - Complete resource database in CMS

2. **Additional topic descriptions**:
   - Add introductory text for other topics beyond "Accessible meetings and events"
   - Guide users to relevant resources

3. **Custom CMS widgets**:
   - URL validator widget
   - Link checker integration
   - Bilingual content comparison tool

4. **Enhanced metadata**:
   - Resource categories or tags
   - Publication/update dates
   - Author attribution

5. **Workflow automation**:
   - Auto-notification for new resources
   - Scheduled publishing
   - Link health monitoring

## Technical Implementation Details

### Eleventy Collections

Four collections defined in `eleventy/plugins/collections-plugin.js`:

1. **resourcesEn**: All English resources from `src/resources/en/*.md`
2. **resourcesFr**: All French resources from `src/resources/fr/*.md`
3. **resourcesByTopicEn**: English resources grouped by topic key
4. **resourcesByTopicFr**: French resources grouped by topic key

### Auto-Toggle Generation

`src/resources/resources.11tydata.js` uses computed data to automatically link EN/FR resources:

```javascript
eleventyComputed: {
  toggle: (data) => {
    // Checks if matching filename exists in other language folder
    // Generates cross-language toggle path
  }
}
```

### Slugification Consistency

Topic IDs in TOC generation use same slugification as markdown-it-anchor plugin:

- Strip HTML tags
- Transliterate French accents (é → e, à → a, etc.)
- Convert to lowercase
- Replace spaces with hyphens
- Remove special characters

This ensures TOC anchor links match heading IDs generated by markdown processor.

## References

### Documentation

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [GitHub Backend Documentation](https://decapcms.org/docs/github-backend/)
- [Netlify OAuth Provider](https://docs.netlify.com/security/secure-access-to-sites/oauth-provider-tokens/)

### Related Files

- `src/admin/config.yml` - CMS configuration
- `src/admin/index.html` - CMS interface
- `eleventy/config/passthrough.js` - Build configuration
- `.github/copilot-instructions.md` - Project documentation

## Support

For issues or questions:

1. Check this documentation first
2. Review Decap CMS documentation
3. Verify GitHub repository permissions
4. Contact IT Accessibility Office team

---

**Implementation Date**: November 3, 2025
**Last Updated**: November 3, 2025
**Implemented By**: Development Team
**Reviewed By**: Pending

---

<div lang="fr" id="francais">

([English](#decap-cms-implementation-for-digital-accessibility-toolkit))

</div>

# Mise en œuvre de Decap CMS pour la Boîte à outils de l'accessibilité numérique

**Date** : 3 novembre 2025
**Statut** : ✅ Mis en œuvre
**Branche** : feature/decapCMS

## Aperçu

Ce document décrit la mise en œuvre de Decap CMS (anciennement Netlify CMS) pour la Boîte à outils de l'accessibilité numérique du gouvernement du Canada. Decap CMS fournit une interface de gestion de contenu conviviale permettant aux éditeurs de contenu non techniques de gérer des éléments de ressources individuels pour la page Ressources additionnelles, avec un support bilingue complet pour le contenu en anglais et en français.

## Pourquoi Decap CMS?

### Avantages

- **Interface conviviale** : Les éditeurs de contenu peuvent ajouter/modifier des ressources via une interface utilisateur Web
- **Flux de travail basé sur Git** : Toutes les modifications sont validées dans Git, maintenant le contrôle de version
- **Flux de travail éditorial** : Flux de travail brouillon/révision/publication intégré
- **Support bilingue** : Support i18n natif avec un point d'entrée unique pour les ressources en anglais et en français
- **Aucune base de données requise** : Fonctionne avec des générateurs de sites statiques comme Eleventy
- **Open source** : Gratuit et activement maintenu

### Cas d'utilisation

- Ajout de nouvelles ressources à la page Ressources additionnelles
- Gestion des métadonnées des ressources (titre, description, URL, sujet)
- Organisation des ressources par catégories de sujets
- Indication de la disponibilité linguistique des ressources
- Permettre aux membres non techniques de l'équipe de contribuer du contenu

## Architecture

### Fichiers créés

```
src/
├── admin/
│   ├── index.html           # Interface d'administration CMS
│   ├── config.yml           # Configuration CMS
│   └── README.md            # Documentation d'administration
├── resources/
│   ├── en/                  # Éléments de ressources en anglais
│   │   ├── accessible-meeting-event-guidelines.md
│   │   ├── accessibility-support.md
│   │   ├── accessibility-courses.md
│   │   └── resources.11tydata.js  # Génération automatique de bascule
│   └── fr/                  # Éléments de ressources en français
│       ├── accessible-meeting-event-guidelines.md
│       ├── accessibility-support.md
│       ├── accessibility-courses.md
│       └── resources.11tydata.js  # Génération automatique de bascule
├── _data/
│   └── resourceTopics.js    # Définitions de sujets avec étiquettes, ordre, descriptions
└── pages/
    ├── en/
    │   ├── additional-resources.md          # Page de modèle dynamique
    │   └── additional-resources.11tydata.js # Génération de table des matières personnalisée
    └── fr/
        ├── ressources-additionnelles.md          # Page de modèle dynamique
        └── ressources-additionnelles.11tydata.js # Génération de table des matières personnalisée
```

### Fichiers modifiés

1. **eleventy/plugins/collections-plugin.js**
   - Ajout des collections `resourcesEn` et `resourcesFr`
   - Ajout des collections groupées `resourcesByTopicEn` et `resourcesByTopicFr`

2. **eleventy/config/passthrough.js**
   - Ajout de la copie passthrough pour le dossier admin vers _site/admin

3. **package.json**
   - Ajout de la dépendance decap-cms-app

## Détails de configuration

### Configuration auto-générée

**⚠️ Important** : `src/admin/config.yml` est auto-généré et ne doit PAS être modifié manuellement.

**Script générateur** : `scripts/generate-cms-config.js`

**Sources de données** :

- `src/_data/tagList.js` - Sujets (6) et balises (21) pour les collections de pages
- `src/_data/roles.js` - Rôles utilisateur (13) pour le filtrage
- `src/_data/resourceTopics.js` - Sujets de ressources (6) avec étiquettes et descriptions

**Quand la configuration est générée** :

- `npm run build` - Construction de production (sans backend local)
- `npm run dev` - Construction de développement (sans backend local)
- `npm run start-cms` - Développement CMS (avec backend local)
- `npm run cms:config` - Génération manuelle (mode production)
- `npm run cms:config -- --local` - Génération manuelle (mode local)

**Fichiers générés** :

- `src/admin/config.yml` - Configuration CMS (ignoré par git via `.gitignore`)

**Fonctionnalités du générateur** :

1. **Détection d'environnement** : Détecte le drapeau `--local` ou `ELEVENTY_ENV=dev/development/local` pour le backend local
2. **Définitions de champs réutilisables** : Principe DRY avec objet `commonFields`
3. **Piloté par les données** : Collections et options de champs peuplées à partir des fichiers de données
4. **Commentaires en ligne** : Ajoute des commentaires utiles au YAML généré
5. **Source unique de vérité** : Toute la logique de configuration dans un seul fichier JavaScript

**Aperçu des scripts npm** :

```bash
# Développement régulier (sans CMS)
npm start          # Serveur de développement (env local)
npm run start-dev  # Serveur de développement (env dev)
npm run start-prod # Serveur de développement (env prod)

# Développement CMS
npm run start-cms  # Génère la config + démarre decap-server + serveur de développement

# Commandes de construction
npm run build      # Générer la config + construire le site (production)
npm run dev        # Générer la config + construire le site (développement)

# Génération manuelle de configuration
npm run cms:config           # Mode production
npm run cms:config -- --local # Mode local avec local_backend: true
```

### Configuration du backend

Le CMS utilise le backend GitHub pour l'authentification et le stockage de contenu :

```yaml
backend:
  name: github
  repo: gc-da11yn/gc-da11yn.github.io
  branch: main
  base_url: https://api.netlify.com  # Fournisseur OAuth de Netlify
  auth_endpoint: auth                 # Point de terminaison OAuth
```

Cette configuration :
- Utilise **l'authentification GitHub** via le service de fournisseur OAuth de Netlify
- Crée des **pull requests** pour toutes les modifications de contenu (flux de travail éditorial)
- Fournit **l'attribution utilisateur individuelle** via les comptes GitHub
- Nécessite que les utilisateurs aient **un accès en écriture** au dépôt

**Pour le développement local**, décommentez cette ligne dans `src/admin/config.yml` :

```yaml
# local_backend: true
```

Ensuite, exécutez le serveur proxy Decap CMS :

```bash
npx decap-server
```

### Structure des collections

#### Collection Ressources (Collection principale)

La collection CMS principale gère les éléments de ressources individuels avec support bilingue utilisant la structure i18n.

**Emplacement** : `src/resources/` avec des dossiers séparés `en/` et `fr/`
**Structure** : `multiple_folders` avec génération automatique de bascule
**Format** : Fichiers markdown frontmatter uniquement (pas de contenu de corps)

**Champs** :

- **title** (i18n: true) - Titre de la ressource dans les deux langues
- **description** (i18n: true) - Brève description, prend en charge HTML
- **url** (i18n: duplicate) - URL du lien (même pour les deux langues)
- **topic** (i18n: duplicate) - Sélection de catégorie depuis resourceTopics
- **internalLinks** (i18n: duplicate) - Booléen pour les ressources du réseau du GC
- **languageAvailability** (i18n: duplicate) - Sélection : "both", "en" ou "fr"

**Options de sujets** (de `src/_data/resourceTopics.js`) :

1. **meetingsEvents** - Réunions et événements accessibles (a une description)
2. **development** - Ressources de développement
3. **learning** - Ressources d'apprentissage et de formation
4. **policy** - Politique et normes
5. **procurement** - Ressources d'approvisionnement
6. **services** - Services d'accessibilité

**Disponibilité linguistique** :

- **both** (par défaut) - La ressource apparaît sur les pages EN et FR sans indicateur de langue
- **en** - Ressource en anglais seulement, apparaît sur la page FR avec l'étiquette "(en anglais seulement)"
- **fr** - Ressource en français seulement, apparaît sur la page EN avec l'étiquette "(in French only)"

**Fonction de bascule automatique** :

- `src/resources/resources.11tydata.js` génère automatiquement des liens de bascule inter-langues
- Lie les ressources avec des noms de fichiers correspondants dans les dossiers EN/FR
- Aucune configuration de bascule manuelle nécessaire

### Support bilingue

La configuration utilise la structure i18n de Decap CMS avec un point d'entrée unique pour le contenu bilingue :

```yaml
i18n:
  structure: multiple_folders
  locales: [en, fr]
  default_locale: en
```

**Contrôle i18n au niveau des champs** :

- **i18n: true** - Champ séparé par langue (title, description)
- **i18n: duplicate** - Champ partagé entre les langues (url, topic, internalLinks, languageAvailability)

Cela permet aux éditeurs de contenu d'entrer une ressource avec des onglets de langue pour les champs bilingues tout en gardant les métadonnées cohérentes.

### Modèles de pages dynamiques

Les pages Ressources additionnelles (`src/pages/en/additional-resources.md` et `src/pages/fr/ressources-additionnelles.md`) sont des modèles dynamiques qui :

1. **Interrogent les ressources** des collections Eleventy (`resourcesByTopicEn`/`resourcesByTopicFr`)
2. **Groupent par sujet** et trient par ordre alphabétique
3. **Affichent les descriptions de sujets** si définies dans `resourceTopics.js`
4. **Affichent toutes les ressources** avec des indicateurs de langue pour les éléments en une seule langue
5. **Préservent le contenu hérité** avec des étiquettes "(Legacy)" pour la migration progressive

### Système de table des matières (TDM)

Génération de TDM personnalisée pour les pages Ressources additionnelles :

**Fichiers** :

- `src/pages/en/additional-resources.11tydata.js`
- `src/pages/fr/ressources-additionnelles.11tydata.js`

**Comment ça fonctionne** :

1. Lit les données de sujet de `resourceTopics.js`
2. Génère des entrées de titre h2 pour chaque sujet
3. Crée des identifiants de titre appropriés en utilisant la même slugification que markdown-it-anchor
4. Trie les sujets par ordre alphabétique (correspondant à l'ordre d'affichage de la page)
5. Remplace l'extraction de TDM par défaut basée sur le système de fichiers

**Résultat** : La TDM affiche les étiquettes de sujets réelles ("Accessible meetings and events", "Development", etc.) au lieu des variables de modèle comme `{{ topicData.label }}`

### Fichier de données des sujets de ressources

**Emplacement** : `src/_data/resourceTopics.js`

Définit les catégories de sujets avec des étiquettes bilingues, un ordre d'affichage et des descriptions facultatives :

```javascript
{
  en: {
    meetingsEvents: {
      label: "Accessible meetings and events",
      order: 1,  // Ordre alphabétique
      description: "Virtual meetings and events come in various formats..."
    },
    // ... plus de sujets
  },
  fr: {
    learning: {
      label: "Apprentissage",
      order: 1,  // Ordre alphabétique en français
      description: ""
    },
    // ... plus de sujets
  }
}
```

**Utilisation** :

- **Configuration CMS** - Options de sujets dans le menu déroulant de sélection
- **Modèles de pages** - Titres et descriptions de sujets
- **Génération de TDM** - Étiquettes et identifiants de titres
- **Collections** - Regroupement des ressources par sujet

**Ordre d'affichage** : Sujets triés alphabétiquement par langue (EN: Accessible meetings, Development, Learning...; FR: Apprentissage, Approvisionnement, Développement...)

## Exigences de configuration

### Prérequis

1. **Compte GitHub** : Tous les utilisateurs ont besoin d'un compte GitHub avec accès en écriture au dépôt
2. **OAuth Netlify** : Site configuré pour utiliser le service de fournisseur OAuth de Netlify (configuration automatique)

### Configuration OAuth Netlify

Le CMS utilise le service de fournisseur OAuth de Netlify pour activer l'authentification GitHub :

1. **Configuration automatique** : Netlify gère la configuration OAuth lorsque vous utilisez :
   ```yaml
   backend:
     base_url: https://api.netlify.com
     auth_endpoint: auth
   ```

2. **Pas d'application OAuth manuelle** : Contrairement au backend GitHub direct, le service de Netlify gère l'application OAuth

3. **Accès utilisateur** : Les utilisateurs doivent avoir des permissions d'écriture sur le dépôt GitHub pour créer des pull requests

### Accorder l'accès au dépôt

Pour ajouter des éditeurs de contenu :

1. Accédez aux paramètres du dépôt GitHub
2. Naviguez vers **Collaborators** ou **Teams**
3. Invitez les utilisateurs et accordez l'accès **Write** ou **Maintain**
4. Les utilisateurs peuvent maintenant se connecter au CMS avec leur compte GitHub

## Développement local

### Exécuter le CMS localement

1. **Installer Decap Server** (si pas déjà installé) :
   ```bash
   npm install -g decap-server
   ```

2. **Démarrer le backend local** :
   ```bash
   npx decap-server
   ```

3. **Décommenter le backend local** dans `src/admin/config.yml` :
   ```yaml
   local_backend: true
   ```

4. **Démarrer le serveur de développement Eleventy** :
   ```bash
   npm start
   ```

5. **Accéder au CMS** :
   Naviguer vers `http://localhost:{PORT}/admin/`
   - Le port est détecté automatiquement (généralement 8080, mais peut varier si le port est utilisé)
   - Vérifiez la sortie de la console pour l'URL réelle affichée par le script de génération

### Tester les modifications

1. Apporter des modifications de contenu dans le CMS
2. Vérifier que les fichiers markdown sont mis à jour dans `src/pages/`
3. Vérifier que les modifications apparaissent dans la construction Eleventy
4. Tester que les liens de bascule inter-langues fonctionnent correctement

## Flux de travail de l'éditeur de contenu

### Accéder au CMS

1. **Production** : Naviguer vers `https://a11ycanada.netlify.app/admin/`
2. **Local** : Naviguer vers `http://localhost:{PORT}/admin/`
   - Le port est détecté automatiquement (généralement 8080, mais peut varier si le port est utilisé)
   - Vérifiez la sortie de la console pour l'URL réelle affichée par le script de génération

### Ajouter une nouvelle ressource

1. **Connexion** avec votre compte GitHub (cliquez sur "Login with GitHub")
2. Cliquez sur la collection **Resources**
3. Cliquez sur **New Resources**
4. **Remplissez les champs** :
   - Basculez entre les onglets **English** et **French** pour les champs bilingues
   - Entrez le titre et la description dans les deux langues
   - Définissez l'URL partagée (apparaît une fois, pas dans les onglets)
   - Sélectionnez le sujet dans le menu déroulant
   - Choisissez la disponibilité linguistique :
     - **both** - Ressource disponible dans les deux langues (par défaut)
     - **en** - Ressource en anglais seulement (affichée sur la page FR avec indicateur de langue)
     - **fr** - Ressource en français seulement (affichée sur la page EN avec indicateur de langue)
   - Basculez **internalLinks** si la ressource nécessite un accès au réseau du GC
5. **Enregistrer** pour créer un brouillon
6. **Publier** → **Publish now** pour créer une pull request

**Note** : Les modifications créent des pull requests dans GitHub. Après avoir fusionné la PR, Netlify déploiera automatiquement le site mis à jour.

### Modifier une ressource existante

1. **Connexion** au CMS avec votre compte GitHub
2. Cliquez sur la collection **Resources**
3. **Trouvez la ressource** dans la liste (affichée comme titre anglais)
4. Cliquez pour modifier
5. **Mettez à jour les champs** au besoin dans les deux onglets de langue
6. **Enregistrer** et **Publier** pour créer une pull request
6. **Enregistrer** et **Publier**

### Comprendre l'affichage des ressources

Les ressources apparaissent sur les pages Ressources additionnelles en anglais et en français :

- **Ordre alphabétique des sujets** : Sujets triés A-Z dans chaque langue
- **Toutes les ressources affichées** : Les ressources s'affichent sur les deux pages de langue
- **Indicateurs de langue** :
  - Page anglaise : Les ressources en français seulement affichent "(in French only)"
  - Page française : Les ressources en anglais seulement affichent "(en anglais seulement)"
  - Les ressources marquées "both" n'affichent aucun indicateur
- **Descriptions de sujets** : Certains sujets ont du texte d'introduction (comme "Accessible meetings and events")

### Flux de travail éditorial

Decap CMS inclut un flux de travail éditorial intégré :

- **Draft** : Travail en cours, non publié
- **In Review** : Prêt pour examen par les membres de l'équipe
- **Ready** : Approuvé et prêt à publier

Activez ceci en production en définissant dans `config.yml` :

```yaml
publish_mode: editorial_workflow
```

## Meilleures pratiques de gestion de contenu

### Métadonnées des ressources

- **Titre** : Gardez concis et descriptif (apparaît dans le titre)
- **Description** : Aperçu bref, peut inclure du HTML pour le formatage
- **URL** : Utilisez des URL complètes incluant https://
- **Sujet** : Choisissez la catégorie la plus appropriée
- **Disponibilité linguistique** : Définissez correctement pour afficher les indicateurs appropriés

### Contenu bilingue

- **Remplissez les deux onglets de langue** : Entrez le titre et la description en EN et FR
- **Message cohérent** : Gardez les descriptions équivalentes dans les deux langues
- **L'URL reste la même** : L'URL du lien ne change pas entre les langues (apparaît une fois)
- **Correspondre au style existant** : Examinez les ressources actuelles pour les modèles de formatage

### Organisation par sujet

Les sujets s'affichent par ordre alphabétique dans chaque langue :

- **Anglais** : Accessible meetings and events, Development, Learning, Policy, Procurement, Services
- **Français** : Apprentissage, Approvisionnement, Développement, Politique, Réunions et événements accessibles, Services

### Liens internes

- **Activez internalLinks** pour les ressources du réseau du GC uniquement
- Affiche une icône spéciale et le texte "Internal link" / "Lien interne"
- Aide les utilisateurs à identifier les ressources nécessitant un accès VPN/réseau du GC

### Images et médias

Actuellement non utilisé dans la collection Ressources (frontmatter uniquement). Pour une utilisation future :

- Téléchargez des images via la bibliothèque multimédia CMS
- Fichiers enregistrés dans `src/_images/`
- Automatiquement copiés vers `/img/` dans la construction
- Utilisez du texte alternatif descriptif pour l'accessibilité

## Considérations de sécurité

### Contrôle d'accès

- **Inscription sur invitation uniquement** : Empêche l'accès non autorisé
- **Autorisations basées sur les rôles** : Configurer dans les paramètres Netlify Identity
- **Attribution de validation Git** : Tous les changements suivis aux comptes d'utilisateur

### Validation du contenu

- **Flux de travail éditorial** : Nécessite un examen avant la publication
- **Historique Git** : Piste d'audit complète de tous les changements de contenu
- **Aperçu avant publication** : Testez les modifications avant de les mettre en ligne

## Impact sur les performances

### Temps de construction

- **Aucun impact** : Le CMS s'exécute côté client, n'affecte pas la construction
- **Opérations Git** : Flux de travail de validation/push standard
- **Constructions Eleventy** : Déclenchées par Netlify lors des changements de contenu

### Chargement de page

- **Administration uniquement** : Les scripts CMS se chargent uniquement sur les pages `/admin/`
- **Widget Identity** : ~30KB, chargé sur toutes les pages pour la fonctionnalité de connexion
- **Production** : Aucune surcharge CMS sur les pages publiques

## Dépannage

### Impossible d'accéder au CMS

1. Vérifiez que Netlify Identity est activé
2. Vérifiez que Git Gateway est configuré
3. Confirmez que l'utilisateur a été invité
4. Effacez le cache du navigateur et réessayez

### Les modifications n'apparaissent pas

1. Vérifiez le statut du flux de travail éditorial (brouillon/révision/prêt)
2. Vérifiez que les modifications ont été publiées, pas seulement enregistrées
3. Attendez que la construction Netlify soit terminée
4. Effacez le cache du navigateur

### Problèmes de développement local

1. Assurez-vous que `decap-server` est en cours d'exécution
2. Vérifiez que `local_backend: true` est décommenté
3. Vérifiez que le serveur de développement Eleventy est en cours d'exécution
4. Essayez un autre navigateur

### Problèmes de formatage Markdown

1. Utilisez l'éditeur visuel CMS au lieu de l'éditeur brut
2. Prévisualisez les modifications avant de publier
3. Vérifiez la syntaxe markdown en mode brut
4. Comparez avec les pages fonctionnelles existantes

## Améliorations futures

### Fonctionnalités prévues

1. **Migration du contenu hérité** :
   - Déplacer les ressources codées en dur restantes vers le CMS
   - Supprimer les sections "(Legacy)" des pages Ressources additionnelles
   - Base de données de ressources complète dans le CMS

2. **Descriptions de sujets supplémentaires** :
   - Ajouter du texte d'introduction pour d'autres sujets au-delà de "Accessible meetings and events"
   - Guider les utilisateurs vers les ressources pertinentes

3. **Widgets CMS personnalisés** :
   - Widget de validation d'URL
   - Intégration de vérificateur de liens
   - Outil de comparaison de contenu bilingue

4. **Métadonnées améliorées** :
   - Catégories ou balises de ressources
   - Dates de publication/mise à jour
   - Attribution d'auteur

5. **Automatisation du flux de travail** :
   - Notification automatique pour les nouvelles ressources
   - Publication programmée
   - Surveillance de la santé des liens

## Détails de mise en œuvre technique

### Collections Eleventy

Quatre collections définies dans `eleventy/plugins/collections-plugin.js` :

1. **resourcesEn** : Toutes les ressources anglaises de `src/resources/en/*.md`
2. **resourcesFr** : Toutes les ressources françaises de `src/resources/fr/*.md`
3. **resourcesByTopicEn** : Ressources anglaises groupées par clé de sujet
4. **resourcesByTopicFr** : Ressources françaises groupées par clé de sujet

### Génération automatique de bascule

`src/resources/resources.11tydata.js` utilise des données calculées pour lier automatiquement les ressources EN/FR :

```javascript
eleventyComputed: {
  toggle: (data) => {
    // Vérifie si le nom de fichier correspondant existe dans l'autre dossier de langue
    // Génère le chemin de bascule inter-langues
  }
}
```

### Cohérence de la slugification

Les identifiants de sujets dans la génération de TDM utilisent la même slugification que le plugin markdown-it-anchor :

- Supprimer les balises HTML
- Translittérer les accents français (é → e, à → a, etc.)
- Convertir en minuscules
- Remplacer les espaces par des traits d'union
- Supprimer les caractères spéciaux

Cela garantit que les liens d'ancrage de la TDM correspondent aux identifiants de titre générés par le processeur markdown.

## Références

### Documentation

- [Documentation Decap CMS](https://decapcms.org/docs/)
- [Documentation du backend GitHub](https://decapcms.org/docs/github-backend/)
- [Fournisseur OAuth Netlify](https://docs.netlify.com/security/secure-access-to-sites/oauth-provider-tokens/)

### Fichiers connexes

- `src/admin/config.yml` - Configuration CMS
- `src/admin/index.html` - Interface CMS
- `eleventy/config/passthrough.js` - Configuration de construction
- `.github/copilot-instructions.md` - Documentation du projet

## Support

Pour les problèmes ou questions :

1. Consultez d'abord cette documentation
2. Consultez la documentation Decap CMS
3. Vérifiez les permissions du dépôt GitHub

1. Consultez d'abord cette documentation
2. Consultez la documentation Decap CMS
3. Vérifiez les permissions du dépôt GitHub
4. Contactez l'équipe du Bureau de l'accessibilité des TI

---

**Date de mise en œuvre** : 3 novembre 2025
**Dernière mise à jour** : 7 novembre 2025
**Mis en œuvre par** : Équipe de développement
**Révisé par** : En attente

<div lang="fr">

([Français](#francais))

</div>

# Decap CMS Quick Setup Guide

## ✅ What's Been Implemented

Decap CMS has been successfully installed and configured for the Digital Accessibility Toolkit. The CMS manages individual resource items for the Additional Resources page with full bilingual support (English/French).

## 📋 Files Created/Modified

### Created Files:

**Admin Interface:**
- `src/admin/index.html` - CMS admin interface entry point
- `src/admin/config.yml` - CMS configuration with i18n Resources collection
- `src/admin/README.md` - Admin folder documentation

**Resources System:**
- `src/resources/en/*.md` - English resource items (frontmatter-only)
- `src/resources/fr/*.md` - French resource items (frontmatter-only)
- `src/resources/resources.11tydata.js` - Auto-toggle generation for cross-language linking

**Template Pages:**
- `src/main/en/resources-and-tools/additional-resources.njk` - Dynamic template for EN page
- `src/main/fr/ressources-et-outils/ressources-additionnelles.njk` - Dynamic template for FR page
- `src/main/en/resources-and-tools/additional-resources.11tydata.js` - Custom TOC generation for EN
- `src/main/fr/ressources-et-outils/ressources-additionnelles.11tydata.js` - Custom TOC generation for FR

**Data & Configuration:**
- `src/_data/resourceTopics.js` - Topic definitions with labels, order, descriptions, and helper functions
- `eleventy/plugins/collections-plugin.js` - Resource collections with topic label-to-key conversion

**Documentation:**
- `docs/implementation/decap-cms-implementation.md` - Complete implementation details
- `DECAP-CMS-SETUP.md` - This quick setup guide

### Modified Files:

- `package.json` - Added decap-cms-app and netlify-identity-widget dependencies
- `eleventy/plugins/collections-plugin.js` - Added 4 resource collections
- `eleventy/config/passthrough.js` - Added admin folder passthrough
- `src/_includes/partials/head.njk` - Added Netlify Identity widget
- `src/main/en/resources-and-tools/additional-resources.njk` - Dynamic template for displaying resources
- `src/main/fr/ressources-et-outils/ressources-additionnelles.njk` - Dynamic template for displaying resources

## 🚀 Prerequisites and Setup

### User Requirements

**All CMS users must:**
- Have a GitHub account
- Have **write access** to the `gc-da11yn/gc-da11yn.github.io` repository
- Be added as a collaborator or be part of a team with write permissions

### Adding Users to Repository

1. Go to repository settings: https://github.com/gc-da11yn/gc-da11yn.github.io/settings/access
2. Click **"Add people"** or **"Manage access"**
3. Search for the user's GitHub username
4. Grant **"Write"** or **"Maintain"** role
5. User will receive an invitation to accept

### First-Time CMS Access

1. **Navigate to CMS**: `https://a11ycanada.netlify.app/admin/`
2. **Click "Login with GitHub"**
3. **Authorize Decap CMS**: First-time users will see a GitHub OAuth authorization screen requesting access to "Public and private" repositories
   
   **⚠️ Important**: Despite the broad warning message, Decap CMS only accesses the `gc-da11yn/gc-da11yn.github.io` repository specified in the configuration. It cannot read or write to your other repositories. This is standard behavior for GitHub OAuth Apps used by Git-based CMS tools.

4. **Click "Authorize"** to grant the CMS access
5. **Start editing**: You'll be redirected to the CMS dashboard

## 🧪 Testing Locally

### Option 1: With Local Backend (Recommended for Development)

1. **Start the local backend server:**
   ```bash
   npx decap-server
   ```
   Leave this running in a terminal window.

2. **Uncomment the local backend line** in `src/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

3. **Start the Eleventy dev server** (in another terminal):
   ```bash
   npm start
   ```

4. **Access the CMS:**
   - Navigate to `http://localhost:8080/admin/`
   - Use any email/password for local testing

5. **When done testing:**
   - Re-comment the `local_backend: true` line before committing

### Option 2: Without Local Backend (Production-like)

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm run start-prod
   ```

3. **Access at:** `http://localhost:8080/admin/`
   - Requires Netlify Identity to be configured

## 📝 Using the CMS

### Editorial Workflow

The CMS uses an **editorial workflow** with pull requests for content review:

1. **Draft** → Work on content (saved locally in browser)
2. **In Review** → Creates a pull request automatically when you click "Set status: In review"
3. **Ready** → Marks PR as ready (approval happens in GitHub, not CMS)

**Important:** Final approval and merging must be done in GitHub, not through the CMS interface.

### Adding a New Resource

1. **Log in** at `https://a11ycanada.netlify.app/admin/` with GitHub
2. Click **Resources** collection
3. Click **New Resources**
4. **Fill in the fields:**
   - **Title**: Switch between EN/FR tabs to enter both languages
   - **Description**: Enter brief description in both languages (supports HTML like `<abbr>`, `<strong>`)
   - **URL**: Enter link (shared field, appears once)
   - **Topic**: Select category from dropdown (full labels: "Learning", "Development", etc.)
   - **Language Availability**: Choose "both" (default), "en", or "fr"
   - **Internal Links**: Toggle on if resource requires GC network access
   - **Resource Type**: Select "Standard resource" (default), "Parent resource", or "Child resource"
   - **Parent Resource**: If child resource, select the parent from filtered dropdown
5. **Save** to create a draft
6. **Set status: In review** → This creates a pull request
7. **Netlify creates a deploy preview** for the PR automatically
8. **Review and approve in GitHub** → Merge the PR to publish changes

### Editing an Existing Resource

1. **Log in** to CMS with GitHub
2. Click **Resources** collection
3. **Find and click** the resource to edit
4. **Update fields** as needed (use language tabs for title/description)
5. **Save** and **Set status: In review** to create/update PR
6. **Further edits** will update the same PR branch
7. **Merge PR in GitHub** to publish changes

### Understanding Language Availability

- **both** (default): Resource appears on both EN and FR pages without language indicator
- **en**: English-only resource, appears on FR page with "(en anglais seulement)" label
- **fr**: French-only resource, appears on EN page with "(in French only)" label

### Resource Topics

Resources are organized into 6 topics (alphabetically sorted per language):

**English:** Accessible meetings and events, Development, Learning, Policy, Procurement, Services

**French:** Apprentissage, Approvisionnement, Développement, Politique, Réunions et événements accessibles, Services

### Content Editor Features

- **Topic organization:** Filter by 6 topics (Learning, Development, etc.) or group resources by topic
- **View controls:** Use `view_filters` for quick filtering, toggle "Group by Topic" for organized display
- **Parent/child resources:** Create hierarchical resource collections (parent with related children)
- **Bilingual entry** with language tabs for title and description
- **Shared metadata** for URL, topic, and flags
- **Auto-toggle generation** for cross-language linking
- **Media library** for future image uploads
- **Editorial workflow** with pull request creation
- **Deploy previews** for PR review via Netlify
- **GitHub attribution:** All commits show your GitHub username

## 🔒 Security and Access

- **GitHub repository access required:** Only users with write permissions can use CMS
- **Git attribution:** All changes tracked to individual GitHub accounts
- **Pull request workflow:** Mandatory review process before merging
- **Role-based access:** Managed through GitHub repository permissions

## 📚 Documentation

For complete details, see:
- **Implementation docs:** `docs/implementation/decap-cms-implementation.md`
- **Admin folder README:** `src/admin/README.md`
- **Decap CMS docs:** [decapcms.org/docs](https://decapcms.org/docs/)
- **GitHub backend docs:** [decapcms.org/docs/github-backend](https://decapcms.org/docs/github-backend/)

## ⚠️ Important Configuration Notes

### Backend Configuration

The CMS uses GitHub backend with editorial workflow:

```yaml
backend:
  name: github
  repo: gc-da11yn/gc-da11yn.github.io
  branch: main
```

**How it works:**
- Pull requests are created automatically when you set status to "In review"
- PRs target the `main` branch
- Netlify creates deploy previews for each PR
- Merge PRs in GitHub to publish changes

### Collections Available

1. **Resources** (Bilingual i18n collection)
   - Location: `src/resources/en/` and `src/resources/fr/`
   - Structure: Frontmatter-only markdown files
   - Single entry point with language tabs for title and description
   - Auto-generated cross-language toggle links
   - Topic organization: Full labels stored in frontmatter ("Learning"), converted to keys by collections plugin
   - Parent/child support: `resourceType` field (standard/parent/child), `parentResource` relation
   - View controls: Filter by topic with `view_filters`, group by topic with `view_groups`

### How Resources Display

- **Additional Resources pages** query resources from Eleventy collections via `resourcesByTopicEn` and `resourcesByTopicFr`
- **Topic labels** stored as full text in frontmatter ("Learning", "Development"), converted to keys by collections plugin
- **Topics sorted alphabetically** in each language on rendered pages
- **Parent/child hierarchy:** Parent resources shown with nested child resources as sublist items
- **All resources shown** on both language pages
- **Language indicators** for single-language resources:
  - EN page shows "(in French only)" for FR-only resources
  - FR page shows "(en anglais seulement)" for EN-only resources
- **Topic descriptions** appear below some topic headings (e.g., "Accessible meetings and events")

### Media Files

- **Upload location:** `src/_images/`
- **Public URL:** `/img/`
- Automatically handled by Eleventy build

## 🐛 Troubleshooting

### Can't access CMS locally

- Ensure `decap-server` is running
- Check `local_backend: true` is uncommented in config
- Verify Eleventy dev server is running

### Can't log in to CMS

- Verify you have a GitHub account
- Check you have **write access** to the repository
- Try logging out and back in to refresh GitHub OAuth

### Changes not appearing in PR

- Check if you clicked "Set status: In review" to create the PR
- Verify the PR was created in GitHub
- Wait for Netlify deploy preview to build

### Can't merge changes

- Pull requests must be merged in GitHub, not in the CMS
- Check that PR has been approved by required reviewers
- Verify CI checks are passing

## 📞 Support

For questions or issues:

1. Check `docs/implementation/decap-cms-implementation.md`
2. Review Decap CMS documentation
3. Verify GitHub repository permissions
4. Contact the development team

---

**Status:** ✅ Ready for production
**CMS URL:** https://a11ycanada.netlify.app/admin/
**Branch:** feature/decapCMS

---

<div lang="fr" id="francais">

([English](#decap-cms-quick-setup-guide))

</div>

# Guide de configuration rapide de Decap CMS

## ✅ Ce qui a été mis en œuvre

Decap CMS a été installé et configuré avec succès pour la Boîte à outils de l'accessibilité numérique. Le CMS gère les éléments de ressources individuels pour la page Ressources additionnelles avec un support bilingue complet (anglais/français).

## 📋 Fichiers créés/modifiés

### Fichiers créés :

**Interface d'administration :**

- `src/admin/index.html` - Point d'entrée de l'interface d'administration CMS
- `src/admin/config.yml` - Configuration CMS avec collection Ressources i18n
- `src/admin/README.md` - Documentation du dossier d'administration

**Système de ressources :**

- `src/resources/en/*.md` - Éléments de ressources en anglais (frontmatter uniquement)
- `src/resources/fr/*.md` - Éléments de ressources en français (frontmatter uniquement)
- `src/resources/resources.11tydata.js` - Génération automatique de bascule pour liaison inter-langues

**Pages modèles :**

- `src/main/en/resources-and-tools/additional-resources.njk` - Modèle dynamique pour la page EN
- `src/main/fr/ressources-et-outils/ressources-additionnelles.njk` - Modèle dynamique pour la page FR

**Données et configuration :**

- `src/_data/resourceTopics.js` - Définitions de sujets avec étiquettes, ordre, descriptions et fonctions d'aide
- `eleventy/plugins/collections-plugin.js` - Collections de ressources avec conversion étiquette-vers-clé
- `src/pages/en/additional-resources.11tydata.js` - Génération de TDM personnalisée pour page EN
- `src/pages/fr/ressources-additionnelles.11tydata.js` - Génération de TDM personnalisée pour page FR

**Documentation :**

- `docs/implementation/decap-cms-implementation.md` - Détails complets de mise en œuvre
- `DECAP-CMS-SETUP.md` - Ce guide de configuration rapide

### Fichiers modifiés :

- `package.json` - Ajout des dépendances decap-cms-app et netlify-identity-widget
- `eleventy/plugins/collections-plugin.js` - Ajout de 4 collections de ressources
- `eleventy/config/passthrough.js` - Ajout de passthrough pour le dossier admin
- `src/_includes/partials/head.njk` - Ajout du widget Netlify Identity
- `src/main/en/resources-and-tools/additional-resources.njk` - Converti de .md à .njk
- `src/main/fr/ressources-et-outils/ressources-additionnelles.njk` - Converti de .md à .njk

## 🚀 Prérequis et configuration

### Exigences pour les utilisateurs

**Tous les utilisateurs du CMS doivent :**

- Avoir un compte GitHub
- Avoir un **accès en écriture** au dépôt `gc-da11yn/gc-da11yn.github.io`
- Être ajouté comme collaborateur ou faire partie d'une équipe avec des permissions d'écriture

### Ajouter des utilisateurs au dépôt

1. Accédez aux paramètres du dépôt : https://github.com/gc-da11yn/gc-da11yn.github.io/settings/access
2. Cliquez sur **"Add people"** ou **"Manage access"**
3. Recherchez le nom d'utilisateur GitHub de l'utilisateur
4. Accordez le rôle **"Write"** ou **"Maintain"**
5. L'utilisateur recevra une invitation à accepter

### Premier accès au CMS

1. **Accédez au CMS** : `https://a11ycanada.netlify.app/admin/`
2. **Cliquez sur "Login with GitHub"**
3. **Autorisez Decap CMS** : Les nouveaux utilisateurs verront un écran d'autorisation OAuth GitHub demandant l'accès aux dépôts "Public and private"
   
   **⚠️ Important** : Malgré le message d'avertissement large, Decap CMS accède uniquement au dépôt `gc-da11yn/gc-da11yn.github.io` spécifié dans la configuration. Il ne peut pas lire ou écrire dans vos autres dépôts. Il s'agit du comportement standard des applications OAuth GitHub utilisées par les outils CMS basés sur Git.

4. **Cliquez sur "Authorize"** pour accorder l'accès
5. **Commencez à éditer** : Vous serez redirigé vers le tableau de bord du CMS

## 🧪 Tests locaux

### Option 1 : Avec backend local (Recommandé pour le développement)

1. **Démarrez le serveur backend local :**
   ```bash
   npx decap-server
   ```
   Laissez-le en cours d'exécution dans une fenêtre de terminal.

2. **Décommentez la ligne de backend local** dans `src/admin/config.yml` :
   ```yaml
   local_backend: true
   ```

3. **Démarrez le serveur de développement Eleventy** (dans un autre terminal) :
   ```bash
   npm start
   ```

4. **Accédez au CMS :**
   - Naviguez vers `http://localhost:8080/admin/`
   - Utilisez n'importe quel e-mail/mot de passe pour les tests locaux

5. **Lorsque les tests sont terminés :**
   - Recommentez la ligne `local_backend: true` avant de valider

### Option 2 : Sans backend local (Similaire à la production)

1. **Construisez le site :**
   ```bash
   npm run build
   ```

2. **Démarrez le serveur de production :**
   ```bash
   npm run start-prod
   ```

3. **Accédez à :** `http://localhost:8080/admin/`
   - Nécessite que Netlify Identity soit configuré

## 📝 Utiliser le CMS

### Flux de travail éditorial

Le CMS utilise un **flux de travail éditorial** avec des demandes de tirage (pull requests) pour la révision du contenu :

1. **Brouillon (Draft)** → Travailler sur le contenu (sauvegardé localement dans le navigateur)
2. **En révision (In Review)** → Crée une demande de tirage automatiquement lorsque vous cliquez sur "Set status: In review"
3. **Prêt (Ready)** → Marque la PR comme prête (l'approbation se fait dans GitHub, pas dans le CMS)

**Important :** L'approbation finale et la fusion doivent être effectuées dans GitHub, pas via l'interface du CMS.

### Ajouter une nouvelle ressource

1. **Connectez-vous** à `https://a11ycanada.netlify.app/admin/` avec GitHub
2. Cliquez sur la collection **Resources**
3. Cliquez sur **New Resources**
4. **Remplissez les champs :**
   - **Title** : Basculez entre les onglets EN/FR pour entrer les deux langues
   - **Description** : Entrez une brève description dans les deux langues (prend en charge HTML comme `<abbr>`, `<strong>`)
   - **URL** : Entrez le lien (champ partagé, apparaît une fois)
   - **Topic** : Sélectionnez la catégorie dans le menu déroulant (étiquettes complètes : "Apprentissage", "Développement", etc.)
   - **Language Availability** : Choisissez "both" (par défaut), "en" ou "fr"
   - **Internal Links** : Activez si la ressource nécessite un accès au réseau du GC
   - **Resource Type** : Sélectionnez "Standard resource" (par défaut), "Parent resource" ou "Child resource"
   - **Parent Resource** : Si ressource enfant, sélectionnez le parent dans le menu déroulant filtré
5. **Enregistrez** pour créer un brouillon
6. **Set status: In review** → Cela crée une demande de tirage
7. **Netlify crée un aperçu de déploiement** pour la PR automatiquement
8. **Révisez et approuvez dans GitHub** → Fusionnez la PR pour publier les modifications

### Modifier une ressource existante

1. **Connectez-vous** au CMS avec GitHub
2. Cliquez sur la collection **Resources**
3. **Trouvez et cliquez** sur la ressource à modifier
4. **Mettez à jour les champs** au besoin (utilisez les onglets de langue pour title/description)
5. **Enregistrez** et **Set status: In review** pour créer/mettre à jour la PR
6. **D'autres modifications** mettront à jour la même branche PR
7. **Fusionnez la PR dans GitHub** pour publier les modifications

### Comprendre la disponibilité linguistique

- **both** (par défaut) : La ressource apparaît sur les pages EN et FR sans indicateur de langue
- **en** : Ressource en anglais seulement, apparaît sur la page FR avec l'étiquette "(en anglais seulement)"
- **fr** : Ressource en français seulement, apparaît sur la page EN avec l'étiquette "(in French only)"

### Sujets de ressources

Les ressources sont organisées en 6 sujets (triés alphabétiquement par langue) :

**Anglais :** Accessible meetings and events, Development, Learning, Policy, Procurement, Services

**Français :** Apprentissage, Approvisionnement, Développement, Politique, Réunions et événements accessibles, Services

### Fonctionnalités pour l'éditeur de contenu

- **Organisation par sujets :** Filtrer par 6 sujets (Apprentissage, Développement, etc.) ou regrouper les ressources par sujet
- **Contrôles d'affichage :** Utiliser `view_filters` pour filtrage rapide, activer "Group by Topic" pour affichage organisé
- **Ressources parent/enfant :** Créer des collections de ressources hiérarchiques (parent avec enfants associés)
- **Entrée bilingue** avec onglets de langue pour titre et description
- **Métadonnées partagées** pour URL, sujet et indicateurs
- **Génération automatique de bascule** pour liaison inter-langues
- **Bibliothèque multimédia** pour futurs téléchargements d'images
- **Flux de travail éditorial** avec création de demandes de tirage
- **Aperçus de déploiement** pour révision des PR via Netlify
- **Attribution GitHub :** Tous les commits affichent votre nom d'utilisateur GitHub

## 🔒 Sécurité et accès

- **Accès au dépôt GitHub requis :** Seuls les utilisateurs avec des permissions d'écriture peuvent utiliser le CMS
- **Attribution Git :** Tous les changements sont suivis aux comptes GitHub individuels
- **Flux de travail par demandes de tirage :** Processus de révision obligatoire avant fusion
- **Accès basé sur les rôles :** Géré via les permissions du dépôt GitHub

## 📚 Documentation

Pour des détails complets, consultez :

- **Documentation de mise en œuvre :** `docs/implementation/decap-cms-implementation.md`
- **README du dossier admin :** `src/admin/README.md`
- **Documentation Decap CMS :** [decapcms.org/docs](https://decapcms.org/docs/)
- **Documentation backend GitHub :** [decapcms.org/docs/github-backend](https://decapcms.org/docs/github-backend/)

## ⚠️ Notes de configuration importantes

### Configuration du backend

Le CMS utilise le backend GitHub avec flux de travail éditorial :

```yaml
backend:
  name: github
  repo: gc-da11yn/gc-da11yn.github.io
  branch: main
```

**Comment ça fonctionne :**

- Les demandes de tirage sont créées automatiquement lorsque vous définissez le statut sur "In review"
- Les PR ciblent la branche `main`
- Netlify crée des aperçus de déploiement pour chaque PR
- Fusionnez les PR dans GitHub pour publier les modifications

### Collections disponibles

1. **Resources** (Collection bilingue i18n)
   - Emplacement : `src/resources/en/` et `src/resources/fr/`
   - Structure : Fichiers markdown frontmatter uniquement
   - Point d'entrée unique avec onglets de langue pour titre et description
   - Liens de bascule inter-langues générés automatiquement
   - Organisation par sujets : Étiquettes complètes stockées dans frontmatter ("Apprentissage"), converties en clés par plugin collections
   - Support parent/enfant : Champ `resourceType` (standard/parent/child), relation `parentResource`
   - Contrôles d'affichage : Filtrer par sujet avec `view_filters`, regrouper par sujet avec `view_groups`

### Comment les ressources s'affichent

- **Les pages Ressources additionnelles** interrogent les ressources des collections Eleventy via `resourcesByTopicEn` et `resourcesByTopicFr`
- **Étiquettes de sujets** stockées en texte complet dans frontmatter ("Apprentissage", "Développement"), converties en clés par plugin collections
- **Sujets triés alphabétiquement** dans chaque langue sur les pages rendues
- **Hiérarchie parent/enfant :** Ressources parents affichées avec ressources enfants associées comme éléments de sous-liste
- **Toutes les ressources affichées** sur les deux pages de langue
- **Indicateurs de langue** pour les ressources en une seule langue :
  - La page EN affiche "(in French only)" pour les ressources FR uniquement
  - La page FR affiche "(en anglais seulement)" pour les ressources EN uniquement
- **Descriptions de sujets** apparaissent sous certains titres de sujets (par ex., "Réunions et événements accessibles")

### Fichiers multimédias

- **Emplacement de téléchargement :** `src/_images/`
- **URL publique :** `/img/`
- Géré automatiquement par la construction Eleventy

## 🐛 Dépannage

### Impossible d'accéder au CMS localement

- Assurez-vous que `decap-server` est en cours d'exécution
- Vérifiez que `local_backend: true` est décommenté dans la configuration
- Vérifiez que le serveur de développement Eleventy est en cours d'exécution

### Impossible de se connecter au CMS

- Vérifiez que vous avez un compte GitHub
- Vérifiez que vous avez un **accès en écriture** au dépôt
- Essayez de vous déconnecter et de vous reconnecter pour actualiser l'OAuth GitHub

### Les modifications n'apparaissent pas dans la PR

- Vérifiez si vous avez cliqué sur "Set status: In review" pour créer la PR
- Vérifiez que la PR a été créée dans GitHub
- Attendez que l'aperçu de déploiement Netlify soit construit

### Impossible de fusionner les modifications

- Les demandes de tirage doivent être fusionnées dans GitHub, pas dans le CMS
- Vérifiez que la PR a été approuvée par les réviseurs requis
- Vérifiez que les vérifications CI sont réussies

## 📞 Support

Pour les questions ou problèmes :

1. Consultez `docs/implementation/decap-cms-implementation.md`
2. Consultez la documentation Decap CMS
3. Vérifiez les permissions du dépôt GitHub
4. Contactez l'équipe de développement

---

**Statut :** ✅ Prêt pour la production
**URL du CMS :** https://a11ycanada.netlify.app/admin/

**Statut :** ✅ Prêt pour les tests
**Prochaine action :** Configurer Netlify Identity et inviter des utilisateurs
**Branche :** feature/decapCMS

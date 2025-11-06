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

## 🚀 Next Steps for Production Deployment

### 1. Enable Netlify Identity

1. Go to your Netlify site dashboard at [app.netlify.com](https://app.netlify.com)
2. Select your site (gc-da11yn)
3. Navigate to **Settings** → **Identity**
4. Click **Enable Identity**

### 2. Configure Git Gateway

1. In Identity settings, scroll to **Services**
2. Click **Enable Git Gateway**
3. This allows the CMS to commit changes to GitHub

### 3. Set Registration to Invite Only

1. In Identity settings, go to **Registration**
2. Change to **Invite only** (recommended for government sites)
3. This prevents unauthorized access

### 4. Invite Content Editors

1. Go to the **Identity** tab in your site dashboard
2. Click **Invite users**
3. Enter email addresses of authorized content editors
4. They'll receive invitation emails

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

### Adding a New Resource

1. **Log in** at `/admin/`
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
6. **Publish** → **Publish now** to commit to Git

### Editing an Existing Resource

1. **Log in** to CMS
2. Click **Resources** collection
3. **Find and click** the resource to edit
4. **Update fields** as needed (use language tabs for title/description)
5. **Save** and **Publish**

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
- **Preview** changes before publishing
- **Editorial workflow** for review process (can be enabled)
- **Automatic Git commits** with your user attribution

## 🔒 Security Notes

- **Invite only:** Only invited users can access the CMS
- **Git attribution:** All changes tracked to user accounts
- **Editorial workflow:** Optional review process before publishing
- **Role-based access:** Configure in Netlify Identity settings

## 📚 Documentation

For complete details, see:
- **Implementation docs:** `docs/implementation/decap-cms-implementation.md`
- **Admin folder README:** `src/admin/README.md`
- **Decap CMS docs:** [decapcms.org/docs](https://decapcms.org/docs/)
- **Netlify Identity docs:** [docs.netlify.com/visitor-access/identity/](https://docs.netlify.com/visitor-access/identity/)

## ⚠️ Important Configuration Notes

### Branch Setting

The CMS is currently configured to commit to the `main` branch:

```yaml
backend:
  name: git-gateway
  branch: main
```

**For testing on this branch (feature/decapCMS):**

Change the branch in `src/admin/config.yml`:
```yaml
backend:
  name: git-gateway
  branch: feature/decapCMS  # Change this to your current branch
```

**Remember to change it back to `main` before merging!**

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
- Check `local_backend: true` is uncommented
- Verify Eleventy dev server is running

### Changes not appearing
- Check if changes were published (not just saved)
- Wait for build to complete
- Clear browser cache

### Authentication issues in production
- Verify Netlify Identity is enabled
- Check Git Gateway is configured
- Confirm user has been invited

## 📞 Support

For questions or issues:
1. Check `docs/implementation/decap-cms-implementation.md`
2. Review Decap CMS documentation
3. Check Netlify dashboard for Identity status
4. Contact the development team

---

**Status:** ✅ Ready for testing
**Next Action:** Configure Netlify Identity and invite users
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

## 🚀 Prochaines étapes pour le déploiement en production

### 1. Activer Netlify Identity

1. Accédez au tableau de bord de votre site Netlify sur [app.netlify.com](https://app.netlify.com)
2. Sélectionnez votre site (gc-da11yn)
3. Naviguez vers **Settings** → **Identity**
4. Cliquez sur **Enable Identity**

### 2. Configurer Git Gateway

1. Dans les paramètres Identity, faites défiler jusqu'à **Services**
2. Cliquez sur **Enable Git Gateway**
3. Cela permet au CMS de valider les modifications dans GitHub

### 3. Définir l'inscription sur invitation uniquement

1. Dans les paramètres Identity, allez à **Registration**
2. Changez pour **Invite only** (recommandé pour les sites gouvernementaux)
3. Cela empêche l'accès non autorisé

### 4. Inviter les éditeurs de contenu

1. Accédez à l'onglet **Identity** dans le tableau de bord de votre site
2. Cliquez sur **Invite users**
3. Entrez les adresses e-mail des éditeurs de contenu autorisés
4. Ils recevront des e-mails d'invitation

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

### Ajouter une nouvelle ressource

1. **Connectez-vous** à `/admin/`
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
6. **Publiez** → **Publish now** pour valider dans Git

### Modifier une ressource existante

1. **Connectez-vous** au CMS
2. Cliquez sur la collection **Resources**
3. **Trouvez et cliquez** sur la ressource à modifier
4. **Mettez à jour les champs** au besoin (utilisez les onglets de langue pour title/description)
5. **Enregistrez** et **Publiez**

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
- **Aperçu** des modifications avant publication
- **Flux de travail éditorial** pour processus de révision (peut être activé)
- **Validations Git automatiques** avec attribution de votre utilisateur

## 🔒 Notes de sécurité

- **Invitation uniquement :** Seuls les utilisateurs invités peuvent accéder au CMS
- **Attribution Git :** Tous les changements suivis aux comptes d'utilisateur
- **Flux de travail éditorial :** Processus de révision optionnel avant publication
- **Accès basé sur les rôles :** Configurer dans les paramètres Netlify Identity

## 📚 Documentation

Pour des détails complets, consultez :

- **Documentation de mise en œuvre :** `docs/implementation/decap-cms-implementation.md`
- **README du dossier admin :** `src/admin/README.md`
- **Documentation Decap CMS :** [decapcms.org/docs](https://decapcms.org/docs/)
- **Documentation Netlify Identity :** [docs.netlify.com/visitor-access/identity/](https://docs.netlify.com/visitor-access/identity/)

## ⚠️ Notes de configuration importantes

### Paramètre de branche

Le CMS est actuellement configuré pour valider dans la branche `main` :

```yaml
backend:
  name: git-gateway
  branch: main
```

**Pour les tests sur cette branche (feature/decapCMS) :**

Changez la branche dans `src/admin/config.yml` :

```yaml
backend:
  name: git-gateway
  branch: feature/decapCMS  # Changez ceci pour votre branche actuelle
```

**N'oubliez pas de le remettre à `main` avant la fusion !**

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
- Vérifiez que `local_backend: true` est décommenté
- Vérifiez que le serveur de développement Eleventy est en cours d'exécution

### Les modifications n'apparaissent pas

- Vérifiez si les modifications ont été publiées (pas seulement enregistrées)
- Attendez que la construction soit terminée
- Effacez le cache du navigateur

### Problèmes d'authentification en production

- Vérifiez que Netlify Identity est activé
- Vérifiez que Git Gateway est configuré
- Confirmez que l'utilisateur a été invité

## 📞 Support

Pour les questions ou problèmes :

1. Consultez `docs/implementation/decap-cms-implementation.md`
2. Consultez la documentation Decap CMS
3. Vérifiez le tableau de bord Netlify pour le statut Identity
4. Contactez l'équipe de développement

---

**Statut :** ✅ Prêt pour les tests
**Prochaine action :** Configurer Netlify Identity et inviter des utilisateurs
**Branche :** feature/decapCMS

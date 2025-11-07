<div lang="fr">

([Français](#francais))

</div>

# Decap CMS Admin

This folder contains the Decap CMS (Content Management System) configuration for the Digital Accessibility Toolkit.

## Files

- **index.html**: The CMS admin interface entry point
- **config.yml**: CMS configuration including Resources collection with i18n support

## Access

- **Production**: Navigate to `https://a11ycanada.netlify.app/admin/` (requires GitHub account with repository access)
- **Local Development**: Navigate to `http://localhost:8080/admin/` (requires local backend setup)

## Authentication

The CMS uses **GitHub OAuth** via Netlify's OAuth provider:

- **Login**: Click "Login with GitHub"
- **Requirements**: GitHub account with write access to `gc-da11yn/gc-da11yn.github.io`
- **Workflow**: Changes create pull requests; merge PRs to deploy
- **No Netlify Identity**: Removed in favor of direct GitHub authentication

## What the CMS Manages

### Resources Collection

Individual resource items for the Additional Resources page with bilingual support:

- **Location**: `src/resources/en/` and `src/resources/fr/`
- **Structure**: Frontmatter-only markdown files
- **i18n**: Single entry point with language tabs for title/description
- **Fields**: title, description, url, topic (full labels), resourceType, parentResource, internalLinks, languageAvailability
- **Topics**: 6 categories with full labels ("Learning", "Development", etc.), converted to keys by collections plugin
- **Parent/Child**: Hierarchical resources via resourceType (standard/parent/child) and parentResource relation
- **View Controls**: Filter by topic with view_filters, group by topic with view_groups
- **Display**: Dynamic templates query collections and display alphabetically by topic with parent/child nesting

## Local Development

To test the CMS locally:

1. Install and run the local backend:
   ```bash
   npx decap-server
   ```

2. Uncomment the local backend line in `config.yml`:
   ```yaml
   local_backend: true
   ```

3. Start the Eleventy dev server:
   ```bash
   npm start
   ```

4. Access at `http://localhost:8080/admin/`

## Key Features

- **Bilingual entry**: Add resources in both EN and FR with language tabs
- **Auto-toggle**: Cross-language linking automatically generated
- **Language availability**: Mark resources as "both", "en", or "fr"
- **Topic organization**: 6 topics with full labels in CMS, converted to keys in collections
- **Parent/child resources**: Create hierarchical resource collections (parent with related children)
- **View controls**: Filter resources by topic or toggle "Group by Topic" for organized display
- **Internal links flag**: Indicate GC network-only resources
- **Pull request workflow**: Changes create PRs for review before deployment
- **Individual attribution**: GitHub accounts provide clear authorship of changes

## Documentation

See complete documentation:

- **Implementation details**: `/docs/implementation/decap-cms-implementation.md`
- **Quick setup guide**: `/DECAP-CMS-SETUP.md`
- **Decap CMS docs**: [decapcms.org/docs](https://decapcms.org/docs/)

---

<div lang="fr" id="francais">

([English](#decap-cms-admin))

</div>

# Administration de Decap CMS

Ce dossier contient la configuration du système de gestion de contenu (CMS) Decap pour la Boîte à outils de l'accessibilité numérique.

## Fichiers

- **index.html** : Point d'entrée de l'interface d'administration CMS
- **config.yml** : Configuration CMS incluant la collection Ressources avec support i18n

## Accès

- **Production** : Naviguez vers `https://a11ycanada.netlify.app/admin/` (nécessite un compte GitHub avec accès au dépôt)
- **Développement local** : Naviguez vers `http://localhost:8080/admin/` (nécessite la configuration du backend local)

## Authentification

Le CMS utilise **GitHub OAuth** via le fournisseur OAuth de Netlify :

- **Connexion** : Cliquez sur "Login with GitHub"
- **Exigences** : Compte GitHub avec accès en écriture à `gc-da11yn/gc-da11yn.github.io`
- **Flux de travail** : Les modifications créent des pull requests; fusionner les PR pour déployer
- **Pas de Netlify Identity** : Supprimé en faveur de l'authentification GitHub directe

## Authentification

Le CMS utilise **GitHub OAuth** via le fournisseur OAuth de Netlify :

- **Connexion** : Cliquez sur "Login with GitHub"
- **Exigences** : Compte GitHub avec accès en écriture à `gc-da11yn/gc-da11yn.github.io`
- **Flux de travail** : Les modifications créent des pull requests; fusionner les PR pour déployer
- **Pas de Netlify Identity** : Supprimé en faveur de l'authentification GitHub directe

## Ce que le CMS gère

### Collection Ressources

Éléments de ressources individuels pour la page Ressources additionnelles avec support bilingue :

- **Emplacement** : `src/resources/en/` et `src/resources/fr/`
- **Structure** : Fichiers markdown frontmatter uniquement
- **i18n** : Point d'entrée unique avec onglets de langue pour titre/description
- **Champs** : title, description, url, topic (étiquettes complètes), resourceType, parentResource, internalLinks, languageAvailability
- **Sujets** : 6 catégories avec étiquettes complètes ("Apprentissage", "Développement", etc.), converties en clés par plugin collections
- **Parent/Enfant** : Ressources hiérarchiques via resourceType (standard/parent/child) et relation parentResource
- **Contrôles d'affichage** : Filtrer par sujet avec view_filters, regrouper par sujet avec view_groups
- **Affichage** : Les modèles dynamiques interrogent les collections et affichent alphabétiquement par sujet avec imbrication parent/enfant

## Développement local

Pour tester le CMS localement :

1. Installez et exécutez le backend local :
   ```bash
   npx decap-server
   ```

2. Décommentez la ligne de backend local dans `config.yml` :
   ```yaml
   local_backend: true
   ```

3. Démarrez le serveur de développement Eleventy :
   ```bash
   npm start
   ```

4. Accédez à `http://localhost:8080/admin/`

## Fonctionnalités clés

- **Entrée bilingue** : Ajoutez des ressources en EN et FR avec des onglets de langue
- **Bascule automatique** : Liaison inter-langues générée automatiquement
- **Disponibilité linguistique** : Marquez les ressources comme "both", "en" ou "fr"
- **Organisation par sujet** : 6 sujets avec étiquettes complètes dans CMS, converties en clés dans collections
- **Ressources parent/enfant** : Créer des collections de ressources hiérarchiques (parent avec enfants associés)
- **Contrôles d'affichage** : Filtrer les ressources par sujet ou activer "Group by Topic" pour affichage organisé
- **Indicateur de liens internes** : Indiquez les ressources du réseau du GC uniquement
- **Flux de travail de pull request** : Les modifications créent des PR pour révision avant déploiement
- **Attribution individuelle** : Les comptes GitHub fournissent une paternité claire des modifications

## Documentation

Consultez la documentation complète :

- **Détails de mise en œuvre** : `/docs/implementation/decap-cms-implementation.md`
- **Guide de configuration rapide** : `/DECAP-CMS-SETUP.md`
- **Documentation Decap CMS** : [decapcms.org/docs](https://decapcms.org/docs/)


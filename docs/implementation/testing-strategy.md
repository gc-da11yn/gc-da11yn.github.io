<div lang="fr">

([Français](#Développement))

</div>

# Testing Strategy for Eleventy Refactoring

This document outlines the comprehensive testing strategy for the Digital Accessibility Toolkit Eleventy configuration refactoring project.

## Test Structure

### Directory Organization

```bash
tests/
├── unit/                    # Unit tests for individual modules
├── integration/             # Integration tests for full build process
├── performance/             # Performance benchmarking tests
├── setup.js                # Global test setup and utilities
└── test-sequencer.js       # Custom test execution order
```

### Test Types

#### 1. Unit Tests (`tests/unit/`)

- **Purpose**: Test individual configuration modules in isolation
- **Coverage**: Filters, transforms, collections, passthrough copy, markdown config
- **Benefits**: Fast execution, easy debugging, high confidence in module functionality

**Key Tests:**

- Module loading and initialization
- Filter function correctness (percentage, wordCount, etc.)
- Transform behavior (HTML beautify, CSV BOM, URL capture)
- Collection generation logic
- Passthrough copy configuration
- Markdown processing and TOC generation

#### 2. Integration Tests (`tests/integration/`)

- **Purpose**: Test the complete build process end-to-end
- **Coverage**: Full site generation, file output, content validation
- **Benefits**: Catches integration issues, validates real-world functionality

**Key Tests:**

- Build process completion
- Expected file generation (HTML, CSS, assets)
- Content structure validation (meta tags, language attributes)
- Bilingual content generation
- CSV export with proper encoding
- Sitemap generation
- Error handling (404 pages)

#### 3. Performance Tests (`tests/performance/`)

- **Purpose**: Benchmark build performance and track optimizations
- **Coverage**: Build times, memory usage, file generation efficiency
- **Benefits**: Quantifies improvements, prevents regressions

**Key Tests:**

- Build time measurement and thresholds
- Memory usage monitoring
- Incremental build performance
- Watch mode startup time
- Output file size optimization
- Metrics tracking across phases

## Test Configuration

### Jest Setup

- **Test Environment**: Node.js
- **Timeout**: 5 minutes for build tests
- **Execution Order**: Unit → Integration → Performance
- **Coverage**: Optional (can be enabled with `npm run test:coverage`)

### Environment Variables

- `ELEVENTY_ENV=test` - Ensures test-specific behavior
- `NODE_ENV=test` - Standard Node.js test environment

### Utilities

- **File System Helpers**: Wait for file creation, clean builds
- **Build Helpers**: Execute builds and extract metrics
- **Logging**: Timestamped test output for debugging

## Running Tests

### Development Workflow

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit          # Fast unit tests only
npm run test:integration   # Full build validation
npm run test:performance   # Benchmark tests

# Development helpers
npm run test:watch         # Watch mode for TDD
npm run test:coverage      # Generate coverage report
```

### Continuous Integration

```bash
npm run test:ci            # Optimized for CI/CD pipelines
```

## Quality Assurance: Spellcheck System

### Overview

The project includes an automated spellcheck system that validates content spelling for both English and French:

- **Local Development**: `npm run spellcheck` for manual validation
- **Automated PR Checks**: `.github/workflows/spellcheck-pr.yml` automatically runs on every PR
- **Smart Output**: Source file paths mapped from built HTML for developer-friendly error reporting

### Configuration

**Tool**: CSpell v9.6.4
- **Location**: `.cspell.json`
- **Dictionaries**:
  - `.custom-en.txt` - English-specific terms
  - `.custom-fr.txt` - French-specific terms
  - `.custom-names.txt` - Proper names and acronyms

### GitHub Actions Workflow

**Workflow File**: `.github/workflows/spellcheck-pr.yml`

**Features**:
- Triggers on pull requests with changes to `src/**` only
- Reports results in the PR Checks tab
- Runs in parallel with other checks for efficiency
- Uses path filters to skip unnecessary checks on non-content files

**Steps**:
1. Checkout repository
2. Setup Node.js environment
3. Install dependencies (`npm ci`)
4. Run spellcheck (`npm run spellcheck`)
5. Upload artifacts (7-day retention)

### Path Mapping System

**Implementation**: `scripts/run-quality-checks.js`

The spellcheck output maps errors from built HTML paths to source files:

- **Input**: `_site/en/page-name/index.html:10:5 - Error message`
- **Output**: `src/pages/en/page-name.md:10:5 - Error message`

**Method**: Uses HTML meta tags (`<meta name="source-file" content="...">`) to track source file locations during build process.

**Benefits**:
- Developers see actual source files they work with
- Direct file paths are clickable in many IDE terminals
- Easier to navigate and fix spelling errors
- Terminal-only output without cluttering the workspace

### Development Workflow

**Local Spellcheck**:
```bash
npm run spellcheck
```

**Result**: Displays spelling errors with source file paths in terminal

**Expected Output**:
```
src/pages/en/my-page.md:15:3 - Unknown word
src/pages/fr/ma-page.md:8:10 - Mot inconnu
```

### CI/CD Integration

The spellcheck workflow is automatically triggered on:
- **Pull Request Creation**: When PR includes `src/**` changes
- **Pull Request Updates**: When new commits are pushed to the PR
- **Manual Trigger**: Via GitHub Actions UI if needed

**Output Location**: Results appear in PR Checks tab with pass/fail status and error details

### Performance Considerations

- **File Filtering**: Path filter ensures only changed content is checked, not entire site
- **Caching**: No redundant checks on unchanged files
- **Speed**: PR workflow completes in seconds
- **Overhead**: Minimal impact on overall CI/CD pipeline

### Adding Words to Dictionaries

When legitimate words are flagged as spelling errors:

1. Identify which dictionary file to update:
   - `.custom-en.txt` - English terms
   - `.custom-fr.txt` - French terms
   - `.custom-names.txt` - Proper names and acronyms

2. Add the word (one per line, case-sensitive)

3. Commit the change: `git add .custom-*.txt && git commit`

4. Next PR spellcheck will recognize the new word

### Test Data and Metrics

Tests automatically save performance metrics to `tests/performance/latest-metrics.json`:

- Build time and file count
- Memory usage statistics
- Timestamp and phase information
- Comparison data for tracking improvements

### Expected Thresholds

- **Build Time**: < 5 minutes (300,000ms)
- **Memory Usage**: < 2GB RSS
- **File Generation**: > 250 HTML files
- **CSS Size**: < 500KB compressed
- **Main HTML Size**: < 200KB

## Integration with Refactoring Phases

### Phase 1 Testing (Complete)

- ✅ Validate modular architecture works correctly
- ✅ Ensure no functionality regression
- ✅ Establish performance baseline
- ✅ Verify all modules load and integrate properly

### Phase 2 Testing (Planned)

- Test memoization and caching effectiveness
- Validate conditional loading behavior
- Measure performance improvements (target: 15-30% faster)
- Test environment-specific optimizations

### Phase 3 Testing (Planned)

- Test plugin architecture extensibility
- Validate persistent caching system
- Test feature flag functionality
- Comprehensive performance regression testing

## Maintenance

### Adding New Tests

1. Follow existing test patterns and naming conventions
2. Update this documentation when adding new test categories
3. Ensure tests are isolated and can run in any order
4. Add appropriate timeouts for long-running tests

### Performance Monitoring

1. Review performance metrics after each phase
2. Update thresholds as the project scales
3. Track improvements and identify regressions
4. Document significant performance changes

## Benefits

### For Development

- **Confidence**: Safe refactoring with comprehensive validation
- **Speed**: Fast feedback loop with unit tests
- **Debugging**: Isolated test failures easy to diagnose

### For Deployment

- **Reliability**: Integration tests catch real-world issues
- **Performance**: Benchmark tests prevent performance regressions
- **Automation**: CI/CD pipeline can validate changes automatically

### For Documentation

- **Examples**: Tests serve as usage examples for modules
- **Validation**: Proves refactoring maintains functionality
- **Metrics**: Quantifiable evidence of improvements

---

<div lang="fr">

## Français

## Stratégie de tests pour la refactorisation d'Eleventy (Français)

Ce document décrit la stratégie de tests complète pour le projet de refactorisation de la configuration Eleventy de la boîte à outils d'accessibilité numérique.

### Structure des tests (FR)

#### Organisation des répertoires

```bash
tests/
├── unit/                    # Tests unitaires pour les modules individuels
├── integration/             # Tests d'intégration pour le processus de construction complet
├── performance/             # Tests de performance et de benchmarking
├── setup.js                # Configuration globale des tests et utilitaires
└── test-sequencer.js       # Ordre d'exécution personnalisé des tests
```

#### Types de tests

##### 1. Tests unitaires (`tests/unit/`)

- **Objectif**: Tester les modules de configuration individuels en isolation
- **Couverture**: Filtres, transformations, collections, copie de fichiers, configuration markdown
- **Avantages**: Exécution rapide, débogage facile, haute confiance dans la fonctionnalité des modules

**Tests clés:**

- Chargement et initialisation des modules
- Exactitude des fonctions de filtre (pourcentage, wordCount, etc.)
- Comportement des transformations (embellissement HTML, BOM CSV, capture d'URL)
- Logique de génération de collections
- Configuration de copie de fichiers
- Traitement Markdown et génération de table des matières

##### 2. Tests d'intégration (`tests/integration/`)

- **Objectif**: Tester le processus de construction complet de bout en bout
- **Couverture**: Génération complète du site, sortie de fichiers, validation du contenu
- **Avantages**: Détecte les problèmes d'intégration, valide la fonctionnalité réelle

**Tests clés:**

- Achèvement du processus de construction
- Génération de fichiers attendus (HTML, CSS, assets)
- Validation de la structure du contenu (balises meta, attributs de langue)
- Génération de contenu bilingue
- Export CSV avec encodage approprié
- Génération de plan de site
- Gestion des erreurs (pages 404)

##### 3. Tests de performance (`tests/performance/`)

- **Objectif**: Mesurer les performances de construction et suivre les optimisations
- **Couverture**: Temps de construction, utilisation mémoire, efficacité de génération de fichiers
- **Avantages**: Quantifie les améliorations, prévient les régressions

**Tests clés:**

- Mesure du temps de construction et seuils
- Surveillance de l'utilisation mémoire
- Performance de construction incrémentale
- Temps de démarrage du mode surveillance
- Optimisation de la taille des fichiers de sortie
- Suivi des métriques à travers les phases

### Configuration des tests (FR)

#### Configuration Jest

- **Environnement de test**: Node.js
- **Timeout**: 5 minutes pour les tests de construction
- **Ordre d'exécution**: Unitaire → Intégration → Performance
- **Couverture**: Optionnelle (peut être activée avec `npm run test:coverage`)

#### Variables d'environnement

- `ELEVENTY_ENV=test` - Assure le comportement spécifique aux tests
- `NODE_ENV=test` - Environnement de test standard Node.js

#### Utilitaires

- **Assistants système de fichiers**: Attendre la création de fichiers, nettoyer les constructions
- **Assistants de construction**: Exécuter les constructions et extraire les métriques
- **Journalisation**: Sortie de test avec horodatage pour le débogage

### Exécution des tests (FR)

#### Flux de travail de développement

```bash
# Exécuter tous les tests
npm test

# Exécuter des suites de tests spécifiques
npm run test:unit          # Tests unitaires rapides uniquement
npm run test:integration   # Validation complète de construction
npm run test:performance   # Tests de benchmark

# Assistants de développement
npm run test:watch         # Mode surveillance pour TDD
npm run test:coverage      # Générer un rapport de couverture
```

#### Intégration continue

```bash
npm run test:ci            # Optimisé pour les pipelines CI/CD
```

### Données de test et métriques (FR)

#### Base de performance

Les tests sauvegardent automatiquement les métriques de performance dans `tests/performance/latest-metrics.json`:

- Temps de construction et nombre de fichiers
- Statistiques d'utilisation mémoire
- Horodatage et informations de phase
- Données de comparaison pour suivre les améliorations

#### Seuils attendus

- **Temps de construction**: < 5 minutes (300 000ms)
- **Utilisation mémoire**: < 2Go RSS
- **Génération de fichiers**: > 250 fichiers HTML
- **Taille CSS**: < 500Ko compressé
- **Taille HTML principal**: < 200Ko

### Intégration avec les phases de refactorisation (FR)

#### Tests de la Phase 1 (Terminé)

- ✅ Valider que l'architecture modulaire fonctionne correctement
- ✅ Assurer qu'il n'y a pas de régression fonctionnelle
- ✅ Établir la base de performance
- ✅ Vérifier que tous les modules se chargent et s'intègrent correctement

#### Tests de la Phase 2 (Planifié)

- Tester l'efficacité de la mémorisation et de la mise en cache
- Valider le comportement de chargement conditionnel
- Mesurer les améliorations de performance (objectif: 15-30% plus rapide)
- Tester les optimisations spécifiques à l'environnement

#### Tests de la Phase 3 (Planifié)

- Tester l'extensibilité de l'architecture de plugins
- Valider le système de cache persistant
- Tester la fonctionnalité des indicateurs de fonctionnalités
- Tests complets de régression de performance

### Maintenance (FR)

#### Ajouter de nouveaux tests

1. Suivre les modèles et conventions de nommage existants
2. Mettre à jour cette documentation lors de l'ajout de nouvelles catégories de tests
3. Assurer que les tests sont isolés et peuvent s'exécuter dans n'importe quel ordre
4. Ajouter des timeouts appropriés pour les tests de longue durée

#### Surveillance des performances

1. Examiner les métriques de performance après chaque phase
2. Mettre à jour les seuils à mesure que le projet évolue
3. Suivre les améliorations et identifier les régressions
4. Documenter les changements significatifs de performance

### Avantages (FR)

#### Pour le développement

- **Confiance**: Refactorisation sécurisée avec validation complète
- **Rapidité**: Boucle de rétroaction rapide avec les tests unitaires
- **Débogage**: Échecs de tests isolés faciles à diagnostiquer

#### Pour le déploiement

- **Fiabilité**: Les tests d'intégration détectent les problèmes réels
- **Performance**: Les tests de benchmark préviennent les régressions de performance
- **Automatisation**: Le pipeline CI/CD peut valider les changements automatiquement

#### Pour la documentation

- **Exemples**: Les tests servent d'exemples d'utilisation pour les modules
- **Validation**: Prouve que la refactorisation maintient la fonctionnalité
- **Métriques**: Preuve quantifiable des améliorations

## Assurance qualité : Système de vérification orthographique (FR)

### Aperçu

Le projet comprend un système de vérification orthographique automatisé qui valide l'orthographe du contenu en anglais et en français :

- **Développement local** : `npm run spellcheck` pour la validation manuelle
- **Vérifications automatisées des demandes de tirage** : `.github/workflows/spellcheck-pr.yml` s'exécute automatiquement sur chaque demande de tirage
- **Sortie intelligente** : Chemins de fichiers source mappés à partir du HTML généré pour un rapport d'erreurs convivial pour les développeurs

### Configuration

**Outil** : CSpell v9.6.4
- **Emplacement** : `.cspell.json`
- **Dictionnaires** :
  - `.custom-en.txt` - Termes spécifiques à l'anglais
  - `.custom-fr.txt` - Termes spécifiques au français
  - `.custom-names.txt` - Noms propres et acronymes

### Flux de travail GitHub Actions

**Fichier de flux de travail** : `.github/workflows/spellcheck-pr.yml`

**Fonctionnalités** :
- Se déclenche sur les demandes de tirage avec des modifications à `src/**` uniquement
- Signale les résultats dans l'onglet Vérifications de la demande de tirage
- S'exécute en parallèle avec d'autres vérifications pour l'efficacité
- Utilise les filtres de chemin pour ignorer les vérifications inutiles sur les fichiers sans contenu

**Étapes** :
1. Récupérer le référentiel
2. Configuration de l'environnement Node.js
3. Installation des dépendances (`npm ci`)
4. Exécuter la vérification orthographique (`npm run spellcheck`)
5. Télécharger les artefacts (rétention de 7 jours)

### Système de mappage de chemin

**Implémentation** : `scripts/run-quality-checks.js`

La sortie de vérification orthographique mappe les erreurs des chemins HTML générés aux fichiers source :

- **Entrée** : `_site/en/page-name/index.html:10:5 - Message d'erreur`
- **Sortie** : `src/pages/en/page-name.md:10:5 - Message d'erreur`

**Méthode** : Utilise des balises meta HTML (`<meta name="source-file" content="...">`) pour suivre les emplacements des fichiers source pendant le processus de construction.

**Avantages** :
- Les développeurs voient les fichiers source réels avec lesquels ils travaillent
- Les chemins de fichier directs sont cliquables dans de nombreux terminaux IDE
- Plus facile à naviguer et corriger les erreurs d'orthographe
- Sortie réservée au terminal sans encombrement de l'espace de travail

### Flux de travail de développement

**Vérification orthographique locale** :
```bash
npm run spellcheck
```

**Résultat** : Affiche les erreurs d'orthographe avec les chemins des fichiers source dans le terminal

**Sortie attendue** :
```
src/pages/en/my-page.md:15:3 - Mot inconnu
src/pages/fr/ma-page.md:8:10 - Mot inconnu
```

### Intégration CI/CD

Le flux de travail de vérification orthographique est automatiquement déclenché pour :
- **Création de demande de tirage** : Lorsque la demande de tirage comprend des modifications à `src/**`
- **Mises à jour de demande de tirage** : Lorsque de nouveaux commits sont envoyés vers la demande de tirage
- **Déclenchement manuel** : Via l'interface utilisateur GitHub Actions si nécessaire

**Emplacement de sortie** : Les résultats apparaissent dans l'onglet Vérifications de la demande de tirage avec le statut de réussite/échec et les détails des erreurs

### Considérations de performance

- **Filtrage de fichiers** : Le filtre de chemin garantit que seul le contenu modifié est vérifié, pas l'ensemble du site
- **Mise en cache** : Aucune vérification redondante sur les fichiers inchangés
- **Vitesse** : Le flux de travail de demande de tirage se termine en quelques secondes
- **Surcharge** : Impact minimal sur le pipeline CI/CD global

### Ajouter des mots aux dictionnaires

Lorsque des mots légitimes sont signalés comme erreurs d'orthographe :

1. Identifier le fichier dictionnaire à mettre à jour :
   - `.custom-en.txt` - Termes anglais
   - `.custom-fr.txt` - Termes français
   - `.custom-names.txt` - Noms propres et acronymes

2. Ajouter le mot (un par ligne, sensible à la casse)

3. Valider la modification : `git add .custom-*.txt && git commit`

4. La prochaine vérification orthographique de la demande de tirage reconnaîtra le nouveau mot

### Données de test et métriques

Les tests sauvegardent automatiquement les métriques de performance dans `tests/performance/latest-metrics.json` :

- Temps de construction et nombre de fichiers
- Statistiques d'utilisation mémoire
- Horodatage et informations de phase
- Données de comparaison pour suivre les améliorations

#### Pour la documentation

- **Exemples**: Les tests servent d'exemples d'utilisation pour les modules
- **Validation**: Prouve que la refactorisation maintient la fonctionnalité
- **Métriques**: Preuve quantifiable des améliorations

</div>

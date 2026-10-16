# Automatic redirects for renamed pages

## Scope

English and French page URLs still follow `title | stripTagsSlugify`. Changing a
title or explicit permalink automatically preserves previously published URLs,
provided the source-file path stays the same.

Authors can edit titles normally, including through Decap CMS. No manual alias or
commit to the source branch is required for a normal title change.

The build publishes a versioned `url-history.json` beside the site on `gh-pages`.
Every old address gets a small HTML redirect pointing directly to the latest
address, even after multiple title changes. These pages are generated after
Eleventy renders content, so they do not enter navigation, collections, or the
sitemap. Existing intentional/external redirects are unchanged.

## Build and publication lifecycle

1. `npm run url-history:prepare` reads the previous publication's manifest.
2. On first rollout, it bootstraps from published HTML's `source-file` metadata.
   Missing metadata causes an explicit error rather than incomplete protection.
3. Eleventy compares actual resolved URLs against history, validates ownership,
   and writes redirects plus the updated manifest.
4. Only publication makes that manifest authoritative for the next build.

The `eleventy`, `watch:eleventy`, `serve:port`, `serve-only`, and `debug` npm scripts prepare
history before invoking Eleventy. Consequently normal build, development, CMS,
and Netlify preview entry points use the same mechanism. When invoking Eleventy
directly, prepare history first.

Both production publication paths, including scheduled analytics updates, use
the same build command. Workflow concurrency serializes publication; baseline
preparation happens inside that boundary. Previews never write back to
production. Keep this serialization if adding another publisher.

The repository is chosen in this order:

1. `URL_HISTORY_REPOSITORY`, a Git repository URL or local repository path.
2. The Actions `GITHUB_REPOSITORY`.
3. Netlify's `REPOSITORY_URL`.
4. Local `upstream`, if configured; otherwise `origin`.

The remote `gh-pages` branch is fetched. Fetch errors and malformed history fail
the build. If the manifest previously existed in publication Git history but is
now missing, the build fails rather than forgetting aliases.

## Local, offline, and fork builds

Use an existing local Git ref without fetching URL history:

```sh
URL_HISTORY_REF=upstream/gh-pages npm run build
```

Or reuse a validated snapshot offline:

```sh
URL_HISTORY_REF=upstream/gh-pages npm run url-history:prepare
URL_HISTORY_INPUT="$PWD/.cache/url-history/baseline.json" npm run build
```

`URL_HISTORY_INPUT` may point to any valid version-1 history manifest, including a
test fixture or a copy from a prior publication. The build does not rewrite this
input. This setting only avoids history fetching; existing changed-page tooling
has its own Git behavior.

A genuinely new site with no publication can explicitly initialize empty history:

```sh
URL_HISTORY_INITIALIZE=true npm run build
```

Do not use initialization to bypass a production history error. It does not
import bookmarks from an existing publication.

## Older aliases and source-file moves

Edit [urlHistoryOverrides.json](../../src/_data/urlHistoryOverrides.json) when
importing an older address or moving a source file:

```json
{
  "src/pages/en/new-file-name.md": {
    "aliases": ["/en/an-older-unrecorded-title/"],
    "previousSources": ["src/pages/en/old-file-name.md"]
  }
}
```

The destination source must currently produce a page. `previousSources` transfers
the complete historical URL set; keep the entry in place across builds. The
migration is idempotent. Source identity is repository-relative and uses `/`
separators, with no leading `./`.

An alias is a site-relative English or French path, normally `/en/old-title/` or
`/fr/ancien-titre/`. `.html` paths are supported; `/index.html` is normalized to
the directory address in overrides. Do not include a hostname, deployment prefix,
query, fragment, percent escapes, or non-ASCII characters. Use the actual
ASCII/transliterated URL emitted by this site's slugifier.

Aliases cannot cross locales, overwrite a live page/static asset, or be claimed
by multiple pages. Returning a page to its own former URL is supported.

## Bilingual and accessibility behavior

French and English history are independent. Redirect pages have localized text,
the appropriate `lang`, a descriptive title, one H1, a main landmark, and a native
keyboard-operable link naming the destination.

JavaScript updates the link and uses `location.replace()` to preserve incoming
query strings and fragments. Without JavaScript, an immediate `noscript` refresh
and visible link still reach the page, but arbitrary query/fragment preservation
is not guaranteed. This is an HTML redirect served with HTTP 200, **not a server
301/308**. True HTTP redirects require a production host/proxy change.

URLs in manifests are prefix-free. Redirect links apply `PATH_PREFIX` once,
supporting fork deployments and previews. Canonical URLs point to the current
destination, using the production domain or Netlify's `DEPLOY_URL`.

Existing hard-coded links and old `toggle` title values remain usable through
redirects. Collection links use current URLs. The feature does not rewrite source
links or change home-page/language-switch conventions.

## Limitations and recovery

- Only currently published URLs are imported at rollout. Earlier unrecorded
  addresses require explicit aliases.
- Templates producing multiple pages, such as generated role pages, are reported
  and excluded from source-path identity tracking. Their fixed URLs are still
  protected from redirect overwrites.
- Archived pages that still render are tracked even when excluded from content
  collections. Non-rendering resources and existing intentional redirects are
  not tracked.
- Removed pages retain their history but produce a warning and no redirect
  without a current destination. Supply `previousSources` for a source move.
  Selecting replacements for deleted content is outside this feature.
- Preserving `#section` does not repair an anchor that was itself renamed.
- Full filesystem builds are required; incremental and JSON-only builds fail
  explicitly rather than publish incomplete history.
- Watch builds retain intermediate URLs for that process. Only a publication
  preserves them for future checkouts. History is never reconstructed from
  stale local output.
- The output manifest includes SHA-256 ownership records. On a rebuild, only
  exact owned HTML files are removed before regeneration; externally changed
  owned files cause an error. Unrelated files are not cleaned.
- Never reset `gh-pages` or publish an old artifact as a rollback without
  preserving the latest history. Rebuild the desired content against the latest
  manifest. Recover missing history from publication Git history, then rebuild.
  Do not use orphaned deployment history, which removes this recovery trail.

## Verification

Focused tests use temporary source/output directories and do not edit real pages:

```sh
npx jest --runInBand --runTestsByPath tests/unit/url-history.test.js tests/integration/url-history.test.js
URL_HISTORY_REF=upstream/gh-pages npm run build
PATH_PREFIX=toolkit URL_HISTORY_REF=upstream/gh-pages npm run build
```

Test repeated clean publications A -> B -> C, returning to A, bilingual/archived
pages, source migrations, asset/page collisions, ownership checks, and manifest
loss. Browser verification must additionally exercise actual JavaScript
navigation with query/fragment and a real JavaScript-disabled refresh; inspecting
HTML alone is insufficient.

Implementation verification results:

- Focused Jest command above: **29 tests passed**.
- Normal and `PATH_PREFIX=toolkit` builds above: **passed**, importing 190 current
  published page identities.
- Real Chrome: **passed** query/fragment preservation with JavaScript and
  destination navigation with JavaScript disabled.
- Accessibility review: **no blocking findings**.
- Existing configuration/build suites: **7 pre-existing failures**, reproduced
  in an isolated, unmodified `HEAD` snapshot. Six are caused by the legacy
  configuration test mock missing `addGlobalData`; one expects a CSV BOM that
  the existing export does not produce. These unrelated failures were not changed.

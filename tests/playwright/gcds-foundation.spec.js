const { test, expect } = require("@playwright/test");

const fixtures = [
  {
    path: "/en/gcds-foundation-preview/",
    locale: "en",
    counterpart: "fr",
    counterpartPath: "/fr/gcds-foundation-preview/",
    counterpartLabel: "Français",
    skipLabel: "Skip to main content",
    title: "GC Design System foundation preview",
    contextualHeading: "Digital Accessibility Toolkit",
    contextualLink: "Accessibility in Government of Canada",
    corporateHeading: "Government of Canada Corporate",
    standardLink: "Terms and conditions"
  },
  {
    path: "/fr/gcds-foundation-preview/",
    locale: "fr",
    counterpart: "en",
    counterpartPath: "/en/gcds-foundation-preview/",
    counterpartLabel: "English",
    skipLabel: "Passer au contenu principal",
    title: "Aperçu de la fondation du Système de design GC",
    contextualHeading: "Boîte à outils de l'accessibilité numérique",
    contextualLink: "Accessibilité au gouvernement du Canada",
    corporateHeading: "Organisation du gouvernement du Canada",
    standardLink: "Avis"
  }
];

for (const fixture of fixtures) {
  test(`${fixture.locale} fixture upgrades and supports the skip link`, async ({ page }) => {
    await page.goto(fixture.path);
    await page.waitForFunction(() => customElements.get("gcds-container"));

    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.getByRole("banner")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(fixture.title);
    await expect(page.locator("html")).toHaveAttribute("lang", fixture.locale);

    const counterpart = page.locator("[data-counterpart]");
    await expect(counterpart).toHaveAttribute("href", fixture.counterpartPath);
    await expect(counterpart).toHaveAttribute("lang", fixture.counterpart);
    await expect(counterpart).toHaveAttribute("hreflang", fixture.counterpart);
    await expect(counterpart).toHaveAttribute("translate", "no");
    await expect(counterpart).toHaveText(fixture.counterpartLabel);

    const navigation = page.locator("gcds-side-nav");
    await expect(navigation).toBeVisible();
    await expect(navigation.locator("gcds-nav-link")).toHaveCount(6);
    await expect(navigation.locator("gcds-nav-link[current]")).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Accessibility Fundamentals" }).or(
      page.getByRole("link", { name: "Principes de base de l’accessibilité" })
    )).toBeVisible();
    await expect(page.locator("gcds-search")).toBeVisible();
    await expect(page.locator("gcds-search")).toHaveAttribute("placeholder", "Canada.ca");
    await expect(page.locator("gcds-breadcrumbs")).toBeVisible();
    await expect(page.locator(`gcds-breadcrumbs-item[href="/${fixture.locale}/"]`)).toBeVisible();
    await page.setViewportSize({ width: 1280, height: 900 });
    const navigationBox = await navigation.boundingBox();
    const mainBox = await page.locator("main").boundingBox();
    expect(navigationBox.x).toBeLessThan(mainBox.x);

    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: fixture.skipLabel, exact: true });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test(`${fixture.locale} fixture keeps native content without JavaScript`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(fixture.path);

    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.getByRole("banner")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(fixture.title);
    await expect(page.locator("[data-counterpart]")).toBeVisible();
    await expect(page.locator(".gcds-site-nav-fallback")).toBeVisible();
    await expect(page.locator(".gcds-site-nav-fallback a")).toHaveCount(6);
    await expect(page.locator(".gcds-search-fallback")).toBeVisible();
    await expect(page.locator(".gcds-breadcrumbs-fallback")).toBeVisible();
    const skipLink = page.getByRole("link", { name: fixture.skipLabel, exact: true });
    await expect(skipLink).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
    const fallbackFooter = page.locator(".gcds-footer-fallback");
    await expect(page.locator("gcds-footer")).toBeHidden();
    await expect(fallbackFooter).toBeVisible();
    await expect(fallbackFooter.getByRole("contentinfo")).toHaveCount(0);
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
    await expect(fallbackFooter.getByRole("heading", { name: fixture.contextualHeading })).toBeVisible();
    const contextualLink = fallbackFooter.getByRole("link", { name: fixture.contextualLink });
    await expect(contextualLink).toBeVisible();
    await expect(fallbackFooter.getByRole("link", { name: fixture.standardLink })).toBeVisible();
    await contextualLink.focus();
    await expect(contextualLink).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(fallbackFooter.getByRole("link").nth(1)).toBeFocused();
    for (const width of [320, 640, 1280]) {
      await page.setViewportSize({ width, height: 800 });
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(hasHorizontalOverflow).toBe(false);
    }
    await context.close();
  });

  test(`${fixture.locale} fixture keeps native content when GCDS does not upgrade`, async ({ page }) => {
    await page.route("**/gcds/gcds.esm.js", (route) => route.abort());
    await page.goto(fixture.path);

    expect(await page.evaluate(() => customElements.get("gcds-container"))).toBeUndefined();
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.getByRole("banner")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(fixture.title);
    await expect(page.locator("[data-counterpart]")).toBeVisible();
    await expect(page.locator(".gcds-site-nav-fallback")).toBeVisible();
    await expect(page.locator(".gcds-search-fallback")).toBeVisible();
    await expect(page.locator(".gcds-breadcrumbs-fallback")).toBeVisible();
    const fallbackFooter = page.locator(".gcds-footer-fallback");
    await expect(fallbackFooter).toBeVisible();
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
    await expect(fallbackFooter.getByRole("link", { name: fixture.contextualLink })).toBeVisible();
  });
}

test("header layout remains usable at reflow and forced-colour settings", async ({ page }) => {
  await page.goto("/en/gcds-foundation-preview/");
  await page.waitForFunction(() => customElements.get("gcds-container"));

  for (const viewport of [
    { width: 320, height: 800 },
    { width: 640, height: 800 }
  ]) {
    await page.setViewportSize(viewport);
    await expect(page.locator("gcds-side-nav")).toBeVisible();
    await expect(page.locator(".gcds-site-nav-fallback")).toBeHidden();
    await expect(page.locator("gcds-search")).toBeVisible();
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasHorizontalOverflow).toBe(false);
  }

  await page.setViewportSize({ width: 390, height: 844 });
  const menuTrigger = page.locator("gcds-side-nav").getByRole("button").first();
  await expect(menuTrigger).toBeVisible();
  await expect(menuTrigger).toHaveAttribute("aria-expanded", "false");
  await menuTrigger.click();
  await expect(menuTrigger).toHaveAttribute("aria-expanded", "true");
  await expect(menuTrigger).toHaveAccessibleName("Close");
  await expect(page.getByRole("link", { name: "Accessibility Fundamentals" })).toBeVisible();

  await page.emulateMedia({ forcedColors: "active", reducedMotion: "reduce" });
  const skipLink = page.getByRole("link", { name: "Skip to main content", exact: true });
  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
});

for (const fixture of fixtures) {
  test(`${fixture.locale} GCDS footer exposes one landmark and keyboard-accessible links`, async ({ page }) => {
    await page.goto(fixture.path);
    await page.waitForFunction(() => customElements.get("gcds-footer"));

    const footer = page.locator("gcds-footer");
    await expect(footer).toBeVisible();
    await expect(page.locator(".gcds-footer-fallback")).toBeHidden();
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
    await expect(footer.getByRole("heading", { name: fixture.contextualHeading })).toBeVisible();
    await expect(footer.getByRole("heading", { name: fixture.corporateHeading })).toHaveCount(1);
    const contextual = footer.getByRole("link", { name: fixture.contextualLink });
    const nextFooterLink = footer.getByRole("link").nth(1);
    await expect(contextual).toBeVisible();
    await contextual.focus();
    await expect(contextual).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(nextFooterLink).toBeFocused();

    for (const width of [320, 640, 1280]) {
      await page.setViewportSize({ width, height: 800 });
      await expect(footer).toBeVisible();
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(hasHorizontalOverflow).toBe(false);
    }
  });
}

test("translation-suppressed fixture does not advertise a counterpart", async ({ page }) => {
  await page.goto("/en/gcds-foundation-preview-no-translation/");

  await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
  await expect(page.locator("[data-counterpart]")).toHaveCount(0);
});

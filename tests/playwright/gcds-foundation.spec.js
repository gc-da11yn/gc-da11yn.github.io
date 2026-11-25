const { test, expect } = require("@playwright/test");

const fixtures = [
  {
    path: "/en/gcds-foundation-preview/",
    locale: "en",
    counterpart: "fr",
    counterpartPath: "/fr/gcds-foundation-preview/",
    counterpartLabel: "Français",
    title: "GC Design System foundation preview"
  },
  {
    path: "/fr/gcds-foundation-preview/",
    locale: "fr",
    counterpart: "en",
    counterpartPath: "/en/gcds-foundation-preview/",
    counterpartLabel: "English",
    title: "Aperçu de la fondation du Système de design GC"
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
    await expect(page.getByRole("link", { name: "Accessibility Fundamentals" }).or(
      page.getByRole("link", { name: "Principes de base de l’accessibilité" })
    )).toBeVisible();
    await expect(page.locator("gcds-search")).toBeVisible();

    await page.keyboard.press("Tab");
    const skipLink = page.locator('a[href="#main-content"]');
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
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
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
  });
}

test("translation-suppressed fixture does not advertise a counterpart", async ({ page }) => {
  await page.goto("/en/gcds-foundation-preview-no-translation/");

  await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
  await expect(page.locator("[data-counterpart]")).toHaveCount(0);
});

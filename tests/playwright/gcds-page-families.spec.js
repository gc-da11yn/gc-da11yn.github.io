const { test, expect } = require("@playwright/test");

const fixtures = [
  {
    locale: "en",
    routes: {
      home: "/en/gcds-home-preview/",
      landing: "/en/gcds-landing-page-preview/",
      roles: "/en/gcds-role-page-preview/"
    },
    roleNav: "On this page",
    collectionHeading: "Exploring your toolkit",
    skip: "Skip to main content"
  },
  {
    locale: "fr",
    routes: {
      home: "/fr/gcds-home-preview/",
      landing: "/fr/gcds-landing-page-preview/",
      roles: "/fr/gcds-role-page-preview/"
    },
    roleNav: "Sur cette page",
    collectionHeading: "Découvrez votre boîte à outils",
    skip: "Passer au contenu principal"
  }
];

for (const fixture of fixtures) {
  test(`${fixture.locale} page families keep semantic relationships and descriptive links`, async ({ page }) => {
    await page.goto(fixture.routes.home);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(
      page.getByRole("heading", { name: fixture.collectionHeading, level: 2 })
    ).toBeVisible();

    for (const route of Object.values(fixture.routes)) {
      await page.goto(route);
      await expect(page.locator(".gcds-link-grid").first()).toBeVisible();
      const links = page.locator("main .gcds-link-grid a");
      for (const link of await links.all()) {
        await expect(link).toHaveAccessibleName(/\S/);
        const href = await link.getAttribute("href");
        expect(href).not.toMatch(/^\s*$/);
      }
    }

    await page.goto(fixture.routes.landing);
    await expect(page.locator(".gcds-link-grid > section").first()).toBeVisible();
    await expect(page.locator(".gcds-link-grid > ul")).toHaveCount(0);

    await page.goto(fixture.routes.roles);
    const navigation = page.getByRole("navigation", { name: fixture.roleNav });
    await expect(navigation).toBeVisible();
    const roleLabelLists = page.locator(".gcds-role-labels");
    expect(await roleLabelLists.count()).toBeGreaterThan(0);
    for (const list of await roleLabelLists.all()) {
      await expect(list.getByRole("listitem").first()).toBeVisible();
      await expect(list.locator("a, button")).toHaveCount(0);
    }
    const firstRoleLink = navigation.getByRole("link").first();
    await firstRoleLink.focus();
    await expect(firstRoleLink).toBeFocused();
    const target = await firstRoleLink.getAttribute("href");
    await firstRoleLink.press("Enter");
    await expect(page).toHaveURL(new RegExp(`${target.replace("#", "#")}$`));
    await expect(page.locator(target)).toBeFocused();
  });

  for (const state of [
    { name: "without JavaScript", javaScriptEnabled: false },
    { name: "after failed GCDS upgrade", javaScriptEnabled: true, failUpgrade: true }
  ]) {
    test(`${fixture.locale} page families remain available ${state.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        javaScriptEnabled: state.javaScriptEnabled
      });
      const page = await context.newPage();
      if (state.failUpgrade) {
        await page.route("**/gcds/gcds.esm.js", (route) => route.abort());
      }

      for (const route of Object.values(fixture.routes)) {
        await page.goto(route);
        await expect(page.locator(".gcds-link-grid").first()).toBeVisible();
        await expect(page.locator("main .gcds-link-grid a").first()).toBeVisible();
        await expect(page.locator('link[href*="wet-boew"]')).toHaveCount(0);
        await expect(page.locator('script[src*="jquery"]')).toHaveCount(0);
        await expect(page.locator('link[href*="fontawesome"]')).toHaveCount(0);
      }
      await context.close();
    });
  }
}

test("page families reflow at 320px and 200% and 400% zoom", async ({ page }) => {
  for (const fixture of fixtures) {
    for (const route of Object.values(fixture.routes)) {
      await page.goto(route);
      for (const state of [
        { label: "320px", width: 320 },
        { label: "200% equivalent", width: 640 },
        { label: "400% equivalent", width: 320 }
      ]) {
        await page.setViewportSize({ width: state.width, height: 900 });
        const layout = await page.locator(".gcds-link-grid").first().evaluate(
          (element) => ({
            hasHorizontalOverflow:
              document.documentElement.scrollWidth >
              document.documentElement.clientWidth,
            itemsOverflow: [...element.children].some((item) => {
              const bounds = item.getBoundingClientRect();
              return bounds.left < 0 ||
                bounds.right > document.documentElement.clientWidth;
            })
          })
        );
        expect(
          layout.hasHorizontalOverflow,
          `${fixture.locale} ${route} at ${state.label}`
        ).toBe(false);
        expect(
          layout.itemsOverflow,
          `${fixture.locale} ${route} items at ${state.label}`
        ).toBe(false);
        await expect(page.locator(".gcds-link-grid").first()).toBeVisible();
      }
    }
  }
});

test("desktop page-family lists use the available content width", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const fixture of fixtures) {
    await page.goto(fixture.routes.roles);
    const widths = await page.locator(".gcds-page-family-section").evaluateAll(
      (sections) => sections
        .map((section) => ({
          section: section.getBoundingClientRect().width,
          list: section.querySelector(".gcds-link-grid")?.getBoundingClientRect().width
        }))
        .filter(({ list }) => list)
    );
    for (const { section, list } of widths) {
      expect(
        list / section,
        `${fixture.locale} page-family list width`
      ).toBeGreaterThan(0.9);
    }
  }
});

test("page-family links keep visible focus in forced colours", async ({ page }) => {
  await page.emulateMedia({ forcedColors: "active", reducedMotion: "reduce" });
  await page.goto("/fr/gcds-role-page-preview/");
  const link = page.locator(".gcds-role-nav a").first();
  await link.focus();
  await expect(link).toBeFocused();
  const appearance = await link.evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      outlineStyle: style.outlineStyle,
      outlineWidth: parseFloat(style.outlineWidth),
      decoration: style.textDecorationLine
    };
  });
  expect(appearance.outlineStyle).not.toBe("none");
  expect(appearance.outlineWidth).toBeGreaterThan(0);
  expect(appearance.decoration).toContain("underline");
  const labelAppearance = await page.locator(".gcds-role-labels li").first().evaluate(
    (element) => {
      const style = getComputedStyle(element);
      return {
        borderStyle: style.borderTopStyle,
        borderWidth: parseFloat(style.borderTopWidth)
      };
    }
  );
  expect(labelAppearance.borderStyle).not.toBe("none");
  expect(labelAppearance.borderWidth).toBeGreaterThan(0);
});

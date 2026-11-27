const { test, expect } = require("@playwright/test");

const fixtures = [
  {
    path: "/en/gcds-notices-preview/",
    locale: "en",
    titles: ["We have archived this page and it's content", "Important information"],
    roles: ["warning", "warning"],
    focusLink: "Latest updates"
  },
  {
    path: "/fr/gcds-notices-preview/",
    locale: "fr",
    titles: ["Nous avons archivé cette page et son contenu", "Informations importantes"],
    roles: ["warning", "warning"],
    focusLink: "Dernières actualités"
  },
  {
    path: "/en/gcds-landing-notice-preview/",
    locale: "en",
    titles: ["Content in progress"],
    roles: ["info"],
    focusLink: "contact page"
  },
  {
    path: "/fr/gcds-landing-notice-preview/",
    locale: "fr",
    titles: ["Contenu en cours"],
    roles: ["info"],
    focusLink: "page de contact"
  },
  {
    path: "/en/gcds-office-notice-preview/",
    locale: "en",
    titles: ["Office version notice"],
    roles: ["info"],
    focusLink: "Office is now Microsoft 365"
  },
  {
    path: "/fr/gcds-office-notice-preview/",
    locale: "fr",
    titles: ["Avis concernant la version d’Office"],
    roles: ["info"],
    focusLink: "Office est désormais Microsoft 365"
  },
  {
    path: "/en/gcds-standard-notice-preview/",
    locale: "en",
    titles: ["Standard update"],
    roles: ["info"],
    focusLink: "servicedigital-servicesnumerique@tbs-sct.gc.ca"
  },
  {
    path: "/fr/gcds-standard-notice-preview/",
    locale: "fr",
    titles: ["Mise à jour de la norme"],
    roles: ["info"],
    focusLink: "servicedigital-servicesnumerique@tbs-sct.gc.ca"
  }
];

for (const fixture of fixtures) {
  test(`${fixture.locale} ${fixture.path} upgrades without live alert semantics`, async ({ page }) => {
    await page.goto(fixture.path);
    await page.waitForFunction(() => customElements.get("gcds-notice"));

    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("gcds-notice")).toHaveCount(fixture.titles.length);
    await expect(page.locator(".gcds-notice-fallback")).toHaveCount(fixture.titles.length);
    await expect(page.locator(".gcds-notice-fallback:visible")).toHaveCount(0);
    await expect(page.getByRole("alert")).toHaveCount(0);
    await expect(page.locator("[aria-live]")).toHaveCount(0);

    for (const [index, title] of fixture.titles.entries()) {
      const notice = page.locator("gcds-notice").nth(index);
      await expect(notice).toHaveAttribute("notice-role", fixture.roles[index]);
      await expect(notice).toHaveAttribute("notice-title-tag", "h2");
      await expect(notice).toHaveAttribute("notice-title", title);
      await expect(notice.getByRole("heading", { level: 2, name: new RegExp(title) })).toBeVisible();
    }

    await expect(page.locator('link[href*="wet-boew"]')).toHaveCount(0);
    await expect(page.locator('script[src*="jquery"]')).toHaveCount(0);
    await expect(page.locator('script[src*="wet-boew"]')).toHaveCount(0);
    await expect(page.locator('link[href*="fontawesome"]')).toHaveCount(0);

    const noticeLink = page.getByRole("link", { name: fixture.focusLink }).first();
    await noticeLink.focus();
    await expect(noticeLink).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(noticeLink).not.toBeFocused();
  });

  test(`${fixture.locale} ${fixture.path} preserves native notices without JavaScript`, async ({
    browser
  }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(fixture.path);

    await expect(page.locator("gcds-notice:visible")).toHaveCount(0);
    await expect(page.locator(".gcds-notice-fallback:visible")).toHaveCount(
      fixture.titles.length
    );
    await expect(page.getByRole("alert")).toHaveCount(0);
    for (const title of fixture.titles) {
      await expect(
        page.locator(".gcds-notice-fallback").getByRole("heading", {
          level: 2,
          name: new RegExp(title)
        })
      ).toBeVisible();
    }
    await expect(page.getByRole("link", { name: fixture.focusLink }).first()).toBeVisible();
    await context.close();
  });

  test(`${fixture.locale} ${fixture.path} preserves native notices after failed upgrade`, async ({
    page
  }) => {
    await page.route("**/gcds/gcds.esm.js", (route) => route.abort());
    await page.goto(fixture.path);

    expect(await page.evaluate(() => customElements.get("gcds-notice"))).toBeUndefined();
    await expect(page.locator("gcds-notice:visible")).toHaveCount(0);
    await expect(page.locator(".gcds-notice-fallback:visible")).toHaveCount(
      fixture.titles.length
    );
    await expect(page.getByRole("alert")).toHaveCount(0);
  });
}

for (const locale of ["en", "fr"]) {
  test(`${locale} archived notice follows the page heading once in reading order`, async ({
    page
  }) => {
    await page.goto(`/${locale}/gcds-notices-preview/`);
    await page.waitForFunction(() => customElements.get("gcds-notice"));

    await expect(page.locator("main h1")).toHaveCount(1);
    const archivedTitle = locale === "en"
      ? "We have archived this page and it's content"
      : "Nous avons archivé cette page et son contenu";
    await expect(
      page.locator(`gcds-notice[notice-title="${archivedTitle}"]`)
    ).toHaveCount(1);
    const headingOrder = await page.locator("main").evaluate((main) =>
      Array.from(main.querySelectorAll("h1, gcds-notice, .gcds-page-content > h2")).map(
        (element) => element.matches("gcds-notice")
          ? element.getAttribute("notice-title")
          : element.textContent.trim()
      )
    );
    expect(headingOrder[0]).toMatch(
      locale === "en" ? /GCDS notices/ : /Aperçu des avis/
    );
    expect(headingOrder[1]).toMatch(
      locale === "en"
        ? /We have archived this page/
        : /Nous avons archivé cette page/
    );
    await expect(page.getByRole("alert")).toHaveCount(0);
  });
}

test("long notices reflow at 320px and effective 200% and 400% zoom", async ({ page }) => {
  for (const locale of ["en", "fr"]) {
    await page.goto(`/${locale}/gcds-standard-notice-preview/`);
    await page.waitForFunction(() => customElements.get("gcds-notice"));

    for (const viewport of [
      { zoom: "320px", width: 320 },
      { zoom: "200%", width: 640 },
      { zoom: "400%", width: 320 }
    ]) {
      await page.setViewportSize({ width: viewport.width, height: 800 });
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(hasHorizontalOverflow, `${locale} at ${viewport.zoom}`).toBe(false);
      await expect(page.locator("gcds-notice")).toBeVisible();
    }
  }
});

test("notice links remain visible and operable with forced colours", async ({ page }) => {
  await page.goto("/en/gcds-standard-notice-preview/");
  await page.waitForFunction(() => customElements.get("gcds-notice"));
  await page.emulateMedia({ forcedColors: "active", reducedMotion: "reduce" });

  const emailLink = page.getByRole("link", {
    name: "servicedigital-servicesnumerique@tbs-sct.gc.ca"
  });
  await emailLink.focus();
  await expect(emailLink).toBeFocused();
  await expect(emailLink).toBeVisible();
  const focusAppearance = await emailLink.evaluate((link) => {
    const style = getComputedStyle(link);
    return {
      outlineStyle: style.outlineStyle,
      outlineWidth: style.outlineWidth,
      boxShadow: style.boxShadow
    };
  });
  expect(
    focusAppearance.outlineStyle !== "none" && focusAppearance.outlineWidth !== "0px"
      || focusAppearance.boxShadow !== "none"
  ).toBe(true);
});

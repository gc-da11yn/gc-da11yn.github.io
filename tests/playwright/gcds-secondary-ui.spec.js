const { test, expect } = require("@playwright/test");

const fixtures = [
  {
    locale: "en",
    path: "/en/gcds-secondary-ui-preview/",
    onThisPage: "On this page",
    officeLabel: "Office 2016 and Microsoft 365 document navigation",
    currentPage: "Current page",
    filename: "ProcurementGuideEN.docx",
    fileType: "Microsoft Word document",
    fileSize: "77 KB",
    alternateVersion: /equivalent guide/i
  },
  {
    locale: "fr",
    path: "/fr/gcds-secondary-ui-preview/",
    onThisPage: "Sur cette page",
    officeLabel: "Navigation dans les documents Office 2016 et Microsoft 365",
    currentPage: "Page actuelle",
    filename: "ProcurementGuideFR.docx",
    fileType: "Document Microsoft Word",
    fileSize: "77 ko",
    alternateVersion: /guide équivalent/i
  }
];

for (const fixture of fixtures) {
  test(`${fixture.locale} secondary UI has labelled native relationships`, async ({ page }) => {
    await page.goto(fixture.path);
    await page.waitForFunction(() => customElements.get("gcds-header"));

    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(
      page.getByRole("navigation", { name: fixture.onThisPage })
    ).toBeVisible();

    const officeNavigations = page.getByRole("navigation", {
      name: new RegExp(`^${fixture.officeLabel}`)
    });
    await expect(officeNavigations).toHaveCount(2);
    for (const navigation of await officeNavigations.all()) {
      const current = navigation.getByRole("link", {
        name: new RegExp(fixture.currentPage)
      });
      await expect(current).toHaveAttribute("aria-current", "page");
      await expect(current).toHaveAttribute("href", fixture.path);
      await expect(current).toContainText("Microsoft 365");
      await expect(navigation.getByRole("link", { name: fixture.alternateVersion })).toBeVisible();
    }

    const tocLinks = page
      .getByRole("navigation", { name: fixture.onThisPage })
      .getByRole("link");
    for (const link of await tocLinks.all()) {
      const href = await link.getAttribute("href");
      await expect(page.locator(href)).toHaveCount(1);
      await expect(link).toHaveAccessibleName(
        await page.locator(href).textContent()
      );
    }

    const download = page.getByRole("link", {
      name: new RegExp(`${fixture.filename}.*${fixture.fileType}.*${fixture.fileSize}`)
    });
    await expect(download).toHaveAttribute("download", fixture.filename);
    await expect(download).toHaveAttribute("href", `/docs/${fixture.filename}`);
    await expect(download).toContainText(fixture.filename);
    await expect(download).toContainText(fixture.fileType);
    await expect(download).toContainText(fixture.fileSize);
    await expect(page.locator(".gcds-download i")).toHaveCount(0);
    await expect(page.locator(".gcds-contribute")).toHaveCount(0);

    await expect(page.locator('link[href*="wet-boew"]')).toHaveCount(0);
    await expect(page.locator('script[src*="jquery"]')).toHaveCount(0);
    await expect(page.locator('script[src*="wet-boew"]')).toHaveCount(0);
    await expect(page.locator('link[href*="fontawesome"]')).toHaveCount(0);
  });

  test(`${fixture.locale} secondary links follow keyboard focus order`, async ({ page }) => {
    await page.goto(fixture.path);
    await page.waitForFunction(() => customElements.get("gcds-header"));
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", {
      name: fixture.locale === "en" ? "Skip to main content" : "Passer au contenu principal",
      exact: true
    });
    await expect(skipLink).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();

    let sawOfficeLink = false;
    let sawDownloadLink = false;
    let reachedTocLink = false;
    for (let index = 0; index < 30; index += 1) {
      await page.keyboard.press("Tab");
      const focus = await page.evaluate(() => {
        const active = document.activeElement;
        return {
          inOffice: Boolean(active.closest(".gcds-office-navigation")),
          inDownload: Boolean(active.closest(".gcds-download")),
          inToc: Boolean(active.closest(".gcds-secondary-nav")),
          href: active.getAttribute("href")
        };
      });
      sawOfficeLink ||= focus.inOffice;
      sawDownloadLink ||= focus.inDownload;
      if (focus.inToc) {
        reachedTocLink = true;
        break;
      }
    }

    expect(sawOfficeLink).toBe(true);
    expect(sawDownloadLink).toBe(true);
    expect(reachedTocLink).toBe(true);
    const focusedHref = await page.evaluate(() => document.activeElement.getAttribute("href"));
    await page.keyboard.press("Enter");
    await expect(page.locator(focusedHref)).toBeFocused();
  });

  test(`${fixture.locale} secondary UI survives no JavaScript`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(fixture.path);

    await expect(page.getByRole("navigation", { name: fixture.onThisPage })).toBeVisible();
    await expect(page.locator(".gcds-office-navigation:visible")).toHaveCount(2);
    await expect(page.locator(".gcds-download__link:visible")).toHaveCount(1);
    await expect(page.locator(".gcds-contribute")).toHaveCount(0);
    await context.close();
  });

  test(`${fixture.locale} secondary UI survives a failed GCDS upgrade`, async ({ page }) => {
    await page.route("**/gcds/gcds.esm.js", (route) => route.abort());
    await page.goto(fixture.path);

    expect(await page.evaluate(() => customElements.get("gcds-header"))).toBeUndefined();
    await expect(page.getByRole("navigation", { name: fixture.onThisPage })).toBeVisible();
    await expect(page.locator(".gcds-office-navigation:visible")).toHaveCount(2);
    await expect(page.locator(".gcds-download__link:visible")).toHaveCount(1);
    await expect(page.locator(".gcds-contribute")).toHaveCount(0);
  });
}

test("secondary UI reflows at 320px and effective 200% and 400% zoom", async ({ page }) => {
  for (const fixture of fixtures) {
    await page.goto(fixture.path);
    for (const viewport of [
      { label: "320px", width: 320 },
      { label: "200%", width: 640 },
      { label: "400%", width: 320 }
    ]) {
      await page.setViewportSize({ width: viewport.width, height: 800 });
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(hasHorizontalOverflow, `${fixture.locale} at ${viewport.label}`).toBe(false);
      await expect(page.locator(".gcds-office-navigation").first()).toBeVisible();
      await expect(page.locator(".gcds-download__link")).toBeVisible();
      await expect(page.locator(".gcds-contribute")).toHaveCount(0);
    }
  }
});

test("secondary UI keeps link affordance and focus in forced colours", async ({ page }) => {
  await page.emulateMedia({ forcedColors: "active", reducedMotion: "reduce" });
  await page.goto("/fr/gcds-secondary-ui-preview/");
  const currentLink = page.locator('.gcds-office-navigation [aria-current="page"]').first();
  const downloadLink = page.locator(".gcds-download__link");

  for (const link of [currentLink, downloadLink]) {
    await link.evaluate((element) => element.blur());
    const unfocusedAppearance = await link.evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth
      };
    });
    await link.focus();
    await expect(link).toBeFocused();
    await expect(link).toBeVisible();
    const appearance = await link.evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth
      };
    });
    expect(appearance.outlineStyle).not.toBe("none");
    expect(parseFloat(appearance.outlineWidth)).toBeGreaterThan(0);
    expect(appearance).not.toEqual(unfocusedAppearance);
  }
});

for (const fixture of fixtures) {
  test(`${fixture.locale} Office notice preview identifies its current page`, async ({ page }) => {
    await page.goto(`/${fixture.locale}/gcds-office-notice-preview/`);
    const expectedName = await page.locator("main h1").textContent();
    const navigations = page.locator(".gcds-office-navigation");
    await expect(navigations).toHaveCount(2);

    for (const navigation of await navigations.all()) {
      const current = navigation.locator('[aria-current="page"]');
      await expect(current).toHaveCount(1);
      await expect(current).toHaveAttribute(
        "href",
        `/${fixture.locale}/gcds-office-notice-preview/`
      );
      await expect(current.locator("span").first()).toHaveText(expectedName);
    }
  });
}

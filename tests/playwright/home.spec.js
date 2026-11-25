const { test, expect } = require("@playwright/test");

const homePages = [
  {
    locale: "en",
    path: "/en/",
    title: "Digital Accessibility Toolkit"
  },
  {
    locale: "fr",
    path: "/fr/",
    title: "Boîte à outils de l'accessibilité numérique"
  }
];

for (const homePage of homePages) {
  test(`${homePage.locale} home page loads`, async ({ page }) => {
    const response = await page.goto(homePage.path);

    expect(response?.ok()).toBe(true);
    await expect(page.locator("html")).toHaveAttribute("lang", homePage.locale);
    await expect(page).toHaveTitle(new RegExp(homePage.title));
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(homePage.title);
  });
}

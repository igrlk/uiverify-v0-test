import { test, expect } from "@uiverify/playwright";

test("home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

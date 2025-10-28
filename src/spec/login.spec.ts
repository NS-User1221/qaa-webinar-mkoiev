import {expect, test} from "@playwright/test";

test.describe("Login", () => {
    test("should successfully sign in", async ({page}) => {
        await page.goto(`/`);
        await expect(page.locator(".login_logo")).toBeVisible();
        await page.locator('input[data-test="username"]').fill("standard_user");
        await page.locator('input[data-test="password"]').fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.waitForURL("**/inventory.html");
        return page.locator(".app_logo").textContent().then(txt => {
            expect(txt).toBe("Swag Labs");
        })
    })
})
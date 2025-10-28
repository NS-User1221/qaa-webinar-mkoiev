import test from "../fixture/test.fixture";
import {expect} from "@playwright/test";

test.describe('LoginPage', () => {
    test("LoginPage", async ({pages}) => {
        await pages.login.navigate();
        await pages.login.usernameInput.fill("standard_user");
        await pages.login.passwordInput.fill("secret_sauce");
        await pages.login.loginButton.click();
        await expect(pages.home.logo).toBeVisible()
        
    })
})
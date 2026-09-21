import { test as setup } from '@playwright/test';
import { PageManager } from '../page-object/page-manager';

const roles = [
    { name: 'standard_user', path: 'playwright/.auth/standard_user.json' },
    { name: 'locked_out_user', path: 'playwright/.auth/locked_out_user.json' },
    { name: 'problem_user', path: 'playwright/.auth/problem_user.json' }
];

const pass = 'secret_sauce';

for (const role of roles) {
    setup(`authenticate as ${role.name}`, async ({ page }) => {

        const loginPage = new PageManager(page).login;
        await loginPage.navigate();

        await loginPage.usernameInput.fill(role.name);
        await loginPage.passwordInput.fill(pass);

        await loginPage.loginButton.click();

        if (role.name === 'standard_user') {
            await page.waitForURL('https://www.saucedemo.com/inventory.html');
        }
        
        await page.context().storageState({ path: role.path });
        console.log(`Storage state successfuly saved to ${role.path}`);
    });
}
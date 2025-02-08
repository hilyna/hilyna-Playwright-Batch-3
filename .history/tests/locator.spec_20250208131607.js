// @ts-check
import { test, expect } from '@playwright/test';
// @ts-ignore
const { default: loginActions } = require('../tests/pmo/object/loginActions');

test('Testcase login', async ({ page }) => {

});

test('login with pmo', async ({ page }) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.inputLogin();
});
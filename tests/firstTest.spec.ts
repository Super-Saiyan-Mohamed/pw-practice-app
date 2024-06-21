import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('Test locator', async ({page}) => {
    await page.locator('#inputEmail1').click();
    await page.getByPlaceholder('Jane Doe').click();
});

test('Locating child elements', async ({page}) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click();
    await page.locator('nb-card').getByRole('button', {name: "Sign In"}).first().click();
});

test('Locating parent elements', async ({page}) => {
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click();
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: "Email"}).click();
    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: "Email"}).click();
});

test('Reusing the locators', async ({page}) => {
    const basicForm = page.locator('nb-card', {hasText: "Basic Form"});
    const emailField = basicForm.getByRole('textbox', {name: "Email"});

    await emailField.fill('test@test.com');
    await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123');
    await basicForm.locator('nb-checkbox').click();
    await basicForm.locator('button').click();

    await expect(emailField).toHaveValue('test@test.com');
});
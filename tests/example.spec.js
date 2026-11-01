import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
	await page.goto('https://www.saucedemo.com/')

	await expect(page.locator('.login_logo')).toHaveText('Swag Labs')
	await expect(page.locator('#login-button')).toBeVisible()

	await page.locator('#user-name').fill('standard_user')
	await page.locator('#password').fill('secret_sauce')
	await page.locator('#login-button').click()

	await expect(page.locator('.title')).toHaveText('Products')

	await page.locator('.inventory_item_name ').first().click()

	await expect(page).toHaveURL(/.*inventory-item\.html/)
	await expect(page.locator('.inventory_details_name')).toBeVisible()
})

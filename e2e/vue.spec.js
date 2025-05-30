import { test, expect } from '@playwright/test'

test('visits the app root url', async ({ page }) => {
  await page.goto('/')

  // Check if the main heading is present (more specific selector)
  await expect(page.getByRole('heading', { name: 'Bienvenido a Manu Gym' })).toBeVisible()
})

test('navigation menu works', async ({ page }) => {
  await page.goto('/')

  // Check if navigation elements are present (more specific)
  await expect(page.getByRole('banner')).toBeVisible() // App bar

  // Check if the logo/title is visible in the app bar specifically
  await expect(page.getByRole('banner').getByText('Manu Gym').first()).toBeVisible()

  // Check if theme toggle button exists
  const themeButton = page.locator(
    'button:has(i.mdi-weather-sunny), button:has(i.mdi-weather-night)',
  )
  await expect(themeButton.first()).toBeVisible()
})

test('featured classes section is displayed', async ({ page }) => {
  await page.goto('/')

  // Check if featured classes section exists
  const classesSection = page.locator('text=Clases Destacadas')
  await expect(classesSection).toBeVisible()
})

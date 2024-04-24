import { test, expect } from '@playwright/test';
import * as URLs from '../utils/constants.js';
import { ResetPasswordForm } from '../pages/reset-password.spec.js';
import { importJsonTestData as loadTestData } from '../utils/test-utils.js';

const test_data = await loadTestData();

test('Password reset successful', async ({ page }) => {
  await page.goto(URLs.ROOT_URL);
  await expect(
    ResetPasswordForm.installerNumberSentConfirmationText,
  ).toContainText(/receive an email with the installer number/);
});

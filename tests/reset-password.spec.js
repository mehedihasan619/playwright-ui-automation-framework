import { test, expect } from '@playwright/test';
import * as URLs from '../utils/url-path.js';
import { ResetPasswordForm } from '../pages/reset-password-form.js';
import { importJsonTestData as loadTestData } from '../utils/test-utils.js';

const test_data = await loadTestData();

//Sample test - the below test is jus to act an placeholder. It will fail if you do not update the URL and locators
test('Password reset successful', async ({ page }) => {
  await page.goto(URLs.ROOT_URL); //Update with real URL otherwise this test will fail
  await expect(ResetPasswordForm.confirmationMessage).toContainText(
    /An email has been sent/,
  );
});

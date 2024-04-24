import { test } from '@playwright/test';
import { importJsonTestData as loadTestData } from '../utils/test-utils.js';
import * as URLs from '../utils/constants';

const test_data = await loadTestData();

test('Global Set up', async ({ page }) => {
  await page.goto(`${URLs.ROOT_URL}${URLs.LOGIN_RESOURCE_PATH}`);

  /* TODO - You can write a test that is a prerequisite of all tests. For example, a login test that is required for 
  all the tests that require the user to be logged in. 
  */

  /* You can write the login test and save the browse state with cookies and local storage into a json,
  which later playwright will load into a new browser context */
  await page.context().storageState({ path: './state.json' });
});

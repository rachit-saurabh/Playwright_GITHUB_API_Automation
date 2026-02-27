import { test, expect } from '@playwright/test';
import userData from '../../test-data/users.json';

// This test verifies that attempting to retrieve details of a non-existent user returns a 404 Not Found status code.
test('Invalid user should return 404', async ({ request }) => {
  const response = await request.get(`/users/${userData.invalidUser}`);

  console.log('Response Body:', await response.json());
  console.log('Status Code:', response.status());
  expect(response.status()).toBe(404);
});
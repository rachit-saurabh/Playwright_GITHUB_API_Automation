import { test, expect } from '@playwright/test';
import { getAuthHeaders } from '../../utils/apiHeaders';

// This test verifies that we can successfully retrieve the authenticated user's details using the /user endpoint.
test('Get authenticated user details', async ({ request }) => {
  const response = await request.get('/user', {
    headers: getAuthHeaders(),
  });

  const body = await response.json();
  console.log('Response Body:', body);
    console.log('Status Code:', response.status());

  expect(response.status()).toBe(200);
  expect(body.login).toBeTruthy(); // should not be empty/null/false.
});
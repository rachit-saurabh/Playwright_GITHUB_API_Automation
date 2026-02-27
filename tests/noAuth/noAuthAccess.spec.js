import { test, expect } from '@playwright/test';

// This test checks that attempting to access the authenticated user's repositories without providing an authentication token fails with a 401 Unauthorized status code.
test('Access user repos without token should fail', async ({ request }) => {

  const response = await request.get('/user/repos');

  expect(response.status()).toBe(401);

});
import { test, expect } from '@playwright/test';

test('Unauthorized repo creation should fail', async ({ request }) => {

  const response = await request.post('/user/repos', {
    headers: {
      Authorization: 'Bearer invalid_token',
      Accept: 'application/vnd.github+json'
    },
    data: { name: 'invalid-repo-test' }
  });

  expect(response.status()).toBe(401);

});
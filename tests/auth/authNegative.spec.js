import { test, expect } from '@playwright/test';

// This test checks that creating a repository with an invalid token fails with a 401 Unauthorized status code.
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
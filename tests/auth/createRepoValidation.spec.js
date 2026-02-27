import { test, expect } from '@playwright/test';

// This test verifies that creating a repository without providing a name fails with a 422 Unprocessable Entity status code.
test('Create repo without name should fail', async ({ request }) => {

  const response = await request.post('/user/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    },
    data: {}
  });

  expect(response.status()).toBe(422);

});
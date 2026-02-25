import { test, expect } from '@playwright/test';

test('Creating duplicate repository should fail', async ({ request }) => {

  const repoName = `duplicate-test-${Date.now()}`;

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json'
  };

  // First creation
  await request.post('/user/repos', {
    headers,
    data: { name: repoName }
  });

  // Duplicate creation
  const duplicateResponse = await request.post('/user/repos', {
    headers,
    data: { name: repoName }
  });

  expect(duplicateResponse.status()).toBe(422);

});
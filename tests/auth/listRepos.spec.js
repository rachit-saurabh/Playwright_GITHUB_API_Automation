import { test, expect } from '@playwright/test';

// This test verifies that we can successfully retrieve the authenticated user's repositories using the /user/repos endpoint.
test('List authenticated user repositories', async ({ request }) => {

  const response = await request.get('/user/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    }
  });

  console.log('Status Code:', response.status());
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBeTruthy();
  console.log('Response Body:', body);

});
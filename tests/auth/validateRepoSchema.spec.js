import { test, expect } from '@playwright/test';

// This test checks that the response from the /user endpoint contains the expected fields (login, id, url) for the authenticated user.
test('Validate repository response fields', async ({ request }) => {

  const response = await request.get('/user', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('login');
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('url');

});
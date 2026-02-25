import { test, expect } from '@playwright/test';

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
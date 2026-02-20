import { test, expect } from '@playwright/test';

test('Access auth API without token should fail', async ({ request }) => {
  const response = await request.get('/user');

  expect(response.status()).toBe(401);
});
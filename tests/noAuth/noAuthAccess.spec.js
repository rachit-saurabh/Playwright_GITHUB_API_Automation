import { test, expect } from '@playwright/test';

test('Access user repos without token should fail', async ({ request }) => {

  const response = await request.get('/user/repos');

  expect(response.status()).toBe(401);

});
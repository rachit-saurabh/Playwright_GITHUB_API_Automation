import { test, expect } from '@playwright/test';

test('Delete repo without auth should fail', async ({ request }) => {

  const response = await request.delete('/repos/someuser/somerepo');

  expect(response.status()).toBe(401);

});
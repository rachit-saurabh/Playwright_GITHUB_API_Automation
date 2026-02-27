import { test, expect } from '@playwright/test';

// This test checks that attempting to delete a repository without authentication fails with a 401 Unauthorized status code.
test('Delete repo without auth should fail', async ({ request }) => {

  const response = await request.delete('/repos/someuser/somerepo');

  expect(response.status()).toBe(401);

});
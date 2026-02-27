import { test, expect } from '@playwright/test';
import userData from '../../test-data/users.json';

// This test verifies that we can successfully retrieve the public user details of a specified user (octocat) using the /users/{username} endpoint.
test('Get public user details - octocat', async ({ request }) => {
  const response = await request.get(`/users/${userData.validUser}`);
  const body = await response.json();
  console.log('Response Body:', body);
  console.log('Status Code:', response.status());
  expect(response.status()).toBe(200);
  expect(body.login).toBe(userData.validUser);
  expect(body.id).toBeTruthy();
  expect(body.public_repos).toBeGreaterThan(0);
});
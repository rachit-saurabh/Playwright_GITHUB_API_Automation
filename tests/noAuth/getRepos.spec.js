import { test, expect } from '@playwright/test';
import userData from '../../test-data/users.json';

test('Get public repositories of octocat', async ({ request }) => {
  const response = await request.get(`/users/${userData.validUser}/repos`);
  const repos = await response.json();

  console.log('Response Body:', repos);
  console.log('Status Code:', response.status());

  expect(response.status()).toBe(200);
  expect(Array.isArray(repos)).toBe(true);
  expect(repos.length).toBeGreaterThan(0);
});
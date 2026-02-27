import { test, expect } from '@playwright/test';
import userData from '../../test-data/users.json';

// This test checks that we can successfully retrieve the public repositories of a specified user using the /users/{username}/repos endpoint.
test('Get public repositories', async ({ request }) => {
  const response = await request.get(`/users/${userData.validUser}/repos`);
  const repos = await response.json();

  console.log('Response Body:', repos);
  console.log('Status Code:', response.status());

  expect(response.status()).toBe(200);
  expect(Array.isArray(repos)).toBe(true); // Array.isArray(repos) checks whether repos is actually an array.
  expect(repos.length).toBeGreaterThan(0); // Array.isArray(repos) checks whether repos is actually an array.
  
});
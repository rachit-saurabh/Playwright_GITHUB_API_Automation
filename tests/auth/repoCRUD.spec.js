import { test, expect } from '@playwright/test';
import { GitHubApi } from '../../utils/githubApi.js';

test.describe('GitHub Repo CRUD Flow', () => {

  test('Complete CRUD operation', async ({ request }) => {

    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME;

    const api = new GitHubApi(request, token);

    const repoName = `api-capstone-${Date.now()}`;

    // CREATE
    const createRes = await api.createRepo(repoName);
    expect(createRes.status()).toBe(201);

    // READ
    const getRes = await api.getRepo(username, repoName);
    expect(getRes.status()).toBe(200);

    const body = await getRes.json();
    expect(body.name).toBe(repoName);

    // UPDATE
    const updateRes = await api.updateRepo(
      username,
      repoName,
      'Updated via Playwright'
    );
    expect(updateRes.status()).toBe(200);

    // DELETE
    const deleteRes = await api.deleteRepo(username, repoName);
    expect(deleteRes.status()).toBe(204);

  });

});
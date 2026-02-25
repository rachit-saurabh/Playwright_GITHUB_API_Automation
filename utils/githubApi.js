export class GitHubApi {
  constructor(request, token) {
    this.request = request;
    this.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json'
    };
  }

  async createRepo(repoName) {
    return await this.request.post('/user/repos', {
      headers: this.headers,
      data: { name: repoName, private: false }
    });
  }

  async getRepo(username, repoName) {
    return await this.request.get(`/repos/${username}/${repoName}`, {
      headers: this.headers
    });
  }

  async updateRepo(username, repoName, description) {
    return await this.request.patch(`/repos/${username}/${repoName}`, {
      headers: this.headers,
      data: { description }
    });
  }

  async deleteRepo(username, repoName) {
    return await this.request.delete(`/repos/${username}/${repoName}`, {
      headers: this.headers
    });
  }
}
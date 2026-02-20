export function getAuthHeaders() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'Content-Type': 'application/json'
  };
}
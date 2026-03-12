/**
 * Converts GitHub raw image URLs to jsDelivr CDN URLs for faster global delivery.
 *
 * Handles two common patterns:
 * 1. https://github.com/USER/REPO/blob/BRANCH/PATH?raw=true
 * 2. https://raw.githubusercontent.com/USER/REPO/BRANCH/PATH
 *
 * Output: https://cdn.jsdelivr.net/gh/USER/REPO@BRANCH/PATH
 *
 * jsDelivr is a free CDN with 750+ global PoPs. GitHub raw has no CDN.
 */
export function toFastImageUrl(url: string | undefined): string | undefined {
  if (!url) return url;

  try {
    // Pattern 1: github.com/USER/REPO/blob/BRANCH/PATH?raw=true
    const githubBlobMatch = url.match(
      /^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+?)(\?raw=true)?$/i
    );
    if (githubBlobMatch) {
      const [, user, repo, branch, path] = githubBlobMatch;
      return `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}`;
    }

    // Pattern 2: raw.githubusercontent.com/USER/REPO/BRANCH/PATH
    const rawMatch = url.match(
      /^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/i
    );
    if (rawMatch) {
      const [, user, repo, branch, path] = rawMatch;
      return `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}`;
    }
  } catch {
    // If parsing fails, return the original URL
  }

  return url;
}

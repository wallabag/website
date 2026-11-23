// Publishes /releases.json from _data/releases.js.
module.exports = class {
  data() {
    return {
      permalink: '/releases.json',
      eleventyExcludeFromCollections: true,
    };
  }

  render({ releases, collections }) {
    // Blog posts announce a release with "release: X.Y.Z" in their front matter.
    const posts = Object.fromEntries(
      collections.post
        .filter((post) => post.data.release)
        .map((post) => [post.data.release, `https://wallabag.org${post.url}`])
    );

    return JSON.stringify({
      generated_at: new Date().toISOString(),
      releases: releases.list.map((release) => ({ ...release, notes_url: posts[release.version] || null })),
    }, null, 2);
  }
};

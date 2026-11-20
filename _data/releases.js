// Reads the wallabag releases from GitHub:
// - latest: the highest stable release, for the download section and the /latest-v2 redirects
// - list: the releases from 2.7.0, published in /releases.json. Instances >= 2.7.0 read this file
//   to know if an update is available, see https://github.com/wallabag/wallabag/issues/9209

const REPO = 'wallabag/wallabag';

// Any error fails the build: Netlify then keeps the current site instead of publishing wrong data.
const fetchJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Fetching ${url} failed: HTTP ${response.status}`);
  }

  return response.json();
};

// "2.7.1" => [2, 7, 1, 1] and "", "2.7.1-beta.2" => [2, 7, 1, 0] and "beta.2":
// a stable release comes after its pre-releases.
const parseVersion = (tag) => {
  const [, major, minor, patch, pre = ''] = /^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/.exec(tag) || [];

  return major ? { numbers: [+major, +minor, +patch, pre ? 0 : 1], pre } : null;
};

const compareVersions = (a, b) =>
  a.numbers.map((number, i) => number - b.numbers[i]).find((diff) => diff !== 0)
  || a.pre.localeCompare(b.pre, 'en', { numeric: true });

// True when the release notes have a heading with this exact title, e.g. "### Security fixes".
const hasSection = (release, title) => new RegExp(`^#+\\s*${title}\\s*$`, 'im').test(release.body ?? '');

module.exports = async function () {
  console.log('Fetching wallabag releases');

  const releases = (await fetchJson(`https://api.github.com/repos/${REPO}/releases?per_page=100`))
    .map((release) => ({
      release,
      version: parseVersion(release.tag_name),
      // The package is uploaded by a workflow a few minutes after the release: skip the release until then.
      asset: release.assets.find((asset) => asset.name === `wallabag-${release.tag_name}.tar.gz`),
    }))
    .filter(({ release, version, asset }) => !release.draft && version && asset?.digest?.startsWith('sha256:'))
    .sort((a, b) => compareVersions(b.version, a.version))
    .map(({ release, version, asset }) => ({
      version: release.tag_name,
      from27: version.numbers[0] > 2 || (version.numbers[0] === 2 && version.numbers[1] >= 7),
      date: release.published_at.slice(0, 10),
      prerelease: release.prerelease,
      security: hasSection(release, 'Security fixes'),
      make_update: !hasSection(release, 'Manual upgrade'),
      release_url: release.html_url,
      tarball_url: asset.browser_download_url,
      sha256: asset.digest.slice('sha256:'.length),
    }));

  const latest = releases.find((release) => !release.prerelease);

  if (!latest) {
    throw new Error('No stable wallabag release found');
  }

  // raw.githubusercontent.com is not limited like the GitHub API.
  const list = await Promise.all(releases.filter((release) => release.from27).map(async ({ from27, ...release }) => {
    const composer = await fetchJson(`https://raw.githubusercontent.com/${REPO}/${release.version}/composer.json`);

    return { ...release, php_min: /\d+\.\d+/.exec(composer.require?.php ?? '')?.[0] ?? null };
  }));

  return { latest, list };
};

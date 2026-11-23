// Reads the wallabag releases from GitHub:
// - latest: the highest stable release, for the download section and the /latest-v2 redirects
// - list: the releases from 2.7.0, published in /releases.json. Instances >= 2.7.0 read this file
//   to know if an update is available, see https://github.com/wallabag/wallabag/issues/9209

const API = 'https://api.github.com/repos/wallabag/wallabag';
// raw.githubusercontent.com is not limited like the GitHub API.
const RAW = 'https://raw.githubusercontent.com/wallabag/wallabag';

// Any error fails the build: Netlify then keeps the current site instead of publishing wrong data.
// GITHUB_TOKEN is optional: it raises the GitHub API limit of 60 requests per hour.
const fetchJson = async (url) => {
  const token = url.startsWith(API) && process.env.GITHUB_TOKEN;
  const response = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });

  if (!response.ok) {
    throw new Error(`Fetching ${url} failed: HTTP ${response.status}`);
  }

  return response.json();
};

// "2.7.1-beta.2" => { numbers: [2, 7, 1, 0], pre: "beta.2" }, "2.7.1" => { numbers: [2, 7, 1, 1], pre: "" }:
// the last number puts a stable release after its pre-releases.
const parseVersion = (tag) => {
  const [, major, minor, patch, pre = ''] = /^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/.exec(tag) ?? [];

  return major ? { numbers: [+major, +minor, +patch, pre ? 0 : 1], pre } : null;
};

const compareVersions = (tagA, tagB) => {
  const a = parseVersion(tagA);
  const b = parseVersion(tagB);
  const diff = a.numbers.map((number, i) => number - b.numbers[i]).find((n) => n !== 0);

  return diff ?? a.pre.localeCompare(b.pre, 'en', { numeric: true });
};

// "2.7.0-0" is lower than any 2.7.0 pre-release.
const isFrom27 = (tag) => compareVersions(tag, '2.7.0-0') >= 0;

// The package is uploaded by a workflow a few minutes after the release.
const findPackage = (release) => release.assets
  .find((asset) => asset.name === `wallabag-${release.tag_name}.tar.gz` && asset.digest?.startsWith('sha256:'));

// Versions listed as patched by a published security advisory, e.g. "2.6.16, 2.7.0".
const fetchSecurityVersions = async () => {
  const advisories = await fetchJson(`${API}/security-advisories?state=published&per_page=100`);
  const versions = advisories
    .flatMap((advisory) => advisory.vulnerabilities)
    .flatMap((vulnerability) => (vulnerability.patched_versions ?? '').split(','))
    .map((version) => version.trim());

  return new Set(versions.filter(Boolean));
};

const fetchPhpMin = async (tag) => {
  const composer = await fetchJson(`${RAW}/${tag}/composer.json`);

  return /\d+\.\d+/.exec(composer.require?.php ?? '')?.[0] ?? null;
};

const fetchMigrationFiles = async (tag) => {
  const files = await fetchJson(`${API}/contents/migrations?ref=${tag}`);

  return files.map((file) => file.name);
};

module.exports = async function () {
  console.log('Fetching wallabag releases');

  const [githubReleases, securityVersions] = await Promise.all([
    fetchJson(`${API}/releases?per_page=100`),
    fetchSecurityVersions(),
  ]);

  // Published releases with their package, the highest version first.
  const releases = githubReleases
    .filter((release) => !release.draft && parseVersion(release.tag_name) && findPackage(release))
    .sort((a, b) => compareVersions(b.tag_name, a.tag_name))
    .map((release) => ({
      version: release.tag_name,
      date: release.published_at.slice(0, 10),
      prerelease: release.prerelease,
      security: securityVersions.has(release.tag_name),
      release_url: release.html_url,
      tarball_url: findPackage(release).browser_download_url,
      sha256: findPackage(release).digest.replace('sha256:', ''),
      signature_url: release.assets.find((asset) => asset.name === `${findPackage(release).name}.minisig`)?.browser_download_url ?? null,
    }));

  const latest = releases.find((release) => !release.prerelease);

  if (!latest) {
    throw new Error('No stable wallabag release found');
  }

  // From the oldest release: a release has migrations when it adds migration files since the previous
  // stable release. An update between two stable releases runs migrations if a release in between has some.
  const list = [];
  let previousStableFiles = [];

  for (const release of releases.filter((item) => isFrom27(item.version)).reverse()) {
    const migrationFiles = await fetchMigrationFiles(release.version);

    list.unshift({
      ...release,
      php_min: await fetchPhpMin(release.version),
      migrations: migrationFiles.some((file) => !previousStableFiles.includes(file)),
    });

    if (!release.prerelease) {
      previousStableFiles = migrationFiles;
    }
  }

  return { latest, list };
};

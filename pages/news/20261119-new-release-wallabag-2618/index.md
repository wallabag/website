---
title: 'wallabag 2.6.18'
published: true
date: 2026-11-19 19:00:00 +01:00
description: Security release of wallabag, with fixes for tagging rules import, public share page, EPUB export and SVG images
---

⚠️ This is a **security** release of wallabag. We recommend updating your instance as soon as possible.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/admin/upgrade/).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

wallabag 2.6.18 fixes four security issues:

* an imported file of tagging rules could be used by a user to run commands on your server,
* the public share page could show a link running JavaScript,
* the EPUB export could be used to read files of your server or to make it call other addresses,
* a downloaded SVG image could run JavaScript when the "download images locally" feature is enabled.

**After upgrading:** clear the cache (`var/cache`) and review the tagging rules of your users.

**One visible change:** the EPUB export does not embed remote images anymore, they stay as links. The images stored by wallabag are still embedded.

Thanks to the people who reported these issues, they are credited in each advisory.

## What's Changed

### Security fixes

* Validate the imported tagging rules, and ignore the invalid rules already stored by @nicosomb, see [GHSA-2cfc-5mg3-74jc](https://github.com/wallabag/wallabag/security/advisories/GHSA-2cfc-5mg3-74jc)
* Only link to http(s) URLs on the public share page by @nicosomb, see [GHSA-52xm-74j7-7j7f](https://github.com/wallabag/wallabag/security/advisories/GHSA-52xm-74j7-7j7f)
* Do not let the EPUB export read files or fetch URLs found in the content of an entry by @nicosomb, see [GHSA-gr83-54pj-xch4](https://github.com/wallabag/wallabag/security/advisories/GHSA-gr83-54pj-xch4)
* Update `enshrined/svg-sanitize` to reject SVG images with a root outside the SVG namespace by @nicosomb, see [GHSA-rvg4-ph3q-9x5g](https://github.com/wallabag/wallabag/security/advisories/GHSA-rvg4-ph3q-9x5g)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.17...2.6.18) on GitHub.

## Download wallabag 2.6.18

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/admin/installation/installation/).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

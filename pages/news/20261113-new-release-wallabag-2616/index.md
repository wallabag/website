---
title: 'wallabag 2.6.16'
published: true
date: 2026-11-13 15:00:00 +01:00
description: Security release of wallabag, with fixes for stored XSS, SSRF and annotation ownership
---

⚠️ This is a **security** release of wallabag. We recommend updating your instance as soon as possible.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/admin/upgrade/).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

wallabag 2.6.16 fixes four security issues:

* the author of a saved article could inject HTML and JavaScript in the article view,
* the "download images locally" feature could fetch images from your internal network,
* a user could add annotations to another user's article,
* an import file that failed to import stayed in a public folder of your instance.

**One manual step after upgrading:** import files are now stored in `var/import`, outside of the `web` folder. Delete the content of the old `web/uploads/import` folder, it may contain files left by previous imports.

Many people reported these issues, sometimes several times. Thanks to all of them, they are credited in each advisory. Sorry it took us so long to ship these fixes.

## What's Changed

### Security fixes

* Escape the author of an entry in the entry view by @j0k3r, see [GHSA-rr6m-92cx-w69q](https://github.com/wallabag/wallabag/security/advisories/GHSA-rr6m-92cx-w69q)
* Block requests to private and reserved addresses when downloading images by @j0k3r, see [GHSA-46jc-m2hq-v399](https://github.com/wallabag/wallabag/security/advisories/GHSA-46jc-m2hq-v399)
* Check entry ownership when listing and creating annotations by @nicosomb, see [GHSA-q2r9-jqp3-5f26](https://github.com/wallabag/wallabag/security/advisories/GHSA-q2r9-jqp3-5f26)
* Store import uploads outside the web root and always delete them by @nicosomb, see [GHSA-q4v7-v68c-x6hx](https://github.com/wallabag/wallabag/security/advisories/GHSA-q4v7-v68c-x6hx)

### Fixes

* Skip pre-release tags in `make update` by @nicosomb in [#9170](https://github.com/wallabag/wallabag/pull/9170)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.15...2.6.16) on GitHub.

## Download wallabag 2.6.16

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/admin/installation/installation/).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

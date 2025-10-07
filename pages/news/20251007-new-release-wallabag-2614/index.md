---
title: 'wallabag 2.6.14'
published: true
date: 2025-10-07 11:00:00 +02:00
description: New release of wallabag with Pocket CSV import
---

Here is the latest release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

You can now filter entries with annotations in the API. There is also a fix regarding reading time.

## What's Changed

### Improvements

* Add annotations filter to entries API endpoint by @skn in [https://github.com/wallabag/wallabag/pull/8346](https://github.com/wallabag/wallabag/pull/8346)

### Fixes

* Fix reading time computation for short entries by @andreadecorte in [https://github.com/wallabag/wallabag/pull/8332](https://github.com/wallabag/wallabag/pull/8332)
* Fix `urls` parameter when sending many urls to be stored using the API by @j0k3r in [https://github.com/wallabag/wallabag/pull/8488](https://github.com/wallabag/wallabag/pull/8488)
* Fix docker base image by @yguedidi in [https://github.com/wallabag/wallabag/pull/8440](https://github.com/wallabag/wallabag/pull/8440)

### Technical stuff

* Change version in wallabag.yml by @nicosomb in [https://github.com/wallabag/wallabag/pull/8251](https://github.com/wallabag/wallabag/pull/8251)
* Fix deprecation by @j0k3r in [https://github.com/wallabag/wallabag/pull/8267](https://github.com/wallabag/wallabag/pull/8267)
* Update dependencies by @yguedidi in [https://github.com/wallabag/wallabag/pull/8435](https://github.com/wallabag/wallabag/pull/8435)
* Bump deps (mostly for siteconfig) by @j0k3r in [https://github.com/wallabag/wallabag/pull/8489](https://github.com/wallabag/wallabag/pull/8489)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.13...2.6.14) on GitHub.

## Download wallabag 2.6.14

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

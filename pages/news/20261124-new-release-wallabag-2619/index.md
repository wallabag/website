---
title: 'wallabag 2.6.19'
published: true
date: 2026-11-24 10:00:00 +01:00
release: 2.6.19
description: Bug fix release of wallabag, with fixes for the Pocket HTML import, the EPUB export and the API entries list
---

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/admin/upgrade/).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

wallabag 2.6.19 fixes a few bugs:

* the Pocket HTML import crashed when an entry had no date,
* the EPUB export crashed on some long articles,
* the API entries list was slow on big accounts.

**One visible change:** the EPUB export downloads the cover of the entry when wallabag didn't store it.

Today, we also publish [wallabag 2.7.0-alpha.2](/news/20261124-wallabag-270-alpha2/), a test release: `make update` doesn't install it.

## What's Changed

### Fixes

* Fix the Pocket HTML import crash when an entry has no date by @nicosomb in https://github.com/wallabag/wallabag/pull/9222
* Fix the EPUB export crash on an element too big to be split by @nicosomb in https://github.com/wallabag/wallabag/pull/9223
* Fix N+1 queries and slow pagination in the API entries list by @nicosomb in https://github.com/wallabag/wallabag/pull/9224

### Changes

* Download the cover of the EPUB export when it is not stored by wallabag by @nicosomb in https://github.com/wallabag/wallabag/pull/9221

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.18...2.6.19) on GitHub.

## Download wallabag 2.6.19

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/admin/installation/installation/).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

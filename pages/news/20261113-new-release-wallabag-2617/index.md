---
title: 'wallabag 2.6.17'
published: true
date: 2026-11-13 22:00:00 +01:00
description: Fix release of wallabag, so that make update installs the latest stable release again
---

⚠️ [wallabag 2.6.16](/news/20261113-new-release-wallabag-2616/) was a **security** release, and 2.6.17 includes its fixes. If you are still running 2.6.15 or older, please update your instance as soon as possible.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/admin/upgrade/).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

Earlier today, we published [wallabag 2.7.0-alpha.1](https://github.com/wallabag/wallabag/releases/tag/2.7.0-alpha.1). On instances running wallabag 2.6.15 or older, `make update` picked this alpha instead of the latest stable release. The upgrade then failed, and the instance stopped working.

wallabag 2.6.17 fixes it: `make update` installs 2.6.17 again. Sorry for the trouble!

**Your instance is broken after `make update`?** Run these commands in the wallabag folder:

```
git checkout 2.6.17 --force
make update
```

Your data should be safe: the upgrade stopped before the database migrations.

This release also includes a small fix for the Pocket CSV import.

## What's Changed

### Fixes

* Handle Pocket CSV imports in their own controller, with the import upload fixes of 2.6.16 in [#9179](https://github.com/wallabag/wallabag/pull/9179)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.16...2.6.17) on GitHub.

## Download wallabag 2.6.17

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/admin/installation/installation/).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

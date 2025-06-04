---
title: 'wallabag 2.6.13'
published: true
date: 2025-06-04 18:00:00 +02:00
description: New release of wallabag with Pocket CSV import
---

Here is the latest release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

We added the Pocket CSV import. You can also migrate from Shaarli. We fixed an annoying bug about One-Time Password and an other one about encoding.

## What's Changed

### Improvements

* Add support of Pocket CSV import by @kdecherf and @nicosomb in [https://github.com/wallabag/wallabag/pull/8240](https://github.com/wallabag/wallabag/pull/8240)
* Backport Pocket and Shaarli HTML imports from master by @nicosomb in [https://github.com/wallabag/wallabag/pull/8193](https://github.com/wallabag/wallabag/pull/8193)

### Fixes

*  Avoid non-validated OTP to be enabled #8139 by @j0k3r in [https://github.com/wallabag/wallabag/pull/8139](https://github.com/wallabag/wallabag/pull/8139)

### Technical stuff

* Update j0k3r/php-readability:1.2.13 to fix regression (about latin1 instead of UTF-8 used for entries) by @nicosomb [https://github.com/wallabag/wallabag/pull/8194](https://github.com/wallabag/wallabag/pull/8194)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.12...2.6.13) on GitHub.

## Download wallabag 2.6.13

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

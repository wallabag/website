---
title: 'wallabag 2.6.11'
published: true
date: 2025-04-08 23:00:00 +02:00
description: New release of wallabag with many security fixes!
---

Here is the latest release of wallabag.

⚠️ This is a security release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

Adding protection against CSRF on several endpoints.

## What's Changed

### **Security fix ⚠️**

* Protect actions with a CSRF token by @yguedidi in [https://github.com/wallabag/wallabag/commit/99c8a06594d6ee7480ce4d041ccff3025b353656](https://github.com/wallabag/wallabag/commit/99c8a06594d6ee7480ce4d041ccff3025b353656) (reported as
  [GHSA-5pm7-cp8f-p2c2](https://github.com/wallabag/wallabag/security/advisories/GHSA-5pm7-cp8f-p2c2))

### Fixes

* Fix redirection after action in search results by @nicosomb in [https://github.com/wallabag/wallabag/pull/7827](https://github.com/wallabag/wallabag/pull/7827)
* Fix title tag filter by @nicosomb in [https://github.com/wallabag/wallabag/pull/7846](https://github.com/wallabag/wallabag/pull/7846)
* Change NB_ELEMENTS in pocket importer to 30 by @j0k3r in [https://github.com/wallabag/wallabag/pull/7993](https://github.com/wallabag/wallabag/pull/7993)
* Fix entries counter for annotated entries in the menu by @j0k3r in [https://github.com/wallabag/wallabag/pull/7999](https://github.com/wallabag/wallabag/pull/7999)

### Technical stuff

* Prepare 2.6.11 release by @yguedidi in [https://github.com/wallabag/wallabag/pull/8133](https://github.com/wallabag/wallabag/pull/8133)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.10...2.6.11) on GitHub.

## Download wallabag 2.6.11

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

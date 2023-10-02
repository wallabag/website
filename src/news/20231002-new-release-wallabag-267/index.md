---
title: 'wallabag 2.6.7'
published: true
date: 2023-10-02 15:00:00 +02:00
---

Here is the latest release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary
We fixed a security issue were 2FA might have been disabled unintentionally. Also we released some UI changes to mass action & tag form inside an entry.

## What's Changed
### Security fixes
- A user can disable her 2FA unintentionally by @kdecherf in [https://github.com/wallabag/wallabag/commit/0cfdddc2eb0aee5ffb69bf499d377d75655ba157](https://github.com/wallabag/wallabag/commit/0cfdddc2eb0aee5ffb69bf499d377d75655ba157)

### Fixes
* Fix deprecated null tag parameter by @Simounet in [https://github.com/wallabag/wallabag/pull/6985](https://github.com/wallabag/wallabag/pull/6985)
* Full clickable card on mass action by @Simounet in [https://github.com/wallabag/wallabag/pull/6991](https://github.com/wallabag/wallabag/pull/6991)
* Add tag form submit button always displayed by @Simounet in [https://github.com/wallabag/wallabag/pull/6986](https://github.com/wallabag/wallabag/pull/6986)
* Prepare 2.6.7 release by @j0k3r in [https://github.com/wallabag/wallabag/pull/7006](https://github.com/wallabag/wallabag/pull/7006)

You can read the [full Changelog](https://github.com/wallabag/wallabag/compare/2.6.6...2.6.7) on GitHub.

## Download wallabag 2.6.7

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

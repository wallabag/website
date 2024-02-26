---
title: 'wallabag 2.6.8'
published: true
date: 2024-01-03 11:00:00 +02:00
---

First of all, happy new year to every one! Stay safe and healthy.

Here is the latest release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary
We fixed an issue in dark mode and removed the session-based redirection which was bugged. Site configs are also up to date (huge thanks to @HolgerAusB).

Technically, we are now using Node 20 to build assets.

## What's Changed
* Update deps & Node 20 by @j0k3r in [#7134](https://github.com/wallabag/wallabag/pull/7134)
* Fix dark mode disabled url 2.6 by @Simounet in [#7133](https://github.com/wallabag/wallabag/pull/7133)
* Make database dependent commands lazy by @yguedidi in [#7142](https://github.com/wallabag/wallabag/pull/7142)
* Fix docker setup by @yguedidi in [#7141](https://github.com/wallabag/wallabag/pull/7141)
* Remove session-based redirection by @yguedidi in [#7140](https://github.com/wallabag/wallabag/pull/7140)
* Prepare 2.6.8 release by @j0k3r in [#7143](https://github.com/wallabag/wallabag/pull/7143)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.7...2.6.8) on GitHub.

## Download wallabag 2.6.8

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

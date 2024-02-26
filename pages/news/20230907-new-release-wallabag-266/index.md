---
title: 'wallabag 2.6.6'
published: true
date: 2023-09-07 10:00:00 +02:00
---

Here is the latest release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary
- if your wallabag instance is running on https, cookies are now `secure` by default
- you can define again your mailer to use your Google account ([check the doc about it](https://doc.wallabag.org/en/admin/mailer.html))

## What's Changed
### Security fixes
* Force secure cookie on HTTPS connection by @j0k3r in [https://github.com/wallabag/wallabag/pull/6924](https://github.com/wallabag/wallabag/pull/6924)

### Fixes
* Fix checkboxes pointer events issue by @Simounet in [https://github.com/wallabag/wallabag/pull/6897](https://github.com/wallabag/wallabag/pull/6897)
* Add Google mailer by @j0k3r in [https://github.com/wallabag/wallabag/pull/6899](https://github.com/wallabag/wallabag/pull/6899)
* Improve performance on homepage by @Simounet in [https://github.com/wallabag/wallabag/pull/6909](https://github.com/wallabag/wallabag/pull/6909)
* Mass action layout improved by @Simounet in [https://github.com/wallabag/wallabag/pull/6912](https://github.com/wallabag/wallabag/pull/6912)
* Prepare 2.6.6 release by @j0k3r in [https://github.com/wallabag/wallabag/pull/6926](https://github.com/wallabag/wallabag/pull/6926)

You can read the [full Changelog](https://github.com/wallabag/wallabag/compare/2.6.5...2.6.6) on GitHub.

## Download wallabag 2.6.6

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

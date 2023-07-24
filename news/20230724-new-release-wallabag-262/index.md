---
title: 'wallabag 2.6.2'
published: true
date: 2023-07-24 14:00:00 +02:00
---

Here is the latest release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## What's Changed

### Fixes
* Fix mass action input on dark theme by @simounet [https://github.com/wallabag/wallabag/pull/6673](https://github.com/wallabag/wallabag/pull/6673)
* Fix undefined variable by @nicosomb [https://github.com/wallabag/wallabag/pull/6672](https://github.com/wallabag/wallabag/pull/6672)
* Fix table name in migration by @nicosomb [https://github.com/wallabag/wallabag/pull/6653](https://github.com/wallabag/wallabag/pull/6672)

### Technical stuff
* Add a new build to test when no database table prefix are defined by @j0k3r [https://github.com/wallabag/wallabag/pull/6731](https://github.com/wallabag/wallabag/pull/6672)
* Keep escaped table name while migrating by @Glandos [https://github.com/wallabag/wallabag/pull/6710](https://github.com/wallabag/wallabag/pull/6672)
* Remove twofactor_auth parameter by @nicosomb [https://github.com/wallabag/wallabag/pull/6723](https://github.com/wallabag/wallabag/pull/6672)
* ApiDoc: Add response description to UserRestController by @caspermeijn [https://github.com/wallabag/wallabag/pull/6684](https://github.com/wallabag/wallabag/pull/6672)
* ApiDoc: Add response description to WallabagRestController by @caspermeijn [https://github.com/wallabag/wallabag/pull/6102](https://github.com/wallabag/wallabag/pull/6672)
* Skip migration if the table was already renamed by @gramakri [https://github.com/wallabag/wallabag/pull/6678](https://github.com/wallabag/wallabag/pull/6672)

### Meta
* Document how to run tests and formatter for new contributors by @caspermeijn [https://github.com/wallabag/wallabag/pull/6685](https://github.com/wallabag/wallabag/pull/6672)
* Add link to wallabag ecosystem resources by @nicosomb [https://github.com/wallabag/wallabag/pull/6700](https://github.com/wallabag/wallabag/pull/6672)

You can read the [full Changelog](https://github.com/wallabag/wallabag/compare/2.6.1...2.6.2) on GitHub.

## Download wallabag 2.6.2

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

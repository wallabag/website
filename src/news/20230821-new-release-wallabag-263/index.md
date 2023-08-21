---
title: 'wallabag 2.6.3'
published: true
date: 2023-08-21 14:00:00 +02:00
---

Here is the latest release of wallabag.

⚠️ This is a security release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## What's Changed

### Security fixes
* Replace GET way to POST way to reset data user by @nicosomb [https://github.com/wallabag/wallabag/commit/78b0b55c40511e1f22d5bbb4897aa10fca68441c](https://github.com/wallabag/wallabag/commit/78b0b55c40511e1f22d5bbb4897aa10fca68441c)
* Replace GET way to POST way to delete API client by @nicosomb [https://github.com/wallabag/wallabag/commit/ffcc5c9062fcc8cd922d7d6d65edbe5efae96806](https://github.com/wallabag/wallabag/commit/ffcc5c9062fcc8cd922d7d6d65edbe5efae96806)

### Improvement
* Add confirmation before reload entry by @nicosomb [https://github.com/wallabag/wallabag/pull/6778](https://github.com/wallabag/wallabag/pull/6778)
* Remove external dependencies on howto page by @viktoriussuwandi [https://github.com/wallabag/wallabag/pull/6775](https://github.com/wallabag/wallabag/pull/6775)

### Fixes
* Use Session instead of Referrer for Redirection by @Spoons [https://github.com/wallabag/wallabag/pull/6119](https://github.com/wallabag/wallabag/pull/6119)
* Reduce risk of collision for #content by @kdecherf [https://github.com/wallabag/wallabag/pull/6829](https://github.com/wallabag/wallabag/pull/6829)
* Update dependencies to fix vulnerabilities by @nicosomb [https://github.com/wallabag/wallabag/pull/6783](https://github.com/wallabag/wallabag/pull/6783)
* Fix failing randomly test by @nicosomb [https://github.com/wallabag/wallabag/pull/6763](https://github.com/wallabag/wallabag/pull/6763)

### Technical stuff
* Add check if git is installed by @nicosomb [https://github.com/wallabag/wallabag/pull/6788](https://github.com/wallabag/wallabag/pull/6788)
* Replace kernel.root_dir by kernel.project_dir by @yguedidi [https://github.com/wallabag/wallabag/pull/6809](https://github.com/wallabag/wallabag/pull/6809)
* Split symfony/symfony by @yguedidi [https://github.com/wallabag/wallabag/pull/6817](https://github.com/wallabag/wallabag/pull/6817)
* Make Crawler::extract get an array by @yguedidi [https://github.com/wallabag/wallabag/pull/6812](https://github.com/wallabag/wallabag/pull/6812)
* Use PSR-17 and PSR-18 by @yguedidi [https://github.com/wallabag/wallabag/pull/6816](https://github.com/wallabag/wallabag/pull/6816)
* Replace Client by KernelBrowser by @yguedidi [https://github.com/wallabag/wallabag/pull/6813](https://github.com/wallabag/wallabag/pull/6813)
* Replace Debug component by ErrorHandler component by @yguedidi [https://github.com/wallabag/wallabag/pull/6810](https://github.com/wallabag/wallabag/pull/6810)
* Make ImportController extends AbstractController by @yguedidi [https://github.com/wallabag/wallabag/pull/6808](https://github.com/wallabag/wallabag/pull/6808)
* Use Twig instead of templating by @yguedidi [https://github.com/wallabag/wallabag/pull/6797](https://github.com/wallabag/wallabag/pull/6797)
* Identify platforms by their class by @yguedidi [https://github.com/wallabag/wallabag/pull/6799](https://github.com/wallabag/wallabag/pull/6799)
* Move from transchoice to trans by @yguedidi [https://github.com/wallabag/wallabag/pull/6800](https://github.com/wallabag/wallabag/pull/6800)
* Replace GetResponseEvent by RequestEvent by @yguedidi [https://github.com/wallabag/wallabag/pull/6811](https://github.com/wallabag/wallabag/pull/6811)
* Ensure the kernel is shut down before calling createClient by @yguedidi [https://github.com/wallabag/wallabag/pull/6803](https://github.com/wallabag/wallabag/pull/6803)
* Ignore docker-compose.override.yml by @yguedidi [https://github.com/wallabag/wallabag/pull/6814](https://github.com/wallabag/wallabag/pull/6814)
* Add composer normalizer by @nicosomb [https://github.com/wallabag/wallabag/pull/6762](https://github.com/wallabag/wallabag/pull/6762)

You can read the [full Changelog](https://github.com/wallabag/wallabag/compare/2.6.2...2.6.3) on GitHub.

## Download wallabag 2.6.3

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

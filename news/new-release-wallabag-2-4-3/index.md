---
title: '[New release] wallabag 2.4.3'
published: true
date: 2022-02-15 08:35:00 +02:00
---

Here is the latest release of wallabag.
What changed?

It's a maintenance release, no big changes inside that release. It's mostly to catch up after almost a year without one release. 

- Site-configs were almost a year behind (17 versions behind exactly).
- A lot of JS package were totally outdated (yes jQuery is still outdated...).
- Also **wallabag is now compatible with PHP 8.0 & 8.1** !

To update your instance, [just run `make update`.](https://doc.wallabag.org/en/admin/upgrade.html#upgrading-from-23x-to-23y)

_🤝  A little reminder that you can support our work on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Fixes

* Tag view: order tags by label @Kdecherf in [#5296](https://github.com/wallabag/wallabag/pull/5296)
* Pagination style updated by @Simounet in [#5202](https://github.com/wallabag/wallabag/pull/5202)
* Improve performance of REST exists call by @Kdecherf in [#5261](https://github.com/wallabag/wallabag/pull/5261)
* Make RSS feed entry links valid and accessible by @hennevogel in [#5347](https://github.com/wallabag/wallabag/pull/5347)
* Fixed search on homepage by @nicosomb in [#5379](https://github.com/wallabag/wallabag/pull/5379)
* Fixed timeout when assigning tags to entry by @nicosomb in [#5156](https://github.com/wallabag/wallabag/pull/5156)
* Fixed reading time in epub/pdf exports by @nicosomb in [#5405](https://github.com/wallabag/wallabag/pull/5405)
* Fix dark theme developper page by @Simounet in [#5453](https://github.com/wallabag/wallabag/pull/5453)
* Fix dark mode background color for pre tags by @Kdecherf in [#5465](https://github.com/wallabag/wallabag/pull/5465)
* Show when articles is read by @nicosomb in [#5378](https://github.com/wallabag/wallabag/pull/5378)
* Added random button on article view by @nicosomb in [#5380](https://github.com/wallabag/wallabag/pull/5380)
* Fixed wrong number of entries for tag feeds by @christianjunk in [#5585](https://github.com/wallabag/wallabag/pull/5585)
* Add support for RTL content by @Monirzadeh in [#5599](https://github.com/wallabag/wallabag/pull/5599)
* Avoid overlapping images when downloading them by @j0k3r in [#5594](https://github.com/wallabag/wallabag/pull/5594)

## Meta

* Fix/tests by @Simounet in [#5217](https://github.com/wallabag/wallabag/pull/5217)
* dependabot: change schedule to check updates once a month by @Kdecherf in [#5260](https://github.com/wallabag/wallabag/pull/5260)
* Update dependencies by @Kdecherf in [#5326](https://github.com/wallabag/wallabag/pull/5326)
* Create SECURITY.md by @zidingz in [#5406](https://github.com/wallabag/wallabag/pull/5406)
* Add build test on PHP 8.0 & 8.1 by @j0k3r in [#5591](https://github.com/wallabag/wallabag/pull/5591)
* Fix Dependabot alerts for `tar` & `json-schema` by @j0k3r in [#5541](https://github.com/wallabag/wallabag/pull/5541)
* Change the name of the static package's root directory by @oupala in [#5542](https://github.com/wallabag/wallabag/pull/5542)
* Fixed unavailable russian website in test by @nicosomb in [#5376](https://github.com/wallabag/wallabag/pull/5376)
* Update deps by @j0k3r in [#5540](https://github.com/wallabag/wallabag/pull/5540)

## Translations

* Translations update from Weblate by @weblate in [#5187](https://github.com/wallabag/wallabag/pull/5187)
* Translations update from Weblate by @weblate in [#5391](https://github.com/wallabag/wallabag/pull/5391)
* Add Czech language by @marapavelka in [#5535](https://github.com/wallabag/wallabag/pull/5535)
* Translations update from Hosted Weblate by @weblate in [#5580](https://github.com/wallabag/wallabag/pull/5580)
* Translations update from Hosted Weblate by @weblate in [#5581](https://github.com/wallabag/wallabag/pull/5581)

## New Contributors

* @hennevogel made their first contribution in [#5347](https://github.com/wallabag/wallabag/pull/5347)
* @zidingz made their first contribution in [#5406](https://github.com/wallabag/wallabag/pull/5406)
* @marapavelka made their first contribution in [#5535](https://github.com/wallabag/wallabag/pull/5535)
* @oupala made their first contribution in [#5542](https://github.com/wallabag/wallabag/pull/5542)
* @christianjunk made their first contribution in [#5585](https://github.com/wallabag/wallabag/pull/5585)
* @Monirzadeh made their first contribution in [#5599](https://github.com/wallabag/wallabag/pull/5599)

**Full Changelog**: [https://github.com/wallabag/wallabag/compare/2.4.2...2.4.3](https://github.com/wallabag/wallabag/compare/2.4.2...2.4.3)

## Download wallabag 2.4.3

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
You can help us via [Liberapay](https://liberapay.com/wallabag/) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UBA65LG3FX9Y&lc=gb).
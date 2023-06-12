---
title: '[New release] wallabag 2.5.4'
published: true
date: 2023-02-09 09:30:00 +02:00
show_pageimage: true
image_width: 1038
image_height: 437
feed:
    limit: 10
---

⚠️ This is a **security** release of wallabag.

To update your instance, [just run `make update`.](https://doc.wallabag.org/en/admin/upgrade.html#upgrading-from-23x-to-23y)

_🤝  A little reminder that you can support our work on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

We added a limitation on adding tags from the entry page : only 4 tags at a time and a max length of 40 characters.

## What's Changed

* Fix release script by @j0k3r in [https://github.com/wallabag/wallabag/pull/6275](https://github.com/wallabag/wallabag/pull/6275)
* Fix (CVE-2023-0734) adding tag to entries from other people by @j0k3r in [https://github.com/wallabag/wallabag/pull/6290](https://github.com/wallabag/wallabag/pull/6290)
* Fix (CVE-2023-0736) XSS on username on share page by @j0k3r in [https://github.com/wallabag/wallabag/pull/6288](https://github.com/wallabag/wallabag/pull/6288)
* Fix (CVE-2023-0735 & CVE-2023-0737) CSRF on user deletion by @j0k3r in [https://github.com/wallabag/wallabag/pull/6289](https://github.com/wallabag/wallabag/pull/6289)
* Prepare 2.5.4 by @j0k3r in [https://github.com/wallabag/wallabag/pull/6291](https://github.com/wallabag/wallabag/pull/6291)


**Full Changelog**: [https://github.com/wallabag/wallabag/compare/2.5.3...2.5.4](https://github.com/wallabag/wallabag/compare/2.5.3...2.5.4)

## Download wallabag 2.5.4

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
You can help us via [Liberapay](https://liberapay.com/wallabag/) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UBA65LG3FX9Y&lc=gb).
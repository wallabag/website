---
title: '[New release] wallabag 2.4.1'
published: true
date: 2021-01-05
---

### Happy new year everyone 🎉

For that first release of that (hopefully) better year than 2020, we have fixed some bugs.

We've also added a new command to clean downloaded images (for those who have enabled download images locally). You can try it to see how much spaces it'll free:

```sh
php bin/console wallabag:clean-downloaded-images --env=prod --dry-run
```

To update your instance, [just run `make update`.](https://doc.wallabag.org/en/admin/upgrade.html#upgrading-from-23x-to-23y)

_🤝  A little reminder that you can support our work on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

### Fixes
- Fix path icons from manifest.json [#4811](https://github.com/wallabag/wallabag/pull/4811)
- Fix missing apple-touch-icon-512.png from manifest.json [#4823](https://github.com/wallabag/wallabag/pull/4823)
- migrations: fix mysql migration for an edge case [#4832](https://github.com/wallabag/wallabag/pull/4832)
- Add a command to clean downloaded images [#4844](https://github.com/wallabag/wallabag/pull/4844)
- Add a query to parse only non-hashed URL [#4865](https://github.com/wallabag/wallabag/pull/4865) [#4878](https://github.com/wallabag/wallabag/pull/4878)
- material: fix issue with cookie check for light/dark theme [#4866](https://github.com/wallabag/wallabag/pull/4866)
- Show OTP secret next to the QR Code [#4868](https://github.com/wallabag/wallabag/pull/4868)
- views: add title to tag li elements, for consistency [#4894](https://github.com/wallabag/wallabag/pull/4894)
- Add label and issuer to OTP config [#4301](https://github.com/wallabag/wallabag/pull/4301)

### Meta
- Update release process and introduce 2.4.1-dev [#4808](https://github.com/wallabag/wallabag/pull/4808)
- Remove community.wallabag.org from the issue template [#4817](https://github.com/wallabag/wallabag/pull/4817)
- Update issue templates [#4843](https://github.com/wallabag/wallabag/pull/4843)
- Allow GitHub Actions to run on 2.* branches [#4896](https://github.com/wallabag/wallabag/pull/4896)
- Prepare 2.4.1 [#4904](https://github.com/wallabag/wallabag/pull/4904)

## Download wallabag 2.4.1

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
You can help us via [Liberapay](https://liberapay.com/wallabag/) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UBA65LG3FX9Y&lc=gb).

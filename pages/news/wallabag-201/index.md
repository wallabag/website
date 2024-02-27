---
title: '[New release] wallabag 2.0.1'
date: 2016-04-11 21:00:00 +02:00
---

It's time to update! [We released wallabag 2.0.0](https://www.wallabag.org/blog/2016/04/03/wallabag-v2) a week ago and it was a success : 

* more than 650 downloads for the package
* [our tweet](https://twitter.com/wallabagapp/status/716744572215435268) was retweeted more than 50 times.
* we've got two articles on French big websites: [Numerama](http://www.numerama.com/tech/160115-le-pocket-libre-wallabag-fait-le-plein-de-fonctionnalites.html) and [NextInpact](http://www.nextinpact.com/news/99330-sauvegarde-darticles-wallabag-2-0-deboule-avec-longue-liste-nouveautes.htm)

And some issues too! That's why we release **wallabag 2.0.1**.

## Changelog

### Added

- [Documentation about importing large file](http://doc.wallabag.org/en/master/user/installation.html#installing-on-nginx) into nginx. (Nicolas Lœuillet)
- [Documentation about wallabag API](http://doc.wallabag.org/en/master/developer/api.html) (Nicolas Lœuillet)
- [#1861](https://github.com/wallabag/wallabag/pull/1861) Round estimated time and add reading speed for Baggy (Nicolas Lœuillet)
- [Documentation about wallabag v1 CLI import](http://doc.wallabag.org/en/master/user/migration.html#import-via-command-line-interface-cli) (Nicolas Lœuillet)
- [Add migration link](http://doc.wallabag.org/en/master/user/migration.html) in documentation (Nicolas Lœuillet)

### Changed

- [#1912](https://github.com/wallabag/wallabag/pull/1912) Move setup config outside setupAdmin (Jeremy Benoist)
- [#1823](https://github.com/wallabag/wallabag/pull/1823) Persian translation (Masoud Abkenar)
- [#1901](https://github.com/wallabag/wallabag/pull/1901) Spanish translation (Jeremy Benoist)
- [#1879](https://github.com/wallabag/wallabag/pull/1879) Move tag form in Material theme (Nicolas Lœuillet)

### Fixed

- [#1903](https://github.com/wallabag/wallabag/pull/1903) Force server version to avoid connection error (Jeremy Benoist)
- [#1887](https://github.com/wallabag/wallabag/pull/1887) Fix duplicate article when added via the bookmarklet (Nicolas Lœuillet)
- [#1895](https://github.com/wallabag/wallabag/pull/1895) API: All the entries are fetched via GET /api/entries (Nicolas Lœuillet)
- [#1898](https://github.com/wallabag/wallabag/pull/1898) Fix estimated reading time in material view #1893 (Nicolas Lœuillet)
- [#1896](https://github.com/wallabag/wallabag/pull/1896) remove download_picture setting and manage show_printlink in material theme #1867 (Nicolas Lœuillet)
- [#1894](https://github.com/wallabag/wallabag/pull/1894) Fix documentation link in developer page (Nicolas Lœuillet)
- [#1891](https://github.com/wallabag/wallabag/pull/1891) Fix typo on configuration page (Nicolas Lœuillet)
- [#1884](https://github.com/wallabag/wallabag/pull/1884) Change the installation method in issue template (Nicolas Lœuillet)
- [#1844](https://github.com/wallabag/wallabag/pull/1844) Lock ocramius/proxy-manager (Jeremy Benoist)
- [#1840](https://github.com/wallabag/wallabag/pull/1840) Fix Archive page title translation (Nicolas Lœuillet)
- [#1801](https://github.com/wallabag/wallabag/pull/1804) Force user-agent for iansommerville.com (Jeremy Benoist)

### Removed

- [#1900](https://github.com/wallabag/wallabag/pull/1900) Remove empty portugese documentation (Nicolas Lœuillet)
- [#1868](https://github.com/wallabag/wallabag/pull/1868) Remove keyboard shortcut and add tagging rule panel in baggy (Nicolas Lœuillet)
- [#1824](https://github.com/wallabag/wallabag/pull/1824) Remove SMTP configuration environment overrides (Mathieu Bruyen)

## Download wallabag 2.0.1

To download, install/upgrade wallabag, [please read our Downloads page](https://www.wallabag.org/pages/download-wallabag.html). 

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) (a chat platform), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
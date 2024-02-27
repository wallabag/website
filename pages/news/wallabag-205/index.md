---
title: '[New release] wallabag 2.0.5'
date: 2016-05-31 22:00:00 +02:00
---

It's time to update! We just released **wallabag 2.0.5**.  
We fixed a critical bug: when you deleted an article with associated tags, wallabag also deleted the relation between those tags and other articles. 

Here is the changelog: 

## Changelog

### Added

- [#2052](https://github.com/wallabag/wallabag/pull/2052) Add unread filter to entries pages (Dan Bartram)

### Changed

- [#2093](https://github.com/wallabag/wallabag/pull/2093) Replace vertical dots in material theme with horizontal dots (Nicolas Lœuillet)
- [#2054](https://github.com/wallabag/wallabag/pull/2054) Update italian translation (Daniele Conca)
- [#2068](https://github.com/wallabag/wallabag/pull/2068), [#2049](https://github.com/wallabag/wallabag/pull/2049) Update documentation (Josh Panter, Mario Vormstein)

### Fixed

- [#2122](https://github.com/wallabag/wallabag/pull/2122) Fix the deletion of Tags/Entries relation when delete an entry (Jeremy Benoist, Nicolas Lœuillet)
- [#2095](https://github.com/wallabag/wallabag/pull/2095) Fix form user display when 2FA is disabled (Nicolas Lœuillet)
- [#2092](https://github.com/wallabag/wallabag/pull/2092) API: Starred and archived clears if article is already exists (Rurik19)
- [#2097](https://github.com/wallabag/wallabag/issues/2097) Fix image path in 2-factor authentification email (Baptiste Mille-Mathias)
- [#2069](https://github.com/wallabag/wallabag/pull/2069) Do not specify language in Firefox addon link (Merouane Atig)

## Download wallabag 2.0.5

To download, install/upgrade wallabag, [please read our Downloads page](https://www.wallabag.org/pages/download-wallabag.html). 

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) (a chat platform), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
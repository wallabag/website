---
title: '[New release] wallabag 2.1.1'
date: 2016-10-04 20:00:00 +02:00
---

[We released wallabag 2.1.0 yesterday](https://www.wallabag.org/blog/2016/10/03/wallabag-21) and we need to release this patch now. We made some mistakes with the installation and update process.  
In fact, we screwed up with the assets by adding `npm` in the installation process. Now, we do this operation during the build process, not on your webserver.

[The documentation for the upgrade is available here](http://doc.wallabag.org/en/master/user/upgrade-2.0.x-2.1.y.html).

**After the upgrade, you can delete the `node_modules` directory.**

## Changelog

### Changed

- [#2340](https://github.com/wallabag/wallabag/pull/2340) Updated german translation (Strubbl)
- [#2341](https://github.com/wallabag/wallabag/pull/2341) Updated polish translation (Mateusz Rumiński)
- [#2354](https://github.com/wallabag/wallabag/pull/2354) Add php-bcmath extension to requirements (Godinez Pablo)

### Fixed

- [#2338](https://github.com/wallabag/wallabag/pull/2338) Fixed 2.1 installation (Jeremy Benoist)
- [#2345](https://github.com/wallabag/wallabag/issues/2345) Fixed 2.0.x update (Jeremy Benoist)
- [#2353](https://github.com/wallabag/wallabag/pull/2353) Fixed assets problem (Thomas Citharel)
- [#2359](https://github.com/wallabag/wallabag/pull/2359) Create config even if user is disabled (Jeremy Benoist)

<hr />

## Download wallabag 2.1.1

To download, install/upgrade wallabag, [please read our Downloads page](https://www.wallabag.org/pages/download-wallabag.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) (a chat platform), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
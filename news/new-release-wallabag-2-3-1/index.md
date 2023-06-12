---
title: '[New release] wallabag 2.3.1'
published: true
date: 2017-12-26
---

It's time to update your wallabag installation, **2.3.1 is here**!

[The documentation for the upgrade is available here](https://doc.wallabag.org/en/admin/upgrade.html).

## Changelog

### Fixes

- Changed the way to check for initial migration [#3487](https://github.com/wallabag/wallabag/pull/3487)
- Displayed the RSS icon on homepage route [#3490](https://github.com/wallabag/wallabag/pull/3490)
- Hided the share toggle button if no service is enabled [#3492](https://github.com/wallabag/wallabag/pull/3492)
- Updated robots.txt to prevent crawling [#3510](https://github.com/wallabag/wallabag/pull/3510)
- Fixed lower case tags migration [#3507](https://github.com/wallabag/wallabag/pull/3507)
- Fixed initial migration when using custom table prefix [#3504](https://github.com/wallabag/wallabag/pull/3504)
- Fixed assets for subfolder install [#3524](https://github.com/wallabag/wallabag/pull/3524)
- Fixed empty card title link [#3525](https://github.com/wallabag/wallabag/pull/3525)
- Fixed empty title and domain_name when exception is thrown during fetch [#3442](https://github.com/wallabag/wallabag/pull/3442)
- API: copied entry object before sending, to keep id [#3516](https://github.com/wallabag/wallabag/pull/3516)

### Changes

- Added custom driver & schema manager for PostgreSQL 10 [#3488](https://github.com/wallabag/wallabag/pull/3488)
- Replaced exit_to_app, redo and autorenew icons [#3513](https://github.com/wallabag/wallabag/pull/3513)
- Added PHP 7.2 compatibility [#3515](https://github.com/wallabag/wallabag/pull/3515)

## Download wallabag 2.3.1

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Don’t want to host wallabag by yourself?

On December 2016, [**wallabag.it** was launched](https://wallabag.it). wallabag.it is a paid service to use wallabag without installing it on a web server.

This service already ships wallabag 2.3.1. [You can create your account here](https://app.wallabag.it/). Try it for free: you'll get a 14-day free trial with no limitation (no credit card information required).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
You can help us via [Liberapay](https://liberapay.com/wallabag/) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UBA65LG3FX9Y&lc=gb).

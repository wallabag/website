---
title: 'wallabag 2.7.0-alpha.2 and wallabin'
published: true
date: 2026-11-24 10:00:00 +01:00
release: 2.7.0-alpha.2
description: Second test release of wallabag 2.7.0, and wallabin, a small tool to install and update wallabag
---

Today, we publish **wallabag 2.7.0-alpha.2**, the second test release of 2.7.0. And with it, a new tool: **wallabin**, to install and update wallabag much more easily.

_🤝 A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## wallabag 2.7.0-alpha.2

⚠️ This is an **alpha** release: **do not use it in production**, and back up your database before trying it.

It follows [wallabag 2.7.0-alpha.1](/news/20261113-wallabag-270-alpha1/), whose blog post presents everything that changes with 2.7.0. The main new features since alpha 1:

* save articles by sending them by email,
* subscribe to RSS and Atom feeds,
* import a plain list of URLs,
* all the fixes of the 2.6 branch, up to [wallabag 2.6.19](/news/20261124-new-release-wallabag-2619/).

If you package wallabag or install it manually: the package no longer contains a database or an account, and `APP_SECRET` is now required. Everything is detailed in [the installation documentation](https://doc.wallabag.org/admin/installation/installation/#on-shared-hosting).

The full list of changes is on [the release page on GitHub](https://github.com/wallabag/wallabag/releases/tag/2.7.0-alpha.2).

## Meet wallabin

Until now, updating wallabag needed git, Composer and `make update`. And when something broke halfway, going back was not easy 😅

wallabin is a single file. All you need to run it is PHP:

```bash
curl -L -o wallabin.phar https://wallabag.org/wallabin
php wallabin.phar install --release=2.7.0-alpha.2 wallabag-test
```

wallabin asks you three questions (the URL of your instance, your database, the password of the admin user) and takes care of the rest.

⚠️ wallabag 2.7 needs **PHP 8.2, 8.3 or 8.4**. PHP 8.5 is not supported yet: if it's your default version, run wallabin with another one, for example `php8.4 wallabin.phar install`.

With the final 2.7.0 release, an update will be one command, `update`. wallabin will check that your server has what it needs, keep a copy of the previous version so you can go back, and refuse any package whose signature is wrong.

Everything is explained in [the wallabin README](https://github.com/wallabag/wallabin).

## Running 2.6?

First update your instance to the latest 2.6 version (2.6.19 or later) with `make update`, as usual. When 2.7.0 is out, `wallabin migrate` will move it to 2.7.

To test the migration already, make a copy of your instance and of its database, and run `wallabin migrate --pre` on this copy. Never on the instance you use every day 🙏

## How it works

For each new version, GitHub automatically builds and signs the wallabag package. wallabin then reads [wallabag.org/releases.json](https://wallabag.org/releases.json) to know which version to install, and checks the signature before installing anything.

## Your feedback

wallabin is brand new and will eventually replace `make install` and `make update`. Try it, preferably on a test instance, and tell us what goes wrong: [open an issue on GitHub](https://github.com/wallabag/wallabin/issues). For a problem with alpha 2, please open [an issue on wallabag](https://github.com/wallabag/wallabag/issues/new/choose) and mention 2.7.0-alpha.2. Thanks in advance ❤️

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

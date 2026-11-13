---
title: 'wallabag 2.7.0-alpha.1'
published: true
date: 2026-11-13 16:30:00 +01:00
description: First alpha release of wallabag 2.7.0, with PHP 8.2, configuration by environment variables and many new features
---

In 2023, [I wrote](/news/20230824-about-wallabag-270/) that I would like to publish wallabag 2.7.0 before the end of the year. Well… it took a bit longer than expected 😅

Today, we publish **wallabag 2.7.0-alpha.1**, the first test release of 2.7.0.

⚠️ This is an **alpha** release: **do not use it in production**, and back up your database before upgrading. The latest stable release is still [wallabag 2.6.17](/news/20261113-new-release-wallabag-2617/).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## How to test it

`make update` only installs stable releases, so you have to update your instance manually. Everything is explained in the [upgrade documentation for 2.7](https://master--wallabag-doc.netlify.app/admin/upgrade/#upgrading-from-26x-to-27x).

You can download the package from [the release page on GitHub](https://github.com/wallabag/wallabag/releases/tag/2.7.0-alpha.1).

If something goes wrong, please [open an issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose) and mention 2.7.0-alpha.1. That's the whole point of this alpha 🙏

## For packagers, hosting providers and app developers

If you package wallabag or offer it on your platform (YunoHost, Cloudron, Synology, NixOS, TrueNAS, Docker, hosting providers…), this alpha is the right time to test the upgrade from 2.6. Here is what changes for you:

* **PHP 8.2 minimum**, with the `fileinfo` extension.
* **Symfony 5.4** instead of 4.4, and **new database migrations** to run after the upgrade.
* **Configuration with environment variables.** `app/config/parameters.yml` is still read, but deprecated. Set `APP_ENV=prod`, and `APP_SECRET` if you don't use `parameters.yml`.
* **`web/wallassets/` is now `web/build/`**: update your web server rules if they point to it.
* Pages and API endpoints you are not allowed to access now return a **404 error instead of a 403 error**. App developers, please check your error handling.
* A Docker image `wallabag/wallabag:2.7.0-alpha.1` is available. The `latest` tag stays on 2.6.17.

Something breaks, or our documentation is unclear? Please [open an issue](https://github.com/wallabag/wallabag/issues/new/choose) and mention 2.7.0-alpha.1. We're happy to help.

## Human summary

### What you need to know before upgrading

* **PHP 8.2 or later is required.** PHP 7.4, 8.0 and 8.1 are no longer supported.
* **wallabag is now configured with environment variables.** Your `app/config/parameters.yml` file still works, but it is deprecated and will be removed in wallabag 3.0.
* Public registration is now disabled by default.
* Pages you are not allowed to access now return a 404 error instead of a 403 error.
* The MOBI export, the Pocket API import and the demo mode have been removed. You can still import from Pocket with the CSV export.
* The `wallassets/` folder is renamed to `build/`.

### What's new

* an OPDS catalog for your e-reader,
* a Markdown export, and tags in the EPUB and PDF exports,
* font size and font selectors for reading,
* a setting to choose your homepage view,
* a two-step setup for two-factor authentication with an app,
* optional CAPTCHA on user creation and optional check of compromised passwords,
* sharing to linkding,
* search also looks in your annotations,
* a reset of your tagging rules,
* new console commands to import a URL and to create an API client,
* Galician and Korean languages.

We will present the major new features in more detail when we publish the final 2.7.0 release.

Under the hood, wallabag moved to Symfony 5, got a new frontend stack and lots of cleanup. Many thanks to @yguedidi for this huge work, and to all the contributors of this release ❤️

This release also includes the security fixes of [wallabag 2.6.16](/news/20261113-new-release-wallabag-2616/).

## What's Changed

The full list of changes is on [the release page on GitHub](https://github.com/wallabag/wallabag/releases/tag/2.7.0-alpha.1).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

@nicosomb

---
title: 'wallabag 2.6.15'
published: true
date: 2026-10-28 11:00:00 +02:00
description: New release of wallabag with PHP 8.4 support, content fetching fixes and Redis improvements
---

Here is the latest release of wallabag.

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/admin/upgrade/).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Human summary

wallabag 2.6.15 supports **PHP 8.4**, while keeping compatibility with PHP 7.4. The 2.6 series still uses legacy dependencies, so deprecation notices may appear. See the [PHP requirements](https://doc.wallabag.org/admin/installation/requirements/) for installation and production configuration advice.

This release also improves article fetching: supplied HTML is reused, prefetched content is kept separate between entries, and available metadata is preserved when fetching fails.

Graby receives a security update, and site extraction configurations catch up with a year of updates.

Redis configuration is more flexible with the new `REDIS_URL` environment variable for imports. Existing connection settings, including passwords with special characters, continue to work when it is not set: **no Redis configuration change is required when upgrading from 2.6.14**. See the [Redis configuration documentation](https://doc.wallabag.org/admin/parameters/#redis_url) for details.

## A note about the Docker image 2.6.14.1

We published [Docker image 2.6.14.1](https://github.com/wallabag/docker/releases/tag/2.6.14.1) to deliver important security fixes without waiting for wallabag 2.6.15. This rebuild updated system packages, notably addressing the critical PHP vulnerabilities **CVE-2026-109618** and **CVE-2026-109619**, without changing the wallabag application version. A new Docker image for wallabag 2.6.15 will follow.

## What's Changed

### Improvements

* Support PHP 8.4 while retaining PHP 7.4 compatibility by @j0k3r in [#9099](https://github.com/wallabag/wallabag/pull/9099)
* Introduce `REDIS_URL` for Redis-backed imports by @Kdecherf in [#8868](https://github.com/wallabag/wallabag/pull/8868)

### Fixes

* Hide the delete public link action when no public link exists by @nicosomb in [#8878](https://github.com/wallabag/wallabag/pull/8878)
* Reuse supplied HTML when fetching entry metadata by @Kdecherf in [#8889](https://github.com/wallabag/wallabag/pull/8889)
* Escape dynamic data in ePub exports by @j0k3r in [#8968](https://github.com/wallabag/wallabag/pull/8968)
* Fix merging of existing and fetched entry content by @Simounet in [#8985](https://github.com/wallabag/wallabag/pull/8985)
* Isolate prefetched HTML between entries and preserve available metadata when fetching fails by @j0k3r in [#9099](https://github.com/wallabag/wallabag/pull/9099)
* Preserve existing Redis connection parameters and authentication when `REDIS_URL` is not set, and fix Redis-backed sessions in the Docker configuration example by @j0k3r in [#9099](https://github.com/wallabag/wallabag/pull/9099)

### Technical stuff

* Include the documentation in the main repository by @yguedidi in [#8780](https://github.com/wallabag/wallabag/pull/8780)
* Update Graby and PHP Readability dependencies by @Kdecherf in [#8891](https://github.com/wallabag/wallabag/pull/8891)
* Fix volatile test URLs by @Kdecherf in [#8892](https://github.com/wallabag/wallabag/pull/8892)
* Update phpseclib to 3.0.55 by @Kdecherf in [#8919](https://github.com/wallabag/wallabag/pull/8919)
* Update Graby for security fixes and refresh site extraction configurations by @j0k3r in [#9099](https://github.com/wallabag/wallabag/pull/9099)
* Update translations by @j0k3r in [#9113](https://github.com/wallabag/wallabag/pull/9113)

You can read the [full changelog](https://github.com/wallabag/wallabag/compare/2.6.14...2.6.15) on GitHub.

## Download wallabag 2.6.15

To download, install/upgrade wallabag, [please read our downloads page](https://doc.wallabag.org/admin/installation/installation/).

<hr />

## Need help?

[We are on Matrix](https://matrix.to/#/#wallabag:matrix.org), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new/choose).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

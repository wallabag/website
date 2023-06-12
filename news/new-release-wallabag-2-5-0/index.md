---
title: '[New release] wallabag 2.5.0'
published: true
date: 2022-05-22 10:39:00 +02:00
---

Here is the latest release of wallabag.
What changed?

⚠️  **Important note:**
- we dropped support for [PHP < 7.4](https://github.com/wallabag/wallabag/pull/5791).
- the 2.6.0 release should [drop PHP < 8.0](https://github.com/wallabag/wallabag/issues/5776#issuecomment-1122805770).
- the baggy theme has been deprecated and will be removed in 2.6.0 (global theming will be removed and only the material theme will remain).

💅 **New features were shipped in that release:**

- Delicious import (if you still have credentials for your account, just go [https://del.icio.us/](https://del.icio.us/))
- `webp` image can now be downloaded locally (when caching images is enabled)
- You can now list entries with annotations
- You can now add a tag to a search results
- A new API endpoint was added to retrieve the user configuration
- The Docker image from within that repo has been rebuild. You MUST NOT use that one for production, only for dev purpose. For production, check https://github.com/wallabag/docker.

📈  **To update your instance**, [just run `make update`.](https://doc.wallabag.org/en/admin/upgrade.html#upgrading-from-22x-to-23x)

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

### Features

- Add Delicious import by @j0k3r in [https://github.com/wallabag/wallabag/pull/5022](https://github.com/wallabag/wallabag/pull/5022)
- Add route to list entries with annotations by @nicosomb in [https://github.com/wallabag/wallabag/pull/4341](https://github.com/wallabag/wallabag/pull/4341)
- Add an option to sort the feed entries by `updated_at` by @agallou in [https://github.com/wallabag/wallabag/pull/5659](https://github.com/wallabag/wallabag/pull/5659)
- Add support to download webp image locally by @j0k3r in [https://github.com/wallabag/wallabag/pull/5687](https://github.com/wallabag/wallabag/pull/5687)
- Update readme and docker development env by @Kdecherf in [https://github.com/wallabag/wallabag/pull/5662](https://github.com/wallabag/wallabag/pull/5662)
- Add action to assign a search as a tag to each result by @nicosomb in [https://github.com/wallabag/wallabag/pull/5381](https://github.com/wallabag/wallabag/pull/5381)
- Drop PHP prior to 7.4 by @yguedidi in [https://github.com/wallabag/wallabag/pull/5791](https://github.com/wallabag/wallabag/pull/5791)

### Deprecated features
- Deprecate Baggy theme by @j0k3r in [https://github.com/wallabag/wallabag/pull/5742](https://github.com/wallabag/wallabag/pull/5742)
- Deprecate mobi export by @Kdecherf in [https://github.com/wallabag/wallabag/pull/5775](https://github.com/wallabag/wallabag/pull/5775)

### API

- Add new endpoint for API: config by @nicosomb in [https://github.com/wallabag/wallabag/pull/5673](https://github.com/wallabag/wallabag/pull/5673)

### Technical stuff

- Fix test with `usinenouvelle.com` being flaky these times by @j0k3r in [https://github.com/wallabag/wallabag/pull/5686](https://github.com/wallabag/wallabag/pull/5686)
- Replace `iconv()` calls with Transliterator by @Kdecherf in [https://github.com/wallabag/wallabag/pull/5680](https://github.com/wallabag/wallabag/pull/5680)
- Composer 2.3 isn't compatible with wallabag by @j0k3r in [https://github.com/wallabag/wallabag/pull/5708](https://github.com/wallabag/wallabag/pull/5708)
- CI workaround for PHP < 7.4 & MySQL 8 by @j0k3r in [https://github.com/wallabag/wallabag/pull/5729](https://github.com/wallabag/wallabag/pull/5729)
- Set permissions for GitHub actions by @naveensrinivasan in [https://github.com/wallabag/wallabag/pull/5732](https://github.com/wallabag/wallabag/pull/5732)
- Included githubactions in the dependabot config by @naveensrinivasan in [https://github.com/wallabag/wallabag/pull/5737](https://github.com/wallabag/wallabag/pull/5737)
- Remove bundle inheritance by @yguedidi in [https://github.com/wallabag/wallabag/pull/5746](https://github.com/wallabag/wallabag/pull/5746)
- Fix SQLite database location by @yguedidi in [https://github.com/wallabag/wallabag/pull/5771](https://github.com/wallabag/wallabag/pull/5771)
- Disable XDebug in test make recipe by @yguedidi in [https://github.com/wallabag/wallabag/pull/5770](https://github.com/wallabag/wallabag/pull/5770)
- Exclude local phpunit.xml by @yguedidi in [https://github.com/wallabag/wallabag/pull/5757](https://github.com/wallabag/wallabag/pull/5757)
- Upgrade PHP dependencies by @yguedidi in [https://github.com/wallabag/wallabag/pull/5778](https://github.com/wallabag/wallabag/pull/5778)

### Translations

- Enabled greek translation by @nicosomb in [https://github.com/wallabag/wallabag/pull/5656](https://github.com/wallabag/wallabag/pull/5656)
- Translations update from Hosted Weblate by @weblate see [https://github.com/wallabag/wallabag/pulls?q=is%3Apr+author%3Aweblate+milestone%3A2.5.0+is%3Amerged](https://github.com/wallabag/wallabag/pulls?q=is%3Apr+author%3Aweblate+milestone%3A2.5.0+is%3Amerged)

### Fixes

- Fix tagging rule match when user has a custom reading speed by @j0k3r in [https://github.com/wallabag/wallabag/pull/5646](https://github.com/wallabag/wallabag/pull/5646)
- Feat/home entries updated by @Simounet in [https://github.com/wallabag/wallabag/pull/5664](https://github.com/wallabag/wallabag/pull/5664)
- Fix row and card style regressions by @Simounet in [https://github.com/wallabag/wallabag/pull/5676](https://github.com/wallabag/wallabag/pull/5676)
- Fix epub language by @j0k3r in [https://github.com/wallabag/wallabag/pull/5647](https://github.com/wallabag/wallabag/pull/5647)
- material: improve mass buttons style, mostly for smartphone screens by @Kdecherf in [https://github.com/wallabag/wallabag/pull/5695](https://github.com/wallabag/wallabag/pull/5695)
- Fix composer version in docker dev configuration by @nicosomb in [https://github.com/wallabag/wallabag/pull/5715](https://github.com/wallabag/wallabag/pull/5715)
- Use site with subdomain as tagging rule example by @jonas-hagen in [https://github.com/wallabag/wallabag/pull/5744](https://github.com/wallabag/wallabag/pull/5744)
- Fix PHP Docker image by @yguedidi in [https://github.com/wallabag/wallabag/pull/5772](https://github.com/wallabag/wallabag/pull/5772)

**Full Changelog**: [https://github.com/wallabag/wallabag/compare/2.4.3...2.5.0](https://github.com/wallabag/wallabag/compare/2.4.3...2.5.0)

## Download wallabag 2.5.0

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
You can help us via [Liberapay](https://liberapay.com/wallabag/) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UBA65LG3FX9Y&lc=gb).
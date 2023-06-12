---
title: '[New release] wallabag (long awaited) 2.4 is here'
published: true
date: 2020-12-10 15:10:00 +02:00
---

# 🎉 **The long awaited 2.4.0 is finally here** 🌟 
There's a ton of new features (you can check the full changelog if you want to see them all). We'll only highlight main ones here.

_🤝  A little reminder that you can support our work on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

# New features

- Allow to rename tags from the web interface [#3574](https://github.com/wallabag/wallabag/pull/3574),
- Possibility to change locale from login/register pages [#3216](https://github.com/wallabag/wallabag/pull/3216),
- Ability to import/export tagging rules [#4028](https://github.com/wallabag/wallabag/pull/4028),
- Enable OTP 2FA via third-party apps (Google Authenticator, Authy or FreeOTP) [#3798](https://github.com/wallabag/wallabag/pull/3798),
- Add random feature [#3526](https://github.com/wallabag/wallabag/pull/3526),
- Ability to revoke feed token [#3994](https://github.com/wallabag/wallabag/pull/3994),
- Move Ignore Origin rules to database [#4026](https://github.com/wallabag/wallabag/pull/4026),
- Ability to manually define the reading speed [#4053](https://github.com/wallabag/wallabag/pull/4053),
- MathJax support [#4128](https://github.com/wallabag/wallabag/pull/4128),
- Allow custom styles system wide [#4151](https://github.com/wallabag/wallabag/pull/4151),
- Support elCurator import [#4175](https://github.com/wallabag/wallabag/pull/4175),
- Add mass actions for Material design in list view [#4326](https://github.com/wallabag/wallabag/pull/4326),
- Add Dark theme to Material [#4725](https://github.com/wallabag/wallabag/pull/4725)

As a side note, the **baggy** theme is now deprecated and will be removed in 2.5.0. 👋

# Technical changes

## Support for PHP 7.4

The 2.3.8 lacked support for PHP 7.4 but, hey, that wallabag 2.3.8 was released in May 2019 and PHP 7.4 first alpha goes out in June 2019.
Maybe we should have release 2.3.9 with PHP 7.4 support but there was too much stuff in the master and lack of motivation to only keep commits which enabled support.
I hope we'll be more reactive for PHP 8.0 :)

## Dropped support for PHP < 7.2

_PRs #3758 #4441_

We removed support for PHP < 7.2 because lower version aren't supported by PHP itself.
First we remove support for PHP < 7.1 back in Novembre 2018 https://github.com/wallabag/wallabag/pull/3758 and then support for PHP < 7.2 in June 2020.

Some people will arg that we should keep the lowest version possible because some folks are maintaining outdated version of PHP but we need to move on.
Also, security support for PHP 7.2 will end in [November 2020](https://www.php.net/supported-versions.php) but we think it's too fast for most people. Also Symfony still required PHP >=7.2.5 for the current master (the upcoming 5.2.0).

## Translations in Weblate

_PRs #4447 #4359 #4442_

The whole application is now connected to the Weblate platform which allow anyone to contribute to the translation without having to use Git at all.
There are [multiple sources in Weblate for the wallabag project](https://hosted.weblate.org/projects/wallabag/) because the iOS & Android app are also using it.

The application is now fully translated in 10 languages! :fr: :us: :cn: :kr: :jp: :netherlands: :ru: :tr: :de: :es:
It's amazing.
✏️ Feel free to improve translations.

## Hashed URLs for faster check

_PR #3158_

People using the API to save contents often have to check if the URL already exists in the database. Using the plain URL to check wasn't fast enough and it can lead to _privacy_ leak (see https://github.com/wallabag/wallabag/pull/4361#issuecomment-723572855).
That's why there is now a hash of the URL for each entry. Don't forget to run the command `php bin/console --env=prod wallabag:generate-hashed-urls` after upgrading to 2.4.0.

URLs are hashed using `sha1`.

## Add basic search endpoint

_PR #3627_

The API now expose a _basic_ search endpoint. We declare it as basic because it's a simple search in the database (like the one in the web interface). No robust search engine were involved in that change.

# How to upgrade

- perform a backup of the database (just in case)
- run `make update` from your wallabag directoy
- run `php bin/console --env=prod wallabag:generate-hashed-urls` which will generates a hash of URL for all saved entries (improve API search+++)

You might be interested in this information too:
- you can safely remove `database_driver_class` from the `app/config/parameters.yml` file
- install `imagick` PHP extension if you want GIF animation to be kept when saving images locally
- you can now use [Sentry](https://sentry.io/) to log errors from wallabag, just define `sentry_dsn` in `app/config/parameters.yml`

## Download wallabag 2.4

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
You can help us via [Liberapay](https://liberapay.com/wallabag/) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UBA65LG3FX9Y&lc=gb).
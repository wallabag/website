---
title: 'wallabag 2.6.1'
published: true
date: 2023-06-21 08:00:00 +02:00
---

⚠️ **We had issues with our update process in 2.6.0 release: this release fixes one of them. Be careful, it may possible that we have other unknown issues. Please do backups.**

If you have issue with this issue `You have requested a non-existent service "scheb_two_factor.security.google_authenticator".`, [please read this message](https://github.com/wallabag/wallabag/issues/6649#issuecomment-1600262599). 

⚠️ **There are two points to focus for that update**:

1. We added new fields in the database, don't forget to run migration (by running `make update`) otherwise your wallabag won't work.
2. We've updated the mailer config which needs to be replicated otherwise it might not work.

   We removed in `app/config/parameters.yml`:
   - `mailer_transport`
   - `mailer_user`
   - `mailer_password`
   - `mailer_host`
   - `mailer_port`
   - `mailer_encryption`
   - `mailer_auth_mode`

   And we added `mailer_dsn` as a replacement. Here is [an example of DSN](https://symfony.com/doc/4.4/mailer.html#using-built-in-transports): `smtp://user:pass@smtp.example.com:port`

## Update your instance

📈  **To update your instance**, [just run `make update`](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Changelog

You can read the [full Changelog](https://github.com/wallabag/wallabag/compare/2.6.0...2.6.1) on GitHub.

## Download wallabag 2.6.1

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

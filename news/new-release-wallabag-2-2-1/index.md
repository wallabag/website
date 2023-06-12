---
title: '[New release] wallabag 2.2.1'
published: true
date: 2016-10-04
---

It's time to update your wallabag installation, **2.2.1 is here**!

We need to release this new version because some of you had issues with database migrations.

**Before upgrading, don't forget to backup your database**.

## Specific update method for this version

If your version is 2.2.0, just execute `make update`.
If your version is <= 2.1.6.1, execute `make update` then `php bin/console doctrine:migrations:migrate --no-interaction -e=prod` to execute database migrations.

**For SQLite users, we wrote this documentation too**: [https://gist.github.com/nicosomb/7c537995f2b845a30b4d6cdf23c1e22c](https://gist.github.com/nicosomb/7c537995f2b845a30b4d6cdf23c1e22c)

## Changelog

- [#2809](https://github.com/wallabag/wallabag/pull/2809) Fixed duplicate entry for share_public in craue_setting_table and added documentation about migration (@nicosomb)

<hr />

## Download wallabag 2.2.1

To download, install/upgrade wallabag, [please read our Downloads page](http://doc.wallabag.org/en/master/user/installation.html#installation).

<hr />

## Don’t want to host wallabag by yourself?

On December 2016, [**wallabag.it** was launched](https://wallabag.it). wallabag.it is a paid service to use wallabag without installing it on a web server.

This service already ships wallabag 2.2. [You can create your account here](https://app.wallabag.it/). Try it for free: you'll get a 14-day free trial with no limitation (no credit card information required). It’s only €9 (offer valid until March 1, 2017, it will be €12 after this date).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

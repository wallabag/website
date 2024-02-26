---
title: 'wallabag 2.0.0-alpha, finally'
date: 2015-09-14 21:00:00 +02:00
---

**wallabag is an open source read-it-later application**.

We started developing wallabag in 2013 using PHP classes but quickly ran into many limitations: no API, database fields missing, etc.). So, we decided to re-write it from scratch, this time using a framework. After many stalled attempts, we're proud to say that v2 is almost here!

In 2014, Jérémy Benoist ([aka @j0k3r](https://github.com/j0k3r)) joined us. He is an awesome Symfony lead developer! With his help, we were finally able to ramp up production on a new and improved rebuild of wallabag.

While we're not quite finished integrating all of the features from from wallabag v1, we felt it was time to release our first alpha of wallabag v2 into the wild so we could start to gather some feedback.

This is a big step in wallabag's development and we're all very proud of what we've accomplished so far.

## wallabag 2.0.0-alpha

Feature List:

* a REST API ([you can have a look to the documentation](http://v2.wallabag.org/api/doc))
* authorization via oAuth2
* a new default theme, called `material`
* save an article, read it, favorite it, archive it. (Hopefully)
* assign tags to entries
* edit article titles
* RSS feeds (with ability to limit number of articles)
* create a new account from the config page
* filter entries by reading time, domain name, creation date, status, etc.
* recover passwords from login page (you have to fill your email on config page)
* picture preview, if available, is displayed for each entry
* ...


## Testing wallabag 2.0.0-alpha

We encourage you to try out the new wallabag v2 alpha on our demo website: [http://v2.wallabag.org](http://v2.wallabag.org) (login wallabag, password wallabag)

There are definitely bugs, so please tell us if you find one of them (have a look [at the existing issues](https://github.com/wallabag/wallabag/issues) and [create a new one](https://github.com/wallabag/wallabag/issues/new) if necessary).

## Installing wallabag 2.0.0-alpha

Please don't use in production! This is an **unstable** branch, expect many things to be broken.

wallabag v2 uses [Symfony2 framework](http://symfony.com).

The only way to install wallabag v2 properly at the moment is to use Composer. To download wallabag, [you can click here]({filename}pages/download.md) or clone the project via git:

```
git clone https://github.com/wallabag/wallabag.git -b v2
cd wallabag
composer install
php app/console wallabag:install
php app/console server:run
```

## The road is still long

We still have a lot of work ahead of us, but this alpha release is a big step in our roadmap. We still don't have a final release date, so don't ask us ;-)

You're still here? Go ahead and test wallabag v2!
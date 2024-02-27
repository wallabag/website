---
title: 'wallabag 2.0.0-alpha.1 available'
date: 2016-01-08 13:00:00 +02:00
---

We released our first alpha 4 months ago, and we were on late to release this new one. Sorry for that (but we worked very hard to give you new great features).

## wallabag 2.0.0-alpha.1

Features list:

* Public registration
* migration from wallabag v1 (based on JSON export)
* migration from Pocket (it works, but we need to implement asynchronous import: if you have too many articles, it can fail). Documentation still in progress (you'll have a great documentation in next days)
* exports in many formats (PDF, JSON, EPUB, MOBI, XML, CSV).
* 2-Factor authentication (via email)
* Tagging rule: create a rule to automatically assign tags to entries!
* German / French and English translations
* some minor fixes

Already implemented:

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

## Testing wallabag 2.0.0-alpha.1

We encourage you to try out the new wallabag v2 alpha on our demo website: [http://v2.wallabag.org](http://v2.wallabag.org) (login wallabag, password wallabag). You can also create a new account on this website, but don't remember that we can drop our database at any time: **this website is not a production one!**

There are definitely bugs, so please tell us if you find one of them (have a look [at the existing issues](https://github.com/wallabag/wallabag/issues) and [create a new one](https://github.com/wallabag/wallabag/issues/new) if necessary).

## Installing wallabag 2.0.0-alpha.1

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

## What's next?

We can say that next step will be the first beta of wallabag v2. When? In 2016 :-) !
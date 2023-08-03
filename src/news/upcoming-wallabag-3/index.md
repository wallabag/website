---
title: 'Upcoming wallabag version 3.0.0 & 2.6.0'
published: true
date: 2022-12-22 14:38:00 +02:00
---

Hello everyone,

The latest version of wallabag is using [Symfony v3.4.49](https://symfony.com/releases/3.4) which hasn't been maintained since November 2020 and without security fixes since November 2021.

[@yguedidi](https://github.com/yguedidi) started to work on migrating/updating some parts of wallabag to remove deprecations, update services and many other changes in the code base in order to be able to upgrade Symfony.  
Right now, the master of wallabag is running on Symfony v4.4.49 and we'll soon upgrade to Symfony 5.

While moving to Symfony 5 we also wanted to raise the minimum PHP version from 7.4 to 8.0.

We are now working on moving to [Symfony Flex](https://github.com/symfony/flex) which "*is so convenient and improves your productivity so much that it's strongly recommended*". The main change of Symfony Flex is the directory structure.  
It changes completely from the previous directory structure we are currently using:

-   assets moved in a different directory
-   config files are exploded by packages
-   parameters are now defined in an environment file
-   there are no bundles anymore (we were using AnnotationBundle, ApiBundle, CoreBundle, ImportBundle & UserBundle)
-   templates are now in a single place, like translations & migrations
-   etc.

We were planning to push all these upgrades (Flex & Symfony 5 & PHP 8) to the version 2.6.0.  
But the more we are working on that technical upgrade the more we think it will be a complex upgrade for people running a wallabag instance mostly because of the directory structure change.

### 3.0.0

That's why we decided to put all these technical upgrades into a new breaking change version: **3.0.0**.

-   For people using wallabag as a service (like those who have a subscription plan on <https://www.wallabag.it/en> (thanks you 🫶)), they won't notice a single change. There won't be functional change on how they use wallabag.
-   For people hosting wallabag, it'll be an upgrade more significant than just running `make update`.

We would like to put these technical changes into 3.0.0:

-   Symfony 6
-   PHP 8.1 or higher
-   new directory structure

Of course, we will recommend to everyone to upgrade to 3.0.0 as soon as the version is released but we'll also have a 2.x branch where we might still provide some bug fix for people who don't want to upgrade right now. But keep in mind that as soon as the 3.0 will be released, we'll be more focused on that version than on the older one.

Some features planned for 3.0 will be postponed to 4.0 others will be for 3.1.0.

### 2.6.0

In the coming days (or maybe weeks) we'll release the 2.6.0 which will upgrade Symfony from 3.4 to 4.4.  
It'll resolve a lot of bugs for people running wallabag on PHP 8 for example.  
The required PHP version will stay the same as before: 7.4 or higher.

You can discuss with use about this blog post here: [https://github.com/wallabag/wallabag/discussions/6177](https://github.com/wallabag/wallabag/discussions/6177)
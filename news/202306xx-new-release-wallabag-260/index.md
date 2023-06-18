---
title: 'wallabag 2.6.0'
published: true
date: 2023-06-xx 12:00:00 +02:00
---

wallabag 🦘turns 10 🎂 ! To celebrate this birthday, we are pleased to announce the release of [wallabag 2.6.0](https://github.com/wallabag/wallabag/releases/tag/2.6.0).

We developed this release during a year and I want to thank [each of the contributors](https://github.com/wallabag/wallabag/releases/tag/2.6.0).

I hope you will love the new features and the fixes we made.

## Have a look on some new features

wallabag is 10: it's starting to get a little rusty. That's why we made a lot of effort to improve technical stuff, under the hood.
Most of this work was done by [Yassine](https://github.com/yguedidi): thank you so much! Thanks to him, wallabag can go forward (for the next 10 years?).

### Mass action to tag entries

// screenshots and explanations

### Enhance the availability of the add a new URL in the web interface

// screenshots and explanations

### New setting to show / hide articles thumbnails

// screenshot and explanations

## Update your instance

📈  **To update your instance**, [just run `make update`.](https://doc.wallabag.org/en/admin/upgrade.html).
Don't forget to make a backup of your instance (database and files).

_🤝  A little reminder that **you can support our work** on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

## Changelog

[Full Changelog](https://github.com/wallabag/wallabag/compare/2.5.4...2.6.0)

### Features
* Add tag deletion from tags list by @nicosomb [https://github.com/wallabag/wallabag/pull/5861](https://github.com/wallabag/wallabag/pull/5861)
* Add support of mass action to tag entries by @kdecherf [https://github.com/wallabag/wallabag/pull/5838](https://github.com/wallabag/wallabag/pull/5838)
* Mass action interface by @Simounet [https://github.com/wallabag/wallabag/pull/6547](https://github.com/wallabag/wallabag/pull/6547)
* Empty space on the top bar used for more add url toggle clickable target by @Simounet [https://github.com/wallabag/wallabag/pull/6612](https://github.com/wallabag/wallabag/pull/6612)
* Add new setting to show / hide articles thumbnails by @nicosomb [https://github.com/wallabag/wallabag/pull/6609](https://github.com/wallabag/wallabag/pull/6609)

### Fixes
* Add prefix for tag slugs by @kdecherf [https://github.com/wallabag/wallabag/pull/6226](https://github.com/wallabag/wallabag/pull/6226)
* Fix open all external links in new tab in Config by @wyntonfranklin [https://github.com/wallabag/wallabag/pull/6256](https://github.com/wallabag/wallabag/pull/6256)
* Fix dark theme for pre HTML tags by @Simounet [https://github.com/wallabag/wallabag/pull/6495](https://github.com/wallabag/wallabag/pull/6495)
* Fix dark mode top bar contrast by @Simounet [https://github.com/wallabag/wallabag/pull/6510](https://github.com/wallabag/wallabag/pull/6510)
* Dark mode contrast improved by @Simounet [https://github.com/wallabag/wallabag/pull/6512](https://github.com/wallabag/wallabag/pull/6512)
* Fix dark mode URL add input color by @Simounet [https://github.com/wallabag/wallabag/pull/6525](https://github.com/wallabag/wallabag/pull/6525)
* Fix round reading time in export by @mart-e [https://github.com/wallabag/wallabag/pull/6545](https://github.com/wallabag/wallabag/pull/6545)
* Fix images downloading with numeric HTML entity by @Simounet [https://github.com/wallabag/wallabag/pull/6563](https://github.com/wallabag/wallabag/pull/6563)
* Fix DownloadImages not following redirections by @Simounet [https://github.com/wallabag/wallabag/pull/6562](https://github.com/wallabag/wallabag/pull/6562)
* Fix auto dark theme detection flickering by @Simounet [https://github.com/wallabag/wallabag/pull/6584](https://github.com/wallabag/wallabag/pull/6584)
* Fix RSS feed_route not set by @Simounet [https://github.com/wallabag/wallabag/pull/6606](https://github.com/wallabag/wallabag/pull/6606)
* Add flash message when we try to add too much tags by @nicosomb [https://github.com/wallabag/wallabag/pull/6607](https://github.com/wallabag/wallabag/pull/6607)
* Changed default value for domain_name parameter by @nicosomb [https://github.com/wallabag/wallabag/pull/6616](https://github.com/wallabag/wallabag/pull/6616)
* Improved tags display by @Simounet [https://github.com/wallabag/wallabag/pull/6613](https://github.com/wallabag/wallabag/pull/6613)
* Fix mousetrap enter issue by @Simounet [https://github.com/wallabag/wallabag/pull/6624](https://github.com/wallabag/wallabag/pull/6624)

### Meta
* Removed Carrot & Scuttle share by @nicosomb [https://github.com/wallabag/wallabag/pull/6047](https://github.com/wallabag/wallabag/pull/6047)
* Remove old, not so maintained and buggy baggy theme by @nicosomb [https://github.com/wallabag/wallabag/pull/4332](https://github.com/wallabag/wallabag/pull/4332)
* Remove Scrutinizer badge by @j0k3r [https://github.com/wallabag/wallabag/pull/6179](https://github.com/wallabag/wallabag/pull/6179)
* Add mention to unofficial linux client by @imhemish [https://github.com/wallabag/wallabag/pull/6203](https://github.com/wallabag/wallabag/pull/6203)

### Technical stuff
* Remove SensioDistributionBundle by @yguedidi [https://github.com/wallabag/wallabag/pull/5761](https://github.com/wallabag/wallabag/pull/5761)
* Back to latest composer version by @yguedidi [https://github.com/wallabag/wallabag/pull/5810](https://github.com/wallabag/wallabag/pull/5810)
* Clean composer.lock after SensioDistributionBundle removal by @yguedidi [https://github.com/wallabag/wallabag/pull/5839](https://github.com/wallabag/wallabag/pull/5839)
* Remove transitive dependencies by @yguedidi [https://github.com/wallabag/wallabag/pull/5784](https://github.com/wallabag/wallabag/pull/5784)
* Register missed commands by @yguedidi [https://github.com/wallabag/wallabag/pull/5928](https://github.com/wallabag/wallabag/pull/5928)
* Extend right FOSRestBundle controller class by @yguedidi [https://github.com/wallabag/wallabag/pull/5929](https://github.com/wallabag/wallabag/pull/5929)
* Remove PHP-CS-Fixer deprecations by @yguedidi [https://github.com/wallabag/wallabag/pull/5914](https://github.com/wallabag/wallabag/pull/5914)
* Upgrade FOSUserBundle to 2.1 by @yguedidi [https://github.com/wallabag/wallabag/pull/5782](https://github.com/wallabag/wallabag/pull/5782)
* Add TwigCS by @yguedidi [https://github.com/wallabag/wallabag/pull/5759](https://github.com/wallabag/wallabag/pull/5759)
* Use FQCN as service name by @yguedidi [https://github.com/wallabag/wallabag/pull/5748](https://github.com/wallabag/wallabag/pull/5748)
* Migrate to new template reference notation by @yguedidi [https://github.com/wallabag/wallabag/pull/5758](https://github.com/wallabag/wallabag/pull/5758)
* Migrate from old colon notation to FQCN by @yguedidi [https://github.com/wallabag/wallabag/pull/5943](https://github.com/wallabag/wallabag/pull/5943)
* Use autowiring by @yguedidi [https://github.com/wallabag/wallabag/pull/5946](https://github.com/wallabag/wallabag/pull/5946)
* Use FQCN to fetch services by @yguedidi [https://github.com/wallabag/wallabag/pull/5951](https://github.com/wallabag/wallabag/pull/5951)
* Run tests without memory limit by @yguedidi [https://github.com/wallabag/wallabag/pull/5953](https://github.com/wallabag/wallabag/pull/5953)
* Import used classes by @yguedidi [https://github.com/wallabag/wallabag/pull/5952](https://github.com/wallabag/wallabag/pull/5952)
* Rework command tests by @yguedidi [https://github.com/wallabag/wallabag/pull/5954](https://github.com/wallabag/wallabag/pull/5954)
* Switch to Swagger for api documentation by @caspermeijn [https://github.com/wallabag/wallabag/pull/6062](https://github.com/wallabag/wallabag/pull/6062)
* Remove some deprecation by @j0k3r [https://github.com/wallabag/wallabag/pull/6085](https://github.com/wallabag/wallabag/pull/6085)
* Remove deprecated options from FOSRest by @j0k3r [https://github.com/wallabag/wallabag/pull/6095](https://github.com/wallabag/wallabag/pull/6095)
* Remove LiipThemeBundle by @j0k3r [https://github.com/wallabag/wallabag/pull/6097](https://github.com/wallabag/wallabag/pull/6097)
* Upgrade PHPStan and move to level 2 with baseline by @j0k3r [https://github.com/wallabag/wallabag/pull/6098](https://github.com/wallabag/wallabag/pull/6098)
* Upgrade to Symfony 4.4 by @j0k3r [https://github.com/wallabag/wallabag/pull/6099](https://github.com/wallabag/wallabag/pull/6099)
* Update to FOSUserBundle 3.1 by @j0k3r [https://github.com/wallabag/wallabag/pull/6136](https://github.com/wallabag/wallabag/pull/6136)
* Update to scheb/2fa-bundle by @j0k3r [https://github.com/wallabag/wallabag/pull/6144](https://github.com/wallabag/wallabag/pull/6144)
* Upgrade to Twig 3 by @j0k3r [https://github.com/wallabag/wallabag/pull/6151](https://github.com/wallabag/wallabag/pull/6151)
* Move translations files to /translations by @j0k3r [https://github.com/wallabag/wallabag/pull/6153](https://github.com/wallabag/wallabag/pull/6153)
* Fix EventDispatcher & events by @j0k3r [https://github.com/wallabag/wallabag/pull/6154](https://github.com/wallabag/wallabag/pull/6154)
* Replace SwiftMailer by Symfony Mailer by @j0k3r [https://github.com/wallabag/wallabag/pull/6150](https://github.com/wallabag/wallabag/pull/6150)
* Remove ContainerAwareCommand from commands by @j0k3r [https://github.com/wallabag/wallabag/pull/6152](https://github.com/wallabag/wallabag/pull/6152)
* Update all Doctrine deps by @j0k3r [https://github.com/wallabag/wallabag/pull/6143](https://github.com/wallabag/wallabag/pull/6143)
* Update PagerFanta by @j0k3r [https://github.com/wallabag/wallabag/pull/6145](https://github.com/wallabag/wallabag/pull/6145)
* Move to controller as a service by @j0k3r [https://github.com/wallabag/wallabag/pull/6159](https://github.com/wallabag/wallabag/pull/6159)
* Add RabbitMQConsumerTotalProxy to lazy RabbitMQ services for messages by @j0k3r [https://github.com/wallabag/wallabag/pull/6166](https://github.com/wallabag/wallabag/pull/6166)
* Properly handle json_array type removal by @j0k3r [https://github.com/wallabag/wallabag/pull/6171](https://github.com/wallabag/wallabag/pull/6171)
* Fix database_path in Docker env by @j0k3r [https://github.com/wallabag/wallabag/pull/6174](https://github.com/wallabag/wallabag/pull/6174)
* Docker: database_table_prefix may be configured from environment by @fcatt [https://github.com/wallabag/wallabag/pull/6196](https://github.com/wallabag/wallabag/pull/6196)
* Update annotations to OpenApi 3 by @caspermeijn [https://github.com/wallabag/wallabag/pull/6182](https://github.com/wallabag/wallabag/pull/6182)
* Fix public folder for Symfony 4+ by @kdecherf [https://github.com/wallabag/wallabag/pull/6217](https://github.com/wallabag/wallabag/pull/6217)
* Fix API allowed_registration by @caspermeijn [https://github.com/wallabag/wallabag/pull/6315](https://github.com/wallabag/wallabag/pull/6315)
* Enable PHP 8.2 in CI by @j0k3r [https://github.com/wallabag/wallabag/pull/6469](https://github.com/wallabag/wallabag/pull/6469)
* Fix/build stylelint error by @Simounet [https://github.com/wallabag/wallabag/pull/6586](https://github.com/wallabag/wallabag/pull/6586)

## Download wallabag 2.6.0

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag), ping us!

You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

You can also help us by donating via [Liberapay](https://liberapay.com/wallabag/).

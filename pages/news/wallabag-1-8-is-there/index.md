---
title: 'wallabag 1.8 is there'
date: 2014-10-10 11:36:00 +02:00
---

We are happy to finally release this 1.8 version. Many fixed bugs, some new features.


### Changelog


* New licence: we switched from WTFPL to MIT licence (to prepare wallabag v2)
* Guidelines for contributing to wallabag (PSR-1 and PSR-2)
* Big refactoring in the code (no visible changes for wallabag users)
* rename Home into Unread
* Updated specific configuration for parsing
* Updated polish translation
* Changed default pagination (12 instead of 10)
* Better display when an article contains code (we use highlight.js)
* Added fixtures for MySQL and PostgreSQL installations
* Added email field for user
* Removed availability to download SQLite file (security problem)
* Implemented additional check for using the 'X-Forwarded-Port' header

**Fixed bugs**
* Check file permissions at install https://github.com/wallabag/wallabag/issues/584
* Fix to display the login successful message with the translation
* Fix display of 'Done' message when we add a link from 'save a link' item
* Can't import empty file https://github.com/wallabag/wallabag/issues/776
* fix pictures display when DOWNLOAD_PICTURES is enabled


### Upgrade


Before that, please backup your wallabag folder.

Download the latest version here: [https://www.wallabag.org/downloads/](https://www.wallabag.org/downloads/)

As we made a big refactoring, some files were renamed or deleted. So you can delete all your files unless:
* assets, db and vendor folders
* inc/poche/config.inc.php

Then extract the archive into your wallabag folder. Remove the install folder and let's go :)

Framabag accounts will be upgraded soon.


### Other news


* We are currently working on wallabag v2 and we need an AngularJS developer [https://www.wallabag.org/blog/2014/10/09/wallabag-recruits-good-angularjs-developer/](https://www.wallabag.org/blog/2014/10/09/wallabag-recruits-good-angularjs-developer/). Contact us if you want to contribute to this great project.
* We have a new website for support. Just have a look here: [http://support.wallabag.org](http://support.wallabag.org)
* We have a Diaspora* account, find us here: [https://framasphere.org/people/2335ff202f920132196e2a0000053625](https://framasphere.org/people/2335ff202f920132196e2a0000053625)
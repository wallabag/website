---
title: 'wallabag 1.6 is here!'
date: 2014-04-03 12:47:00 +02:00
---

[One year ago](https://github.com/wallabag/wallabag/commit/1a268ba710b2cdb4ede98af3368c43d66c4c5e53), I pushed the first files of poche, now wallabag.

That's why I'm so happy to announce **wallabag 1.6 "Happy birthday!"** today. This release is so great. New features and lots of bugs fixed.

Download it here: [https://www.wallabag.org/downloads/](https://www.wallabag.org/downloads/)
To update your wallabag, just extract the archive in your folder and clear your cache (on config page). [Don't forget to read the documentation](http://doc.wallabag.org/doku.php?id=wallabag:installing_wallabag#upgrading).

Framabag will be updated soon.

Thank you Skibbi, mariroz, Draky50110, Tcitworld, camporez, kevmeyer, bobmaerten, thomaslebeau for this release.


## Changelog


You'll see: wallabag has new great features, like import system or search engine.
Some old bugs are now fixed: for example, no more problem with the "stay connected" checkbox.


### New features





	
  * New import system: you just have to upload your file (from third services), take a coffee and wait a little.

	
  * Search engine

	
  * You can now type "s" shortcut to save a link so quickly

	
  * wallabag a link in wallabag #505: when you're reading a saved article with some links inside, you can save them easily, a "W" icon is available.




### Bug fixes





	
  * [fix] redirect on config page after token generation #491

	
  * [fix] global $http visibility, issues #493, #494, #498

	
  * [fix] hover problem with logout link #489

	
  * [fix] on Framabag re-login needed after "bag it!" #509

	
  * [fix] #490 flattr icon in baggy theme

	
  * [fix] #483 pdo_sqlite not required if we want mysql / pgsql

	
  * [fix] RSS Feeds don't validate / W3C #384

	
  * [fix] links for firefox / android / ios apps

	
  * [fix] remember scroll position for baggy theme #519

	
  * [fix] test if user_id doesn't exist in feeds generation

	
  * [fix] in RSS, link to original article

	
  * [fix] #115 - stay connected and session livetime

	
  * [fix] Export wallabag data : not saving but opening in browser #570




### Miscellaneous improvements





	
  * [change] remove old logo #484

	
  * German, English, French, Polish, Russian and Ukrainian locales updated

	
  * [add] brazilian portuguese translation

	
  * translation HOWTO: [https://github.com/wallabag/wallabag/blob/master/TRANSLATION.md](https://github.com/wallabag/wallabag/blob/master/TRANSLATION.md)

	
  * [add] Empty cache after changing theme #503

	
  * [add] empty cache after changing language #492

	
  * [add] display last check of wallabag release

	
  * a lot of enhancements related to tags: tags list is now sorted, shows number of articles, autocomplete added according to #477, #542

	
  * Many enhancements on all themes
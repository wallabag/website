---
title: 'wallabag 1.5.2 available'
date: 2014-02-21 15:28:00 +02:00
---

Wow, this version was made thanks to many people. You are great!


### Changelog

	
  * Security fix: if content contained some JS, wallabag displayed it. For example `<img src=# onerror=alert(1) />` Now, content is parsed by HTML Purifier.

	
  * "Save a link" is now available in the menu. Thank you @mariroz

	
  * "Mark all as read" is available for all themes. Thank you @mariroz

	
  * Full-Text RSS included as a script instead of file_get_contents call. Thank you @Faless

	
  * Baggy theme embed webfont, we have no link with google servers. Thank you @nsteinmetz

	
  * Message in install screen to prevent user when wallabag is already installed.

	
  * Tags display is now correct, no more duplicates. Thank you @mariroz

	
  * Pagination if necessary when you are viewing tagged articles. Thank you @mariroz

	
  * Import from Pocket now import tags too. Thank you @arnaudmm

	
  * On config screen, themes are sorted alphabetically.

	
  * Link on footer was unclickable.

	
  * Added Slovene language

	
  * Languages are well displayed on config page, no more "en_EN.utf8" :/ #wtf


**[Download wallabag 1.5.2 here](http://wllbg.org/latest)**.

To update your wallabag, you have to extract the archive in your folder, delete the install folder and clear your cache (on config screen).
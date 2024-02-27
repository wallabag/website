---
title: 'poche 1.1.0'
date: 2013-10-25 06:55:00 +02:00
---

The 1.1.0 is available.

Changelog:



	
  * fix CSS bugs

	
  * add support for custom ssl port

	
  * add support for http_auth

	
  * installations steps are easier

	
  * updating password was buggy

	
  * you can change your poche language in the config screen

	
  * add czech language

	
  * update german language


You can download it here: [http://www.wallabag.org/](http://www.wallabag.org/)

To update your version, overwrite all the files and edit /inc/poche/config.inc.php. Add this line before `define ('MODE_DEMO', FALSE);`  :

    
    <code>// Change this if not using the standart port for SSL - i.e you server is behind sslh
    define ('SSL_PORT', 443);  
    </code>


And remove this line `define ('POCHE_VERSION', '1.0.0');`
---
title: 'wallabag v1.9.1 released, last version before v2!'
date: 2015-05-03 13:30:00 +02:00
---

We are happy to announce you the release of wallabag v1.9.1. Unlike what it seems, it's quite an important version (it's just between 1.9 and 2.0). A whole number of bugs have been corrected, some translations added, many config websites files added, and there's also a handful of new features we hope you'll like.

## Download

wallabag 1.9.1 is [available on our website](https://www.wallabag.org/pages/download-wallabag.html).

## Features
* Buttons to go to next and previous article when you view an article.
* Button to mark article as read and go to next unread article.
* Keyboard shortcuts. Lots of them. And vim-style navigation (see below).
* Gestures on touch screens. Swipe to left or right to navigate to next or previous articles.
* Toolbar also at the bottom of the article with baggy theme, you don't have to scroll back any more when finished !
* While you tag an article, you now see all the existing tags. Just click on them to add it to this article. And the more used are shown bigger.
* Mozilla Sharing Service ! You will need https to activate it, but it's worth the try, you can get rid of the old extension and use the build-in sharing from Firefox.
* Import *Netscape-formated-bookmarks*. This allows import of Firefox, Internet Explorer (I know, right !), Chrome browsers bookmarks. And certainly many other tools and applications.
* If you're using a reverse proxy, you might interested by the BASE_URL constant.

### Shortcuts

#### Article view
* Navigate between articles: arrows or vim style (`h` for left, `l` for right)
* `d` or `del` to delete article
* `f` to toggle favorite status
* `m` to toggle mark as read status
* `n` to mark as read and redirect to the next article

#### Unread / Favorite / Archive view
* with arrows, you can navigate into articles (vim style is also available with `h`, `j`, `k`, `l`) and press Enter to read the article!

## Session issues
It's no secret that we've had kind of a hard deal to fix sessions issues. You always ended up disconnected after a while. The thing is, just a little configuration should get rid of this issues. [Checkout the documentation there](http://doc.wallabag.org/en/Administrator/sessions.html).

This bug is already fixed on Framabag.org.

## Application for Firefox OS

We **now** have our Firefox OS application! Thank you so much [@freddyb](https://github.com/freddyb) !

[Download this app here.](https://github.com/wallabag/wallabag-fxos)

## wallabag v2

This is the end of wallabag [as we know it](https://www.youtube.com/watch?v=Z0GFRcFm-aY). ~~We launch our premium version~~ We get rid of the old code. We've rebuild wallabag using Symfony2 and it's now much better to work efficiently with clean code.

We will release a first alpha release of wallabag 2.0 in september 2015. You can follow latest news on [twitter](https://twitter.com/wallabagapp), [gitter](https://gitter.im/wallabag/wallabag#initial) or [diaspora*](https://framasphere.org/u/wallabag).

## Events

Nicolas was at RMLL 2015 (Libre Software Meeting) to talk about wallabag. [Slides in french are there](fr.slideshare.net/nicosomb/effectuez-votre-veille-en-toute-liberte-rmll-2015-beauvais), [video in french there](http://videos-cdn.rmll.info/videos2015/ubicast/amphi-bunuel-effectuez-votre-veille-en-t_2891/).

Nicolas will may be at [Paris Open Source Summit](http://www.opensourcesummit.paris/) and [Le Capitole du Libre](https://2015.capitoledulibre.org/) in november.

## Need help!

Our project is bigger and bigger, and we always need some help. We [opened a new ticket on github](https://github.com/wallabag/wallabag/issues/1254) where we are listing all our needs. Pick one of them and welcome on board!
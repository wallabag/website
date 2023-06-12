---
title: 'April update : some news'
date: 2015-04-05 20:00:00 +02:00
---

No [april's fool](https://www.wallabag.org/blog/2014/04/01/wallabag-integrates-facebook) this year, but just some news to keep you updated on our work.

## Work towards 1.9.1 version

First of all, there's quite a few bugs which have been corrected, especially with installation part (still...). Also, a couple of annoying graphic bugs are now gone. An updated Docker image is also on track.

Now, talking about some features, I know we said we wouldn't add any more to 1.x versions, that everything will go to v2, but that kind of work will benefit to all versions anyway. And those are little ones, don't get excited. ;)

I'm happy to announce next versions will feature *previous and next navigation buttons* just next to the already existing "return to top" one with baggy theme. Default theme and inherited themes will have those buttons in the existing toolbar.

![buttons](wallabag_navigate_arrows.png)

You will also be able to navigate through articles by using your *right and left keyboard* arrows on desktop, or *swipe right or left* on touchscreen devices. Maybe we could enable vim-style navigation (with `hjkl`) in the future (there's [a poll](https://framadate.org/u6k7qlcmwvdr8df6), by the way).

For an increased usability, we also added a *Mark as read and go to next button*, when you've finished to read an article and do want to go for the next time directly.

Also, about the toolbar, we added it at the bottom of articles seen with baggy theme, so that you don't have to go all the way to top when wanting to do an action.

Finally, we now display existing tags when you want to add a tag to an article, in order to avoid having close duplicates and not thinking to tags you already have. You will just have to click on a tag to add it to the list. And, the larger the size of the tag displays, the more it's used, like a tag cloud.

Before wallabag 1.9.1 comes out, we just want to fix a nasty issue with installation with old MySQL versions and it should be ready to go. It could be possible to see a 1.9.2 version come out, though.

## Work on v2 version
If you follow [our Github page](https://github.com/wallabag/wallabag/), you may have seen a lot of Pull Request ready to merge or already merged. That's a very good sign. Of the new things that are coming, the API is certainly the most important. Documentation is already [available](http://v2.wallabag.org/api/doc/) and we will provide a guide very soon to connect your app to wallabag.
Speaking of apps, the Windows version is the first app [currently rewritten](https://github.com/wallabag/windows-app/commits/v2) for v2 by @jlnostr. Others should follow soon, no worries.
Most of the job on wallabag v2 is currently done by @j0k3r, so now you know who to thank.

## Other news
We may attend to the 16th [Libre Software Meeting](https://2015.rmll.info/?lang=en) from 2015/07/04 to 2015/07/10 in Beauvais, France. Comme and see us, we'll have [stickers](https://twitter.com/TcitWorld/status/544127704489275392/photo/1) !

Also, Pyves created [cool slides](https://framabag.org/cquoi/#/) to present our wallabag hosted service, [Framabag](https://framabag.org/).

And finally, we already had wallabag integrated inside [YunoHost](https://yunohost.org) ([source](https://github.com/abeudin/wallabag_ynh)) and [ArkOS](http://arkos.io/) ([source](https://github.com/cznweb/arkos-applications/tree/master/wallabag)), but we're now hoping to get wallabag inside [CozyCloud](http://cozy.io). We'll also try to have it [OwnCloud](https://owncloud.org/) too.

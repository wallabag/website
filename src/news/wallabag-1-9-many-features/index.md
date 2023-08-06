---
title: 'wallabag 1.9 is available, so many new features!'
date: 2015-02-18 20:45:00 +02:00
---

Finally. Four months later, here is it. The version 1.9 of wallabag. Of course, we bring up new features, we fixed many bugs, but we have also quite exiting news for the future.

## Mobi & PDF export

First of all, we know some of you love reading articles saved with wallabag on your tablet or e-ink reader, so we've given you the ability to export your articles as epub a while back. But since there are users who have choosen a Kindle or some other tablets which can only handle mobi export, we give you mobi export.

Yes, we know that Amazon provides this kind of service called Send2Kindle, but it's kind of hard to  implement, even though we are still thinking to work on it. [Read more](https://github.com/wallabag/wallabag/issues/770).

Oh, and while we've at exporting articles, you can also export articles as pdf. Just like you already did with mobi and epub export. You can enable both of those features in the `inc/poche/config.inc.php` file. Look at the `inc/poche/config.inc.default.php` file to see what configuration you need to add if you're migrating.

## Sharing with services

We want wallabag to be compatible with the maximum of services. For that, we have waited long for v2 to come with it's API (more on that later) but for now we just let you export your articles to [Evernote](https://evernote.com/intl/fr/), [Carrot](https://carrot.org) and [Diaspora](https://joindiaspora.com). Just enable these features like the others, into the config file. In the case of Diaspora, you also need to provide the URL for your pod.

## New installer

Finally, we've seen many users having problems (mostly database and file rights related) with the installation, so we rewrote much of the installer to make sure these problems won't occur anymore.

Moreover, the installer tells you right away if your webserver configuration has problems or can run wallabag right away.

## Diverse features, improvements and bugs

Now for some little features :

* Random article : Don't know what to read ? Just click on the dices to get one of your unread articles.
* Refetch article : Some article has changed it's content ? Just refetch it.
* Import tags : You can now import tags from your Pocket and wallabag exported files.
* Build-in documentation : If you have wallabag locally installed and are offline for the moment. Just a reminder to tell you that online documentation is available at [http://doc.wallabag.org/](http://doc.wallabag.org)
* Tag an article when saving it. Instead of saving an article, accessing it and setting the tags from here, just click on the tag icon next to the url field before hitting the Save button. At the moment, it is possible only to do this from the web interface, but it could come to some apps or extensions.

And in other changes, we've deleted the courgette theme, which started to be a bit old in regard of the features we brought recently. It's creator said he would be glad to bring a new theme in the future, though.

We've got also a lot of improvements, translations updated and diverse bugs corrected, but I admit there are really too many for me to list them here.

##Register

Oh, wait. I've forgotten something. And it's quite important. There's now new lines in the config file which allow the adminstrator of a wallabag server to enable public registration.

You read that right.

If you want to share your instance with someone else, no need to create him an account yourself.

All the user needs is an username and a password. And if he provides it's email, he will get a nice confirmation email (which will probably go right into his spam inbox, but that's another issue).

## Upgrading from an older version

If you already have an other version of wallabag installed, just copy the new files over the old ones, maybe check your rights on the files, and access your wallabag instance. In case something doesn't work, all you need to do is to delete the `install/` folder.

## Future of wallabag

wallabag 1.9 should be the last version with new features. We will surely have at least a 1.9.1 version for bug fixes, but most of our work is now focused on wallabag v2, where @nicosomb and @j0k3r have started an amazing job. In fact, there's already a (working !) preview available at http://v2.wallabag.org/ (login/password : wallabag/wallabag). What do you think about the theme ?

v2 is build with Symfony2, a robust and powerful PHP framework. It allows us to design wallabag much better, to have a full view of what it must be, much better that the 1.x versions which are quite an ugly patchwork of code. Now, we're nearly starting over from scratch, but it's quite pleasant.

The v2 version will finally allow us to provide the API we've so much dreamed of, so that any app can be connected to wallabag and benefit of all it's features, whether it's a mobile app, a browser extension or another web service.

We look forward to release some previews for v2 when it's ready, and hear from you.

The wallabag contributors

PS: I want to send a huge thank you to @tcitworld for this great version!
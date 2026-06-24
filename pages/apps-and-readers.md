---
layout: "content-page.html"
title: "Use wallabag with apps, extensions, RSS readers and e-readers"
description: "Save and read articles with wallabag on the web, Android, iOS, browser extensions, RSS readers, Kobo, Kindle and PocketBook."
---

<p class="contentLead">wallabag works best when it follows your reading habits: save from a browser, read on a phone, sync to an RSS reader, or send articles to an e-reader.</p>

## Save articles from your browser

- [Chrome extension](https://chrome.google.com/webstore/detail/wallabagger/gbmgphmejlcoihgedabhgjdkcahacjlj)
- [Firefox extension](https://addons.mozilla.org/firefox/addon/wallabagger/)
- [Safari quick save app](https://apps.apple.com/de/app/wallabag-quicksave/id1621482657)

## Read on mobile

- [Android app](https://play.google.com/store/apps/details?id=fr.gaulupeau.apps.InThePoche)
- [iOS app](https://apps.apple.com/us/app/wallabag-2-official/id1170800946)

The iOS app is available on the App Store. Since version 7.6, its source and maintenance are no longer announced as the official open source wallabag iOS app. You can read the [project note about the iOS app](/news/20260327-important-change-ios-app/) for context.

## Read with RSS readers

wallabag is compatible with many feed readers. This is useful if you already read through an RSS workflow and want saved articles to appear there too.

<div class="contentCards readerCards">
{% for reader in readers %}
  <div>
    <h3>{{ reader.name }}</h3>
    <p><a href="{{ reader.url }}">Visit website</a></p>
  </div>
{% endfor %}
</div>

## Read on e-readers

- [Kobo with wallabako](https://gitlab.com/anarcat/wallabako)
- [Kindle with wallindle](https://github.com/cekage/wallindle)
- [PocketBook with Plop Reader](http://plop-reader.pascal-martin.fr/)

## Start with wallabag

Choose [self-hosting](/self-hosting/) if you want to run your own instance, or use [wallabag.it](https://www.wallabag.it/en) if you want a hosted account.

<p><a class="contentAction" href="#download">Download wallabag</a> <a class="contentAction contentAction-secondary" href="https://www.wallabag.it/en">Use wallabag.it</a></p>

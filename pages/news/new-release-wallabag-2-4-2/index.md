---
title: '[New release] wallabag 2.4.2'
published: true
date: 2021-03-16 12:28:00 +02:00
---

Here is the latest release of wallabag.
What changed?

- A lot of bugs related to the dark theme were fixed
- A year old bug about the auto tagging system which created duplicated tags
- A lot of translations update, thanks to [translators](https://hosted.weblate.org/projects/wallabag/) !
- The link to calculate the reading speed was updated because the previous was dead, you can now use: https://wallabag.github.io/myreadspeed/
- 60+ siteconfig [were updated](https://github.com/j0k3r/graby-site-config/compare/1.0.122...1.0.129)

To update your instance, [just run `make update`.](https://doc.wallabag.org/en/admin/upgrade.html#upgrading-from-23x-to-23y)

_🤝  A little reminder that you can support our work on wallabag by sponsoring us on [Liberapay](https://liberapay.com/wallabag) or subscribe on [wallabag.it](https://www.wallabag.it/en). Thanks!_

### Fixes
- Fix nav lang filter [#4908](https://github.com/wallabag/wallabag/pull/4908)
- Fix accessibility problem with the 2FA QR code [#4915](https://github.com/wallabag/wallabag/pull/4915)
- Preselect currently active section in the filter menu [#4972](https://github.com/wallabag/wallabag/pull/4972)
- Fix translation of date in the footer using IntlDateFormatter [#4971](https://github.com/wallabag/wallabag/pull/4971)
- Update dark theme [#4921](https://github.com/wallabag/wallabag/pull/4921)
- Dark theme updated [#4983](https://github.com/wallabag/wallabag/pull/4983)
- Fix account dropdown width [#4969](https://github.com/wallabag/wallabag/pull/4969)
- Fix auto prefered color scheme [#5071](https://github.com/wallabag/wallabag/pull/5071)
- Convert tag label to lowercase in RuleBasedTagger [#5111](https://github.com/wallabag/wallabag/pull/5111)
- Fix myreadspeed links [#5113](https://github.com/wallabag/wallabag/pull/5113)
- Internal server error while exporting to epub [#5052](https://github.com/wallabag/wallabag/issues/5052)
- Error parsing image URL (with scrset) [#4914](https://github.com/wallabag/wallabag/issues/4914)

## Download wallabag 2.4.2

To download, install/upgrade wallabag, [please read our Downloads page](https://doc.wallabag.org/en/admin/installation/installation.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) and [on IRC](irc://irc.freenode.net/wallabag), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...
You can help us via [Liberapay](https://liberapay.com/wallabag/) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UBA65LG3FX9Y&lc=gb).
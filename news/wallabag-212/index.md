---
title: '[New release] wallabag 2.1.2'
date: 2016-10-07 12:00:00 +02:00
---

It's time to update your wallabag installation, 2.1.2 is here!

[The documentation for the upgrade is available here](http://doc.wallabag.org/en/master/user/upgrade-2.1.x-2.1.y.html).  
Teasing: the update process for the next release (2.1.3 or 2.2.0) will be easier, you'll just need to run `make update` and that's all!

## Changelog

**Merged pull requests:**

- Fixed hardcoded title for internal settings [\#2464](https://github.com/wallabag/wallabag/pull/2464) ([nicosomb](https://github.com/nicosomb))
- German: improve existing and add missing translation [\#2459](https://github.com/wallabag/wallabag/pull/2459) ([Strubbl](https://github.com/Strubbl))
- add link to German documentation in about page [\#2457](https://github.com/wallabag/wallabag/pull/2457) ([Strubbl](https://github.com/Strubbl))
- Fix tabs on material [\#2455](https://github.com/wallabag/wallabag/pull/2455) ([tcitworld](https://github.com/tcitworld))
- Fix baggy display on small screens [\#2454](https://github.com/wallabag/wallabag/pull/2454) ([tcitworld](https://github.com/tcitworld))
- Bring make dev [\#2451](https://github.com/wallabag/wallabag/pull/2451) ([tcitworld](https://github.com/tcitworld))
- View improvements [\#2450](https://github.com/wallabag/wallabag/pull/2450) ([nicosomb](https://github.com/nicosomb))
- Fixed french and german doc homepages [\#2447](https://github.com/wallabag/wallabag/pull/2447) ([nicosomb](https://github.com/nicosomb))
- Added information about tagging rules in documentation [\#2446](https://github.com/wallabag/wallabag/pull/2446) ([nicosomb](https://github.com/nicosomb))
- Mention example instance in docs [\#2444](https://github.com/wallabag/wallabag/pull/2444) ([Kaligule](https://github.com/Kaligule))
- Minor fixes in the english documentation [\#2439](https://github.com/wallabag/wallabag/pull/2439) ([zertrin](https://github.com/zertrin))
- Update messages.pl.yml [\#2438](https://github.com/wallabag/wallabag/pull/2438) ([mruminski](https://github.com/mruminski))
- Added french documentation for upgrade [\#2435](https://github.com/wallabag/wallabag/pull/2435) ([nicosomb](https://github.com/nicosomb))
- Added french documentation for parameters.yml [\#2434](https://github.com/wallabag/wallabag/pull/2434) ([nicosomb](https://github.com/nicosomb))
- Update ISSUE\_TEMPLATE.md [\#2432](https://github.com/wallabag/wallabag/pull/2432) ([j0k3r](https://github.com/j0k3r))
- Lock deps for FOSUser [\#2429](https://github.com/wallabag/wallabag/pull/2429) ([j0k3r](https://github.com/j0k3r))
- Fix links on english documentation homepage [\#2426](https://github.com/wallabag/wallabag/pull/2426) ([nicosomb](https://github.com/nicosomb))
- Fixed display for note in installation page [\#2422](https://github.com/wallabag/wallabag/pull/2422) ([nicosomb](https://github.com/nicosomb))
- Avoid error when Redis isn't here in tests [\#2420](https://github.com/wallabag/wallabag/pull/2420) ([j0k3r](https://github.com/j0k3r))
- Fixed Twitter Cards by adding a description tag [\#2419](https://github.com/wallabag/wallabag/pull/2419) ([nicosomb](https://github.com/nicosomb))
- Added support of Twitter Cards for public articles [\#2418](https://github.com/wallabag/wallabag/pull/2418) ([nicosomb](https://github.com/nicosomb))
- Define a dev version for the master [\#2417](https://github.com/wallabag/wallabag/pull/2417) ([j0k3r](https://github.com/j0k3r))
- Remove automatic closing of the window from bookmarklet [\#2414](https://github.com/wallabag/wallabag/pull/2414) ([szafranek](https://github.com/szafranek))
- When a sub command fail, display error message [\#2413](https://github.com/wallabag/wallabag/pull/2413) ([j0k3r](https://github.com/j0k3r))
- Fix PostgreSQL migrations [\#2412](https://github.com/wallabag/wallabag/pull/2412) ([j0k3r](https://github.com/j0k3r))
- Fix entities definition [\#2411](https://github.com/wallabag/wallabag/pull/2411) ([j0k3r](https://github.com/j0k3r))
- Optimize tag list display [\#2410](https://github.com/wallabag/wallabag/pull/2410) ([j0k3r](https://github.com/j0k3r))
- Occitan version update [\#2409](https://github.com/wallabag/wallabag/pull/2409) ([Quent-in](https://github.com/Quent-in))
- Show number of annotations instead of nbAnnotations placeholder [\#2406](https://github.com/wallabag/wallabag/pull/2406) ([szafranek](https://github.com/szafranek))
- Fix few invalid HTML tags [\#2405](https://github.com/wallabag/wallabag/pull/2405) ([szafranek](https://github.com/szafranek))
- Cleaned up documentation for installation process [\#2403](https://github.com/wallabag/wallabag/pull/2403) ([nicosomb](https://github.com/nicosomb))
- Removed 1.x stuff in CHANGELOG [\#2402](https://github.com/wallabag/wallabag/pull/2402) ([nicosomb](https://github.com/nicosomb))
- Set env to prod in documentation [\#2400](https://github.com/wallabag/wallabag/pull/2400) ([j0k3r](https://github.com/j0k3r))
- Use default locale for user config [\#2399](https://github.com/wallabag/wallabag/pull/2399) ([j0k3r](https://github.com/j0k3r))
- Ensure orphan tag are remove in API [\#2397](https://github.com/wallabag/wallabag/pull/2397) ([j0k3r](https://github.com/j0k3r))
- Update messages.pl.yml [\#2396](https://github.com/wallabag/wallabag/pull/2396) ([mruminski](https://github.com/mruminski))
- Add ability to use socket [\#2395](https://github.com/wallabag/wallabag/pull/2395) ([j0k3r](https://github.com/j0k3r))
- Ability to check multiple urls in API [\#2393](https://github.com/wallabag/wallabag/pull/2393) ([j0k3r](https://github.com/j0k3r))
- Added default picture if preview picture is null [\#2389](https://github.com/wallabag/wallabag/pull/2389) ([nicosomb](https://github.com/nicosomb))
- Fixed two-factor checkbox display in user admin panel [\#2388](https://github.com/wallabag/wallabag/pull/2388) ([nicosomb](https://github.com/nicosomb))
- Changed Changelog by using github-changelog-generator from @skywinder [\#2386](https://github.com/wallabag/wallabag/pull/2386) ([nicosomb](https://github.com/nicosomb))
- Added documentation about siteconfig fix [\#2385](https://github.com/wallabag/wallabag/pull/2385) ([nicosomb](https://github.com/nicosomb))
- Added OpenGraph support for public articles [\#2383](https://github.com/wallabag/wallabag/pull/2383) ([nicosomb](https://github.com/nicosomb))
- Fix exists API call [\#2377](https://github.com/wallabag/wallabag/pull/2377) ([tcitworld](https://github.com/tcitworld))
- try to reduce assets build npm connection failing by updating nodejs [\#2375](https://github.com/wallabag/wallabag/pull/2375) ([tcitworld](https://github.com/tcitworld))
- Clickable tags [\#2374](https://github.com/wallabag/wallabag/pull/2374) ([tcitworld](https://github.com/tcitworld))
- API: ability to export entry in all available format \(epub, pdf, etc...\) [\#2372](https://github.com/wallabag/wallabag/pull/2372) ([pmartin](https://github.com/pmartin))
- Remove mouf/nodejs-installer from composer [\#2363](https://github.com/wallabag/wallabag/pull/2363) ([j0k3r](https://github.com/j0k3r))
- Changed relation between API client and refresh token [\#2351](https://github.com/wallabag/wallabag/pull/2351) ([nicosomb](https://github.com/nicosomb))
- Fix relations export for Entry [\#2332](https://github.com/wallabag/wallabag/pull/2332) ([j0k3r](https://github.com/j0k3r))
- Delete user [\#2177](https://github.com/wallabag/wallabag/pull/2177) ([tcitworld](https://github.com/tcitworld))

<hr />

## Download wallabag 2.1.2

To download, install/upgrade wallabag, [please read our Downloads page](https://www.wallabag.org/pages/download-wallabag.html).

<hr />

## Need help?

[We are on Gitter](https://gitter.im/wallabag/wallabag) (a chat platform), ping us! You can also open a [new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).

<hr />

## How can you help us?

By using wallabag, by reporting bugs, by translating wallabag and its documentation, by talking about wallabag to your friends, ...

Finally, don't forget that [you can also support us via Paypal, Flattr, Gratipay or Bountysource](https://www.wallabag.org/pages/donations.html).
---
title: 'Why we won''t accept all your pull requests or feature requests'
published: true
date: 2022-03-28 14:11:00 +02:00
---

Today, I will try to explain why our team won't accept all your pull requests or feature requests. 

Some features were requested years ago. Especially content edition ([here](https://github.com/wallabag/wallabag/pull/5650), [here](https://github.com/wallabag/wallabag/pull/5544) or [here](https://github.com/wallabag/wallabag/pull/5551)) or [« RSS to wallabag » implementation](https://github.com/wallabag/wallabag/issues/3360). 

## About content edition 

wallabag is a read-it-later application. Its main feature is **to archive a web article**. You send a URL to wallabag, and wallabag saves the page content at time T. If the online page is updated or deleted, wallabag keeps the version.  
wallabag takes a snapshot of a web article, and that's all. 

But why can we edit the article title into wallabag? Because the title is displayed on the list page, and it can be more useful to find an article if you changed the title. 

## About « RSS to wallabag »

This feature is not in the wallabag DNA. With wallabag, we want to to do one thing (to archive a web article) and we want to do it well.

Today, a lot off RSS readers can be plugged to wallabag (for example: Miniflux, Vienna RSS, FreshRSS, Tiny Tiny RSS, Leed, FeedReader or Fiery Feeds). They do the job. 

RSS agreggation is a specific and complex job. We don't want to reinvent the wheel in our application. To develop this feature would take us time, and we're not sure to implement as well as you expect. 

Moreover, if we add more features to our application, we'll increase wallabag complexity and it will be harder to maintain it. 

## More generally

More generally, keep in mind that the wallabag roadmap is managed by the core team and the core team will always have the last word on adding a new feature. 

The problem is not to develop the requested feature: it's about the direction we wish to take for wallabag. So even if someone develops one of these features and opens a new pull request, we don't have to accept it. 

Please accept our choices 🙏

Nicolas
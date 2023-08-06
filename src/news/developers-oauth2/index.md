---
title: 'Developers, connect your app to wallabag via oAuth2'
date: 2015-10-22 22:30:00 +02:00
---

We finally implement [oAuth2](https://en.wikipedia.org/wiki/OAuth) in wallabag v2.

This blog post is here to explain to you how you can integrate your application to wallabag v2.

For each call to our API, you need a token. If you do a call without token, you will have this message: `OAuth2 authentication required`.

For example, try this command:

*NOTE: the following commands make use of [the HTTPie library](https://github.com/jkbrzt/httpie). Make sure it is installed on your system before using it.*

    http GET http://v2.wallabag.org/api/entries/1.json

To create a token for a given user, you need a client id and a client secret. As we are still in alpha, we create a client for you (but in few weeks, each application will have its own client id and client secret).

For the existing user nicosomb/nicolas, you can do this call:

    http POST http://v2.wallabag.org/oauth/v2/token \
        grant_type=password \
        client_id=1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4 \
        client_secret=4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k \
        username=nicosomb \
        password=nicolas

The API will return a response like this:

    HTTP/1.1 200 OK
    Cache-Control: no-store, private
    Connection: close
    Content-Type: application/json
    Date: Tue, 06 Oct 2015 18:24:03 GMT
    Host: localhost:8000
    Pragma: no-cache
    X-Debug-Token: be00a1
    X-Debug-Token-Link: /profiler/be00a1
    X-Powered-By: PHP/5.5.9-1ubuntu4.13
    {
        "access_token": "ZWFjNjA3ZWMwYWVmYzRkYTBlMmQ3NTllYmVhOGJiZDE0ZTg1NjE4MjczOTVlNzM0ZTRlMWQ0MmRlMmYwNTk5Mw",
        "expires_in": 3600,
        "refresh_token": "ODBjODU1NWUwNmUzZTBkNDQ5YWVlZTVlMjQ2Y2I0OWM2NTM1ZGM2M2Y3MDhjMTViM2U2MzYxYzRkMDk5ODRlZg",
        "scope": null,
        "token_type": "bearer"
    }

The `access_token` is useful to do a call to the API endpoint. For example:

    http GET http://v2.wallabag.org/api/entries.json \
        "Authorization:Bearer Yzk1MDk1YmE3NjE0OTMwMTgxODc5ODdlODMwNDIxYzlhOWMxNzY3N2Q0ZjZjMjFkNTRjYzAxMjgxZTlmNmJmNg"

This call will return all the entries for `nicosomb`.

You can create your own user on [http://v2.wallabag.org](http://v2.wallabag.org) for your tests.

If you want to see all the API endpoints, you can have a look to our API documentation: [http://v2.wallabag.org/api/doc](http://v2.wallabag.org/api/doc).  
We will have more endpoints in few weeks if necessary.

If you have some problems with the API, [feel free to create a new issue on GitHub](https://github.com/wallabag/wallabag/issues/new).
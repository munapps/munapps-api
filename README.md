![Fine! I&rsquo;ll make my own API](http://i.imgur.com/mmHtSU3.jpg)

Memorial University API
=======================

I present to you a programmatic way to access all of the services offered by [Memorial University](http://www.mun.ca). Ontop of this API we can build apps that are&rsquo;nt awful.

What services are we talking about?
-----------------------------------

Planned:

- [Campus news and events](http://today.mun.ca/)
- [Desire2Learn](https://online.mun.ca)
- [Memorial Self-Service](https://www5.mun.ca/admit/twbkwbis.P_WWWLogin)
- [Memorial University Campus Card](https://brunnr.aits.mun.ca)
- [Webtools](https://webtools.cs.mun.ca)

API checklist
-------------

- [ ] Adequate documentation
- [ ] SSL
- [ ] Rate limiting
- [ ] API versioning via the `Accept` header
- [ ] Resource representation negotation (via `Accept` and `Content-type`)
- [ ] Gzip
- [ ] Pagination via `Link` headers
- [ ] Custom error messages with defined HTTP status codes
- [ ] Authentication
- [ ] JSON as a hypermedia via [HAL](http://git.io/KULfAw)

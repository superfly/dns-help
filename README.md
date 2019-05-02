# Using Your Own Domain Name with Fly

When you create an application at Fly, you get a randomized DNS name to access it with. E.g. `vapid-hedgehog-4710.edgeapp.net`. Commonly, you wouldn't want your users to access the application with that name for cosmetic reasons. It just looks strange, and doesn't have anything to do with your application's purpose and intent. Instead, you'll probably want your users to access the Fly Edge App with a domain name that you own. 

Throughout this document, when we want to use an example domain we'll just say `your-application.com`. For example, `your-application.com` would be the URL that your customers use to access the application at `vapid-hedgehog-4710.edgeapp.net`.

The following instructions help you set up all the magic.

# DNS Provider Instructions
We'd love to know which companies people are using to host their DNS zones. If you don't see your DNS provider below, [submit a PR](https://help.github.com/articles/creating-a-pull-request/) to add it to the list! If it's already there, show it some love by pasting a 👍 next to it! If the following instructions don't seem to be working for you, or you have other questions, let us know: [Tweet at us](https://twitter.com/flydotio), [email us](mailto:support@fly.io), or [ask us in real time on Gitter](https://gitter.im/superfly/fly).

At Fly, we tend to divide DNS providers into two categories: **Preferred** and **Unsupported**. Preferred DNS providers offer a `CNAME`-like resource record at a zone's apex. In other words, you can respond to queries for `your-application.com` with another DNS name, like `this.other-domain.com`. Unsupported DNS providers don't offer that option, or the option just doesn't provide a great experience. For example, many providers will offer HTTP redirection for your apex domain (but not HTTPS redirection) or an iframe redirect. Neither of those work great for real world web applications.

We're still working on making this a complete list, but here's the current providers that we often encounter:

## Preferred:
- [Cloudflare](providers/cloudflare.md) 👍
- [DNSimple](providers/dnsimple.md)
- [DNSMadeEasy](providers/dnsmadeeasy.md)

## Unsupported:
- [AWS Route 53](providers/aws-route-53.md)  👍
- [Google Domains](providers/google-domains.md)
- [Enom](providers/enom.md)
- [GoDaddy](providers/godaddy.md)
- [NameCheap](providers/namecheap.md) 👍👍
- [TheNames.uk](providers/thenames.md) (AKA names.co.uk)

## Still Being Investigated:
- [Digital Ocean](providers/digital-ocean.md) 👍
- [DreamHost](providers/dreamhost.md)
- [Freenom](providers/freenom.md) 👍👍👍
- [Gandi](providers/gandi.md)
- [Google Cloud Platform Cloud DNS](providers/google-cloud.md)
- [Hover](providers/hover.md)
- [iwantmyname](providers/iwantmyname.md)
- [Linode](providers/linode.md)
- [Name.com](providers/name.md)
- [Netlify](providers/netlify.md) 👍👍
- [NS1](providers/ns1.md)

### DNS Documentation Help

Want to provide instructions on how put a `CNAME`-equivalent record at a zone's apex? [Check out our provider template](providers/template-for-providers.md), add some instructions, then sit back and steep in the glory. The more screenshots and links to original sources of information, the hotter the glory to steep in.

# High Level Overview For Using Your Own Domain Name

You went to the expense of buying a domain name for your application, and now you want to use it. That's fair! We can help you do that. 

## Using the Domain Apex

A domain apex, (AKA "Naked Domain" or "Bare Domain") is referring to a domain without any subdomains. E.g. `your-application.com` is the domain apex, whereas `www.your-domain.com` would be referring to a subdomain (`www`). To use your domain apex, here are three high level tidbits of information that you should have in mind:

**First,** know that no matter what, we'll help you get your bare domain pointing to your Fly application. However you may not be able to use your current DNS provider. Fortunately, changing DNS providers is pretty simple and doesn't cause any downtime.

**Second,** you'll want to create a `CNAME`-equivalent DNS resource record at your domain apex (e.g. `your-application.com`) that responds to queries with the DNS name that Fly.io gave you for your Edge App. That Fly.io DNS name will end in `edgeapp.net`, for example `vapid-hedgehog-4710.edgeapp.net`.

**Third,** once everything is in place, your users' DNS queries ultimately resolve to bring them to Fly.io's edge servers. That's where Fly receives your users' HTTP traffic and serves your Fly Edge App to your customers using your domain name.

With the above principles in mind, you may be able to figure out how to create the needed records at your DNS provider even if they're not listed above, or aren't a preferred provider.

## Why is it Such a Problem to Use a Bare Domain Anyway?!

Ultimately, the trouble with using a bare domain is:

1. You need to cause `your-application.com` to resolve to another human readable name, like `vapid-hedgehog-4710.edgeapp.net`. In DNS terms, that's a `CNAME` record. Except...
2. `CNAME` records can't exist at the domain apex. Why? [That question has quite the answer](https://serverfault.com/questions/613829/why-cant-a-cname-record-be-used-at-the-apex-aka-root-of-a-domain), and involves consuming [a lot of RFC text](https://tools.ietf.org/html/rfc1034). Like... [a _lot_](https://tools.ietf.org/html/rfc1035). The short answer is: Because the RFCs say so, and DNS software works that way.

In response to domain apices (yes, that's a word) not being able to use `CNAME` records, DNS providers have created a number of non-standard, alternative record types that help preserve RFC compliance (more or less), and yet offer the functionality that application developers are looking for. Those "`CNAME`-equivalent" records may be called an `ALIAS` record type, or `A-NAME` or "Flattened `CNAME`", depending on your service provider.

Ultimately, those `CNAME`-equivalent records will act like an `A` record to external DNS clients that ask for your domain apex. Internal to your DNS provider, however, those `CNAME`-equivalent resource records work to resolve other human-readable DNS records to IP addresses, unlike any native DNS record type at the apex.

## Using a Sub-Domain, e.g. `www.your-application.com`

If you're using a subdomain, such as `www.your-application.com`, the generic instructions are simple:

1. Log in to the service where your DNS records are hosted.
2. Add a `CNAME` record for `www.your-application.com` that points to the `edgeapp.net` domain that's provisioned for your application. For example, `vapid-hedgehog-4710.edgeapp.net`.

# Troubleshooting
There are a lot of possibilities when troubleshooting DNS issues. We've written a separate troubleshooting document to help you out. [Check out our troubleshooting guidance here](./troubleshooting.md), but do let us know if you're stuck!

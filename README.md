# Using Your Own Domain Name with Fly

When you create an application at Fly, you get a randomized DNS name to access it with. E.g. `vapid-hedgehog-4710.edgeapp.net`. Commonly, you wouldn't want your application's users to use that name. Instead, if you own your own domain name, your users can use that to access your Fly Edge App. E.g. `your-application.com` being the URL that your customers use to access the application at `vapid-hedgehog-4710.edgeapp.net`.

The following instructions help you set up all the magic.

# DNS Provider Instructions
We'd love to know which services people are using to host their DNS records. If you don't see your DNS provider below, [submit a PR](https://github.com/superfly/dns-help) to add your preferred DNS provider to the list! If it's already there, show it some love by pasting a 👍 next to it! If the following instructions don't seem to be working for you or you have other questions, let us know: [Tweet at us](https://twitter.com/flydotio), [email us](mailto:support@fly.io), or [ask us in real time on Gitter](https://gitter.im/superfly/fly).

At Fly, we tend to divide DNS providers into two categories: Preferred and Unsupported. Preferred DNS providers offer a `CNAME`-like resource record at your zone's apex. In other words, you can forward DNS queries for your-domain.com to another DNS name, like this.other-domain.com. Unsupported DNS providers don't offer that option, or the option isn't easy to implement and requires the use of other service and some coding to make work.

We're still working on making this a complete list, but here's how the providers list stands now:

## Preferred:
- [DNSimple](dnsimple.md)

## Unsupported:
- [AWS Route 53](providers/aws-route-53.md)  👍

##Still Being Investigated:
- [Cloudflare](providers/cloudflare.md) 👍
- [Digital Ocean](digital-ocean.md) 👍
- [DNSMadeEasy](dnsmadeeasy.md)
- [DreamHost](dreamhost.md)
- [Enom](enom.md)
- [Freenom](freenom.md) 👍👍👍
- [Gandi](gandi.md)
- [GoDaddy](godaddy.md)
- [Google Cloud](google-cloud.md)
- [Hover](hover.md)
- [iwantmyname](iwantmyname.md)
- [Linode](linode.md)
- [Name.com](name.md)
- [NameCheap](namecheap.md) 👍👍
- [Netlify](netlify.md) 👍👍
- [NS1](ns1.md)

## DNS Documentation Help

Want to provide instructions on how put a CNAME-equivalent record at a domain apex? [Check out our provider template](providers/template-for-providers.md) and add some instructions, then sit back and steep in the glory. The more screenshots and links to original sources of information, the hotter the glory to steep in.

# Using a Custom Domain

You went to the expense of buying a domain name for your application, and now you want to use it. That's fair! We can help you do that. Hereafter, when we want to use an example domain, we'll just say `your-application.com` and then you can mentally substitute that for your _real_ domain, which we all know is `hamsters-with-flamethrowers.com`.

## High Level Overview

To use your own domain, here are three high level tidbits of information that you should have in mind:

**First,** if you want to use your bare domain (`your-application.com`) vs. a subdomain (`www.your-application.com`), you may likely have some extra hoops to jump through at your DNS provider.

**Second,** you'll be creating a CNAME or CNAME-equivalent DNS resource record to send DNS query traffic bound for your domain to the domain that Glitch uses to accept your HTTP traffic. Currently that's shw.io.

**Third,** after your users' DNS query resolves properly, Glitch then recieves your users' HTTP traffic and serves your application up on your custom domain, rather than on the glitch.com domain.

With the above principles in mind, you may be able to figure out how to create the needful records in your DNS zone even if your DNS provider isn't listed above.

## Using a Sub-Domain, e.g. `www.your-application.com`

If you're using a subdomain, such as `www.your-application.com`, the generic instructions are simple:

1. Log in to the service where your DNS records are hosted.
2. Add a `CNAME` record for `www.your-application.com` that points to the shw.io domain that's provisioned for your application. For example, `something-random.show.io`.

## Using Your Bare Domain, e.g. `your-application.com`

If you want to use your bare domain, also known as an apex domain, you may have one or two extra things to do. It depends on what service provider hosts your DNS records. We have specific instructions for many DNS providers above. 

Ultimately, the trouble with using a bare domain is:

1. You need to cause `your-application.com` to resolve to another human readable name, like random-domain.shw.io. In DNS terms, that's a CNAME record. Except...
2. CNAME records can't exist on your Apex domain. Why? [That question has quite the answer](https://serverfault.com/questions/613829/why-cant-a-cname-record-be-used-at-the-apex-aka-root-of-a-domain). The short answer is: Because the RFC says so.

In response to apex domains not technically being able to use `CNAME` records to resolve to another human readable name (which in turn would eventually resolve to an IP address), DNS providers have created a number of non-standard, alternative record types that help preserve RFC compliance (more or less), and yet offer the functionality that application developers are looking for. Those "`CNAME`-like" records may be called an `ALIAS` record type, or `A-NAME` or "Flattened `CNAME`", depending on your service provider.

When you create the `CNAME`-like record that your DNS provider supports at the apex of your domain, you want to point the record to the shw.io domain that your application has been assigned. For example: `random-domain.shw.io`.

# Troubleshooting
There are a lot of possibilities when troubleshooting DNS issues. We've written a separate troubleshooting document to help you out. [Check out our troubleshooting guidance here](./troubleshooting.md), but do let us know if you're stuck!

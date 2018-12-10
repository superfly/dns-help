# Using Custom Domains with your Glitch Project

Do you own a domain? Do you want your Glitch project to be accessible simply by using your domain name? You've come to the right place!


# DNS Provider Instructions
We'd love to know which services people are using to host their DNS records. Add the service that you're using to the list below, and if it's already there, copy and paste a 👍 next to it!

- [AWS Route 53](providers/aws-route-53.md)  👍
- [Cloudflare](providers/cloudflare.md) 👍
- [DNSimple](dnsimple.md)
- [DNSMadeEasy](dnsmadeeasy.md)
- [Freenom](freenom.md) 👍👍👍
- [GoDaddy](godaddy.md)
- [Google Cloud](google-cloud.md)
- [Hover](hover.md)
- [NameCheap](namecheap.md) 👍👍
- [Netlify](netlify.md) 👍👍
- [NS1](ns1.md)
- [Digital Ocean](digital-ocean.md) 👍
- [Name.com](name.md)
- [Enom](enom.md)
- [DreamHost](dreamhost.md)
- [iwantmyname](iwantmyname.md)
- [Gandi](gandi.md)
- [Linode](linode.md)

Want to provide instructions on how put a CNAME-equivalent record at your domain apex? Toss up some instructions, then sit back and steep in the glory. The more screenshots and links to original sources of information, the hotter the glory to steep in.


# Using a Custom Domain

Hereafter, when we want to use an example domain, we'll just say "your-application.com" and then you can mentally substitute that for your _real_ domain, which we all know is hamsters-with-flamethrowers.com.

## High Level Overview

To use your own domain, here are three high level tidbits of information that you should have in mind:

First, if you want to use your bare domain (your-application.com) vs a subdomain (www.your-application.com), you may likely have some extra hoops to jump through at your DNS provider.

Second, you'll be creating a CNAME or CNAME-equivalent DNS resource record to send DNS query traffic bound for your domain to the domain that Glitch uses to accept your HTTP traffic. Currently that's shw.io.

Third, after your users' DNS query resolves properly, Glitch then recieves your users' HTTP traffic and serves your application up on your custome domain, rather than on the glitch.com domain.

## Using a Sub-Domain, e.g. www.your-application.com

If you're using a subdomain, such as www.your-application.com, the instructions are simple:

1. Log in to the service where your DNS records are hosted.
2. Add a `CNAME` record for www.your-application.com that points to the shw.io domain that's provisioned for your application. For example, `something-random.show.io`.

## Using Your Bare Domain, e.g. your-application.com

If you want to use your bare domain, also known as an apex domain, you may have one or two extra things to do. It depends on what service provider hosts your DNS records. We have specific instructions for many DNS providers below. If yours isn't listed, tell us about it! [Tweet us](https://twitter.com/flydotio), [email us](mailto:support@fly.io), [ask us in real time on Gitter](https://gitter.im/superfly/fly), or join and edit this document on Glitch.

Ultimately, the trouble with using a bare domain is 

1. You need to cause your-application.com to resolve to another human readable name, like random-domain.shw.io. In DNS terms, that's a CNAME record. Except...
2. CNAME records can't exist on your Apex domain. Why? [That question has quite the answer](https://serverfault.com/questions/613829/why-cant-a-cname-record-be-used-at-the-apex-aka-root-of-a-domain). The short answer is: Because the RFC says so.

In response to apex domains not technically being able to resolve to another human readable name (which in turn would eventually resolve to an IP address), DNS providers have created a number of non-standard, alternative record types that help preserve RFC compliance (more or less), and yet offer the functionality that application developers are looking for.

1. If a subdomain (`wat.example.com`)
  1. Create a CNAME record
  2. Enter the subdomain in the name field (`wat`)
  3. Enter the target domain in the value field (`something-random.shw.io`) (sometimes this needs a trailing `.`)
2. If an Apex domain, their DNS provider needs to support an ALIAS record type (sometimes called an A-NAME or a flattened CNAME): https://support.dnsimple.com/articles/alias-record/
  1. Create an ALIAS record
  2. Leave name blank (or maybe enter `@` depending on DNS provider)
  3. Enter target domain in the value field (`something-random.shw.io`) (sometimes this needs a trailing `.`)

# Troubleshooting
There are a lot of possibilities when truobleshootig DNS issues. We've written a separate troubleshooting document to help you out. [Check it out here](./troubleshooting.md) and let us know if it's not helping your specific situation.

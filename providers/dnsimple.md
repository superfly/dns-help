# `Provider Name` at a glance

 |   | Does | Doesn't |
 | :---: | :---: | :---: |
 | Apex `CNAME` equivalent | :heavy_check_mark: |  |
 | API Access | :heavy_check_mark:|  |

# Using the Apex Domain

DNSimple has a special, proprietary resource  record known as an [`ALIAS` record](https://support.dnsimple.com/articles/alias-record/) that mimics `CNAME` behavior on apex domains .When a DNS client, such as your users' devices, requests your domain name, they're handed an `A` record that resolves your domain name to one or more IP addresses. Behind the scenes, DNSimple is actually looking to another hostname to get the IP address that ultimately gets handed back to your users.

## Creating an `ALIAS` record in the DNSimple UI
To create a new `ALIAS` record, log in to your DNSimple account, click in to the domain that you want to manage. From there, follow these steps:

1. Click the "DNS" navigation element, an select "Manage" from the "DNS Records" option:

![DNSimple - Manage DNS Records for your Domain](./screenshots/dnsimple/dnsimple-manage-dns-records.png "DNSimple - Manage DNS Records for your Domain")


2. Select "Add record" and choose "`ALIAS`":

![DNSimple - Select New Alias Record](./screenshots/dnsimple/dnsimple-select-alias-record.png "DNSimple - Select New Alias Record")
dnsimple-select-alias-record.png

3. When adding a new `ALIAS` record, you want to focus on three things. First, leave the name blank if you want to use the domain apex (i.e. your-application.com without any subdomain). Second, you need to know the Fly URL for your edge app. For example, `vapid-hedgehog-4710.edgeapp.net`. Third... click the button!

![DNSimple - Add a New ALIAS Record](./screenshots/dnsimple/dnsimple-add-alias-record.png "DNSimple - Add ALIAS Record (Forgive me designers, for I have sinned)")
dnsimple-add-alias-record.png

## Creating an `ALIAS` record with the DNSimple API


You'll want to include:
- If the Apex domain supports a `CNAME`-equivalent resource record.
- If there are multiple options for using the apex domain, such as an `ALIAS` record in addition to an HTTP redirection option, etc.
- Any pertinent characteristics of the methods involved in using the apex domain.
- Links to source documentation for the provider.
- Step by step instructions on how to create the record in the GUI. Screenshots are good.
- If the record can be created via an API. Examples and links to documentation would be greeeaaattt.

## `URL` Records

DNSimple also has support for HTTP redirects with [`URL` Records](https://support.dnsimple.com/articles/url-record/). While handy, we'd recommend that you instead use DNSimple's `ALIAS` record to redirect your application to Fly with DNS, rather than with HTTP redirects. DNSimple `URL` resource records force your clients to move up and down the network stack from DNS to HTTP at DNSimple before then moving to Fly where they once again moving through the network stack to finally reach your application. I would be more performant, and reduce the moving parts to simply use an `ALIAS` record.

However, you know your needs better than we do. If you find that the `URL` record better suits your situation, let us know about it! Drop us a note at [support@fly.io](mailto:support@fly.io) or [chat with us on Gitter](https://gitter.im/superfly/fly).


# Using a Subdomain

If your application lives on a subdomain, you can simply use a `CNAME` record at DNSimple.

1. 

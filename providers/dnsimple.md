---
nameserver-pattern: ns[0-5].dnsimple.com
---

# DNSimple at a Glance

 |   | Does | Doesn't |
 | :---: | :---: | :---: |
 | Apex `CNAME` equivalent | :heavy_check_mark: |  |
 | API Access | :heavy_check_mark:|  |

# Using the Domain Apex

DNSimple has a special, proprietary resource record known as an [`ALIAS` record](https://support.dnsimple.com/articles/alias-record/) that mimics `CNAME` behavior on apex domains. When a DNS client, such as your users' devices, requests your domain name, they're given the value of an `A` record that resolves your domain name to one or more IP addresses. Behind the scenes, DNSimple is actually looking to another hostname to get the IP address that ultimately gets handed back to your users.

## Creating an `ALIAS` record in the DNSimple UI
To create a new `ALIAS` record for your apex domain, log in to your DNSimple account, click in to the domain that you want to manage. From there, follow these steps:

1. Click the "DNS" navigation element, then select "Manage" from the "DNS Records" section:

![DNSimple - Manage DNS Records for your Domain](./screenshots/dnsimple/dnsimple-manage-dns-records.png "DNSimple - Manage DNS Records for your Domain")


2. Select "Add record" and choose "`ALIAS`":

![DNSimple - Select New Alias Record](./screenshots/dnsimple/dnsimple-select-alias-record.png "DNSimple - Select New Alias Record")

3. When adding a new `ALIAS` record for your apex domain, you want to focus on three things. First, leave the name blank if you want to use the apex domain. Second, you need to know the Fly URL for your edge app. For example, `vapid-hedgehog-4710.edgeapp.net`. Third... click the button!

![DNSimple - Add a New ALIAS Record](./screenshots/dnsimple/dnsimple-add-alias-record.png "DNSimple - Add ALIAS Record (Forgive me designers, for I have sinned)")

4. You've done it! Your apex domain should now point to your Fly Edge App URL, and your application users should be shipped off to Fly's Edge servers every time they access your application. If that's not the case, check out our [troubleshooting document](../troubleshooting.md) or reach out to us at [support@fly.io](mailto:support@fly.io) or [chat with us on Gitter](https://gitter.im/superfly/fly).

## `URL` Records

DNSimple also offers a HTTP redirect option with [`URL` Records](https://support.dnsimple.com/articles/url-record/). However, this would _not_ be the record type that you'd want to use with a Fly Edge App. Instead, use the `ALIAS` record above.

# Using a Subdomain

If your application lives on a subdomain, you can simply [use a `CNAME` record at DNSimple](https://support.dnsimple.com/articles/manage-cname-record/).

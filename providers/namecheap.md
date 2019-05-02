# Namecheap  at a glance

 |   | Does | Doesn't |
 | :---: | :---: | :---: |
 | Apex `CNAME` equivalent |  | :no_entry_sign: |
 | API Access | :heavy_check_mark:|  |

For the purposes of this document, Namecheap offers two main DNS options for their customers: FreeDNS and PremiumDNS. Neither product offers a `CNAME`-equivalent resource record for the apex domain. It's _technically_ possible at Namecheap for you to add a pure `CNAME` record at the apex domain, however since that is against the RFC standard, the behavior will be unpredictable. We do not recommend using Namecheap's ability to place a pure `CNAME` record at your apex domain. You will almost certainly have negative consequences as a result.

Cast a glance at our [list of preferred DNS hosts](https://github.com/superfly/dns-help#preferred).

# Using a Subdomain

If you want your application to be a subdomain on your main domain, you'll want to create a new `CNAME` record within Namecheap's DNS management dashboard.

### 1. Log in to Namecheap, search for the domain that you'd like to use with your Fly Edge App, and click "manage."

![Namecheap - Manage DNS Records for your Domain](./screenshots/namecheap/namecheap-manage-domain.png "Namecheap - Manage DNS Records for your Domain")

### 2. Click "Advanced DNS"

![Namecheap - Choose Advanced DNS](./screenshots/namecheap/namecheap-advanced-dns.png "Namecheap - Choose Advanced DNS")


###  3. Add a new resource record, choosing `CNAME` as the type:

  * The "Host" value would be the subdomain that you want your users to access your application with. For example, `app` would mean your users access your site with the URL `app.your-application.com`.
  * The "Points to" section would be where your application resides at Fly. For example, `vapid-hedgehog-4710.edgeapp.net`.

![Namecheap - Add DNS Records for your Domain](./screenshots/namecheap/namecheap-add-cname-record.png "Namecheap - Add DNS Records for your Domain")

Once you save the `CNAME` information, your users will be able to access your application at Fly.io using the subdomain you just set up. Your users will only see your subdomain URL in their browser, and will not see your Fly.io URL.

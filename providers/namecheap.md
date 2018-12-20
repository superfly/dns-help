# Namecheap  at a glance

 |   | Does | Doesn't |
 | :---: | :---: | :---: |
 | Apex `CNAME` equivalent |  | :no_entry_sign: |
 | API Access | :heavy_check_mark:|  |

 For the purposes of this document, Namecheap offers two main DNS options for their customers: FreeDNS and PremiumDNS. Neither product offers a `CNAME`-equivalent resource recordfor the apex domain. It's _technically_ possible for you to add a pure `CNAME` record at the apex domain, however since that is against the RFC standard, the behavior will be unpredictable. We do not recommend using Namecheap's ability to place a pure `CNAME` record at your apex domain. You will almost certainly have negative consequences as a result.

 Instead, you can use their URL forwarding option, however that comes with its own limitations.

# Using the Apex Domain

To use the apex domain, you'll want to use Namecheap's free URL forwarding service. However, you'll want to consider the following characteristics of URL forwarding:

* Your users can only click or type your domain URL if it begins with `http://`. Namecheap's forwarding servers do not listen for HTTPS requests.  If your domain is `your-application.com`, you'll want to give out your URL as `http://your-application.com` rather than `https://your-application.com`. However, the URL that you forward to can be `https://`, for example your Fly Edge App's URL.
* Using the "masking" option for a URL forwarding record will allow your users to see your domain in their browser's URL bar. However, your Fly Edge App will be loaded in an iframe, breaking responsive design, among other things. Only you can decide if iframe embedding is acceptable for your use case.
* Disabling the "masking" option for Namecheap URL forwarding will cause users to be HTTP redirected to your Fly Edge App URL. For example, `https://vapid-hedgehog-4710.edgeapp.net`. This may be an inconsistent and confusing experience.

Follow these steps to creat a URL forwardig record.

### 1. Log in to Namecheap search for the domain that you'd like to use with your Fly Edge App. Click "manage."

![Namecheap - Manage DNS Records for your Domain](./screenshots/namecheap/namecheap-manage-domain.png "Namecheap - Manage DNS Records for your Domain")

### 2. URL forwarding only works if your domain is using Namecheap's nameservers. On the "Domain" overview page, check to make sure that either BasicDNS, FreeDNS, or PremiumDNS is the selected option.

![Namecheap - Choose Namecheap DNS Servers](./screenshots/namecheap/namecheap-choose-nameservers.png "Namecheap - Choose Namecheap DNS Servers")

### 3. Click "Advanced DNS"

![Namecheap - Choose Advanced DNS](./screenshots/namecheap/namecheap-advanced-dns.png "Namecheap - Choose Advanced DNS")

### 4. Check your domain for any pre-existing records at the apex domain; e.g. `@`. Namecheap will, by default, place a record at `@`and `www` if you have no user-created records. Namecheap's default `@` record will point to their parkingpage.namecheap.com site. If you have a record at `@` record that points anywhere else, then you'll want to remove it. If you have a record at `@` that points to parkingpage.namecheap.com, you can ignore it and proceed:

![Namecheap - Inspect the DNS records that exist](./screenshots/namecheap/namecheap-inspect-pre-existing-records.png "Namecheap - Inspect the DNS records that exist")

### 5 Add a new record, choosing "URL Redirect Record" as the type, `@` as the host, and your Fly Edge App URL as the Destination URL. You'll then need to choose the redirect type. [You can find out more detailed information about the redirect types that Namecheap offers here](https://www.namecheap.com/support/knowledgebase/article.aspx/9604/2237/types-of-domain-redirects--301-302-url-redirects-url-frame-and-cname). This is a brief summary of your choices:

 - Masked: This loads the destination site in an iframe and keeps your apex domain in a user's browser.
 - Unmasked: This uses an HTTP 302 Redirect to send traffic to the destination.
 - Permanent: This uses an HTTP 301 Redirect to send traffic to the destination.

 Once you've chosen, click the green check mark.

![Namecheap - Choose Redirect Type](./screenshots/namecheap/namecheap-choose-redirect-type.png "Namecheap - Choose Redirect Type")

Your domain should now be usable with your Fly Edge App.



# Using a Subdomain

If you want your application to be a subdomain on your main domain, you'll want to create a new `CNAME` record within Namecheap's DNS management dashboard.

## 1. Log in to your Namecheap account and look for the domain that you want to use with a Fly Edge Application. Once you've found it, click the "Manage" button:

![Namecheap - Manage DNS Records for your Domain](./screenshots/namecheap/namecheap-manage-domain.png "Namecheap - Manage DNS Records for your Domain")

## 2. Click "Advanced DNS"

![Namecheap - Choose Advanced DNS](./screenshots/namecheap/namecheap-advanced-dns.png "Namecheap - Choose Advanced DNS")


##  3. On the DNS Management page, look for the "Host Records" section and click the "Add New Record" button:

![Namecheap - Add DNS Records for your Domain](./screenshots/namecheap/namecheap-add-dns-record.png "Namecheap - Add DNS Records for your Domain")

## 4. From the "Type" drop down menu, choose to add a `CNAME` record

![Namecheap - Add DNS Records for your Domain](./screenshots/namecheap/namecheap-add-cname.png "Namecheap - Add DNS Records for your Domain")

## 4. Provide the information to create your `CNAME` record.
  * The "Host" would be the subdomain that you want your users to access your application with. For example, `app` would mean your users access your site with the URL `app.your-application.com`.
  * The "Points to" section would be where your application resides at Fly. For example, `vapid-hedgehog-4710.edgeapp.net`.

![Namecheap - Provide CNAME information for your subdomain](./screenshots/namecheap/namecheap-cname-info.png "Namecheap - Provide CNAME information for your subdomain")

Once you save the `CNAME` information, your users will be able to access your application at Fly.io using the subdomain you just set up. Your users will only see your subdomain in their browser, and will not see your Fly.io URL.

---
nameserver-pattern: *awsdns*
---

# `Provider Name` at a glance

 |   | Does | Doesn't |
 | :---: | :---: | :---: |
 | Apex `CNAME` equivalent | | :no_entry_sign: |
 | API Access | :heavy_check_mark:| |

# Using the Apex Domain

AWS Route 53 currently does _not_ support a `CNAME`-equivalent resource record at a domain's apex. At this time, we'd recommend using one of the preferred service providers [listed here](../README.md).

Currently, the general idea for using your domain apex is to create a static site in Amazon S3, point your domain to that site, and configure it to 301 redirect to a different URL. That URL would be your edgeapp.net URL that your Fly application has been assigned. You can find out more information about [Amazon S3 redirection and Route 53 here](https://aws.amazon.com/premiumsupport/knowledge-center/redirect-domain-route-53/).

If that doesn't meet your requirements, or you have difficulty setting it up, let us know at support@fly.io or talk to us in our [Gitter channel](https://gitter.im/superfly/fly).

# Using a Subdomain

If you'd like to use a subdomain to point to your Fly application, you can simply create a new `CNAME` record set and set the value to the edgeapp.net URL that your Fly application has been assigned.

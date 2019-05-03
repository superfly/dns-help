---
nameserver-pattern: `ns*.freenom.com`
---

# Freenom at a glance

 |   | Does | Doesn't |
 | :---: | :---: | :---: |
 | Apex `CNAME` equivalent | | :no_entry_sign: |
 | API Access | :heavy_check_mark:| |

Freenom does not provide a `CNAME`-equivalent resource record for apex domains.

# Using a Subdomain

If you want your application to be a subdomain on your main domain, you'll want to create a new `CNAME` record within Freenom's dashboard. Freenom offers documentaiton for this procedure here: https://my.freenom.com/knowledgebase.php?action=displayarticle&id=33

Note that when creating the `CNAME` record, you want the target of the record to point to your Fly Edge App hostname. For example, `vapid-hedgehog-4710.edgeapp.net`.

Once you save the `CNAME` information, your users will be able to access your application at Fly.io using the subdomain you just set up. Your users will only see your subdomain in their browser, and will not see your Fly.io URL.

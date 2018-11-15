* Users need to know if they're using a subdomain (wat.example.com) or an apex domain (example.com)

1. If a subdomain (`wat.example.com`)
  1. Create a CNAME record
  2. Enter the subdomain in the name field (`wat`)
  3. Enter the target domain in the value field (`something-random.shw.io`) (sometimes this needs a trailing `.`)
2. If an Apex domain, their DNS provider needs to support an ALIAS record type (sometimes called an A-NAME or a flattened CNAME): https://support.dnsimple.com/articles/alias-record/
  1. Create an ALIAS record
  2. Leave name blank (or maybe enter `@` depending on DNS provider)
  3. Enter target domain in the value field (`something-random.shw.io`) (sometimes this needs a trailing `.`)
  
## How to create dns records

1.  Goto Domains
2.  Scroll down
3.  Click "Add new record"
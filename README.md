# DNS Docs for Custom Domains

This is a repository of instructions for setting up custom domains using either CNAME or ALIAS records for the most common providers.

## Help wanted! Per provider instructions
(Add yours to the list, if it's already there just put a 👍or something on the same line

- [ ] AWS Route 53
- [ ] CloudFlare
- [ ] DNSimple
- [ ] Freenom
- [ ] GoDaddy
- [ ] Google Cloud
- [ ] Hover
- [ ] NameCheap
- [ ] Netlify

## Now what?
* Screenshots + CNAME setup instructions for each provider, links to their docs, etc.

## Generic instructions

* Users need to know if they're using a subdomain (wat.example.com) or an apex domain (example.com)

1. If a subdomain (`wat.example.com`)
  1. Create a CNAME record
  2. Enter the subdomain in the name field (`wat`)
  3. Enter the target domain in the value field (`something-random.shw.io`) (sometimes this needs a trailing `.`)
2. If an Apex domain, their DNS provider needs to support an ALIAS record type (sometimes called an A-NAME or a flattened CNAME): https://support.dnsimple.com/articles/alias-record/
  1. Create an ALIAS record
  2. Leave name blank (or maybe enter `@` depending on DNS provider)
  3. Enter target domain in the value field (`something-random.shw.io`) (sometimes this needs a trailing `.`)

### Troubleshooting
Use a DNS propagation checker to make sure the DNS entry is configured properly: https://www.whatsmydns.net/

You can enter both the custom domain and the target domain in that tool to see if the results come up the same.
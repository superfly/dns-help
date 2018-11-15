# DNS Docs for Custom Domains

This is a repository of instructions for setting up custom domains using either CNAME or ALIAS records for the most common providers.

## Help wanted! Per provider instructions
(Add yours to the list, if it's already there just put a 👍or something on the same line

- [ ] AWS Route 53
- [ ] CloudFlare
- [ ] DNSimple
- [ ] DNSMadeEasy
- [ ] Freenom 👍👍
- [ ] GoDaddy
- [ ] Google Cloud
- [ ] Hover
- [ ] NameCheap 👍
- [ ] Netlify 👍👍
- [ ] Glitch

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

## NameCheap

https://www.namecheap.com/support/knowledgebase/article.aspx/544/51/how-do-i-set-up-host-records-for-a-domain-when-i-use-freedns

NameCheap offers FreeDNS. You can buy a domain here or transfer one in. You will need to verify ownership of the domain before you can transfer it to NameCheap. There are two ways: Adding a TEXT DNS record and verifying

There are two options:

1. Use an email connected to the domain. 
2. Add a TEXT record.


## Netlify

Netlify ofers the option to manage your domains' DNSs. You just need to point you domain name to their DNS servers from whichever registrar you bought your tomain from (you can also [buy a domain name directly from Netlify](https://www.netlify.com/blog/2018/06/19/buy-and-secure-a-custom-domain-through-netlify/).

They do a great job of offering an excellent and full-featured DNS service, and all of that for free!

https://www.netlify.com/docs/dns/

## Freenom

Freenom offers the option to have free domains. You just need to register a domain and renew it of which selected amount you selected. (You can also [buy a domain name from here](https://www.freenom.com/en/index.html?lang=en)

They do a amazing job of offering an excellent support, and all of that for free!

https://my.freenom.com/knowledgebase.php?language=english
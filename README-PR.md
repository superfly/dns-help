# DNS Settings Documentation

## Basic of Domain

- Apex Domain (a.k.a Root Domain) is ```example.com```

- Subdomain is ```fly.example.com```

## DNS Records Type
They are many types of them but only two types we are going to talk about.

- ```A``` record -- You can input only IP address. (e.g. __123.456.789.2__)

- ````CNAME```` -- You can input only text. (e.g. __example.com__)

__Note:__ *If you had set 'CNAME' records.* You cannot add more records for that domain (e.g. I had set ```example.com``` pointed to ```yx7p533lduy87qe5.shw.io```, Only CNAME will work. A records, MX records, and others will not work.)

## DNS Providers
- [Name](https://github.com/superfly/dns-help/blob/master/providers/name.md)

### Troubleshooting
Use a DNS propagation checker to make sure the DNS entry is configured properly: [DNSChecker.org](https://dnschecker.org)

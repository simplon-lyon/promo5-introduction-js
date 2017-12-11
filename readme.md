# Docker nginx boilerplate
###### A simple static website boilerplate

## Installation

In order to redirect `.dev` tld to localhost, you need dnsmasq. To install it, do the following on ubuntu :

1. edit `/etc/NetworkManager/NetworkManager.conf` and replace `dns=dnsmasq` by `#dns=dnsmasq`
1. run `sudo apt-get install dnsmasq`
1. edit `/etc/dnsmasq.conf` and add those lines to the file :
```conf
  listen-address=127.0.0.1
  bind-interfaces
  address=/dev/127.0.0.1
```
4. run `sudo netstat -plant | grep :53` and look for `NUMBER/dnsmasq`
1. run `sudo kill -9 NUMBER` replace `NUMBER` by the number(s) you have seen in previous step.
1. run `sudo systemctl restart dnsmasq.service`, this will restart the dnsmasq service.
1. edit `/etc/dhcp/dhclient.conf` and uncomment (remove the `#`) on this line : `prepend domain-name-servers 127.0.0.1;`
1. run `sudo systemctl restart NetworkManager.service` to restart the network manager, you will temporarily lost your network connection.

source : https://www.leaseweb.com/labs/2013/08/wildcard-dns-ubuntu-hosts-file-using-dnsmasq/
---
layout: post
title: "Tracking FastFlux Networks"
description: ""
category: 
tags: []
---

During an investigation, two weeks ago, we discovered a malware sample that used a new malicious domain: <i>auth-update.ru</i>. The domain pointed to multiple suspicious, rotating IP's.

We are still tracking this large fastflux network and keep finding more domains associated with it. Some of these domains include:

*	[auth-update.ru](http://cymon.io/domain/auth-update.ru) (down)
*	[smartfoodsglutenfree.kz](http://cymon.io/domain/smartfoodsglutenfree.kz) (down)
*	[emptyarray.ru](http://cymon.io/domain/emptyarray.ru) (live)
*	dorttlokolrt.com (live)
*	downs1.ru (live) new!

Each domain has been observed serving multiple types of Malware and CnC servers:

*	Zeus/Kazy
*	CryptoWall 3
*	FAREIT Spyware
* 	Dyre + Dridex

We have obtained thousands of IP address from this network, mostly from Ukraine & Russia. Running <i>dig</i> this morning revealed more addresses:

```bash
$> date
Thu 26 Mar 2015 09:55:50 EDT
$> dig downs1.ru +short
195.66.220.205
178.150.135.236
109.108.252.93
88.156.84.155
24.10.15.65
109.229.23.49
108.46.145.13
109.254.116.68
46.98.108.44
178.151.127.68
94.45.140.60
109.251.158.130
176.8.193.164
```

Here are some IP reports on Cymon:

*	[cymon.io/24.10.15.65](http://cymon.io/24.10.15.65)
*	[cymon.io/67.183.123.151](http://cymon.io/67.183.123.151)
*	[cymon.io/92.49.229.45](http://cymon.io/92.49.229.45)
*	[cymon.io/46.33.226.242](http://cymon.io/46.33.226.242)


Below is a simple script that you can use for tracking and scraping IP addresses that are part of the FastFlux domain: 

<script src="https://gist.github.com/0xF1/efcbb51b270e283e20ae.js" style="height:300px;"></script>
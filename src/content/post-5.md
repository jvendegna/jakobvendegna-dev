---
title: "Develop Environments; Done Right"
date: "2021-06-10"
draft: true
path: "/blog/dev-env-done-right"
---

1. provisioning dev envs is difficult given the variety of server architechtures, programming languages, and overhead required to compile/test/bundle...
2. provisioning dev envs is how I busted my chops in the industry - so many developers learned in environments that were provisioned for them. for me that wasnt the case.
3. I'd rather be a developer, not devops, but...
4. this pays more, is in higher demand, has less difficult technical interviews (not so math/comutational algorithm heavy), and typically offers fully remote positions - pre-end-times
5. So, what's the secret? Are there cheat codes? ... no not really, the secret is understanding the different components in play and providing them at start up.
6. Introduce series of posts - 
    1. choices - services or containers, local or remote, and how to decide.
    2. composition - no matter the choice, some shit needs installed
    3. configuration - time to nitpick
    4. testing - automation to prevent env drift, dependency security issues, etc...
    5. deployment - wait, what?
    6. reproduction - works everywhere, by default.
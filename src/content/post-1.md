---
title: "Pet - CLI snippets like a boss"
date: "2021-05-10"
draft: false
path: "/blog/pet-cli-snippets-like-a-boss"
---

As a principal level engineer the peers on my team and new hires often ask for tooling advice. I'm not much of a fanboi of anything at all... I mean, T-Swift and T-Pain... but that goes without saying. Anyway, I found a thing I really really like. It's called [Pet](https://github.com/knqyf263/pet) and it's a snippet manager for your command line, written in Go, and it definitely fucks. Here's why:

1. It uses natural language to run queries for saved snippets. 
2. Saved snips are stored in a TOML file, super easy to edit.
3. This thing supports variables for shit like
```sh
kubectl portforward svc/<service_name> <host_port>:<remote_port>
```
Just like that. What you see is what you get. 
4. Then `pet exec` becomes the only command you need to know by heart.
5. You can tag your snips for even better query results.
6. You can save your whole ass by syncing your snippets to a github gist, built in. Auto-sync if you're 🪁.

I've always kept a secret gist of 'cheat codes' for the teams I work on. This is the cheat code for my cheat codes.
Now when a team member asks me for help with a command I point them to [Pet](https://github.com/knqyf263/pet) and send them the command with the caveat: "Try Pet, You are not allowed to ask me for this command again." Saves my time, levels up my team.

A solid thanks to [Teppei Fukuda](https://github.com/knqyf263) for creating the tool we all needed but didn't have.
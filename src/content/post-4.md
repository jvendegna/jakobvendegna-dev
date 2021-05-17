---
title: "Pipelines First: Update"
date: "2020-04-10"
draft: false
path: "/blog/pipelines-first-update"
---

A few years back I wrote an article here claiming a failing pipeline is the right place to start a project. If you're reading this you're likely a recruiter or developer sitting on a team looking to potentially hire me. So, why the need for the update on this subject? What's changed? In three years, the short answer: Everything.

Aside from being locked in our homes for over a year, the state of the industry itself is shifting yet again. A few years ago almost every company was scrambling to answer the queston "How do we embrace the cloud and transition from on-prem to the cloud?" which resulted in a proverbial shit-ton of work and a linkedin inbox RIP for folks like myself. Now, most businesses have transitioned a lot of their on-prem infra to the cloud, and in some cases - back to on-prem... But differently. Tools like Anthos allow companies to maintain the hardware but leverage the cloud platform tools on it.

Again, what's changed? Everything!

Companies are learning and embracing the new paradigm. No longer are they trying to reproduce virtual machines they once had on-prem. No longer is Kubernetes the single tool they're trying to solve every problem with. The curiosity and willingness to explore the levels of abstraction into managed services is abundant.

So what does that mean for the pipelines first approach I took to development of new products/projects a few long, long years ago? Put simply: Everything's changed.
Honestly at this point if you're building containers locally: You're doing it wrong. If you're maintaining a pipeline at all: You're doing it wrong.

"But my service is special because..."

No, it isn't. You're just doing it wrong. You're approaching the problem from the wrong angle. You need to take a wider view. You need to go all the fuck in on that cloud platform you're trying and failing to leverage to it's full potential for your business's use case.

Here's the right way:
1. VCS your code wherever, github, gitlab, atlassian.
2. Put your dockerfile in the repo
3. Set up a mirror to your cloud platform's source code repository product.
4. Configure your cloud platform's ci/cd product to watch the code repo (and some branches and some tags) then test, build, and deploy the container on changes.
5. Done. Fuck YAML.

Caveat: You may need a yaml file still, but your command steps should be reduced to: `pytest .` for example.

Remember: DevOps is about making all our lives easier. Computers were supposed to make our lives easier. Deliver.

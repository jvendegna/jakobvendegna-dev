---
title: "Python Packaging, Demystified"
date: "2021-7-25"
draft: false
path: "/blog/python-packaging-demystified"
---

This post covers and expands on a [comment I wrote](https://github.com/ParthJadhav/Tkinter-Designer/pull/84#issuecomment-885690771) on a pull request I was helping out with CI tasks. One task, package and release the python package to Pypi. I've run into packaging a time or two before, but the whole process seemed so offputting. There is no 'right' way to do it according to the talking heads on the internet, the python packaging authority, or any PEP. For such an opinonated language and community obsessed with doing everything pythonic, packaging is something the wider community seems to have just given up on solving canonically.

## Woe Is Everyone

So setup.cfg is completely static, as such using it to build packages is deterministic and fairly striaght forward if you know what you're doing and pay attention to the configuration details. Setup.py is dynamic and seems to be the preferred method of anyone who thinks they know a thing or two about packaging. But builds are not deterministic. Just to get started packaging you need to figure out what a wheel is, learn about setuptools, sign up for testpypi and get your api key, and finally learn some gnarly commands to get the wheel uploaded to the test pypi server. Everyone has a different opinion on how to approach it. Everyone has their own way that 'works for them'... But ask them to explain it and you'll likely be met with a blank stare.

# Poetry

Enter [Poetry](https://python-poetry.org/). The tagline says it all: PYTHON PACKAGING AND DEPENDENCY MANAGEMENT MADE EASY.
I'd add to that: And a lot more.

The one thing that's a little odd is that you don't use pip to install poetry. But poetry does use pip behind the scenes. I am of the opinion that less code is almost always indicative of a better system. And one of the first things you'll notice in a poetry managed python project is that you're missing: requirements.txt, setup.cfg, and setup.py. Replaced with pypackage.toml (which pypa has stated is the canonical way) and a poetry.lock.

Getting a dev env up and running in a poetry managed project is as easy as `poetry install`.

Building and releasing a package managed by poetry is just `poetry release --build`

And running tests: `poetry run pytest`

The lock file isn't like pipenv's circular dependency shitshow. It actually works. I am the most impatient of developers and waiting on my computer to do anything for more than one second usually signals to me that I need more power. Waiting on pipenv to do in an hour what `pip install -r requirements.txt` can do in four seconds? Just crush my head instead. Given my outright hate for pipenv jumping all in on another lockfile in use for dependency management really was a mental blocker for me. But throwing my worst at it, poetry overcame and delivered. `poetry install` makes sure everyone on the team is using the same versions of packages. This eliminates some woes around local tests differing from the tests that run in CI. Speaking of CI, did you see those commands? So simple!

I like to do things one time. I spent about 3 days deep diving python packaging so I would never have to again. The result of that research is that for me and my teams: We're going all in on poetry. Here's the gist as to why:

* Large community
    * Very active development
* Uses the actual official standard of configuring your build in pyproject.toml
    * Adds the benefit of eliminating setup.cfg and setup.py and requirements.txt
    * Pipenv by contrast adds another required file alongside these - the Pipfile
    * I want to experiment more with the scripts section of Poetry, but I may be able to remove Makefiles from my templates... like npm scripts.
* Helps teams ensure they are independently developing and testing with the same package dependencies locally
* Manages virtualenvs for you.
* Includes versioning, building, and publishing packages in a single tool.
* Super simple command syntax means I can teach anyone how to package/release.
* Includes an init command for new projects, with guided setup automagically creating your pyproject.toml - like npm init and settings.json

I think anyone here who hasn't, should try poetry out and give the workflow a decent test-drive and decide for yourself. Because PYPA is never going to decide for us, and python.org will never commit to solving package management once and for all by releasing a PEP.
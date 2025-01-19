<p align="center">
  <a href="https://jakobvendegna.dev">
    <img alt="Jakob Vendegna's Logo" src="static/images/logo.png" width="100" />
  </a>
</p>

# [jakobvendegna.dev](https://jakobvendegna.dev)

It's a Hugo site using the Terminal theme. I am not a web developer. I do have style preferences, they lean towards getting to the point. I work in a terminal pretty much all day. My site reflects that.

## Notes for future self:

### Getting Started

You can run `hugo server` from this directory (local) to start things up.
The theme is a git submodule in the themes directory. Any CSS and favicon changes happen there.
I customized the template (chose colors quickly, but they are based on the Pantone 2025 color of the year).

Where does it run?: It's a static site, let's slap it in an s3 bucket and call it a day.
How is it built and delivered to said bucket? TBD but probably just a github action. See guiding principles.

### Guiding Principles
- Be mindful about the content you create.
- Keep fluff and images to a minimum. This is a blog. Get to the point
- Keep it simple, in all things. Simple designs are usually the most reliable. Simple messages are heard widely.


## Archived in 2025:

<h1 align="center">
  Jakob Vendegna's dev blog. Created with Gatsby julia-preview template.
</h1>

[![CI](https://github.com/jvendegna/jakobvendegna-dev/actions/workflows/main.yml/badge.svg)](https://github.com/jvendegna/jakobvendegna-dev/actions/workflows/main.yml) 💣Under Continuous Development💣

[GatsbyJS](https://www.gatsbyjs.com/) is a free and open source static website builder build on React. It's one implementation of the [JAMstack](https://jamstack.org/) idea which creates high speed webpages.

## Once upon a time this site consisted of:

| GatsbyJS | Github Actions | GraphQL | Cloud Storage | React | Cloud Load Balancing | NodeJS |
| -------- | -------------- | ------- | ------------- | ----- | -------------------- | ------ |
| <a href="https://www.gatsbyjs.com"><img src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="100" alt="GatsbyJS" title="GatsbyJS"></img></a> | <a href="https://github.com/features/actions"><img src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4"  width="100" alt="Github Actions" title="Github Actions"></img></a> | <a href="https://graphql.org"><img src="https://graphql.org/img/logo.svg"  width="100" alt="GraphQL" title="GraphQL"></img></a> | <a href="https://cloud.google.com/storage"><img src="https://cloud-cdn.safe.com/fmehub/fmepackageversion/safe/google-cloud-storage/item-logo/1616696754.png" width="100" alt="Google Cloud Storage" title="Google Cloud Storage"></img></a> | <a href="https://www.reactjs.org"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"  width="100" alt="React" title="React"></img></a> | <a href="https://cloud.google.com/load-balancing"><img src="https://miro.medium.com/max/614/1*u95QsM2JaE-wqYQkJ7Cs4w.png"  width="100" alt="Cloud Load Balancing" title="Cloud Load Balancing"></img></a> | <a href="https://nodejs.org/"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="100" alt="NodeJS" title="NodeJS"></img></a> |


## But NoOps Life is Best - Edit 8/1/2020

Recently I realized that I don't want to spend my free time working on the same things I work on at work. I'd rather focus on learning more about the areas I am not an expert in. That means learning more javascript, python, react, and graphql and spending less time configuring releases and maintaining pipelines and doing all the cloud things... 

So, *I migrated this site to GatsbyCloud*. This eliminated a lot of the normal tasks I would associate with hosting a small site like this. Load balancing, static asset storage, ssl cert renewal, dns updates... All eliminated. Best part: Cost of hosting this site went from about $20 per month (cloud load balancing is expensive) to $0 per month.

The platform above has been replaced with:

| GatsbyJS | Github Actions | GraphQL | React | NodeJS | Gatsby Cloud
| -------- | -------------- | ------- | ----- | ------ | ----------- |
| <a href="https://www.gatsbyjs.com"><img src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="100" alt="GatsbyJS" title="GatsbyJS"></img></a> | <a href="https://github.com/features/actions"><img src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4"  width="100" alt="Github Actions" title="Github Actions"></img></a> | <a href="https://graphql.org"><img src="https://graphql.org/img/logo.svg"  width="100" alt="GraphQL" title="GraphQL"></img></a> | <a href="https://www.reactjs.org"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"  width="100" alt="React" title="React"></img></a> | <a href="https://nodejs.org/"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="100" alt="NodeJS" title="NodeJS"></img></a> | <a href="https://www.gatsbyjs.com/products/cloud/"><img src=https://images.ctfassets.net/vkdbses00qqt/39LjajW5iXr8MJzrLnITTy/30c8e6d9c3b715640dc54b9b1b591744/Cloud.svg width="100" alt="Gatsby Cloud" title="Gatsby Cloud"></img></a> |
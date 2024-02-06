# Land Nav website

[Live Site](https://landnav.app)

## Build Instructions

```sh
brew install mise
mise install
mise run install
mise run dev
mise run deploy
```

Pushing to GitHub will publish the site on CloudFlare.

Requires `RUBY_VERSION` environment variable to be set on production and preview deployments.

Reference: <https://developers.cloudflare.com/pages/framework-guides/deploy-a-jekyll-site/>

Important: Currently Cloudflare will fail if using Ruby 3.3.0

## Powered By

- Domain Register: [Namecheap](https://www.namecheap.com)
- DNS: [CloudFlare DNS](https://www.cloudflare.com/dns/)
- Hosting: [CloudFlare Pages](https://pages.cloudflare.com)
- Build System: [Jekyll](https://jekyllrb.com)
- CSS: [Pico.css](https://picocss.com)

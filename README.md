# Land Nav website

[Live Site](https://landnav.app)

## Develop

```sh
mise install       # Ruby, Node, cspell, markdownlint, html-proofer
mise run install   # bundle install
mise run dev       # http://localhost:4003 with livereload
mise run check     # build, spell check, markdown lint, internal links
```

Deploy with `mise run deploy`. It refuses unless you're on a clean `main` with nothing newer on GitHub, then checks, pushes, waits for Cloudflare Pages and runs `mise run verify`. `mise run deploy-status` says whether `main` is live. The rule is in [Workshop's deploy note](https://github.com/gshaw/Workshop/blob/main/Tooling/deploy.md).

## Powered By

- Domain Register: [Namecheap](https://www.namecheap.com)
- DNS: [Cloudflare DNS](https://www.cloudflare.com/dns/)
- Hosting: [Cloudflare Pages](https://pages.cloudflare.com)
- Build System: [Jekyll](https://jekyllrb.com)
- CSS: [Pico.css](https://picocss.com)
- Map: [Leaflet](https://leafletjs.com) and [OpenStreetMap](https://www.openstreetmap.org)

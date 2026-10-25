# Land Nav website

[Live Site](https://landnav.app)

## Develop

```sh
mise install       # Hugo, Node, cspell, markdownlint, lychee
mise run dev       # http://localhost:4003 with live reload
mise run check     # build, spell check, markdown lint, internal links
```

Deploy with `mise run deploy`. It refuses unless you're on a clean `main` with nothing newer on GitHub, then checks, pushes, waits for Workers Builds and runs `mise run verify`. `mise run deploy-status` says whether `main` is live. The rule is in [Workshop's deploy note](https://github.com/gshaw/Workshop/blob/main/Tooling/deploy.md).

## Powered By

- Domain Register: [Namecheap](https://www.namecheap.com)
- DNS: [Cloudflare DNS](https://www.cloudflare.com/dns/)
- Hosting: [Cloudflare Workers](https://workers.cloudflare.com), static assets, built by Workers Builds
- Build System: [Hugo](https://gohugo.io)
- CSS: [Pico.css](https://picocss.com)
- Map: [Leaflet](https://leafletjs.com) and [OpenStreetMap](https://www.openstreetmap.org)

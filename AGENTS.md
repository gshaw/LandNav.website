# Agent Notes

<!-- cspell:ignore onnav -- the onNav Marine bundle ID -->

Background for AI agents working in this repo.

## What this is

The marketing site for Land Nav, a GPS and offline maps app for iPhone and iPad, live at
[landnav.app](https://landnav.app). A Hugo site served by a Cloudflare Worker (`landnav-website`) that has no script, only
the built files. The app itself lives
in a separate repo, `LandNav`.

**The repo and the site are both public.** Anything committed here is published.

Keep it minimal. Don't add a theme, Hugo modules, pages or build steps unless asked. Every
template is in `layouts/`.

## Commands

```sh
mise run dev       # hugo server on :4003 with live reload
mise run check     # build + spell + markdownlint + internal links
mise run deploy    # guard, check, push, wait for the build, verify
mise run verify    # curl the live site
mise run deploy-status  # is main live?
```

**Read the counts, not just the exit code.** lychee prints `N OK` and cspell
prints `Files checked: N`. A green run over zero files checked nothing.

## Deploys

Workers Builds builds every push. `main` runs `hugo` and `wrangler deploy` to
production; any other branch runs `wrangler preview`, which gives it a Preview URL
(`https://<branch>-landnav-website.gerry-shaw.workers.dev`) and a comment on its PR.
`wrangler.jsonc` serves `public/` with no script. The build runs
`hugo --cleanDestinationDir --panicOnWarning`, and the two build triggers each set
`HUGO_VERSION`, so a Hugo bump means changing `.mise.toml` and both triggers together.
`--panicOnWarning` makes a deprecation fail the build rather than scroll past.

**Deploy with `mise run deploy`**, never a bare `git push` to `main`.
`scripts/deploy-guard.sh` refuses unless the branch is `main`, the tree is clean and
`origin/main` isn't ahead. Then it runs `check`, pushes, waits for the "Workers Builds:
landnav-website" check run on the commit (`scripts/build-status.sh --wait`) and runs
`verify`. A merged PR also deploys, since Workers Builds deploys every push to `main`. The
rule and the list of sites are in
[Workshop's deploy note](https://github.com/gshaw/Workshop/blob/main/Tooling/deploy.md).

GitHub Actions runs `mise run -c check` on pushes and PRs. It doesn't block Cloudflare.

## Layout

- `hugo.toml` holds the site name, description, icon, copyright start year and author.
  The layouts read them; don't hard-code them in HTML.
- `layouts/baseof.html` is the page shell. `layouts/_partials/head.html` has the meta and
  Open Graph tags; a page can override the description with `description:` and the preview
  image with `ogimage:` in front matter, and add a line under the title with `subtitle:`.
- `content/`: `_index.md` (the home page), `support.md`, `privacy.md`, `404.md`.
  `uglyURLs` keeps pages at `/privacy.html`, as before; Cloudflare serves them at
  `/privacy`, the canonical URL.
- `content/whatsnew/` has one page per release (`1.0.1.md`) and an index (`_index.md`). The app opens
  `https://landnav.app/whatsnew/<version>`, so keep those URLs stable and add a page before
  a release ships. Mark an unreleased version "(In Development)" on the index.
- `content/share/index.md` uses `layouts/map.html` and `static/assets/js/map.js`: a Leaflet
  map that pins the `?ll=lat,lon` query. Its `url: /share/` keeps it at `/share/` despite
  `uglyURLs`. `static/.well-known/apple-app-site-association` claims `/share/*` for the
  onNav Marine app (`com.onnav.ios.marine`), not Land Nav. Check with Gerry before changing
  either.
- `content/devlog.md` is a historical record. Leave its wording and typos alone; checks
  skip it.
- `static/` is published as it is: icons, the QR code, screenshots, `.well-known/`, the map
  script and `assets/css/pico.min.css`, Pico 1.5 copied in rather than loaded from a CDN.
- `static/_headers` sends `.well-known/apple-app-site-association` as `application/json`;
  without it the Worker sends no Content-Type.
- `public/` is build output; it's gitignored.

Hugo doesn't run template code inside Markdown files: a loop over data goes in a
shortcode in `layouts/_shortcodes/`. A link with spaces needs angle brackets:
`[text](<mailto:x?subject=A B>)`, and a blank line inside a raw HTML block ends it.

## Writing

- Claims must match the released app. Check the App Store version before saying a feature
  or release has shipped.

## Suppressions

Suppress a check inline, with a reason, in the file that provoked it:
`<!-- cspell:ignore word -->` or `<!-- markdownlint-disable-next-line MD0xx -->`. Move a
word to `cspell.config.yaml` only once a second file needs it.

## Branches, issues and PRs

- Branch names are flat and short: `<issue>-<slug>`, no `claude/` prefix.
- Issue and PR bodies aren't hard-wrapped.
- Squash-merge only.

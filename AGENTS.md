# Agent Notes

<!-- cspell:ignore onnav -- the onNav Marine bundle ID -->

Background for AI agents working in this repo.

## What this is

The marketing site for Land Nav, a GPS and offline maps app for iPhone and iPad, live at
[landnav.app](https://landnav.app). A Jekyll site on Cloudflare Pages. The app itself lives
in a separate repo, `LandNav`.

**The repo and the site are both public.** Anything committed here is published.

Keep it minimal. Don't add gems, plugins, pages or build steps unless asked.

## Commands

```sh
mise run install   # bundle install
mise run dev       # serve on :4003 with livereload
mise run check     # build + spell + markdownlint + internal links
mise run verify    # curl the live site after a deploy
mise run deploy    # check, then git push
```

**Read the counts, not just the exit code.** html-proofer prints `Ran on N files` and cspell
prints `Files checked: N`. A green run over zero files checked nothing.

## Deploys

Cloudflare Pages project `landnav-website` builds every push. `main` goes to production;
other branches get a preview URL. The build runs `bundle exec jekyll build` with
`RUBY_VERSION` set in the Cloudflare project, so a Ruby bump means changing `Gemfile`,
`.mise.toml` and that variable together.

GitHub Actions runs `mise run -c check` on pushes and PRs. It doesn't block Cloudflare.

## Layout

- `_config.yml` holds the site name, description, icon, copyright start year and author.
  The layouts read them; don't hard-code them in HTML.
- `_layouts/page.html` is the main layout. `_includes/head.html` has the meta and Open Graph
  tags; a page can override the description with `description:` and the preview image with
  `ogimage:` in front matter.
- `index.md`, `support.md`, `privacy.md`, `404.md`.
- `whatsnew/` has one page per release (`whatsnew/1.0.1.md`) and an index. The app opens
  `https://landnav.app/whatsnew/<version>`, so keep those URLs stable and add a page before
  a release ships. Mark an unreleased version "(In Development)" on the index.
- `share/` uses `_layouts/map.html` and `assets/js/map.js`: a Leaflet map that pins the
  `?ll=lat,lon` query. `.well-known/apple-app-site-association` claims `/share/*` for the
  onNav Marine app (`com.onnav.ios.marine`), not Land Nav. Check with Gerry before changing
  either.
- `devlog.md` is a historical record. Leave its wording and typos alone; checks skip it.
- `assets/css/pico.min.css` is Pico 1.5, copied in rather than loaded from a CDN.

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

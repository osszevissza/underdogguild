# agent.md — Underdog Guild personal page (start context)

Hugo static site. Owner: Barsi Marina. Keep answers concise.

## Project facts
- Repo: `github.com:osszevissza/underdogguild.git`, branch `main`. Live: https://barsimarina.hu/
- Local dev: `hugo server` → http://localhost:1313 (usually already running).
- Rebuild cleanly: `hugo --cleanDestinationDir`. `public/` is gitignored build output; note a running `hugo server` may write livereload-injected files into it.
- Commit/push ONLY when explicitly asked. Messages are short, lowercase-ish ("sticky footer", "werkblog section + a11y fixes").

## Identity & content rules
- Brand kept as **"Underdog Guild"** (user's choice). Tone: creative, personal, honest entry-level, Hungarian — never corporate.
- Contact: **hello@barsimarina.hu only** (no phone on site). Email is obfuscated: `static/js/email.js` decodes base64 and fills every `[data-js-email]` element (both `href` and visible text).
- No CV download on the site; skills shown as tool badges ("épp tanulom" = currently learning).

## Bilingual setup (HU + EN)
- HU at `/`, EN at `/en/` (`defaultContentLanguage = "hu"`).
- Page pairing by filename: `foo.md` ↔ `foo.en.md`. Homepage: `content/_index.md` / `content/_index.en.md`.
- All UI strings in `i18n/hu.toml`, `i18n/en.toml` (flat `key = "value"`). `hero_title` / `price_title` contain `<br>` → always render with `| safeHTML`.
- Header switcher: HU|EN boxes, active = orange + `aria-current`, `hreflang`; links to the equivalent page via `.Translations` with home fallback.
- `og:locale` via per-language `ogLocale` param. EN URLs become absolute only with the real `baseURL` (currently `https://barsimarina.hu/`).

## Pages & URLs
- `/` + `/en/` — one-page portfolio (hero, marquee, portfolio, services, tools, price, about, contact).
- `/werkblog/` + `/en/werkblog/` — blog listing; posts at `/werkblog/<slug>/`, `/en/werkblog/<slug>/`.
- EN blog URLs via `[languages.en.permalinks] werkblog = "/werkblog/:slug/"` plus `url: "/en/werkblog/"` on `_index.en.md`.
- New post = `content/werkblog/hu-slug.md` (title + date) + `content/werkblog/hu-slug.en.md` with `slug: "english-slug"`. Appears automatically (listing = `.RegularPages.ByDate.Reverse`, newest first). Future-dated posts stay hidden until that date. Listing excerpt = first `<p>` only (via `findRE`), never truncated, never later paragraphs.

## SEO/GEO basics (added 2026-10, keep behavior)
- Head (`layouts/_default/baseof.html`): desc chain = frontmatter `description` → post `.Summary` (**`.IsPage`-guarded only**) → site param; OG/Twitter titles match `<title>`; head-level `hreflang` hu/en/x-default; `og:locale:alternate`; `og:type=article` + `article:published/modified_time` on posts; manifest link; includes `layouts/partials/seo-jsonld.html`.
- JSON-LD partial: `Organization` everywhere, `WebSite` on home, `BlogPosting` on posts. Every `jsonify` MUST end with `| safeJS` (else Go contextual escaping double-encodes quotes).
- Static: `static/robots.txt` (allow all + sitemap pointer), `static/llms.txt` (bilingual AI summary, absolute URLs), `static/site.webmanifest`.
- `layouts/404.html` renders **per language** (`/404.html` + `/en/404.html`); uses `notfound_*` i18n keys + hardcoded fallback block for the other language. Reuses hero/btn classes, no new CSS.
- Sitemap needs no config (Hugo default already emits per-language hreflang alternates).

## Design (do not restyle without asking)
- Neobrutalist + industrial, **LIGHT mode only** (user dislikes dark mode).
- Palette: paper `#f2ede1`, card `#fffdf5`, ink `#16130f`, muted text `#4a443a`, orange `#ff5c1a`, deep orange `#e84f0a` (focus/links), toxic `#a9ff00`, hazard yellow `#ffd400`, metal `#d9d4c6`.
- Thick ink borders, hard offset shadows, hazard stripes, stamps, marquee, metal-plate tool badges.
- Fonts: SpartanMB (display/headings/buttons/labels), GeneralSans (body). Only Regular weights exist → bold is synthesized.
- One stylesheet `static/css/main.css`, fluid `clamp()` type, breakpoints 860px/520px, `overflow-x: clip` on html/body, sticky footer (flex column body + `main{flex:1}`).
- Logo: geometric underdog-dog stamp (`static/img/logo.svg`); favicon set + 1200×630 `og.png` generated from it.
- Keep the one-page visually unchanged unless asked — prove it by diffing built HTML against a snapshot (`hugo -d /tmp/before`) after every change.

## Hard-won lessons (read before acting)
- **Aiki Dent is a SEPARATE project** (`aiki-dent.statichost.page`). If the user mentions its content (dental, "Biológiai szemlélet"), ask which project they mean.
- "Live vs localhost looks different" turned out to be browser zoom (80% vs 100%). Always suggest `Ctrl+0` + hard refresh before assuming a code difference.
- Container is `--page-width: 1120px` everywhere (commit, live, backups) — there never was a wider one.
- A previous "make fonts smaller" pass overshot twice; current sizes ≈ the original. When touching type, compute resolved px at 375/768/1280 and show the table.
- A wrong favicon in the browser tab is usually the cached Aiki favicon for `localhost:1313` (both projects use that port) — private window fixes it.
- `layouts/robots.txt` + `[outputs] home = [..., "RobotsTXT"]` FAILS on Hugo 0.150 (`unknown output format`) and breaks the whole build — use `static/robots.txt` instead.
- Homepage `.Summary` is NOT empty (it's the projects div) — never use bare `.Summary` as meta/JSON-LD description fallback; guard with `and .IsPage .Summary`.
- Action-only template lines (`{{ $x := ... }}`) emit their leading indent as trailing whitespace — start them with `{{-` in `<head>` (baseline: 17 trailing-ws notes on index, keep it there).

## Environment limits
- **No headless browser works here** (flatpak Firefox sandbox blocks it). Verify via builds, greps, and static analysis — never claim to have seen a render.
- This model can't view images — verify assets with `magick -format "%[pixel:p{x,y}]" info:`, and ASCII-render SVGs if needed. (Caveat: `txt:` hex output on 16-bit PNGs is unreliable.)
- ImageMagick has no DejaVu fonts — annotate text with Helvetica-Bold directly.
- `npx html-validate` works for markup checks; Node one-liners are fine for quick computations.

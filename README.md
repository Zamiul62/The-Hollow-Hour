# The Hollow Hour

Next.js 14 (App Router), TypeScript, Tailwind. Stories are Markdown files in GitHub. No database, no paid services.

## Run locally
    npm install
    cp .env.example .env.local
    npm run dev        # http://localhost:3000
    npm run build      # production check

## Publish a story
1. Copy `content/stories/_template.md.txt` to `content/stories/my-slug.md`.
2. Add an image to `public/images/` and fill in the front matter. Keep `status: draft` while writing.
3. Preview drafts locally: set `SHOW_DRAFTS=true` in `.env.local`.
4. Change to `status: published`, then `git add . && git commit -m "Add story" && git push`. Vercel deploys automatically.
Drafts never appear in production, the sitemap or category pages. Fiction must use category `fiction` (or `fiction: true`) so the notice shows. Factual stories should list `sources`.

Categories: edit `lib/site.ts`. Legal pages: edit `content/pages/*.md` (starter templates, get them reviewed). Renamed slug? Add a redirect in `next.config.mjs`.

## GitHub and Vercel
    git init && git add . && git commit -m "Initial site"
    git branch -M main
    git remote add origin https://github.com/YOU/hollow-hour.git
    git push -u origin main
Then vercel.com, Add New Project, import the repo, add env vars from `.env.example` (set `NEXT_PUBLIC_SITE_URL` to your live URL), Deploy. Custom domain: Project Settings, Domains, follow the DNS steps, then update `NEXT_PUBLIC_SITE_URL`.

## Search Console
Add your URL at search.google.com/search-console, verify (DNS or HTML tag), submit `/sitemap.xml`.

## AdSense, when ready
Ads are off (`NEXT_PUBLIC_ADS_ENABLED=false`). Build 30+ original stories first and complete About/Contact/Privacy. Apply at adsense.google.com, add the site, put your AdSense script in `app/layout.tsx`, set `NEXT_PUBLIC_ADSENSE_CLIENT`, paste your line into `public/ads.txt`, add a consent banner if you serve EU/UK readers, then set `NEXT_PUBLIC_ADS_ENABLED=true`. Approval is not guaranteed. Slots are in `components/AdSlot.tsx`.

## Troubleshooting
- "Module not found": run `npm install`.
- Story 404: check `status: published` and that the image path exists.
- Wrong URLs in sitemap: set `NEXT_PUBLIC_SITE_URL`.
- Front matter YAML error: quote titles containing colons.

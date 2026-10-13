# Live The Day Holidays — site v2

A rebuild of `www.livetheday.co.in` (Live The Day Holidays Pvt Ltd, Kochi).
Same content, new structure and visual system. React + Vite + a Remotion hero reel.

Live preview: **https://ltd.ghostagents.in** (served by Caddy from `dist/`, `X-Robots-Tag: noindex`)

## Run

```bash
npm install
npm run dev        # http://127.0.0.1:5199
npm run build      # -> dist/
npm run preview    # http://127.0.0.1:19001
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero reel, 7 curated journeys, trending departures, 4 destinations, hot deals, reviews, partner band, journal |
| `/destinations` | Destination index |
| `/destination/:slug` | `bangkok`, `almaty`, `azerbaijan`, `abu-dhabi` — intro, best time, duration, sights |
| `/packages` | All packages, filter by International / Domestic / Trending |
| `/package/bangkok-pattaya` | Full 4-day itinerary, highlights, includes, terms, cancellation, FAQs |
| `/aboutus` | Story, stats, mission, vision, directors |
| `/contactus` | Office, phones, newsletter, message form |
| `/channel-partner` | Partner pitch + application form |
| `/blogs` | Journal |

Legacy URLs from the old site (`/aboutus`, `/contactus`, `/blogs`, `/channel-partner`,
`/destination/<NAME>`, `/package/<slug>`) are preserved as-is.

## Structure

```
src/
  data/site.ts            all copy, ported from the live site (packages, destinations, reviews, blogs)
  data/bangkokPattaya.ts  full package detail content
  remotion/JourneyReel.tsx  the hero composition (map arcs, rotating city stack, boarding-pass stub)
  components/             Shell (nav/footer/sticky bar), Enquiry modal, Pieces (cards)
  pages/                  Home, Destinations, Packages, Pages (about/contact/partner/blogs)
  styles/                 tokens → app → nav → cards
public/img/               self-hosted photography (webp, 1600px, ~3.7 MB total)
```

## Design decisions

- **Kerala travel desk, not an airline kiosk.** Sand paper (#F6F0E4), monsoon teal (#0B1F1C),
  laterite red (#C1502E), saffron (#EDA43B). Fraunces display serif, Instrument Sans body,
  JetBrains Mono for labels — the mono labels are the "stamp" language of the brand.
- **Dark and light both designed**, following `prefers-color-scheme` with a manual toggle
  (`localStorage: ltd-theme`). Tokens live in `styles/tokens.css`, both modes are real palettes.
- **Enquiry is the conversion.** Every card's Enquire button opens one modal that composes a
  WhatsApp message to +91 87146 95559 — no dead forms.
- **Hero is generated, not filmed**: a 10s Remotion loop (`JourneyReel`) with a route arc from
  Cochin, a rotating destination stack and a boarding-pass stub.
- **7.5 MB → 4.6 MB** deployed, no external image dependency.

## Deployment

`dist/` is self-contained. Either:

1. **Vercel** (matches the current setup): build command `npm run build`, output `dist`,
   add a rewrite of all paths to `/index.html` for the SPA routes.
2. **This box**: already live on `ltd.ghostagents.in` — Caddy `file_server` + `try_files {path} /index.html`,
   `tls { on_demand }`, hostname approved by the host router's `FIXED` map
   (`/app/state/ops/host-router.cjs`).

## Known issue in the current live site

`leadkairos.in` does not resolve (NXDOMAIN). The old site hotlinks every destination and
package image from it, so those images are currently broken in production. Photography is now
self-hosted in `public/img/`.

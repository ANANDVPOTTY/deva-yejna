# Feeds Page — Design Spec

**Date:** 2026-07-16
**Status:** Approved (design), pending implementation plan
**Route:** `/feeds`

## 1. Overview

A read-only, social-media-style "Feeds" page that showcases Admin announcement
posts for the Deva Yajña site. The experience is inspired by Facebook / Instagram
/ LinkedIn / X feeds but is **strictly read-only**: no likes, comments, shares,
saves, reactions, views, followers, user profiles, or stories. Each post is a
media block (single item or a carousel of multiple) followed by a description and
a posted date.

Design thesis (from design consult): *a temple noticeboard rendered as a scroll of
illuminated announcements — one quiet column, ivory paper cards, a single thread of
gold.* Restraint everywhere; the media does the speaking.

## 2. Scope

**In scope**
- New `/feeds` route and page.
- "Feeds" nav item added to desktop header and mobile drawer.
- Deterministic dummy post data built from existing `src/assets/feeds` assets.
- Post layouts: image-only, video-only, and mixed image+video.
- Polished carousel for multi-media posts (arrows, dots, counter, swipe, keyboard).
- Muted, looping, autoplay-when-visible videos with no visible playback controls
  and casual-download deterrence.
- Description + posted date per post.
- Fully responsive, production-quality UI matching the existing design language.

**Out of scope** (must NOT appear): likes, comments, share, save, reactions,
views, followers, user profile, stories, play/pause/seek/progress/fullscreen/PiP/
download controls on video.

## 3. Architecture & File Structure

Follows the existing page convention (mirrors `src/pages/gallery/`): a page
component + `.styles.js`, a co-located data module, and nested sub-component
folders each with their own `.styles.js`.

```
src/pages/feeds/
 ├── Feeds.jsx                 // page: title, subtitle, gold divider, maps posts → FeedCard, end-of-feed blessing
 ├── Feeds.styles.js
 ├── feedsData.js              // deterministic dummy posts + asset imports
 ├── feed-card/
 │    ├── FeedCard.jsx         // one post: header brand mark + media + description + date
 │    └── FeedCard.styles.js
 └── media-carousel/
      ├── MediaCarousel.jsx    // multi-media slider; single media renders without chrome
      ├── MediaCarousel.styles.js
      └── FeedVideo.jsx        // muted/loop/playsInline video, IntersectionObserver-driven play
```

**Conventions to follow** (observed in the codebase):
- JavaScript + JSX (no TypeScript). Prop validation via `prop-types`.
- MUI `styled(...)` components defined in `.styles.js`, using CSS variables
  (`--color-*`, `--font-*`) and the `responsiveFont(theme, size)` helper from
  `src/components/font/ResponsiveFonts.styles`.
- Assets imported through Vite (`import img from "../../assets/feeds/…"`) so they
  are bundled and content-hashed.

### Navigation
- Add `{ label: "Feeds", href: "/feeds" }` to `NAV_ITEMS` in **both**
  `src/components/header/Header.jsx` and `src/components/header/RespoNavBar.jsx`,
  positioned **after Gallery, before Contact Us** → About · Gallery · Feeds · Contact.
  (The app currently duplicates `NAV_ITEMS` across the two files; we keep that
  existing pattern rather than refactoring, to stay focused on the feature.)
- Add `<Route path="/feeds" element={<Feeds />} />` to
  `src/router/AppRouter.jsx`.

## 4. Data Model

`feedsData.js` exports a deterministic, hand-curated `feedsData` array. Assets are
imported at the top of the file and referenced by variable so Vite bundles them.

```js
// Post shape
{
  id: number,
  description: string,       // supports short and long text
  createdDate: string,       // ISO date, e.g. "2026-07-15"
  media: [                   // 1..n items, order preserved (mixed types allowed)
    { type: "image" | "video", src: <importedAsset> },
    ...
  ]
}
```

**Curated coverage** — the array intentionally demonstrates every layout:
- 1 image
- 3 images
- 5 images
- 1 video
- 3 videos
- mixed: image + video + image + image + video (interleaved)
- 4 images + 2 videos
- a post with a long multi-paragraph description (to exercise clamp / read-more)

Dates are rendered (not stored) as e.g. `15 July 2026` via
`Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" })`
— no hardcoded date strings.

## 5. Component Behaviour

### 5.1 Feeds (page)
- Reuses the Gallery page precedent: centered container, Cinzel Decorative title
  (`Feeds`), ~18px subtitle, plus a 120px gold-thread divider beneath the header.
- Maps `feedsData` → `<FeedCard>` in a single centered column.
- Ends with an **end-of-feed blessing** block instead of a spinner: `ॐ` in Cinzel
  Decorative with a soft radial turmeric glow, above "You are all caught up".

### 5.2 FeedCard (memoized)
- `React.memo` to avoid re-renders; a post's props are stable.
- Structure: **header brand mark** → **media** (MediaCarousel) → **description** →
  **posted date**.
- **Header brand mark** (there is no user profile, so the temple is the author):
  40px circular site logo with a turmeric ring, "Deva Yajña" in Cinzel Decorative,
  an eyebrow line "देव यज्ञ · Announcement", and the posted date right-aligned.
- **Description**: clamped to ~4 lines with a "Read more" toggle (saffron-dark);
  expanded state animates open. Short descriptions (≤4 lines) show fully with no
  toggle.
- Scroll-into-view entrance animation via `IntersectionObserver` (once), respecting
  `prefers-reduced-motion`.

### 5.3 MediaCarousel
- If `media.length === 1`: render the single item directly in the media frame with
  **no carousel chrome** (no arrows, dots, or counter).
- If `media.length > 1`: horizontal slider showing one item at a time.
  - **Prev / Next** arrow buttons (glassmorphism), visible on card hover (desktop),
    hidden on mobile (swipe + dots remain).
  - **Pagination dots** below the frame; active dot is an elongated saffron-dark
    pill.
  - **Counter badge** (`1 / 5`) top-right on the frame.
  - **Swipe**: pointer/touch drag follows the finger and snaps on release.
  - **Keyboard**: ←/→ navigate when the carousel (or its card) is focused.
  - Smooth `translateX` transitions.
- **Media frame** (all media): fixed **4:5 aspect ratio**. Foreground media uses
  `object-fit: contain` (nothing cropped) floating over a **blurred, scaled backdrop**
  of the same media with a charcoal tint overlay, plus a subtle inner vignette.
- Only the **active slide's** video plays; others are paused (see FeedVideo).

### 5.4 FeedVideo
- `<video muted loop playsInline preload="none">` — **no `controls` attribute**.
- Autoplays only when its slide is the active slide **and** the card is on-screen,
  driven by `IntersectionObserver`; pauses otherwise (efficient — avoids many
  simultaneous decodes).
- Download / native-UI deterrence (best-effort, casual only):
  - `onContextMenu` prevented on the video.
  - `controlsList="nodownload noplaybackrate nofullscreen"`,
    `disablePictureInPicture`, `disableRemotePlayback`.
  - No pointer interactions that would surface native UI.
  - (Acknowledged: browser video can never be fully un-downloadable; this only
    deters casual saving.)

## 6. Visual Design

All values below come from the design consult; implementer translates them to MUI
`styled` components using the existing CSS variables. Exact numbers may be nudged
during implementation for pixel polish, but this is the target.

### 6.1 Card
- Single centered column; **card max-width 620px**.
- Surface `#ffffff`; **border-radius 20px**; border `1px solid rgba(196,192,182,.45)`.
- Shadow (rest): `0 1px 2px rgba(61,58,54,.04), 0 8px 24px rgba(61,58,54,.07)`.
- Shadow (hover): `0 2px 4px rgba(61,58,54,.05), 0 16px 40px rgba(128,0,32,.10)`
  (maroon-tinted ambient).
- Media is full-bleed to card edges (top corners inherit 20px radius). Text block
  padding `20px 28px 24px`; header padding `18px 28px 14px`.
- Gap between cards: **48px** desktop / **28px** mobile. Column top padding 40px
  below the page title.

### 6.2 Media frame (4:5)
- `aspect-ratio: 4/5; overflow: hidden;` top radius `20px 20px 0 0` as first child.
- Backdrop: same media, `object-fit: cover; filter: blur(28px) saturate(1.15)
  brightness(.92); transform: scale(1.12)`.
- Tint overlay: `rgba(61,58,54,.28)`.
- Foreground: `object-fit: contain`, `drop-shadow(0 6px 20px rgba(61,58,54,.25))`.
- Inner vignette (`::after`): `inset 0 0 0 1px rgba(255,255,255,.08),
  inset 0 -32px 48px -24px rgba(61,58,54,.22)`.

### 6.3 Carousel chrome (count > 1)
- **Arrows:** 40px circle, `background: rgba(250,249,246,.72)`,
  `backdrop-filter: blur(8px)`, `border: 1px solid rgba(255,255,255,.5)`, icon
  `#3d3a36` 18px. Hover: bg `rgba(255,255,255,.95)`, icon `#e67300`, `scale(1.06)`.
  12px from edges, vertically centered, fade in on card hover (desktop).
- **Dots:** below the frame. Inactive 6px circle `#c4c0b6`; active **18×6px pill
  `#e67300`**; gap 6px.
- **Counter badge:** top-right 12px inset: `1 / 5`, Open Sans 12px/600, color
  `#faf9f6` on `rgba(61,58,54,.55)` + `backdrop-filter: blur(6px)`, padding 3px 10px,
  radius 999px.
- **Media-type badge:** video only — same pill, top-left, play glyph + "Video".
  Photos get no badge.

### 6.4 Typography
- **Header brand mark:** 40px logo medallion with `1.5px solid #ffc04d` ring and a
  2px white inner gap; "Deva Yajña" Cinzel Decorative 15px/700 `#3d3a36`; eyebrow
  "देव यज्ञ · Announcement" 11.5px `#8a8680`, letter-spacing .08em.
- **Description:** Open Sans 15.5px / 1.65, color `#6b6862`; `-webkit-line-clamp: 4`
  with "Read more" `#e67300` 14px/600 (underline on hover); expand animates
  `max-height` ~320ms.
- **Posted date:** header row, right-aligned, Open Sans 12.5px/400 `#a8a49a`, format
  "15 July 2026" (spelled out; no relative time).

### 6.5 Accent discipline
- Saffron `#ff9933`: focus ring + read-more hover only. Saffron-dark `#e67300`:
  interactive accents (active dot, arrow hover, links). Turmeric `#ffc04d`:
  hairlines/rings only. Maroon `#800020`: shadow tint + the diya diamond only.
  Never two accents on one element.
- **Focus ring:** `outline: 2px solid #ff9933; outline-offset: 3px` on all
  interactive elements.

### 6.6 Motion (respect `prefers-reduced-motion`)
- Card hover: `translateY(-3px)` + shadow swap, `280ms cubic-bezier(0.22,1,0.36,1)`.
- Carousel slide: `translateX`, **420ms cubic-bezier(0.32,0.72,0,1)**; swipe follows
  finger, snaps on release with same curve.
- Dots: width/background `240ms cubic-bezier(0.4,0,0.2,1)`.
- Card entrance (IntersectionObserver, once, threshold .15): `opacity 0→1,
  translateY(24px→0)`, `600ms cubic-bezier(0.22,1,0.36,1)`.

### 6.7 Signature touches
1. **Gold thread hairline:** 2px top border per card:
   `linear-gradient(90deg, transparent, #ffc04d 20%, #e67300 50%, #ffc04d 80%,
   transparent)` at ~70% opacity. Also used as the 120px divider under the page header.
2. **Diya divider:** shown only on expanded (Read-more opened) cards — 1px `#dadada`
   lines flanking an 8px maroon `#800020` diamond, ~120px wide.
3. **End-of-feed blessing:** `ॐ` in Cinzel Decorative 28px `#c4c0b6` above "You are
   all caught up" 13px `#a8a49a`, with a soft radial glow
   `radial-gradient(circle, rgba(255,192,77,.18), transparent 70%)` behind the ॐ.

## 7. Responsive

- **≥900px:** 620px card, arrows visible on hover, 48px gaps.
- **600–900px:** card `width: min(620px, calc(100% - 48px))`.
- **<600px:** card full-bleed — width 100%, `border-radius: 0`, side borders removed
  (top/bottom hairline only), gaps 28px; arrows hidden (swipe + dots + counter
  remain); text padding `16px 20px 20px`; description 15px; header logo 36px; page
  title scales down (handled by `responsiveFont`).

## 8. Performance

- Images: `loading="lazy"` + `decoding="async"`.
- Videos: `preload="none"`; only the active on-screen slide plays; off-slide/off-screen
  videos are paused.
- `FeedCard` wrapped in `React.memo`; carousel handlers via `useCallback`; derived
  values via `useMemo`.
- Note: the source assets in `src/assets/feeds` are large (a 32MB video, multi-MB
  images). We import them as-is for this dummy feature; if bundle size becomes a
  concern later, they can be moved to `public/` or compressed — out of scope here.

## 9. Testing / Verification

Manual verification (no test framework is configured in this project):
- `npm run lint` passes.
- `npm run build` succeeds (assets resolve, no bundler errors).
- `npm run dev`: Feeds nav item appears in header and mobile drawer, routes to
  `/feeds`; each layout (1/3/5 images, 1/3 videos, mixed, 4img+2vid) renders;
  carousel arrows/dots/counter/swipe/keyboard work; videos autoplay muted+loop with
  no controls and no context menu; long description clamps with working Read more;
  layout is correct on desktop, tablet, and mobile widths.

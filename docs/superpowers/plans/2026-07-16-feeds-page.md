# Feeds Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a read-only, social-media-style "Feeds" page at `/feeds` that showcases Admin announcement posts (image / video / mixed media) in a premium, ivory-themed timeline.

**Architecture:** A new page under `src/pages/feeds/` mirroring the existing gallery-page convention: a page component + deterministic dummy data module + nested `feed-card/` and `media-carousel/` sub-component folders. Media renders in a fixed 4:5 "contain-over-blur" frame; multi-media posts get a custom carousel (arrows, dots, counter, swipe, keyboard); videos autoplay muted+looping only while their slide is active and on-screen via IntersectionObserver.

**Tech Stack:** React 19, react-router-dom v7, MUI v7 + `@mui/material/styles` `styled` (emotion), `prop-types`, Vite. CSS variables (`--color-*`, `--font-*`) and the `responsiveFont(theme, size)` helper from `src/components/font/ResponsiveFonts.styles`.

## Global Constraints

- **Language:** JavaScript + JSX only. No TypeScript. Validate props with `prop-types`.
- **Styling:** MUI `styled(...)` in co-located `.styles.js` files. Use CSS variables for all theme colors/fonts. No new dependencies — everything ships with what's already in `package.json`.
- **No testing framework exists.** Per-task verification is `npm run lint` (must pass with no new errors). Final verification adds `npm run build` and a manual `npm run dev` smoke check. Do NOT add a test runner.
- **Read-only feed.** These must NOT appear anywhere: like, comment, share, save, reactions, views, followers, user profile, stories.
- **Video controls forbidden.** No visible play/pause/seek/progress/fullscreen/PiP/download UI. Videos are `muted loop playsInline`, no `controls` attribute.
- **Nav order:** About · Gallery · **Feeds** · Contact Us (Feeds inserted after Gallery, before Contact).
- **Custom style props** are passed as numbers (`active={x ? 1 : 0}`, `visible={x ? 1 : 0}`) to match the existing repo convention (see `Header.styles.js` `NavItem`).
- **Assets** live in `src/assets/feeds/` and are imported (not referenced by string path) so Vite bundles/hashes them.
- **Respect `prefers-reduced-motion`:** all transitions/animations disabled under that media query.

---

## File Structure

```
src/pages/feeds/
 ├── Feeds.jsx                 // page shell: title, subtitle, gold divider, feed column, end-of-feed blessing
 ├── Feeds.styles.js
 ├── feedsData.js              // formatFeedDate() + deterministic feedsData[] (asset imports)
 ├── feed-card/
 │    ├── FeedCard.jsx         // one post: brand header + MediaCarousel + description + read-more
 │    └── FeedCard.styles.js
 └── media-carousel/
      ├── MediaCarousel.jsx    // single media OR multi-media slider
      ├── MediaCarousel.styles.js
      └── FeedVideo.jsx        // muted/loop/playsInline video, IntersectionObserver play control
```

Modified: `src/router/AppRouter.jsx`, `src/components/header/Header.jsx`, `src/components/header/RespoNavBar.jsx`.

Available assets (exact filenames in `src/assets/feeds/`):
- Images (17): `IMG-20220811-WA0006.jpg`, `IMG_20211009_214818__01.jpg`, `IMG_20260113_112338.jpg`, `IMG_20260716_112953.jpg`, `IMG_20260716_113126.jpg`, `IMG_20260716_113349.jpg`, `IMG_20260716_113815.jpg`, `IMG_20260716_114040.jpg`, `IMG_20260716_114350.jpg`, `IMG_20260716_114907.jpg`, `IMG_20260716_115100.jpg`, `IMG_20260716_121202.jpg`, `IMG_20260716_121340.jpg`, `IMG_20260716_121447.jpg`, `IMG_20260716_121844.jpg`, `IMG_20260716_122038.jpg`, `IMG_20260716_122136.jpg`
- Videos (4): `VID-20230705-WA0012.mp4`, `video_20260113_104623.mp4`, `video_20260716_115928.mp4`, `video_20260716_120919.mp4`

---

### Task 1: Dummy feed data module

**Files:**
- Create: `src/pages/feeds/feedsData.js`

**Interfaces:**
- Produces:
  - `formatFeedDate(isoDate: string): string` → e.g. `"15 July 2026"`.
  - `feedsData: Array<{ id: number, description: string, createdDate: string, media: Array<{ type: "image" | "video", src: string }> }>` — curated to cover every layout (1 image, 3 images, 5 images, 1 video, 3 videos, mixed, 4 images + 2 videos, long description).

- [ ] **Step 1: Create the data module**

Create `src/pages/feeds/feedsData.js`:

```js
// Deterministic dummy data for the Feeds (Admin announcements) page.
// Assets are imported so Vite bundles and content-hashes them.
import img01 from "../../assets/feeds/IMG_20260716_112953.jpg";
import img02 from "../../assets/feeds/IMG_20260716_113126.jpg";
import img03 from "../../assets/feeds/IMG_20260716_113349.jpg";
import img04 from "../../assets/feeds/IMG_20260716_113815.jpg";
import img05 from "../../assets/feeds/IMG_20260716_114040.jpg";
import img06 from "../../assets/feeds/IMG_20260716_114350.jpg";
import img07 from "../../assets/feeds/IMG_20260716_114907.jpg";
import img08 from "../../assets/feeds/IMG_20260716_115100.jpg";
import img09 from "../../assets/feeds/IMG_20260716_121202.jpg";
import img10 from "../../assets/feeds/IMG_20260716_121340.jpg";
import img11 from "../../assets/feeds/IMG_20260716_121447.jpg";
import img12 from "../../assets/feeds/IMG_20260716_121844.jpg";
import img13 from "../../assets/feeds/IMG_20260716_122038.jpg";
import img14 from "../../assets/feeds/IMG_20260716_122136.jpg";
import img15 from "../../assets/feeds/IMG_20260113_112338.jpg";
import img16 from "../../assets/feeds/IMG_20211009_214818__01.jpg";
import img17 from "../../assets/feeds/IMG-20220811-WA0006.jpg";
import vid01 from "../../assets/feeds/video_20260716_115928.mp4";
import vid02 from "../../assets/feeds/video_20260716_120919.mp4";
import vid03 from "../../assets/feeds/VID-20230705-WA0012.mp4";
import vid04 from "../../assets/feeds/video_20260113_104623.mp4";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const formatFeedDate = (isoDate) => dateFormatter.format(new Date(isoDate));

const image = (src) => ({ type: "image", src });
const video = (src) => ({ type: "video", src });

export const feedsData = [
  {
    id: 1,
    description:
      "Beautiful sunset captured during today's evening aarti at the temple grounds.",
    createdDate: "2026-07-15",
    media: [image(img01)],
  },
  {
    id: 2,
    description:
      "Glimpses from this morning's Ganapati Homa. May the remover of obstacles bless every household.",
    createdDate: "2026-07-14",
    media: [image(img02), image(img03), image(img04)],
  },
  {
    id: 3,
    description: "A short reel from the Deepa Pooja preparations. 🪔",
    createdDate: "2026-07-13",
    media: [video(vid01)],
  },
  {
    id: 4,
    description:
      "Highlights from the Navaratri decorations across all five shrines. Swipe through the collection.",
    createdDate: "2026-07-12",
    media: [
      image(img05),
      image(img06),
      image(img07),
      image(img08),
      image(img09),
    ],
  },
  {
    id: 5,
    description:
      "Three moments of devotion recorded during the community chanting session.",
    createdDate: "2026-07-11",
    media: [video(vid02), video(vid03), video(vid04)],
  },
  {
    id: 6,
    description:
      "A mixed set from the annual utsavam — photographs and short clips woven together.",
    createdDate: "2026-07-10",
    media: [
      image(img10),
      video(vid01),
      image(img11),
      image(img12),
      video(vid02),
    ],
  },
  {
    id: 7,
    description:
      "The full album from the Rudra Abhishekam: four photographs and two clips capturing the sacred atmosphere.",
    createdDate: "2026-07-09",
    media: [
      image(img13),
      image(img14),
      image(img15),
      image(img16),
      video(vid03),
      video(vid04),
    ],
  },
  {
    id: 8,
    description:
      "Dear devotees,\n\nWe are deeply grateful for your continued participation in our weekly satsang. This month marks a special milestone as we complete one full year of uninterrupted daily prayers at the shrine.\n\nTo commemorate this occasion, we will be hosting a grand community feast (annadanam) next weekend, followed by a special evening of devotional music and discourse. All families are warmly invited to attend and partake in the blessings.\n\nMay the divine grace of the Devas illuminate your path and bring peace, prosperity, and well-being to you and your loved ones. 🙏",
    createdDate: "2026-07-08",
    media: [image(img17)],
  },
];
```

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: completes with no new errors referencing `feedsData.js`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/feeds/feedsData.js
git commit -m "feat(feeds): add deterministic dummy feed data"
```

---

### Task 2: MediaCarousel + FeedVideo (media engine)

**Files:**
- Create: `src/pages/feeds/media-carousel/MediaCarousel.styles.js`
- Create: `src/pages/feeds/media-carousel/FeedVideo.jsx`
- Create: `src/pages/feeds/media-carousel/MediaCarousel.jsx`

**Interfaces:**
- Consumes: media items of shape `{ type: "image" | "video", src: string }` (from Task 1).
- Produces:
  - `MediaCarousel` (default export) — props: `media: Array<{ type, src }>`. Renders a single item with no chrome when `media.length === 1`; otherwise a slider with arrows/dots/counter/swipe/keyboard.
  - `FeedVideo` (default export) — props: `src: string`, `isActive: boolean`.

- [ ] **Step 1: Create the carousel styles**

Create `src/pages/feeds/media-carousel/MediaCarousel.styles.js`:

```js
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

const FRAME_RADIUS = "20px";

export const CarouselRoot = styled(Box)(() => ({
  position: "relative",
  outline: "none",
}));

export const Frame = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "4 / 5",
  overflow: "hidden",
  borderRadius: `${FRAME_RADIUS} ${FRAME_RADIUS} 0 0`,
  backgroundColor: "var(--color-charcoal)",
  touchAction: "pan-y",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
    borderRadius: "inherit",
    boxShadow:
      "inset 0 0 0 1px rgba(255,255,255,.08), inset 0 -32px 48px -24px rgba(61,58,54,.22)",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
  },
}));

export const Track = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  width: "100%",
  transition: "transform 420ms cubic-bezier(0.32, 0.72, 0, 1)",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
}));

export const Slide = styled(Box)(() => ({
  position: "relative",
  flex: "0 0 100%",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

export const Backdrop = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(28px) saturate(1.15) brightness(.92)",
  transform: "scale(1.12)",
  "&[data-video='1']": {
    filter: "none",
    transform: "none",
    background:
      "radial-gradient(circle at 50% 40%, #4a4640 0%, #2a2825 70%, #1a1916 100%)",
  },
}));

export const BackdropTint = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(61,58,54,.28)",
}));

export const Foreground = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledImage = styled("img")(() => ({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  filter: "drop-shadow(0 6px 20px rgba(61,58,54,.25))",
  userSelect: "none",
  WebkitUserDrag: "none",
}));

export const StyledVideo = styled("video")(() => ({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  filter: "drop-shadow(0 6px 20px rgba(61,58,54,.25))",
}));

export const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "40px",
  height: "40px",
  zIndex: 2,
  color: "var(--color-charcoal)",
  backgroundColor: "rgba(250,249,246,.72)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,.5)",
  opacity: 0,
  transition:
    "opacity 200ms ease, transform 200ms ease, background-color 200ms ease, color 200ms ease",
  "& svg": { fontSize: "18px" },
  "&.arrow-prev": { left: "12px" },
  "&.arrow-next": { right: "12px" },
  "&:hover": {
    backgroundColor: "rgba(255,255,255,.95)",
    color: "var(--color-saffron-dark)",
    transform: "translateY(-50%) scale(1.06)",
  },
  "&:active": {
    transform: "translateY(-50%) scale(.96)",
  },
  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
    opacity: 1,
  },
  [`${Frame}:hover &`]: {
    opacity: 1,
  },
  "&.Mui-disabled": {
    opacity: 0,
    visibility: "hidden",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const CounterBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  zIndex: 2,
  fontFamily: "var(--font-primary)",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: ".04em",
  color: "var(--color-off-white)",
  backgroundColor: "rgba(61,58,54,.55)",
  backdropFilter: "blur(6px)",
  padding: "3px 10px",
  borderRadius: "999px",
  [theme.breakpoints.down("sm")]: {
    top: "10px",
    right: "10px",
  },
}));

export const TypeBadge = styled(Box)(() => ({
  position: "absolute",
  top: "12px",
  left: "12px",
  zIndex: 2,
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontFamily: "var(--font-primary)",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: ".04em",
  color: "var(--color-off-white)",
  backgroundColor: "rgba(61,58,54,.55)",
  backdropFilter: "blur(6px)",
  padding: "3px 10px 3px 8px",
  borderRadius: "999px",
}));

export const DotsRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  padding: "14px 0 2px",
}));

export const Dot = styled("button")(({ active }) => ({
  height: "6px",
  width: active ? "18px" : "6px",
  padding: 0,
  border: "none",
  borderRadius: "999px",
  cursor: "pointer",
  backgroundColor: active ? "var(--color-saffron-dark)" : "var(--color-silver)",
  transition:
    "width 240ms cubic-bezier(0.4,0,0.2,1), background-color 240ms cubic-bezier(0.4,0,0.2,1)",
  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
}));
```

- [ ] **Step 2: Create the FeedVideo component**

Create `src/pages/feeds/media-carousel/FeedVideo.jsx`:

```jsx
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { StyledVideo } from "./MediaCarousel.styles";

// Muted, looping video that plays ONLY while it is the active slide AND on-screen.
// No controls are rendered; casual downloading is deterred via attributes + context menu block.
const FeedVideo = ({ src, isActive }) => {
  const videoRef = useRef(null);
  const onScreenRef = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;

    // Ensure muted is set as a property (attribute alone is unreliable for autoplay).
    el.muted = true;
    el.defaultMuted = true;

    const sync = () => {
      if (isActive && onScreenRef.current) {
        const p = el.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        el.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreenRef.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    sync();

    return () => observer.disconnect();
  }, [isActive]);

  return (
    <StyledVideo
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      disableRemotePlayback
      controlsList="nodownload noplaybackrate nofullscreen"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

FeedVideo.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FeedVideo;
```

- [ ] **Step 3: Create the MediaCarousel component**

Create `src/pages/feeds/media-carousel/MediaCarousel.jsx`:

```jsx
import { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FeedVideo from "./FeedVideo";
import {
  CarouselRoot,
  Frame,
  Track,
  Slide,
  Backdrop,
  BackdropTint,
  Foreground,
  StyledImage,
  ArrowButton,
  CounterBadge,
  TypeBadge,
  DotsRow,
  Dot,
} from "./MediaCarousel.styles";

const SWIPE_THRESHOLD = 40;

const MediaCarousel = ({ media }) => {
  const count = media.length;
  const isMulti = count > 1;
  const [index, setIndex] = useState(0);
  const dragRef = useRef({ startX: 0, dragging: false });

  const goTo = useCallback(
    (next) => setIndex(Math.max(0, Math.min(count - 1, next))),
    [count]
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isMulti) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [isMulti, prev, next]
  );

  const onPointerDown = useCallback((e) => {
    dragRef.current = { startX: e.clientX, dragging: true };
  }, []);

  const onPointerUp = useCallback(
    (e) => {
      if (!dragRef.current.dragging) return;
      dragRef.current.dragging = false;
      const dx = e.clientX - dragRef.current.startX;
      if (dx > SWIPE_THRESHOLD) prev();
      else if (dx < -SWIPE_THRESHOLD) next();
    },
    [prev, next]
  );

  return (
    <CarouselRoot
      tabIndex={isMulti ? 0 : -1}
      onKeyDown={handleKeyDown}
      role={isMulti ? "group" : undefined}
      aria-roledescription={isMulti ? "carousel" : undefined}
    >
      <Frame
        onPointerDown={isMulti ? onPointerDown : undefined}
        onPointerUp={isMulti ? onPointerUp : undefined}
      >
        <Track style={{ transform: `translateX(-${index * 100}%)` }}>
          {media.map((item, i) => (
            <Slide key={i}>
              {item.type === "image" ? (
                <>
                  <Backdrop style={{ backgroundImage: `url(${item.src})` }} />
                  <BackdropTint />
                  <Foreground>
                    <StyledImage
                      src={item.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </Foreground>
                </>
              ) : (
                <>
                  <Backdrop data-video="1" />
                  <BackdropTint />
                  <Foreground>
                    <FeedVideo src={item.src} isActive={i === index} />
                  </Foreground>
                  <TypeBadge>
                    <PlayArrowRoundedIcon sx={{ fontSize: 14 }} />
                    Video
                  </TypeBadge>
                </>
              )}
            </Slide>
          ))}
        </Track>

        {isMulti && (
          <>
            <ArrowButton
              className="arrow-prev"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous media"
              disableRipple
            >
              <ChevronLeftIcon />
            </ArrowButton>
            <ArrowButton
              className="arrow-next"
              onClick={next}
              disabled={index === count - 1}
              aria-label="Next media"
              disableRipple
            >
              <ChevronRightIcon />
            </ArrowButton>
            <CounterBadge>
              {index + 1} / {count}
            </CounterBadge>
          </>
        )}
      </Frame>

      {isMulti && (
        <DotsRow>
          {media.map((_, i) => (
            <Dot
              key={i}
              type="button"
              active={i === index ? 1 : 0}
              onClick={() => goTo(i)}
              aria-label={`Go to media ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </DotsRow>
      )}
    </CarouselRoot>
  );
};

MediaCarousel.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video"]).isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MediaCarousel;
```

- [ ] **Step 4: Verify lint passes**

Run: `npm run lint`
Expected: no new errors for the `media-carousel/` files (watch for `react-hooks/exhaustive-deps` — the dependency arrays above are intentionally complete).

- [ ] **Step 5: Commit**

```bash
git add src/pages/feeds/media-carousel/
git commit -m "feat(feeds): add MediaCarousel and FeedVideo media engine"
```

---

### Task 3: FeedCard

**Files:**
- Create: `src/pages/feeds/feed-card/FeedCard.styles.js`
- Create: `src/pages/feeds/feed-card/FeedCard.jsx`

**Interfaces:**
- Consumes: `MediaCarousel` (Task 2, `../media-carousel/MediaCarousel`); `formatFeedDate` (Task 1, `../feedsData`); site logo `../../../assets/images/logo.png`.
- Produces: `FeedCard` (default export, `memo`-wrapped) — props: `post: { id, description, createdDate, media }`.

- [ ] **Step 1: Create the card styles**

Create `src/pages/feeds/feed-card/FeedCard.styles.js`:

```js
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const GOLD_HAIRLINE =
  "linear-gradient(90deg, transparent, #ffc04d 20%, #e67300 50%, #ffc04d 80%, transparent)";

export const Card = styled(Box)(({ theme, visible }) => ({
  position: "relative",
  width: "620px",
  maxWidth: "100%",
  backgroundColor: "var(--color-white)",
  border: "1px solid rgba(196,192,182,.45)",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 1px 2px rgba(61,58,54,.04), 0 8px 24px rgba(61,58,54,.07)",
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(24px)",
  transition:
    "opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1), box-shadow 280ms ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    zIndex: 3,
    background: GOLD_HAIRLINE,
    opacity: 0.7,
  },
  "&:hover": {
    transform: visible ? "translateY(-3px)" : "translateY(24px)",
    boxShadow: "0 2px 4px rgba(61,58,54,.05), 0 16px 40px rgba(128,0,32,.10)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "box-shadow 280ms ease",
    opacity: 1,
    transform: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: 0,
    borderLeft: "none",
    borderRight: "none",
  },
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "18px 28px 14px",
  [theme.breakpoints.down("sm")]: {
    padding: "14px 20px 12px",
  },
}));

export const LogoMedallion = styled("img")(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "1.5px solid var(--color-turmeric)",
  boxShadow: "0 0 0 2px var(--color-white) inset",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    width: "36px",
    height: "36px",
  },
}));

export const HeaderText = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
}));

export const BrandName = styled(Typography)(() => ({
  fontFamily: "var(--font-special)",
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: ".02em",
  color: "var(--color-charcoal)",
}));

export const Eyebrow = styled(Typography)(() => ({
  fontFamily: "var(--font-primary)",
  fontSize: "11.5px",
  fontWeight: 500,
  letterSpacing: ".08em",
  color: "var(--color-stone)",
  marginTop: "2px",
}));

export const PostedDate = styled(Typography)(() => ({
  marginLeft: "auto",
  paddingLeft: "12px",
  fontFamily: "var(--font-primary)",
  fontSize: "12.5px",
  fontWeight: 400,
  color: "var(--color-ash)",
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const Body = styled(Box)(({ theme }) => ({
  padding: "20px 28px 24px",
  [theme.breakpoints.down("sm")]: {
    padding: "16px 20px 20px",
  },
}));

export const Description = styled(Typography)(({ expanded, clamp }) => ({
  fontFamily: "var(--font-primary)",
  fontSize: "15.5px",
  lineHeight: 1.65,
  color: "var(--color-slate)",
  whiteSpace: "pre-line",
  overflow: "hidden",
  ...(expanded
    ? { display: "block" }
    : {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: String(clamp),
      }),
}));

export const ReadMoreButton = styled("button")(() => ({
  marginTop: "8px",
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  fontFamily: "var(--font-primary)",
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--color-saffron-dark)",
  "&:hover": { textDecoration: "underline" },
  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
    borderRadius: "4px",
  },
}));

export const DiyaDivider = styled(Box)(() => ({
  width: "120px",
  height: "12px",
  margin: "18px auto 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: "1px",
    backgroundColor: "var(--color-ui-border)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "8px",
    height: "8px",
    backgroundColor: "var(--color-maroon)",
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
}));
```

- [ ] **Step 2: Create the FeedCard component**

Create `src/pages/feeds/feed-card/FeedCard.jsx`:

```jsx
import { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import MediaCarousel from "../media-carousel/MediaCarousel";
import { formatFeedDate } from "../feedsData";
import logo from "../../../assets/images/logo.png";
import {
  Card,
  Header,
  LogoMedallion,
  HeaderText,
  BrandName,
  Eyebrow,
  PostedDate,
  Body,
  Description,
  ReadMoreButton,
  DiyaDivider,
} from "./FeedCard.styles";

const CLAMP_LINES = 4;

const FeedCard = ({ post }) => {
  const { media, description, createdDate } = post;
  const cardRef = useRef(null);
  const descRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isClampable, setIsClampable] = useState(false);

  // Entrance animation: reveal once when the card scrolls into view.
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Measure (while collapsed) whether the description overflows the clamp.
  useEffect(() => {
    const node = descRef.current;
    if (!node) return;
    setIsClampable(node.scrollHeight > node.clientHeight + 1);
  }, [description]);

  return (
    <Card ref={cardRef} visible={visible ? 1 : 0}>
      <Header>
        <LogoMedallion src={logo} alt="Deva Yajña" />
        <HeaderText>
          <BrandName>Deva Yajña</BrandName>
          <Eyebrow>देव यज्ञ · Announcement</Eyebrow>
        </HeaderText>
        <PostedDate>{formatFeedDate(createdDate)}</PostedDate>
      </Header>

      <MediaCarousel media={media} />

      <Body>
        <Description
          ref={descRef}
          expanded={expanded ? 1 : 0}
          clamp={CLAMP_LINES}
        >
          {description}
        </Description>
        {isClampable && (
          <ReadMoreButton type="button" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Read less" : "Read more"}
          </ReadMoreButton>
        )}
        {expanded && isClampable && <DiyaDivider aria-hidden="true" />}
      </Body>
    </Card>
  );
};

FeedCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    media: PropTypes.array.isRequired,
  }).isRequired,
};

export default memo(FeedCard);
```

- [ ] **Step 3: Verify lint passes**

Run: `npm run lint`
Expected: no new errors for the `feed-card/` files.

- [ ] **Step 4: Commit**

```bash
git add src/pages/feeds/feed-card/
git commit -m "feat(feeds): add FeedCard with brand header and read-more"
```

---

### Task 4: Feeds page

**Files:**
- Create: `src/pages/feeds/Feeds.styles.js`
- Create: `src/pages/feeds/Feeds.jsx`

**Interfaces:**
- Consumes: `FeedCard` (Task 3, `./feed-card/FeedCard`); `feedsData` (Task 1, `./feedsData`).
- Produces: `Feeds` (default export) — the page component rendered at `/feeds`.

- [ ] **Step 1: Create the page styles**

Create `src/pages/feeds/Feeds.styles.js`:

```js
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";

const GOLD_HAIRLINE =
  "linear-gradient(90deg, transparent, #ffc04d 20%, #e67300 50%, #ffc04d 80%, transparent)";

export const FeedsContainer = styled(Box)(({ theme }) => ({
  padding: "60px 24px 80px",
  maxWidth: "1400px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0 60px",
  },
}));

export const FeedsTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "48px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "12px",
}));

export const FeedsSubtitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  lineHeight: 1.6,
  maxWidth: "600px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 24px",
  },
}));

export const GoldDivider = styled(Box)(() => ({
  width: "120px",
  height: "2px",
  borderRadius: "2px",
  background: GOLD_HAIRLINE,
  opacity: 0.7,
  marginBottom: "40px",
}));

export const FeedColumn = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "620px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "48px",
  [theme.breakpoints.down("sm")]: {
    gap: "28px",
    maxWidth: "100%",
  },
}));

export const EndOfFeed = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px 0 8px",
  marginTop: "8px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,192,77,.18), transparent 70%)",
    pointerEvents: "none",
  },
}));

export const OmSymbol = styled(Typography)(() => ({
  position: "relative",
  fontFamily: "var(--font-special)",
  fontSize: "28px",
  color: "var(--color-silver)",
}));

export const EndText = styled(Typography)(() => ({
  fontFamily: "var(--font-primary)",
  fontSize: "13px",
  color: "var(--color-ash)",
  marginTop: "6px",
}));
```

- [ ] **Step 2: Create the Feeds page component**

Create `src/pages/feeds/Feeds.jsx`:

```jsx
import FeedCard from "./feed-card/FeedCard";
import { feedsData } from "./feedsData";
import {
  FeedsContainer,
  FeedsTitle,
  FeedsSubtitle,
  GoldDivider,
  FeedColumn,
  EndOfFeed,
  OmSymbol,
  EndText,
} from "./Feeds.styles";

const Feeds = () => {
  return (
    <FeedsContainer>
      <FeedsTitle>Feeds</FeedsTitle>
      <FeedsSubtitle>
        Announcements, moments, and glimpses shared by Deva Yajña.
      </FeedsSubtitle>
      <GoldDivider />

      <FeedColumn>
        {feedsData.map((post) => (
          <FeedCard key={post.id} post={post} />
        ))}

        <EndOfFeed>
          <OmSymbol>ॐ</OmSymbol>
          <EndText>You are all caught up</EndText>
        </EndOfFeed>
      </FeedColumn>
    </FeedsContainer>
  );
};

export default Feeds;
```

- [ ] **Step 3: Verify lint passes**

Run: `npm run lint`
Expected: no new errors for `Feeds.jsx` / `Feeds.styles.js`.

- [ ] **Step 4: Commit**

```bash
git add src/pages/feeds/Feeds.jsx src/pages/feeds/Feeds.styles.js
git commit -m "feat(feeds): add Feeds page shell with timeline and end-of-feed blessing"
```

---

### Task 5: Wire route and navigation

**Files:**
- Modify: `src/router/AppRouter.jsx`
- Modify: `src/components/header/Header.jsx:17-21`
- Modify: `src/components/header/RespoNavBar.jsx:21-25`

**Interfaces:**
- Consumes: `Feeds` page (Task 4).
- Produces: reachable `/feeds` route + a "Feeds" nav item in desktop header and mobile drawer.

- [ ] **Step 1: Register the route**

In `src/router/AppRouter.jsx`, add the import and route. The file should read:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Gallery from "../pages/gallery/Gallery";
import Feeds from "../pages/feeds/Feeds";
import Contact from "../pages/contact/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/feeds" element={<Feeds />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
```

- [ ] **Step 2: Add the desktop nav item**

In `src/components/header/Header.jsx`, update the `NAV_ITEMS` array (lines 17-21) to insert Feeds after Gallery:

```jsx
const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Feeds", href: "/feeds" },
  { label: "Contact Us", href: "/contact" },
];
```

- [ ] **Step 3: Add the mobile drawer nav item**

In `src/components/header/RespoNavBar.jsx`, update the `NAV_ITEMS` array (lines 21-25) to match:

```jsx
const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Feeds", href: "/feeds" },
  { label: "Contact Us", href: "/contact" },
];
```

- [ ] **Step 4: Verify lint passes**

Run: `npm run lint`
Expected: no new errors.

- [ ] **Step 5: Verify the production build succeeds**

Run: `npm run build`
Expected: build completes with no errors; the `feeds/` assets resolve and are emitted to `dist/assets/`. (Large source videos will produce large emitted files and possibly a Vite chunk/size warning — that is expected and acceptable for this dummy feature.)

- [ ] **Step 6: Manual smoke check**

Run: `npm run dev`, open the app, and confirm:
- "Feeds" appears in the desktop header (About · Gallery · Feeds · Contact) and in the mobile drawer, and navigates to `/feeds`.
- Each layout renders: 1 image (post 1), 3 images (post 2), 1 video (post 3), 5 images (post 4), 3 videos (post 5), mixed (post 6), 4 images + 2 videos (post 7), long description (post 8).
- Carousel: arrows appear on hover (desktop) and are hidden at the ends; dots + `1/5` counter update; drag-swipe changes slide; ←/→ navigate when a carousel is focused.
- Videos autoplay muted and loop, show no controls, and right-click shows no "Save video as" (context menu blocked). Only the active/on-screen video plays.
- Long description (post 8) clamps to 4 lines with a working "Read more"/"Read less"; the diya divider appears only when expanded.
- Resize to tablet and mobile widths: cards go full-bleed on mobile, arrows hide (swipe/dots remain), spacing adapts.

- [ ] **Step 7: Commit**

```bash
git add src/router/AppRouter.jsx src/components/header/Header.jsx src/components/header/RespoNavBar.jsx
git commit -m "feat(feeds): wire /feeds route and add Feeds nav item"
```

---

## Self-Review

**Spec coverage** (against `2026-07-16-feeds-page-design.md`):
- §3 Architecture / file structure → Tasks 1-5 create exactly the specified files.
- §4 Data model + curated coverage → Task 1 (`feedsData`, all layouts incl. long description).
- §5.1 Feeds page (title, subtitle, gold divider, blessing) → Task 4.
- §5.2 FeedCard (brand header, memo, read-more, entrance animation) → Task 3.
- §5.3 MediaCarousel (single vs multi, arrows/dots/counter/swipe/keyboard, 4:5 contain-over-blur frame) → Task 2.
- §5.4 FeedVideo (muted/loop/playsInline, IntersectionObserver play, download deterrence) → Task 2.
- §6 Visual design values → Tasks 2-4 styles.
- §7 Responsive → breakpoint blocks in Tasks 2-4 styles; verified in Task 5 Step 6.
- §8 Performance (lazy images, `preload=none` video, active-only playback, `React.memo`) → Tasks 2-3.
- §9 Verification → Task 5 Steps 4-6.
- Navigation (both files) + route → Task 5.

**Placeholder scan:** No TBD/TODO; every code step contains complete code. ✔

**Type consistency:** `formatFeedDate` (Task 1) consumed in Task 3; media shape `{ type, src }` consistent across Tasks 1-3; `MediaCarousel` prop `media`, `FeedVideo` props `src`/`isActive` consistent between Task 2 definition and Task 3 usage; custom style props are numeric (`visible`/`expanded`/`active` as `1|0`) consistently between `.jsx` and `.styles.js`. ✔

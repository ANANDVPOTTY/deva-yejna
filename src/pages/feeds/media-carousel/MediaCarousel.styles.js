import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

const FRAME_RADIUS = "0";

export const CarouselRoot = styled(Box)(() => ({
  position: "relative",
  outline: "none",
  padding: "0 16px",
}));

export const Frame = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "4 / 5",
  overflow: "hidden",
  borderRadius: `${FRAME_RADIUS}`,
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

// Video backdrop: a lightweight gradient (no image decode).
export const Backdrop = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 40%, #4a4640 0%, #2a2825 70%, #1a1916 100%)",
}));

// Image backdrop: a lazily-loaded, blurred copy of the slide image.
// Using an <img loading="lazy"> (instead of a CSS background) means offscreen
// slides do NOT decode their multi-MB source until they scroll into view.
export const BackdropImage = styled("img")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(28px) saturate(1.15) brightness(.92)",
  transform: "scale(1.12)",
  pointerEvents: "none",
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
  cursor: "zoom-in",
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

// Buffering spinner shown over a video slide until its frames are ready.
// Sits above the backdrop but below the mute button so controls stay tappable.
export const VideoLoader = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  color: "var(--color-off-white)",
}));

export const MuteButton = styled(IconButton)(() => ({
  position: "absolute",
  bottom: "12px",
  right: "12px",
  zIndex: 3,
  width: "36px",
  height: "36px",
  color: "var(--color-off-white)",
  backgroundColor: "rgba(61,58,54,.55)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,.25)",
  transition: "background-color 200ms ease, transform 200ms ease",
  "& svg": { fontSize: "18px" },
  "&:hover": {
    backgroundColor: "rgba(61,58,54,.78)",
    transform: "scale(1.06)",
  },
  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
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

// ---- Fullscreen lightbox (opened on media click) ----------------------------

export const LightboxContent = styled(Box)(() => ({
  position: "relative",
  width: "100vw",
  height: "100dvh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  outline: "none",
  overflow: "hidden",
}));

export const LightboxImage = styled("img")(({ zoomed }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  userSelect: "none",
  WebkitUserDrag: "none",
  touchAction: "none",
  cursor: zoomed ? "grab" : "zoom-in",
  "&:active": {
    cursor: zoomed ? "grabbing" : "zoom-in",
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none !important",
  },
}));

// Shrinks to the rendered video box so FeedVideo's mute button (absolutely
// positioned to its nearest relative ancestor) sits on the video's corner.
export const LightboxVideoStage = styled(Box)(() => ({
  position: "relative",
  display: "inline-flex",
  maxWidth: "100%",
  maxHeight: "100%",
  // Cap the video against the viewport (the shared StyledVideo uses a
  // percentage maxHeight, which needs a definite ancestor to resolve).
  "& video": {
    maxWidth: "calc(100vw - 48px)",
    maxHeight: "calc(100dvh - 48px)",
  },
}));

export const LightboxClose = styled(IconButton)(() => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  zIndex: 4,
  width: "44px",
  height: "44px",
  color: "var(--color-off-white)",
  backgroundColor: "rgba(61,58,54,.55)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,.25)",
  transition: "background-color 200ms ease, transform 200ms ease",
  "& svg": { fontSize: "22px" },
  "&:hover": {
    backgroundColor: "rgba(61,58,54,.82)",
    transform: "scale(1.06)",
  },
  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
  },
}));

export const LightboxArrow = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 4,
  width: "48px",
  height: "48px",
  color: "var(--color-off-white)",
  backgroundColor: "rgba(61,58,54,.5)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,.22)",
  transition: "background-color 200ms ease, transform 200ms ease",
  "& svg": { fontSize: "26px" },
  "&.arrow-prev": { left: "16px" },
  "&.arrow-next": { right: "16px" },
  "&:hover": {
    backgroundColor: "rgba(61,58,54,.8)",
    transform: "translateY(-50%) scale(1.06)",
  },
  "&:active": {
    transform: "translateY(-50%) scale(.96)",
  },
  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
  },
  "&.Mui-disabled": {
    opacity: 0,
    visibility: "hidden",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
    "&.arrow-prev": { left: "8px" },
    "&.arrow-next": { right: "8px" },
  },
}));

export const LightboxCounter = styled(Box)(() => ({
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 4,
  fontFamily: "var(--font-primary)",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: ".05em",
  color: "var(--color-off-white)",
  backgroundColor: "rgba(61,58,54,.55)",
  backdropFilter: "blur(6px)",
  padding: "4px 14px",
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

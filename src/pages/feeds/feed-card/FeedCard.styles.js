import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

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

export const Dp = styled("img")(({ theme }) => ({
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
  alignItems: "flex-start",
  minWidth: 0,
}));

export const BrandName = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "16px"),
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: ".02em",
  color: "var(--color-charcoal)",
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

export const Eyebrow = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-special)",
  ...responsiveFont(theme, "12px"),
  fontWeight: 500,
  letterSpacing: ".08em",
  color: "var(--color-stone)",
  marginTop: "2px",
}));

export const Meta = styled(Box)(() => ({
  marginLeft: "auto",
  paddingLeft: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "3px",
  flexShrink: 0,
}));

export const PostedDate = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "12px"),
  fontWeight: 400,
  color: "var(--color-ash)",
  whiteSpace: "nowrap",
}));

export const PostLocation = styled(Typography)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "3px",
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "12px"),
  fontWeight: 500,
  color: "var(--color-stone)",
  whiteSpace: "nowrap",
  "& svg": {
    fontSize: "14px",
    color: "var(--color-saffron-dark)",
  },
}));

export const Body = styled(Box)(({ theme }) => ({
  padding: "20px 28px 24px",
  [theme.breakpoints.down("sm")]: {
    padding: "16px 20px 20px",
  },
}));

export const Description = styled(Typography)(({ theme, expanded, clamp }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "16px"),
  lineHeight: 1.65,
  color: "var(--color-slate)",
  whiteSpace: "pre-line",
  overflowWrap: "anywhere",
  overflow: "hidden",
  ...(expanded
    ? { display: "block" }
    : {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: String(clamp),
      }),
}));

export const ReadMoreButton = styled("button")(({ theme }) => ({
  marginTop: "8px",
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "14px"),
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

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

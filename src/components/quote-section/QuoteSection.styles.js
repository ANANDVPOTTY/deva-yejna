import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../font/ResponsiveFonts.styles";
import { quoteFadeIn, quoteFadeOut, quoteIconPulse } from "../../styles/animations";

export const QuoteSectionWrapper = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "var(--color-pink-light)",
  position: "relative",
  overflow: "hidden",
}));

export const BlobTopRight = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-20px",
  right: "-40px",
  width: "220px",
  height: "280px",
  pointerEvents: "none",

  "& svg": {
    width: "100%",
    height: "100%",
  },

  [theme.breakpoints.down("lg")]: {
    width: "180px",
    height: "230px",
    right: "-30px",
  },

  [theme.breakpoints.down("md")]: {
    width: "140px",
    height: "180px",
    right: "-20px",
    top: "-10px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "130px",
    right: "-15px",
    top: "-5px",
  },
}));

export const BlobBottomLeft = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "-30px",
  left: "-50px",
  width: "250px",
  height: "300px",
  pointerEvents: "none",

  "& svg": {
    width: "100%",
    height: "100%",
  },

  [theme.breakpoints.down("lg")]: {
    width: "200px",
    height: "250px",
    left: "-40px",
  },

  [theme.breakpoints.down("md")]: {
    width: "160px",
    height: "200px",
    left: "-30px",
    bottom: "-20px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "120px",
    height: "150px",
    left: "-25px",
    bottom: "-15px",
  },
}));

export const QuoteContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "80px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
  zIndex: 1,

  [theme.breakpoints.down("lg")]: {
    padding: "70px 24px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "60px 20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 16px",
  },
}));

export const QuoteIconWrapper = styled(Box)(({ theme }) => ({
  color: "var(--color-maroon)",
  marginBottom: "24px",
  animation: `${quoteIconPulse} 4s ease-in-out infinite`,

  "& svg": {
    width: "56px",
    height: "56px",
  },

  [theme.breakpoints.down("md")]: {
    marginBottom: "20px",

    "& svg": {
      width: "48px",
      height: "48px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "16px",

    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
}));

export const QuoteContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isAnimating",
})(({ isAnimating }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  animation: isAnimating
    ? `${quoteFadeOut} 0.4s ease-out forwards`
    : `${quoteFadeIn} 0.4s ease-out forwards`,
}));

export const QuoteText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "36px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-maroon)",
  lineHeight: 1.5,
  maxWidth: "800px",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "700px",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "600px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    lineHeight: 1.6,
  },
}));

export const QuoteMeaning = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "20px"),
  fontFamily: "var(--font-primary)",
  fontStyle: "italic",
  color: "var(--color-charcoal)",
  opacity: 0.85,
  lineHeight: 1.7,
  maxWidth: "600px",
  marginTop: "8px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
    marginTop: "4px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export const QuoteSource = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginTop: "24px",

  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
    gap: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: "16px",
    gap: "8px",
  },
}));

export const SourceImageWrapper = styled(Box)(({ theme }) => ({
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  overflow: "hidden",
  border: "3px solid var(--color-coral)",
  flexShrink: 0,

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  [theme.breakpoints.down("md")]: {
    width: "48px",
    height: "48px",
    border: "2px solid var(--color-coral)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
}));

export const SourceInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2px",
}));

export const SourceLabel = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-charcoal)",
  opacity: 0.7,
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

export const SourceText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-special)",
  color: "var(--color-charcoal)",
  fontWeight: 600,
  letterSpacing: "0.5px",
}));

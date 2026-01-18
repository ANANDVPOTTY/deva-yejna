import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../font/ResponsiveFonts.styles";
import { quoteFadeIn, quoteFadeOut, quoteIconPulse } from "../../styles/animations";

export const QuoteSectionWrapper = styled(Box)(() => ({
  width: "100%",
  background: "linear-gradient(135deg, var(--color-parchment) 0%, var(--color-cornsilk) 50%, var(--color-peach) 100%)",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-10%",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, var(--color-saffron-light) 0%, transparent 70%)",
    opacity: 0.3,
    borderRadius: "50%",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-40%",
    right: "-5%",
    width: "250px",
    height: "250px",
    background: "radial-gradient(circle, var(--color-turmeric) 0%, transparent 70%)",
    opacity: 0.25,
    borderRadius: "50%",
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
  gap: "8px",
  marginTop: "24px",

  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: "16px",
  },
}));

export const SourceIcon = styled(Box)(({ theme }) => ({
  ...responsiveFont(theme, "24px"),
  fontFamily: "var(--font-special)",
  color: "var(--color-saffron-dark)",
  fontWeight: 700,
}));

export const SourceText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-special)",
  color: "var(--color-charcoal)",
  fontWeight: 600,
  letterSpacing: "0.5px",
}));

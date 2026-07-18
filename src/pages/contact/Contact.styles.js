import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";
import { fadeInUp, staggerFadeIn } from "../../styles/animations";

export const ContactContainer = styled(Box)(({ theme }) => ({
  padding: "80px 24px",
  maxWidth: "1200px",
  margin: "0 auto",
  minHeight: "calc(100vh - 160px)",
  [theme.breakpoints.down("sm")]: {
    padding: "24px 24px 60px",
  },
}));

export const ContactHeader = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: "60px",
  animation: `${fadeInUp} 0.6s ease-out forwards`,
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "42px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "16px",
}));

export const ContactDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  lineHeight: 1.7,
  maxWidth: "550px",
  marginLeft: "auto",
  marginRight: "auto",
}));

export const ContactContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr",
  gap: "40px",
  alignItems: "start",

  [theme.breakpoints.down("lg")]: {
    gap: "40px",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "48px",
  },
}));

export const AnimatedSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "delay",
})(({ delay = 0 }) => ({
  opacity: 0,
  animation: `${staggerFadeIn} 0.6s ease-out forwards`,
  animationDelay: `${delay}ms`,
}));

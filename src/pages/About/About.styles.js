import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles.jsx";
import { fadeInUp } from "../../styles/animations";

export const AboutContainer = styled(Box)(() => ({
  margin: "0 auto",
}));

/*-------| Hero Section - Dark Banner |-------*/
export const HeroBanner = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(135deg, var(--color-charcoal) 0%, var(--color-slate) 30%, var(--color-onyx) 65%, var(--color-ink) 100%)",

  padding: "100px 24px",
  position: "relative",
  overflow: "hidden",
  animation: `${fadeInUp} 0.8s ease-out`,
  borderRadius: "14px 14px 0 0",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    right: "-10%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "rgba(113, 86, 67, 0.11)",
    pointerEvents: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-30%",
    left: "-5%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(60, 38, 22, 0.11)",
    pointerEvents: "none",
  },

  [theme.breakpoints.down("md")]: {
    padding: "60px 24px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 16px",
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: "1400px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "60px",
  position: "relative",
  zIndex: 1,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
    gap: "40px",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "30px",
  },
}));

export const HeroTextContent = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: "600px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const Greeting = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "18px"),
  fontWeight: 500,
  color: "var(--color-eggshell)",
  marginBottom: "12px",
  letterSpacing: "2px",
}));

export const HeroName = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "52px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-peach)",
  lineHeight: 1.5,
  marginBottom: "16px",
  textTransform: "uppercase",
  letterSpacing: "2px",

  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.3,
    letterSpacing: "1px",
  },
}));

export const HeroRole = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 400,
  color: "var(--color-silver)",
  marginBottom: "32px",
  lineHeight: 1.6,
}));

export const HeroButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  marginTop: "4rem",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6rem",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "4rem",
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  padding: "14px 32px",
  borderRadius: "8px",
  fontWeight: 600,
  ...responsiveFont(theme, "14px"),
  textTransform: "none",
  backgroundColor: "var(--color-charcoal)",
  color: "var(--color-cream)",
  border: "2px solid var(--color-stone)",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "var(--color-onyx)",
    borderColor: "var(--color-ash)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(61, 58, 54, 0.3)",
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  padding: "14px 32px",
  borderRadius: "8px",
  fontWeight: 600,
  ...responsiveFont(theme, "14px"),
  textTransform: "none",
  backgroundColor: "transparent",
  color: "var(--color-cream)",
  border: "2px solid var(--color-stone)",
  transition: "all 0.3s ease",

  "&:hover": {
    borderColor: "var(--color-ash)",
    color: "var(--color-ivory)",
    transform: "translateY(-2px)",
    backgroundColor: "rgba(255, 229, 180, 0.05)",
  },
}));

export const HeroImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  flexShrink: 0,

  [theme.breakpoints.down("md")]: {
    marginBottom: "2.5rem",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "1.5rem",
  },
}));

export const HeroImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "300px",
  height: "360px",
  zIndex: 2,

  [theme.breakpoints.down("sm")]: {
    width: "240px",
    height: "290px",
  },
}));

export const HeroImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
  border: "4px solid var(--color-stone)",
}));

export const DecorativeCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ theme, variant }) => ({
  position: "absolute",
  borderRadius: "50%",
  border: "3px solid",
  borderColor:
    variant === "primary" ? "var(--color-peach)" : "var(--color-stone)",
  width: variant === "primary" ? "80px" : "120px",
  height: variant === "primary" ? "80px" : "120px",
  top: variant === "primary" ? "-15px" : "auto",
  right: variant === "primary" ? "-20px" : "auto",
  bottom: variant === "primary" ? "auto" : "-25px",
  left: variant === "primary" ? "auto" : "-30px",
  zIndex: variant === "primary" ? 3 : 1,

  [theme.breakpoints.down("sm")]: {
    width: variant === "primary" ? "60px" : "90px",
    height: variant === "primary" ? "60px" : "90px",
    top: variant === "primary" ? "-20px" : "auto",
    right: variant === "primary" ? "-18px" : "auto",
    bottom: variant === "primary" ? "auto" : "-15px",
    left: variant === "primary" ? "auto" : "-12px",
  },
}));

export const DecorativeDots = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "50px",
  right: "-50px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 8px)",
  gap: "8px",
  zIndex: 1,

  "& span": {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "var(--color-stone)",
  },

  [theme.breakpoints.down("sm")]: {
    right: "-40px",
    bottom: "40px",
    gridTemplateColumns: "repeat(3, 6px)",
    gap: "6px",

    "& span": {
      width: "6px",
      height: "6px",
    },
  },
}));

/*-------| About Me Section |-------*/
export const AboutSection = styled(Box)(({ theme }) => ({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "80px 24px",
  animation: `${fadeInUp} 0.8s ease-out 0.2s both`,

  [theme.breakpoints.down("md")]: {
    padding: "60px 24px",
  },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "42px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-charcoal)",
  marginBottom: "32px",
  textAlign: "center",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "3px",
    backgroundColor: "var(--color-stone)",
    borderRadius: "2px",
  },
}));

export const AboutDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-charcoal)",
  lineHeight: 1.8,
  opacity: 0.9,
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",

  "& + &": {
    marginTop: "20px",
  },
}));

/*-------| Content Wrapper for sections below hero |-------*/
export const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 24px 80px",

  [theme.breakpoints.down("md")]: {
    padding: "0 24px 60px",
  },
}));

export const Divider = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  margin: "60px 0",

  "&::before, &::after": {
    content: '""',
    height: "1px",
    width: "100px",
    background:
      "linear-gradient(90deg, transparent, var(--color-silver), transparent)",
  },
}));

export const DividerSymbol = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "24px"),
  color: "var(--color-stone)",
}));

export const QuoteSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "50px 40px",
  background:
    "linear-gradient(135deg, var(--color-pearl) 0%, var(--color-alabaster) 100%)",
  borderRadius: "20px",
  marginBottom: "60px",
  position: "relative",
  animation: `${fadeInUp} 0.8s ease-out 0.2s both`,

  "&::before": {
    content: '"\\201C"',
    position: "absolute",
    top: "20px",
    left: "30px",
    ...responsiveFont(theme, "80px"),
    fontFamily: "var(--font-special)",
    color: "var(--color-slate)",
    opacity: 0.5,
    lineHeight: 1,
  },

  [theme.breakpoints.down("sm")]: {
    padding: "40px 24px",
  },
}));

export const QuoteText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "24px"),
  fontFamily: "var(--font-special)",
  color: "var(--color-charcoal)",
  fontStyle: "italic",
  lineHeight: 1.6,
  maxWidth: "800px",
  margin: "0 auto",
}));

export const ExpertiseSection = styled(Box)(({ theme }) => ({
  animation: `${fadeInUp} 0.8s ease-out 0.4s both`,

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "36px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "40px",
  textAlign: "center",
}));

export const ExpertiseGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ExpertiseCard = styled(Box)(() => ({
  padding: "30px 24px",
  background: "var(--color-white)",
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(61, 58, 54, 0.08)",
  border: "1px solid var(--color-pearl)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textAlign: "center",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(61, 58, 54, 0.12)",
  },
}));

export const ExpertiseIcon = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "40px"),
  marginBottom: "16px",
}));

export const ExpertiseTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "20px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "10px",
}));

export const ExpertiseDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  lineHeight: 1.6,
}));

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles.jsx";
import { keyframes } from "@mui/material/styles";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutContainer = styled(Box)(() => ({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "60px 24px 80px",
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "60px",
  marginBottom: "80px",
  animation: `${fadeInUp} 0.8s ease-out`,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "40px",
    marginBottom: "60px",
  },
}));

export const PhotosContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  flexShrink: 0,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const PhotoWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ theme, variant }) => ({
  position: "relative",
  width: variant === "primary" ? "220px" : "180px",
  height: variant === "primary" ? "300px" : "260px",
  marginTop: variant === "secondary" ? "40px" : "0",
  borderRadius: "140px",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(61, 58, 54, 0.15)",
  border: "4px solid var(--color-cream)",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, transparent 60%, rgba(61, 58, 54, 0.1) 100%)",
    zIndex: 1,
  },

  [theme.breakpoints.down("lg")]: {
    width: variant === "primary" ? "180px" : "150px",
    height: variant === "primary" ? "250px" : "220px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "270px",
    marginTop: 0,
  },
}));

export const Photo = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const IntroContent = styled(Box)(({ theme }) => ({
  flex: 1,

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "48px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-charcoal)",
  marginBottom: "16px",
  background: "linear-gradient(135deg, var(--color-charcoal) 0%, #8B4513 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

export const Tagline = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "20px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-slate)",
  marginBottom: "24px",
  fontStyle: "italic",
}));

export const AboutDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-charcoal)",
  lineHeight: 1.8,
  opacity: 0.9,

  "& + &": {
    marginTop: "16px",
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

export const DividerSymbol = styled(Typography)(() => ({
  fontSize: "24px",
  color: "var(--color-stone)",
}));

export const QuoteSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "50px 40px",
  background:
    "linear-gradient(135deg, var(--color-cream) 0%, var(--color-parchment) 100%)",
  borderRadius: "20px",
  marginBottom: "60px",
  position: "relative",
  animation: `${fadeInUp} 0.8s ease-out 0.2s both`,

  "&::before": {
    content: '"\\201C"',
    position: "absolute",
    top: "20px",
    left: "30px",
    fontSize: "80px",
    fontFamily: "var(--font-special)",
    color: "var(--color-silver)",
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

export const ExpertiseIcon = styled(Typography)(() => ({
  fontSize: "40px",
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

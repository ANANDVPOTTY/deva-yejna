import { styled } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";
import { staggerFadeIn } from "../../../styles/animations";

export const LeftSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const ContactInfoCard = styled(Box)(({ theme }) => ({
  background: "var(--color-onyx)",
  borderRadius: "20px",
  padding: "36px 32px",
  color: "var(--color-off-white)",
  boxShadow: "0 8px 32px rgba(58, 47, 35, 0.12)",

  [theme.breakpoints.down("sm")]: {
    padding: "28px 20px",
    borderRadius: "16px",
  },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "26px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-off-white)",
  marginBottom: "28px",
  paddingBottom: "16px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
}));

export const InfoSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "delay",
})(({ delay = 0 }) => ({
  marginBottom: "20px",
  paddingBottom: "20px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
  opacity: 0,
  animation: `${staggerFadeIn} 0.5s ease-out forwards`,
  animationDelay: `${300 + delay}ms`,

  "&:last-of-type": {
    marginBottom: 0,
    paddingBottom: 0,
    borderBottom: "none",
  },
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  color: "var(--color-vanilla)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  marginBottom: "8px",
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 0.75)",
  lineHeight: 1.7,
}));

export const InfoLink = styled(Link)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-off-white)",
  textDecoration: "none",
  display: "inline-block",
  marginTop: "4px",
  transition: "all 0.25s ease",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: "0%",
    height: "1px",
    backgroundColor: "var(--color-vanilla)",
    transition: "width 0.25s ease",
  },

  "&:hover": {
    color: "var(--color-vanilla)",

    "&::after": {
      width: "100%",
    },
  },
}));

export const SocialSection = styled(Box)(() => ({
  marginTop: "24px",
}));

export const SocialTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  color: "var(--color-vanilla)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  marginBottom: "14px",
}));

export const SocialIconsWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));

export const SocialIconButton = styled(Box)(() => ({
  width: "38px",
  height: "38px",
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.25s ease",

  "& svg": {
    color: "var(--color-off-white)",
    fontSize: "18px",
    transition: "transform 0.25s ease",
  },

  "&:hover": {
    backgroundColor: "var(--color-vanilla)",

    "& svg": {
      color: "var(--color-charcoal)",
      transform: "scale(1.1)",
    },
  },
}));

export const MapContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "220px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(58, 47, 35, 0.08)",
  border: "1px solid rgba(58, 47, 35, 0.08)",

  "& iframe": {
    width: "100%",
    height: "100%",
    border: "none",
  },

  [theme.breakpoints.down("sm")]: {
    height: "180px",
    borderRadius: "12px",
  },
}));

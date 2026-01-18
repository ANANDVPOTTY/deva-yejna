import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";
import { fadeIn } from "../../styles/animations";

export const HomeWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 80px)",
}));

export const HomeContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1400px",
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: "80px",
  margin: "0 auto",
  padding: "80px 24px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "40px",
    padding: "40px 24px",
  },
}));

export const ImageSection = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  position: "relative",
  width: "380px",
  height: "500px",

  [theme.breakpoints.down("lg")]: {
    width: "320px",
    height: "420px",
  },

  [theme.breakpoints.down("md")]: {
    width: "280px",
    height: "360px",
  },
}));

export const CarouselImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "isActive",
})(({ isActive }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "200px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  opacity: isActive ? 1 : 0,
  transition: "opacity 1.5s ease-in-out",
  animation: isActive ? `${fadeIn} 1.5s ease-in-out` : "none",
}));

export const TextSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const MainText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "52px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-charcoal)",
  lineHeight: 1.2,
  marginBottom: "32px",
  background: "linear-gradient(135deg, var(--color-charcoal) 0%, #8B4513 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",

  [theme.breakpoints.down("md")]: {
    marginBottom: "24px",
  },
}));

export const SubText = styled(Typography)(({ theme }) => ({
  maxWidth: "520px",
  ...responsiveFont(theme, "20px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-charcoal)",
  lineHeight: 1.8,
  opacity: 0.85,

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    margin: "0 auto",
  },
}));

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

export const CardContainer = styled(Box)(() => ({
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: "#1a1a1a",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  aspectRatio: "1 / 1",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 40px rgba(139, 69, 19, 0.25)",
  },

  "&:hover .card-overlay": {
    opacity: 1,
  },

  "&:hover .card-image": {
    transform: "scale(1.05)",
  },
}));

export const CardImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.4s ease",
}));

export const CardVideo = styled("div")(() => ({
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.4s ease",
}));

export const PlayIconWrapper = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "rgba(139, 69, 19, 0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.3s ease, transform 0.3s ease",

  "&:hover": {
    backgroundColor: "#8B4513",
    transform: "translate(-50%, -50%) scale(1.1)",
  },
}));

export const CardOverlay = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "20px",
  background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
  opacity: 0,
  transition: "opacity 0.3s ease",
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "14px"),
  fontWeight: 500,
  color: "#fff",
  lineHeight: 1.4,
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
}));

export const CardCategory = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "12px"),
  fontWeight: 600,
  color: "#D2691E",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "4px",
}));

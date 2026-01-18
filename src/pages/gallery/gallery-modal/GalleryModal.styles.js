import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
import { modalFadeIn, modalScaleIn } from "../../../styles/animations";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

export const ModalOverlay = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1300,
  padding: "40px",
  animation: `${modalFadeIn} 0.3s ease`,
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "90vw",
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  animation: `${modalScaleIn} 0.3s ease`,

  [theme.breakpoints.down("md")]: {
    maxWidth: "95vw",
    padding: "0 10px",
  },
}));

export const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "-50px",
  right: "-10px",
  color: "#fff",
  backgroundColor: "rgba(139, 69, 19, 0.8)",
  padding: "12px",
  transition: "background-color 0.3s ease, transform 0.3s ease",

  "&:hover": {
    backgroundColor: "#8B4513",
    transform: "rotate(90deg)",
  },
}));

export const ModalImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "75vh",
  objectFit: "contain",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",

  [theme.breakpoints.down("md")]: {
    maxHeight: "60vh",
  },
}));

export const ModalVideo = styled("video")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "75vh",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",

  [theme.breakpoints.down("md")]: {
    maxHeight: "60vh",
  },
}));

export const ModalInfo = styled(Box)(() => ({
  marginTop: "24px",
  textAlign: "center",
  maxWidth: "600px",
}));

export const ModalCategory = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "14px"),
  fontWeight: 600,
  color: "#D2691E",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginBottom: "8px",
}));

export const ModalDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "18px"),
  fontWeight: 400,
  color: "#fff",
  lineHeight: 1.6,
}));

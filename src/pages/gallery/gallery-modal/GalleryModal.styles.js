import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

export const ModalOverlay = styled(Box)(({ theme }) => ({
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
  padding: "20px",

  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "95vw",
  maxHeight: "calc(100vh - 40px)",
  width: "auto",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100vw",
    maxHeight: "calc(100vh - 24px)",
  },
}));

export const ModalHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  marginBottom: "12px",
  flexShrink: 0,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.8)",
  backgroundColor: "transparent",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "4px",
  padding: "8px",
  width: "36px",
  height: "36px",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
  },

  "& svg": {
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "32px",
    height: "32px",
    padding: "6px",

    "& svg": {
      fontSize: "18px",
    },
  },
}));

export const MediaWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  minHeight: 0,
  width: "100%",
}));

export const ModalImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "calc(100vh - 200px)",
  width: "auto",
  height: "auto",
  objectFit: "contain",
  borderRadius: "8px",

  [theme.breakpoints.down("sm")]: {
    maxHeight: "calc(100vh - 160px)",
    borderRadius: "4px",
  },
}));

export const ModalVideo = styled("video")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "calc(100vh - 200px)",
  width: "auto",
  height: "auto",
  borderRadius: "8px",

  [theme.breakpoints.down("sm")]: {
    maxHeight: "calc(100vh - 160px)",
    borderRadius: "4px",
  },
}));

export const ModalInfo = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  textAlign: "center",
  maxWidth: "600px",
  padding: "0 16px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "16px",
    maxWidth: "100%",
  },
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

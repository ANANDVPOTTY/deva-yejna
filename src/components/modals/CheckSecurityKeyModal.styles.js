import { styled } from "@mui/material/styles";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { responsiveFont } from "../font/ResponsiveFonts.styles";

export const ModalOverlay = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1300,
  padding: "20px",
}));

export const ModalContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "32px",
  maxWidth: "420px",
  width: "100%",
  position: "relative",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",

  [theme.breakpoints.down("sm")]: {
    padding: "24px",
    margin: "16px",
  },
}));

export const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "6px",
  right: "4px",
  color: "var(--color-charcoal)",
  padding: "8px",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "24px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "12px",
  textAlign: "center",
}));

export const ModalDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "#666",
  marginBottom: "24px",
  textAlign: "center",
  lineHeight: 1.5,
}));

export const SecurityKeyInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "20px",

  "& .MuiOutlinedInput-root": {
    fontFamily: "var(--font-primary)",
    ...responsiveFont(theme, "16px"),
    borderRadius: "8px",

    "& fieldset": {
      borderColor: "#ddd",
    },

    "&:hover fieldset": {
      borderColor: "var(--color-charcoal)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#D2691E",
    },
  },

  "& .MuiInputLabel-root": {
    fontFamily: "var(--font-primary)",
    ...responsiveFont(theme, "14px"),

    "&.Mui-focused": {
      color: "#D2691E",
    },
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "12px 24px",
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "16px"),
  fontWeight: 600,
  textTransform: "none",
  borderRadius: "8px",
  backgroundColor: "#D2691E",
  color: "#fff",

  "&:hover": {
    backgroundColor: "#B8520F",
  },

  "&:disabled": {
    backgroundColor: "#ccc",
    color: "#666",
  },
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  color: "#d32f2f",
  marginBottom: "16px",
  textAlign: "center",
}));

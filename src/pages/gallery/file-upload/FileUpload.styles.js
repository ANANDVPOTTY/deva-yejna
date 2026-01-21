import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Select,
  TextField,
} from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

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
  borderRadius: "16px",
  padding: "32px",
  maxWidth: "520px",
  width: "100%",
  position: "relative",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  maxHeight: "90vh",
  overflowY: "auto",

  [theme.breakpoints.down("sm")]: {
    padding: "24px 20px",
    margin: "16px",
    maxHeight: "85vh",
  },
}));

export const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  color: "var(--color-charcoal)",
  padding: "8px",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "26px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "8px",
}));

export const ModalSubtitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "#666",
  marginBottom: "28px",
  lineHeight: 1.5,
}));

export const UploadArea = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDragging" && prop !== "hasFile",
})(({ isDragging, hasFile }) => ({
  border: `2px dashed ${isDragging ? "#D2691E" : hasFile ? "#4CAF50" : "#ddd"}`,
  borderRadius: "12px",
  padding: "40px 24px",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  backgroundColor: isDragging
    ? "rgba(210, 105, 30, 0.05)"
    : hasFile
    ? "rgba(76, 175, 80, 0.05)"
    : "#fafafa",
  marginBottom: "24px",

  "&:hover": {
    borderColor: "#D2691E",
    backgroundColor: "rgba(210, 105, 30, 0.03)",
  },
}));

export const UploadIcon = styled(Box)(() => ({
  marginBottom: "16px",

  "& svg": {
    fontSize: "48px",
    color: "#D2691E",
  },
}));

export const UploadText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-charcoal)",
  marginBottom: "8px",
}));

export const UploadHint = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  color: "#888",
  lineHeight: 1.5,
}));

export const FilePreviewContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  marginBottom: "24px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
  },
}));

export const FilePreviewThumbnail = styled(Box)(() => ({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  overflow: "hidden",
  flexShrink: 0,
  backgroundColor: "#e0e0e0",

  "& img, & video": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const FileInfo = styled(Box)(() => ({
  flex: 1,
  minWidth: 0,
}));

export const FileName = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-charcoal)",
  wordBreak: "break-word",
  marginBottom: "4px",
}));

export const FileSize = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  color: "#888",
}));

export const RemoveFileButton = styled(IconButton)(() => ({
  color: "#d32f2f",
  padding: "8px",

  "&:hover": {
    backgroundColor: "rgba(211, 47, 47, 0.1)",
  },
}));

export const FormField = styled(Box)(() => ({
  marginBottom: "20px",
}));

export const FieldLabel = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-charcoal)",
  marginBottom: "8px",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    fontFamily: "var(--font-primary)",
    ...responsiveFont(theme, "14px"),
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
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "14px"),
  borderRadius: "8px",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ddd",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-charcoal)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D2691E",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  marginTop: "28px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: "12px 24px",
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "16px"),
  fontWeight: 500,
  textTransform: "none",
  borderRadius: "8px",
  backgroundColor: "transparent",
  color: "var(--color-charcoal)",
  border: "1px solid #ddd",

  "&:hover": {
    backgroundColor: "#f5f5f5",
    borderColor: "#ccc",
  },
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  flex: 1,
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

export const SuccessMessage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px",
  textAlign: "center",

  "& svg": {
    fontSize: "64px",
    color: "#4CAF50",
    marginBottom: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "32px 16px",

    "& svg": {
      fontSize: "56px",
    },
  },
}));

export const SuccessTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "22px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "8px",
}));

export const SuccessDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "#666",
  marginBottom: "24px",
}));

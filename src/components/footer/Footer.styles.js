import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../font/ResponsiveFonts.styles";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 40px",
  backgroundColor: "#fff",
  borderTop: "1px solid rgba(139, 69, 19, 0.1)",
  marginTop: "auto",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
    padding: "20px 24px",
    textAlign: "center",
  },
}));

export const LogoSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  cursor: "pointer",
  transition: "opacity 0.2s ease",

  "&:hover": {
    opacity: 0.8,
  },
}));

export const FooterLogo = styled("img")(() => ({
  width: "40px",
  height: "40px",
  objectFit: "contain",
}));

export const FooterName = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-special)",
  ...responsiveFont(theme, "20px"),
  fontWeight: 600,
  color: "var(--color-charcoal)",
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "14px"),
  color: "rgba(0, 0, 0, 0.5)",
}));

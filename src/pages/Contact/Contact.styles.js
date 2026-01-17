import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";

export const ContactContainer = styled(Box)(() => ({
  padding: "60px 24px",
  maxWidth: "1400px",
  margin: "0 auto",
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "48px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "16px",
  textAlign: "center",
}));

export const ContactDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  lineHeight: 1.6,
  textAlign: "center",
  marginBottom: "48px",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
}));

export const ContactContent = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "60px",
  alignItems: "flex-start",
  justifyContent: "center",

  [theme.breakpoints.down("lg")]: {
    gap: "40px",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
}));

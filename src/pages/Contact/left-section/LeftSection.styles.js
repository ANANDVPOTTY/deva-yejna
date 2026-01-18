import { styled } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

export const LeftSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
  maxWidth: "400px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const ContactInfoCard = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, var(--color-charcoal) 0%, #5a4a3a 50%, var(--color-slate) 100%)",
  borderRadius: "24px",
  padding: "40px 32px",
  color: "var(--color-off-white)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",

  [theme.breakpoints.down("sm")]: {
    padding: "32px 24px",
  },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "32px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-off-white)",
  marginBottom: "32px",
}));

export const InfoSection = styled(Box)(() => ({
  marginBottom: "24px",
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  color: "var(--color-off-white)",
  marginBottom: "8px",
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 400,
  color: "var(--color-silver)",
  lineHeight: 1.6,
}));

export const InfoLink = styled(Link)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 400,
  color: "var(--color-vanilla)",
  textDecoration: "none",
  transition: "color 0.3s ease",
  display: "block",

  "&:hover": {
    color: "var(--color-off-white)",
  },
}));

export const SocialSection = styled(Box)(() => ({
  marginTop: "32px",
}));

export const SocialTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  color: "var(--color-off-white)",
  marginBottom: "16px",
}));

export const SocialIconsWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
}));

export const SocialIconButton = styled(Box)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "& svg": {
    color: "var(--color-off-white)",
    fontSize: "20px",
  },

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "translateY(-2px)",
  },
}));

export const MapContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "200px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",

  "& iframe": {
    width: "100%",
    height: "100%",
    border: "none",
  },

  [theme.breakpoints.down("sm")]: {
    height: "180px",
  },
}));

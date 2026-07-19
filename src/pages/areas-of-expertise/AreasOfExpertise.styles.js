import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles.jsx";
import { fadeInUp } from "../../styles/animations";

/*-------| Page Shell |-------*/
export const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px 80px",
  animation: `${fadeInUp} 0.7s ease-out`,

  [theme.breakpoints.down("md")]: {
    padding: "24px 20px 64px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "16px 16px 48px",
  },
}));

export const BackLink = styled(Box)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  padding: "4px 10px",
  borderRadius: "999px",
  border: "1px solid var(--color-ui-border)",
  backgroundColor: "var(--color-white)",
  cursor: "pointer",
  transition:
    "color .25s ease, border-color .25s ease, background-color .25s ease",

  "& svg": {
    transition: "transform .25s ease",
  },

  "&:hover": {
    color: "var(--color-saffron-dark)",
    borderColor: "var(--color-turmeric)",
    backgroundColor: "var(--color-parchment)",
  },

  "&:hover svg:first-of-type": {
    transform: "translateX(-2px)",
  },

  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
  },
}));

/*-------| Page Heading |-------*/
export const PageHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "32px",
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "48px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "12px",
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  lineHeight: 1.6,
  maxWidth: "600px",
  margin: "0 auto",
  marginBottom: "20px",
}));

export const GoldDivider = styled(Box)(() => ({
  width: "120px",
  height: "2px",
  borderRadius: "2px",
  background:
    "linear-gradient(90deg, transparent, #ffc04d 20%, #e67300 50%, #ffc04d 80%, transparent)",
  opacity: 0.7,
  marginBottom: "40px",
}));

/*-------| Areas Layout |-------*/
export const AreasWrapper = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  paddingTop: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "80px",

  [theme.breakpoints.down("md")]: {
    paddingTop: "32px",
    gap: "56px",
  },

  [theme.breakpoints.down("sm")]: {
    paddingTop: "24px",
    gap: "44px",
  },
}));

export const AreaBlock = styled(Box)(({ theme }) => ({
  scrollMarginTop: "90px",
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
  gap: "44px",
  alignItems: "center",

  "&:nth-of-type(even)": {
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
  },

  "&:nth-of-type(even) > :first-of-type": {
    order: 2,
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "28px",

    "&:nth-of-type(even)": {
      gridTemplateColumns: "1fr",
    },

    "&:nth-of-type(even) > :first-of-type": {
      order: 0,
    },
  },
}));

/*-------| Area Visual (image) |-------*/
export const AreaVisual = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "340px",
  borderRadius: "20px",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "0 18px 50px rgba(61, 58, 54, 0.18)",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(30, 27, 24, 0.55) 0%, rgba(30, 27, 24, 0.10) 55%, rgba(30, 27, 24, 0.05) 100%)",
  },

  [theme.breakpoints.down("md")]: {
    minHeight: "260px",
  },
}));

/*-------| Area Body (content) |-------*/
export const AreaBody = styled(Box)(() => ({
  minWidth: 0,
}));

export const AreaHeading = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "36px"),
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  marginBottom: "12px",
}));

export const AreaDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  color: "var(--color-slate)",
  fontFamily: "var(--font-primary)",
  lineHeight: 1.7,
  marginBottom: "26px",
}));

export const ServiceGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "14px",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ServiceItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "var(--color-white)",
  border: "1px solid var(--color-pearl)",
  boxShadow: "0 4px 16px rgba(61, 58, 54, 0.05)",
  transition:
    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 10px 26px rgba(61, 58, 54, 0.12)",
    borderColor: "var(--color-saffron-light)",
  },
}));

export const ServiceNumber = styled(Box)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  flexShrink: 0,
  width: "34px",
  height: "34px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "transparent",
  border: "2px solid var(--color-saffron)",
  color: "var(--color-saffron-dark)",
  fontFamily: "var(--font-primary)",
  fontWeight: 700,
}));

export const ServiceName = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  lineHeight: 1.4,
}));

/*-------| Om Divider (after each area) |-------*/
export const AreaDivider = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  width: "100%",
  maxWidth: "460px",
  margin: "28px auto 0",

  [theme.breakpoints.down("sm")]: {
    gap: "12px",
    maxWidth: "300px",
  },
}));

export const DividerLine = styled(Box)(() => ({
  flex: 1,
  height: "2px",
  borderRadius: "2px",
  opacity: 0.7,
  background:
    "linear-gradient(90deg, transparent, #ffc04d 55%, #e67300 100%)",

  "&:last-of-type": {
    background:
      "linear-gradient(90deg, #e67300 0%, #ffc04d 45%, transparent 100%)",
  },
}));

export const OmSymbol = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "28px"),
  flexShrink: 0,
  lineHeight: 1,
  color: "var(--color-saffron-dark)",
  fontFamily: "var(--font-special)",
}));

/*-------| Show More / Show Less Toggle Tile |-------*/
export const ServiceToggleTile = styled("button")(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "var(--color-off-white)",
  border: "1px dashed var(--color-saffron-light)",
  color: "var(--color-saffron-dark)",
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  cursor: "pointer",
  transition:
    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 10px 26px rgba(61, 58, 54, 0.12)",
    borderColor: "var(--color-saffron)",
    backgroundColor: "var(--color-parchment)",
  },

  "&:focus-visible": {
    outline: "2px solid var(--color-saffron)",
    outlineOffset: "3px",
  },
}));

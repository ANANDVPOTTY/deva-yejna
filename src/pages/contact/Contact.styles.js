import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";

// Brand gradient from the requested design (blue → purple)
const BRAND_GRADIENT =
  "linear-gradient(to top right, #1325e8 -5%, #8f10b7 100%)";

/*-------| Contact section (grey backdrop so the white card pops) |-------*/
export const ContactSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#f1f1f1",
  padding: "100px 24px",

  [theme.breakpoints.down("md")]: {
    padding: "60px 16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 12px",
  },
}));

/*-------| White card that holds the form, social strip & info box |-------*/
export const ContactInner = styled(Box)(() => ({
  position: "relative",
  maxWidth: "1000px",
  margin: "0 auto",
  backgroundColor: "var(--color-white)",
  borderRadius: "25px",
  boxShadow: "20px 22px 44px rgba(58, 47, 35, 0.16)",
  overflow: "hidden",
}));

/*-------| Left form area — right padding reserves space for the info box |-------*/
export const FormArea = styled(Box)(({ theme }) => ({
  padding: "60px 340px 70px 90px",

  [theme.breakpoints.down("lg")]: {
    padding: "60px 300px 70px 60px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "44px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "32px 22px",
  },
}));

export const FormHeading = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "40px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  letterSpacing: "1px",
  marginBottom: "10px",
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  letterSpacing: "0.5px",
  marginBottom: "34px",
}));

export const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
}));

// Shared underline-input styling for the text fields and text areas
const fieldBase = (theme) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  border: "none",
  borderBottom: "1px solid var(--color-ui-border)",
  padding: "12px 4px",
  marginBottom: "24px",
  backgroundColor: "transparent",
  color: "var(--color-charcoal)",
  letterSpacing: "0.5px",

  "&::placeholder": {
    color: "var(--color-stone)",
    letterSpacing: "1px",
  },
  "&:focus": {
    outline: "none",
    borderBottom: "2px solid #1325e8",
  },
});

export const FormInput = styled("input")(({ theme }) => fieldBase(theme));

export const FormTextarea = styled("textarea")(({ theme }) => ({
  ...fieldBase(theme),
  resize: "vertical",
  minHeight: "96px",
}));

export const SubmitButton = styled("button")(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  background: BRAND_GRADIENT,
  border: "none",
  color: "var(--color-white)",
  padding: "14px 15px",
  width: "100%",
  marginTop: "12px",
  borderRadius: "35px",
  cursor: "pointer",
  letterSpacing: "2px",
  transition: "opacity 0.2s ease, transform 0.2s ease",

  "&:hover": {
    opacity: 0.92,
    transform: "translateY(-1px)",
  },
  "&:disabled": {
    opacity: 0.6,
    cursor: "default",
    transform: "none",
  },
}));

export const SuccessNote = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "#8f10b7",
  fontWeight: 600,
  letterSpacing: "0.5px",
  marginTop: "16px",
  textAlign: "center",
}));

/*-------| Thin full-height gradient strip with social icons at the bottom |-------*/
export const SocialStrip = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "60px",
  zIndex: 1,
  background: BRAND_GRADIENT,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 0 26px",
  gap: "20px",

  [theme.breakpoints.down("md")]: {
    position: "static",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: "18px",
    gap: "28px",
  },
}));

export const SocialLink = styled("a")(() => ({
  color: "var(--color-white)",
  display: "flex",
  transition: "transform 0.2s ease",

  "& svg": {
    fontSize: "20px",
  },
  "&:hover": {
    transform: "scale(1.15)",
  },
}));

/*-------| Dark "Contact Info" box, flush to the card's right edge |-------*/
export const ContactInfoBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "56px",
  right: 0,
  zIndex: 2,
  width: "330px",
  backgroundColor: "var(--color-service-center)",
  color: "var(--color-white)",
  padding: "36px 34px",
  borderRadius: "25px 0 0 25px",

  [theme.breakpoints.down("md")]: {
    position: "static",
    width: "100%",
    borderRadius: 0,
    padding: "32px 30px",
  },
}));

export const InfoBoxTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "22px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-white)",
  letterSpacing: "1px",
  paddingBottom: "10px",
  marginBottom: "6px",
}));

export const InfoRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  margin: "24px 0",

  "& svg": {
    fontSize: "20px",
    marginRight: "14px",
    marginTop: "2px",
    flexShrink: 0,
    color: "var(--color-vanilla)",
  },
}));

export const InfoRowText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "rgba(255, 255, 255, 0.88)",
  letterSpacing: "0.5px",
  lineHeight: 1.55,
}));

/*-------| Map section below the card |-------*/
export const MapSection = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-white)",
  padding: "70px 24px",

  [theme.breakpoints.down("sm")]: {
    padding: "44px 16px",
  },
}));

export const MapInner = styled(Box)(() => ({
  maxWidth: "1000px",
  margin: "0 auto",
}));

export const MapHeading = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "28px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  textAlign: "center",
  marginBottom: "12px",
}));

export const MapText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  textAlign: "center",
  maxWidth: "640px",
  margin: "0 auto",
  lineHeight: 1.6,
}));

export const MapBind = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  borderRadius: "30px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(58, 47, 35, 0.1)",

  "& iframe": {
    width: "100%",
    height: "450px",
    border: "none",
    display: "block",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: "28px",
    borderRadius: "20px",
    "& iframe": {
      height: "320px",
    },
  },
}));

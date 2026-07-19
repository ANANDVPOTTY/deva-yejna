import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";

const BRAND_GRADIENT = "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)";

/*-------| Contact section |-------*/
export const ContactSection = styled(Box)(({ theme }) => ({
  padding: "20px 24px 80px",

  [theme.breakpoints.down("sm")]: {
    padding: "16px 0 60px",
  },
}));

/*-------| White card that holds the form, social strip & info box |-------*/
export const ContactInner = styled(Box)(() => ({
  position: "relative",
  maxWidth: "1000px",
  margin: "0 auto",
  backgroundColor: "var(--color-white)",
  borderRadius: "25px",
  border: "1px solid rgba(58, 47, 35, 0.08)",
  boxShadow: "0 16px 44px rgba(58, 47, 35, 0.14)",
  overflow: "hidden",
}));

/*-------| Page header ABOVE the card (Feeds-style heading + subtitle) |-------*/
export const PageHeader = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "0 auto 4px",
  padding: "0 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    margin: "0 auto 2px",
    padding: "0 16px",
  },
}));

export const FormHeading = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "48px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "12px",
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  lineHeight: 1.6,
  maxWidth: "600px",
  marginBottom: "20px",
}));

/*-------| Card body — holds the form, social strip & info box |-------*/
export const CardBody = styled(Box)(() => ({
  position: "relative",
}));

/*-------| Left form area — right padding reserves space for the info box |-------*/
export const FormArea = styled(Box)(({ theme }) => ({
  padding: "56px 360px 60px 60px",

  // Keep right padding >= the 330px info box so fields never slip under it
  [theme.breakpoints.down("lg")]: {
    padding: "56px 350px 60px 48px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "44px 30px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "32px 22px",
  },
}));

export const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
}));

// Shared underline-input styling for the text fields and text areas
const fieldBase = (theme) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  fontWeight: "500",
  width: "100%",
  boxSizing: "border-box",
  border: "none",
  borderBottom: "1px solid var(--color-ui-border)",
  padding: "12px 4px",
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

// Red underline when the field has a validation error
const fieldErrorState = {
  borderBottomColor: "#d32f2f",
  "&:focus": {
    borderBottom: "2px solid #d32f2f",
  },
};

export const FormInput = styled("input", {
  shouldForwardProp: (prop) => prop !== "hasError",
})(({ theme, hasError }) => ({
  ...fieldBase(theme),
  ...(hasError ? fieldErrorState : {}),
}));

export const FormTextarea = styled("textarea", {
  shouldForwardProp: (prop) => prop !== "hasError",
})(({ theme, hasError }) => ({
  ...fieldBase(theme),
  resize: "vertical",
  minHeight: "96px",
  ...(hasError ? fieldErrorState : {}),
}));

// Wraps each field + its error message
export const FieldGroup = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "24px",
}));

export const FieldError = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  color: "#d32f2f",
  marginTop: "6px",
  letterSpacing: "0.3px",
}));

export const SubmitButton = styled("button")(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  backgroundColor: "#1976d2",
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
  top: "60px",
  right: 0,
  zIndex: 2,
  width: "330px",
  backgroundColor: "rgba(28, 26, 24, 0.6)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.22)",
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
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  color: "rgba(255, 255, 255, 0.88)",
  letterSpacing: "0.5px",
  lineHeight: 1.55,
}));

/*-------| Map section below the card |-------*/
export const MapSection = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-white)",
  padding: "20px 24px",

  [theme.breakpoints.down("sm")]: {
    padding: "14px 16px",
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

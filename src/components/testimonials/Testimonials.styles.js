import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../font/ResponsiveFonts.styles";
import { scrollTopToBottom, scrollBottomToTop } from "../../styles/animations";

/*-------| Section Wrapper |-------*/
export const TestimonialSectionWrapper = styled(Box)(() => ({
  width: "100%",
  background:
    "linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(224, 224, 224, 1) 42%, rgba(255, 255, 255, 1) 100%)",
  padding: "80px 16px",
}));

/*-------| Container |-------*/
export const TestimonialContainer = styled(Box)(() => ({
  maxWidth: "1400px",
  margin: "0 auto",
}));

/*-------| Header Section |-------*/
export const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "64px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "48px",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "40px",
  },
}));

/*-------| Main Title |-------*/
export const MainTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "52px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  marginBottom: "16px",
  background:
    "linear-gradient(to right, var(--color-service-blue), var(--color-maroon-light))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  letterSpacing: "-0.5px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "12px",
  },
}));

/*-------| Subtitle |-------*/
export const SubTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "20px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-ash)",
  lineHeight: 1.6,

  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.5,
  },
}));

/*-------| Columns Grid |-------*/
export const ColumnsGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "columns",
})(({ columns = 1 }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: "24px",
}));

/*-------| Scroll Column Wrapper |-------*/
export const ScrollColumnWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isPaused" && prop !== "invertMask",
})(({ invertMask }) => ({
  overflow: "hidden",
  height: "640px",
  borderRadius: "24px",
  // maskImage: invertMask
  //   ? "linear-gradient(to top, transparent, white 20%, white 80%, transparent)"
  //   : "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)",
  // WebkitMaskImage: invertMask
  //   ? "linear-gradient(to top, transparent, white 20%, white 80%, transparent)"
  //   : "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)",

  "&:hover .scroll-content": {
    animationPlayState: "paused",
  },
}));

/*-------| Scroll Content - Top to Bottom |-------*/
export const ScrollContentT2B = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isPaused",
})(({ isPaused }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  animation: `${scrollTopToBottom} 60s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

/*-------| Scroll Content - Bottom to Top |-------*/
export const ScrollContentB2T = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isPaused",
})(({ isPaused }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  animation: `${scrollBottomToTop} 60s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

/*-------| Testimonial Card |-------*/
export const TestimonialCard = styled(Box)(() => ({
  backgroundColor: "var(--color-onyx)",
  border: "1px solid var(--color-charcoal)",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },
}));

/*-------| Card Header |-------*/
export const CardHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
}));

/*-------| Emoji Avatar |-------*/
export const EmojiAvatar = styled(Typography)(() => ({
  fontSize: "32px",
  marginRight: "12px",
}));

/*-------| User Info |-------*/
export const UserInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

/*-------| User Name |-------*/
export const UserName = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  color: "var(--color-white)",
}));

/*-------| User Role |-------*/
export const UserRole = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-stone)",
}));

/*-------| Star Rating |-------*/
export const StarRating = styled(Box)(() => ({
  marginBottom: "8px",
  color: "var(--color-turmeric)",
  fontSize: "16px",
  letterSpacing: "2px",
}));

/*-------| Review Text |-------*/
export const ReviewText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-silver)",
  fontStyle: "italic",
  lineHeight: 1.6,
}));

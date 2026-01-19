import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../font/ResponsiveFonts.styles";
import { fadeInUp, scaleIn } from "../../styles/animations";

export const ServicesSectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "80px 24px",

  [theme.breakpoints.down("lg")]: {
    padding: "70px 24px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "60px 20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 16px",
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "80px",
  animation: `${fadeInUp} 0.6s ease-out`,

  [theme.breakpoints.down("lg")]: {
    marginBottom: "60px",
  },

  [theme.breakpoints.down("md")]: {
    marginBottom: "48px",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "36px",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "42px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-charcoal)",
  marginBottom: "12px",
}));

export const TitleUnderline = styled(Box)(() => ({
  width: "80px",
  height: "4px",
  backgroundColor: "var(--color-service-yellow)",
  margin: "0 auto 24px",
  borderRadius: "2px",
}));

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: 1.7,
  textAlign: "center",
}));

export const ServicesContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
  maxWidth: "1400px",
  margin: "0 auto",

  [theme.breakpoints.down("lg")]: {
    gap: "2.5rem",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "3rem",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "2.5rem",
  },
}));

export const LeftServices = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  flex: 1,
  maxWidth: "320px",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "280px",
    gap: "36px",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    width: "100%",
    order: 1,
    gap: "28px",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "24px",
  },
}));

export const RightServices = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  flex: 1,
  maxWidth: "320px",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "280px",
    gap: "36px",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    width: "100%",
    order: 3,
    gap: "28px",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "24px",
  },
}));

export const ServiceItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "align" && prop !== "isActive" && prop !== "index",
})(({ theme, align, isActive, index }) => ({
  textAlign: align,
  cursor: "pointer",
  transition: "transform 0.3s ease, opacity 0.3s ease",
  transform: isActive ? "scale(1.03)" : "scale(1)",
  opacity: isActive ? 1 : 0.85,
  animation: `${fadeInUp} 0.5s ease-out`,
  animationDelay: `${index * 0.1}s`,
  animationFillMode: "both",
  maxWidth: "100%",

  "&:hover": {
    opacity: 1,
  },

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    maxWidth: "450px",
    opacity: 1,
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    padding: "0 8px",
  },
}));

export const ServiceTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isActive",
})(({ theme, isActive }) => ({
  ...responsiveFont(theme, "20px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 700,
  color: isActive ? "var(--color-service-yellow)" : "var(--color-charcoal)",
  marginBottom: "10px",
  transition: "color 0.3s ease",
  letterSpacing: "0.5px",
}));

export const ServiceDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  color: "var(--color-slate)",
  lineHeight: 1.7,
}));

export const IconsContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "480px",
  height: "480px",
  flexShrink: 0,
  animation: `${scaleIn} 0.6s ease-out`,
  animationDelay: "0.2s",
  animationFillMode: "both",

  [theme.breakpoints.down("lg")]: {
    width: "400px",
    height: "400px",
  },

  [theme.breakpoints.down("md")]: {
    width: "380px",
    height: "380px",
    order: 2,
  },

  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "320px",
  },

  [theme.breakpoints.down(400)]: {
    width: "280px",
    height: "280px",
  },
}));

export const CenterImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  objectFit: "cover",
  zIndex: 2,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
  outline: "4px solid var(--color-maroon)",

  [theme.breakpoints.down("lg")]: {
    width: "180px",
    height: "180px",
  },

  [theme.breakpoints.down("md")]: {
    width: "160px",
    height: "160px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "140px",
    height: "140px",
  },

  [theme.breakpoints.down(400)]: {
    width: "120px",
    height: "120px",
  },
}));

const getIconPosition = (index, containerSize, iconSize) => {
  const radius = containerSize * 0.42;
  const centerOffset = containerSize / 2;
  const halfIcon = iconSize / 2;

  const positions = [
    { angle: -60 },
    { angle: -180 },
    { angle: -120 },
    { angle: 60 },
    { angle: 0 },
    { angle: 120 },
  ];

  const { angle } = positions[index];
  const radians = (angle * Math.PI) / 180;

  const x = centerOffset + radius * Math.cos(radians) - halfIcon;
  const y = centerOffset - radius * Math.sin(radians) - halfIcon;

  return { left: `${x}px`, top: `${y}px` };
};

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "index" && prop !== "color" && prop !== "isActive",
})(({ theme, index, color, isActive }) => {
  const xlSize = 80;
  const lgSize = 72;
  const mdSize = 72;
  const smSize = 64;
  const xsSize = 56;

  const xlPos = getIconPosition(index, 480, xlSize);
  const lgPos = getIconPosition(index, 400, lgSize);
  const mdPos = getIconPosition(index, 380, mdSize);
  const smPos = getIconPosition(index, 320, smSize);
  const xsPos = getIconPosition(index, 280, xsSize);

  return {
    position: "absolute",
    width: `${xlSize}px`,
    height: `${xlSize}px`,
    borderRadius: "50%",
    backgroundColor: color,
    border: isActive
      ? "3px solid var(--color-white)"
      : "3px solid rgba(255, 255, 255, 0.6)",
    outline: isActive
      ? "3px solid var(--color-service-yellow)"
      : "3px solid rgba(255, 255, 255, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
    zIndex: 3,
    boxShadow: isActive
      ? "0 8px 24px rgba(0, 0, 0, 0.25)"
      : "0 4px 12px rgba(0, 0, 0, 0.12)",
    transform: isActive ? "scale(1.1)" : "scale(1)",
    animation: `${scaleIn} 0.4s ease-out`,
    animationDelay: `${0.3 + index * 0.08}s`,
    animationFillMode: "both",
    ...xlPos,

    "& svg": {
      width: "40px",
      height: "40px",
      color: "var(--color-white)",
      flexShrink: 0,
    },

    "&:hover": {
      transform: "scale(1.1)",
      border: "3px solid rgba(255, 255, 255, 1)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
    },

    [theme.breakpoints.down("lg")]: {
      width: `${lgSize}px`,
      height: `${lgSize}px`,
      ...lgPos,

      "& svg": {
        width: "36px",
        height: "36px",
      },
    },

    [theme.breakpoints.down("md")]: {
      width: `${mdSize}px`,
      height: `${mdSize}px`,
      ...mdPos,

      "& svg": {
        width: "36px",
        height: "36px",
      },
    },

    [theme.breakpoints.down("sm")]: {
      width: `${smSize}px`,
      height: `${smSize}px`,
      ...smPos,

      "& svg": {
        width: "32px",
        height: "32px",
      },
    },

    [theme.breakpoints.down(400)]: {
      width: `${xsSize}px`,
      height: `${xsSize}px`,
      ...xsPos,

      "& svg": {
        width: "28px",
        height: "28px",
      },
    },
  };
});

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
  marginBottom: "60px",
  animation: `${fadeInUp} 0.6s ease-out`,

  [theme.breakpoints.down("md")]: {
    marginBottom: "50px",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "40px",
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
  gap: "60px",
  maxWidth: "1200px",
  margin: "0 auto",

  [theme.breakpoints.down("lg")]: {
    gap: "40px",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "50px",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "40px",
  },
}));

export const LeftServices = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  flex: 1,
  maxWidth: "300px",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "260px",
    gap: "40px",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
    order: 1,
    gap: "32px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    gap: "28px",
  },
}));

export const RightServices = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  flex: 1,
  maxWidth: "300px",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "260px",
    gap: "40px",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
    order: 3,
    gap: "32px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    gap: "28px",
  },
}));

export const ServiceItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "align" && prop !== "isActive" && prop !== "index",
})(({ theme, align, isActive, index }) => ({
  textAlign: align,
  cursor: "pointer",
  transition: "transform 0.3s ease",
  transform: isActive ? "scale(1.02)" : "scale(1)",
  animation: `${fadeInUp} 0.5s ease-out`,
  animationDelay: `${index * 0.1}s`,
  animationFillMode: "both",

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
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
  width: "380px",
  height: "380px",
  flexShrink: 0,
  animation: `${scaleIn} 0.6s ease-out`,
  animationDelay: "0.2s",
  animationFillMode: "both",

  [theme.breakpoints.down("lg")]: {
    width: "340px",
    height: "340px",
  },

  [theme.breakpoints.down("md")]: {
    width: "340px",
    height: "340px",
    order: 2,
  },

  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "300px",
  },

  [theme.breakpoints.down(400)]: {
    width: "260px",
    height: "260px",
  },
}));

export const ShriChakraImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  objectFit: "cover",
  // border: "4px solid var(--color-service-border)",
  zIndex: 2,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",

  [theme.breakpoints.down("lg")]: {
    width: "140px",
    height: "140px",
  },

  [theme.breakpoints.down("md")]: {
    width: "140px",
    height: "140px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "120px",
    height: "120px",
    border: "3px solid var(--color-service-border)",
  },

  [theme.breakpoints.down(400)]: {
    width: "100px",
    height: "100px",
  },
}));

const getIconPosition = (index, containerSize, iconSize) => {
  const radius = containerSize * 0.4;
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
  const xlSize = 68;
  const lgSize = 62;
  const mdSize = 62;
  const smSize = 56;
  const xsSize = 48;

  const xlPos = getIconPosition(index, 380, xlSize);
  const lgPos = getIconPosition(index, 340, lgSize);
  const mdPos = getIconPosition(index, 340, mdSize);
  const smPos = getIconPosition(index, 300, smSize);
  const xsPos = getIconPosition(index, 260, xsSize);

  return {
    position: "absolute",
    width: `${xlSize}px`,
    height: `${xlSize}px`,
    borderRadius: "50%",
    backgroundColor: color,
    border: "4px solid var(--color-white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 3,
    boxShadow: isActive
      ? "0 10px 30px rgba(0, 0, 0, 0.3)"
      : "0 6px 20px rgba(0, 0, 0, 0.15)",
    transform: isActive ? "scale(1.15)" : "scale(1)",
    animation: `${scaleIn} 0.4s ease-out`,
    animationDelay: `${0.3 + index * 0.08}s`,
    animationFillMode: "both",
    ...xlPos,

    "& svg": {
      width: "32px",
      height: "32px",
      color: "var(--color-white)",
      flexShrink: 0,
    },

    "&:hover": {
      transform: "scale(1.15)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    },

    [theme.breakpoints.down("lg")]: {
      width: `${lgSize}px`,
      height: `${lgSize}px`,
      ...lgPos,

      "& svg": {
        width: "28px",
        height: "28px",
      },
    },

    [theme.breakpoints.down("md")]: {
      width: `${mdSize}px`,
      height: `${mdSize}px`,
      ...mdPos,

      "& svg": {
        width: "28px",
        height: "28px",
      },
    },

    [theme.breakpoints.down("sm")]: {
      width: `${smSize}px`,
      height: `${smSize}px`,
      border: "3px solid var(--color-white)",
      ...smPos,

      "& svg": {
        width: "26px",
        height: "26px",
      },
    },

    [theme.breakpoints.down(400)]: {
      width: `${xsSize}px`,
      height: `${xsSize}px`,
      ...xsPos,

      "& svg": {
        width: "22px",
        height: "22px",
      },
    },
  };
});

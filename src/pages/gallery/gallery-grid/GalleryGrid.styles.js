import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";
import { gridItemFadeIn } from "../../../styles/animations";

export const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "20px",

  [theme.breakpoints.down("xl")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "12px",
  },
}));

export const NoResultsContainer = styled(Box)(() => ({
  gridColumn: "1 / -1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 20px",
  textAlign: "center",
}));

export const NoResultsText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "18px"),
  color: "var(--color-charcoal)",
  opacity: 0.7,
  marginTop: "16px",
}));

export const GridItem = styled(Box)(({ index }) => ({
  animation: `${gridItemFadeIn} 0.4s ease-out forwards`,
  animationDelay: `${Math.min(index * 0.05, 0.5)}s`,
  opacity: 0,
}));

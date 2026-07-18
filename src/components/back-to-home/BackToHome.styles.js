import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { responsiveFont } from "../font/ResponsiveFonts.styles";

export const BackNav = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  // backgroundColor: "var(--color-off-white)",
}));

export const BackNavInner = styled("div")(({ theme }) => ({
  maxWidth: "1400px",
  width: "100%",
  padding: "16px 24px",
  [theme.breakpoints.down("sm")]: {
    padding: "12px 16px 0",
  },
}));

export const BackButton = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  textDecoration: "none",
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "12px"),
  fontWeight: 600,
  padding: "4px 10px",
  borderRadius: "999px",
  border: "1px solid var(--color-ui-border)",
  backgroundColor: "var(--color-white)",
  transition:
    "color .25s ease, border-color .25s ease, background-color .25s ease",

  "& svg": { transition: "transform .25s ease" },

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

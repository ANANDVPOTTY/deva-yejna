import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const BackNav = styled("div")(() => ({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "16px 24px",
}));

export const BackButton = styled(Link)(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  textDecoration: "none",
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-primary)",
  fontSize: "12px",
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

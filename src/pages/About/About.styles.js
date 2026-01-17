import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const AboutContainer = styled(Box)(() => ({
  padding: "60px 24px",
  maxWidth: "1400px",
  margin: "0 auto",
}));

export const AboutTitle = styled(Typography)(() => ({
  fontSize: "48px",
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "24px",
}));

export const AboutDescription = styled(Typography)(() => ({
  fontSize: "18px",
  fontFamily: "var(--font-primary)",
  color: "var(--color-charcoal)",
  lineHeight: 1.6,
}));

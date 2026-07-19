import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RightSectionContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  backgroundColor: "var(--color-white)",
  borderRadius: "20px",
  padding: "36px 32px",
  border: "1px solid var(--color-ui-border)",
  boxShadow: "0 4px 24px rgba(58, 47, 35, 0.06)",

  [theme.breakpoints.down("sm")]: {
    padding: "28px 20px",
    borderRadius: "16px",
  },
}));

// Wrapper for the embedded Google Form iframe
export const GoogleFormFrame = styled("iframe")(() => ({
  width: "100%",
  minHeight: "1148px",
  border: "none",
  display: "block",
  borderRadius: "12px",
}));

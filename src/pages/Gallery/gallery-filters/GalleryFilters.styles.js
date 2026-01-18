import { styled } from "@mui/material/styles";
import { Box, TextField, Select, Switch, Typography } from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

export const FiltersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "20px",
  marginBottom: "40px",
  padding: "24px",
  backgroundColor: "rgba(139, 69, 19, 0.05)",
  borderRadius: "16px",
  border: "1px solid rgba(139, 69, 19, 0.1)",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const SearchField = styled(TextField)(() => ({
  flex: "1 1 300px",
  maxWidth: "400px",
  "& .MuiOutlinedInput-root": {
    fontFamily: "var(--font-primary)",
    backgroundColor: "#fff",
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "rgba(139, 69, 19, 0.2)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(139, 69, 19, 0.4)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8B4513",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "var(--font-primary)",
    color: "var(--color-charcoal)",
    "&.Mui-focused": {
      color: "#8B4513",
    },
  },
}));

export const FilterSelect = styled(Select)(() => ({
  minWidth: "180px",
  fontFamily: "var(--font-primary)",
  backgroundColor: "#fff",
  borderRadius: "12px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(139, 69, 19, 0.2)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(139, 69, 19, 0.4)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8B4513",
  },
}));

export const SwitchContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
}));

export const SwitchWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

export const SwitchLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "14px"),
  fontWeight: 500,
  color: "var(--color-charcoal)",
}));

export const StyledSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#8B4513",
    "&:hover": {
      backgroundColor: "rgba(139, 69, 19, 0.08)",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#8B4513",
  },
}));

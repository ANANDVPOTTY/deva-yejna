import { styled } from "@mui/material/styles";
import { Box, TextField, Select, Button } from "@mui/material";

/* ================= Container ================= */

export const FiltersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "22px 26px",
  marginBottom: "32px",

  backgroundColor: "var(--color-off-white)",
  borderRadius: "14px",
  border: "1px solid var(--color-ui-border)",

  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

/* ================= Search ================= */

export const SearchField = styled(TextField)(() => ({
  flex: "1 1 280px",

  "& .MuiOutlinedInput-root": {
    height: "42px",
    borderRadius: "10px",
    backgroundColor: "var(--color-white)",
    fontFamily: "var(--font-primary)",

    "& fieldset": {
      borderColor: "var(--color-ui-border)",
    },

    "&:hover fieldset": {
      borderColor: "var(--color-stone)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "var(--color-slate)",
    },

    "& svg": {
      color: "var(--color-slate)",
      fontSize: "20px",
    },
  },
}));

/* ================= Select ================= */

export const FilterSelect = styled(Select)(() => ({
  height: "42px",
  minWidth: "180px",
  borderRadius: "10px",
  backgroundColor: "var(--color-white)",
  fontFamily: "var(--font-primary)",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-ui-border)",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-stone)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-slate)",
  },

  "& .MuiSelect-icon": {
    color: "var(--color-slate)",
  },
}));

/* ================= Media Segmented Control ================= */

export const MediaButtonsContainer = styled(Box)(() => ({
  display: "flex",
  backgroundColor: "var(--color-white)",
  border: "1px solid var(--color-ui-border)",
  borderRadius: "10px",
  overflow: "hidden",
}));

export const MediaButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  fontFamily: "var(--font-primary)",
  textTransform: "none",
  fontSize: "14px",
  padding: "8px 14px",
  minWidth: "100px",
  borderRadius: "0",

  display: "flex",
  alignItems: "center",
  gap: "6px",

  color: active ? "var(--color-ink)" : "var(--color-slate)",
  backgroundColor: active ? "var(--color-ui-active)" : "transparent",

  "& svg": {
    fontSize: "18px",
  },

  "&:hover": {
    backgroundColor: "var(--color-ui-hover)",
  },

  "&:not(:last-child)": {
    borderRight: "1px solid var(--color-ui-border)",
  },
}));

/* ================= Clear Button ================= */

export const ClearFilterButton = styled(Button)(() => ({
  minWidth: "40px",
  height: "40px",
  borderRadius: "10px",
  padding: 0,
  border: "1px solid var(--color-ui-border)",
  color: "var(--color-slate)",

  "& svg": {
    fontSize: "22px",
  },

  "&:hover": {
    backgroundColor: "var(--color-ui-hover)",
    color: "var(--color-ink)",
  },
}));

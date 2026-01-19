import { styled } from "@mui/material/styles";
import { Box, TextField, Select, Button } from "@mui/material";

/* ================= Container ================= */

export const FiltersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "20px 24px",
  marginBottom: "32px",

  backgroundColor: "var(--color-off-white)",
  borderRadius: "14px",
  border: "1px solid var(--color-ui-border)",

  /* lg / xl */
  flexDirection: "row",

  /* md */
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },

  /* sm / xs */
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    padding: "16px",
    gap: "12px",
  },
}));

/* ================= Search ================= */

export const SearchField = styled(TextField)(({ theme }) => ({
  flex: "1 1 280px",
  minWidth: 0,

  [theme.breakpoints.down("sm")]: {
    flex: "none",
    width: "100%",
  },

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

    [theme.breakpoints.down("sm")]: {
      height: "40px",
    },
  },
}));

/* ================= Select ================= */

export const FilterSelect = styled(Select)(({ theme }) => ({
  height: "42px",
  minWidth: "180px",
  borderRadius: "10px",
  backgroundColor: "var(--color-white)",
  fontFamily: "var(--font-primary)",

  [theme.breakpoints.down("sm")]: {
    minWidth: "unset",
    width: "100%",
    height: "40px",
  },

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

/* ================= Media + Clear Wrapper ================= */

export const MediaActionsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",

  /* lg / xl */
  marginLeft: "auto",
  flexShrink: 0,

  /* md */
  [theme.breakpoints.down("md")]: {
    flex: "1 1 auto",
    marginLeft: 0,
    justifyContent: "flex-end",
  },

  /* sm / xs */
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "stretch",
  },
}));

/* ================= Media Segmented Control ================= */

export const MediaButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "var(--color-white)",
  border: "1px solid var(--color-ui-border)",
  borderRadius: "10px",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    flex: 1,
    minWidth: 0,
  },
}));

export const MediaButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  flex: 1,
  fontFamily: "var(--font-primary)",
  textTransform: "none",
  fontSize: "14px",
  padding: "10px 14px",
  borderRadius: 0,
  minWidth: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  whiteSpace: "nowrap",

  color: active ? "var(--color-ink)" : "var(--color-slate)",
  backgroundColor: active ? "var(--color-ui-active)" : "transparent",

  "& svg": {
    fontSize: "18px",
    flexShrink: 0,
  },

  "&:hover": {
    backgroundColor: "var(--color-ui-hover)",
  },

  "&:not(:last-child)": {
    borderRight: "1px solid var(--color-ui-border)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "8px 10px",
    fontSize: "13px",
    gap: "4px",
    height: "40px",

    "& svg": {
      fontSize: "16px",
    },
  },
}));

/* ================= Clear Button ================= */

export const ClearFilterButton = styled(Button)(({ theme }) => ({
  minWidth: "42px",
  width: "42px",
  height: "42px",
  borderRadius: "10px",
  padding: 0,
  border: "1px solid var(--color-ui-border)",
  color: "var(--color-slate)",
  backgroundColor: "var(--color-white)",
  flexShrink: 0,

  "& svg": {
    fontSize: "22px",
  },

  "&:hover": {
    backgroundColor: "var(--color-ui-hover)",
    color: "var(--color-ink)",
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "40px",
    width: "40px",
    height: "40px",

    "& svg": {
      fontSize: "20px",
    },
  },
}));

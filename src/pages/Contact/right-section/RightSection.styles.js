import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
} from "@mui/material";
import { responsiveFont } from "../../../components/font/ResponsiveFonts.styles";

export const RightSectionContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  maxWidth: "600px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const FormField = styled(Box)(({ fullWidth }) => ({
  flex: fullWidth ? "1 1 100%" : "1 1 calc(50% - 10px)",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

export const FieldLabel = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-charcoal)",
}));

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--color-white)",
    borderRadius: "8px",
    fontFamily: "var(--font-primary)",
    fontSize: "14px",

    "& fieldset": {
      borderColor: "var(--color-silver)",
      transition: "border-color 0.3s ease",
    },

    "&:hover fieldset": {
      borderColor: "var(--color-ash)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "var(--color-charcoal)",
      borderWidth: "2px",
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "14px 16px",
    color: "var(--color-charcoal)",

    "&::placeholder": {
      color: "var(--color-ash)",
      opacity: 1,
    },
  },
}));

export const PhoneInputWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
}));

export const CountrySelect = styled(Select)(() => ({
  minWidth: "80px",
  backgroundColor: "var(--color-white)",
  borderRadius: "8px",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-silver)",
    transition: "border-color 0.3s ease",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-ash)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-charcoal)",
    borderWidth: "2px",
  },

  "& .MuiSelect-select": {
    padding: "14px 12px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
}));

export const StyledTextArea = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--color-white)",
    borderRadius: "8px",
    fontFamily: "var(--font-primary)",
    fontSize: "14px",

    "& fieldset": {
      borderColor: "var(--color-silver)",
      transition: "border-color 0.3s ease",
    },

    "&:hover fieldset": {
      borderColor: "var(--color-ash)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "var(--color-charcoal)",
      borderWidth: "2px",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "var(--color-charcoal)",
    lineHeight: 1.6,

    "&::placeholder": {
      color: "var(--color-ash)",
      opacity: 1,
    },
  },
}));

export const CheckboxWrapper = styled(FormControlLabel)(() => ({
  alignItems: "flex-start",
  margin: 0,

  "& .MuiTypography-root": {
    fontFamily: "var(--font-primary)",
    fontSize: "14px",
    color: "var(--color-charcoal)",
    lineHeight: 1.5,
    paddingTop: "2px",
  },
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: "var(--color-silver)",
  padding: "4px",
  marginRight: "8px",

  "&.Mui-checked": {
    color: "var(--color-charcoal)",
  },
}));

export const PrivacyLink = styled("a")(() => ({
  color: "var(--color-charcoal)",
  fontWeight: 600,
  textDecoration: "underline",
  cursor: "pointer",
  transition: "color 0.3s ease",

  "&:hover": {
    color: "var(--color-slate)",
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  backgroundColor: "var(--color-charcoal)",
  color: "var(--color-off-white)",
  padding: "14px 32px",
  borderRadius: "8px",
  textTransform: "none",
  marginTop: "8px",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "var(--color-onyx)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },

  "&:active": {
    transform: "translateY(0)",
  },
}));

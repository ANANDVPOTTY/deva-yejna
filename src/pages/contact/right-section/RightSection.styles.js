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
import { scaleIn } from "../../../styles/animations";

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

export const FormTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "22px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
  marginBottom: "24px",
  paddingBottom: "16px",
  borderBottom: "1px solid rgba(58, 47, 35, 0.08)",
}));

export const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const FormField = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fullWidth",
})(({ fullWidth }) => ({
  flex: fullWidth ? "1 1 100%" : "1 1 calc(50% - 8px)",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
}));

export const FieldLabel = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "12px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-slate)",
  display: "flex",
  alignItems: "center",
  gap: "4px",
}));

export const RequiredIndicator = styled("span")(() => ({
  color: "#c53030",
  fontWeight: 600,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--color-off-white)",
    borderRadius: "10px",
    fontFamily: "var(--font-primary)",
    ...responsiveFont(theme, "14px"),
    transition: "all 0.25s ease",

    "& fieldset": {
      borderColor: "rgba(58, 47, 35, 0.12)",
      transition: "all 0.25s ease",
    },

    "&:hover fieldset": {
      borderColor: "rgba(58, 47, 35, 0.25)",
    },

    "&.Mui-focused": {
      backgroundColor: "var(--color-white)",
      boxShadow: "0 0 0 3px rgba(58, 47, 35, 0.06)",

      "& fieldset": {
        borderColor: "var(--color-charcoal)",
        borderWidth: "1.5px",
      },
    },

    "&.Mui-error fieldset": {
      borderColor: "#c53030",
    },

    "&.Mui-error.Mui-focused": {
      boxShadow: "0 0 0 3px rgba(197, 48, 48, 0.08)",

      "& fieldset": {
        borderColor: "#c53030",
        borderWidth: "1.5px",
      },
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "12px 14px",
    color: "var(--color-charcoal)",

    "&::placeholder": {
      color: "var(--color-ash)",
      opacity: 0.8,
    },
  },
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "12px"),
  color: "#c53030",
  marginTop: "2px",
  animation: `${scaleIn} 0.2s ease-out`,
}));

export const PhoneInputWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
}));

export const CountrySelect = styled(Select)(() => ({
  minWidth: "80px",
  backgroundColor: "var(--color-off-white)",
  borderRadius: "10px",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(58, 47, 35, 0.12)",
    transition: "all 0.25s ease",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(58, 47, 35, 0.25)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-charcoal)",
    borderWidth: "1.5px",
  },

  "& .MuiSelect-select": {
    padding: "12px 12px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
}));

export const StyledTextArea = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--color-off-white)",
    borderRadius: "10px",
    fontFamily: "var(--font-primary)",
    ...responsiveFont(theme, "14px"),
    transition: "all 0.25s ease",

    "& fieldset": {
      borderColor: "rgba(58, 47, 35, 0.12)",
      transition: "all 0.25s ease",
    },

    "&:hover fieldset": {
      borderColor: "rgba(58, 47, 35, 0.25)",
    },

    "&.Mui-focused": {
      backgroundColor: "var(--color-white)",
      boxShadow: "0 0 0 3px rgba(58, 47, 35, 0.06)",

      "& fieldset": {
        borderColor: "var(--color-charcoal)",
        borderWidth: "1.5px",
      },
    },

    "&.Mui-error fieldset": {
      borderColor: "#c53030",
    },

    "&.Mui-error.Mui-focused": {
      boxShadow: "0 0 0 3px rgba(197, 48, 48, 0.08)",

      "& fieldset": {
        borderColor: "#c53030",
        borderWidth: "1.5px",
      },
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "var(--color-charcoal)",
    lineHeight: 1.6,

    "&::placeholder": {
      color: "var(--color-ash)",
      opacity: 0.8,
    },
  },
}));

export const CheckboxWrapper = styled(FormControlLabel)(({ theme }) => ({
  alignItems: "flex-start",
  margin: 0,

  "& .MuiTypography-root": {
    fontFamily: "var(--font-primary)",
    ...responsiveFont(theme, "14px"),
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
  transition: "color 0.25s ease",

  "&:hover": {
    color: "var(--color-slate)",
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  backgroundColor: "var(--color-charcoal)",
  color: "var(--color-off-white)",
  padding: "14px 28px",
  borderRadius: "10px",
  textTransform: "none",
  marginTop: "8px",
  transition: "all 0.25s ease",
  boxShadow: "0 2px 8px rgba(58, 47, 35, 0.15)",

  "&:hover": {
    backgroundColor: "var(--color-onyx)",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 16px rgba(58, 47, 35, 0.2)",
  },

  "&:active": {
    transform: "translateY(0)",
  },

  "&.Mui-disabled": {
    backgroundColor: "rgba(58, 47, 35, 0.12)",
    color: "var(--color-ash)",
    boxShadow: "none",
    cursor: "not-allowed",
    pointerEvents: "auto",

    "&:hover": {
      backgroundColor: "rgba(58, 47, 35, 0.12)",
      transform: "none",
      boxShadow: "none",
    },
  },
}));

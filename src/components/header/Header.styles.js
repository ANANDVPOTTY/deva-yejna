import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  IconButton,
  ListItemButton,
} from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";
import { slideDown } from "../../styles/animations";

export const StyledAppBar = styled(Box)(({ scrolled }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1000,
  animation: `${slideDown} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both`,
  transition:
    "background-color .3s ease, box-shadow .3s ease, backdrop-filter .3s ease",
  // Frosted-glass once scrolled; solid at the top of the page.
  backgroundColor: scrolled ? "rgba(250, 249, 246, 0.65)" : "var(--color-off-white)",
  backdropFilter: scrolled ? "blur(14px) saturate(1.6)" : "none",
  WebkitBackdropFilter: scrolled ? "blur(14px) saturate(1.6)" : "none",
  borderBottom: scrolled
    ? "1px solid rgba(255, 255, 255, 0.45)"
    : "1px solid transparent",
  boxShadow: scrolled
    ? "0 6px 22px rgba(61, 58, 54, 0.10)"
    : "0 2px 4px rgba(0, 0, 0, 0.05)",
}));

export const StyledToolbar = styled(Box)(() => ({
  maxWidth: "1400px",
  minHeight: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: "16px 24px",
}));

export const LogoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  textDecoration: "none",
}));

export const LogoImage = styled("img")(() => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "12px",
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "30px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const HamburgerButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "var(--color-charcoal)",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const NavItem = styled(Button)(({ theme, active }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  fontWeight: active ? 600 : 500,
  color: active ? "var(--color-saffron-dark)" : "var(--color-charcoal)",
  textTransform: "none",
  padding: "0.4rem 1.5rem",
  borderRadius: "8px",
  position: "relative",
  transition: "color 0.25s ease",
  backgroundColor: "transparent",

  // Minimal underline cue — animates in on hover, stays on the active item.
  "&::after": {
    content: '""',
    position: "absolute",
    left: "1.5rem",
    right: "1.5rem",
    bottom: "0.15rem",
    height: "2px",
    borderRadius: "2px",
    backgroundColor: "var(--color-saffron-dark)",
    transform: active ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.25s ease",
  },

  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--color-saffron-dark)",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

// Drawer styles
export const DrawerContent = styled(Box)(() => ({
  width: 280,
  height: "100%",
  backgroundColor: "var(--color-off-white)",
  display: "flex",
  flexDirection: "column",
}));

export const DrawerHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 20px",
  borderBottom: "1px solid var(--color-silver)",
}));

export const DrawerLogoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const DrawerLogoImage = styled("img")(() => ({
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "10px",
}));

export const DrawerLogoText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "22px"),
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
}));

export const DrawerNavItem = styled(ListItemButton)(({ theme, active }) => ({
  padding: "16px 24px",
  borderLeft: "3px solid",
  borderLeftColor: active ? "var(--color-saffron-dark)" : "transparent",
  fontFamily: "var(--font-primary)",
  ...responsiveFont(theme, "18px"),
  fontWeight: active ? 600 : 500,
  color: active ? "var(--color-saffron-dark)" : "var(--color-charcoal)",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "transparent",
    borderLeftColor: "var(--color-saffron)",
    color: "var(--color-saffron-dark)",
  },
}));

import { styled } from "@mui/material/styles";
import { Box, Typography, Button, IconButton, ListItemButton } from "@mui/material";
import { responsiveFont } from "../../components/font/ResponsiveFonts.styles";

export const StyledAppBar = styled(Box)(() => ({
  backgroundColor: "var(--color-off-white)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
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

export const NavItem = styled(Button)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
  color: "var(--color-charcoal)",
  textTransform: "none",
  padding: "0.4rem 1.5rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "var(--color-silver)",
    color: "var(--color-black)",
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

export const DrawerLogoText = styled(Typography)(() => ({
  fontSize: "22px",
  fontFamily: "var(--font-special)",
  fontWeight: 600,
  color: "var(--color-charcoal)",
}));

export const DrawerNavItem = styled(ListItemButton)(() => ({
  padding: "16px 24px",
  fontFamily: "var(--font-primary)",
  fontSize: "18px",
  fontWeight: 500,
  color: "var(--color-charcoal)",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "var(--color-silver)",
  },
}));

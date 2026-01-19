import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledAppBar,
  StyledToolbar,
  LogoContainer,
  LogoImage,
  LogoText,
  NavContainer,
  NavItem,
  HamburgerButton,
} from "./Header.styles";
import RespoNavBar from "./RespoNavBar";
import logo from "../../assets/images/logo.png";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <StyledAppBar>
      <StyledToolbar>
        <LogoContainer component={Link} to="/">
          <LogoImage src={logo} alt="Deva Yajña Logo" />
          <LogoText>Deva Yajña</LogoText>
        </LogoContainer>

        <NavContainer component="nav">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              component={Link}
              to={item.href}
              disableRipple
              active={location.pathname === item.href ? 1 : 0}
            >
              {item.label}
            </NavItem>
          ))}
        </NavContainer>

        <HamburgerButton onClick={handleDrawerOpen} aria-label="open menu">
          <MenuIcon />
        </HamburgerButton>

        <RespoNavBar open={drawerOpen} onClose={handleDrawerClose} />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

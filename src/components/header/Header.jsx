import { useState, useEffect } from "react";
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
import logo from "../../assets/logo/logo.png";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  // { label: "Gallery", href: "/gallery" }, // hidden for now
  { label: "Feeds", href: "/feeds" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  // Frost the header once the page is scrolled past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledAppBar scrolled={scrolled ? 1 : 0}>
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

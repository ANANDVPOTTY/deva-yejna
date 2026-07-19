import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  DrawerContent,
  DrawerHeader,
  DrawerLogoContainer,
  DrawerLogoImage,
  DrawerLogoText,
  DrawerNavItem,
} from "./Header.styles";
import logo from "../../assets/logo/logo.png";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  // { label: "Gallery", href: "/gallery" }, // hidden for now
  { label: "Feeds", href: "/feeds" },
  { label: "Contact Us", href: "/contact" },
];

const RespoNavBar = ({ open, onClose }) => {
  const location = useLocation();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerLogoContainer>
            <DrawerLogoImage src={logo} alt="Deva Yajña Logo" />
            <DrawerLogoText>Deva Yajña</DrawerLogoText>
          </DrawerLogoContainer>
          <IconButton onClick={onClose} sx={{ color: "var(--color-charcoal)" }}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <DrawerNavItem
                component={Link}
                to={item.href}
                onClick={onClose}
                active={location.pathname === item.href ? 1 : 0}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontFamily: "var(--font-primary)",
                      fontWeight: 500,
                    },
                  }}
                />
              </DrawerNavItem>
            </ListItem>
          ))}
        </List>
      </DrawerContent>
    </Drawer>
  );
};

RespoNavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RespoNavBar;

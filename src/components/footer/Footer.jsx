import {
  FooterContainer,
  LogoSection,
  FooterLogo,
  FooterName,
  CopyrightText,
} from "./Footer.styles";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer component="footer">
      <LogoSection>
        <FooterLogo src={logo} alt="Deva Yejna Logo" />
        <FooterName>Deva Yejna</FooterName>
      </LogoSection>

      <CopyrightText>
        &copy; {currentYear} All Rights Reserved By Deva Yejna
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;

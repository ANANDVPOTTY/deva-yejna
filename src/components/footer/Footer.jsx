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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer component="footer">
      <LogoSection onClick={handleScrollToTop}>
        <FooterLogo src={logo} alt="Deva Yajña Logo" />
        <FooterName>Deva Yajña</FooterName>
      </LogoSection>

      <CopyrightText>
        &copy; {currentYear} All Rights Reserved By Deva Yajña
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;

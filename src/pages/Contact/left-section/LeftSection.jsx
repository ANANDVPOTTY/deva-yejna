import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

import {
  LeftSectionContainer,
  ContactInfoCard,
  CardTitle,
  InfoSection,
  InfoTitle,
  InfoText,
  InfoLink,
  SocialSection,
  SocialTitle,
  SocialIconsWrapper,
  SocialIconButton,
  MapContainer,
} from "./LeftSection.styles";

const LeftSection = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, url: "#", label: "Facebook" },
    { icon: <LinkedInIcon />, url: "#", label: "LinkedIn" },
    { icon: <InstagramIcon />, url: "#", label: "Instagram" },
    { icon: <XIcon />, url: "#", label: "X" },
  ];

  return (
    <LeftSectionContainer>
      <ContactInfoCard>
        <CardTitle>Get in touch</CardTitle>

        <InfoSection>
          <InfoTitle>Visit us</InfoTitle>
          <InfoText>Come say hello at our office HQ.</InfoText>
          <InfoText>67 Wisteria Way Croydon South VIC 3136 AU</InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Chat to us</InfoTitle>
          <InfoText>Our friendly team is here to help.</InfoText>
          <InfoLink href="mailto:hello@paysphere.com">
            hello@paysphere.com
          </InfoLink>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Call us</InfoTitle>
          <InfoText>Mon-Fri from 8am to 5pm</InfoText>
          <InfoLink href="tel:+995555555555">(+995) 555-55-55-55</InfoLink>
        </InfoSection>

        <SocialSection>
          <SocialTitle>Social media</SocialTitle>
          <SocialIconsWrapper>
            {socialLinks.map((social) => (
              <SocialIconButton
                key={social.label}
                component="a"
                href={social.url}
                aria-label={social.label}
              >
                {social.icon}
              </SocialIconButton>
            ))}
          </SocialIconsWrapper>
        </SocialSection>
      </ContactInfoCard>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d145.0785!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzQ5LjAiUyAxNDXCsDA0JzQyLjYiRQ!5e0!3m2!1sen!2sau!4v1234567890"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </MapContainer>
    </LeftSectionContainer>
  );
};

export default LeftSection;

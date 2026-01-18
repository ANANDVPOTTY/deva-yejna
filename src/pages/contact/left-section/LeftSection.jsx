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
import { WhatsApp } from "@mui/icons-material";

const LeftSection = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, url: "#", label: "Facebook" },
    { icon: <InstagramIcon />, url: "#", label: "Instagram" },
    { icon: <WhatsApp />, url: "#", label: "WhatsApp" },
  ];

  return (
    <LeftSectionContainer>
      <ContactInfoCard>
        <CardTitle>Get in touch</CardTitle>

        <InfoSection>
          <InfoTitle>Visit us</InfoTitle>

          <InfoText>
            TC 43/972/1, VYASA 222, Govindapuram vadakke madom, STREET,
            Valiyasalai, Thiruvananthapuram, Kerala 695036
          </InfoText>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.6070807287!2d76.9539509758243!3d8.485360097260163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf23a321025%3A0xcd886821ceac4a86!2sDeva%20Yajna!5e1!3m2!1sen!2sin!4v1768748663921!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </MapContainer>
    </LeftSectionContainer>
  );
};

export default LeftSection;

//-------| React Router |-------//
import { useNavigate } from "react-router-dom";

//-------| Images & Icons |-------//
import picOne from "../../assets/me/kishorePic1.png";
import picTwo from "../../assets/me/kishorePic2.png";
import tantrikRitual from "../../assets/our-expertise/tantrikRitual.jpg";
import vedicPuja from "../../assets/our-expertise/vedicPuja.jpg";
import homamHavan from "../../assets/our-expertise/homamHavan.jpg";
import templeService from "../../assets/our-expertise/templeService.jpg";
import spritualGuidance from "../../assets/our-expertise/spritualGuidance.jpg";
import festivalPooja from "../../assets/our-expertise/festivalPooja.jpg";

//-------| Styled Components |-------//
import {
  AboutContainer,
  HeroBanner,
  HeroContent,
  HeroTextContent,
  Greeting,
  HeroName,
  HeroRole,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImageContainer,
  HeroImageWrapper,
  HeroImage,
  DecorativeCircle,
  DecorativeDots,
  AboutSection,
  AboutContent,
  AboutImageContainer,
  AboutImageWrapper,
  AboutImage,
  AboutImageDecoration,
  AboutTextContent,
  AboutTitle,
  AboutDescription,
  ContentWrapper,
  Divider,
  DividerSymbol,
  QuoteSection,
  QuoteText,
  ExpertiseSection,
  SectionTitle,
  ExpertiseGrid,
  ExpertiseCard,
  ExpertiseCardContent,
  ExpertiseTitle,
  ExpertiseDescription,
} from "./About.styles";

const EXPERTISE_AREAS = [
  {
    icon: "🔱",
    title: "Tantrik Rituals",
    image: tantrikRitual,
    description:
      "Authentic Kerala tantrik pooja rituals performed with sacred mantras and traditional methods.",
  },
  {
    icon: "🪔",
    title: "Vedic Poojas",
    image: vedicPuja,
    description:
      "Traditional vedic ceremonies for prosperity, health, and spiritual well-being.",
  },
  {
    icon: "📿",
    title: "Homam & Havans",
    image: homamHavan,
    description:
      "Sacred fire rituals to invoke divine blessings and remove obstacles from life.",
  },
  {
    icon: "🌺",
    title: "Temple Services",
    image: templeService,
    description:
      "Specialized rituals and services for temples following authentic traditions.",
  },
  {
    icon: "✨",
    title: "Spiritual Guidance",
    image: spritualGuidance,
    description:
      "Personal consultations for spiritual growth and overcoming life challenges.",
  },
  {
    icon: "🙏",
    title: "Festival Poojas",
    image: festivalPooja,
    description:
      "Special ceremonies for auspicious occasions and traditional festivals.",
  },
];

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleServicesClick = () => {
    const expertiseSection = document.getElementById("expertise-section");
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AboutContainer>
      {/* Hero Banner Section */}
      <HeroBanner>
        <HeroContent>
          <HeroTextContent>
            <Greeting>Namaste, I am</Greeting>
            <HeroName>Kishore Raghava Sarma</HeroName>

            <HeroRole>
              Preserving Sacred Traditions, Serving Divine Purpose. With deep
              roots in the ancient Kerala tantrik traditions, dedicated to
              performing authentic rituals with purity and devotion.
            </HeroRole>

            <HeroButtons>
              <PrimaryButton onClick={handleContactClick}>
                Contact Me
              </PrimaryButton>

              <SecondaryButton onClick={handleServicesClick}>
                View Services
              </SecondaryButton>
            </HeroButtons>
          </HeroTextContent>

          <HeroImageContainer>
            <DecorativeCircle variant="primary" />
            <DecorativeCircle variant="secondary" />

            <HeroImageWrapper>
              <HeroImage src={picOne} alt="Kishore Raghava Sarma" />
            </HeroImageWrapper>

            <DecorativeDots>
              {[...Array(9)].map((_, i) => (
                <span key={i} />
              ))}
            </DecorativeDots>
          </HeroImageContainer>
        </HeroContent>
      </HeroBanner>

      {/* About Me Section */}
      <AboutSection>
        <AboutContent>
          <AboutImageContainer>
            <AboutImageWrapper>
              <AboutImage
                src={picTwo}
                alt="Kishore Raghava Sarma performing rituals"
              />
              <AboutImageDecoration />
            </AboutImageWrapper>
          </AboutImageContainer>

          <AboutTextContent>
            <AboutTitle>About Me</AboutTitle>

            <AboutDescription>
              With deep roots in the ancient Kerala tantrik traditions, I have
              dedicated my life to preserving and practicing the sacred rituals
              passed down through generations. My journey began under the
              guidance of revered gurus who instilled in me not just the
              knowledge of mantras and rituals, but the profound understanding
              of their spiritual significance.
            </AboutDescription>

            <AboutDescription>
              Every pooja I perform is approached with utmost devotion, purity,
              and adherence to traditional methods. I believe that these ancient
              practices hold the power to bring peace, prosperity, and divine
              grace into people&apos;s lives when performed with sincere faith
              and proper procedure.
            </AboutDescription>
          </AboutTextContent>
        </AboutContent>
      </AboutSection>

      <ContentWrapper>
        <QuoteSection>
          <QuoteText>
            True devotion is not merely in the rituals we perform, but in the
            purity of heart with which we approach the divine. When faith meets
            tradition, miracles unfold.
          </QuoteText>
        </QuoteSection>

        <Divider>
          <DividerSymbol>॥</DividerSymbol>
        </Divider>

        <ExpertiseSection id="expertise-section">
          <SectionTitle>Areas of Expertise</SectionTitle>

          <ExpertiseGrid>
            {EXPERTISE_AREAS.map((area) => (
              <ExpertiseCard
                key={area.title}
                style={{ backgroundImage: `url(${area.image})` }}
              >
                <ExpertiseCardContent>
                  <ExpertiseTitle>{area.title}</ExpertiseTitle>
                  <ExpertiseDescription>
                    {area.description}
                  </ExpertiseDescription>
                </ExpertiseCardContent>
              </ExpertiseCard>
            ))}
          </ExpertiseGrid>
        </ExpertiseSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;

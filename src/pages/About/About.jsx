import {
  AboutContainer,
  HeroSection,
  PhotosContainer,
  PhotoWrapper,
  Photo,
  IntroContent,
  AboutTitle,
  Tagline,
  AboutDescription,
  Divider,
  DividerSymbol,
  QuoteSection,
  QuoteText,
  ExpertiseSection,
  SectionTitle,
  ExpertiseGrid,
  ExpertiseCard,
  ExpertiseIcon,
  ExpertiseTitle,
  ExpertiseDescription,
} from "./About.styles";

// TODO: Replace with your actual photos
import photo1 from "../../assets/images/ganpati.jpg";
import photo2 from "../../assets/images/shivling.jpg";

const EXPERTISE_AREAS = [
  {
    icon: "🔱",
    title: "Tantrik Rituals",
    description:
      "Authentic Kerala tantrik pooja rituals performed with sacred mantras and traditional methods.",
  },
  {
    icon: "🪔",
    title: "Vedic Poojas",
    description:
      "Traditional vedic ceremonies for prosperity, health, and spiritual well-being.",
  },
  {
    icon: "📿",
    title: "Homam & Havans",
    description:
      "Sacred fire rituals to invoke divine blessings and remove obstacles from life.",
  },
  {
    icon: "🌺",
    title: "Temple Services",
    description:
      "Specialized rituals and services for temples following authentic traditions.",
  },
  {
    icon: "✨",
    title: "Spiritual Guidance",
    description:
      "Personal consultations for spiritual growth and overcoming life challenges.",
  },
  {
    icon: "🙏",
    title: "Festival Poojas",
    description:
      "Special ceremonies for auspicious occasions and traditional festivals.",
  },
];

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <PhotosContainer>
          <PhotoWrapper variant="primary">
            <Photo src={photo1} alt="Portrait 1" />
          </PhotoWrapper>
          <PhotoWrapper variant="secondary">
            <Photo src={photo2} alt="Portrait 2" />
          </PhotoWrapper>
        </PhotosContainer>

        <IntroContent>
          <AboutTitle>About Me</AboutTitle>
          <Tagline>
            Preserving Sacred Traditions, Serving Divine Purpose
          </Tagline>
          <AboutDescription>
            With deep roots in the ancient Kerala tantrik traditions, I have
            dedicated my life to preserving and practicing the sacred rituals
            passed down through generations. My journey began under the guidance
            of revered gurus who instilled in me not just the knowledge of
            mantras and rituals, but the profound understanding of their
            spiritual significance.
          </AboutDescription>
          <AboutDescription>
            Every pooja I perform is approached with utmost devotion, purity,
            and adherence to traditional methods. I believe that these ancient
            practices hold the power to bring peace, prosperity, and divine
            grace into people&apos;s lives when performed with sincere faith and
            proper procedure.
          </AboutDescription>
        </IntroContent>
      </HeroSection>

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

      <ExpertiseSection>
        <SectionTitle>Areas of Expertise</SectionTitle>
        <ExpertiseGrid>
          {EXPERTISE_AREAS.map((area) => (
            <ExpertiseCard key={area.title}>
              <ExpertiseIcon>{area.icon}</ExpertiseIcon>
              <ExpertiseTitle>{area.title}</ExpertiseTitle>
              <ExpertiseDescription>{area.description}</ExpertiseDescription>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </ExpertiseSection>
    </AboutContainer>
  );
};

export default About;

import { useState, useEffect } from "react";
import {
  HomeWrapper,
  HomeContainer,
  HomeInner,
  ImageSection,
  CarouselImage,
  TextSection,
  MainText,
  SubText,
} from "./Home.styles";
import Footer from "../../components/footer/Footer";
import QuoteSection from "../../components/quote-section/QuoteSection";
import OurServices from "../../components/our-services/OurServices";
import Testimonials from "../../components/testimonials/Testimonials";
import Reveal from "../../components/reveal/Reveal";
import ScrollLotus from "../../components/scroll-lotus/ScrollLotusFan";
import ganapatiImg from "../../assets/home/ganpati.jpg";
import shivlingImg from "../../assets/home/shivling.jpg";
import mahavishnuImg from "../../assets/home/mahavishnu.jpg";
import mrugaImg from "../../assets/home/mruga.jpg";
import durgaImg from "../../assets/home/durga.jpg";

const DEITY_IMAGES = [
  { src: ganapatiImg, alt: "Lord Ganapati" },
  { src: shivlingImg, alt: "Shivling" },
  { src: mahavishnuImg, alt: "Lord Mahavishnu" },
  { src: mrugaImg, alt: "Lord Muruga" },
  { src: durgaImg, alt: "Goddess Durga" },
];

const SLIDE_INTERVAL = 4000;

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DEITY_IMAGES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <HomeWrapper>
      <ScrollLotus />

      <HomeContainer>
        <HomeInner>
          <ImageSection>
            {DEITY_IMAGES.map((image, index) => (
              <CarouselImage
                key={image.alt}
                src={image.src}
                alt={image.alt}
                isActive={index === activeIndex}
              />
            ))}
          </ImageSection>

          <TextSection>
            <Reveal direction="right" duration={0.7}>
              <MainText>Welcome to a Sacred Path of Devotion</MainText>
            </Reveal>

            <Reveal direction="right" delay={0.15} duration={0.7}>
              <SubText>
                Experience time-honored kerala tantrik pooja rituals performed
                with purity, faith, and tradition. May peace, prosperity, and
                divine grace be with you always.
              </SubText>
            </Reveal>
          </TextSection>
        </HomeInner>
      </HomeContainer>

      <Reveal direction="up" amount={0.15}>
        <OurServices />
      </Reveal>

      <Reveal direction="up" amount={0.15}>
        <Testimonials />
      </Reveal>

      {/* <QuoteSection /> */}
      <Reveal direction="fade">
        <Footer />
      </Reveal>
    </HomeWrapper>
  );
};

export default Home;

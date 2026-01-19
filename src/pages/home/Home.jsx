import { useState, useEffect } from "react";
import {
  HomeWrapper,
  HomeContainer,
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
import ganapatiImg from "../../assets/images/ganpati.jpg";
import shivlingImg from "../../assets/images/shivling.jpg";
import mahavishnuImg from "../../assets/images/mahavishnu.jpg";
import mrugaImg from "../../assets/images/mruga.jpg";
import durgaImg from "../../assets/images/durga.jpg";

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
      <HomeContainer>
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
          <MainText>Welcome to a Sacred Path of Devotion</MainText>

          <SubText>
            Experience time-honored kerala tantrik pooja rituals performed with
            purity, faith, and tradition. May peace, prosperity, and divine
            grace be with you always.
          </SubText>
        </TextSection>
      </HomeContainer>

      <OurServices />

      <Testimonials />

      {/* <QuoteSection /> */}
      <Footer />
    </HomeWrapper>
  );
};

export default Home;

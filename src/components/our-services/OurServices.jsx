import { useState } from "react";
import {
  ServicesSectionWrapper,
  SectionHeader,
  SectionTitle,
  TitleUnderline,
  SectionSubtitle,
  ServicesContent,
  LeftServices,
  RightServices,
  ServiceItem,
  ServiceTitle,
  ServiceDescription,
  IconsContainer,
  ShriChakraImage,
  IconWrapper,
} from "./OurServices.styles";
import shrichakraImg from "../../assets/images/shrichakra.png";

const SERVICES_DATA = [
  {
    id: "pooja",
    title: "POOJA",
    description:
      "Traditional vedic rituals performed with devotion to invoke divine blessings for prosperity and peace.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.09 8.26L19 7L14.74 11.74L21 14L14.74 13.91L13.09 20L12 14.74L6.26 20L10.26 13.91L3 14L9.26 11.74L5 7L10.91 8.26L12 2Z" />
      </svg>
    ),
    color: "var(--color-service-yellow)",
    position: "left",
  },
  {
    id: "marriage",
    title: "MARRIAGE",
    description:
      "Sacred matrimonial ceremonies conducted with authentic rituals for a blessed union.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
      </svg>
    ),
    color: "var(--color-service-yellow)",
    position: "left",
  },
  {
    id: "bhoomi-pooja",
    title: "BHOOMI POOJA",
    description:
      "Ground-breaking ceremony to seek blessings before construction for protection and prosperity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 12L12 2L5 12H7V20H11V14H13V20H17V12H19Z" />
      </svg>
    ),
    color: "var(--color-service-pink)",
    position: "left",
  },
  {
    id: "darshan",
    title: "DARSHAN",
    description:
      "Sacred viewing of the deity offering spiritual connection and divine grace to devotees.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
      </svg>
    ),
    color: "var(--color-service-green)",
    position: "right",
  },
  {
    id: "prasad",
    title: "PRASAD",
    description:
      "Blessed offerings distributed after rituals carrying divine energy and spiritual nourishment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
      </svg>
    ),
    color: "var(--color-service-green)",
    position: "right",
  },
  {
    id: "car-pooja",
    title: "CAR POOJA",
    description:
      "Vehicle blessing ceremony to ensure safe travels and protection from accidents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" />
      </svg>
    ),
    color: "var(--color-service-blue)",
    position: "right",
  },
];

const OurServices = () => {
  const [activeId, setActiveId] = useState(null);

  const leftServices = SERVICES_DATA.filter((s) => s.position === "left");
  const rightServices = SERVICES_DATA.filter((s) => s.position === "right");

  const handleMouseEnter = (id) => setActiveId(id);
  const handleMouseLeave = () => setActiveId(null);

  return (
    <ServicesSectionWrapper>
      <SectionHeader>
        <SectionTitle>Our Services</SectionTitle>
        <TitleUnderline />
        <SectionSubtitle>
          Experience authentic Kerala tantrik pooja rituals performed with
          purity, devotion, and time-honored traditions for divine blessings.
        </SectionSubtitle>
      </SectionHeader>

      <ServicesContent>
        <LeftServices>
          {leftServices.map((service, idx) => (
            <ServiceItem
              key={service.id}
              align="right"
              isActive={activeId === service.id}
              index={idx}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <ServiceTitle isActive={activeId === service.id}>
                {service.title}
              </ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceItem>
          ))}
        </LeftServices>

        <IconsContainer>
          {SERVICES_DATA.map((service, index) => (
            <IconWrapper
              key={service.id}
              index={index}
              color={service.color}
              isActive={activeId === service.id}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              {service.icon}
            </IconWrapper>
          ))}
          <ShriChakraImage src={shrichakraImg} alt="Shri Chakra" />
        </IconsContainer>

        <RightServices>
          {rightServices.map((service, idx) => (
            <ServiceItem
              key={service.id}
              align="left"
              isActive={activeId === service.id}
              index={idx + 3}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <ServiceTitle isActive={activeId === service.id}>
                {service.title}
              </ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceItem>
          ))}
        </RightServices>
      </ServicesContent>
    </ServicesSectionWrapper>
  );
};

export default OurServices;

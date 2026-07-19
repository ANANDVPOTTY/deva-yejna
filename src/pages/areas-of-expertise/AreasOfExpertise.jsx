//-------| React |-------//
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//-------| Animation |-------//
import { LazyMotion, domAnimation, m } from "motion/react";

//-------| Mui Icons |-------//
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

//-------| Data |-------//
import { EXPERTISE_AREAS } from "./expertiseData";

//-------| Styled Components |-------//
import {
  PageContainer,
  BackLink,
  PageHeader,
  PageTitle,
  PageSubtitle,
  GoldDivider,
  AreasWrapper,
  AreaBlock,
  AreaVisual,
  AreaBody,
  AreaHeading,
  AreaDescription,
  ServiceGrid,
  ServiceItem,
  ServiceNumber,
  ServiceName,
  ServiceToggleTile,
  AreaDivider,
  DividerLine,
  OmSymbol,
} from "./AreasOfExpertise.styles";

//-------| Motion-enabled styled components (no extra wrapper DOM) |-------//
const MotionBackLink = m.create(BackLink);
const MotionHeader = m.create(PageHeader);
const MotionTitle = m.create(PageTitle);
const MotionSubtitle = m.create(PageSubtitle);
const MotionGoldDivider = m.create(GoldDivider);
const MotionBlock = m.create(AreaBlock);
const MotionVisual = m.create(AreaVisual);
const MotionBody = m.create(AreaBody);
const MotionGrid = m.create(ServiceGrid);
const MotionItem = m.create(ServiceItem);
const MotionToggle = m.create(ServiceToggleTile);
const MotionDivider = m.create(AreaDivider);

//-------| Motion variants (GPU-friendly transform/opacity only) |-------//
const EASE = [0.22, 1, 0.36, 1];

const headerGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const blockGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -64 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const fromRight = {
  hidden: { opacity: 0, x: 64 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const bodyReveal = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const gridGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
};

const itemReveal = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

const dividerReveal = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const VIEWPORT = { once: true, amount: 0.2 };

//-------| Max services shown before the "+X more" tile appears |-------//
const VISIBLE_SERVICES_COUNT = 6;

const AreasOfExpertise = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedAreas, setExpandedAreas] = useState(() => new Set());

  useEffect(() => {
    const slug = location.hash?.replace("#", "");

    if (slug) {
      const target = document.getElementById(slug);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0 });
  }, [location.hash]);

  const toggleArea = (slug) => {
    setExpandedAreas((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <PageContainer>
        <MotionBackLink
          onClick={() => navigate("/about")}
          initial="hidden"
          animate="show"
          variants={fadeDown}
        >
          <ArrowBackRoundedIcon sx={{ fontSize: 14 }} />
          About
        </MotionBackLink>

        <MotionHeader initial="hidden" animate="show" variants={headerGroup}>
          <MotionTitle variants={fadeUp}>Our Areas of Expertise</MotionTitle>
          <MotionSubtitle variants={fadeUp}>
            Sacred rituals and ceremonies performed with devotion and authentic
            tradition.
          </MotionSubtitle>
          <MotionGoldDivider variants={fadeUp} />
        </MotionHeader>

        <AreasWrapper>
          {EXPERTISE_AREAS.map((area, index) => {
            const isExpanded = expandedAreas.has(area.slug);
            const hasOverflow = area.services.length > VISIBLE_SERVICES_COUNT;
            const visibleServices =
              hasOverflow && !isExpanded
                ? area.services.slice(0, VISIBLE_SERVICES_COUNT)
                : area.services;
            const hiddenCount = area.services.length - visibleServices.length;
            const imageVariant = index % 2 === 0 ? fromLeft : fromRight;

            return (
              <MotionBlock
                key={area.slug}
                id={area.slug}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                variants={blockGroup}
              >
                <MotionVisual
                  variants={imageVariant}
                  style={{
                    backgroundImage: `url(${area.image})`,
                    willChange: "transform, opacity",
                  }}
                />

                <MotionBody variants={bodyReveal}>
                  <AreaHeading>{area.title}</AreaHeading>
                  <AreaDescription>{area.description}</AreaDescription>

                  <MotionGrid variants={gridGroup}>
                    {visibleServices.map((service, serviceIndex) => (
                      <MotionItem key={service} variants={itemReveal}>
                        <ServiceNumber>{serviceIndex + 1}</ServiceNumber>
                        <ServiceName>{service}</ServiceName>
                      </MotionItem>
                    ))}

                    {hasOverflow && (
                      <MotionToggle
                        type="button"
                        onClick={() => toggleArea(area.slug)}
                        aria-expanded={isExpanded}
                        variants={itemReveal}
                      >
                        {isExpanded ? "Show less" : `+${hiddenCount} more`}
                      </MotionToggle>
                    )}
                  </MotionGrid>
                </MotionBody>

                <MotionDivider aria-hidden="true" variants={dividerReveal}>
                  <DividerLine />
                  <OmSymbol>ॐ</OmSymbol>
                  <DividerLine />
                </MotionDivider>
              </MotionBlock>
            );
          })}
        </AreasWrapper>
      </PageContainer>
    </LazyMotion>
  );
};

export default AreasOfExpertise;

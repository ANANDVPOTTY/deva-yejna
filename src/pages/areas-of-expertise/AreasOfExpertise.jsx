//-------| React |-------//
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
    <PageContainer>
      <BackLink onClick={() => navigate("/about")}>
        <ArrowBackRoundedIcon sx={{ fontSize: 14 }} />
        About
      </BackLink>

      <PageHeader>
        <PageTitle>Our Areas of Expertise</PageTitle>
        <PageSubtitle>
          Sacred rituals and ceremonies performed with devotion and authentic
          tradition.
        </PageSubtitle>
        <GoldDivider />
      </PageHeader>

      <AreasWrapper>
        {EXPERTISE_AREAS.map((area) => {
          const isExpanded = expandedAreas.has(area.slug);
          const hasOverflow = area.services.length > VISIBLE_SERVICES_COUNT;
          const visibleServices =
            hasOverflow && !isExpanded
              ? area.services.slice(0, VISIBLE_SERVICES_COUNT)
              : area.services;
          const hiddenCount = area.services.length - visibleServices.length;

          return (
            <AreaBlock key={area.slug} id={area.slug}>
              <AreaVisual style={{ backgroundImage: `url(${area.image})` }} />

              <AreaBody>
                <AreaHeading>{area.title}</AreaHeading>
                <AreaDescription>{area.description}</AreaDescription>

                <ServiceGrid>
                  {visibleServices.map((service, index) => (
                    <ServiceItem key={service}>
                      <ServiceNumber>{index + 1}</ServiceNumber>
                      <ServiceName>{service}</ServiceName>
                    </ServiceItem>
                  ))}

                  {hasOverflow && (
                    <ServiceToggleTile
                      type="button"
                      onClick={() => toggleArea(area.slug)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Show less" : `+${hiddenCount} more`}
                    </ServiceToggleTile>
                  )}
                </ServiceGrid>

                <AreaDivider aria-hidden="true">
                  <DividerLine />
                  <OmSymbol>ॐ</OmSymbol>
                  <DividerLine />
                </AreaDivider>
              </AreaBody>
            </AreaBlock>
          );
        })}
      </AreasWrapper>
    </PageContainer>
  );
};

export default AreasOfExpertise;

import { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  TestimonialSectionWrapper,
  TestimonialContainer,
  HeaderSection,
  MainTitle,
  SubTitle,
  ColumnsGrid,
  ScrollColumnWrapper,
  ScrollContentT2B,
  ScrollContentB2T,
  TestimonialCard,
  CardHeader,
  EmojiAvatar,
  UserInfo,
  UserName,
  UserRole,
  StarRating,
  ReviewText,
} from "./Testimonials.styles";
import { testimonialsData } from "./testimonialsData";

/*-------| Split testimonials into columns |-------*/
const splitIntoColumns = (data, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => []);

  data.forEach((item, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(item);
  });

  return columns;
};

const renderStars = (rating) => {
  return "\u2605".repeat(rating);
};

const TestimonialCardComponent = ({ testimonial }) => (
  <TestimonialCard>
    <CardHeader>
      <EmojiAvatar>{testimonial.emoji}</EmojiAvatar>
      <UserInfo>
        <UserName>{testimonial.name}</UserName>
        <UserRole>{testimonial.role}</UserRole>
      </UserInfo>
    </CardHeader>
    <StarRating>{renderStars(testimonial.rating)}</StarRating>
    <ReviewText>{`"${testimonial.review}"`}</ReviewText>
  </TestimonialCard>
);

TestimonialCardComponent.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    emoji: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};

const Testimonials = () => {
  const theme = useTheme();
  const [isPaused, setIsPaused] = useState(false);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const getColumnCount = () => {
    if (isLgUp) return 3;
    if (isMdUp) return 2;
    return 1;
  };

  const columnCount = getColumnCount();
  const columns = splitIntoColumns(testimonialsData, columnCount);

  return (
    <TestimonialSectionWrapper>
      <TestimonialContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HeaderSection>
          <MainTitle>What Our Devotees Say</MainTitle>
          <SubTitle>
            Hear from those who have experienced divine blessings through our
            sacred rituals.
          </SubTitle>
        </HeaderSection>

        <ColumnsGrid columns={columnCount}>
          {columns.map((columnData, colIndex) => {
            const isEvenColumn = colIndex % 2 === 1;
            const ScrollContent = isEvenColumn
              ? ScrollContentB2T
              : ScrollContentT2B;
            const duplicatedData = [
              ...columnData.map((item) => ({
                ...item,
                uniqueKey: `${item.id}-a`,
              })),
              ...columnData.map((item) => ({
                ...item,
                uniqueKey: `${item.id}-b`,
              })),
            ];

            return (
              <ScrollColumnWrapper
                key={`column-${colIndex}`}
                isPaused={isPaused}
                invertMask={isEvenColumn}
              >
                <ScrollContent className="scroll-content" isPaused={isPaused}>
                  {duplicatedData.map((testimonial) => (
                    <TestimonialCardComponent
                      key={`col${colIndex}-${testimonial.uniqueKey}`}
                      testimonial={testimonial}
                    />
                  ))}
                </ScrollContent>
              </ScrollColumnWrapper>
            );
          })}
        </ColumnsGrid>
      </TestimonialContainer>
    </TestimonialSectionWrapper>
  );
};

export default Testimonials;

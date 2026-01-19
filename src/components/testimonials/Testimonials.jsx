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

const TESTIMONIALS = [
  {
    id: 1,
    emoji: "\ud83d\ude4f",
    name: "Rajesh Kumar",
    role: "Devotee",
    rating: 5,
    review:
      "The pooja was performed with such devotion and authenticity. I felt a deep spiritual connection throughout the ceremony. Highly blessed!",
  },
  {
    id: 2,
    emoji: "\ud83c\udf1f",
    name: "Priya Sharma",
    role: "Business Owner",
    rating: 5,
    review:
      "After the Lakshmi pooja, my business saw remarkable growth. The pandit's knowledge of Kerala tantrik rituals is exceptional.",
  },
  {
    id: 3,
    emoji: "\ud83d\ude4c",
    name: "Anil Menon",
    role: "Family Man",
    rating: 5,
    review:
      "The Griha Pravesh ceremony for our new home was beautifully conducted. Every ritual was explained clearly. Our family feels truly blessed.",
  },
  {
    id: 4,
    emoji: "\u2728",
    name: "Lakshmi Nair",
    role: "Teacher",
    rating: 5,
    review:
      "The Saraswati pooja for my children's education was performed with utmost care. I've seen positive changes in their focus and dedication.",
  },
  {
    id: 5,
    emoji: "\ud83d\udcab",
    name: "Suresh Pillai",
    role: "Engineer",
    rating: 5,
    review:
      "The Navagraha shanti pooja helped bring peace to our family. The traditional Kerala methods used were authentic and powerful.",
  },
  {
    id: 6,
    emoji: "\ud83c\udf3a",
    name: "Meera Krishnan",
    role: "Doctor",
    rating: 5,
    review:
      "I've attended many poojas, but the attention to detail and spiritual energy here is unmatched. A truly divine experience.",
  },
  {
    id: 7,
    emoji: "\ud83d\udd49\ufe0f",
    name: "Gopalan Iyer",
    role: "Retired Professor",
    rating: 5,
    review:
      "The Pitru Tarpan ceremony was conducted with deep reverence. I felt connected to my ancestors like never before.",
  },
  {
    id: 8,
    emoji: "\ud83d\ude4f",
    name: "Anitha Balakrishnan",
    role: "Homemaker",
    rating: 5,
    review:
      "The monthly Satyanarayan katha at our home has become a cherished tradition. The positive energy it brings is remarkable.",
  },
  {
    id: 9,
    emoji: "\ud83c\udf1e",
    name: "Vijay Mohan",
    role: "Entrepreneur",
    rating: 5,
    review:
      "The Vastu shanti pooja transformed the energy of my office space. Business decisions flow more naturally now.",
  },
  {
    id: 10,
    emoji: "\ud83c\udf38",
    name: "Kavitha Warrier",
    role: "Artist",
    rating: 5,
    review:
      "The Ganapati homam was a beautiful spiritual journey. The mantras resonated deep within my soul. Truly grateful.",
  },
  {
    id: 11,
    emoji: "\ud83d\udd6e\ufe0f",
    name: "Ramesh Kamath",
    role: "Merchant",
    rating: 5,
    review:
      "Every detail of the Durga pooja was perfect. The traditional Kerala style brought an authentic spiritual atmosphere.",
  },
  {
    id: 12,
    emoji: "\u2728",
    name: "Deepa Sundaram",
    role: "Software Developer",
    rating: 5,
    review:
      "Even being far from home, the online guidance for performing daily rituals has kept me connected to my roots.",
  },
];

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
  const columns = splitIntoColumns(TESTIMONIALS, columnCount);

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

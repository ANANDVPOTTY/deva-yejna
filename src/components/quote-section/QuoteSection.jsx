import { useState, useEffect, useCallback, useMemo } from "react";
import {
  QuoteSectionWrapper,
  BlobTopRight,
  BlobBottomLeft,
  QuoteContainer,
  QuoteIconWrapper,
  QuoteContent,
  QuoteText,
  QuoteMeaning,
  QuoteSource,
  SourceImageWrapper,
  SourceInfo,
  SourceLabel,
  SourceText,
} from "./QuoteSection.styles";

import bhagavatgitaImg from "../../assets/images/bhagavatgita.jpg";
import ramayanaImg from "../../assets/images/ramayana.jpg";

const QUOTE_INTERVAL = 8000;

const inspirationalQuotes = [
  /* ================= Bhagavad Gita ================= */
  {
    id: 1,
    source: "Bhagavad Gita",
    image: bhagavatgitaImg,
    quote: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    meaning: "Focus on your actions, not on the results.",
  },
  {
    id: 2,
    source: "Bhagavad Gita",
    image: bhagavatgitaImg,
    quote: "योगः कर्मसु कौशलम्।",
    meaning: "Excellence in action is true yoga.",
  },
  {
    id: 3,
    source: "Bhagavad Gita",
    image: bhagavatgitaImg,
    quote: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।",
    meaning: "Elevate yourself through your own efforts.",
  },
  {
    id: 4,
    source: "Bhagavad Gita",
    image: bhagavatgitaImg,
    quote: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः।",
    meaning: "The mind is the cause of both bondage and liberation.",
  },
  {
    id: 5,
    source: "Bhagavad Gita",
    image: bhagavatgitaImg,
    quote: "न हि कल्याणकृत्कश्चिद् दुर्गतिं तात गच्छति।",
    meaning: "One who does good never meets a bad fate.",
  },

  /* ================= Ramayana ================= */
  {
    id: 6,
    source: "Ramayana",
    image: ramayanaImg,
    quote: "धैर्यं सर्वत्र साधनम्।",
    meaning: "Patience is the key to success everywhere.",
  },
  {
    id: 7,
    source: "Ramayana",
    image: ramayanaImg,
    quote: "परहित सरिस धरम नहीं भाई।",
    meaning: "There is no greater duty than serving others.",
  },
  {
    id: 8,
    source: "Ramayana",
    image: ramayanaImg,
    quote: "न भयम् न लज्जा न संशयः।",
    meaning: "Overcome fear, shame, and doubt.",
  },
  {
    id: 9,
    source: "Ramayana",
    image: ramayanaImg,
    quote: "सत्यं एव जयते।",
    meaning: "Truth alone triumphs.",
  },
  {
    id: 10,
    source: "Ramayana",
    image: ramayanaImg,
    quote: "कर्म प्रधान विश्व रचि राखा।",
    meaning: "The world is governed by actions.",
  },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QuoteSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffledQuotes = useMemo(() => shuffleArray(inspirationalQuotes), []);

  const handleQuoteChange = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % shuffledQuotes.length);
      setIsAnimating(false);
    }, 400);
  }, [shuffledQuotes.length]);

  useEffect(() => {
    const interval = setInterval(handleQuoteChange, QUOTE_INTERVAL);
    return () => clearInterval(interval);
  }, [handleQuoteChange]);

  const currentQuote = shuffledQuotes[activeIndex];

  return (
    <QuoteSectionWrapper>
      {/* Abstract blob shape - Top Right */}
      <BlobTopRight>
        <svg
          viewBox="0 0 200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150 0C180 30 200 80 200 140C200 200 170 260 130 300H200V0H150Z"
            fill="var(--color-coral-dark)"
          />
          <path
            d="M120 20C160 50 190 100 185 160C180 220 140 270 100 300H130C170 260 200 200 200 140C200 80 180 30 150 0H120Z"
            fill="var(--color-coral)"
          />
        </svg>
      </BlobTopRight>

      {/* Abstract blob shape - Bottom Left */}
      <BlobBottomLeft>
        <svg
          viewBox="0 0 250 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150C0 80 30 30 80 10C50 40 30 90 40 150C50 210 90 260 150 290C100 300 50 280 20 240C-10 200 0 170 0 150Z"
            fill="var(--color-coral-dark)"
          />
          <path
            d="M60 300C20 270 0 220 0 160C0 100 30 50 80 20C40 50 20 100 30 160C40 220 80 270 140 300H60Z"
            fill="var(--color-coral)"
          />
          <path
            d="M0 200C10 240 40 280 90 300H0V200Z"
            fill="var(--color-pink)"
          />
        </svg>
      </BlobBottomLeft>

      <QuoteContainer>
        <QuoteIconWrapper>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </QuoteIconWrapper>

        <QuoteContent isAnimating={isAnimating}>
          <QuoteText>{currentQuote.quote}</QuoteText>

          <QuoteMeaning>{currentQuote.meaning}</QuoteMeaning>

          <QuoteSource>
            <SourceImageWrapper>
              <img src={currentQuote.image} alt={currentQuote.source} />
            </SourceImageWrapper>

            <SourceInfo>
              <SourceLabel>From</SourceLabel>
              <SourceText>{currentQuote.source}</SourceText>
            </SourceInfo>
          </QuoteSource>
        </QuoteContent>
      </QuoteContainer>
    </QuoteSectionWrapper>
  );
};

export default QuoteSection;

import { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import MediaCarousel from "../media-carousel/MediaCarousel";
import { formatFeedDate } from "../feedsData";
import logo from "../../../assets/images/logo.png";
import {
  Card,
  Header,
  LogoMedallion,
  HeaderText,
  BrandName,
  Eyebrow,
  PostedDate,
  Body,
  Description,
  ReadMoreButton,
  DiyaDivider,
} from "./FeedCard.styles";

const CLAMP_LINES = 4;

const FeedCard = ({ post }) => {
  const { media, description, createdDate } = post;
  const cardRef = useRef(null);
  const descRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isClampable, setIsClampable] = useState(false);

  // Entrance animation: reveal once when the card scrolls into view.
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Measure (while collapsed) whether the description overflows the clamp.
  useEffect(() => {
    const node = descRef.current;
    if (!node) return;
    setIsClampable(node.scrollHeight > node.clientHeight + 1);
  }, [description]);

  return (
    <Card ref={cardRef} visible={visible ? 1 : 0}>
      <Header>
        <LogoMedallion src={logo} alt="Deva Yajña" />
        <HeaderText>
          <BrandName>Deva Yajña</BrandName>
          <Eyebrow>देव यज्ञ · Announcement</Eyebrow>
        </HeaderText>
        <PostedDate>{formatFeedDate(createdDate)}</PostedDate>
      </Header>

      <MediaCarousel media={media} />

      <Body>
        <Description
          ref={descRef}
          expanded={expanded ? 1 : 0}
          clamp={CLAMP_LINES}
        >
          {description}
        </Description>
        {isClampable && (
          <ReadMoreButton type="button" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Read less" : "Read more"}
          </ReadMoreButton>
        )}
        {expanded && isClampable && <DiyaDivider aria-hidden="true" />}
      </Body>
    </Card>
  );
};

FeedCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    media: PropTypes.array.isRequired,
  }).isRequired,
};

export default memo(FeedCard);

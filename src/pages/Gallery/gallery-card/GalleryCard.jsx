import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  CardContainer,
  CardImage,
  CardVideo,
  PlayIconWrapper,
  CardOverlay,
  CardTextWrapper,
  CardDescription,
  CardCategory,
} from "./GalleryCard.styles";

const GalleryCard = ({ item, onClick }) => {
  const isVideo = item.type === "video";
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px", threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <CardContainer ref={cardRef} onClick={() => onClick(item)}>
      {isVisible && (
        <>
          {isVideo ? (
            <CardVideo
              className="card-image"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            >
              <PlayIconWrapper>
                <PlayArrowIcon sx={{ color: "#fff", fontSize: 32 }} />
              </PlayIconWrapper>
            </CardVideo>
          ) : (
            <CardImage
              className="card-image"
              src={item.thumbnail}
              alt={item.description}
              loading="lazy"
            />
          )}
          <CardOverlay className="card-overlay">
            <CardTextWrapper>
              <CardCategory>{item.category}</CardCategory>
              <CardDescription>{item.description}</CardDescription>
            </CardTextWrapper>
          </CardOverlay>
        </>
      )}
    </CardContainer>
  );
};

GalleryCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryCard;

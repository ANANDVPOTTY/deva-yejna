import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  CardContainer,
  CardImage,
  CardVideo,
  PlayIconWrapper,
  CardOverlay,
  CardDescription,
  CardCategory,
} from "./GalleryCard.styles";

const GalleryCard = ({ item, onClick }) => {
  const isVideo = item.type === "video";

  return (
    <CardContainer onClick={() => onClick(item)}>
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
        <CardCategory>{item.category}</CardCategory>
        <CardDescription>{item.description}</CardDescription>
      </CardOverlay>
    </CardContainer>
  );
};

export default GalleryCard;

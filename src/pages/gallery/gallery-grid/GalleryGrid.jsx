import PropTypes from "prop-types";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import GalleryCard from "../gallery-card/GalleryCard";
import {
  GridContainer,
  GridItem,
  NoResultsContainer,
  NoResultsText,
} from "./GalleryGrid.styles";

const GalleryGrid = ({ items, onItemClick }) => {
  if (items.length === 0) {
    return (
      <GridContainer>
        <NoResultsContainer>
          <SearchOffIcon sx={{ fontSize: 64, color: "rgba(139, 69, 19, 0.4)" }} />
          <NoResultsText>
            No items found matching your criteria. Try adjusting your filters.
          </NoResultsText>
        </NoResultsContainer>
      </GridContainer>
    );
  }

  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem key={item.id} index={index}>
          <GalleryCard item={item} onClick={onItemClick} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

GalleryGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string,
      category: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default GalleryGrid;

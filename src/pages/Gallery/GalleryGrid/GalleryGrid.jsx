import SearchOffIcon from "@mui/icons-material/SearchOff";
import GalleryCard from "../GalleryCard/GalleryCard";
import {
  GridContainer,
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
      {items.map((item) => (
        <GalleryCard key={item.id} item={item} onClick={onItemClick} />
      ))}
    </GridContainer>
  );
};

export default GalleryGrid;

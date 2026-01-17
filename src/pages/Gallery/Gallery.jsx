import { useState, useMemo } from "react";
import { GalleryContainer, GalleryTitle, GalleryDescription } from "./Gallery.styles";
import GalleryFilters from "./gallery-filters/GalleryFilters";
import GalleryGrid from "./gallery-grid/GalleryGrid";
import GalleryModal from "./gallery-modal/GalleryModal";
import { galleryData } from "./galleryData";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showImages, setShowImages] = useState(true);
  const [showVideos, setShowVideos] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    return galleryData.filter((item) => {
      // Filter by type (images/videos)
      if (item.type === "image" && !showImages) return false;
      if (item.type === "video" && !showVideos) return false;

      // Filter by category
      if (selectedFilter !== "all" && item.category !== selectedFilter) return false;

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesDescription = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesDescription && !matchesCategory) return false;
      }

      return true;
    });
  }, [searchQuery, selectedFilter, showImages, showVideos]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <GalleryContainer>
      <GalleryTitle>Gallery</GalleryTitle>
      <GalleryDescription>
        Explore our collection of sacred moments, ancient temples, and spiritual ceremonies.
      </GalleryDescription>

      <GalleryFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        showImages={showImages}
        setShowImages={setShowImages}
        showVideos={showVideos}
        setShowVideos={setShowVideos}
      />

      <GalleryGrid items={filteredItems} onItemClick={handleItemClick} />

      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </GalleryContainer>
  );
};

export default Gallery;

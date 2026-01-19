import PropTypes from "prop-types";
import { InputAdornment, MenuItem } from "@mui/material";

/* Icons */
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

/* Styles */
import {
  FiltersContainer,
  SearchField,
  FilterSelect,
  MediaActionsWrapper,
  MediaButtonsContainer,
  MediaButton,
  ClearFilterButton,
} from "./GalleryFilters.styles";

import { filterOptions } from "../galleryData";

const GalleryFilters = ({
  searchQuery,
  setSearchQuery,
  selectedFilter,
  setSelectedFilter,
  showImages,
  setShowImages,
  showVideos,
  setShowVideos,
}) => {
  const handleAllClick = () => {
    setShowImages(true);
    setShowVideos(true);
  };

  const handleImagesClick = () => {
    setShowImages(true);
    setShowVideos(false);
  };

  const handleVideosClick = () => {
    setShowImages(false);
    setShowVideos(true);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedFilter("all");
    setShowImages(true);
    setShowVideos(true);
  };

  const isAllActive = showImages && showVideos;
  const isImagesOnly = showImages && !showVideos;
  const isVideosOnly = !showImages && showVideos;

  return (
    <FiltersContainer>
      {/* Search */}
      <SearchField
        placeholder="Search photos & videos"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Category */}
      <FilterSelect
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        size="small"
        IconComponent={TuneRoundedIcon}
      >
        {filterOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </FilterSelect>

      {/* Media + Clear (grouped intentionally) */}
      <MediaActionsWrapper>
        <MediaButtonsContainer>
          <MediaButton active={isAllActive} onClick={handleAllClick}>
            <AppsRoundedIcon /> All
          </MediaButton>

          <MediaButton active={isImagesOnly} onClick={handleImagesClick}>
            <ImageOutlinedIcon /> Images
          </MediaButton>

          <MediaButton active={isVideosOnly} onClick={handleVideosClick}>
            <VideocamOutlinedIcon /> Videos
          </MediaButton>
        </MediaButtonsContainer>

        <ClearFilterButton onClick={handleClearFilters}>
          <RestartAltIcon />
        </ClearFilterButton>
      </MediaActionsWrapper>
    </FiltersContainer>
  );
};

GalleryFilters.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
  showImages: PropTypes.bool.isRequired,
  setShowImages: PropTypes.func.isRequired,
  showVideos: PropTypes.bool.isRequired,
  setShowVideos: PropTypes.func.isRequired,
};

export default GalleryFilters;

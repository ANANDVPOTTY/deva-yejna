import { InputAdornment, MenuItem, FormControl, InputLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import {
  FiltersContainer,
  SearchField,
  FilterSelect,
  SwitchContainer,
  SwitchWrapper,
  SwitchLabel,
  StyledSwitch,
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
  return (
    <FiltersContainer>
      <SearchField
        placeholder="Search gallery..."
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "rgba(139, 69, 19, 0.6)" }} />
            </InputAdornment>
          ),
        }}
      />

      <FormControl size="small">
        <InputLabel
          sx={{
            fontFamily: "var(--font-primary)",
            "&.Mui-focused": { color: "#8B4513" },
          }}
        >
          Category
        </InputLabel>
        <FilterSelect
          value={selectedFilter}
          label="Category"
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          {filterOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ fontFamily: "var(--font-primary)" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </FilterSelect>
      </FormControl>

      <SwitchContainer>
        <SwitchWrapper>
          <ImageIcon sx={{ color: showImages ? "#8B4513" : "rgba(0,0,0,0.4)" }} />
          <SwitchLabel>Images</SwitchLabel>
          <StyledSwitch
            checked={showImages}
            onChange={(e) => setShowImages(e.target.checked)}
          />
        </SwitchWrapper>

        <SwitchWrapper>
          <VideoLibraryIcon sx={{ color: showVideos ? "#8B4513" : "rgba(0,0,0,0.4)" }} />
          <SwitchLabel>Videos</SwitchLabel>
          <StyledSwitch
            checked={showVideos}
            onChange={(e) => setShowVideos(e.target.checked)}
          />
        </SwitchWrapper>
      </SwitchContainer>
    </FiltersContainer>
  );
};

export default GalleryFilters;

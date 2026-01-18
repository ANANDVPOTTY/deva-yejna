import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  MediaWrapper,
  ModalImage,
  ModalVideo,
  ModalInfo,
  ModalCategory,
  ModalDescription,
} from "./GalleryModal.styles";

const GalleryModal = ({ item, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!item) return null;

  const isVideo = item.type === "video";

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <CloseIcon />
          </CloseButton>
        </ModalHeader>

        <MediaWrapper>
          {isVideo ? (
            <ModalVideo controls autoPlay controlsList="nodownload">
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </ModalVideo>
          ) : (
            <ModalImage src={item.src} alt={item.description} />
          )}
        </MediaWrapper>

        <ModalInfo>
          <ModalCategory>{item.category}</ModalCategory>
          <ModalDescription>{item.description}</ModalDescription>
        </ModalInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

GalleryModal.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default GalleryModal;

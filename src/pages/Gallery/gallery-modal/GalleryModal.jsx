import { useEffect, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
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
        <CloseButton onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </CloseButton>

        {isVideo ? (
          <ModalVideo controls autoPlay>
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </ModalVideo>
        ) : (
          <ModalImage src={item.src} alt={item.description} />
        )}

        <ModalInfo>
          <ModalCategory>{item.category}</ModalCategory>
          <ModalDescription>{item.description}</ModalDescription>
        </ModalInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

export default GalleryModal;

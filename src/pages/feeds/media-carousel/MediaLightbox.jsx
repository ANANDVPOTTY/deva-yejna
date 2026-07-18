import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FeedVideo from "./FeedVideo";
import {
  LightboxContent,
  LightboxImage,
  LightboxVideoStage,
  LightboxClose,
  LightboxArrow,
  LightboxCounter,
} from "./MediaCarousel.styles";

const ZOOM_SCALE = 2.2;

// Fullscreen viewer for a single post's media. Images support double-click zoom
// with drag-to-pan; videos play with native controls and are never zoomable.
const MediaLightbox = ({ media, index, onClose, onNavigate }) => {
  const count = media.length;
  const isMulti = count > 1;
  const item = media[index];
  const isImage = item?.type === "image";

  const [zoomed, setZoomed] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const panRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  // Reset zoom + pan before moving to another item.
  const resetView = useCallback(() => {
    setZoomed(false);
    setPan({ x: 0, y: 0 });
  }, []);

  const prev = useCallback(() => {
    resetView();
    onNavigate(index - 1);
  }, [resetView, onNavigate, index]);
  const next = useCallback(() => {
    resetView();
    onNavigate(index + 1);
  }, [resetView, onNavigate, index]);

  // Arrow-key navigation between media while the lightbox is open.
  useEffect(() => {
    if (!isMulti) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMulti, prev, next]);

  const toggleZoom = () => {
    if (!isImage) return;
    setZoomed((z) => {
      if (z) setPan({ x: 0, y: 0 });
      return !z;
    });
  };

  const onPointerDown = (e) => {
    if (!zoomed) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    panRef.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      baseX: pan.x,
      baseY: pan.y,
    };
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!panRef.current.dragging) return;
    setPan({
      x: panRef.current.baseX + (e.clientX - panRef.current.startX),
      y: panRef.current.baseY + (e.clientY - panRef.current.startY),
    });
  };

  const endPan = () => {
    panRef.current.dragging = false;
    setDragging(false);
  };

  return (
    <Modal
      open
      onClose={onClose}
      aria-label="Media viewer"
      slotProps={{
        backdrop: { sx: { backgroundColor: "rgba(20,19,18,.94)" } },
      }}
    >
      <LightboxContent onClick={onClose}>
        <LightboxClose
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          disableRipple
        >
          <CloseRoundedIcon />
        </LightboxClose>

        {isImage ? (
          <LightboxImage
            src={item.src}
            alt=""
            zoomed={zoomed ? 1 : 0}
            draggable={false}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={toggleZoom}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPan}
            onPointerCancel={endPan}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${
                zoomed ? ZOOM_SCALE : 1
              })`,
              transition: dragging
                ? "none"
                : "transform 260ms cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        ) : (
          <LightboxVideoStage onClick={(e) => e.stopPropagation()}>
            <FeedVideo key={item.src} src={item.src} isActive />
          </LightboxVideoStage>
        )}

        {isMulti && (
          <>
            <LightboxArrow
              className="arrow-prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              disabled={index === 0}
              aria-label="Previous media"
              disableRipple
            >
              <ChevronLeftIcon />
            </LightboxArrow>
            <LightboxArrow
              className="arrow-next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              disabled={index === count - 1}
              aria-label="Next media"
              disableRipple
            >
              <ChevronRightIcon />
            </LightboxArrow>
            <LightboxCounter>
              {index + 1} / {count}
            </LightboxCounter>
          </>
        )}
      </LightboxContent>
    </Modal>
  );
};

MediaLightbox.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video"]).isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default MediaLightbox;

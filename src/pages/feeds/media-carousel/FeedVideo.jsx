import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { StyledVideo } from "./MediaCarousel.styles";

// Muted, looping video that plays ONLY while it is the active slide AND on-screen.
// No controls are rendered; casual downloading is deterred via attributes + context menu block.
const FeedVideo = ({ src, isActive }) => {
  const videoRef = useRef(null);
  const onScreenRef = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;

    // Ensure muted is set as a property (attribute alone is unreliable for autoplay).
    el.muted = true;
    el.defaultMuted = true;

    const sync = () => {
      if (isActive && onScreenRef.current) {
        const p = el.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        el.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreenRef.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    sync();

    return () => observer.disconnect();
  }, [isActive]);

  return (
    <StyledVideo
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      disableRemotePlayback
      controlsList="nodownload noplaybackrate nofullscreen"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

FeedVideo.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FeedVideo;

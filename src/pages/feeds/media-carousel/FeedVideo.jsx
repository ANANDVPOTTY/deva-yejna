import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { StyledVideo, MuteButton } from "./MediaCarousel.styles";

// Muted, looping video that plays ONLY while it is the active slide AND on-screen.
// Starts muted (required for autoplay); a single mute/unmute button is the only
// control. No native playback UI; casual downloading is deterred via attributes.
const FeedVideo = ({ src, isActive }) => {
  const videoRef = useRef(null);
  const onScreenRef = useRef(false);
  const [muted, setMuted] = useState(true);

  // Keep the element's muted property in sync with state (defined first so the
  // element is muted before the play effect below attempts autoplay).
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = muted;
    el.defaultMuted = muted;
  }, [muted]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;

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

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((prev) => !prev);
  };

  return (
    <>
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
      <MuteButton
        type="button"
        onClick={toggleMute}
        onPointerDown={(e) => e.stopPropagation()}
        disableRipple
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
      >
        {muted ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
      </MuteButton>
    </>
  );
};

FeedVideo.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FeedVideo;

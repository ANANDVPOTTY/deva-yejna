import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { StyledVideo, MuteButton, VideoLoader } from "./MediaCarousel.styles";

// Muted, looping video that plays ONLY while it is the active slide AND on-screen.
// Starts muted (required for autoplay); a single mute/unmute button is the only
// control. No native playback UI; casual downloading is deterred via attributes.
const FeedVideo = ({ src, isActive }) => {
  const videoRef = useRef(null);
  const onScreenRef = useRef(false);
  const [muted, setMuted] = useState(true);
  // True only once the video is actually rendering playback frames. Until then
  // (while it buffers) the active slide shows the spinner instead of a blank
  // backdrop. Tied to real playback — NOT to canplay/loadeddata, which fire
  // early during neighbour pre-load, before this slide is ever on screen.
  const [playing, setPlaying] = useState(false);

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

  // Reflect real playback state so the spinner shows during the buffer-to-play
  // window and returns if playback stalls. `playing` fires when frames actually
  // start rendering; waiting/pause/ended clear it.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;

    const onPlaying = () => setPlaying(true);
    const onStalled = () => setPlaying(false);

    el.addEventListener("playing", onPlaying);
    el.addEventListener("waiting", onStalled);
    el.addEventListener("pause", onStalled);
    el.addEventListener("ended", onStalled);
    el.addEventListener("emptied", onStalled);

    return () => {
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("waiting", onStalled);
      el.removeEventListener("pause", onStalled);
      el.removeEventListener("ended", onStalled);
      el.removeEventListener("emptied", onStalled);
    };
  }, [src]);

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
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate nofullscreen"
        onContextMenu={(e) => e.preventDefault()}
      />
      {isActive && !playing && (
        <VideoLoader aria-hidden="true">
          <CircularProgress size={32} thickness={4} color="inherit" />
        </VideoLoader>
      )}
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

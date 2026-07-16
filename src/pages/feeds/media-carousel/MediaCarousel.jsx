import { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FeedVideo from "./FeedVideo";
import {
  CarouselRoot,
  Frame,
  Track,
  Slide,
  Backdrop,
  BackdropTint,
  Foreground,
  StyledImage,
  ArrowButton,
  CounterBadge,
  TypeBadge,
  DotsRow,
  Dot,
} from "./MediaCarousel.styles";

const SWIPE_THRESHOLD = 40;

const MediaCarousel = ({ media }) => {
  const count = media.length;
  const isMulti = count > 1;
  const [index, setIndex] = useState(0);
  const dragRef = useRef({ startX: 0, dragging: false });

  const goTo = useCallback(
    (next) => setIndex(Math.max(0, Math.min(count - 1, next))),
    [count]
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isMulti) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [isMulti, prev, next]
  );

  const onPointerDown = useCallback((e) => {
    dragRef.current = { startX: e.clientX, dragging: true };
  }, []);

  const onPointerUp = useCallback(
    (e) => {
      if (!dragRef.current.dragging) return;
      dragRef.current.dragging = false;
      const dx = e.clientX - dragRef.current.startX;
      if (dx > SWIPE_THRESHOLD) prev();
      else if (dx < -SWIPE_THRESHOLD) next();
    },
    [prev, next]
  );

  return (
    <CarouselRoot
      tabIndex={isMulti ? 0 : -1}
      onKeyDown={handleKeyDown}
      role={isMulti ? "group" : undefined}
      aria-roledescription={isMulti ? "carousel" : undefined}
    >
      <Frame
        onPointerDown={isMulti ? onPointerDown : undefined}
        onPointerUp={isMulti ? onPointerUp : undefined}
      >
        <Track style={{ transform: `translateX(-${index * 100}%)` }}>
          {media.map((item, i) => (
            <Slide key={i}>
              {item.type === "image" ? (
                <>
                  <Backdrop style={{ backgroundImage: `url(${item.src})` }} />
                  <BackdropTint />
                  <Foreground>
                    <StyledImage
                      src={item.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </Foreground>
                </>
              ) : (
                <>
                  <Backdrop data-video="1" />
                  <BackdropTint />
                  <Foreground>
                    <FeedVideo src={item.src} isActive={i === index} />
                  </Foreground>
                  <TypeBadge>
                    <PlayArrowRoundedIcon sx={{ fontSize: 14 }} />
                    Video
                  </TypeBadge>
                </>
              )}
            </Slide>
          ))}
        </Track>

        {isMulti && (
          <>
            <ArrowButton
              className="arrow-prev"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous media"
              disableRipple
            >
              <ChevronLeftIcon />
            </ArrowButton>
            <ArrowButton
              className="arrow-next"
              onClick={next}
              disabled={index === count - 1}
              aria-label="Next media"
              disableRipple
            >
              <ChevronRightIcon />
            </ArrowButton>
            <CounterBadge>
              {index + 1} / {count}
            </CounterBadge>
          </>
        )}
      </Frame>

      {isMulti && (
        <DotsRow>
          {media.map((_, i) => (
            <Dot
              key={i}
              type="button"
              active={i === index ? 1 : 0}
              onClick={() => goTo(i)}
              aria-label={`Go to media ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </DotsRow>
      )}
    </CarouselRoot>
  );
};

MediaCarousel.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video"]).isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MediaCarousel;

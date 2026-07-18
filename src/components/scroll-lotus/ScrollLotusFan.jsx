import {
  LazyMotion,
  domAnimation,
  m as M,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import PropTypes from "prop-types";

/**
 * ScrollLotusFan — alternate lotus that recreates the classic "fan of
 * translucent rounded petals" CSS lotus, but bloomed by page scroll.
 *
 * Same public API and scroll wiring as {@link ScrollLotus} (drop-in swap):
 * window scroll → `useScroll` → `useSpring` progress. Each petal is a rounded
 * square (border-radius on two corners = a petal) pivoted on its top-right
 * corner, exactly like the reference markup. Closed, every petal sits at the
 * base 45° (a bud); as you scroll they fan out to their open angle
 * (45 → 225°) so the overlapping, semi-transparent petals build up a full,
 * layered lotus. Sizing uses container-query units so the fixed-px reference
 * scales down cleanly into the corner.
 *
 * Purely decorative: pointer-events off, hidden from a11y, only
 * transform/opacity animate (GPU-composited, no per-frame React re-renders).
 */

const BLOOM_END = 0.82;

// Base angle every petal shares when closed (the bud), from the reference.
const BASE_ANGLE = 45;

// Open fan angles — the reference's show-2..show-8 end states, plus the
// static base petal at 45. Symmetric sweep from 45° to 225°.
const OPEN_ANGLES = [45, 71, 96, 123, 149, 175, 200, 225];

const Petal = ({ progress, openAngle, index }) => {
  // Closed: bunched at the base angle (bud). Open: fanned to its own angle.
  const rotate = useTransform(
    progress,
    [0, BLOOM_END],
    [BASE_ANGLE, openAngle],
  );
  // Gentle grow so the bud swells as it opens (reference only rotates).
  const scale = useTransform(progress, [0, BLOOM_END], [0.55, 1]);
  const opacity = useTransform(progress, [0, 0.18], [0, 0.5]);

  return (
    <M.div
      style={{
        position: "absolute",
        left: 0,
        // Push the petal down so its top-right pivot sits near the base.
        top: "78cqw",
        width: "60cqw",
        height: "60cqw",
        // Two rounded corners turn the square into a petal.
        borderRadius: "60cqw 0",
        transformOrigin: "top right",
        // Alternate the two tones for a touch of depth between layers.
        background:
          index % 2 === 0
            ? "linear-gradient(45deg, rgba(255,214,235,0.9) 8%, rgba(220,60,140,1) 30%, rgba(158,31,99,1) 100%)"
            : "linear-gradient(45deg, rgba(255,224,240,0.9) 8%, rgba(255,90,165,1) 30%, rgba(200,45,120,1) 100%)",
        rotate,
        scale,
        opacity,
      }}
    />
  );
};

Petal.propTypes = {
  progress: PropTypes.object.isRequired,
  openAngle: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const ScrollLotusFan = ({
  position = "bottom-right",
  // ⬅️ Overall flower size — the whole lotus scales off this one value.
  // Petals are sized in cqw (relative to this width), so shrink/grow here.
  size = "clamp(125px, 17vw, 210px)",
  opacity = 0.95,
}) => {
  const { scrollYProgress } = useScroll();
  const bloom = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    restDelta: 0.001,
  });

  const glowScale = useTransform(bloom, [0, BLOOM_END], [0.4, 1.1]);
  const glowOpacity = useTransform(bloom, [0, BLOOM_END], [0, 0.5]);

  const anchor =
    position === "bottom-left"
      ? { left: "clamp(44px, 5vw, 94px)" }
      : { right: "clamp(44px, 5vw, 94px)" };

  return (
    <LazyMotion features={domAnimation}>
      {/* Full-viewport clip layer: petals overflow their box (bud hangs low,
          open bloom fans wide), and since the lotus is fixed, that overflow
          would add page scrollbars. Clipping at the screen edges kills the
          scrollbars without cutting anything actually on-screen. */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 40,
        }}
      >
        <M.div
          style={{
            position: "absolute",
            bottom: "clamp(32px, 5vw, 72px)",
            ...anchor,
            width: size,
            // Petals are sized in cqw, so make this the query container.
            containerType: "inline-size",
            opacity,
            filter: "drop-shadow(0 8px 20px rgba(200, 40, 120, 0.30))",
          }}
        >
          {/* Stage: relative box the absolutely-positioned petals fan out of. */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "80cqw",
              overflow: "visible",
            }}
          >
            {/* soft glow behind the flower — sits over the shared pivot */}
            <M.div
              style={{
                position: "absolute",
                left: "10cqw",
                top: "18cqw",
                width: "80cqw",
                height: "80cqw",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,205,230,0.9) 0%, rgba(255,205,230,0) 70%)",
                transformOrigin: "center",
                scale: glowScale,
                opacity: glowOpacity,
              }}
            />

            {OPEN_ANGLES.map((openAngle, index) => (
              <Petal
                key={openAngle}
                progress={bloom}
                openAngle={openAngle}
                index={index}
              />
            ))}
          </div>
        </M.div>
      </div>
    </LazyMotion>
  );
};

ScrollLotusFan.propTypes = {
  position: PropTypes.oneOf(["bottom-right", "bottom-left"]),
  size: PropTypes.string,
  opacity: PropTypes.number,
};

export default ScrollLotusFan;

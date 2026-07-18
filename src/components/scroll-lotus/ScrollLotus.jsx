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
 * ScrollLotus — a cute, symmetric lotus that blooms with page scroll.
 *
 * Tied to window scroll via `useScroll`; a spring smooths the progress so the
 * petals open gently. Two symmetric rows of petals fan out from a shared base
 * pivot (120, 165) — the outer row droops to horizontal so the open flower
 * reads as a full, round lotus rather than an upward splash. Only
 * transform/opacity animate (GPU-composited) and there are no per-frame React
 * re-renders. Purely decorative: pointer-events disabled, hidden from a11y.
 *
 * Bloom completes by ~82% scroll so the fully-open lotus is visible for the
 * last stretch of the page instead of only at the exact bottom.
 */

const BLOOM_END = 0.82;

// Petal teardrops, base anchored on the pivot (120, 165), tip pointing up.
const LONG_D = "M120,165 C96,120 100,75 120,45 C140,75 144,120 120,165 Z";
const MED_D = "M120,165 C102,128 104,92 120,70 C136,92 138,128 120,165 Z";

// Fan angles in degrees (0 = straight up). Symmetric left/right.
const BACK_PETALS = [-100, -52, -17, 17, 52, 100]; // long, light — droop to horizontal
const FRONT_PETALS = [-70, -35, 0, 35, 70]; // medium, deeper pink

// Golden stamen dots clustered above the base.
const STAMENS = [
  [120, 118],
  [106, 126],
  [134, 126],
  [112, 110],
  [128, 110],
];

const PIVOT = { transformBox: "view-box", transformOrigin: "120px 165px" };

const Petal = ({ progress, angle, d, fill, closedScale }) => {
  // Closed: petals bunched near vertical & small (a bud). Open: full fan + full size.
  const rotate = useTransform(progress, [0, BLOOM_END], [angle * 0.05, angle]);
  const scale = useTransform(progress, [0, BLOOM_END], [closedScale, 1]);
  const opacity = useTransform(progress, [0, 0.15], [0.6, 1]);

  return (
    <M.path d={d} fill={fill} style={{ rotate, scale, opacity, ...PIVOT }} />
  );
};

Petal.propTypes = {
  progress: PropTypes.object.isRequired,
  angle: PropTypes.number.isRequired,
  d: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  closedScale: PropTypes.number.isRequired,
};

const ScrollLotus = ({
  position = "bottom-right",
  size = "clamp(180px, 24vw, 300px)",
  opacity = 0.95,
}) => {
  const { scrollYProgress } = useScroll();
  const bloom = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    restDelta: 0.001,
  });

  const coreScale = useTransform(bloom, [0.05, 0.5], [0.5, 1]);
  const coreOpacity = useTransform(bloom, [0.05, 0.4], [0, 1]);
  const glowScale = useTransform(bloom, [0, BLOOM_END], [0.4, 1.1]);
  const glowOpacity = useTransform(bloom, [0, BLOOM_END], [0, 0.55]);
  const stamenOpacity = useTransform(bloom, [0.45, 0.8], [0, 1]);

  const anchor =
    position === "bottom-left"
      ? { left: "clamp(8px, 3vw, 40px)" }
      : { right: "clamp(8px, 3vw, 40px)" };

  return (
    <LazyMotion features={domAnimation}>
      <M.div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "clamp(8px, 3vw, 32px)",
          ...anchor,
          width: size,
          pointerEvents: "none",
          zIndex: 40,
          opacity,
          filter: "drop-shadow(0 8px 20px rgba(255, 120, 170, 0.30))",
        }}
      >
        <svg
          viewBox="0 0 240 240"
          width="100%"
          style={{ overflow: "visible", display: "block" }}
        >
          <defs>
            <linearGradient id="lotusPetalBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe6f0" />
              <stop offset="100%" stopColor="#ffa8cd" />
            </linearGradient>
            <linearGradient id="lotusPetalFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff9ec9" />
              <stop offset="100%" stopColor="#ff4f9e" />
            </linearGradient>
            <radialGradient id="lotusCore" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#fff6c0" />
              <stop offset="100%" stopColor="#ffb63e" />
            </radialGradient>
            <radialGradient id="lotusGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd9ea" />
              <stop offset="100%" stopColor="#ffd9ea" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* soft glow behind the flower */}
          <M.circle
            cx="120"
            cy="120"
            r="110"
            fill="url(#lotusGlow)"
            style={{ scale: glowScale, opacity: glowOpacity, ...PIVOT }}
          />

          {/* back row — long, light, droops to horizontal for a full bloom */}
          {BACK_PETALS.map((angle) => (
            <Petal
              key={`b${angle}`}
              progress={bloom}
              angle={angle}
              d={LONG_D}
              fill="url(#lotusPetalBack)"
              closedScale={0.28}
            />
          ))}

          {/* front row — medium, deeper pink */}
          {FRONT_PETALS.map((angle) => (
            <Petal
              key={`f${angle}`}
              progress={bloom}
              angle={angle}
              d={MED_D}
              fill="url(#lotusPetalFront)"
              closedScale={0.4}
            />
          ))}

          {/* golden center */}
          <M.ellipse
            cx="120"
            cy="152"
            rx="24"
            ry="17"
            fill="url(#lotusCore)"
            style={{ scale: coreScale, opacity: coreOpacity, ...PIVOT }}
          />

          {/* stamen dots */}
          <M.g style={{ opacity: stamenOpacity }}>
            {STAMENS.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.6" fill="#ffca3a" />
            ))}
          </M.g>
        </svg>
      </M.div>
    </LazyMotion>
  );
};

ScrollLotus.propTypes = {
  position: PropTypes.oneOf(["bottom-right", "bottom-left"]),
  size: PropTypes.string,
  opacity: PropTypes.number,
};

export default ScrollLotus;

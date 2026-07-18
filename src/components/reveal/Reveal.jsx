import { LazyMotion, domAnimation, m as M } from "motion/react";
import PropTypes from "prop-types";

/**
 * Lightweight scroll-reveal wrapper.
 *
 * Uses Framer Motion's LazyMotion + `m` component so only the DOM animation
 * features are bundled (~5KB gzip) instead of the full `motion` component.
 * Animations run on GPU-friendly transform/opacity only — no layout reflow,
 * minimal memory. Elements animate in once as they enter the viewport.
 */
const VARIANTS = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
};

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  style,
  ...rest
}) => (
  <LazyMotion features={domAnimation}>
    <M.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={VARIANTS[direction] ?? VARIANTS.up}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity", ...style }}
      {...rest}
    >
      {children}
    </M.div>
  </LazyMotion>
);

Reveal.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(["up", "down", "left", "right", "fade", "scale"]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  once: PropTypes.bool,
  amount: PropTypes.number,
  style: PropTypes.object,
};

export default Reveal;

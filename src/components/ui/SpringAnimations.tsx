"use client";

import { motion, MotionValue, useSpring, useTransform } from "motion/react";
import { ReactNode } from "react";

/**
 * Remotion-inspired spring configurations
 * Based on Remotion's recommended spring presets
 */
export const springConfigs = {
  // Smooth, no bounce (subtle reveals)
  smooth: {
    stiffness: 100,
    damping: 30,
    mass: 1,
  },
  // Snappy, minimal bounce (UI elements)
  snappy: {
    stiffness: 200,
    damping: 20,
    mass: 1,
  },
  // Bouncy entrance (playful animations)
  bouncy: {
    stiffness: 100,
    damping: 8,
    mass: 1,
  },
  // Heavy, slow, small bounce
  heavy: {
    stiffness: 80,
    damping: 15,
    mass: 2,
  },
  // Default Remotion spring
  default: {
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
};

interface SpringContainerProps {
  children: ReactNode;
  springConfig?: keyof typeof springConfigs;
  delay?: number;
  className?: string;
  animationType?: "scale" | "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
  viewport?: { once?: boolean; margin?: string } | null;
}

/**
 * Container with spring-based entrance animation
 * Mimics Remotion's spring() function behavior
 */
export function SpringContainer({
  children,
  springConfig = "smooth",
  delay = 0,
  className = "",
  animationType = "fadeUp",
  viewport = { once: true, margin: "-100px" },
}: SpringContainerProps) {
  const animations = {
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    fadeUp: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
  };

  const selectedAnimation = animations[animationType];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      {...(viewport === null ? { animate: selectedAnimation.animate } : { whileInView: selectedAnimation.animate, viewport })}
      transition={{
        type: "spring",
        ...springConfigs[springConfig],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SequenceContainerProps {
  children: ReactNode[];
  staggerDelay?: number;
  springConfig?: keyof typeof springConfigs;
  className?: string;
}

/**
 * Remotion-inspired sequence animation
 * Staggers children with spring physics
 */
export function SequenceContainer({
  children,
  staggerDelay = 0.1,
  springConfig = "smooth",
  className = "",
}: SequenceContainerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            ...springConfigs[springConfig],
            delay: index * staggerDelay,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

interface InteractiveSpringProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  tapScale?: number;
  springConfig?: keyof typeof springConfigs;
}

/**
 * Interactive element with spring-based hover and tap effects
 */
export function InteractiveSpring({
  children,
  className = "",
  hoverScale = 1.05,
  tapScale = 0.95,
  springConfig = "snappy",
}: InteractiveSpringProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{
        type: "spring",
        ...springConfigs[springConfig],
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxSpringProps {
  children: ReactNode;
  scrollProgress: MotionValue<number>;
  yRange?: [number, number];
  className?: string;
}

/**
 * Parallax effect with spring smoothing
 */
export function ParallaxSpring({
  children,
  scrollProgress,
  yRange = [0, -100],
  className = "",
}: ParallaxSpringProps) {
  const y = useTransform(scrollProgress, [0, 1], yRange);
  const smoothY = useSpring(y, springConfigs.smooth);

  return (
    <motion.div style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

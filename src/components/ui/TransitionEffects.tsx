"use client";

import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";

/**
 * Remotion-inspired transition effects for section changes
 * Based on @remotion/transitions patterns
 */

interface FadeTransitionProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Fade transition - crossfade effect
 */
export function FadeTransition({
  children,
  duration = 0.6,
  delay = 0,
  className = "",
}: FadeTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SlideTransitionProps {
  children: ReactNode;
  direction?: "from-left" | "from-right" | "from-top" | "from-bottom";
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
}

/**
 * Slide transition - slide in from direction
 */
export function SlideTransition({
  children,
  direction = "from-bottom",
  duration = 0.7,
  delay = 0,
  distance = 60,
  className = "",
}: SlideTransitionProps) {
  const directionMap = {
    "from-left": { x: -distance, y: 0 },
    "from-right": { x: distance, y: 0 },
    "from-top": { x: 0, y: -distance },
    "from-bottom": { x: 0, y: distance },
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleTransitionProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  initialScale?: number;
  className?: string;
}

/**
 * Scale transition - zoom in effect
 */
export function ScaleTransition({
  children,
  duration = 0.6,
  delay = 0,
  initialScale = 0.9,
  className = "",
}: ScaleTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface WipeTransitionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Wipe transition - reveal with clip-path
 */
export function WipeTransition({
  children,
  direction = "right",
  duration = 0.8,
  delay = 0,
  className = "",
}: WipeTransitionProps) {
  const clipPathMap = {
    left: {
      initial: "inset(0 100% 0 0)",
      animate: "inset(0 0% 0 0)",
    },
    right: {
      initial: "inset(0 0 0 100%)",
      animate: "inset(0 0 0 0%)",
    },
    up: {
      initial: "inset(100% 0 0 0)",
      animate: "inset(0% 0 0 0)",
    },
    down: {
      initial: "inset(0 0 100% 0)",
      animate: "inset(0 0 0% 0)",
    },
  };

  return (
    <motion.div
      initial={{ clipPath: clipPathMap[direction].initial }}
      whileInView={{ clipPath: clipPathMap[direction].animate }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.65, 0, 0.35, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode[];
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
}

/**
 * Stagger container - animate children in sequence
 * Similar to Remotion's Series component
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className = "",
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: initialDelay + index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax layer - scroll-based movement
 */
export function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
}: ParallaxLayerProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: -50 * speed }}
      viewport={{ once: false }}
      transition={{
        duration: 0,
        ease: "linear",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

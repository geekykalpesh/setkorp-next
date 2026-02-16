"use client";

import React from "react";
import { motion } from "motion/react";
import { springConfigs } from "./SpringAnimations";

/**
 * Animated paragraph with fade-in effect
 * Professional text reveal for descriptions
 */
interface AnimatedParagraphProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        ...springConfigs.smooth,
        delay,
      }}
    >
      {children}
    </motion.p>
  );
};

/**
 * Animated badge/tag component
 * Subtle scale + fade for labels
 */
interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        ...springConfigs.snappy,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated list item with slide-in effect
 * For feature lists, benefit lists, etc.
 */
interface AnimatedListItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export const AnimatedListItem: React.FC<AnimatedListItemProps> = ({
  children,
  className = "",
  delay = 0,
  index = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        ...springConfigs.snappy,
        delay: delay + index * 0.08,
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated number/stat counter
 * Counts up from 0 to target value
 */
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

/**
 * Animated line/divider
 * Grows from left to right
 */
interface AnimatedLineProps {
  className?: string;
  delay?: number;
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        ...springConfigs.smooth,
        delay,
      }}
      style={{ transformOrigin: "left" }}
    />
  );
};

/**
 * Stagger container for animating children in sequence
 * Wraps multiple elements and animates them with delays
 */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            ...springConfigs.smooth,
            delay: initialDelay + index * staggerDelay,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Animated icon wrapper
 * Subtle bounce effect on viewport entry
 */
interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        ...springConfigs.bouncy,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Fade-in wrapper
 * Simple opacity animation
 */
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 20 };
      case "down": return { y: -20 };
      case "left": return { x: 20 };
      case "right": return { x: -20 };
      default: return {};
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        ...springConfigs.smooth,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

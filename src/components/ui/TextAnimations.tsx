"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

/**
 * Remotion-inspired typewriter effect
 * Uses string slicing (not per-character opacity) as per best practices
 */
export function Typewriter({
  text,
  delay = 0,
  speed = 50,
  className = "",
  showCursor = true,
  onComplete,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    if (currentIndex > text.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
        />
      )}
    </span>
  );
}

interface WordHighlightProps {
  text: string;
  highlightWords: string[];
  highlightClassName?: string;
  className?: string;
  animateHighlight?: boolean;
}

/**
 * Remotion-inspired word highlighting with animated background
 */
export function WordHighlight({
  text,
  highlightWords,
  highlightClassName = "bg-gradient-to-r from-blue-400/20 to-purple-400/20",
  className = "",
  animateHighlight = true,
}: WordHighlightProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        if (isHighlighted && animateHighlight) {
          return (
            <motion.span
              key={index}
              className={`relative inline-block ${highlightClassName} px-1 rounded`}
              initial={{ backgroundSize: "0% 100%" }}
              whileInView={{ backgroundSize: "100% 100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        }

        return <span key={index}>{word} </span>;
      })}
    </span>
  );
}

interface StaggerTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  animationType?: "fadeUp" | "fadeIn" | "scale";
}

/**
 * Staggered text animation (character by character or word by word)
 */
export function StaggerText({
  text,
  className = "",
  staggerDelay = 0.03,
  animationType = "fadeUp",
}: StaggerTextProps) {
  const characters = text.split("");

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          variants={variants[animationType]}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

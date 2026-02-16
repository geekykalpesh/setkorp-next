"use client";

import React from "react";
import { motion } from "motion/react";
import { springConfigs } from "./SpringAnimations";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  springConfig?: keyof typeof springConfigs;
  staggerWords?: boolean;
}

/**
 * Professional heading animation component following Remotion best practices
 * - Uses spring physics for natural motion
 * - Supports word-by-word stagger animation
 * - Viewport-triggered for performance
 * - Preserves colored spans and JSX elements
 */
export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  className = "",
  delay = 0,
  springConfig = "smooth",
  staggerWords = true,
}) => {
  // If staggerWords is false, animate the entire heading as one block
  if (!staggerWords) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          ...springConfigs[springConfig],
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Process children to extract words while preserving JSX elements
  const processChildren = (node: React.ReactNode): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    
    React.Children.forEach(node, (child) => {
      if (typeof child === "string") {
        // Split text into words and add them to result with spaces
        const words = child.split(" ").filter(word => word.length > 0);
        words.forEach((word, index) => {
          result.push(word);
          // Add space after each word except the last one
          if (index < words.length - 1) {
            result.push(" ");
          }
        });
        // Add trailing space if original text ended with space
        if (child.endsWith(" ")) {
          result.push(" ");
        }
      } else if (React.isValidElement(child)) {
        // Preserve JSX elements (like <span className="text-brand">)
        result.push(child);
        // Add space after JSX element
        result.push(" ");
      }
    });
    
    return result;
  };

  const processedChildren = processChildren(children);
  let wordIndex = 0;

  return (
    <div className={className}>
      {processedChildren.map((item, index) => {
        // Handle spaces
        if (item === " ") {
          return <span key={index}> </span>;
        }

        // Handle JSX elements (preserve them with animation)
        if (React.isValidElement(item)) {
          const currentWordIndex = wordIndex++;
          return (
            <motion.span
              key={index}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                ...springConfigs[springConfig],
                delay: delay + currentWordIndex * 0.05,
              }}
            >
              {item}
            </motion.span>
          );
        }

        // Handle regular words
        const currentWordIndex = wordIndex++;
        return (
          <motion.span
            key={index}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              ...springConfigs[springConfig],
              delay: delay + currentWordIndex * 0.05,
            }}
          >
            {item}
          </motion.span>
        );
      })}
    </div>
  );
};

/**
 * Typewriter effect component following Remotion patterns
 * Uses string slicing (not per-character opacity) as per best practices
 */
interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number; // Characters per second
  showCursor?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  className = "",
  delay = 0,
  speed = 20,
  showCursor = false,
}) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay * 1000 + (1000 / speed) * currentIndex);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

/**
 * Fade-in text animation with character stagger
 * Professional alternative to word stagger
 */
interface FadeInTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.02,
}) => {
  const characters = children.split("");

  return (
    <div className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: delay + index * staggerDelay,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

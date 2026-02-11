import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CalculatorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".button-1",
        { opacity: [1, 0.5, 1], scale: [1, 0.8, 1] },
        { duration: 0.2 }
      );
      await animate(
        ".button-2",
        { opacity: [1, 0.5, 1], scale: [1, 0.8, 1] },
        { duration: 0.2 }
      );
      await animate(
        ".button-3",
        { opacity: [1, 0.5, 1], scale: [1, 0.8, 1] },
        { duration: 0.2 }
      );
      animate(".screen", { opacity: [1, 0.7, 1] }, { duration: 0.4 });
    };

    const stop = () => {
      animate(".button-1", { scale: 1, opacity: 1 }, { duration: 0.2 });
      animate(".button-2", { scale: 1, opacity: 1 }, { duration: 0.2 });
      animate(".button-3", { scale: 1, opacity: 1 }, { duration: 0.2 });
      animate(".screen", { opacity: 1 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.div
        ref={scope}
        className={`inline-flex items-center justify-center ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="8" y1="6" x2="16" y2="6" className="screen" />
          <line x1="16" y1="14" x2="16" y2="14" className="button-1" />
          <line x1="8" y1="10" x2="8" y2="10" className="button-2" />
          <line x1="12" y1="10" x2="12" y2="10" className="button-3" />
          <line x1="16" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="8" y2="14" />
          <line x1="12" y1="14" x2="12" y2="14" />
          <line x1="8" y1="18" x2="8" y2="18" />
          <line x1="12" y1="18" x2="12" y2="18" />
          <line x1="16" y1="18" x2="16" y2="18" />
        </svg>
      </motion.div>
    );
  },
);

CalculatorIcon.displayName = "CalculatorIcon";
export default CalculatorIcon;

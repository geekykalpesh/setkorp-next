"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#ffffff",
  className,
  dotColors = [[227, 88, 77]], // Brand color default
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
  dotColors?: number[][];
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const { onMouseEnter, onMouseLeave, ...rest } = props;

  const handleMouseEnter = (e: ReactMouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: ReactMouseEvent<HTMLDivElement>) => {
    setIsHovering(false);
    onMouseLeave?.(e);
  };

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-slate-200 bg-white dark:border-neutral-800 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-50"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={dotColors}
            dotSize={3}
            opacities={[0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.6, 0.6, 0.6, 0.8]}
            showGradient={false}
          />
        )}
      </motion.div>
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

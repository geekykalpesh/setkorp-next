"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  speed?: number; // duration in seconds
}

export const Marquee = ({
  children,
  direction = "left",
  pauseOnHover = true,
  className,
  speed = 40,
}: MarqueeProps) => {
  return (
    <div className={cn("overflow-hidden group flex", className)}>
      <div
        className={cn("flex min-w-full shrink-0 items-center justify-around gap-8 py-4", {
          "animate-marquee": direction === "left",
          "animate-marquee-reverse": direction === "right",
          "group-hover:[animation-play-state:paused]": pauseOnHover,
        })}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

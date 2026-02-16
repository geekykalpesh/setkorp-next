import { useEffect, useState } from 'react';

/**
 * Remotion-inspired hook for frame-based animations in web
 * Returns elapsed time in seconds since component mount
 */
export function useAnimationFrame() {
  const [frame, setFrame] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // Convert to seconds
      
      setTime(elapsed);
      setFrame(Math.floor(elapsed * 60)); // Assume 60fps
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return { frame, time };
}

/**
 * Remotion-style interpolation function
 * Maps input range to output range with optional easing
 */
export function interpolate(
  value: number,
  inputRange: [number, number],
  outputRange: [number, number],
  options?: {
    extrapolateLeft?: 'clamp' | 'extend';
    extrapolateRight?: 'clamp' | 'extend';
    easing?: (t: number) => number;
  }
): number {
  const { extrapolateLeft = 'extend', extrapolateRight = 'extend', easing } = options || {};

  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;

  // Normalize input to 0-1 range
  let progress = (value - inputMin) / (inputMax - inputMin);

  // Handle extrapolation
  if (progress < 0 && extrapolateLeft === 'clamp') progress = 0;
  if (progress > 1 && extrapolateRight === 'clamp') progress = 1;

  // Apply easing if provided
  if (easing && progress >= 0 && progress <= 1) {
    progress = easing(progress);
  }

  // Map to output range
  return outputMin + progress * (outputMax - outputMin);
}

/**
 * Common easing functions (Remotion-style)
 */
export const Easing = {
  linear: (t: number) => t,
  
  // Quadratic
  inQuad: (t: number) => t * t,
  outQuad: (t: number) => t * (2 - t),
  inOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  
  // Cubic
  inCubic: (t: number) => t * t * t,
  outCubic: (t: number) => (--t) * t * t + 1,
  inOutCubic: (t: number) => 
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  
  // Exponential
  inExpo: (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  outExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inOutExpo: (t: number) => {
    if (t === 0 || t === 1) return t;
    if (t < 0.5) return Math.pow(2, 20 * t - 10) / 2;
    return (2 - Math.pow(2, -20 * t + 10)) / 2;
  },
  
  // Circular
  inCirc: (t: number) => 1 - Math.sqrt(1 - t * t),
  outCirc: (t: number) => Math.sqrt(1 - (--t) * t),
  inOutCirc: (t: number) =>
    t < 0.5
      ? (1 - Math.sqrt(1 - 4 * t * t)) / 2
      : (Math.sqrt(1 - (-2 * t + 2) * (-2 * t + 2)) + 1) / 2,
};

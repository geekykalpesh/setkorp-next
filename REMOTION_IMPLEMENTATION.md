# Remotion Best Practices Applied to Setkorp Landing Page

This document explains how we've applied Remotion's animation principles to create a premium, dynamic landing page experience.

## Overview

While Remotion is designed for programmatic video creation, its core animation principles translate beautifully to web applications. We've adapted these principles using Framer Motion to create smooth, professional animations throughout the site.

## Core Principles Applied

### 1. **Frame-Based Timing → Time-Based Animations**

**Remotion Principle**: All animations driven by `useCurrentFrame()` hook
**Web Adaptation**: Custom `useAnimationFrame()` hook for time-based animations

```tsx
// Location: src/hooks/useAnimationFrame.ts
const { frame, time } = useAnimationFrame();
// Returns elapsed time and frame count (60fps)
```

### 2. **Interpolation with Easing**

**Remotion Principle**: `interpolate()` function with custom easing curves
**Web Adaptation**: Interpolation utility with Remotion-style easing functions

```tsx
// Location: src/hooks/useAnimationFrame.ts
const value = interpolate(
  progress,
  [0, 100],
  [0, 1],
  { easing: Easing.inOutQuad, extrapolateRight: 'clamp' }
);
```

**Available Easing Functions**:
- `Easing.linear`
- `Easing.inQuad`, `outQuad`, `inOutQuad`
- `Easing.inCubic`, `outCubic`, `inOutCubic`
- `Easing.inExpo`, `outExpo`, `inOutExpo`
- `Easing.inCirc`, `outCirc`, `inOutCirc`

### 3. **Spring Physics**

**Remotion Principle**: Natural motion using `spring()` with physical properties
**Web Adaptation**: Spring configurations matching Remotion's presets

```tsx
// Location: src/components/ui/SpringAnimations.tsx
export const springConfigs = {
  smooth: { stiffness: 100, damping: 30, mass: 1 },    // Subtle reveals
  snappy: { stiffness: 200, damping: 20, mass: 1 },    // UI elements
  bouncy: { stiffness: 100, damping: 8, mass: 1 },     // Playful animations
  heavy: { stiffness: 80, damping: 15, mass: 2 },      // Slow, weighty
  default: { stiffness: 100, damping: 10, mass: 1 },   // Remotion default
};
```

### 4. **Sequencing & Staggering**

**Remotion Principle**: `<Sequence>` and `<Series>` for timing control
**Web Adaptation**: Staggered animations with precise delay control

```tsx
// Location: src/components/ui/SpringAnimations.tsx
<SequenceContainer staggerDelay={0.1} springConfig="smooth">
  {items.map(item => <Item key={item.id} {...item} />)}
</SequenceContainer>
```

### 5. **Text Animations**

**Remotion Principle**: String slicing for typewriter effects (NOT per-character opacity)
**Web Adaptation**: Proper typewriter implementation

```tsx
// Location: src/components/ui/TextAnimations.tsx
<Typewriter 
  text="Your text here"
  delay={500}
  speed={50}
  showCursor={true}
/>
```

**Important**: Following Remotion best practices, we use string slicing, not opacity transitions.

### 6. **Transitions**

**Remotion Principle**: `@remotion/transitions` for scene changes
**Web Adaptation**: Transition effects library

```tsx
// Location: src/components/ui/TransitionEffects.tsx
<SlideTransition direction="from-left" duration={0.8} delay={0.2}>
  <YourComponent />
</SlideTransition>
```

**Available Transitions**:
- `FadeTransition` - Crossfade effect
- `SlideTransition` - Slide from direction (left/right/top/bottom)
- `ScaleTransition` - Zoom in effect
- `WipeTransition` - Reveal with clip-path
- `StaggerContainer` - Sequence children animations

## Components Created

### 1. Animation Utilities (`src/hooks/useAnimationFrame.ts`)
- `useAnimationFrame()` - Frame-based timing hook
- `interpolate()` - Value mapping with easing
- `Easing` - Comprehensive easing functions

### 2. Text Animations (`src/components/ui/TextAnimations.tsx`)
- `Typewriter` - Typewriter effect with cursor
- `WordHighlight` - Animated word highlighting
- `StaggerText` - Character-by-character animation

### 3. Spring Animations (`src/components/ui/SpringAnimations.tsx`)
- `SpringContainer` - Entrance animations with spring physics
- `SequenceContainer` - Staggered children animations
- `InteractiveSpring` - Hover/tap spring effects
- `ParallaxSpring` - Scroll-based parallax

### 4. Transition Effects (`src/components/ui/TransitionEffects.tsx`)
- `FadeTransition` - Fade in/out
- `SlideTransition` - Directional slides
- `ScaleTransition` - Scale animations
- `WipeTransition` - Clip-path reveals
- `StaggerContainer` - Sequential animations
- `ParallaxLayer` - Scroll parallax

## Implementation Examples

### Hero Section
```tsx
// src/components/Hero.tsx
<SpringContainer springConfig="snappy" delay={0.2} animationType="fadeUp">
  <InteractiveSpring hoverScale={1.03} tapScale={0.97}>
    <Link href="#contact">Book Your Free Strategy Call</Link>
  </InteractiveSpring>
</SpringContainer>
```

**Applied Principles**:
- ✅ Spring physics (snappy config)
- ✅ Staggered delays (0.2s, 0.35s)
- ✅ Interactive feedback (hover/tap)

### Problem/Solution Section
```tsx
// src/components/ProblemSolution.tsx
<SlideTransition direction="from-left" delay={0.2}>
  <SpringContainer springConfig="smooth" delay={0.4}>
    <video autoPlay loop muted />
  </SpringContainer>
  <StaggerContainer staggerDelay={0.08} initialDelay={0.5}>
    {items.map(item => <ListItem {...item} />)}
  </StaggerContainer>
</SlideTransition>
```

**Applied Principles**:
- ✅ Directional transitions (slide from left/right)
- ✅ Nested sequencing (video → list items)
- ✅ Staggered reveals (0.08s between items)
- ✅ Smooth spring physics

### Text Highlighting
```tsx
<WordHighlight
  text="Most Founders Waste 3 Months on Setup Alone"
  highlightWords={["3 Months", "Setup Alone"]}
  highlightClassName="bg-gradient-to-r from-brand/20 to-brand/10"
/>
```

**Applied Principles**:
- ✅ Animated background reveals
- ✅ Staggered word animations
- ✅ Smooth easing curves

## Best Practices Followed

### ✅ DO:
1. **Use spring physics** for natural motion
2. **Stagger animations** for visual hierarchy
3. **Clamp extrapolation** to prevent overshoot
4. **Use string slicing** for typewriter effects
5. **Apply viewport triggers** for scroll-based animations
6. **Premount sequences** for smooth playback

### ❌ DON'T:
1. **Don't use CSS transitions** - Use Framer Motion instead
2. **Don't use Tailwind animation classes** - They won't work with our system
3. **Don't use per-character opacity** - Use string slicing
4. **Don't skip easing functions** - Always define motion curves
5. **Don't nest too many springs** - Can cause performance issues

## Performance Optimizations

1. **Viewport-based triggers**: Animations only fire when elements enter viewport
2. **Once-only animations**: Most animations run once to prevent re-renders
3. **Lazy loading**: Below-fold components are dynamically imported
4. **Premounting**: Critical animations are premounted for smooth playback

## Spring Configuration Guide

Choose the right spring based on your use case:

| Config | Use Case | Feel |
|--------|----------|------|
| `smooth` | Section entrances, subtle reveals | Gentle, no bounce |
| `snappy` | Buttons, cards, UI elements | Quick, minimal bounce |
| `bouncy` | Playful elements, celebrations | Fun, pronounced bounce |
| `heavy` | Large elements, modals | Weighty, slow |
| `default` | General purpose | Remotion standard |

## Timing Guidelines

Based on Remotion best practices:

- **Micro-interactions**: 0.2-0.4s (buttons, hovers)
- **Element entrances**: 0.5-0.8s (cards, sections)
- **Page transitions**: 0.8-1.2s (major changes)
- **Stagger delays**: 0.05-0.15s (between items)

## Future Enhancements

Potential additions based on Remotion capabilities:

1. **Audio visualization** - Reactive elements based on audio
2. **3D transformations** - Using React Three Fiber
3. **Lottie animations** - Embedded motion graphics
4. **Chart animations** - Data visualization transitions
5. **Video compositions** - Nested video sequences

## Resources

- [Remotion Documentation](https://remotion.dev)
- [Remotion Transitions](https://remotion.dev/docs/transitions)
- [Framer Motion](https://motion.dev)
- [Spring Physics Explained](https://remotion.dev/docs/spring)

## Summary

We've successfully translated Remotion's video animation principles into a premium web experience:

✅ **Frame-based timing** → Time-based animations
✅ **Spring physics** → Natural, organic motion  
✅ **Interpolation** → Smooth value transitions
✅ **Sequencing** → Staggered, choreographed animations
✅ **Text effects** → Typewriter & highlighting
✅ **Transitions** → Scene change effects

The result is a landing page that feels alive, premium, and professionally animated while maintaining excellent performance.

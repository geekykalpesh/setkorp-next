# Quick Reference: Remotion-Inspired Animations

## 🚀 Quick Start

### 1. Spring Entrance Animation
```tsx
import { SpringContainer } from "@/components/ui/SpringAnimations";

<SpringContainer 
  springConfig="smooth"    // smooth | snappy | bouncy | heavy | default
  delay={0.2}              // seconds
  animationType="fadeUp"   // fadeUp | fadeIn | scale | slideLeft | slideRight
>
  <YourComponent />
</SpringContainer>
```

### 2. Interactive Spring (Hover/Tap)
```tsx
import { InteractiveSpring } from "@/components/ui/SpringAnimations";

<InteractiveSpring 
  hoverScale={1.05}        // scale on hover
  tapScale={0.95}          // scale on tap/click
  springConfig="snappy"
>
  <Button>Click me</Button>
</InteractiveSpring>
```

### 3. Slide Transition
```tsx
import { SlideTransition } from "@/components/ui/TransitionEffects";

<SlideTransition 
  direction="from-left"    // from-left | from-right | from-top | from-bottom
  duration={0.8}           // seconds
  delay={0.2}
>
  <Card />
</SlideTransition>
```

### 4. Staggered List
```tsx
import { StaggerContainer } from "@/components/ui/TransitionEffects";

<StaggerContainer 
  staggerDelay={0.1}       // delay between items
  initialDelay={0.3}       // delay before first item
>
  {items.map(item => <ListItem key={item.id} {...item} />)}
</StaggerContainer>
```

### 5. Typewriter Effect
```tsx
import { Typewriter } from "@/components/ui/TextAnimations";

<Typewriter 
  text="Your text here"
  delay={500}              // ms before starting
  speed={50}               // ms per character
  showCursor={true}
  onComplete={() => console.log('Done!')}
/>
```

### 6. Word Highlighting
```tsx
import { WordHighlight } from "@/components/ui/TextAnimations";

<WordHighlight 
  text="Most Founders Waste 3 Months on Setup"
  highlightWords={["3 Months", "Setup"]}
  highlightClassName="bg-gradient-to-r from-brand/20 to-brand/10"
  animateHighlight={true}
/>
```

## 🎨 Spring Configurations

| Config | Best For | Feel |
|--------|----------|------|
| `smooth` | Section entrances, content reveals | Gentle, no bounce |
| `snappy` | Buttons, cards, UI interactions | Quick, minimal bounce |
| `bouncy` | Playful elements, success states | Fun, pronounced bounce |
| `heavy` | Large modals, overlays | Slow, weighty |
| `default` | General purpose | Standard Remotion |

## ⏱️ Timing Guidelines

```tsx
// Micro-interactions (buttons, hovers)
delay={0.1} duration={0.3}

// Element entrances (cards, sections)
delay={0.2} duration={0.6}

// Major transitions (page changes)
delay={0.3} duration={1.0}

// Stagger delays (between list items)
staggerDelay={0.05}  // Fast
staggerDelay={0.1}   // Medium
staggerDelay={0.15}  // Slow
```

## 🎯 Common Patterns

### Pattern 1: Card Grid with Stagger
```tsx
<div className="grid grid-cols-3 gap-6">
  <StaggerContainer staggerDelay={0.1}>
    {cards.map(card => (
      <InteractiveSpring key={card.id} hoverScale={1.05}>
        <Card {...card} />
      </InteractiveSpring>
    ))}
  </StaggerContainer>
</div>
```

### Pattern 2: Section with Animated Header
```tsx
<section>
  <SpringContainer springConfig="smooth" delay={0.1} animationType="fadeUp">
    <h2>Section Title</h2>
    <p>Description</p>
  </SpringContainer>
  
  <SlideTransition direction="from-bottom" delay={0.3}>
    <Content />
  </SlideTransition>
</section>
```

### Pattern 3: Comparison Cards (Side-by-Side)
```tsx
<div className="grid lg:grid-cols-2 gap-8">
  <SlideTransition direction="from-left" delay={0.2}>
    <Card title="Before" />
  </SlideTransition>
  
  <SlideTransition direction="from-right" delay={0.3}>
    <InteractiveSpring hoverScale={1.02}>
      <Card title="After" />
    </InteractiveSpring>
  </SlideTransition>
</div>
```

### Pattern 4: Hero CTA Buttons
```tsx
<div className="flex gap-4">
  <SpringContainer springConfig="snappy" delay={0.2} animationType="fadeUp">
    <InteractiveSpring hoverScale={1.03} tapScale={0.97}>
      <Button variant="primary">Primary CTA</Button>
    </InteractiveSpring>
  </SpringContainer>
  
  <SpringContainer springConfig="snappy" delay={0.35} animationType="fadeUp">
    <InteractiveSpring hoverScale={1.03} tapScale={0.97}>
      <Button variant="secondary">Secondary CTA</Button>
    </InteractiveSpring>
  </SpringContainer>
</div>
```

## 🔧 Advanced Usage

### Nested Sequences
```tsx
<SpringContainer springConfig="smooth" delay={0.1}>
  <Header />
  
  <StaggerContainer staggerDelay={0.1} initialDelay={0.3}>
    {items.map(item => (
      <InteractiveSpring key={item.id} hoverScale={1.05}>
        <Item {...item} />
      </InteractiveSpring>
    ))}
  </StaggerContainer>
</SpringContainer>
```

### Custom Easing
```tsx
import { interpolate, Easing } from "@/hooks/useAnimationFrame";

const value = interpolate(
  progress,
  [0, 100],
  [0, 1],
  { 
    easing: Easing.inOutCubic,
    extrapolateRight: 'clamp'
  }
);
```

## ✅ Best Practices

1. **Always add delays to staggered elements**
   ```tsx
   // ✅ Good
   <SpringContainer delay={0.2}>
   <SpringContainer delay={0.35}>
   
   // ❌ Bad
   <SpringContainer delay={0.2}>
   <SpringContainer delay={0.2}>  // Same delay!
   ```

2. **Use appropriate spring configs**
   ```tsx
   // ✅ Good
   <InteractiveSpring springConfig="snappy">  // For buttons
   <SpringContainer springConfig="smooth">    // For sections
   
   // ❌ Bad
   <InteractiveSpring springConfig="heavy">   // Too slow for buttons
   ```

3. **Don't over-animate**
   ```tsx
   // ✅ Good - One animation per element
   <SpringContainer>
     <Card />
   </SpringContainer>
   
   // ❌ Bad - Too many nested animations
   <SpringContainer>
     <SlideTransition>
       <ScaleTransition>
         <Card />
       </ScaleTransition>
     </SlideTransition>
   </SpringContainer>
   ```

4. **Use viewport triggers wisely**
   - All components use `whileInView` by default
   - Animations trigger when element enters viewport
   - Set `once: true` to prevent re-triggering

## 📦 Component Locations

```
src/
├── hooks/
│   └── useAnimationFrame.ts          # Frame timing & interpolation
├── components/
│   └── ui/
│       ├── SpringAnimations.tsx      # Spring-based animations
│       ├── TextAnimations.tsx        # Text effects
│       └── TransitionEffects.tsx     # Scene transitions
```

## 🎬 Animation Checklist

When adding animations to a new component:

- [ ] Choose appropriate spring config
- [ ] Set meaningful delays (stagger if multiple elements)
- [ ] Use viewport triggers for scroll-based reveals
- [ ] Add interactive springs to clickable elements
- [ ] Test on mobile (tap vs hover)
- [ ] Verify performance (check frame rate)
- [ ] Ensure accessibility (respect prefers-reduced-motion)

## 🚫 Common Mistakes

1. **Using CSS transitions instead of Framer Motion**
   ```tsx
   // ❌ Bad
   <div className="transition-all duration-300 hover:scale-105">
   
   // ✅ Good
   <InteractiveSpring hoverScale={1.05}>
   ```

2. **Forgetting "use client" directive**
   ```tsx
   // ❌ Bad - Will cause hydration errors
   import { SpringContainer } from "./SpringAnimations";
   
   // ✅ Good
   "use client";
   import { SpringContainer } from "./SpringAnimations";
   ```

3. **Not clamping extrapolation**
   ```tsx
   // ❌ Bad - Values can go outside range
   interpolate(value, [0, 100], [0, 1])
   
   // ✅ Good
   interpolate(value, [0, 100], [0, 1], {
     extrapolateRight: 'clamp'
   })
   ```

## 🎓 Learning Resources

- [Remotion Documentation](https://remotion.dev)
- [Framer Motion Docs](https://motion.dev)
- [Spring Physics Guide](https://remotion.dev/docs/spring)
- [Easing Functions](https://easings.net)

---

**Pro Tip**: Start simple with basic spring animations, then add complexity as needed. The best animations are often the most subtle ones!

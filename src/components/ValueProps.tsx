"use client";

import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";
import { SpringContainer } from "./ui/SpringAnimations";
import { WordHighlight } from "./ui/TextAnimations";
import { AnimatedHeading } from "./ui/AnimatedText";

export const ValueProps = () => {
  return (
    <section className="py-12 md:py-24 bg-surface border-y border-slate-100">
      <div className="container mx-auto px-6">
        <SpringContainer 
          springConfig="smooth" 
          delay={0.1}
          animationType="fadeUp"
          className="max-w-3xl mx-auto text-center mb-12 md:mb-10"
        >
          <AnimatedHeading
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display"
            delay={0.15}
            springConfig="snappy"
            staggerWords={true}
          >
            Why Founders Choose <span className="text-brand">Setkorp</span>
          </AnimatedHeading>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            We're not consultants who disappear after setup. We're the team that answers your 11 PM questions about VAT filing.
          </p>
        </SpringContainer>

        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

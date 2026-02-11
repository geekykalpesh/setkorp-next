import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";

export const ValueProps = () => {
  return (
    <section className="py-12 md:py-24 bg-surface border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display">
            Where Challenges Meet Their Best <span className="text-brand">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Setkorp isn't just a setup service. We're your prosperity partners, transforming business goals into accomplished milestones.
          </p>
        </div>

        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

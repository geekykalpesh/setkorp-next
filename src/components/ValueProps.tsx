import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";

export const ValueProps = () => {
  return (
    <section className="py-12 md:py-24 bg-surface border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display">
            Why Founders Choose <span className="text-brand">Setkorp</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            We're not consultants who disappear after setup. We're the team that answers your 11 PM questions about VAT filing.
          </p>
        </div>

        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

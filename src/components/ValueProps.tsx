import { Users, Award, Zap, Heart } from "lucide-react";

const props = [
  {
    icon: Users,
    title: "Clarity Meets Trust",
    desc: "No jargon. No surprises. Our transparency builds long-term partnerships from day one."
  },
  {
    icon: Award,
    title: "Expertise Forge Excellence",
    desc: "15+ years of UAE expertise helping businesses across holding, tech, and energy sectors."
  },
  {
    icon: Zap,
    title: "Launch Faster",
    desc: "Streamlined 14-day process saving you months of back-and-forth and hidden fees."
  },
  {
    icon: Heart,
    title: "Foundation to Build On",
    desc: "We provide honest advice and responsive support from day one to year ten of your journey."
  }
];

export const ValueProps = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display">
            Where Challenges Meet Their Best <span className="text-brand">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Setkorp isn't just a setup service. We're your prosperity partners, transforming business goals into accomplished milestones.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 md:gap-8">
          {props.map((prop, index) => (
            <div key={index} className="group p-10 bg-white rounded-lg border border-red-100 hover:border-brand hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:scale-110 transition-all">
                  <prop.icon className="w-6 h-6 text-brand group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 font-display">{prop.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

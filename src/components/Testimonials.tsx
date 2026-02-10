import { Star } from "lucide-react";
import { Marquee } from "./Marquee";

const testimonials = [
  {
    text: "Setkorp turned a 3-month nightmare into a 2-week success story. Their banking connections alone saved us 45 days. Highly recommend for anyone serious about Dubai.",
    author: "Founder, SaaS Platform",
    sub: "Dubai Silicon Oasis"
  },
  {
    text: "Transparent pricing, no hidden fees, and a dedicated account manager who actually responded within hours. Setkorp made our expansion into DIFC seamless.",
    author: "Managing Partner",
    sub: "Project Management Consultancy"
  },
  {
    text: "We compared 5 incorporation firms. Setkorp was the only one who explained mainland vs. freezone trade-offs in plain English. Smart, honest, and efficient.",
    author: "CEO",
    sub: "E-Commerce Trading Company"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-display">
            Our Clients Speak: Testimonials of <span className="text-brand">Trust</span>
          </h2>
        </div>

        <div className="overflow-hidden relative py-8">
          {/* Carousel Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
          
          <Marquee speed={40}>
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[400px] p-8 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="flex text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-8 italic leading-relaxed">"{t.text}"</p>
                </div>
                <div className="font-bold text-primary font-display">
                  {t.author}<br />
                  <span className="text-slate-400 font-medium text-sm">{t.sub}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

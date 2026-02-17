"use client";

import { Star } from "lucide-react";
import { Marquee } from "./Marquee";
import { motion } from "motion/react";
import { springConfigs } from "./ui/SpringAnimations";
import { AnimatedHeading } from "./ui/AnimatedText";
import { AnimatedBadge, AnimatedParagraph } from "./ui/AnimationUtils";
import Image from "next/image";

const testimonials = [
  {
    text: "I wasted 3 months with another firm before Setkorp. They got my bank account approved in 6 days. Wish I'd found them first.",
    author: "James Wilson",
    sub: "Founder, SaaS Platform • Silicon Oasis",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "They quoted AED 28,000. Final bill? AED 28,000. No surprise fees, no upsells. Just honest work and fast responses.",
    author: "Sarah Chen",
    sub: "Managing Partner • Management Consultancy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "Other firms gave me jargon. Setkorp explained freezone vs mainland in 10 minutes and saved me AED 15,000 annually. Easy choice.",
    author: "Marcus Thorne",
    sub: "CEO • E-Commerce Trading Company",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "Setkorp turned a 3-month nightmare into a 2-week success story. Their banking connections alone saved us 45 days. Highly recommend.",
    author: "Elena Rodriguez",
    sub: "Founder, Fintech • DIFC",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", ...springConfigs.smooth, delay: 0.1 }}
        >
          <AnimatedBadge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6" delay={0.05}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-xs tracking-wider uppercase">Wall of Love</span>
          </AnimatedBadge>
          <AnimatedHeading
            className="text-3xl md:text-5xl font-extrabold text-primary font-display mb-6"
            delay={0.15}
            springConfig="snappy"
            staggerWords={true}
          >
            Our Clients Speak: Testimonials of <span className="text-brand">Trust</span>
          </AnimatedHeading>
          <AnimatedParagraph className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed" delay={0.3}>
            Join 500+ global entrepreneurs who chose Setkorp for their Dubai business expansion.
          </AnimatedParagraph>
        </motion.div>

        <div className="overflow-hidden relative py-8">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 hidden md:block"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 hidden md:block"></div>
          
          <Marquee speed={40}>
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[420px] p-8 mx-4 bg-white rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed italic">"{t.text}"</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand/20">
                    <Image 
                      src={t.image} 
                      alt={t.author} 
                      width={48}
                      height={48}
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-primary font-display leading-tight">{t.author}</span>
                    <span className="text-slate-400 font-medium text-xs tracking-tight">{t.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

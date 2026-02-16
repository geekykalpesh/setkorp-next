"use client";

import { useRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import SendIcon from "./ui/send-icon";
import type { AnimatedIconHandle } from "./ui/types";
import { motion } from "motion/react";
import { springConfigs } from "./ui/SpringAnimations";
import { AnimatedHeading } from "./ui/AnimatedText";
import { AnimatedBadge, AnimatedParagraph } from "./ui/AnimationUtils";

export const Contact = () => {
  const sendRef = useRef<AnimatedIconHandle>(null);
  return (
    <section id="contact" className="py-12 md:py-24 bg-surface overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-white rounded-3xl md:rounded-lg overflow-hidden border border-slate-100 shadow-elevated flex flex-col lg:flex-row"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", ...springConfigs.smooth, delay: 0.1 }}
        >
          {/* Info Side */}
          <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 bg-slate-50 lg:border-r border-slate-100">
            <AnimatedBadge className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold mb-8 md:mb-10" delay={0.05}>
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              GET IN TOUCH
            </AnimatedBadge>
            <AnimatedHeading
              className="text-3xl md:text-5xl font-extrabold mb-6 text-primary leading-tight font-display"
              delay={0.15}
              springConfig="snappy"
              staggerWords={true}
            >
              Let's Get Your Business <span className="text-brand">Live</span> in Dubai
            </AnimatedHeading>
            <AnimatedParagraph className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed" delay={0.3}>
              Book a 30-minute call. We'll map out your exact setup path, timeline, and costs—completely free, zero pressure.
            </AnimatedParagraph>
            
            <div className="space-y-6 md:space-y-8">
              {[
                "No sales pitch—just honest answers to your questions",
                "Exact cost quote (all-in, no hidden fees)",
                "Talk to someone who's done this 500+ times"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", ...springConfigs.snappy, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700 font-medium md:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 md:mt-20 pt-12 md:pt-16 border-t border-slate-200">
              <p className="text-xs uppercase tracking-[0.2em] text-brand font-bold mb-4">Urgent Inquiry?</p>
              <a href="tel:+971561166524" className="cursor-pointer text-2xl md:text-4xl font-black text-primary hover:text-brand transition-colors font-display">
                +971 56 116 6524
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 bg-white">
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Company / Industry</label>
                <div className="relative">
                  <select className="w-full px-4 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all appearance-none cursor-pointer">
                    <option>Tech Startup</option>
                    <option>E-commerce</option>
                    <option>Holding Company</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Message / Goals</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you launch?" 
                  className="w-full px-4 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                onClick={() => sendRef.current?.startAnimation()}
                className="cursor-pointer w-full bg-gradient-to-r from-brand to-brandhover text-white py-5 rounded-xl font-black text-lg hover:shadow-2xl transition-all shadow-xl shadow-brand/30 uppercase tracking-widest font-display flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Send My Request
                <SendIcon ref={sendRef} className="w-5 h-5 flex-shrink-0" />
              </button>
              <p className="text-center text-xs text-slate-400">By submitting, you agree to our privacy policy. We'll never spam you.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

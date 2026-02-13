"use client";

import { useRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import SendIcon from "./ui/send-icon";
import type { AnimatedIconHandle } from "./ui/types";

export const Contact = () => {
  const sendRef = useRef<AnimatedIconHandle>(null);
  return (
    <section id="contact" className="py-12 md:py-24 bg-surface overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl md:rounded-lg overflow-hidden border border-slate-100 shadow-elevated flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 bg-slate-50 lg:border-r border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold mb-8 md:mb-10">
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary leading-tight font-display">
              Ready to Write Your Dubai <span className="text-brand">Success</span> Story?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
              Experience transparency and strategic support from day one—book a free 30-minute strategy call today.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                "No obligation, no sales pressure",
                "Free cost breakdown & timeline estimate",
                "Speak with a UAE specialist"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700 font-medium md:text-lg">{item}</span>
                </div>
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
        </div>
      </div>
    </section>
  );
};

import { useRef } from "react";
import Link from "next/link";
import GearIcon from "./ui/gear-icon";
import SparklesIcon from "./ui/sparkles-icon";
import CalculatorIcon from "./ui/calculator-icon";
import type { AnimatedIconHandle } from "./ui/types";

export const Resources = () => {
  const gearRef1 = useRef<AnimatedIconHandle>(null);
  const gearRef2 = useRef<AnimatedIconHandle>(null);
  const sparklesRef1 = useRef<AnimatedIconHandle>(null);
  const sparklesRef2 = useRef<AnimatedIconHandle>(null);
  return (
    <section id="calculator" className="py-12 md:py-24 relative overflow-hidden" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-2xl md:rounded-lg p-8 md:p-12 lg:p-20 text-slate-900 flex flex-col lg:flex-row items-center gap-12 md:gap-20 shadow-sm">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold mb-6">
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              SETKORP INSIGHTS
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary leading-tight font-display">
              Expert Resources for Your Global <span className="text-brand">Expansion</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Get instant clarity on your Dubai setup costs or download our comprehensive 2024 incorporation guide.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div 
                className="bg-white p-8 rounded-lg shadow-xl shadow-slate-200/50 cursor-pointer ring-0"
                onMouseEnter={() => {
                  gearRef1.current?.startAnimation();
                }}
                onMouseLeave={() => {
                  gearRef1.current?.stopAnimation();
                }}
              >
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <CalculatorIcon ref={gearRef1} className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary font-display">Dubai Setup Cost Calculator</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Get an instant, itemized estimate based on your specific visa and office requirements.</p>
                <Link 
                  href="#contact" 
                  onClick={() => gearRef2.current?.startAnimation()}
                  className="cursor-pointer bg-brand text-white px-6 py-4 rounded-lg font-bold hover:bg-brandhover transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <CalculatorIcon ref={gearRef2} className="w-5 h-5" />
                  Use Calculator
                </Link>
              </div>
              <div 
                className="bg-white p-8 rounded-lg shadow-xl shadow-slate-200/50 cursor-pointer ring-0"
                onMouseEnter={() => {
                  sparklesRef1.current?.startAnimation();
                }}
                onMouseLeave={() => {
                  sparklesRef1.current?.stopAnimation();
                }}
              >
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <SparklesIcon ref={sparklesRef1} className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary font-display">2024 Incorporation Guide</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">A 40-page blueprint covering tax policy, visa laws, and freezone comparisons.</p>
                <Link 
                  href="#contact" 
                  onClick={() => sparklesRef2.current?.startAnimation()}
                  className="cursor-pointer bg-brand text-white px-6 py-4 rounded-lg font-bold hover:bg-brandhover transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <SparklesIcon ref={sparklesRef2} className="w-5 h-5 flex-shrink-0" />
                  Download PDF
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-48 h-64 bg-white rounded-lg shadow-2xl flex items-center justify-center p-6 text-primary overflow-hidden ring-0">
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand opacity-10 rounded-bl-full"></div>
                <div className="text-center">
                  <div className="font-bold text-xs uppercase tracking-widest text-brand mb-2">Setkorp</div>
                  <div className="font-extrabold text-sm leading-tight font-display">DUBAI BUSINESS SETUP <span className="text-brand">GUIDE</span></div>
                  <div className="mt-4 text-[10px] text-slate-400">2024 Edition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

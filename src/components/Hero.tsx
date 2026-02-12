import { useRef } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import PhoneVolumeIcon from "./ui/phone-volume-icon";
import CalculatorIcon from "./ui/calculator-icon";
import type { AnimatedIconHandle } from "./ui/types";

export const Hero = () => {
  const phoneRef = useRef<AnimatedIconHandle>(null);
  const calcRef = useRef<AnimatedIconHandle>(null);

  return (
    <section className="relative h-[85vh] md:h-screen overflow-hidden md:-mt-20 hero-mobile-section" style={{ backgroundColor: "#FDFDFD" }}>
      {/* Video Background */}
      <div className="absolute inset-0 flex items-center justify-center md:block">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          className="w-full h-auto max-h-[60vh] md:h-full md:max-h-none object-contain scale-[1.15] md:scale-100 hero-mobile-video" 
          style={{ backgroundColor: "#FDFDFD" }}
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Container - Buttons Only */}
      <div className="relative h-full flex items-end justify-center pb-8 md:pb-8 hero-mobile-content">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
              {/* Primary CTA */}
              <Link 
                href="#contact" 
                onClick={() => phoneRef.current?.startAnimation()}
                className="group w-full sm:w-auto cursor-pointer bg-brand text-white px-8 py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-1 hover:bg-brandhover flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2" 
                aria-label="Book your free strategy call"
              >
                <span className="flex items-center gap-2">
                  Book Your Free Strategy Call
                  <PhoneVolumeIcon ref={phoneRef} size={20} className="stroke-[2.5px]" />
                </span>
              </Link>
              
              {/* Secondary CTA */}
              <Link 
                href="#calculator" 
                onClick={() => calcRef.current?.startAnimation()}
                className="group w-full sm:w-auto cursor-pointer bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:border-brand/20 hover:text-brand hover:-translate-y-1 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2" 
                aria-label="Open setup cost calculator"
              >
                <span className="flex items-center gap-2">
                  <CalculatorIcon ref={calcRef} size={20} className="text-brand stroke-[2.5px]" />
                  Setup Cost Calculator
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

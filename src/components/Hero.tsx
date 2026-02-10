import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section className="relative h-[85vh] md:h-screen overflow-hidden md:-mt-20">
      {/* Video Background */}
      <div className="absolute inset-0 flex items-center justify-center md:block">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          className="w-full h-auto max-h-[60vh] md:h-full md:max-h-none object-contain scale-[1.15] md:scale-100" 
          style={{ backgroundColor: "#FDFDFD" }}
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Container - Buttons Only */}
      <div className="relative h-full flex items-end justify-center pb-8 md:pb-8">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
              {/* Primary CTA */}
              <Link 
                href="#contact" 
                className="group w-full sm:w-auto cursor-pointer bg-gradient-to-r from-brand to-brandhover text-white px-6 md:px-10 py-4 md:py-5 rounded-xl text-sm md:text-lg font-black transition-all duration-200 shadow-[0_20px_40px_-12px_rgba(227,88,77,0.4)] hover:shadow-[0_30px_60px_-12px_rgba(227,88,77,0.5)] hover:-translate-y-1 ring-1 ring-white/20 ring-inset flex items-center justify-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2" 
                aria-label="Book your free strategy call"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
              
              {/* Secondary CTA */}
              <Link 
                href="#calculator" 
                className="group w-full sm:w-auto cursor-pointer bg-white/95 backdrop-blur-md text-primary border border-slate-200 px-6 md:px-10 py-4 md:py-5 rounded-xl text-sm md:text-lg font-bold hover:bg-white hover:-translate-y-1 transition-all duration-200 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2" 
                aria-label="Open setup cost calculator"
              >
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-brand rounded-full mr-2 animate-pulse"></div>
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

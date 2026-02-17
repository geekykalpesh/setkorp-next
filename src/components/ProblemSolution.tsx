"use client";

import { useRef } from "react";
import { XCircle, AlertCircle, Check } from "lucide-react";
import CheckedIcon from "./ui/checked-icon";
import type { AnimatedIconHandle } from "./ui/types";
import { SlideTransition, StaggerContainer } from "./ui/TransitionEffects";
import { SpringContainer, InteractiveSpring } from "./ui/SpringAnimations";
import { WordHighlight } from "./ui/TextAnimations";
import { AnimatedHeading } from "./ui/AnimatedText";
import { AnimatedParagraph } from "./ui/AnimationUtils";

export const ProblemSolution = () => {
  const checkRef = useRef<AnimatedIconHandle>(null);

  return (
    <section className="py-12 md:py-24" style={{ backgroundColor: '#FCFCFC' }}>
      <div className="container mx-auto px-6 md:px-20">
        <SpringContainer 
          springConfig="smooth" 
          delay={0.1}
          animationType="fadeUp"
          className="text-center mb-12 md:mb-20"
        >
          <AnimatedHeading
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6 leading-tight font-display"
            delay={0.15}
            springConfig="snappy"
            staggerWords={true}
          >
            Most Founders <span className="text-brand">Waste</span> 3 Months on Setup Alone
          </AnimatedHeading>
          <AnimatedParagraph className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed" delay={0.3}>
            You're here to build a business, not decode regulations. Here's what changes with Setkorp.
          </AnimatedParagraph>
        </SpringContainer>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 group">
          {/* Without Setkorp */}
          <SlideTransition direction="from-left" delay={0.2} duration={0.8}>
            <div className="p-8 md:p-12 rounded-lg border border-red-100 h-full" style={{ backgroundColor: '#FCFCFC' }}>
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-4xl font-bold text-black font-display">Without Setkorp</h3>
              </div>
              
              {/* Two Column Layout: Video Left, Content Right */}
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Left: Video */}
                <SpringContainer springConfig="smooth" delay={0.4}>
                  <div className="rounded-lg overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover rounded-lg"
                    >
                      <source src="/unsorted.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </SpringContainer>
                
                {/* Right: Content with Staggered Animation */}
                <StaggerContainer staggerDelay={0.08} initialDelay={0.5}>
                  {[
                    "Paralyzed by 40+ freezone choices—no clear answer on which fits your business",
                    "Bank rejections eating 6-8 weeks of your launch timeline",
                    "Paying AED 15,000+ in surprise fees after you've already committed",
                    "Compliance penalties because nobody told you about quarterly filings"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </SlideTransition>

          {/* With Setkorp */}
          <SlideTransition direction="from-right" delay={0.3} duration={0.8}>
            <InteractiveSpring 
              hoverScale={1.02} 
              tapScale={0.98}
              springConfig="smooth"
            >
              <div 
                onMouseEnter={() => checkRef.current?.startAnimation()}
                onMouseLeave={() => checkRef.current?.stopAnimation()}
                className="p-8 md:p-12 rounded-lg border-2 border-success shadow-xl shadow-success/10 cursor-pointer h-full"
                style={{ backgroundColor: '#FCFCFC' }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-4xl font-bold text-primary font-display">With <span className="text-brand">Setkorp</span></h3>
                </div>
                
                {/* Two Column Layout: Video Left, Content Right */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Left: Video */}
                  <SpringContainer springConfig="smooth" delay={0.5}>
                    <div className="rounded-lg overflow-hidden">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      >
                        <source src="/sorted.webm" type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </SpringContainer>
                  
                  {/* Right: Content with Staggered Animation */}
                  <StaggerContainer staggerDelay={0.08} initialDelay={0.6}>
                    {[
                      "We tell you exactly which structure saves you the most tax—in plain English",
                      "Corporate bank account approved in 7 days (we know who to call)",
                      "Fixed price quoted upfront—what you see is what you pay",
                      "Never miss a deadline—we track every renewal and filing for you"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                        <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </InteractiveSpring>
          </SlideTransition>
        </div>
      </div>
    </section>
  );
};

"use client";

import { Marquee } from "./Marquee";
import Image from "next/image";
import { motion } from "motion/react";
import { springConfigs } from "./ui/SpringAnimations";
import { AnimatedParagraph } from "./ui/AnimationUtils";

const partners = [
  { src: "/images/MFZ-logo-01-1536x1086-1-300x212.webp", alt: "Meydan Free Zone Logo - Setkorp Partner" },
  { src: "/images/Noor-Ride-Transparent-01-300x225.webp", alt: "Noor Ride Logo - Setkorp Partner" },
  { src: "/images/WhatsApp_Image_2023-12-27_at_12.56.51_e9e64087-removebg-preview-300x78.webp", alt: "Policy Bazaar UAE Logo" },
  { src: "/images/SAAL-Consulting-details.jpeg-150x150.webp", alt: "SAAL Consulting Logo" },
  { src: "/images/juggernot-1-300x300.webp", alt: "Juggernot AI Logo" },
  { src: "/images/2.webp", alt: "Dubai Government Partner Logo" },
  { src: "/images/3.webp", alt: "UAE Freezone Authority Partner" },
  { src: "/images/4.webp", alt: "Dubai Mainland License Partner" },
  { src: "/images/6.webp", alt: "UAE Banking Partner Logo" },
];

export const SocialProof = () => {
  return (
    <section className="py-12 bg-surface border-y border-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <AnimatedParagraph 
          className="text-center text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-10"
          delay={0.1}
        >
          Institutional Partnership Network
        </AnimatedParagraph>
        
        <div className="relative group">
          {/* Subtle Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          
          <Marquee speed={40}>
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <Image 
                  src={partner.src} 
                  alt={partner.alt} 
                  width={120} 
                  height={48} 
                  className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-110" 
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

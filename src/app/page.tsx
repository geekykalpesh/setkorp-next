"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ValueProps } from "@/components/ValueProps";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services").then(mod => mod.Services));
const Process = dynamic(() => import("@/components/Process").then(mod => mod.Process));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const Resources = dynamic(() => import("@/components/Resources").then(mod => mod.Resources));
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQ));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Industries />
        </Reveal>
        <Reveal>
          <SocialProof />
        </Reveal>
        <Reveal>
          <ProblemSolution />
        </Reveal>
        <Reveal>
          <ValueProps />
        </Reveal>
        <Services />
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Resources />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

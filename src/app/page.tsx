"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ValueProps } from "@/components/ValueProps";
import { Footer } from "@/components/Footer";

// Lazy load below-the-fold components with SSR disabled for better performance
const Services = dynamic(() => import("@/components/Services").then(mod => mod.Services), {
  ssr: false,
  loading: () => <div className="h-screen bg-slate-50" />, // Placeholder to prevent layout shift
});

const Process = dynamic(() => import("@/components/Process").then(mod => mod.Process), {
  ssr: false,
  loading: () => <div className="h-96 bg-surface" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials), {
  ssr: false,
  loading: () => <div className="h-96 bg-surface" />,
});

const Resources = dynamic(() => import("@/components/Resources").then(mod => mod.Resources), {
  ssr: false,
  loading: () => <div className="h-96 bg-white" />,
});

const FAQ = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQ), {
  ssr: false,
  loading: () => <div className="h-96 bg-surface" />,
});

const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact), {
  ssr: false,
  loading: () => <div className="h-screen bg-surface" />,
});

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <SocialProof />
        <ProblemSolution />
        <ValueProps />
        <Services />
        <Process />
        <Testimonials />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

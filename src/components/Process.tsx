import { useRef } from "react";
import { PhoneCall, FileText, Building2 } from "lucide-react";
import PhoneVolumeIcon from "./ui/phone-volume-icon";
import FileDescriptionIcon from "./ui/file-description-icon";
import ShieldCheckIcon from "./ui/shield-check-icon";
import { CardSpotlight } from "./ui/card-spotlight";
import type { AnimatedIconHandle } from "./ui/types";

export const Process = () => {
  const phoneRef = useRef<AnimatedIconHandle>(null);
  const docRef = useRef<AnimatedIconHandle>(null);
  const shieldRef = useRef<AnimatedIconHandle>(null);

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-xs tracking-wider uppercase">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display">
            Your <span className="text-brand">14-Day</span> Path to Dubai Business Ownership
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A proven, transparent process designed for international investors.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Discovery Call */}
          <CardSpotlight
            onMouseEnter={() => phoneRef.current?.startAnimation()}
            onMouseLeave={() => phoneRef.current?.stopAnimation()}
            className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg border-slate-200 hover:border-brand/40 shadow-lg hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 cursor-pointer"
            dotColors={[[227, 88, 77]]} // Brand color
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand rounded-2xl flex items-center justify-center shadow-lg shadow-brand/30 group-hover:shadow-brand/50 transition-all duration-500">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-brand/10 group-hover:bg-brand/15 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500">
                <PhoneVolumeIcon ref={phoneRef} size={32} className="text-brand transition-all duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-display transition-all duration-500">Discovery Call</h3>
                <div className="text-sm font-semibold text-brand transition-all duration-500">Day 1</div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed transition-all duration-500">Share your business goals, industry, and budget. We'll recommend the best incorporation structure and freezone/mainland option.</p>
          </CardSpotlight>

          {/* Card 2: Documentation */}
          <CardSpotlight
            onMouseEnter={() => docRef.current?.startAnimation()}
            onMouseLeave={() => docRef.current?.stopAnimation()}
            className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg border-slate-200 hover:border-gold/40 shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 cursor-pointer"
            dotColors={[[212, 175, 55]]} // Gold color
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-2xl flex items-center justify-center shadow-lg shadow-gold/30 group-hover:shadow-gold/50 transition-all duration-500">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gold/10 group-hover:bg-gold/15 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500">
                <FileDescriptionIcon ref={docRef} size={32} color="#D4AF37" className="transition-all duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-display transition-all duration-500">Documentation</h3>
                <div className="text-sm font-semibold text-gold transition-all duration-500">Days 2-7</div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed transition-all duration-500">We handle paperwork, government approvals, and license applications. You review and e-sign from anywhere in the world.</p>
          </CardSpotlight>

          {/* Card 3: Banking & Office */}
          <CardSpotlight
            className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg border-slate-200 hover:border-success/40 shadow-lg hover:shadow-2xl hover:shadow-success/10 transition-all duration-500 cursor-pointer"
            dotColors={[[34, 197, 94]]} // Success/green color
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-2xl flex items-center justify-center shadow-lg shadow-success/30 group-hover:shadow-success/50 transition-all duration-500">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-success/10 group-hover:bg-success/15 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500">
                <Building2 className="w-8 h-8 text-success transition-all duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-display transition-all duration-500">Banking & Office</h3>
                <div className="text-sm font-semibold text-success transition-all duration-500">Days 8-14</div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed transition-all duration-500">We submit your corporate banking application and connect you with real estate partners. By day 14, you're ready to operate.</p>
          </CardSpotlight>
        </div>

        {/* Ongoing Support Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div 
            onMouseEnter={() => shieldRef.current?.startAnimation()}
            onMouseLeave={() => shieldRef.current?.stopAnimation()}
            className="bg-slate-50 rounded-lg p-8 md:p-12 text-slate-900 text-center border border-slate-100 shadow-sm cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheckIcon ref={shieldRef} size={32} className="text-brand" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-display">Ongoing <span className="text-brand">Support</span> (Year 1+)</h3>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Compliance calendar, renewals, and growth advisory—we're your long-term prosperity partner in Dubai.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

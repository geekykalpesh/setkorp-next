"use client";

import { Building2, Landmark, Building, Calculator, CheckCircle, ShieldCheck, CreditCard, Globe, MapPin, Key, FileCheck, Layout, PieChart, Lock, Search, Rocket, Zap, Handshake, Coins, Compass, Navigation, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { springConfigs } from "./ui/SpringAnimations";
import { AnimatedHeading } from "./ui/AnimatedText";
import { AnimatedBadge, AnimatedParagraph } from "./ui/AnimationUtils";

const services = [
  {
    number: "01",
    title: "Business Incorporation & Licensing",
    desc: "We pick the right structure for your business, file all paperwork, and get your trade license approved—fast.",
    points: ["Legal navigation", "Government approvals", "Visa planning"],
    icon: Building2,
    color: "brand",
    textColor: "text-brand",
    bgColor: "from-brand/5",
    graphicBg: "from-red-50 via-orange-50 to-amber-50",
    graphicOverlay: "from-brand/5 via-transparent to-orange-100/30",
    graphicBlur1: "bg-brand/10",
    graphicBlur2: "bg-orange-200/20",
    iconGradient: "from-brand to-brandhover",
    graphicIcon: Building2,
    graphicTitle: "Business Setup",
    graphicSub: "Mainland & Freezone Experts",
    graphicTags: [{ icon: CheckCircle, label: "Licensed" }, { icon: ShieldCheck, label: "Compliant" }],
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2670&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Corporate Banking Made Simple",
    desc: "Banks reject 40% of applications. We get you approved in 7 days because we know exactly what they need.",
    points: ["Application support", "Multi-currency accounts", "Elite partnerships"],
    icon: Landmark,
    color: "gold",
    textColor: "text-gold",
    bgColor: "from-gold/5",
    graphicBg: "from-amber-50 via-yellow-50 to-orange-50",
    graphicOverlay: "from-gold/8 via-transparent to-amber-100/40",
    graphicBlur1: "bg-gold/15",
    graphicBlur2: "bg-amber-200/25",
    iconGradient: "from-gold to-amber-500",
    graphicIcon: Landmark,
    graphicTitle: "Corporate Banking",
    graphicSub: "UAE's Premier Banking Liaison",
    graphicTags: [{ icon: CreditCard, label: "Multi-Currency" }, { icon: Globe, label: "Global Access" }],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Office Spaces & Corporate Real Estate",
    desc: "Need a desk for AED 1,500/month or a full office? We'll find it, negotiate the lease, and handle Ejari registration.",
    points: ["Office sourcing", "Ejari registration", "Vetted agent network"],
    icon: Building,
    color: "success",
    bgColor: "from-success/5",
    graphicBg: "from-emerald-50 via-green-50 to-teal-50",
    graphicOverlay: "from-success/8 via-transparent to-emerald-100/40",
    graphicBlur1: "bg-success/15",
    graphicBlur2: "bg-teal-200/25",
    iconGradient: "from-success to-emerald-600",
    textColor: "text-success",
    graphicIcon: Building,
    graphicTitle: "Office Solutions",
    graphicSub: "Prime Dubai Locations",
    graphicTags: [{ icon: MapPin, label: "Locations" }, { icon: Key, label: "Ready" }],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2670&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Accounting, VAT & Audit Services",
    desc: "Avoid AED 50,000 penalties for late VAT filing. We handle your books, taxes, and audits—all compliant, all on time.",
    points: ["Monthly bookkeeping", "VAT & Tax filing", "Tax advisory"],
    icon: Calculator,
    color: "blue-400",
    textColor: "text-blue-400",
    bgColor: "from-blue-400/5",
    graphicBg: "from-blue-50 via-indigo-50 to-sky-50",
    graphicOverlay: "from-blue-400/10 via-transparent to-indigo-100/40",
    graphicBlur1: "bg-blue-400/15",
    graphicBlur2: "bg-indigo-200/25",
    iconGradient: "from-blue-400 to-indigo-500",
    graphicIcon: Calculator,
    graphicTitle: "Financial Services",
    graphicSub: "Compliance & Expert Advisory",
    graphicTags: [{ icon: FileCheck, label: "Filing" }, { icon: Lock, label: "Secure" }],
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2670&auto=format&fit=crop"
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative bg-slate-50 overflow-visible py-12 md:py-24">
      {/* Header Section */}
      <motion.div 
        className="container mx-auto mb-12 md:mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", ...springConfigs.smooth, delay: 0.1 }}
      >
        <AnimatedBadge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6" delay={0.05}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
          <span className="text-xs tracking-wider uppercase">Complete Solutions</span>
        </AnimatedBadge>
        <AnimatedHeading
          className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display"
          delay={0.15}
          springConfig="snappy"
          staggerWords={true}
        >
          Everything You Need to <span className="text-brand">Start Operating</span>
        </AnimatedHeading>
        <AnimatedParagraph className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed" delay={0.3}>
          Company registration is just the start. You need a bank account, an office, and compliant books. We handle all of it so you can focus on customers, not paperwork.
        </AnimatedParagraph>
      </motion.div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative space-y-0">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="sticky top-0 md:top-20 h-screen md:h-[90vh] container mx-auto px-4 md:px-20 flex items-center justify-center -mb-20 md:mb-0" 
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full max-w-7xl h-[85vh] md:h-[70vh] bg-white border border-slate-200 rounded-xl overflow-hidden grid md:grid-cols-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              {/* LEFT SIDE: CONTENT */}
              <div className={cn("p-6 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 relative bg-gradient-to-br to-transparent", service.bgColor)}>
                <div className="relative z-10">
                  <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border", 
                    service.color === 'brand' ? 'bg-brand/10 text-brand border-brand/10' :
                    service.color === 'gold' ? 'bg-gold/10 text-gold border-gold/10' :
                    service.color === 'success' ? 'bg-success/10 text-success border-success/10' :
                    'bg-blue-400/10 text-blue-400 border-blue-400/10'
                  )}>
                    SERVICE {service.number}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6 font-display">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                    {service.points.map((point, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3"
                      >
                        <div className={cn("w-1.5 h-1.5 rounded-full", 
                          service.color === 'brand' ? 'bg-brand' :
                          service.color === 'gold' ? 'bg-gold' :
                          service.color === 'success' ? 'bg-success' :
                          'bg-blue-400'
                        )}></div>
                        <span className="text-sm text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: GRAPHIC */}
              <div className={cn("p-8 md:p-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br to-slate-50", service.graphicBg)}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className={cn("relative w-full h-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center justify-center border transition-all duration-500", 
                    service.color === 'brand' ? 'border-brand/20' :
                    service.color === 'gold' ? 'border-gold/20' :
                    service.color === 'success' ? 'border-success/20' :
                    'border-blue-400/20'
                  )}>
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover opacity-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Simple dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-black/65"></div>
                    </div>

                    <div className="relative z-10 p-8 flex flex-col items-center w-full">
                      <div className={cn("w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br shadow-sm", 
                        service.color === 'brand' ? 'from-brand/40 to-brand/20 border border-brand/10' :
                        service.color === 'gold' ? 'from-gold/40 to-gold/20 border border-gold/10' :
                        service.color === 'success' ? 'from-success/40 to-success/20 border border-success/10' :
                        'from-blue-400/40 to-blue-400/20 border border-blue-400/10'
                      )}>
                        <service.graphicIcon className={cn("w-12 h-12 md:w-16 md:h-16", service.textColor)} />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 text-center font-display">{service.graphicTitle}</h4>
                      <p className="text-xs md:text-sm text-white/90 text-center mb-6">{service.graphicSub}</p>
                      <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-3 w-full">
                        {service.graphicTags.map((tag, i) => (
                          <div key={i} className="px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg flex items-center bg-white/20 backdrop-blur-sm border border-white/40 flex-shrink-0">
                            <tag.icon className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 text-white" />
                            <span className="text-[9px] md:text-xs font-semibold text-white whitespace-nowrap">{tag.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

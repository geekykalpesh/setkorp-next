import { Building2, Landmark, Building, Calculator, CheckCircle, ShieldCheck, CreditCard, Globe, MapPin, Key, FileCheck, Layout, PieChart, Lock, Search, Rocket, Zap, Handshake, Coins, Compass, Navigation, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "Business Incorporation & Licensing",
    desc: "Freezone vs. mainland analysis, license application, visa allocation planning, and legal documentation.",
    points: ["Legal navigation", "Government approvals", "Visa planning"],
    icon: Building2,
    color: "brand",
    textColor: "text-brand",
    bgColor: "from-brand/5",
    graphicBg: "from-brand/10",
    graphicIcon: Building2,
    graphicTitle: "Business Setup",
    graphicSub: "Mainland & Freezone Experts",
    graphicTags: [{ icon: CheckCircle, label: "Licensed" }, { icon: ShieldCheck, label: "Compliant" }]
  },
  {
    number: "02",
    title: "Corporate Banking Made Simple",
    desc: "Securing corporate accounts within 7 business days through our elite UAE banking relationships.",
    points: ["Application support", "Multi-currency accounts", "Elite partnerships"],
    icon: Landmark,
    color: "gold",
    textColor: "text-gold",
    bgColor: "from-gold/5",
    graphicBg: "from-gold/10",
    graphicIcon: Landmark,
    graphicTitle: "Corporate Banking",
    graphicSub: "UAE's Premier Banking Liaison",
    graphicTags: [{ icon: CreditCard, label: "Multi-Currency" }, { icon: Globe, label: "Global Access" }]
  },
  {
    number: "03",
    title: "Office Spaces & Corporate Real Estate",
    desc: "From flexi-desks to executive suites, we connect you with vetted agents and negotiate best terms.",
    points: ["Office sourcing", "Ejari registration", "Vetted agent network"],
    icon: Building,
    color: "success",
    bgColor: "from-success/5",
    graphicBg: "from-success/10",
    textColor: "text-success",
    graphicIcon: Building,
    graphicTitle: "Office Solutions",
    graphicSub: "Prime Dubai Locations",
    graphicTags: [{ icon: MapPin, label: "Locations" }, { icon: Key, label: "Ready" }]
  },
  {
    number: "04",
    title: "Accounting, VAT & Audit Services",
    desc: "Stay compliant with UAE laws while we handle bookkeeping, VAT, and corporate tax advisory.",
    points: ["Monthly bookkeeping", "VAT & Tax filing", "Tax advisory"],
    icon: Calculator,
    color: "blue-400",
    textColor: "text-blue-400",
    bgColor: "from-blue-400/5",
    graphicBg: "from-blue-400/10",
    graphicIcon: Calculator,
    graphicTitle: "Financial Services",
    graphicSub: "Compliance & Expert Advisory",
    graphicTags: [{ icon: FileCheck, label: "Filing" }, { icon: Lock, label: "Secure" }]
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative bg-slate-50 overflow-visible py-12 md:py-24">
      {/* Header Section */}
      <div className="container mx-auto mb-12 md:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
          <span className="text-xs tracking-wider uppercase">Complete Solutions</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display">
          Services Beyond <span className="text-brand">Expectations</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Transform your business vision into reality with seamlessly integrated solutions. We design and operate a unified business setup system where every component feeds the next.
        </p>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative space-y-4 md:space-y-0">
        {services.map((service, index) => (
          <div key={index} className="sticky top-12 md:top-20 h-auto md:h-[90vh] container mx-auto px-4 md:px-20 flex items-center justify-center" style={{ zIndex: index + 1 }}>
            <div className="w-full max-w-7xl md:h-[70vh] bg-white border border-slate-200 rounded-2xl md:rounded-lg overflow-hidden grid md:grid-cols-2 shadow-xl md:shadow-2xl">
              {/* LEFT SIDE: CONTENT */}
              <div className={cn("p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 relative bg-gradient-to-br to-transparent", service.bgColor)}>
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
                      <div key={i} className="flex items-center gap-3">
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
              <div className={cn("p-8 md:p-10 flex items-center justify-center relative overflow-hidden hidden sm:flex bg-gradient-to-br to-slate-50", service.graphicBg)}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className={cn("relative w-full h-full max-w-lg bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center border", 
                    service.color === 'brand' ? 'border-brand/20' :
                    service.color === 'gold' ? 'border-gold/20' :
                    service.color === 'success' ? 'border-success/20' :
                    'border-blue-400/20'
                  )}>
                    <div className={cn("w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6", 
                      service.color === 'brand' ? 'bg-brand/10' :
                      service.color === 'gold' ? 'bg-gold/10' :
                      service.color === 'success' ? 'bg-success/10' :
                      'bg-blue-400/10'
                    )}>
                      <service.graphicIcon className={cn("w-12 h-12 md:w-16 md:h-16", service.textColor)} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 text-center font-display">{service.graphicTitle}</h4>
                    <p className="text-xs md:text-sm text-slate-600 text-center mb-6">{service.graphicSub}</p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                      {service.graphicTags.map((tag, i) => (
                        <div key={i} className={cn("px-3 md:px-4 py-2 rounded-lg flex items-center", 
                          service.color === 'brand' ? 'bg-brand/10' :
                          service.color === 'gold' ? 'bg-gold/10' :
                          service.color === 'success' ? 'bg-success/10' :
                          'bg-blue-400/10'
                        )}>
                          <tag.icon className={cn("w-4 h-4 mr-2", service.textColor)} />
                          <span className="text-[10px] md:text-xs font-semibold text-slate-700">{tag.label}</span>
                        </div>
                      ))}
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

import { Briefcase, Megaphone, Zap, Code, TrendingUp, ClipboardCheck, Users, Calendar } from "lucide-react";
import Image from "next/image";

const industries = [
  { icon: Briefcase, label: "Holding Companies" },
  { icon: Megaphone, label: "Media & Marketing" },
  { icon: Zap, label: "Energy Companies" },
  { icon: Code, label: "Software & Tech" },
  { icon: TrendingUp, label: "Trading Companies" },
  { icon: ClipboardCheck, label: "Project Management" },
  { icon: Users, label: "Consulting Firms" },
  { icon: Calendar, label: "Event Management" },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-12 md:py-24 bg-surface m-4 md:m-8 lg:m-12">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-12 md:mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Welcome to <span className="text-brand">Setkorp</span>
            </h2>
            <h3 className="text-xl md:text-3xl font-bold text-slate-700 mb-6 font-display">
              Your Gateway to Seamless Business Setup in Dubai
            </h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto md:mx-0 leading-relaxed">
              Setkorp delivers end-to-end business setup solutions with transparency and efficiency—from free zone to mainland formations—all through one reliable portal for your business needs.
            </p>
          </div>

          {/* Expertise Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Expertise List */}
            <div>
              <h4 className="text-2xl md:text-[2rem] font-bold text-primary mb-8 leading-tight font-display">
                Expertise Across High-Growth <span className="text-brand">Industries</span>
              </h4>
              
              {/* Premium Industry Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="group relative bg-surface p-4 rounded-xl border border-slate-200 hover:border-brand/40 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-200">
                        <industry.icon className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-primary">{industry.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-square w-full overflow-hidden shadow-2xl rounded-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dubai Business District - Setkorp Incorporation Experts" 
                  width={600}
                  height={600}
                  priority={true}
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

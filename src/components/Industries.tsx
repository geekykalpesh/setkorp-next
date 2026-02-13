import { Briefcase, Megaphone, Zap, Code, TrendingUp, ClipboardCheck, Users, Calendar } from "lucide-react";
import Image from "next/image";
import { CardSpotlight } from "./ui/card-spotlight";

const industries = [
  { icon: Briefcase, label: "Holding Companies", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
  { icon: Megaphone, label: "Media & Marketing", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" },
  { icon: Zap, label: "Energy Companies", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop" },
  { icon: Code, label: "Software & Tech", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" },
  { icon: TrendingUp, label: "Trading Companies", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop" },
  { icon: ClipboardCheck, label: "Project Management", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop" },
  { icon: Users, label: "Consulting Firms", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop" },
  { icon: Calendar, label: "Event Management", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop" },
];

const IndustryCard = ({ industry }: { industry: typeof industries[0] }) => {
  return (
    <CardSpotlight
      className="group relative bg-gradient-to-br from-slate-50 to-white p-4 md:p-5 rounded-xl border-slate-200 hover:border-brand/50 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden min-h-[7.5rem] md:min-h-[8rem] h-auto"
      dotColors={[[227, 88, 77]]} // Brand color for the spotlight effect
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-3 h-full justify-between">
        <div className="w-9 h-9 bg-brand/10 rounded-lg flex items-center justify-center group-hover:bg-brand/20 transition-all duration-300">
          <industry.icon className="w-5 h-5 text-brand" />
        </div>
        <span className="text-sm md:text-base font-semibold text-primary">{industry.label}</span>
      </div>
    </CardSpotlight>
  );
};

export const Industries = () => {
  return (
    <section id="industries" className="py-12 md:py-24 bg-surface m-4 md:m-8 lg:m-12">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-12 md:mb-20 text-center md:text-left block">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-display">
              Welcome to <span className="text-brand">Setkorp</span>
            </h2>
            <h3 className="text-xl md:text-3xl font-bold text-slate-700 mb-6 font-display">
              Your Gateway to Seamless Business Setup in Dubai
            </h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto md:mx-0 leading-relaxed font-sans">
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
                  <IndustryCard key={index} industry={industry} />
                ))}
              </div>
            </div>

            {/* Right: Video */}
            <div className="relative flex justify-center items-center h-full overflow-visible">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-[105%] max-w-none h-auto rounded-3xl translate-x-3"
              >
                <source src="/doller.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

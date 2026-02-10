import { XCircle, AlertCircle, CheckCircle2, Check } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 leading-tight font-display">
            Setting Up in <span className="text-brand">Dubai</span> Shouldn't Feel Like Navigating a Maze
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop wasting time with bureaucratic hurdles. Here's how Setkorp changes the equation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 group">
          {/* Without Setkorp */}
          <div className="bg-white p-8 md:p-12 rounded-lg border border-red-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                <XCircle />
              </div>
              <h3 className="text-2xl font-bold text-red-900 font-display">Without Setkorp</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Confused by 40+ freezone options and complex regulations",
                "Spending weeks chasing bank account approvals",
                "Overpaying for services you don't need",
                "Missing critical compliance deadlines"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Setkorp */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 md:p-12 rounded-lg border-2 border-brand shadow-xl shadow-brand/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center">
                <CheckCircle2 />
              </div>
              <h3 className="text-2xl font-bold text-primary font-display">With Setkorp</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Clear roadmap: We match you to the perfect freezone or mainland structure",
                "Banking relationships secured within 7 business days",
                "Transparent, all-inclusive pricing—no hidden fees",
                "Compliance calendar and dedicated account manager"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-brand mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

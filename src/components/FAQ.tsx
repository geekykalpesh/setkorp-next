import { useRef } from "react";
import DownChevron from "./ui/down-chevron";
import type { AnimatedIconHandle } from "./ui/types";

const faqs = [
  {
    q: "Which structure is best for tax optimization?",
    a: "Dubai offers freezone companies (100% foreign ownership, 0% corporate tax on qualifying income) and mainland companies (broader market access). For pure tax optimization, freezone structures like IFZA or DMCC are ideal."
  },
  {
    q: "What's the approximate cost of setup?",
    a: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Freezone packages: AED 12,000 - 35,000/year</li>
        <li>Mainland setups: AED 25,000 - 60,000</li>
      </ul>
    )
  },
  {
    q: "What documents are required for company incorporation?",
    a: (
      <div className="space-y-2">
        <p>Standard requirements: Passport copies, proof of address (utility bill/bank statement), business plan, and company name reservation.</p>
        <p>We provide a personalized checklist once you book a strategy call.</p>
      </div>
    )
  },
  {
    q: "How long does the entire process take?",
    a: "14 days on average for freezone companies. Mainland setups take 21-28 days. Corporate banking adds 7-10 days post-license issuance."
  },
  {
    q: "Do I need to be physically present in Dubai?",
    a: "Not necessarily. Many freezones allow 100% remote incorporation. However, you will need to visit for Emirates ID registration and potentially bank account opening (typically 1 visit for 3-5 days)."
  }
];

const FAQItem = ({ faq }: { faq: typeof faqs[0] }) => {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <details 
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="group bg-white rounded-lg border border-slate-100 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
    >
      <summary className="flex items-center justify-between font-bold text-lg text-primary font-display">
        <span>{faq.q}</span>
        <span className="text-brand transition-transform group-open:rotate-180">
          <DownChevron ref={iconRef} size={20} />
        </span>
      </summary>
      <div className="mt-4 text-slate-600 leading-relaxed">
        {faq.a}
      </div>
    </details>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-display">
            Your Questions, <span className="text-brand">Answered</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

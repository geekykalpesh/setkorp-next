import { useRef } from "react";
import { cn } from "@/lib/utils";
import SparklesIcon from "./sparkles-icon";
import StarIcon from "./star-icon";
import RocketIcon from "./rocket-icon";
import HeartIcon from "./heart-icon";
import type { AnimatedIconHandle } from "./types";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Clarity Meets Trust",
      description:
        "No jargon. No surprises. Our transparency builds long-term partnerships from day one.",
      Icon: SparklesIcon,
    },
    {
      title: "Expertise Forge Excellence",
      description:
        "15+ years of UAE expertise helping businesses across holding, tech, and energy sectors.",
      Icon: StarIcon,
    },
    {
      title: "Launch Faster",
      description:
        "Streamlined 14-day process saving you months of back-and-forth and hidden fees.",
      Icon: RocketIcon,
    },
    {
      title: "Foundation to Build On",
      description: "We provide honest advice and responsive support from day one to year ten of your journey.",
      Icon: HeartIcon,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  Icon,
  index,
}: {
  title: string;
  description: string;
  Icon: any;
  index: number;
}) => {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <div
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
        (index === 0) && "lg:border-l dark:border-neutral-800",
        "dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-brand/5 dark:from-brand/10 to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-10 text-brand">
        <Icon ref={iconRef} />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-brand transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

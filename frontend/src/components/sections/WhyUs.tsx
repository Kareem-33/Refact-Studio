import SectionHeader from "../ui/SectionHeader";
import { Code2Icon, GoalIcon, LayersIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";

const WhyUs = () => {
  const features = [
    {
      icon: ZapIcon,
      title: "Performance-first builds",
      description:
        "Fast load times, optimized assets, and smooth interactions from day one.",
    },
    {
      icon: Code2Icon,
      title: "Clean, maintainable code",
      description:
        "Structured codebases that are easy to update, scale, and hand off.",
    },
    {
      icon: GoalIcon,
      title: "Design driven by business goals",
      description:
        "Every design decision supports usability, conversion, and clarity.",
    },
    {
      icon: LayersIcon,
      title: "Modern, scalable systems",
      description:
        "Built with modern tools and architectures that grow with your business.",
    },
  ];

  return (
    <div className="p-[30px] py-[100px] md:p-[120px] flex flex-col items-center justify-center gap-[60px]">
      <SectionHeader
        label="WHY REFACT STUDIO"
        title="Trusted by startups and growing businesses"
      />
      <motion.div
        className="w-full md:h-[320px] flex flex-col md:flex-row items-start justify-center gap-[20px]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="md:flex-1 md:h-full w-full bg-linear-180 from-background to-surface border-[0.5px]
              border-border rounded-[10px] px-[20px] py-[20px] md:py-[50px] flex flex-col items-center justify-start
              gap-[40px] tracking-wide hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="bg-surface h-[80px] w-[80px] flex items-center justify-center rounded-[10px]">
              <feature.icon size={50} strokeWidth={2} className="text-primary" />
            </div>
            <div className="space-y-[10px]">
              <h3 className="md:text-lg font-semibold leading-[120%]">{feature.title}</h3>
              <p className="text-text-muted text-sm font-normal leading-[150%]">{feature.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyUs;

import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const OurProcess = () => {
  const steps = [
    {
      title: "Discovery & Analysis",
      description:
        "We analyze your business goals, users, and existing systems to define scope, technical requirements, and success criteria before any design or development begins.",
    },
    {
      title: "UX, UI & Architecture",
      description:
        "We design user flows, interfaces, and system structure together, ensuring usability, consistency, and a solid technical foundation.",
    },
    {
      title: "Development & Implementation",
      description:
        "We implement the system using clean, maintainable code, focusing on performance, scalability, and long-term reliability.",
    },
    {
      title: "Ongoing Support & Improvements",
      description:
        "We continue supporting and improving the product after delivery, handling updates, fixes, and enhancements as your business evolves.",
    },
  ];

  return (
    <div className="p-[120px] flex flex-col items-center justify-center gap-[60px] bg-surface">
      <SectionHeader
        label="OUR PROCESS"
        title="A structured approach to building reliable web systems"
      />
      <div className="grid grid-cols-2 grid-rows-4 w-full h-[575px] gap-y-[25px] relative overflow-x-hidden">
        <div className="w-[1px] h-full absolute bg-border left-[50%] translate-x-[-50%]" />
        {steps.map((step, index) => (
          <motion.div
            className={`col-span-2 flex items-center gap-[15px] w-1/2 h-full ${index % 2 === 0 ? "flex-row-reverse" : "flex-row ml-auto"} w-1/2`}
            initial={{ opacity: 0, x: index % 2 === 0 ? "-100%" : "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className={`flex items-center justify-center gap-0 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className="h-[1px] w-[20px] bg-border" />
              <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary/25 rounded-full text-primary border-[1px] border-border font-semibold text-[22px]">
                {index + 1}
              </div>
            </div>
            <div className="flex-1 bg-elevated p-[20px] rounded-[10px] flex flex-col items-start justify-center gap-[10px]">
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="font-normal text-sm leading-[150%] tracking-wide text-text-muted">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;

import React, { useEffect, useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import {
  ArrowRightIcon,
  LayoutTemplateIcon,
  PenToolIcon,
  type LucideProps,
} from "lucide-react";

const tabs = [
  {
    title: "Clarity over complexity",
    icon: PenToolIcon,
    description:
      "We prioritize clear structure, readable interfaces, and understandable systems over unnecessary complexity.",
  },
  {
    title: "Performance is not optional",
    icon: LayoutTemplateIcon,
    description:
      "We prioritize clear structure, readable interfaces, and understandable systems over unnecessary complexity.",
  },
  {
    title: "Ownership after delivery",
    icon: PenToolIcon,
    description:
      "We prioritize clear structure, readable interfaces, and understandable systems over unnecessary complexity.",
  },
  {
    title: "Maintainability matters",
    icon: PenToolIcon,
    description:
      "We prioritize clear structure, readable interfaces, and understandable systems over unnecessary complexity.",
  },
];

const OurPrinciples = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabData, setActiveTabData] = useState(tabs[activeTab]);

  useEffect(() => {
    setActiveTabData(tabs[activeTab]);
  }, [activeTab]);

  return (
    <div className="space-y-[40px] md:p-[120px] px-[30px] py-[100px]">
      <SectionHeader
        label="Our Principles"
        title="How we think and work"
        dir="left"
      />
      <div className="flex md:flex-row flex-col md:flex-wrap w-fill gap-[25px]">
        <div className="flex flex-col flex-wrap flex-1 gap-[25px]">
          {tabs.map((tab, index) => (
            <div
              className={`cursor-pointer flex gap-[10px] p-[20px] rounded-[10px] border
            border-border items-center w-full transition-all duration-300 ease-in-out ${
              index === activeTab ? "bg-border" : "bg-surface"
            }`}
              onClick={() => setActiveTab(index)}
            >
              <p
                className={`w-[30px] h-[30px] flex items-center justify-center bg-elevated border
              border-border rounded-[5px] text-sm font-bold transition-all duration-300 ease-in-out ${
                index === activeTab
                  ? "bg-primary text-text-primary"
                  : "bg-elevated text-text-disabled"
              }`}
              >
                0{index + 1}
              </p>
              <p>{tab.title}</p>
              <ArrowRightIcon
                size={16}
                className="stroke-text-disabled ml-auto"
              />
            </div>
          ))}
        </div>
        <div className="overflow-hidden bg-surface flex-2 flex flex-col gap-[20px] p-[40px] border relative border-border rounded-[15px]">
          <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[10px] bg-elevated border border-border">
            <activeTabData.icon
              size={36}
              className="stroke-primary"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="text-xl font-bold tracking-wide">
            {activeTabData.title}
          </h3>
          <p className="text-text-muted tracking-wide leading-[170%]">
            {activeTabData.description}
          </p>
          <p className="absolute text-right text-primary -bottom-[65px] -right-[15px] font-black text-[150px] opacity-10">
            0{activeTab + 1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPrinciples;

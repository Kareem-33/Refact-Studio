import { AppWindowIcon, BadgeCheckIcon, EyeIcon, NetworkIcon, PenToolIcon, RulerIcon, SparklesIcon, StarIcon, TabletSmartphoneIcon } from "lucide-react";
import React from "react";

const WebDesign = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex gap-[20px] items-center">
        <div className="w-[70px] h-[70px] bg-elevated border border-border flex items-center justify-center rounded-[5px]">
          <PenToolIcon size={36} className="stroke-primary" />
        </div>
        <div className="space-y-[5px]">
          <h3 className="text-2xl font-semibold">Web Design & UI/UX</h3>
          <p className="text-text-muted">
            Designing clear, intuitive interfaces that support real user
            behavior and business goals.
          </p>
        </div>
      </div>
      <div className="mt-[40px] bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <EyeIcon size={24} className="stroke-accent" />
          Overview
        </h4>
        <p className="mt-[10px] text-text-muted">
          Good design is more than visual style. It’s about structure, clarity,
          and how people interact with a product. We design websites and
          interfaces that are easy to navigate, visually consistent, and built
          to support both users and the teams that maintain them. Our focus is
          on usability, thoughtful layout decisions, and creating interfaces
          that scale as products grow.
        </p>
        <p className="mt-[10px] text-text-muted">
          Our focus is on usability, thoughtful layout decisions, and creating
          interfaces that scale as products grow.
        </p>
      </div>
      <div className="bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <StarIcon size={24} className="stroke-accent" />
          What We Do
        </h4>
        <div className="grid grid-cols-3 grid-rows-2 mt-[20px] gap-[10px]">
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <AppWindowIcon size={24} className="stroke-text-disabled" />
            Website interface design
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <SparklesIcon size={24} className="stroke-text-disabled" />
            User experience planning
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <NetworkIcon size={24} className="stroke-text-disabled" />
            Information architecture
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <TabletSmartphoneIcon size={24} className="stroke-text-disabled" />
            Responsive layout design
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <RulerIcon size={24} className="stroke-text-disabled" />
            Design systems and UI consistency
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <BadgeCheckIcon size={24} className="stroke-text-disabled" />
            Developer-ready design handoff
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;

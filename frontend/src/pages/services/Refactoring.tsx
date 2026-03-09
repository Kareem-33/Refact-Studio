import {
  BugOffIcon,
  CodeXmlIcon,
  Columns3CogIcon,
  CpuIcon,
  EyeIcon,
  GaugeIcon,
  RefreshCcwIcon,
  SparklesIcon,
  StarIcon,
} from "lucide-react";
import React from "react";

const Refactoring = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex gap-[20px] items-center">
        <div className="w-[70px] h-[70px] bg-elevated border border-border flex items-center justify-center rounded-[5px]">
          <RefreshCcwIcon size={36} className="stroke-primary" />
        </div>
        <div className="space-y-[5px]">
          <h3 className="text-2xl font-semibold">
            Website Refactoring & Upgrades
          </h3>
          <p className="text-text-muted">
            Improving existing websites by fixing structure, performance, and
            maintainability issues.
          </p>
        </div>
      </div>
      <div className="mt-[40px] bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <EyeIcon size={24} className="stroke-accent" />
          Overview
        </h4>
        <p className="mt-[10px] text-text-muted">
          Not every website needs to be rebuilt from scratch. In many cases,
          existing systems can be improved significantly by cleaning up code,
          fixing structural problems, and upgrading key components.
        </p>
        <p className="mt-[10px] text-text-muted">
          Refactoring helps extend the life of a product while improving performance and usability.
        </p>
      </div>
      <div className="bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <StarIcon size={24} className="stroke-accent" />
          What We Do
        </h4>
        <div className="grid grid-cols-3 grid-rows-2 mt-[20px] gap-[10px]">
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <CodeXmlIcon size={24} className="stroke-text-disabled" />
            Codebase restructuring and cleanup
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <GaugeIcon size={24} className="stroke-text-disabled" />
            Performance improvements
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <Columns3CogIcon size={24} className="stroke-text-disabled" />
            UI and UX upgrades
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <CpuIcon size={24} className="stroke-text-disabled" />
            Technology updates
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <BugOffIcon size={24} className="stroke-text-disabled" />
            Bug fixes and stability improvements
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <SparklesIcon size={24} className="stroke-text-disabled" />
            System modernization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refactoring;

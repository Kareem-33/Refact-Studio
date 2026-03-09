import { AccessibilityIcon, ChevronsUpIcon, CpuIcon, EyeIcon, FileCodeIcon, GaugeIcon, LayoutPanelLeftIcon, SearchCheckIcon, StarIcon } from "lucide-react";
import React from "react";

const Seo = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex gap-[20px] items-center">
        <div className="w-[70px] h-[70px] bg-elevated border border-border flex items-center justify-center rounded-[5px]">
          <GaugeIcon size={36} className="stroke-primary" />
        </div>
        <div className="space-y-[5px]">
          <h3 className="text-2xl font-semibold">
            Technical SEO & Performance Optimization
          </h3>
          <p className="text-text-muted">
            Improving website structure, speed, and accessibility to support
            search visibility and usability.
          </p>
        </div>
      </div>
      <div className="mt-[40px] bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <EyeIcon size={24} className="stroke-accent" />
          Overview
        </h4>
        <p className="mt-[10px] text-text-muted">
          Search visibility and user experience depend heavily on technical
          foundations. Slow loading pages, poor structure, and inaccessible
          content can limit both search performance and usability.
        </p>
        <p className="mt-[10px] text-text-muted">
          Technical optimization focuses on improving these underlying systems.
        </p>
      </div>
      <div className="bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <StarIcon size={24} className="stroke-accent" />
          What We Do
        </h4>
        <div className="grid grid-cols-3 grid-rows-2 mt-[20px] gap-[10px]">
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <ChevronsUpIcon size={24} className="stroke-text-disabled" />
            Performance optimization
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <CpuIcon size={24} className="stroke-text-disabled" />
            Core Web Vitals improvements
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <SearchCheckIcon size={24} className="stroke-text-disabled" />
            Technical SEO audits
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <FileCodeIcon size={24} className="stroke-text-disabled" />
            Semantic HTML improvements
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <AccessibilityIcon size={24} className="stroke-text-disabled" />
            Accessibility enhancements
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center justify-center gap-[15px]">
            <LayoutPanelLeftIcon size={24} className="stroke-text-disabled" />
            Page structure optimization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seo;

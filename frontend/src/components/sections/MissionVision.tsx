import { EyeIcon, GoalIcon } from "lucide-react";
import React from "react";

const MissionVision = () => {
  return (
    <div className="flex gap-[60px] p-[120px] pt-[60px] w-full">
      <div className="flex flex-col gap-[20px] flex-1">
        <div className="flex gap-[10px] px-[20px] py-[10px] rounded-full bg-elevated border border-border items-center w-fit">
          <GoalIcon size={18} className="stroke-primary" />
          <p className="capitalize text-xs font-medium text-text-muted">
            OUR MISSION
          </p>
        </div>
        <p className="text-[26px] font-light text-text-secondary tracking-wider">
          To design, build, and improve web systems that are clear,
          maintainable, and built to last — focusing on real needs, not
          short-term trends.
        </p>
      </div>
      <div className="w-[1px] bg-border" />
      <div className="flex flex-col gap-[20px] flex-1">
        <div className="flex gap-[10px] px-[20px] py-[10px] rounded-full bg-elevated border border-border items-center w-fit">
          <EyeIcon size={18} className="stroke-primary" />
          <p className="capitalize text-xs font-medium text-text-muted">
            OUR VISION
          </p>
        </div>
        <p className="text-[26px] font-light text-text-secondary tracking-wider">
          To be a trusted partner for teams and businesses that value thoughtful
          design, reliable engineering, and long-term digital stability.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;

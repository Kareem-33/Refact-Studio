import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="px-[20px] py-[10px] flex items-center justify-center gap-[10px] bg-elevated rounded-[5px]
      text-xs font-medium uppercase tracking-wider text-text-muted w-fit h-fit"
    >
      {children}
    </div>
  );
};

export default Label;

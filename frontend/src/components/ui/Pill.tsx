import React from "react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-fit h-fit flex items-center justify-center gap-[10px] px-[10px] py-[5px] rounded-full
    border border-primary text-primary text-xs tracking-wide leading-[120%]"
    >
      {children}
    </div>
  );
}

export default Pill;

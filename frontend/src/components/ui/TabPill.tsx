import React from "react";

const TabPill = ({ children, active=false, onClick=()=>{} }: { children: React.ReactNode, active?: boolean, onClick?: () => void }) => {
  return (
    <div
      className={`px-[20px] py-[5px] text-sm rounded-full border border-border font-medium text-base transition-all
      tracking-wide ${active ? "bg-border text-text-primary" : "bg-surface text-text-disabled hover:bg-primary/15" }
      cursor-pointer duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TabPill;

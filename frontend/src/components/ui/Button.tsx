import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "small-ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, variant = "primary", className, onClick=()=>{}, type="button" }: Props) => {

  const baseStyle = "transition-all duration-300 font-semibold flex items-center justify-center tracking-wide! cursor-pointer";
  const variants = {
    primary: "bg-primary hover:bg-primary-hover active:bg-primary-active px-7 py-3.5 h-12 w-fit rounded-md gap-2",
    secondary: "bg-transparent hover:bg-primary/8 border-[1.5px] border-primary text-primary active:bg-primary/15 px-7 py-3.5 h-12 w-fit rounded-md gap-2",
    "small-ghost": "bg-surface hover:bg-elevated border-[1px] border-border hover:border-soft-border text-text-secondary text-[13px] px-[14px] py-[12px] hover:gap-[12px] gap-[8px] h-fit w-fit rounded-[4px]",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={() => type === "button" && onClick()}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

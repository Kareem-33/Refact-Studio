import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  group?: string;
  preview?: boolean;
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Accordion = ({
  preview = false,
  title,
  children,
  onClick = () => {},
  className = "",
}: Props) => {
  return (
    <div className={`${className} transition-all duration-300 ease-in-out cursor-pointer bg-elevated rounded-[10px]
        border border-border hover:bg-surface flex flex-col ${preview ? "divide-y divide-border" : ""}`}>
      <div
        className="flex items-center justify-between  p-[20px] "
        onClick={() => {
          onClick();
        }}
      >
        <h3 className="text-base font-semibold tracking-wide">{title}</h3>
        <ChevronDownIcon
          size={24}
          className={`${preview ? "-rotate-180" : ""} transition-all duration-300 ease-in-out`}
        />
      </div>
      <motion.div
        initial={{ height: 0}}
        animate={{ height: preview ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden`}
      >
        {children}
        </motion.div>
    </div>
  );
};

export default Accordion;

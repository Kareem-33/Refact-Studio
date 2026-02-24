import React from "react";
import Label from "./Label";
import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  subtitle: string;
};

const PageHeader = (props: Props) => {
  return (
    <div className="h-[calc(100vh-150px)] w-full flex flex-col items-center justify-between py-[80px] px-[120px] border-b border-border">
      <motion.div
        className="flex flex-col items-center text-center w-[480px] gap-[20px]"
        initial={{ filter: "blur(10px)", transform: "translateY(20px)", opacity: 0 }}
        animate={{ filter: "blur(0)", transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Label>{props.label}</Label>
        <h2 className="text-[32px] font-medium leading-[120%] tracking-normal">
          {props.title}
        </h2>
        <p className="font-normal text-base text-text-muted leading-[150%] tracking-wide">
          {props.subtitle}
        </p>
      </motion.div>
      <div className="px-[20px] py-[10px] rounded-full flex items-center gap-[10px] bg-surface">
        <div className="w-[22px] h-[33px] flex items-start justify-center rounded-full p-[5px] border-[2px] border-text-disabled">
          <div className="w-[5px] h-[10px] rounded-full bg-text-disabled" />
        </div>
        <p className="text-sm font-medium tracking-wide text-text-disabled">
          Scroll to explore
        </p>
      </div>
    </div>
  );
};

export default PageHeader;

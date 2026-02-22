import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <motion.div
      className="p-[120px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-surface border border-border w-full h-full rounded-[20px] flex items-stretch justify-between gap-[50px]">
        <div className="flex flex-col gap-[30px] p-[50px] flex-1">
          <SectionHeader
            label="LET’S TALK"
            title="Let’s build something better together"
            dir="left"
          />
          <p className="font-normal text-base text-text-muted leading-[150%] tracking-wide">
            Tell us about your project, goals, or existing website. We’ll review
            your requirements and get back to you with clear next steps.
          </p>
          <div className="flex items-center justify-start gap-[20px]">
            <Button variant="primary">Start a Project</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>
        <div className="w-1/3 aspect-square rounded-r-[20px] overflow-hidden border-l border-border">
          <img
            src="/images/projects/snail-store.png"
            alt="Snail Store Project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactBanner;

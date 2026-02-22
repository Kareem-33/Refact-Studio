import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and scope. Typically, a simple website takes 2-4 weeks, while a complex application may take 2-3 months.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and scope. Typically, a simple website takes 2-4 weeks, while a complex application may take 2-3 months.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and scope. Typically, a simple website takes 2-4 weeks, while a complex application may take 2-3 months.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and scope. Typically, a simple website takes 2-4 weeks, while a complex application may take 2-3 months.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and scope. Typically, a simple website takes 2-4 weeks, while a complex application may take 2-3 months.",
    },
  ];

  return (
    <div className="p-[120px] flex flex-col items-start justify-center gap-[60px] bg-surface">
      <SectionHeader
        label="FAQ"
        title="Frequently asked questions"
        dir="left"
      />
      <motion.div
        className="flex flex-col gap-[20px] w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={`Q${index + 1}. ${faq.question}`}
            onClick={() => {
              activeIndex === index
                ? setActiveIndex(null)
                : setActiveIndex(index);
            }}
            preview={activeIndex === index}
            className="w-full"
          >
            <p className="text-sm font-normal leading-[150%] text-text-muted tracking-wide p-[20px]">
              {faq.answer}
            </p>
          </Accordion>
        ))}
      </motion.div>
      <div className="-mt-[30px] space-y-[10px]">
        <p className="text-sm font-normal leading-[150%] text-text-muted tracking-wide">
          Didn’t find your question? <br />
          Reach out and tell us about your project — we’ll be happy to help.
        </p>
        <Button variant="small-ghost" className="bg-background! hover:bg-surface!">
          Contact Us
          <ArrowRightIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Faq;

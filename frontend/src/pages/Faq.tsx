import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { ArrowRightIcon, TvMinimalPlayIcon } from "lucide-react";
import Button from "../components/ui/Button";
import Accordion from "../components/ui/Accordion";
import ContactBanner from "../components/sections/ContactBanner";

const sections = [
  {
    title: "Getting Started",
    icon: TvMinimalPlayIcon,
    questions: [
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
    ],
  },
  {
    title: "SERVICES & SCOPE",
    icon: TvMinimalPlayIcon,
    questions: [
      {
        title: "How much does a website or stem cost?",
        answer:
          "Yes. Refactoring ites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
    ],
  },
  {
    title: "Getting Started",
    icon: TvMinimalPlayIcon,
    questions: [
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
    ],
  },
  {
    title: "Getting Started",
    icon: TvMinimalPlayIcon,
    questions: [
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
    ],
  },
  {
    title: "Getting Started",
    icon: TvMinimalPlayIcon,
    questions: [
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
      {
        title: "How much does a website or web system cost?",
        answer:
          "Yes. Refactoring and upgrading existing websites is one of our core services. We can improve performance, structure, design, and functionality without rebuilding everything from scratch.",
      },
    ],
  },
];

const Faq = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSectionData, setActiveSectionData] = useState(sections[0]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  React.useEffect(() => {
    setActiveSectionData(sections[activeSection] || sections[0]);
  }, [activeSection]);

  return (
    <div>
      <PageHeader
        label="FAQ"
        title="Answers to common questions"
        subtitle="Everything you need to know before starting a project with Refact Studio."
      />
      <div className="md:p-[120px] px-[30px] py-[100px] flex md:flex-row flex-col gap-[60px]">
        <div className="flex flex-col gap-[100px] w-[250px]">
          <ul className="space-y-[20px]">
            <h3 className="font-semibold text-2xl pb-[20px]">Categories</h3>
            {sections.map((section, index) => (
              <li
                key={index}
                className={`uppercase cursor-pointer ${index === activeSection ? "text-primary font-bold" : "text-text-muted"} transition-all duration-300 ease-in-out`}
                onClick={() => setActiveSection(index)}
              >
                {section.title}
              </li>
            ))}
          </ul>
          <div className="space-y-[10px] hidden md:block">
            <p className="text-sm tracking-wide leading-[150%] text-text-muted">
              Didn’t find your question?
              <br />
              Reach out and tell us about your project — we’ll be happy to help.
            </p>
            <Button variant="small-ghost">
              Contact Us
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
        <div className="flex-1 space-y-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[5px] bg-surface border border-border">
              <activeSectionData.icon
                size={30}
                className="stroke-primary"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-[26px] tracking-wide font-semibold">
              {activeSectionData.title}
            </h2>
          </div>
          <div className="space-y-[20px]">
            {activeSectionData.questions.map((question, index) => (
              <Accordion
                key={index}
                title={`Q${index + 1}. ${question.title}`}
                preview={index === activeQuestion}
                onClick={() => {
                  activeQuestion === index
                    ? setActiveQuestion(-1)
                    : setActiveQuestion(index);
                }}
              >
                <p className="p-[20px] text-sm text-text-muted leading-[150%] tracking-wide">
                  {question.answer}
                </p>
              </Accordion>
            ))}
          </div>
          <div className="space-y-[10px] md:hidden mt-[50px]">
            <p className="text-sm tracking-wide leading-[150%] text-text-muted">
              Didn’t find your question?
              <br />
              Reach out and tell us about your project — we’ll be happy to help.
            </p>
            <Button variant="small-ghost">
              Contact Us
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
};

export default Faq;

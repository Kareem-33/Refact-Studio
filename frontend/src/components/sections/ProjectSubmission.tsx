import React from "react";

const steps = [
  {
    title: "We review your request",
    description: "We read through your project details carefully.",
  },
  {
    title: "We follow up if needed",
    description:
      "We may ask a few questions to clarify scope and requirements. asd sad asd as ",
  },
  {
    title: "We suggest next steps",
    description:
      "This could be a call, a proposal, or a technical recommendation.",
  },
];

const ProjectSubmission = () => {
  return (
    <div className="md:p-[120px] px-[30px] py-[100px] flex flex-col items-center justify-center gap-[60px] bg-surface">
      <h2 className="text-[32px] font-medium">What happens after you submit</h2>
      <div className="flex flex-col md:flex-row gap-[40px] justify-stretch relative w-full">
        <div className="hidden md:block w-full h-[1px] bg-border absolute top-0 left-[50%] translate-x-[-50%]" />
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col md:gap-[15px]">
            <div className="flex md:flex-col flex-col-reverse items-center">
              <div className="w-[1px] h-[15px] bg-border" />
              <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary/25 rounded-full text-primary border-[1px] border-border font-semibold text-[22px]">
                {index + 1}
              </div>
            </div>
            <div className="space-y-[10px] p-[20px] rounded-[10px] bg-elevated border border-border h-full">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm tracking-wide leading-[150%] text-text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSubmission;

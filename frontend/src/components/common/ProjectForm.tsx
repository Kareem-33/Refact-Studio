import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { ArrowRightIcon } from "lucide-react";
import TextArea from "../ui/TextArea";

enum DescriptionType {
  "design" = "Web Design & UI/UX",
  "development" = "Web Development",
  "refactoring" = "Website Refactoring & Upgrades",
  "seo" = "Technical SEO & Performance Optimization",
}

interface IFormInput {
  fullName: string;
  email: string;
  company: string;
  description: DescriptionType;
  goal: string;
  website: string;
  startTime: string;
  budget: string;
  notes: string;
}

const ProjectForm = ({ className = "" }: { className?: string }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-[30px] ${className}`}
    >
      <p className="text-text-muted tracking-wide leading-[150%]">
        This form helps us understand your goals, scope, and technical context
        so we can respond clearly and efficiently.
      </p>
      <fieldset className="flex gap-[30px] w-full">
        <Input
          label="Full Name"
          placeholder="John Doe"
          register={register("fullName", { required: true })}
        />
        <Input
          label="Email"
          placeholder="example@domain.com"
          register={register("email", { required: true })}
        />
      </fieldset>
      <Input
        label="Company"
        placeholder="Company or team name"
        required={false}
        register={register("company")}
      />
      <Select
        options={Object.values(DescriptionType)}
        name="description"
        className="w-full"
        label="Describe your project"
        placeholder="Select an option"
        register={register("description", { required: true })}
      />
      <TextArea
        label="What are you trying to achieve?"
        placeholder="Describe your goals, problems you’re trying to solve, or what you want to improve."
        register={register("goal", { required: true })}
        required={true}
      />
      <Input
        label="Current Website or System"
        placeholder="https://example.com"
        required={false}
        register={register("website")}
      />
      <Input
        label="When do you want to start?"
        type="date"
        register={register("startTime", { required: true })}
      />
      <Input
        label="Estimated budget range (EGP or $)"
        placeholder="20,000 EGP - 40,000 EGP"
        register={register("budget", { required: true })}
      />
      <TextArea
        label="Additional Notes"
        placeholder="Anything else we should know? Constraints, integrations, or technical details."
        required={false}
        register={register("notes")}
      />
      <div className="flex items-center justify-between gap-[50px]">
        <div className="flex-1 text-text-disabled text-sm tracking-wide leading-[150%]">
          We usually reply within 1–2 business days with questions or next
          steps.
        </div>
        <Button
          variant="small-ghost"
          type="submit"
          className="text-sm! bg-elevated! hover:bg-surface!"
        >
          Submit project request
          <ArrowRightIcon size={20} />
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;

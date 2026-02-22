import { ArrowRightIcon, StarIcon } from "lucide-react";
import React from "react";
import Pill from "../ui/Pill";
import Button from "../ui/Button";

type Props = {
  img: string;
  title: string;
  description: string;
  featured?: boolean;
  tags: string[];
  link: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div
      className={`flex items-start justify-start ${props.featured ? "col-span-2" : "flex-col-reverse"}
      w-full h-full bg-surface rounded-[16px] overflow-hidden border border-border`}
    >
      <div className={`${props.featured ? "w-full" : "w-full px-[40px] object-cover mx-auto"} relative`}>
        <img src={props.img} alt={`${props.title} cover image`} className={`w-full h-full ${!props.featured && "rounded-t-lg"}`} />
        <div className="absolute w-full h-1/4 bg-linear-180 from-transparent to-surface z-1 bottom-0 left-0"/>
      </div>
      <div className={`h-full w-full flex flex-col gap-[10px] p-[40px] ${!props.featured && "flex-1"}`}>
        <div className="flex items-center justify-start gap-[10px]">
          {props.featured && (
            <StarIcon className="fill-accent-hover" strokeWidth={0} size={20} />
          )}
          <h3 className="text-[18px] font-semibold">{props.title}</h3>
        </div>
        <p className="text-sm font-normal text-text-muted tracking-wide leading-[150%]">
          {props.description}
        </p>
        {props.tags.length > 0 && (
          <div className="flex items-start justify-start gap-[7px] flex-wrap">
            {props.tags.map((tag, index) => (
              <Pill key={index}>{tag}</Pill>
            ))}
          </div>
        )}
        <Button
          variant="small-ghost"
          className="mt-[10px] bg-background! hover:bg-elevated!"
        >
          Show Project
          <ArrowRightIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;

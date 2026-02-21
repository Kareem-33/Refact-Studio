import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../common/ProjectCard";
import Button from "../ui/Button";
import { ArrowRightIcon } from "lucide-react";

const OurWork = () => {

  const projects = [
    {
      img: "/images/projects/snail-store.png",
      title: "Designing Dashboards",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      featured: true,
      tags: ["Dashboard", "Design", "Development"],
      link: "#"
    },
    {
      img: "/images/projects/snail-store.png",
      title: "Designing Dashboards",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      featured: false,
      tags: ["Dashboard", "Design", "Development"],
      link: "#"
    },
    {
      img: "/images/projects/reayaa.png",
      title: "Designing Dashboards",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      featured: false,
      tags: ["Dashboard", "Design", "Development"],
      link: "#"
    }
  ]

  return (
    <div className="p-[120px] flex flex-col items-start justify-center gap-[60px]">
      <SectionHeader
        label="OUR WORK"
        title="Selected projects we’ve designed and built"
        dir="left"
      />
      <div className="space-y-[35px]">
        <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-[35px] min-h-[250px] max-h-fit w-full">
          <ProjectCard {...projects[0]}/>
          <ProjectCard {...projects[1]}/>
          <ProjectCard {...projects[2]}/>
        </div>
        <Button variant="small-ghost" className="text-base!">
          Show All Work
          <ArrowRightIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default OurWork;

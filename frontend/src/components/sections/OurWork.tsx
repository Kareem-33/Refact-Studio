import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../common/ProjectCard";
import Button from "../ui/Button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OurWork = () => {

  const navigate = useNavigate();

  const projects = [
    {
      img: "/images/projects/snail-store.png",
      title: "Designing Dashboards",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      featured: true,
      tags: ["Dashboard", "Design", "Development"],
      slug: "#",
    },
    {
      img: "/images/projects/snail-store.png",
      title: "Designing Dashboards",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      featured: false,
      tags: ["Dashboard", "Design", "Development"],
      slug: "#",
    },
    {
      img: "/images/projects/reayaa.png",
      title: "Designing Dashboards",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      featured: false,
      tags: ["Dashboard", "Design", "Development"],
      slug: "#",
    },
  ];

  return (
    <div className="md:p-[120px] px-[30px] py-[100px] flex flex-col items-start justify-center gap-[60px]">
      <SectionHeader
        label="OUR WORK"
        title="Selected projects we’ve designed and built"
        dir="left"
      />
      <div className="space-y-[35px]">
        <motion.div
          className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] gap-[35px] min-h-[250px] max-h-fit w-full "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
        <Button variant="small-ghost" className="text-base!" onClick={() => navigate("/work")}>
          Show All Work
          <ArrowRightIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default OurWork;

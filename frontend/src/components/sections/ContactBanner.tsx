import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactBanner = ({type="both"}: {type?: "both" | "project" | "contact"}) => {
  
  const navigate = useNavigate();
  
  return (
    <motion.div
      className="px-[30px] py-[100px] md:p-[120px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-surface border border-border w-full h-full rounded-[10px] md:rounded-[20px] flex items-stretch justify-between gap-[50px]">
        <div className="flex flex-col gap-[30px] p-[20px] md:p-[50px] flex-1 max-w-full">
          <SectionHeader
            label="LET’S TALK"
            title="Let’s build something better together"
            dir="left"
          />
          <p className="font-normal text-base text-text-muted leading-[150%] tracking-wide">
            Tell us about your project, goals, or existing website. We’ll review
            your requirements and get back to you with clear next steps.
          </p>
          <div className="flex items-center justify-start md:gap-[20px] gap-[10px]">
            {(type === "both" || type === "project") && <Button variant="primary" onClick={() => navigate("/start-project")}>Start a Project</Button>}
            {(type === "both" || type === "contact") && <Button variant="secondary" onClick={() => navigate("/contact-us")}>Contact Us</Button>}
          </div>
        </div>
        <div className="hidden md:block w-1/3 aspect-square rounded-r-[20px] overflow-hidden border-l border-border">
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

import SectionHeader from "../ui/SectionHeader";
import {
  ArrowRightIcon,
  GaugeIcon,
  PenToolIcon,
  RefreshCcwIcon,
  TerminalSquareIcon,
} from "lucide-react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export const servicesArr = [
  {
    icon: PenToolIcon,
    title: "Web Design & UI/UX",
    description:
      "We design clean, modern interfaces focused on usability, clarity, and conversion. Every layout, interaction, and visual decision is made to support real user behavior and business goals — not short-lived trends.",
    illustration: "./images/illustrations/ui-ux.svg",
    slug: "web-design",
  },
  {
    icon: TerminalSquareIcon,
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites using modern technologies and best practices. From frontend interfaces to backend systems, our code is structured, efficient, and production-ready.",
    illustration: "./images/illustrations/development.svg",
    slug: "web-development",
  },
  {
    icon: RefreshCcwIcon,
    title: "Website Refactoring & Upgrades",
    description:
      "Already have a website? We improve what exists. We refactor messy code, fix performance issues, modernize the UI, and upgrade systems without unnecessary rebuilds or downtime.",
    illustration: "./images/illustrations/refactoring.svg",
    slug: "refactoring",
  },
  {
    icon: GaugeIcon,
    title: "Technical SEO & Performance Optimization",
    description:
      "We optimize websites for search engines by improving performance, structure, and accessibility. From Core Web Vitals to semantic HTML and clean URLs, we make sure your website is fast, and built to rank.",
    illustration: "./images/illustrations/seo.svg",
    slug: "seo-optimization",
  },
];

const Services = () => {
  return (
    <div className="p-[120px] flex flex-col items-start justify-center gap-[60px] bg-surface">
      <SectionHeader
        label="Our Services"
        title="Designing and building modern web systems"
        dir="left"
        classname="w-[480px]"
      />
      <div className="grid grid-cols-2 grid-rows-2 w-full h-[850px] gap-[40px]">
        {servicesArr.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-between bg-background rounded-[10px]
            p-[40px] pb-0 w-full h-full border-[0.5px] border-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-start justify-center gap-[20px]">
              <div className="flex items-center gap-[10px]">
                <div className="h-[45px] w-[45px] flex items-center justify-center bg-surface border-[0.5px] border-border rounded-[10px] ">
                  <service.icon
                    className="text-primary w-[28px] h-[28px]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm leading-[150%] text-text-muted tracking-wide">
                {service.description}
              </p>
              <Button variant="small-ghost">
                Learn More
                <ArrowRightIcon size={16} strokeWidth={2} />
              </Button>
            </div>
            <img
              src={service.illustration}
              alt={service.title}
              className="w-full "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

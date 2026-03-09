"use client";

import PageHeader from "../components/ui/PageHeader";
import OurProcess from "../components/sections/OurProcess";
import ContactBanner from "../components/sections/ContactBanner";
import Projects from "../components/sections/Projects";

const Work = () => {

  return (
    <div>
      <PageHeader
        label="Our Work"
        title="Projects we’ve designed, built, and improved"
        subtitle="A selection of real projects focused on performance, clarity, and long-term maintainability."
      />
      <Projects />
      <OurProcess />
      <ContactBanner />
    </div>
  );
};

export default Work;

import ContactBanner from "../components/sections/ContactBanner";
import MissionVision from "../components/sections/MissionVision";
import OurPrinciples from "../components/sections/OurPrinciples";
import OurProcess from "../components/sections/OurProcess";
import OurStory from "../components/sections/OurStory";
import Services from "../components/sections/Services";
import WhatWeDo from "../components/sections/WhatWeDo";
import WhyUs from "../components/sections/WhyUs";
import PageHeader from "../components/ui/PageHeader";

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        label="About Us"
        title="A studio focused on building reliable web systems"
        subtitle="We design, build, and improve digital products with clarity, performance, and long-term maintainability in mind."
      />

      <OurStory />
      <MissionVision />
      <OurPrinciples />
      <WhatWeDo />
      <Services className="pt-[60px]" />
      <OurProcess />
      <WhyUs />
      <ContactBanner />
    </div>
  );
};

export default AboutUs;

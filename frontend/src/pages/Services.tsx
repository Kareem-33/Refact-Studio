import PageHeader from "../components/ui/PageHeader";
import { servicesArr } from "../components/sections/Services";
import { useRef, useState, useEffect } from "react";
import WebDesign from "./services/WebDesign";
import WebDevelopment from "./services/WebDevelopment";
import Refactoring from "./services/Refactoring";
import Seo from "./services/Seo";
import OurProcess from "../components/sections/OurProcess";
import ContactBanner from "../components/sections/ContactBanner";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = tabsRef.current[activeTab];

    if (el) {
      setIndicatorStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div>
      <PageHeader
        label="Services"
        title="Designing and building modern web systems"
        subtitle="From design to development and refactoring, we help teams build reliable digital products that are clear, fast, and maintainable."
      />

      <div className="md:p-[120px] px-[30px] pt-[50px] pb-[100px] md:pt-[60px]">
        <div className="overflow-hidden relative flex w-full items-center bg-surface rounded-t-[10px] border border-border divide-border divide-x">
          {/* Active Tab Background */}
          <div
            className="absolute top-0 h-full bg-border transition-all duration-300 ease-in-out"
            style={{
              width: indicatorStyle.width,
              transform: `translateX(${indicatorStyle.left}px)`,
            }}
          />

          {servicesArr.map((item, index) => (
            <div
              key={index}
              ref={(el: any) => (tabsRef.current[index] = el)}
              className="z-10 flex-1 min-w-fit px-[30px] py-[20px] cursor-pointer text-center flex items-center justify-center gap-[10px]"
              onClick={() => setActiveTab(index)}
            >
              <item.icon size={24} className="stroke-primary"/>
              <h2 className="hidden md:block">{item.title}</h2>
            </div>
          ))}
        </div>

        <div className="md:p-[40px] p-[20px] pt-[80px] h-fit bg-linear-to-b from-0% to-[60px] from-background to-surface border border-border rounded-b-[10px] transition-all duration-300 ease-in-out">
          {activeTab === 0 && <WebDesign />}
          {activeTab === 1 && <WebDevelopment />}
          {activeTab === 2 && <Refactoring />}
          {activeTab === 3 && <Seo />}
        </div>
      </div>

      <OurProcess />
      <ContactBanner />
    </div>
  );
};

export default Services;

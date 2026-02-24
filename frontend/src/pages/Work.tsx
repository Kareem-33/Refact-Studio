import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import TabPill from "../components/ui/TabPill";
import Input from "../components/ui/Input";
import { SearchIcon } from "lucide-react";
import BigProjectCard from "../components/common/BigProjectCard";

const Work = () => {

  const [activeTab, setActiveTab] = useState('All');

  return (
    <div>
      <PageHeader
        label="Our Work"
        title="Projects we’ve designed, built, and improved"
        subtitle="A selection of real projects focused on performance, clarity, and long-term maintainability."
      />
      <div className="flex flex-col gap-[40px] p-[120px] pt-[40px] w-full h-fit">
        <div className="flex items-center justify-between pb-[40px] gap-[40px]">
          <div className="flex flex-wrap gap-[10px] flex-1">
            <TabPill active={activeTab === 'All'} onClick={() => setActiveTab("All")}>All</TabPill>
            <TabPill active={activeTab === 'Featured'} onClick={() => setActiveTab("Featured")}>Featured</TabPill>
            <TabPill active={activeTab === 'Websites'} onClick={() => setActiveTab("Websites")}>Websites</TabPill>
            <TabPill active={activeTab === 'Dashboards'} onClick={() => setActiveTab("Dashboards")}>Dashboards</TabPill>
          </div>
          <Input placeholder="Search..." className="w-[320px]" icon={SearchIcon} />
        </div>
        <p>Showing 1–4 of 12 projects</p>
        <div>
          <BigProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Work;

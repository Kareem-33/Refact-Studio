import {
  AppWindowIcon,
  BadgeCheckIcon,
  ChartPieIcon,
  CloudUploadIcon,
  EyeIcon,
  GaugeIcon,
  NetworkIcon,
  RouteIcon,
  RulerIcon,
  ServerIcon,
  SparklesIcon,
  StarIcon,
  TabletSmartphoneIcon,
  TerminalSquareIcon,
} from "lucide-react";

const WebDevelopment = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex md:flex-row flex-col gap-[20px] md:items-center">
        <div className="w-[70px] h-[70px] bg-elevated border border-border flex items-center justify-center rounded-[5px]">
          <TerminalSquareIcon size={36} className="stroke-primary" />
        </div>
        <div className="space-y-[5px]">
          <h3 className="md:text-2xl text-xl font-semibold">Web Development</h3>
          <p className="text-text-muted">
            Building reliable, scalable web systems using modern development
            practices.
          </p>
        </div>
      </div>
      <div className="mt-[40px] bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <EyeIcon size={24} className="stroke-accent" />
          Overview
        </h4>
        <p className="mt-[10px] text-text-muted">
          A well-built website or web system needs more than working features.
          It requires clear architecture, maintainable code, and performance
          that holds up over time.
        </p>
        <p className="mt-[10px] text-text-muted">
          We develop websites and web systems with a focus on reliability,
          structure, and long-term stability.
        </p>
      </div>
      <div className="bg-elevated border border-border rounded-[10px] p-[20px] border-l-[5px] border-l-accent/25">
        <h4 className="text-xl font-semibold flex items-center gap-[10px]">
          <StarIcon size={24} className="stroke-accent" />
          What We Do
        </h4>
        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 mt-[20px] gap-[10px]">
          <p className="bg-surface p-[20px] rounded-[7px] border border-border md:text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center md:justify-center gap-[15px]">
            <AppWindowIcon size={24} className="stroke-text-disabled min-w-fit" />
            Frontend development
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border md:text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center md:justify-center gap-[15px]">
            <ServerIcon size={24} className="stroke-text-disabled min-w-fit" />
            Backend integration
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border md:text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center md:justify-center gap-[15px]">
            <RouteIcon size={24} className="stroke-text-disabled min-w-fit" />
            API integrations
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border md:text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center md:justify-center gap-[15px]">
            <ChartPieIcon size={24} className="stroke-text-disabled min-w-fit" />
            Web applications and dashboards
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border md:text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center md:justify-center gap-[15px]">
            <CloudUploadIcon size={24} className="stroke-text-disabled min-w-fit" />
            Deployment and production setup
          </p>
          <p className="bg-surface p-[20px] rounded-[7px] border border-border md:text-center transition-all duration-300 ease-in-out hover:bg-primary/10 cursor-default flex items-center md:justify-center gap-[15px]">
            <GaugeIcon size={24} className="stroke-text-disabled min-w-fit" />
            Performance-focused implementation
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;

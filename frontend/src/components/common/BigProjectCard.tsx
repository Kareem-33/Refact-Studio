import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Pill from "../ui/Pill";
import {
  ArrowRightIcon,
} from "lucide-react";
import Button from "../ui/Button";

type Props = {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  tags: string[];
  deliverables: string[];
  techStack: string[];
  reverse?: boolean;
};

const BigProjectCard = (props: Props) => {
  return (
    <div className={`min-h-[540px] w-full flex gap-[20px] p-[20px] rounded-[20px] bg-surface border border-border ${props.reverse ? "flex-row-reverse" : ""}`}>
      <div className="min-h-[500px] w-[500px] rounded-[10px] overflow-hidden relative border border-border">
        <div className="h-full w-full absolute top-0 left-0 bg-linear-180 from-transparent from-80% to-surface z-1 pointer-events-none" />
        <Swiper
          modules={[Pagination]}
          className="h-full w-full cursor-grab active:cursor-grabbing"
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          resistance={true}
          resistanceRatio={0.5}
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={props.title} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex-1 flex flex-col py-[20px] gap-[10px]">
        <h3 className="text-lg font-semibold leading-[120%]">{props.title}</h3>
        <p className="text-sm font-normal tracking-wide leading-[150%] text-text-muted">
          {props.description}
        </p>
        <div className="flex flex-wrap gap-[7px]">
          {props.tags.map((tag, index) => (
            <Pill key={index}>{tag}</Pill>
          ))}
        </div>
        <div className="mt-[10px] p-[10px] space-y-[10px] bg-elevated border border-border rounded-[10px]">
          <h4 className="text-sm font-semibold">Deliverables</h4>
          <div className="flex flex-wrap gap-[5px]">
            {props.deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="p-[7px] flex gap-[10px] rounded-[4px] bg-surface border border-border text-text-muted text-xs items-center"
              >
                <ArrowRightIcon size={16} />
                <span>{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-[10px] space-y-[10px] bg-elevated border border-border rounded-[10px]">
          <h4 className="text-sm font-semibold">Tech Stack</h4>
          <div className="flex flex-wrap gap-[5px]">
            {props.techStack.map((stack, index) => (
              <div
                key={index}
                className="p-[7px] flex gap-[10px] rounded-[4px] bg-surface border border-border text-text-muted text-xs items-center"
              >
                <ArrowRightIcon size={16} />
                <span>{stack}</span>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="small-ghost"
          className="bg-background! hover:bg-surface! mt-[10px]"
        >
          View Project <ArrowRightIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default BigProjectCard;

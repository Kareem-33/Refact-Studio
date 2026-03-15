import Pill from "../ui/Pill";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

type Props = {
  img: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
  featured?: boolean;
};

const BlogCard = (props: Props) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-full rounded-[10px] overflow-hidden bg-surface border border-border">
      <div className="w-full aspect-video ">
        <img
          src={props.img}
          alt={`${props.title} cover image`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-[10px] p-[20px] flex-1">
        <Pill>{props.category}</Pill>
        <h3 className="font-semibold tracking-wide leading-[140%]">
          {props.title}
        </h3>
        <p
          className="font-normal text-sm leading-[150%] text-text-muted line-clamp-3"
          title={props.description}
        >
          {props.description}
        </p>
      </div>
      <div className="flex justify-between p-[20px] border-t border-border bg-elevated">
        <div className="flex flex-col gap-[5px]">
          <p className="font-normal text-text-muted tracking-wide text-sm">{props.author}</p>
          <div className="flex items-center gap-[7px] text-sm text-text-muted font-normal">
            <CalendarIcon size={16} strokeWidth={1.5} />
            <p>{props.date}</p>
          </div>
        </div>
        <Button variant="small-ghost" onClick={() => navigate(`/blog/${props.slug}`)}>
          <p>Read More</p>
          <ArrowRightIcon size={16}/>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;

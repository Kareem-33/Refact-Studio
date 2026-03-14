import { useEffect, useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "../common/TestimonialCard";
import { Navigation } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  const testimonials = [
    {
      rate: 9,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum.",
      name: "John Doe",
      position: "CEO, Company A",
      profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      rate: 9,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum.",
      name: "John Doe",
      position: "CEO, Company A",
      profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      rate: 9,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum.",
      name: "John Doe",
      position: "CEO, Company A",
      profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      rate: 9,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum.",
      name: "John Doe",
      position: "CEO, Company A",
      profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      rate: 9,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum.",
      name: "John Doe",
      position: "CEO, Company A",
      profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      rate: 9,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo. Sed at velit a enim efficitur bibendum.",
      name: "John Doe",
      position: "CEO, Company A",
      profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && swiperRef.current && !hasAnimated.current) {
          hasAnimated.current = true;

          setTimeout(() => {
            swiperRef.current?.slideTo(0, 1500); // animate in 1s
          }, 500); // 👈 0.5 second delay
        }
      },
      { threshold: 0.4 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-[120px] flex flex-col items-center justify-center gap-[60px] relative"
    >
      <div className="pointer-events-none absolute md:w-[300px] w-[75px] h-full bg-linear-to-r to-background from-transparent to-100% z-10 top-0 right-0" />
      <div className="pointer-events-none absolute md:w-[300px] w-[75px] h-full bg-linear-to-r from-background to-transparent to-100% z-10 top-0 left-0" />
      <SectionHeader
        label="TESTIMONIALS"
        title="What our clients say about working with us"
      />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        slidesPerView={window.innerWidth > 1024 ? 3 : 1}
        centeredSlides={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
        className="w-full"
        initialSlide={testimonials.length - 1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="md:w-[500px] cursor-grab active:cursor-grabbing px-[20px] md:p-0"
          >
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-[25px] -mt-[30px]">
        <button
          className="custom-prev hover:bg-elevated cursor-pointer transition-all duration-300 w-[45px]
          h-[45px] flex items-center justify-center rounded-full bg-surface border border-border
          text-text-disabled disabled:opacity-50 disabled:pointer-events-none"
          disabled={slideIndex === 0}
        >
          <ArrowLeftIcon />
        </button>
        <button
          className="custom-next hover:bg-elevated cursor-pointer transition-all duration-300 w-[45px]
          h-[45px] flex items-center justify-center rounded-full bg-surface border border-border
          text-text-disabled disabled:opacity-50 disabled:pointer-events-none"
          disabled={slideIndex === testimonials.length - 1}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

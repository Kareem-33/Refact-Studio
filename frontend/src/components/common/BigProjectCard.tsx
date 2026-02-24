import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BigProjectCard = () => {
  return (
    <div className="h-[540px] w-full flex gap-[20px] p-[20px] rounded-[20px] bg-surface border border-border ">
      <div className="h-[500px] w-[500px] rounded-[10px] overflow-hidden relative border border-border">
        <div className="h-full w-full absolute top-0 left-0 bg-linear-180 from-transparent from-80% to-surface z-1 pointer-events-none" />

        <Swiper
          modules={[Pagination]}
          className="h-full w-full"
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="/images/projects/snail-store.png"
              alt="ss"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/projects/snail-store.png"
              alt="ss"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/projects/snail-store.png"
              alt="ss"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/projects/snail-store.png"
              alt="ss"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BigProjectCard;

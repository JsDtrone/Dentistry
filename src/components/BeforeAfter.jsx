import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const posts = [
  {
    id: 1,

    imgLink: "/img/final/ba1.webp",
  },
  {
    id: 2,

    imgLink: "/img/final/ba2.webp",
  },
  {
    id: 3,

    imgLink: "/img/final/ba3.webp",
  },
  {
    id: 4,

    imgLink: "/img/final/ba4.webp",
  },
];
function BeforeAfter() {
  return (
    <>
      <div className="lg:px-10 pb-10">
        <div className="bg-emerald-200 lg:px-8 lg:pt-8 p-2 sm:p-4 md:px-6 rounded-3xl">
          <h4 className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-8 mt-2  font-medium ">
            Фотографии До и После лечения
          </h4>
          <div className="hidden lg:block">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper  "
            >
              {posts.map(({ id, imgLink, source }) => (
                <SwiperSlide key={id} className=" mb-12 w-full ">
                  <img src={imgLink} alt="" className="rounded-3xl" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>{" "}
          <div className=" lg:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper  "
            >
              {posts.map(({ id, imgLink }) => (
                <SwiperSlide key={id} className="mb-8 md:mb-10 w-full ">
                  <img src={imgLink} alt="" className="rounded-3xl" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeforeAfter;

import React from "react";
import { TfiGallery } from "react-icons/tfi";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./work.css";

// ------> data
const data = [
  {
    id: 0,
    title: "Coming soon",
    image: "../"
  },
  {
    id: 1,
    title: "Coming soon",
    image: "../"
  },
  {
    id: 2,
    title: "Coming soon",
    image: "../"
  },
  {
    id: 3,
    title: "Coming soon",
    image: "../"
  },
  {
    id: 4,
    title: "Coming soon",
    image: "../"
  },
  {
    id: 5,
    title: "Coming soon",
    image: "../"
  },
];

function Work() {
  return (
    <section id="work" className="pt-[80px] sm:pt-[120px]">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Portfolio{" "}
          <span className="inline-block ml-2">
            <TfiGallery className="text-lg sm:text-xl" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <p className="text-gray-300 text-center max-w-[600px] w-full mx-auto mt-8 sm:mt-12">
          Here's a list of some projects I have done. I gained a lot of
          experience while doing these projects.
        </p>
        <Swiper
          className="mySwiper mt-12"
          navigation={false}
          spaceBetween={24}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Autoplay]}
        >
          <div className="!flex !justify-between">
            {data?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="../../Assets/Images/powermate.png"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Work;

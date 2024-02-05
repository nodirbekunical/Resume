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

// ------> Carausel data
const data = [
    {
        title: "Elektronika do’konlari",
    },
    {
        title: "Oziq-ovqat do’kolari",
    },
    {
        title: "Konselariya do’konlari",
    },
    {
        title: "Aksesuar do’konlari",
    },
    {
        title: "Kosmetika do’konlari",
    },
    {
        title: "Konselariya do’konlari",
    },
];

function Work() {
    return (
        <section id="experience" className="pt-[80px] sm:pt-[120px]">
            <div className="container">
                <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
                    <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
                    Portfolio{" "}
                    <span className="inline-block ml-2">
                        <TfiGallery className="text-lg sm:text-xl" />
                    </span>
                    <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
                </h2>
                <p className="text-gray-300 text-center max-w-[700px] w-full mx-auto mt-8 sm:mt-12">
                    Here's a list of some projects which have done. I gained a
                    lot of experience while doing these projects.
                </p>
                <Swiper
                    className="mySwiper mt-12"
                    navigation={true}
                    spaceBetween={24}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    <div className="!flex !justify-between">
                        {data?.map((item) => (
                            <SwiperSlide key={item?.id}>
                                <div className="w-[200px] h-[200px] border">
                                    <p className="text-white">{item.title}</p>
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

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../globals.css";
import Image from "next/image";

const achievementCards = [
  {
    name: "Robert Fox",
    date: "2024-08-06",
    image: "/Robert Fox.png",
    rating: 5,
    description:
      "I've been working at CodeAutomation.ai for a few months and had a positive experience. The company culture is collaborative...",
  },
  {
    name: "Esther Howard",
    date: "2024-08-06",
    image: "/Esther Howard.png",
    rating: 5,
    description:
      "It was great experience working with him, Best web developer in the whole city and Adnan was very professional.",
  },
  {
    name: "Jenny Wilson",
    date: "2024-08-06",
    image: "/Jenny Wilson.png",
    rating: 5,
    description:
      "I've been working at CodeAutomation.ai for a few months and had a positive experience. The company culture is collaborative...",
  },
  {
    name: "Bessie Cooper",
    date: "2024-08-06",
    image: "/Bessie Cooper.png",
    rating: 5,
    description:
      "It was great experience working with him, Best web developer in the whole city and Adnan was very professional.",
  },
];
const Testimonials = () => {
  const [achievementSlideStyle, setAchievementSlideStyle] = useState({
    width: "304px",
    height: "326px",
  });

  useEffect(() => {
    const updateAchievementSlideStyle = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // setAchievementSlideStyle({ width: "250px", height: "265px" });
        setAchievementSlideStyle({ width: "304px", height: "326px" });
      } else {
        setAchievementSlideStyle({ width: "304px", height: "326px" });
      }
    };
    updateAchievementSlideStyle();

    window.addEventListener("resize", updateAchievementSlideStyle);

    return () => {
      window.removeEventListener("resize", updateAchievementSlideStyle);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center py-6 md:py-10 max-w-[1312px] mx-auto">
      <div className="flex flex-col w-fit px-2 sm:px-5 md:px-10">
        <p className="self-start text-base md:text-xl font-semibold text-center text-[#282938]">
          My Google Reviews
        </p>
        <p className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pb-2">
          Testimonials
        </p>
      </div>

      <div className="flex gap-6 justify-center items-start mt-6 lg:mt-16 md:mt-10 overflow-x-hidden w-full xl:w-[1280px] px-3 sm:px-5 md:px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={90}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="px-5 md:px-10"
          style={{ paddingBottom: "80px" }}
        >
          {achievementCards?.map((card, index) => (
            <SwiperSlide key={index} style={achievementSlideStyle}>
              <div className="flex flex-col p-6 bg-white rounded-lg border border-black border-opacity-10 w-[362px] h-[360px]">
                <div className="flex justify-between w-full gap-5">
                  <div className="flex items-center gap-5">
                    <Image
                      width={56}
                      height={56}
                      alt={card.name}
                      src={card.image}
                      className="object-contain w-14 rounded-[31px]"
                    />
                    <div>
                      <p className="text-lg font-semibold text-neutral-700">
                        {card.name}
                      </p>
                      <p className="text-lg text-black">{card.date}</p>
                    </div>
                  </div>
                  <Image
                    width={32}
                    height={32}
                    alt="google-icon"
                    src="/google-icon.png"
                    className="object-contain w-8"
                  />
                </div>
                <div className="flex gap-1.5 items-center mt-4">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      alt="rating"
                      width={32}
                      height={32}
                      src="/rating-star.svg"
                      className="object-contain w-8"
                    />
                  ))}
                </div>
                <p className="mt-4 text-xl font-medium text-neutral-700 leading-8 h-[160px]">
                  {card.description}
                </p>
                <p className="text-lg font-semibold text-fuchsia-600">
                  Read more
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div
            className="swiper-pagination"
            style={{
              position: "absolute",
              bottom: "-4px",
              zIndex: 50,
            }}
          ></div>

          <div
            className="swiper-button-next bg-[#5E3BEE] rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center shadow-lg text-white me-1"
            style={{
              backgroundImage: `url("/next arrow slider.svg")`,
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "absolute",
              top: "25%",
              right: "0px",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <div
            className="swiper-button-prev bg-[#5E3BEE] rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center shadow-lg text-white ms-2"
            style={{
              backgroundImage: `url("/previous slider arrow.svg")`,
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "absolute",
              top: "25%",
              right: "0px",
              width: "40px",
              height: "40px",
            }}
          ></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

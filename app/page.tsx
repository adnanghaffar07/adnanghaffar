"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import HireMe from "./components/HireMe";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import LifeStyle from "./components/LifeStyle";

const tools = [
  "AI Business Automation",
  "Programming Languages",
  "Database",
  "Data Transformation",
  "MSOffice",
  "Code Hosting Platforms",
  "CI/CD Tools",
  "Unit & Automation Testing Framework",
  "API &WebServices Testing",
  "Management Tools",
];

const toolCards = [
  {
    img: "/selenium.svg",
    title: "Selenium Web Driver",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    img: "/playwright.svg",
    title: "Playwright, Cypress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    img: "/framework.svg",
    title: "Framework.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    img: "/robot.svg",
    title: "Robot Framework.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    img: "/framework.svg",
    title: "Appium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export default function Home() {
  const [slideStyle, setSlideStyle] = useState({
    width: "304px",
    height: "286px",
  });

  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const updateSlideStyle = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlideStyle({ width: "250px", height: "215px" });
      } else {
        setSlideStyle({ width: "304px", height: "286px" });
      }
    };
    updateSlideStyle();

    window.addEventListener("resize", updateSlideStyle);

    return () => {
      window.removeEventListener("resize", updateSlideStyle);
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />

      {/* Tools & Expertise */}
      <div
        className="flex flex-col justify-center items-center py-6 md:py-16 max-w-[1312px] mx-auto"
        id="expertise"
      >
        <div className="flex flex-col px-2 sm:px-5 md:px-10">
          <div className="flex flex-col justify-center w-fit">
            <p className="self-start text-base md:text-xl font-semibold text-center text-[#282938]">
              Skills I Gain
            </p>
            <p className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              My Tools & Expertise
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-5 items-center mt-4 md:mt-8 w-full text-lg font-medium leading-tight max-md:max-w-full">
            <div className="self-stretch my-auto px-[10px] py-2 md:py-[13px] text-white rounded-lg border border-indigo-600 border-solid bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] text-xs md:text-lg">
              Automated Testing & Reporting
            </div>
            {tools.map((tool, index) => (
              <div
                className="rounded-lg p-[1px] w-fit bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]"
                key={index}
              >
                <p className="px-[10px] py-1.5 md:py-[13px] bg-white rounded-[7px]">
                  <span className="text-xs md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                    {tool}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 justify-center items-start mt-6 lg:mt-16 md:mt-10 overflow-x-hidden w-full xl:w-[1280px] px-2 sm:px-5 md:px-10">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            spaceBetween={30}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="custom-swiper-pagination pb-10 px-5 md:px-10"
          >
            {toolCards?.map((card, index) => (
              <SwiperSlide
                className="flex flex-col px-6 py-6 rounded-lg border-solid shadow-sm bg-[#F5FCFF] border-b-[3px] border-b-indigo-600 h-[215px] md:h-[286px] w-[250px] md:w-[304px] max-md:px-5"
                key={index}
                style={slideStyle}
              >
                <div className="flex justify-center items-center bg-white rounded-lg shadow-[0px_0px_12px_rgba(0,0,0,0.1)] w-[40px] md:w-[60px] h-[40px] md:h-[60px]">
                  <Image
                    alt={card.title}
                    src={card.img}
                    width={40}
                    height={40}
                    className="w-7 md:w-10"
                  />
                </div>
                <div className="flex flex-col mt-4 md:mt-6">
                  <p className="text-sm md:text-xl font-bold leading-snug text-[#1C1E53]">
                    {card.title}
                  </p>
                  <p className="mt-3 md:mt-6 text-xs md:text-base leading-6 text-[#1C1E53]">
                    {card.description}
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
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>

      <AboutMe />
      <HireMe />
      <LifeStyle />
      <Services />
      <Achievements />
      <ContactSection />
      <Footer />
    </>
  );
}

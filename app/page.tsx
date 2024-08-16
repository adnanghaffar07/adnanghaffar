"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./globals.css";

const servicesData = [
  "Website E-commerce",
  "Web and Mobile App Development",
  "Salesforce and SugarCRM Development",
  "Authentication & Verification",
  "Quality Assurance (QA) & Testing",
  "Website CMS Services",
];
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
const achievementCards = [
  {
    title: "Strategic Leadership",
    description:
      "Tripled revenue in three years by  executing a business strategy that  solidified CodeAutomation.ai's market  position.",
  },
  {
    title: "Product Development & Innovation",
    description:
      "Led the creation of the AI Code  Generator, cutting client development  time by40%,and launched innovative,  user-friendly products.",
  },
  {
    title: "Market Expansion",
    description:
      "Drove global expansion into Asia and  Europe, diversified revenue, and  formed strategic industry partnerships.",
  },
  {
    title: "Team Building & Leadership",
    description:
      "Grew the team from 10 to 200, fostering  a culture of innovation and launching a  program to developfuture leaders.",
  },
  {
    title: "Financial Management & Fundraising",
    description:
      "Raised over $50million in funding and  established strong financial practices,  significantly increasing profitability.",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {/* Header */}
      <div className="flex flex-col justify-center items-center xl:px-20 w-full bg-white h-[72px] sm:h-[90px] lg:h-[120px] shadow-[0px_5px_80px_rgba(0,0,0,0.1)] px-5 sm:px-10 max-md:max-w-full relative">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1270px] max-md:max-w-full">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={30}
            className="w-[120px] h-[18px] sm:w-[200px] sm:h-[30px]"
          />
          <ul className=" gap-8 text-xl text-[#1C1E53] max-md:max-w-full hidden xl:flex">
            <li className="text-[#5E3BEE]">Home</li>
            <li>Tools & Expertise</li>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Achievements</li>
          </ul>

          <button className="relative items-center justify-center w-[122px] h-[50px] text-lg font-medium rounded-lg p-[1px] bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] hidden xl:inline-flex">
            <span className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)]">
                Contact Me
              </span>
            </span>
          </button>

          {isModalOpen ? (
            <Image
              src={"/close-menu.svg"}
              alt="menu"
              width={40}
              height={40}
              className="block xl:hidden"
              onClick={toggleModal}
            />
          ) : (
            <Image
              src={"/hamberger.svg"}
              alt="menu"
              width={40}
              height={40}
              className="block xl:hidden"
              onClick={toggleModal}
            />
          )}
        </div>

        {isModalOpen && (
          <div className="absolute top-[72px] sm:top-[90px] lg:top-[120px] left-0 w-full h-[calc(100vh-72px)] sm:h-[calc(100vh-90px)] lg:h-[calc(100vh-120px)] block xl:hidden overflow-y-auto bg-white z-[999]">
            <ul className="text-[#282938] flex flex-col gap-6">
              <li className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Home
                </p>
                <Image
                  src={"/right-arrow.svg"}
                  alt="right arrow"
                  width={24}
                  height={24}
                />
              </li>
              <li className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Achievements
                </p>
                <Image
                  src={"/right-arrow.svg"}
                  alt="right arrow"
                  width={24}
                  height={24}
                />
              </li>
              <li className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Tools & Expertise
                </p>
                <Image
                  src={"/right-arrow.svg"}
                  alt="right arrow"
                  width={24}
                  height={24}
                />
              </li>
              <li className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  About me
                </p>
                <Image
                  src={"/right-arrow.svg"}
                  alt="right arrow"
                  width={24}
                  height={24}
                />
              </li>
              <li className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Portfolio
                </p>
                <Image
                  src={"/right-arrow.svg"}
                  alt="right arrow"
                  width={24}
                  height={24}
                />
              </li>
              <li className="mx-5 sm:mx-10 flex justify-between font-bold items-center">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Contact me
                </p>
                <Image
                  src={"/right-arrow.svg"}
                  alt="right arrow"
                  width={24}
                  height={24}
                />
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="bg-[#F5FCFF]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-10 xl:gap-[60px] pb-4 sm:pb-[100px] md:pb-[134px] max-w-[1270px] mx-auto">
          <div className="flex flex-col mt-10 lg:mt-[93px] justify-center items-center relative">
            <div className="flex flex-col max-w-full font-bold justify-center">
              <p className="text-base sm:text-2xl xl:text-2xl 2xl:text-[26px] text-[#282938] bg-clip-text bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]">
                Hey, I am
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] ms-2">
                  ADNAN
                </span>
              </p>
              <div className="flex flex-col mt-4 w-full text-3xl sm:text-[36px] lg:text-[46px] xl:text-[56px] leading-tight justify-center">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] max-md:max-w-full">
                  FULL STACK
                </p>
                <div className="text-gray-800">
                  <span className="">And </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                    AUTOMATION
                  </span>
                </div>
                <div className="text-gray-800">Developer</div>
              </div>
              <div className="mt-4 text-base sm:text-lg lg:text-lg xl:text-2xl leading-6 sm:leading-8 text-[#1C1E53] font-medium max-w-[400px] lg:max-w-[504px] xl:max-w-[602px] justify-center items-center">
                Lead & motivate subordinates to develop employee engagement &
                build their trust to establish a high-performing managerial
                team.
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 items-center self-start mt-8 ">
              <button className="text-white rounded-lg bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] w-[156px] sm:w-[180px] lg:w-[180px] xl:w-[214px] h-[56px] sm:h-[63px] lg:h-[63px] xl:h-[73px] max-md:px-5 text-[22px] flex items-center justify-center text-base lg:text-xl xl:text-2xl">
                View Portfolio
              </button>

              <button className="relative items-center justify-center w-[164px] sm:w-[180px] lg:w-[225px] xl:w-[255px] h-[58px] sm:h-[63px] lg:h-[63px] xl:h-[73px] lg:text-xl xl:text-2xl font-medium rounded-lg p-[1px] bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] px-[1px]">
                <span className="w-full h-full bg-[#F5FCFF] rounded-[7px] flex items-center justify-center">
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)]">
                    Schedule Meeting
                  </span>
                </span>
              </button>
            </div>
            <div className="absolute -right-0 -top-8 z-0 flex-col w-4 gap-4 xl:gap-8 sm:hidden flex">
              <div>
                <p className="text-[#5E3BEE] vertical-text text-xs">
                  Follow me on:
                </p>
              </div>

              <div className="shrink-0 self-center w-px h-6 xl:h-16 border border-[#5E3BEE] border-solid" />
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                width={16}
                height={16}
              />
              <Image
                src={"/instagram.svg"}
                alt="instagram"
                width={16}
                height={16}
              />
              <Image
                src={"/linkedin-icon.svg"}
                alt="linkedin"
                width={16}
                height={16}
              />
            </div>
          </div>

          <div className="relative mt-6 xl:mt-16">
            <Image
              src="/banner-image.png"
              alt="Adnan Ghaffar"
              width={578}
              height={514}
              className="w-full sm:w-[578px] lg:w-[410px] xl:w-[520px] 2xl:w-[578px] px-4 sm:px-0"
            />

            <div className="absolute -right-0 sm:-right-8 lg:-right-8 xl:-right-8 2xl:-right-16 top-[400px] sm:top-44 lg:top-8 xl:top-16 2xl:top-24 z-0 flex-col px-0.5 pt-36 w-6 max-md:pt-24 gap-4 xl:gap-8 hidden sm:flex">
              <div>
                <p className="text-[#5E3BEE] vertical-text">Follow me on:</p>
              </div>

              <div className="shrink-0 self-center w-px h-10 xl:h-16 border border-[#5E3BEE] border-solid" />
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                width={20}
                height={20}
              />
              <Image
                src={"/instagram.svg"}
                alt="instagram"
                width={20}
                height={20}
              />
              <Image
                src={"/linkedin-icon.svg"}
                alt="linkedin"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient with WebkitMask */}
      {/* <div className="relative w-fit">
        <div
          className="absolute inset-0 border-transparent"
          style={{
            background: "linear-gradient(to right, #000 25%, #B416FF 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            borderRadius: "10px",
            borderWidth: "1px",
          }}
        ></div>
        <p className="relative px-[10px] py-[13px] w-full z-10 rounded-lg">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)]">
            AI Business Automation 4
          </span>
        </p>
      </div> */}

      {/* Tools & Expertise */}
      <div className="flex flex-col justify-center items-center py-6 md:py-16 max-w-[1312px] mx-auto">
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
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>

      {/* About Me */}
      <section className="bg-neutral-50">
        <div className="flex flex-col-reverse lg:flex-row gap-10 2xl:gap-[86px] items-center py-6 sm:py-24 max-md:px-5 max-w-[1270px] mx-auto justify-center">
          <div>
            <Image
              src="/about me.png"
              alt="About me"
              width={535}
              height={591}
              className="w-[485px] xl:w-[535px]"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-[#282938]">
                How I Grow My Business
              </h2>
              <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] w-fit">
                About Me
              </p>
            </div>
            <div className="max-w-[450px] xl:max-w-[616px] text-[#1C1E53]">
              <p className="mt-6 text-base sm:text-lg leading-7">
                Over the last six years, I have led CodeAutomation.ai from a
                startup phase to becoming a front runner in the AI-driven
                codeautomation sector. Under my leadership, the company has
                grown exponentially, significantly expanded its product
                offerings, and established a strong global presence.
              </p>
              <p className="mt-2 sm:mt-6 text-base sm:text-lg leading-7">
                Also, I have established a few small successful businesses which
                grew by 250% within 2.5 years. Also, I have extensive expertise
                in business requirement analysis and providing software
                consultancy to make projects/products cost-effective. Develop
                high-quality, profitable business strategies and implement the
                vision while ensuring their alignment with short-term and
                long-term objectives.
              </p>
              <p className="mt-2 sm:mt-6 text-base sm:text-lg leading-7">
                I implement the automation process to enhance revenue because
                I&apos;m technically strong in software automation, software
                test automation, crawling, bot development, and implementing
                social media automation based on the client&apos;s requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="bg-neutral-50">
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 2xl:gap-[86px] items-center py-6 sm:py-16 max-md:px-5 max-w-[1270px] mx-auto justify-center">
          <div>
            <Image
              src="/hire-me.png"
              alt="Why Hire Me"
              width={535}
              height={591}
              className="w-[485px] xl:w-[535px]"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-[#282938]">
                Lorem ipsum dolor sit, amet
              </h2>
              <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] w-fit">
                Why Hire Me?
              </p>
            </div>
            <div className="max-w-[450px] xl:max-w-[616px] text-[#1C1E53]">
              <p className="mt-6 text-base sm:text-lg leading-6 sm:leading-7">
                Over the last six years, I have led CodeAutomation.ai from a
                startup phase to becoming a front runner in the AI-driven
                codeautomation sector. Under my leadership, the company has
                grown exponentially, significantly expanded its product
                offerings, and established a strong global presence.
              </p>
            </div>

            <div className="flex gap-10 sm:gap-24 xl:gap-32 items-start mt-6 w-full max-md:max-w-full">
              <div className="flex flex-col">
                <div className="flex gap-1 self-start text-[22px] sm:text-4xl font-medium tracking-tight whitespace-nowrap items-center">
                  <Image
                    src="/award-icon.svg"
                    alt="Completed Projects"
                    width={48}
                    height={48}
                    className="w-[26px] sm:w-12"
                  />

                  <p className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]">
                    1k+
                  </p>
                </div>
                <p className="mt-2.5 text-base sm:text-xl tracking-tight text-[#667085]">
                  Project Completed
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center self-start text-[22px] sm:text-4xl font-medium tracking-tight whitespace-nowrap">
                  <Image
                    src="/star.svg"
                    alt="Client Satisfaction"
                    width={48}
                    height={48}
                    className="w-[26px] sm:w-12"
                  />

                  <p className="self-stretch my-auto bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]">
                    5.0
                  </p>
                </div>
                <p className="mt-2.5 text-base sm:text-xl tracking-tight text-[#667085]">
                  Client Satisfaction
                </p>
              </div>
            </div>
            <button className="gap-2.5 self-start px-6 sm:px-8 py-4 sm:py-5 mt-6 text-base sm:text-2xl text-white rounded-lg bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]">
              Hire Me
            </button>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="max-w-[1412px] mx-auto">
        <div className="flex flex-col px-5 py-8 md:py-24 w-full max-md:max-w-full items-center justify-center">
          <div className="flex flex-col items-start w-full max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full w-[768px]">
              <p className="self-start text-base sm:text-xl font-semibold text-center text-[#282938]">
                Things I Love To Do
              </p>
              <div className="flex flex-col mt-2 md:mt-4 w-full text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
                <p className="text-2xl sm:text-4xl md:text-5xl w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  My Lifestyle
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-5 items-center mt-4 md:mt-8 text-xs sm:text-lg font-medium leading-tight max-md:max-w-full">
              <p className="flex justify-center items-center text-white whitespace-nowrap rounded-lg border border-indigo-600 border-solid bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]  h-[34px] sm:h-[50px] px-[10px]">
                Travelling
              </p>
              <div className="flex justify-center items-center rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 h-[34px] sm:h-[50px] px-[10px]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Content Writing
                </p>
              </div>
              <div className="flex justify-center items-center rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0  h-[34px] sm:h-[50px] px-[10px]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Automation Testing
                </p>
              </div>
              <div className="flex justify-center items-center my-auto rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0  h-[34px] sm:h-[50px] px-[10px]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                  Business Automation
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 lg:mt-20 w-full">
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col w-[48%]">
                <div className="flex flex-col grow gap-4 max-md:max-w-full">
                  <Image
                    src="/lifestyle-1.png"
                    alt="Lifestyle"
                    width={616}
                    height={827}
                    className="object-contain w-full shadow-sm aspect-[0.74] max-md:max-w-full"
                  />

                  <Image
                    src="/lifestyle-2.png"
                    alt="Lifestyle"
                    width={616}
                    height={527}
                    className="object-contain w-full rounded-lg aspect-[1.17] shadow-[0px_2px_12px_rgba(0,0,0,0.16)] "
                  />
                  <Image
                    src="/lifestyle-3.png"
                    alt="Lifestyle"
                    width={616}
                    height={818}
                    className="object-contain w-full rounded-lg aspect-[0.75] shadow-[0px_2px_12px_rgba(0,0,0,0.16)] "
                  />
                </div>
              </div>

              <div className="flex flex-col w-[48%]">
                <div className="flex flex-col gap-4 grow">
                  <Image
                    alt="Lifestyle"
                    src="/lifestyle-4.png"
                    width={616}
                    height={552}
                    className="object-contain w-full rounded-lg aspect-[1.11] shadow-[0px_2px_12px_rgba(0,0,0,0.16)]"
                  />
                  <Image
                    alt="Lifestyle"
                    src="/lifestyle-5.png"
                    width={616}
                    height={917}
                    className="object-contain w-full rounded-lg aspect-[0.67] shadow-[0px_2px_12px_rgba(0,0,0,0.16)]"
                  />
                  <Image
                    alt="Lifestyle"
                    src="/lifestyle-6.png"
                    width={616}
                    height={702}
                    className="object-contain w-full rounded-lg aspect-[0.88] shadow-[0px_2px_12px_rgba(0,0,0,0.16)]"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="flex justify-center items-center w-[82px] sm:w-[113px] h-[34px] sm:h-[50px] mt-20 sm:text-lg font-medium leading-tight rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 max-md:mt-10 text-xs">
            <p className="self-stretch my-auto bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
              View More
            </p>
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50">
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 xl:gap-28 2xl:gap-[154px] items-center py-6 sm:py-16 max-md:px-5 max-w-[1270px] mx-auto justify-center">
          <div>
            <Image
              src="/service.png"
              alt="Services"
              width={535}
              height={591}
              className="w-[485px] xl:w-[535px]"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-[#282938]">
                Services Highlight
              </h2>
              <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] w-fit">
                Purchase
              </p>
            </div>

            <div className="flex flex-col mt-6 max-w-full gap-4 text-lg uppercase text-neutral-700 ">
              {servicesData.map((service, index) => {
                return (
                  <div
                    className="flex flex-col w-full max-w-[550px] max-md:max-w-full"
                    key={index}
                  >
                    <div className="flex flex-wrap gap-2.5 items-center px-5 py-3 sm:py-5 w-full rounded-xl border border-solid border-zinc-900">
                      <Image
                        src="/services-sec-icon.svg"
                        alt="Star Icon"
                        width={40}
                        height={40}
                        className="object-contain shrink-0 self-stretch my-auto w-8 sm:w-10 aspect-square"
                      />
                      <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full text-base">
                        {service}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="gap-2.5 self-start sm:px-8 py-3 sm:py-5 mt-6 text-base sm:text-2xl text-white rounded-lg bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] max-md:px-3">
              Schedule Meeting
            </button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <div className="flex flex-col justify-center py-6 md:py-16 max-w-[1312px] mx-auto">
        <div className="flex flex-col w-fit  px-2 sm:px-5 md:px-10">
          <p className="self-start text-base md:text-xl font-semibold text-center text-[#282938]">
            My Overall Achievements
          </p>
          <p className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Key Achievements
          </p>
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
            {achievementCards?.map((card, index) => (
              <SwiperSlide
                className="flex flex-col px-6 py-6 rounded-lg border-solid shadow-sm bg-[#F5FCFF] border-b-[3px] border-b-indigo-600 h-[265px] md:h-[326px] w-[250px] md:w-[304px] max-md:px-5"
                key={index}
              >
                <div className="flex justify-center items-center bg-white rounded-lg shadow-[0px_0px_12px_rgba(0,0,0,0.1)] w-[40px] md:w-[60px] h-[40px] md:h-[60px]">
                  <p className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] text-2xl sm:text-3xl md:text-4xl font-medium h-[40px] w-[40px] flex justify-center items-center">
                    {index}
                  </p>
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
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>

      {/* Contact */}
      <section className="bg-[#F5FCFF]">
        <div className="px-24 pb-6 md:pb-16 bg-[linear-gradient(245deg,rgba(245,252,255,0.00_1.85%,#F5FCFF_65.77%),#F5FCFF)] max-md:px-5">
          <div className="flex flex-col items-center pt-6 sm:pt-16 pb-6 border-t-2 border-black border-opacity-10 max-md:max-w-full">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-20 xl:gap-36 items-start max-md:max-w-full">
              <div className="flex flex-col items-start min-w-[240px] w-[360px]">
                <div className="flex flex-col w-full">
                  <h2 className="md:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] text-2xl sm::text-4xl pb-1">
                    Let’s work together
                  </h2>
                  <p className="mt-3 md:mt-6 text-base md:text-xl leading-6 md:leading-8 text-gray-800">
                    We are committed to processing the information in order to
                    contact you and talk about your project.
                  </p>
                </div>
                <div className="lg:flex gap-4 items-center mt-8 w-44 max-w-full hidden">
                  <Image
                    src="/facebook.svg"
                    alt="facebook"
                    width={32}
                    height={32}
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                  <Image
                    alt="instagram"
                    width={32}
                    height={32}
                    src="/instagram-form.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                  <Image
                    alt="twitter"
                    width={32}
                    height={32}
                    src="/twitter-form.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                  <Image
                    alt="linkedIn"
                    width={32}
                    height={32}
                    src="/linkedIn-form.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                </div>

                <div className="lg:flex gap-4 items-center pr-4 mt-8 uppercase tracking-[2px] hidden">
                  <Image
                    alt="Adnan Profile"
                    src="/contact-form.png"
                    width={80}
                    height={80}
                    className="object-contain shrink-0 self-stretch my-auto w-20 rounded-lg aspect-square"
                  />
                  <div className="flex flex-col self-stretch my-auto">
                    <p className="text-xl leading-none text-gray-800">
                      Adnan Ghaffar
                    </p>
                    <p className="mt-2 text-sm leading-4 text-zinc-900 text-opacity-70">
                      Full Stack &<br />
                      Automatation
                      <br />
                      developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col min-w-[240px] w-[530px] max-md:max-w-full">
                <div className="flex flex-col w-full text-lg leading-loose text-gray-800 max-w-[530px] max-md:max-w-full">
                  <form>
                    <input
                      type="text"
                      placeholder="Name"
                      className="flex-1 shrink gap-2.5 px-8 py-3 md:py-5 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="flex-1 shrink gap-2.5 px-8 py-3 md:py-5 mt-5 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full"
                    />
                    <textarea
                      name=""
                      placeholder="Type your message here"
                      className="flex-1 shrink gap-2.5 px-8 py-3 md:py-5 mt-5 w-full leading-7 bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full"
                      rows={4}
                    ></textarea>
                  </form>
                </div>
                <button className="gap-2.5 self-start text-base px-4 md:px-6 py-4 md:py-5 mt-10 md:text-2xl text-white rounded-lg bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]">
                  Send Message
                </button>
                <div>
                  <div className="flex gap-4 items-center mt-6 md:mt-8 w-44 max-w-full lg:hidden">
                    <Image
                      src="/facebook.svg"
                      alt="facebook"
                      width={32}
                      height={32}
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                    <Image
                      alt="instagram"
                      width={32}
                      height={32}
                      src="/instagram-form.svg"
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                    <Image
                      alt="twitter"
                      width={32}
                      height={32}
                      src="/twitter-form.svg"
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                    <Image
                      alt="linkedIn"
                      width={32}
                      height={32}
                      src="/linkedIn-form.svg"
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                  </div>

                  <div className="flex gap-4 items-center pr-4 mt-6 md:mt-8 uppercase tracking-[2px] lg:hidden">
                    <Image
                      alt="Adnan Profile"
                      src="/contact-form.png"
                      width={80}
                      height={80}
                      className="object-contain shrink-0 self-stretch my-auto w-20 rounded-lg aspect-square"
                    />
                    <div className="flex flex-col self-stretch my-auto">
                      <p className="text-xl leading-none text-gray-800">
                        Adnan Ghaffar
                      </p>
                      <p className="mt-2 text-sm leading-4 text-zinc-900 text-opacity-70">
                        Full Stack &<br />
                        Automatation
                        <br />
                        developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5E3BEE]">
        <div className="flex flex-col mt-2 max-w-[1270px] mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col xl:flex-row gap-6 md:gap-10 items-start xl:justify-between xl:items-center py-6 sm:py-8">
            <Image
              src="/footer-logo.svg"
              alt="logo"
              width={200}
              height={30}
              className="w-[162px] sm:w-[200px]"
            />
            <ul className="flex gap-5 gap-y-4 md:gap-8 flex-wrap sm:flex-nowrap items-start my-auto text-sm sm:text-base md:text-xl text-white">
              <li>Home</li>
              <li>Tools & Expertise</li>
              <li>About me </li>
              <li>Portfolio</li>
              <li>Achievements</li>
            </ul>
          </div>

          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex w-full bg-white bg-opacity-20 min-h-[1px] max-md:max-w-full" />
            <div className="flex flex-wrap gap-10 gap-y-6 justify-between items-center pt-6 md:pt-11 pb-6 md:pb-8">
              <p className="my-auto text-xs sm:text-base md:text-lg font-bold text-white">
                Copyright @2024 - by Adnan G.
              </p>
              <div className="flex flex-wrap gap-4 items-center my-auto">
                <Image
                  src="/facebook-white.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
                <Image
                  src="/instagram-white.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
                <Image
                  src="/twitter-white.svg"
                  alt="twitter"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
                <Image
                  src="/linkedIn-white.svg"
                  alt="linkedIn"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import Image from "next/image";
import React, { useState } from "react";
import ContentWritingCard from "./ContentWritingCard";
import LifeStyleCard from "./LifeStyleCard";

const contentWriting = [
  {
    image: "/manual-testing.png",
    categories: ["SQA", "Learning"],
    title: "Why is Manual Testing not sufficient for Continuous Delivery?",
    description:
      "Software development professionals often use continuous delivery. The introduction of new app code is streamlined by automation. It starts the process by which a software developer changes the application, and it may be automatically uploaded to the code repository registry.",
    releaseDate: "Sep 11, 2023",
    shares: "1K shares",
    link: "https://medium.com/@codeautomation/why-is-manual-testing-not-sufficient-for-continuous-delivery-23598522d741",
  },
  {
    image: "/software-development.png",
    categories: ["Software", "Learning"],
    title: "Software Development Planning: Why It Is Important",
    description:
      "The process of creating software is extremely complicated. In today’s technological environments, work should frequently be distributed as soon as possible. Whether you design products or make software for clients worldwide, this is essential.",
    releaseDate: "Sep 1, 2023",
    shares: "1K shares",
    link: "https://medium.com/@codeautomation/software-development-planning-why-it-is-important-ca99c23214bd",
  },
  {
    image: "/css-grid.png",
    categories: ["CSS", "Learning"],
    title: "Mastering CSS Grid: A Comprehensive Guide",
    description:
      "CSS Grid is a game-changer, offering unparalleled control over web page layouts in a previously unimaginable way. Gone are the days of relying solely on floats, flexboxes, or positioning hacks to achieve complex designs.",
    releaseDate: "Aug 8, 2023",
    shares: "1K shares",
    link: "https://medium.com/@codeautomation/mastering-css-grid-a-comprehensive-guide-6d13f2d42f75",
  },
  {
    image: "/nodejs.png",
    categories: ["Node", "Learning"],
    title: "Introduction to Asynchronous Programming in Node.js",
    description:
      "The process of creating software is extremely complicated. In today’s technological environments, work should frequently be distributed as soon as possible. Whether you design products or make software for clients worldwide, this is essential.",
    releaseDate: "Jul 11, 2023",
    shares: "1K shares",
    link: "https://medium.com/@codeautomation/introduction-to-asynchronous-programming-in-node-js-c266ee3870ed",
  },
];
const automationTesting = [
  {
    image: "/vested finance.png",
    title: "Vested Finance",
    description:
      "Vested Finance offers a seamless platform for international investors to access and invest in U.S. stocks.",
  },
  {
    image: "/abacus-ai.png",
    title: "Abacus.ai",
    description:
      "Abacus is a Leading International Professional Services Firm helping in outsourcing, consulting and providing technological education and training",
  },
  {
    image: "/automation-bg.png",
    title: "Go-grapevine",
    description:
      "Go-Grapevine is a platform for sharing reviews, recommendations, and experiences, connecting users with trusted insights.",
  },
  {
    image: "/automation-bg.png",
    title: "Gininow",
    description:
      "Gininow simplifies your business processes with automated solutions, enhancing efficiency, productivity, and customer satisfaction.",
  },
  {
    image: "/automation-bg.png",
    title: "Zeymo",
    description:
      "Zeymo provides innovative solutions for streamlined business processes, enhancing efficiency and boosting productivity across industries.",
  },
  {
    image: "/automation-bg.png",
    title: "Yarn",
    description:
      "Yarn is a package manager that simplifies managing and installing JavaScript libraries and dependencies efficiently.",
  },
];

const businessAutomation = [
  {
    image: "/voice cold caller.png",
    title: "AI Automation Voice Cold Caller",
    description:
      "AI Automation Voice Cold Caller streamlines cold calling, enhancing efficiency and outreach through automated voice interactions.",
  },
  {
    image: "/zoho crm.png",
    title: "Zoho CRM - Invoice Automation",
    description:
      "Zoho CRM automates invoicing, streamlining billing processes, reducing manual errors, and improving payment tracking efficiency.",
  },
  {
    image: "/saleforce.png",
    title: "Salesforce Automation",
    description:
      "Salesforce automation streamlines sales processes, automates tasks, enhances CRM efficiency, and boosts productivity and accuracy.",
  },
  {
    image: "/lead generation.png",
    title: "Lead Generation & Enrichment process",
    description:
      "Lead generation and enrichment involve identifying potential customers and enhancing their data for targeted marketing.",
  },
  {
    image: "/linked automation.png",
    title: "LinkedIn Automation",
    description:
      "LinkedIn automation streamlines networking, content sharing, and lead generation, boosting professional connections and business growth.",
  },
  {
    image: "/indeed autoation.png",
    title: "Indeed Automation",
    description:
      "Indeed Automation streamlines job posting and applicant tracking, saving time and enhancing recruitment efficiency for employers.",
  },
];

const LifeStyle = () => {
  const [selected, setSelected] = useState("travelling");
  const [showMoreContent, setShowMoreContent] = useState(false);

  const handleClick = (buttonId: string) => {
    setSelected(buttonId);
    setShowMoreContent(false);
  };
  return (
    <section className="max-w-[1412px] mx-auto">
      <div className="flex flex-col px-1 sm:px-5 py-8 md:py-24 w-full max-md:max-w-full items-center justify-center">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full w-[768px]">
            <p className="self-start text-base sm:text-xl font-semibold text-center text-[#282938]">
              Things I Love To Do
            </p>
            <div className="flex flex-col mt-2 md:mt-4 w-full text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
              <p className="text-2xl sm:text-4xl md:text-5xl w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] pb-1">
                My Lifestyle
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-5 items-center mt-4 md:mt-8 text-xs sm:text-lg font-medium leading-tight max-md:max-w-full">
            <button
              className={`flex justify-center items-center rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 h-[34px] sm:h-[50px] px-[10px] hover:bg-gradient-to-tr hover:from-[#B416FF] hover:to-[#5E3BEE] group ${
                selected === "travelling"
                  ? "bg-gradient-to-tr from-[#B416FF] to-[#5E3BEE]"
                  : ""
              }`}
              onClick={() => handleClick("travelling")}
            >
              <p
                className={`group-hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] group ${
                  selected === "travelling" ? "text-white" : ""
                }`}
              >
                Travelling
              </p>
            </button>
            <button
              className={`flex justify-center items-center rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 h-[34px] sm:h-[50px] px-[10px] hover:bg-gradient-to-tr hover:from-[#B416FF] hover:to-[#5E3BEE] group ${
                selected === "content"
                  ? "bg-gradient-to-tr from-[#B416FF] to-[#5E3BEE]"
                  : ""
              }`}
              onClick={() => handleClick("content")}
            >
              <p
                className={`group-hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] group ${
                  selected === "content" ? "text-white" : ""
                }`}
              >
                Content Writing
              </p>
            </button>
            <button
              className={`flex justify-center items-center rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 h-[34px] sm:h-[50px] px-[10px] hover:bg-gradient-to-tr hover:from-[#B416FF] hover:to-[#5E3BEE] group ${
                selected === "automation"
                  ? "bg-gradient-to-tr from-[#B416FF] to-[#5E3BEE]"
                  : ""
              }`}
              onClick={() => handleClick("automation")}
            >
              <p
                className={`group-hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] group ${
                  selected === "automation" ? "text-white" : ""
                }`}
              >
                Automation Testing
              </p>
            </button>
            <button
              className={`flex justify-center items-center rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 h-[34px] sm:h-[50px] px-[10px] hover:bg-gradient-to-tr hover:from-[#B416FF] hover:to-[#5E3BEE] group ${
                selected === "business"
                  ? "bg-gradient-to-tr from-[#B416FF] to-[#5E3BEE]"
                  : ""
              }`}
              onClick={() => handleClick("business")}
            >
              <p
                className={`group-hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] group ${
                  selected === "business" ? "text-white" : ""
                }`}
              >
                Business Automation
              </p>
            </button>
          </div>
        </div>

        <div className="mt-4 lg:mt-20 w-full">
          {selected === "travelling" && (
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col w-[48%]">
                <div className="flex flex-col grow gap-4 max-md:max-w-full">
                  <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                    <Image
                      src="/lifestyle-1.png"
                      alt="Lifestyle"
                      width={616}
                      height={827}
                      className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    />
                    <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                        Trip to - Bangkok
                      </span>
                    </div>
                  </div>

                  <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                    <Image
                      src="/lifestyle-2.png"
                      alt="Lifestyle"
                      width={616}
                      height={527}
                      className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    />
                    <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                        Trip to - UK
                      </span>
                    </div>
                  </div>

                  {showMoreContent && (
                    <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                      <Image
                        src="/lifestyle-3.png"
                        alt="Lifestyle"
                        width={616}
                        height={704}
                        className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                      />
                      <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                          Trip to - Australia
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-[48%]">
                <div className="flex flex-col gap-4 grow">
                  <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                    <Image
                      alt="Lifestyle"
                      src="/lifestyle-4.png"
                      width={616}
                      height={552}
                      className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    />
                    <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                        Trip to - Switzerland
                      </span>
                    </div>
                  </div>

                  <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                    <Image
                      alt="Lifestyle"
                      src="/lifestyle-5.png"
                      width={616}
                      height={803}
                      className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    />
                    <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                        Trip to - Europe
                      </span>
                    </div>
                  </div>

                  {showMoreContent && (
                    <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                      <Image
                        alt="Lifestyle"
                        src="/lifestyle-6.png"
                        width={616}
                        height={702}
                        className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                      />
                      <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                          Trip to - Switzerland
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {selected === "content" && (
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 2xl:gap-12">
              {contentWriting?.map((content, index) => (
                <ContentWritingCard
                  content={content}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          )}

          {selected === "automation" && (
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 2xl:gap-12">
              {automationTesting?.map((item, index) => {
                return <LifeStyleCard data={item} index={index} key={index} />;
              })}
            </div>
          )}
          {selected === "business" && (
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 2xl:gap-12">
              {businessAutomation.map((item, index) => {
                return <LifeStyleCard data={item} index={index} key={index} />;
              })}
            </div>
          )}
        </div>

        {selected === "travelling" && !showMoreContent && (
          <button
            className="items-center justify-center w-[122px] h-[50px] text-lg font-medium rounded-lg p-[1.5px] bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] mt-8 md:mt-16"
            onClick={() => setShowMoreContent(true)}
          >
            <span className="w-full h-full bg-white rounded-[7px] flex items-center justify-center hover:bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] group">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] group-hover:text-white">
                Show More
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default LifeStyle;

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type ToolType =
  | "AI Business Automation"
  | "Automated Testing & Reporting"
  | "Programming Languages"
  | "Database"
  | "Data Transformation"
  | "MS Office"
  | "Code Hosting Platforms"
  | "CI/CD Tools"
  | "Unit & Automation Testing Framework"
  | "API & Web Services Testing"
  | "Management Tools"
  | "Expertise";

const tools: ToolType[] = [
  "Expertise",
  "AI Business Automation",
  "Automated Testing & Reporting",
  "Data Transformation",
  "Database",
  "API & Web Services Testing",
  "CI/CD Tools",
  "MS Office",
  "Programming Languages",
  "Code Hosting Platforms",
  "Unit & Automation Testing Framework",
  "Management Tools",
];

const dataMapping: Record<
  ToolType,
  { img: string[]; title: string; description: string }[]
> = {
  Expertise: [
    {
      img: ["/software development.png"],
      title: "Software Development",
      description:
        "Software development involves designing, coding, testing, and maintaining applications to solve problems and meet needs.",
    },
    {
      img: ["/qa testing and automation.png"],
      title: "QA Testing & Automation",
      description:
        "QA testing ensures software quality through manual and automated tests, detecting bugs, and improving reliability.",
    },
    {
      img: ["/custom cms development.png"],
      title: "Custom CMS Development",
      description:
        "Custom CMS development delivers tailored systems, offering flexibility, control, and unique features for businesses.",
    },
    {
      img: ["/mobile app development.png"],
      title: "Mobile App Development",
      description:
        "Mobile app development creates tailored applications for smartphones, enhancing user experience and engagement.",
    },
    {
      img: ["/UI UX design.png"],
      title: "UI/UX Design",
      description:
        "UI/UX design focuses on creating intuitive, visually appealing interfaces and experiences for optimal user satisfaction.",
    },
    {
      img: ["/custom website.png"],
      title: "Custom Website",
      description:
        "A custom website is tailored to specific needs, offering unique design, functionality, and user experience.",
    },
  ],
  "AI Business Automation": [
    {
      img: ["/(RPA) - UiPath.png"],
      title: "(RPA) - UiPath",
      description:
        "UiPath is a leading RPA platform that automates repetitive business tasks, enhancing efficiency and accuracy.",
    },
    {
      img: ["/(CRM) - Salesforce.png"],
      title: "(CRM) - Salesforce",
      description:
        "Salesforce CRM is a cloud-based platform that automates sales, marketing, and customer service processes.",
    },
    {
      img: ["/Automation Anywhere.png"],
      title: "Automation Anywhere",
      description:
        "Automation Anywhere is a leading RPA platform that automates business processes, enhancing efficiency & reducing manual tasks.",
    },
    {
      img: ["/IBM Watson.png"],
      title: "IBM Watson",
      description:
        "It is an AI platform offering cognitive services for data analysis, natural language processing, and business automation.",
    },
  ],
  "Automated Testing & Reporting": [
    {
      img: ["/selenium.svg"],
      title: "Selenium Web Driver",
      description:
        "Selenium WebDriver is a tool for automating web browser interactions in software testing and web scraping.",
    },
    {
      img: ["/playwright.svg"],
      title: "Playwright | Cypress",
      description:
        "Playwright and Cypress are popular end-to-end testing frameworks for modern web applications, offering automation and reliability.",
    },
    {
      img: ["/framework.svg"],
      title: "Framework",
      description:
        "Framework is a modular laptop that emphasizes repairability, customization, and sustainability, allowing users to upgrade easily.",
    },
    {
      img: ["/robot.svg"],
      title: "Robot Framework",
      description:
        "It is an open-source automation framework for acceptance testing, test-driven development, and robotic process automation.",
    },
    {
      img: ["/appium.png"],
      title: "Appium",
      description:
        "Appium is an open-source tool for automating mobile applications on various platforms like iOS and Android.",
    },
    {
      img: ["/cucumber.png"],
      title: "Cucumber, Gherkin, Capybara",
      description:
        "These tools for Behavior-Driven Development, testing automation, and web interactions.",
    },
  ],
  "Programming Languages": [
    {
      img: ["/java.svg"],
      title: "Java",
      description:
        "Java is a versatile, object-oriented programming language widely used for building web, mobile, and enterprise applications.",
    },
    {
      img: ["/js.svg"],
      title: "Javascript",
      description:
        "JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content.",
    },
    {
      img: ["/nodejs.svg", "/csharp.svg"],
      title: "Node | C#",
      description:
        "Node.js is JavaScript runtime for scalable network applications; C# is a versatile, object-oriented language for .NET development.",
    },
    {
      img: ["/python.svg"],
      title: "Python",
      description:
        "Python is a versatile programming language known for its simplicity, readability, and wide range of applications.",
    },
  ],
  Database: [
    {
      img: ["/mongodb.svg", "/postgres.png"],
      title: "Mongo | Postgres",
      description:
        "MongoDB is a NoSQL database known for scalability, while Postgres is a relational database known for reliability.",
    },
    {
      img: ["/mysql.svg"],
      title: "MySQL | SQL Server 2005",
      description:
        "MySQL is an open-source database management system, while SQL Server 2005 is a Microsoft proprietary DBMS.",
    },
  ],
  "Data Transformation": [
    {
      img: ["/etl.svg"],
      title: "ETL",
      description:
        "ETL stands for Extract, Transform, Load; it's a process for integrating and preparing data for analysis and also for collecting and storing data.",
    },
    {
      img: ["/bi.png"],
      title: "BI",
      description:
        "(BI) transforms data into actionable insights, aiding strategic decisions and improving organizational performance.",
    },
  ],

  "MS Office": [
    {
      img: ["/azure.png"],
      title: "Azure",
      description:
        "Azure is Microsoft's cloud computing platform offering scalable services, including virtual machines, databases, and AI tools.",
    },
    {
      img: ["/ms office.png"],
      title: "MS Office 2013",
      description:
        "MS Office 2013 offers updated tools for productivity, including improved Word, Excel, and PowerPoint features.",
    },
    {
      img: ["/ms project.png"],
      title: "MS Project 2013",
      description:
        "MS Project 2013 helps plan, track, and manage projects with tools for scheduling and resource management.",
    },
    {
      img: ["/ms visio.png"],
      title: "MS Visio 2013",
      description:
        "MS Visio 2013 is a diagramming tool for creating flowcharts, organizational charts, and network diagrams.",
    },
    {
      img: ["/teams.png"],
      title: "Teams",
      description:
        "Teams foster collaboration, combining diverse skills and perspectives to achieve shared goals and enhance productivity.",
    },
  ],

  "Code Hosting Platforms": [
    {
      img: ["/github.png"],
      title: "GitHub",
      description:
        "GitHub is a platform for version control and collaboration, hosting code and facilitating software development.",
    },
    {
      img: ["/gitlab.png"],
      title: "GitLab",
      description:
        "GitLab is a DevOps platform providing source code management, CI/CD, and collaborative development tools.",
    },
    {
      img: ["/bitbucket.png"],
      title: "BitBucket",
      description:
        "BitBucket is a web-based version control repository hosting service for source code and development projects.",
    },
    {
      img: ["/visual-studio-code.png"],
      title: "Visual Studio Services",
      description:
        "Visual Studio Services streamline development with tools for coding, debugging, collaboration, and deployment in one platform.",
    },
  ],

  "CI/CD Tools": [
    {
      img: ["/circle ci.png"],
      title: "Circle CI",
      description:
        "CircleCI is a continuous integration and delivery platform that automates software development workflows and testing.",
    },
    {
      img: ["/gitlab.png"],
      title: "GitLab",
      description:
        "GitLab is a DevOps platform providing source code management, CI/CD, and collaborative development tools.",
    },
    {
      img: ["/jenkins.png"],
      title: "Jenkins",
      description:
        "It is an open-source automation server that enables continuous integration & continuous delivery for software projects.",
    },
    {
      img: ["/teamcity.png"],
      title: "TeamCity",
      description:
        "TeamCity is a continuous integration and deployment server developed by JetBrains, offering robust automation tools.",
    },
  ],
  "Unit & Automation Testing Framework": [
    {
      img: ["/test ng.png"],
      title: "Test NG",
      description:
        "TestNG is a testing framework for Java, offering parallel execution, flexible test configuration, and powerful reporting.",
    },
    {
      img: ["/junit.png"],
      title: "JUnit",
      description:
        "JUnit is a popular testing framework for Java, providing annotations and assertions to test code effectively.",
    },
    {
      img: ["/nunit.png"],
      title: "NUnit",
      description:
        "NUnit is a unit-testing framework for .NET languages, supporting various assertions, test fixtures, and test runners.",
    },
    {
      img: ["/php unit.png"],
      title: "PHPUnit",
      description:
        "PHPUnit is a popular testing framework for PHP, helping developers write unit tests to ensure code quality & functionality.",
    },
    {
      img: ["/keyword driven.png"],
      title: "Keyword-Driven",
      description:
        "Keyword-Driven is a test automation strategy where tests are written using keywords that represent actions or data inputs.",
    },
    {
      img: ["/data driven.png"],
      title: "Data-Driven framework",
      description:
        "A Data-Driven framework leverages data analytics to guide decision-making, optimize performance, and improve outcomes.",
    },
    {
      img: ["/hybrid framework.png"],
      title: "Hybrid framework",
      description:
        "A hybrid framework combines elements from different frameworks to leverage their strengths and improve efficiency.",
    },
  ],

  "API & Web Services Testing": [
    {
      img: ["/soap ui.png"],
      title: "SoapUI",
      description:
        "SoapUI is a powerful tool for testing APIs and web services, offering automation, security, and performance features.",
    },
    {
      img: ["/postman.png"],
      title: "Postman",
      description:
        "It simplifies API development with testing, debugging, and collaboration tools for developers. Streamline workflows efficiently.",
    },
  ],

  "Management Tools": [
    {
      img: ["/helix.png"],
      title: "Helix ALM",
      description:
        "Helix ALM is a comprehensive solution for managing application lifecycle, offering robust tracking and collaboration tools.",
    },
    {
      img: ["/jira.png"],
      title: "Jira",
      description:
        "Jira is a project management tool used for tracking tasks, issues, and workflows in software development.",
    },
    {
      img: ["/trello.png"],
      title: "Trello",
      description:
        "Trello is a project management tool that uses boards, lists, and cards to organize tasks and collaborate efficiently.",
    },
    {
      img: ["/asana.png"],
      title: "Asana",
      description:
        "Asana is a popular project management tool that helps teams organize, track, and manage tasks efficiently.",
    },
    {
      img: ["/target process.png"],
      title: "Target Process",
      description:
        "Target Process is an agile project management tool that helps teams visualize and manage workflows effectively.",
    },
    {
      img: ["/clickup.png"],
      title: "Click up",
      description:
        "ClickUp is a versatile project management tool that helps teams organize tasks, collaborate, and track progress efficiently.",
    },
  ],
};

const Expertise = () => {
  const [slideStyle, setSlideStyle] = useState({
    width: "304px",
    height: "286px",
  });

  const [selected, setSelected] = useState<ToolType>("Expertise");

  const handleClick = (tool: ToolType) => {
    setSelected(tool);
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
    <div
      className="flex flex-col justify-center items-center py-6 md:py-16 max-w-[1312px] mx-auto"
      id="expertise"
    >
      <div className="flex flex-col px-2 sm:px-5 2xl:px-0">
        <div className="flex flex-col justify-center w-fit">
          <p className="self-start text-base md:text-xl font-semibold text-center text-[#282938]">
            Skills I Gain
          </p>
          <p className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pb-2">
            My Tools & Expertise
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-5 items-center mt-4 md:mt-8 w-full text-lg font-medium leading-tight max-md:max-w-full">
          {tools.map((tool, index) => (
            <button
              className={`rounded-lg p-[1.5px] w-fit bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] ${
                selected === tool ? "" : "bg-white border-1 border-transparent"
              } hover:bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] transition-all duration-300`}
              key={index}
              onClick={() => handleClick(tool)}
            >
              <p
                className={`px-[10px] py-1.5 md:py-[13px] rounded-[7px] transition-all duration-300 ${
                  selected === tool
                    ? "bg-transparent text-white"
                    : "bg-white hover:bg-transparent"
                } group`}
              >
                <span
                  className={`text-xs md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] transition-all duration-300 ${
                    selected === tool ? "text-white" : ""
                  } group-hover:text-white`}
                >
                  {tool}
                </span>
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-6 justify-center items-start mt-6 lg:mt-16 md:mt-10 overflow-x-hidden w-full xl:w-[1280px] px-3 sm:px-5 2xl:px-0">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={30}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="px-5 md:px-10"
          style={{ paddingBottom: "40px" }}
        >
          {dataMapping[selected].map((card, index: number) => {
            return (
              <SwiperSlide
                className="flex flex-col ps-6 pe-2 py-6 rounded-lg border-solid shadow-sm bg-[#F5FCFF] border-b-[3px] hover:border-b-indigo-600 h-[215px] md:h-[286px] w-[250px] md:w-[304px] max-md:px-5"
                key={index}
                style={slideStyle}
              >
                <div className="flex gap-2 sm:gap-4">
                  {card.img.map((img, index) => {
                    return (
                      <div
                        className="flex justify-center items-center bg-white rounded-lg shadow-[0px_0px_12px_rgba(0,0,0,0.1)] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                        key={index}
                      >
                        <Image
                          alt={card.title}
                          src={img}
                          width={40}
                          height={40}
                          className="w-7 md:w-10"
                        />
                      </div>
                    );
                  })}
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
            );
          })}
          <div
            className="swiper-pagination"
            style={{
              position: "absolute",
              bottom: "-4px",
              zIndex: 50,
            }}
          ></div>
          {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
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
      {/* Add the CSS to hide default Swiper icons */}
      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: none;
        }
        .custom-swiper-pagination .swiper-pagination {
          position: absolute !important;
          bottom: 0px !important;
          z-index: 99 !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }

        .swiper-pagination-bullet {
          background-color: #3b82f6; /* Tailwind's bg-blue-500 */
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #b416ff, #5e3bee);
        }

        .swiper-button-next {
          right: -2px;
        }

        .swiper-button-prev {
          left: -8px;
        }
      `}</style>
    </div>
  );
};

export default Expertise;

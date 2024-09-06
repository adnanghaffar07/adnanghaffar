"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const tools = [
  { title: "All Projects", value: "all" },
  { title: "Mobile App Development", value: "app" },
  { title: "Web App Development", value: "web" },
  { title: "QA Testing & Automation", value: "qa" },
  { title: "Ecommerce", value: "ecommerce" },
];

type ProjectsDataType = {
  image: string;
  title: string;
  description: string;
  category: string[];
};

const projectsData: ProjectsDataType[] = [
  {
    image: "/HouseArrest.png",
    title: "House Arrest",
    description:
      "E-Cell House Arrest specializes in dynamic and innovative home automation solutions.",
    category: ["app"],
  },
  {
    image: "/LetsGo.png",
    title: "LetsGo",
    description:
      "Letshego, a financial services company focused on improving lives through inclusive finance solutions.",
    category: ["web"],
  },
  {
    image: "/VestedFinance.png",
    title: "Vested Finance",
    description:
      "Vested Finance offers a fast, secure platform for investing in full or fractional shares.",
    category: ["web"],
  },
  {
    image: "/Traveend.png",
    title: "Traveend",
    description:
      "Traveend is a review management app for restaurants. Discover details about ambience, food quality, and environment while traveling.",
    category: ["app"],
  },
  {
    image: "/Yakka-Card.jpg",
    title: "Yakka",
    description:
      "YAKKA makes meeting people with similar interests easier than ever! Set up your profile, get verified, create hashtags, and go!",
    category: ["app"],
  },
  {
    image: "/Northbin.jpg",
    title: "Northbin",
    description:
      "E-Commerce Shopify Website which has been developed using CSS Liquid and Dropshiping Automation",
    category: ["ecommerce"],
  },
  {
    image: "/PublicInput.png",
    title: "Public Input",
    description:
      "PublicInput helps you engage with the public and communicate with your audience.",
    category: ["qa"],
  },
  {
    image: "/InnRoad.png",
    title: "Inn Road",
    description:
      "innRoad is a hotel management solution offering online booking, property management, global distribution, revenue management, and more.",
    category: ["web"],
  },
  {
    image: "/Dandy.png",
    title: "Dandy",
    description:
      "Dandy is an AI and ML-based software for removing bad reviews, replying to reviews, and getting customer info via QR codes",
    category: ["qa"],
  },
  {
    image: "/Tracely.png",
    title: "Tracely",
    description:
      "Tracely is a location tracking app to keep track of family and friends, chat, and enjoy newsfeed updates.",
    category: ["app"],
  },
  {
    image: "/BubbleHouse.png",
    title: "BubbleHouse",
    description:
      "Bubblehouse helps you drive the loyalty for your business/brand through tiers, collectibles, referrals, etc.",
    category: ["ecommerce"],
  },
  {
    image: "/Liscio.png",
    title: "Liscio",
    description:
      "Liscio is a secure communication and document management platform for accounting firms, enhancing client interactions and compliance.",
    category: ["web"],
  },
  {
    image: "/Abacus.png",
    title: "Abacus",
    description:
      "Abacus is a global professional services firm specializing in outsourcing, consulting, and technological education and training to enhance business performance and innovation.",
    category: ["web"],
  },
  {
    image: "/Unova.png",
    title: "Unova",
    description:
      "Unova is a blockchain network focused on supply chain and asset management with privacy-enabled data distribution.",
    category: ["web"],
  },
  {
    image: "/Ambient.png",
    title: "Ambient",
    description:
      "Ambient.ai uses AI and computer vision to enhance physical security by proactively monitoring and responding to threats.",
    category: ["app"],
  },
  {
    image: "/Impakt.png",
    title: "Impakt",
    description:
      "Impakt is an AI-powered fitness platform that offers personalized coaching and social fitness features.",
    category: ["app"],
  },
  {
    image: "/Webremarks.png",
    title: "Webremarks",
    description:
      "WebRemarks is a platform that helps businesses manage online reviews, enhance reputation, and engage customers.",
    category: ["app"],
  },
  {
    image: "/Outreach.jpg",
    title: "Outreach",
    description:
      "Voice Email Outreach is an automated system that initiates calls, and connects to agents if human answers, leave voicemails otherwise.",
    category: ["app"],
  },
  {
    image: "/QorusDocs.jpg",
    title: "QorusDocs",
    description:
      "Streamline proposal creation with AI-driven features, seamless integration with Microsoft Office, CRM, and sales tools, enhancing efficiency and win rates for businesses.",
    category: ["app"],
  },
  {
    image: "/Sourcehere.jpg",
    title: "Sourcehere",
    description:
      "Connect globally with businesses and professionals. Facilitates networking, buying, and selling across industries with live trade events and a comprehensive database.",
    category: ["app"],
  },
  {
    image: "/FunnelBeam.jpg",
    title: "FunnelBeam",
    description:
      " FunnelBeam enhances lead generation and sales processes with AI-driven analytics, seamless data integration, and a user-friendly interface.",
    category: ["app"],
  },
  {
    image: "/G3MS.jpg",
    title: "G3MS",
    description:
      "Engaging kids' video platform merging TikTok-style fun with personalized tutoring, offering tailored educational content for a balanced learning experience.",
    category: ["app"],
  },
  {
    image: "/Tailpay.png",
    title: "Tailpay",
    description:
      "TaliPay streamlines logistics payables with secure, efficient management, real-time ledger offsetting, automated vendor statements, and digital ACH payments.",
    category: ["app"],
  },
  {
    image: "/Decisions on Demand.jpg",
    title: "Decisions on Demand",
    description:
      "Optimize business processes with Decisions on Demand: advanced decision management, seamless Salesforce integration, and tailored CRM solutions for efficiency.",
    category: ["app"],
  },
  {
    image: "/OCC.png",
    title: "OCC",
    description:
      "Streamline sales and estimating with OCC: secure data handling, enhanced performance, and innovative tools for home remodeling contractors.",
    category: ["app"],
  },
  {
    image: "/CloudCoin.png",
    title: "CloudCoin",
    description:
      "Implemented RAIDA technology to provide secure, decentralized, and fee-free digital currency transactions.",
    category: ["app"],
  },
  {
    image: "/HedgePie.png",
    title: "HedgePie",
    description:
      "Simplified access to decentralized finance (DeFi) with a secure, transparent, and user-friendly platform.",
    category: ["app"],
  },
  {
    image: "/Rubix.png",
    title: "Rubix",
    description:
      "Digital transformation improved supply chain management, enhanced customer experience, and increased operational efficiency.",
    category: ["app"],
  },
];

const RecentProjects = () => {
  const [selected, setSelected] = useState("All Projects");
  const [projectsArrayLimit, setProjectsArrayLimit] = useState(6);
  const [selectedCategoryArray, setSelectedCategoryArray] = useState<
    {
      title: string;
      description: string;
      image: string;
      category: string[];
    }[]
  >([]);
  const [showingProjectsArray, setShowingProjectsArray] = useState<
    {
      title: string;
      description: string;
      image: string;
      category: string[];
    }[]
  >([]);

  useEffect(() => {
    if (selected === "All Projects") {
      setShowingProjectsArray(projectsData.slice(0, 6));
      setSelectedCategoryArray(projectsData);
    }
  }, []);

  const handleClick = (obj: any) => {
    setProjectsArrayLimit(6);
    setSelected(obj.title);
    if (obj.value === "all") {
      setShowingProjectsArray(projectsData.slice(0, 6));
      setSelectedCategoryArray(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) =>
        project.category.includes(obj.value)
      );
      setShowingProjectsArray(filteredProjects.slice(0, 6));
      setSelectedCategoryArray(filteredProjects);
    }
  };

  useEffect(() => {
    setShowingProjectsArray(selectedCategoryArray.slice(0, projectsArrayLimit));
  }, [projectsArrayLimit, selectedCategoryArray]);

  const handleShowMoreClick = () => {
    setProjectsArrayLimit((prev) => prev + 3);
  };

  return (
    <section className="max-w-[1412px] mx-auto">
      <div className="flex flex-col px-1 sm:px-5 py-8 md:py-12 w-full max-md:max-w-full items-center justify-center">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full w-[768px]">
            <p className="self-start text-base sm:text-xl font-semibold text-center text-[#282938]">
              Project Highlights
            </p>
            <div className="flex flex-col mt-2 md:mt-4 w-full text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
              <p className="text-2xl sm:text-4xl md:text-5xl w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] pb-1">
                Recent Projects
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-5 items-center mt-4 md:mt-8 w-full text-lg font-medium leading-tight max-md:max-w-full">
            {tools.map((tool, index) => (
              <button
                className={`rounded-lg p-[1.5px] w-fit bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] ${
                  selected === tool.title
                    ? ""
                    : "bg-white border-1 border-transparent"
                } hover:bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] transition-all duration-300`}
                key={index}
                onClick={() => handleClick(tool)}
              >
                <p
                  className={`px-[10px] py-1.5 md:py-[13px] rounded-[7px] transition-all duration-300 ${
                    selected === tool.title
                      ? "bg-transparent text-white"
                      : "bg-white hover:bg-transparent"
                  } group`}
                >
                  <span
                    className={`text-xs md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] transition-all duration-300 ${
                      selected === tool.title ? "text-white" : ""
                    } group-hover:text-white`}
                  >
                    {tool.title}
                  </span>
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7 sm:gap-10 mt-8 md:mt-16">
          {showingProjectsArray.length !== 0 &&
            showingProjectsArray.map(
              (
                item: {
                  image: string;
                  title: string;
                  description: string;
                  category: string[];
                },
                index: any
              ) => (
                <div
                  key={index}
                  className="relative w-full cursor-pointer group overflow-hidden"
                >
                  {/* <Link href={`/case-studies/${item?.url}`}> */}
                  {/* {item?.cardImage && ( */}
                  <Image
                    width={454}
                    height={300}
                    className="w-full aspect-[1.52] max-w-[360px] sm:max-w-[410px] sm:mb-2"
                    src={item.image}
                    alt={item.title}
                  />
                  {/* )} */}
                  <div
                    className={
                      "absolute inset-0 flex items-center justify-center text-center p-4 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 rounded-3xl"
                    }
                    style={{
                      backgroundColor: "#5E3BEE",
                    }}
                  >
                    <p className="text-white">{item.description}</p>
                  </div>
                  {/* </Link> */}
                </div>
              )
            )}
        </div>

        {selectedCategoryArray.length > 6 &&
          projectsArrayLimit < selectedCategoryArray.length && (
            <button
              className="items-center justify-center w-[122px] h-[50px] text-lg font-medium rounded-lg p-[1.5px] bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] mt-8 md:mt-16"
              onClick={() => {
                handleShowMoreClick();
              }}
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

export default RecentProjects;

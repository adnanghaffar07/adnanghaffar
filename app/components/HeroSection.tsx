import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
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
              build their trust to establish a high-performing managerial team.
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 items-center self-start mt-8 ">
            <Link
              href="https://www.upwork.com/freelancers/adnanghaffar"
              target="_blank"
              className="text-white rounded-lg bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] w-[190px] lg:w-[200px] xl:w-[255px] h-[56px] sm:h-[63px] lg:h-[63px] xl:h-[73px] max-md:px-5 text-[22px] flex items-center justify-center text-base lg:text-xl xl:text-[22px] group transition-transform duration-300 hover:bg-[linear-gradient(274deg,#B416FF_44.65%,#5E3BEE_97.09%)]"
            >
              Upwork Top Rated
            </Link>

            <Link
              href="https://calendly.com/adnanghaffar007"
              target="_blank"
              rel="noopener noreferrer"
              className="relative items-center justify-center w-[164px] sm:w-[180px] lg:w-[225px] xl:w-[255px] h-[58px] sm:h-[63px] lg:h-[63px] xl:h-[73px] lg:text-xl xl:text-2xl font-medium rounded-lg p-[1px] bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] px-[1px] flex"
            >
              <span className="w-full h-full bg-[#F5FCFF] hover:bg-[#CECCFB] rounded-[7px] flex items-center justify-center">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] text-base lg:text-[22px] py-1">
                  Schedule Meeting
                </span>
              </span>
            </Link>
          </div>
          <div className="absolute -right-0 -top-8 z-0 flex-col w-4 gap-4 xl:gap-8 sm:hidden flex">
            <div>
              <p className="text-[#5E3BEE] vertical-text text-xs">
                Follow me on:
              </p>
            </div>

            <div className="shrink-0 self-center w-px h-6 xl:h-16 border border-[#5E3BEE] border-solid" />
            <Link
              href="https://twitter.com/adnanghaffar007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="https://www.instagram.com/itsadnanghaffar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/instagram.svg"}
                alt="instagram"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/adnanghaffar007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/linkedin-icon.svg"}
                alt="linkedin"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>

        <div className="relative mt-6 xl:mt-16">
          <Image
            src="/banner-image.png"
            alt="Adnan Ghaffar"
            width={578}
            height={514}
            priority={true}
            className="w-full sm:w-[578px] lg:w-[410px] xl:w-[520px] 2xl:w-[578px] px-4 sm:px-0"
          />

          <div className="absolute -right-0 sm:-right-8 lg:-right-8 xl:-right-8 2xl:-right-16 top-[400px] sm:top-44 lg:top-8 xl:top-16 2xl:top-24 z-0 flex-col px-0.5 pt-36 w-6 max-md:pt-24 gap-4 xl:gap-8 hidden sm:flex">
            <div>
              <p className="text-[#5E3BEE] vertical-text">Follow me on:</p>
            </div>

            <div className="shrink-0 self-center w-px h-10 xl:h-16 border border-[#5E3BEE] border-solid" />
            <Link
              href="https://twitter.com/adnanghaffar007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.instagram.com/itsadnanghaffar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/instagram.svg"}
                alt="instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/adnanghaffar007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/linkedin-icon.svg"}
                alt="linkedin"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

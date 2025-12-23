"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation"; // Added imports

const Footer = () => {
  const router = useRouter(); // Added router
  const pathname = usePathname(); // Added pathname

  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
      return;
    }
    
    // If we're already on home page, scroll to section
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e: any) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
    } else {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHeaderClick = (e: any) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#header");
    } else {
      // If already on home page, scroll to header
      const element = document.getElementById("header");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#5E3BEE]">
      <div className="flex flex-col mt-2 max-w-[1370px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col xl:flex-row gap-6 md:gap-10 items-start xl:justify-between xl:items-center py-6 sm:py-8">
          <a onClick={handleHeaderClick} className="cursor-pointer">
            <Image
              src="/footer-logo.svg"
              alt="logo"
              width={200}
              height={30}
              className="w-[162px] sm:w-[200px]"
            />
          </a>
          <ul className="flex gap-5 gap-y-4 md:gap-8 flex-wrap sm:flex-nowrap items-start my-auto text-sm sm:text-base md:text-xl text-white">
            <li>
              <a
                onClick={handleHomeClick}
                className="hover:text-[#d0c3ff] cursor-pointer"
              >
                Home
              </a>
            </li>

            <li>
              <a
                onClick={(e) => handleScroll(e, "expertise")}
                className="hover:text-[#d0c3ff] cursor-pointer"
              >
                Tools & Expertise
              </a>
            </li>

            <li>
              <a
                onClick={(e) => handleScroll(e, "about")}
                className="hover:text-[#d0c3ff] cursor-pointer"
              >
                About me
              </a>
            </li>

            <li>
              <a
                onClick={(e) => handleScroll(e, "portfolio")}
                className="hover:text-[#d0c3ff] cursor-pointer"
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                onClick={(e) => handleScroll(e, "achievements")}
                className="hover:text-[#d0c3ff] cursor-pointer"
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex w-full bg-white bg-opacity-20 min-h-[1px] max-md:max-w-full" />
          <div className="flex flex-wrap gap-10 gap-y-6 justify-between items-center pt-6 md:pt-11 pb-6 md:pb-8">
            <p className="my-auto text-xs sm:text-base md:text-lg font-bold text-white">
              <span className="font-normal">
                {" "}
                Copyright @{new Date(Date.now()).getFullYear()}
              </span>{" "}
              - by Adnan G.
            </p>
            <div className="flex flex-wrap gap-4 items-center my-auto">
              <Link
                href="https://github.com/adnanghaffar07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="Github"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
              </Link>
              {/* <Link
                href="https://www.instagram.com/itsadnanghaffar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram-white.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
              </Link> */}
              {/* <Link
                href="https://twitter.com/adnanghaffar007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter-white.svg"
                  alt="twitter"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
              </Link> */}
              {/* <Link
                href="https://www.linkedin.com/in/adnanghaffar007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedIn-white.svg"
                  alt="linkedIn"
                  width={32}
                  height={32}
                  className="object-contain shrink-0 self-stretch my-auto w-5 sm:w-8 rounded-md aspect-square"
                />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Image from "next/image";
import Link from "next/link";
import React from "react";

const servicesData = [
  "Website E-commerce",
  "Web and Mobile App Development",
  "Salesforce and SugarCRM Development",
  "Authentication & Verification",
  "Quality Assurance (QA) & Testing",
  "Website CMS Services",
];

const Services = () => {
  return (
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

          {/* <button className="gap-2.5 self-start sm:px-8 py-3 sm:py-5 mt-6 text-base sm:text-2xl text-white rounded-lg bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] max-md:px-3">
              Schedule Meeting
            </button> */}
          <Link
            href="https://calendly.com/adnanghaffar007"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-white rounded-lg bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] w-[180px] lg:w-[255px] h-[56px] sm:h-[63px] lg:h-[63px] xl:h-[73px] max-md:px-5 flex items-center justify-center text-base lg:text-xl xl:text-[22px] group transition-transform duration-300"
          >
            <span className="group-hover:-translate-x-1  md:translate-x-4 transform transition-transform duration-300">
              Schedule Meeting
            </span>
            <Image
              src="/calendar.svg"
              alt="arrow"
              width={24}
              height={24}
              className="w-6 ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

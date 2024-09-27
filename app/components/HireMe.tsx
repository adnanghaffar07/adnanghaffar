"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const HireMe = ({ data }: { data: any }) => {
  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-neutral-50" id="portfolio">
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 2xl:gap-[86px] items-center py-6 sm:py-16 max-md:px-5 max-w-[1270px] mx-auto justify-center">
        <div>
          {data?.image && (
            <Image
              src={urlFor(data?.image).url()}
              alt={data?.image?.alt}
              width={535}
              height={591}
              className="w-[485px] xl:w-[535px]"
            />
          )}
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-base sm:text-xl font-semibold text-[#282938]">
              {data?.subTitle}
            </h2>
            <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] w-fit pb-1">
              {data?.title}
            </p>
          </div>
          <div className="max-w-[450px] xl:max-w-[616px] text-[#1C1E53]">
            <p className="mt-6 text-base sm:text-lg leading-6 sm:leading-7">
              {data?.description}
            </p>
          </div>

          <div className="flex gap-10 sm:gap-24 xl:gap-32 items-start mt-6 w-full max-md:max-w-full">
            {data?.buttonsArray &&
              data.buttonsArray.map((singlebutton: any) => {
                return (
                  <div className="flex flex-col" key={singlebutton._key}>
                    <div className="flex gap-1 self-start text-[22px] sm:text-4xl font-medium tracking-tight whitespace-nowrap items-center">
                      {singlebutton?.icon && (
                        <Image
                          src={urlFor(singlebutton?.icon).url()}
                          alt={singlebutton?.icon?.alt}
                          width={48}
                          height={48}
                          className="w-[26px] sm:w-12"
                        />
                      )}

                      <p className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]">
                        {singlebutton?.buttonText}
                      </p>
                    </div>
                    <p className="mt-2.5 text-base sm:text-xl tracking-tight text-[#667085]">
                      {singlebutton?.buttonDescription}
                    </p>
                  </div>
                );
              })}
          </div>
          <button
            className="gap-2.5 self-start px-6 sm:px-8 py-4 sm:py-5 mt-6 text-base sm:text-2xl text-white rounded-lg bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] hover:from-[#5E3BEE] hover:to-[#B416FF]"
            onClick={(e) => handleScroll(e, "contact")}
          >
            {data?.mainButton?.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;

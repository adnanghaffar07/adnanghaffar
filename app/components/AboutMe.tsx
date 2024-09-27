import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const AboutMe = ({ data }: { data: any }) => {
  return (
    <section className="bg-neutral-50" id="about">
      <div className="flex flex-col-reverse lg:flex-row gap-10 2xl:gap-[86px] items-center py-6 sm:py-24 max-md:px-5 max-w-[1270px] mx-auto justify-center">
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
            <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] w-fit">
              {data?.title}
            </p>
          </div>
          <div className="max-w-[450px] xl:max-w-[616px] text-[#1C1E53]">
            {data?.descriptionArray.map((para: string, index: number) => (
              <p className="mt-6 text-base sm:text-lg leading-7" key={index}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

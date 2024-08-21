import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-neutral-50" id="about">
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
              codeautomation sector. Under my leadership, the company has grown
              exponentially, significantly expanded its product offerings, and
              established a strong global presence.
            </p>
            <p className="mt-2 sm:mt-6 text-base sm:text-lg leading-7">
              Also, I have established a few small successful businesses which
              grew by 250% within 2.5 years. Also, I have extensive expertise in
              business requirement analysis and providing software consultancy
              to make projects/products cost-effective. Develop high-quality,
              profitable business strategies and implement the vision while
              ensuring their alignment with short-term and long-term objectives.
            </p>
            <p className="mt-2 sm:mt-6 text-base sm:text-lg leading-7">
              I implement the automation process to enhance revenue because
              I&apos;m technically strong in software automation, software test
              automation, crawling, bot development, and implementing social
              media automation based on the client&apos;s requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

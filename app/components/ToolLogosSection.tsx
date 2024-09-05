import Image from "next/image";
import React from "react";

const logos = [
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" },
  { src: "/javascript.png", alt: "JavaScript" },
  { src: "/java.png", alt: "Java" },
  { src: "/nodejs-logo.png", alt: "Nodejs" },
  { src: "/python.png", alt: "Python" },
  { src: "/selenium.png", alt: "Selenium" },
  { src: "/wordpress.png", alt: "Wordpress" },
];

export const ToolLogosSection = () => {
  return (
    <section className="h-[180px] md:h-[224px] mx-auto px-16 bg-[#FAFAFA] flex items-center overflow-hidden">
      <div className="w-full flex items-center">
        <div className="flex animate-scroll">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-28 md:w-[154px] h-28 md:h-[154px] bg-[#EAEAEA] rounded-[26px] flex items-center justify-center mx-8 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={96}
                height={96}
                className="w-[76px] md:w-[96px] h-[76px] md:h-[96px]"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-scroll">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-28 md:w-[154px] h-28 md:h-[154px] bg-[#EAEAEA] rounded-[26px] flex items-center justify-center mx-8 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={96}
                height={96}
                className="w-[76px] md:w-[96px] h-[76px] md:h-[96px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

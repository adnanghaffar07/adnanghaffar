import Image from "next/image";
import React, { useState } from "react";

const contentWriting = [];

const LifeStyle = () => {
  const [selected, setSelected] = useState("travelling");

  const handleClick = (buttonId: string) => {
    setSelected(buttonId);
  };
  return (
    <section className="max-w-[1412px] mx-auto">
      <div className="flex flex-col px-5 py-8 md:py-24 w-full max-md:max-w-full items-center justify-center">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full w-[768px]">
            <p className="self-start text-base sm:text-xl font-semibold text-center text-[#282938]">
              Things I Love To Do
            </p>
            <div className="flex flex-col mt-2 md:mt-4 w-full text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
              <p className="text-2xl sm:text-4xl md:text-5xl w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
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

                  <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                    <Image
                      src="/lifestyle-3.png"
                      alt="Lifestyle"
                      width={616}
                      height={818}
                      className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    />
                    <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                        Trip to - Australia
                      </span>
                    </div>
                  </div>
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
                      height={917}
                      className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    />
                    <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                        Trip to - Europe
                      </span>
                    </div>
                  </div>

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
                </div>
              </div>
            </div>
          )}

          {selected === "content" && (
            <div className="flex gap-10">
              <div className="flex flex-col rounded-lg max-w-[615px] shadow-lg">
                <div className="flex flex-col pb-5 w-full rounded-lg bg-slate-50">
                  <div className="relative flex flex-col w-full text-xl text-white rounded-lg min-h-[420px]">
                    <Image
                      src="/manual-testing.png"
                      alt="manual-testing"
                      width={615}
                      height={420}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="relative flex flex-col items-end px-16 pt-8 pb-80 w-full bg-black bg-opacity-30">
                      <div className="flex gap-2 mb-0">
                        <div className="px-2.5 py-2 rounded-lg bg-white bg-opacity-20">
                          SQA
                        </div>
                        <div className="px-2.5 py-2 rounded-lg bg-white bg-opacity-20">
                          Learning
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col self-center mt-8 w-full max-w-[549px]">
                    <div className="text-3xl font-semibold text-neutral-900">
                      Why is Manual Testing not sufficient for Continuous
                      Delivery?
                    </div>
                    <div className="flex flex-col items-start mt-6 text-lg text-gray-500 w-[519px]">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/profile-icon.png"
                          width={40}
                          height={40}
                          alt="profile"
                          className="w-10 rounded-full"
                        />
                        <div>Adnan Ghaffar</div>
                        <div className="w-9 h-px bg-gray-500 bg-opacity-40" />
                        <div>Sep 11, 2023</div>
                        <div className="flex items-center gap-1.5">
                          <Image
                            src="/share-icon.svg"
                            alt="share"
                            width={15}
                            height={16}
                            className="w-[15px] h-4"
                          />
                          <div>1K shares</div>
                        </div>
                      </div>
                      <div className="mt-5 text-xl leading-8 text-gray-500">
                        Software development professionals often use continuous
                        delivery. The introduction of new app code is
                        streamlined by automation. It starts the process by
                        which a software developer changes the application, and
                        it may be automatically uploaded to the code repository
                        registry.
                      </div>
                      <div className="flex flex-col items-center mt-5 text-2xl font-semibold leading-loose">
                        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#5E3BEE] to-[#B416FF]">
                          Read Blog
                        </div>
                        <div className="w-full h-px bg-gradient-to-r from-[#5E3BEE] to-[#B416FF]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selected === "automation" && <div>automation</div>}
          {selected === "business" && <div>business</div>}
        </div>

        {selected === "travelling" && (
          <button className="flex justify-center items-center w-[82px] sm:w-[113px] h-[34px] sm:h-[50px] mt-20 sm:text-lg font-medium leading-tight rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 max-md:mt-10 text-xs">
            <p className="self-stretch my-auto bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
              View More
            </p>
          </button>
        )}
      </div>
    </section>
  );
};

export default LifeStyle;

"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Home() {
  return (
    <body>
      <AuroraBackground>
        
          <motion.div
          initial={{ opacity: 1, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
            className="relative flex size-full min-h-screen flex-col  group/design-root overflow-x-hidden"
            style={{ fontFamily: `"Work Sans", "Noto Sans", sans-serif` }}
          >
            <div className="layout-container flex h-full grow flex-col">
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-10 py-3">
                <div className="flex items-center gap-4 text-[#0e161b]">
                  <div className="size-4">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em]">
                    FastFix
                  </h2>
                  <div></div>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                  <label className="flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div
                        className="text-[#507a95] flex border-none bg-[#e8eef3] items-center justify-center pl-4 rounded-l-xl border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="24px"
                        data-weight="regular"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Search"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-full placeholder:text-[#507a95] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                        value=""
                      />
                    </div>
                  </label>
                  <div className="flex gap-2">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1c84ca] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Log in</span>
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e161b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                      <div
                        className="text-[#0e161b]"
                        data-icon="Globe"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </header>
              <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                  <div className="@container">
                    <div className="@[480px]:p-4">
                      <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/d3a3cb08-de0e-45e5-8c7f-fdafc4adcf42.png");',
                        }}
                      >
                        <div className="flex flex-col gap-2 text-left">
                          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                            FastFix - Your go-to vehicle maintenance service
                          </h1>
                          <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            Get your car, motorcycle, or scooter fixed quickly
                            and easily. We provide reliable maintenance services
                            for all types of vehicles.
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                          className="text-[#507a95] flex border-none bg-[#e8eef3] items-center justify-center pl-4 rounded-l-xl border-r-0"
                          data-icon="MagnifyingGlass"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                          </svg>
                        </div>
                        <input
                          placeholder="What do you need help with?"
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-full placeholder:text-[#507a95] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                          value=""
                        />
                      </div>
                    </label>
                  </div>
                  <div className="pb-3"></div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/d3a3cb08-de0e-45e5-8c7f-fdafc4adcf42.png")',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          Car Maintenance
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Keep your car running smoothly with our comprehensive
                          maintenance services
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/stability/975e6d72-f11c-4ff3-acb8-27ce2140bc0e.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          Motorcycle Maintenance
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Get your motorbike in top condition with our
                          professional maintenance solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/stability/8e43b34a-b20e-4e0a-b4ad-dd176d090d50.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          Scooter Maintenance
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Ensure your scooter is well-maintained for optimal
                          performance and safety
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    Vehicle Maintenance Tips
                  </h2>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/sdxl10/6e020631-d93d-4eb6-860a-9eab1268a7cd.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          How to check your car's oil level
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Regularly checking your car's oil level is essential
                          for the health of your engine
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/sdxl10/cf1ddc9b-0c31-4776-a312-ab95395780e5.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          How to maintain your motorcycle chain
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Maintaining your motorcycle chain is crucial for
                          safety and performance
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/sdxl10/94e9f2c8-b756-40c5-bd39-c39fb39c859e.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          How to keep your scooter in good condition
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Follow these tips to keep your scooter in top
                          condition
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    Car Part Purchasing
                  </h2>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/sdxl10/94737e33-6aca-46c4-a217-49f9972abc12.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          Car Brakes
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          High-quality brakes for your car
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/sdxl10/215bac16-0395-46b5-a546-c0060674cb3e.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          Car Batteries
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Long-lasting batteries for your car
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/stability/43dcb121-6227-4ddb-ba45-573d7646448b.png");',
                        }}
                      ></div>
                      <div>
                        <p className="text-[#0e161b] text-base font-medium leading-normal">
                          Car Tires
                        </p>
                        <p className="text-[#507a95] text-sm font-normal leading-normal">
                          Durable tires for your car
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    Book an appointment for vehicle maintenance
                  </h2>
                  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                        Service type
                      </p>
                      <input
                        placeholder="Oil change, tire rotation, general checkup"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507a95] p-4 text-base font-normal leading-normal"
                        value=""
                      />
                    </label>
                  </div>
                  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                        Date
                      </p>
                      <input
                        placeholder="MM/DD/YYYY"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507a95] p-4 text-base font-normal leading-normal"
                        value=""
                      />
                    </label>
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                        Time
                      </p>
                      <input
                        placeholder="HH:MM AM/PM"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507a95] p-4 text-base font-normal leading-normal"
                        value=""
                      />
                    </label>
                  </div>
                  <div className="flex px-4 py-3">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1c84ca] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center">
                <div className="flex max-w-[960px] flex-1 flex-col">
                  <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                    <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                      <a
                        className="text-[#507a95] text-base font-normal leading-normal min-w-40"
                        href="#"
                      >
                        About us
                      </a>
                      <a
                        className="text-[#507a95] text-base font-normal leading-normal min-w-40"
                        href="#"
                      >
                        Careers
                      </a>
                      <a
                        className="text-[#507a95] text-base font-normal leading-normal min-w-40"
                        href="#"
                      >
                        Blog
                      </a>
                      <a
                        className="text-[#507a95] text-base font-normal leading-normal min-w-40"
                        href="#"
                      >
                        Help
                      </a>
                      <a
                        className="text-[#507a95] text-base font-normal leading-normal min-w-40"
                        href="#"
                      >
                        API docs
                      </a>
                      <a
                        className="text-[#507a95] text-base font-normal leading-normal min-w-40"
                        href="#"
                      >
                        Privacy
                      </a>
                      <a
                        className="text-[#507a95] text-base font-normal leading-normal min-w-40"
                        href="#"
                      >
                        Terms
                      </a>
                    </div>
                    <p className="text-[#507a95] text-base font-normal leading-normal">
                      © 2023 FastFix
                    </p>
                  </footer>
                </div>
              </footer>
            </div>
          </motion.div>
      </AuroraBackground>
    </body>
  );
}

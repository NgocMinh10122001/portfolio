"use client";
import { IExperience } from "@/types/home.interface";
import { it } from "node:test";
import React, { useState } from "react";

export default function Experience({
  title,
  experiences,
}: {
  title: string;
  experiences: IExperience[];
}) {
  const [active, setActive] = useState<number>(0);
  return (
    <section id="experience" className="sm:pb-40">
      <h2 className="text-blue-400 text-3xl sm:text-5xl font-bold text-center">
        {title || "Experience"}
      </h2>
      <div className="flex  flex-col gap-10 sm:flex-row sm:gap-20 mt-10 ">
        <div className="w-full max-sm:px-4 sm:w-[20rem] h-fit sm:h-[22.5rem] max-sm:gap-4 flex flex-row sm:flex-col justify-start sm:justify-center max-sm:overflow-scroll">
          {experiences &&
            experiences.length > 0 &&
            experiences.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActive(index);
                  }}
                  className={`w-fit shrink-0 sm:w-[90%] px-2 text-start py-3 text-xs sm:text-[1.05rem] font-light cursor-pointer h-fit ${
                    active === index
                      ? "border-b-4 border-blue-500 text-blue-500 bg-gray-active font-semibold"
                      : "text-white"
                  } transition-all `}
                >
                  <span>{item.company.companyName || ""}</span>
                </button>
              );
            })}
        </div>

        {experiences &&
          experiences.length > 0 &&
          experiences.map((item, index) => {
            if (active === index) {
              return (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  className={`max-sm:px-4 flex-1 h-[22.5rem] flex flex-col justify-center  `}
                >
                  <p className="text-base sm:text-2xl font-semibold">
                    {item.role || ""}{" "}
                    <a
                      href={item.company.companyURL || "#"}
                      target="_blank"
                      className="text-blue-500 "
                    >
                      @{item.company.companyName || ""}
                    </a>
                  </p>
                  <p className="text-xs sm:text-base font-light mt-3 opacity-85">
                    {item.duration || ""}
                  </p>
                  {item.description &&
                    item.description.length > 0 &&
                    item.description.map((desc, descIndex) => (
                      <p
                        key={descIndex}
                        className="text-sm sm:text-lg font-semibold mt-6 opacity-90"
                      >
                        {desc || ""}
                      </p>
                    ))}
                </div>
              );
            }
          })}
      </div>
    </section>
  );
}

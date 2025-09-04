import { IProject } from "@/types/home.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export default function Projects({
  title,
  projects,
  githubURL
}: {
  title?: string;
  projects?: IProject[];
  githubURL?: string;
}) {
  return (
    <section id="projects" className=" max-sm:px-10">
      <h2 className="text-blue-400 text-3xl sm:text-4xl font-bold text-center">
        {title || "Projects 1"}
      </h2>
      <div className="projects grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20 mt-10 sm:mt-20 sm:px-20">
        {projects &&
          projects.length > 0 &&
          projects.map((item, index) => (
            <Link
              key={index}
              href={item.projectURL || "#"}
              target="_blank"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="200"
              // style={{transition: '0.2s cubic-bezier(0.57, 0.01, 0, 0.99)'}}
            >
              <div className="bg-gray-active  h-[27rem] sm:h-[32rem] rounded-b-2xl sm:hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <Image
                  src={item.thumbnailURL || ""}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="w-full h-36 sm:h-40 object-cover"
                />
                <div className=" p-4 sm:p-6">
                  <h3 className="text-lg text-white-base sm:text-2xl font-semibold">
                    {item.name || "Project Name"}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-4 mt-2 sm:mt-4">
                    {item.techStack &&
                      item.techStack.length > 0 &&
                      item.techStack.map((tech:{icon:IconType,techName:string}, idx:number) => (
                        <div
                          key={idx}
                          className="px-2 py-1 flex gap-1 items-center bg-blue-600 rounded-md sm:rounded-lg"
                        >
                          <tech.icon className="text-white-base w-5 h-5 sm:w-6 sm:h-6" />
                          <span className=" text-sm sm:text-base font-medium sm:font-semibold text-white-base">
                            {tech.techName || "Tech"}
                          </span>
                        </div>
                      ))}
                  </div>
                  <p className="text-[0.8rem] font-light sm:text-base sm:font-light line-clamp-4 mt-4 sm:mt-6">
                    {item.description ||
                      "Project description goes here. Project description goes here. Project description goes here. 1"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          
      </div>
      <div className="flex justify-center">
        <Link href={githubURL ?? "#"} target="_blank" className="w-fit mt-10 sm:mt-20">
          <span className="text-base sm:text-2xl font-semibold ">
            See more in my Github
          </span>
        </Link>
      </div>
    </section>
  );
}

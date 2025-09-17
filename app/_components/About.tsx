import { IAbout } from "@/types/home.interface";
import Image from "next/image";
import React from "react";

export default function About({
  title,
  about,
}: {
  title?: string;
  about: IAbout;
}) {
  return (
    <section id="about" className="">
      <h2 className="text-blue-400 text-3xl sm:text-5xl font-bold text-center">
        {title || "About Me"}
      </h2>
      <article className="flex max-sm:px-4 flex-col sm:flex-row  justify-center items-center gap-10 sm:gap-12 mt-10 sm:mt-20">
        <div>
          <Image
            src={about?.thumbnailURL || "/images/avatar.png"}
            alt="profile"
            width={200}
            height={200}
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full"
          />
        </div>
        <div
          className="space-y-6 w-full sm:w-[60.5rem] max-sm:text-center"
        >
          {about?.desc &&
            about.desc.length > 0 &&
            about.desc.map((item, index) => (
              <p key={index} className="text-sm sm:text-lg font-semibold ">
                {item || ""}
              </p>
            ))}
        </div>
      </article>
    </section>
  );
}

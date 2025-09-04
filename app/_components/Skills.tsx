import React from "react";

import Link from "next/link";
import { ISkill } from "@/types/home.interface";

export default function Skills({
  skills,
  title
}: {
  skills?: ISkill[];
  title?: string;
}) {
  return (
    <section id="skills" className="mt-10 sm:mt-20 max-sm:px-10">
      <h2 className="text-blue-400 text-3xl sm:text-5xl font-bold text-center">
        {title || "Skills 1"}
      </h2>
      <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-20 justify-center sm:px-20">
        {skills &&
          skills.length > 0 &&
          skills.map((item, index) => (
            <Link key={index} href={item?.url || "#"} 
            data-aos={index % 2 ? 'fade-up' : 'fade-down'}
            data-aos-duration="1000"
            data-aos-offset="100"
            target="_blank">
              <item.icon className="text-4xl sm:text-6xl" />
            </Link>
          ))}
      </div>
    </section>
  );
}

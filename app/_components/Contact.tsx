import { IContact } from "@/types/home.interface";
import Link from "next/link";
import React from "react";

export default function Contact({
  title,
  contact,
}: {
  title?: string;
  contact: IContact[];
}) {
  return (
    <section id="contact" className=" flex flex-col items-center pb-3 sm:pb-5">
      <h2 className="text-blue-400 text-3xl sm:text-5xl font-bold text-center">
        {title || "Contact"}
      </h2>
      <div className="mt-6 sm:mt-10 flex items-center justify-center gap-8 sm:gap-10">
        {contact &&
          contact.length > 0 &&
          contact.map((item, index) => (
            <Link
              key={index}
              href={item.url ?? "#"}
              target="_blank"
              className=""
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <item.icon className="text-[2rem] sm:text-[2.5rem]" />
            </Link>
          ))}
      </div>
      <p className="mt-6 sm:mt-10 text-sm sm:text-lg font-light text-center w-[85%] sm:w-full">
        Designed and made with 💙 by{" "}
        <strong className="font-semibold">Ngoc Minh</strong>
      </p>
      <p className="text-sm sm:text-lg font-semibold">@2025</p>
    </section>
  );
}

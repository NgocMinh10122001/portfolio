import Image from "next/image";
import Link from "next/link";

export default function Banner({name , position, resumeURL}: {name?: string, position?: string, resumeURL?: string}) {
  return (
    <section
      id="banner"
      className="banner relative flex pt-24 sm:pt-40 pb-4 flex-col items-center max-sm:px-4"
    >
      <div className="banner__intro text-center font-bold">
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-3xl sm:text-5xl"
        >
          Xin chao,
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="text-3xl sm:text-5xl block mt-3 sm:mt-6"
        >
          Im <strong className="text-blue-400">{name || "Ngoc Minh 1"}</strong>
        </p>
        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="800"
          className=" mt-3 sm:mt-8 text-base sm:text-2xl"
        >
          {position || "Frontend Web Developer 1"}
        </p>
      </div>
      <div className="banner__thumb w-24 h-24 max-sm:mt-8 sm:w-32 sm:h-32 sm:absolute sm:top-36 right-[25%]">
        <Image
          src="/images/_memoji.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full h-full object-contain"
        />
      </div>
      <Link href={resumeURL ?? "#"} target="_blank" className="banner__resume mt-10 w-fit h-fit bg-blue-400 text-dark-700 text-base sm:text-xl font-bold hover:bg-gray-hover-400 hover:text-white transition-all duration-300 px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-center cursor-pointer">
        <span>My resume</span>
      </Link>
    </section>
  );
}

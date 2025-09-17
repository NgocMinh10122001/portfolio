import { INavigation } from "@/types/header.interface";
import {
  IAbout,
  IContact,
  IExperience,
  IProject,
  ISkill,
} from "@/types/home.interface";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiShadcnui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiRadixui } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { RiPhpFill } from "react-icons/ri";

// header links

export const navLinks: INavigation[] = [
  {
    name: "Projects",
    url: "projects",
  },
  {
    name: "Experience",
    url: "experience",
  },
  {
    name: "About",
    url: "about",
  },
  {
    name: "Contact",
    url: "contact",
  },
];

// home page experience data

export const experienceData: IExperience[] = [
  {
    company: {
      companyName: "Okhub Agency",
      companyURL: "https://okhub.vn/",
    },
    role: "Intern Frontend Developer",
    duration: "March 2025 - August 2025",
    description: [
      "💙 Learned and apply soft skills and corporate culture through internship sessions organized by the company.",
      "💪 Participated in a internship program focused on frontend development using Wordpress, ReactJS, NextJS, Tailwind CSS, Git, etc.",
      "🤝 Collaborated with 5 member team to develop a few website following a clean architecture and best practice.",
      "🧑‍💻 Present the final report and demo project of my team with project manager.",
    ],
  },
  {
    company: {
      companyName: "ThinkDiff",
      companyURL: "https://thinkdiff.us/",
    },
    role: "Intern Frontend Developer",
    duration: "June 2024 - September 2024",
    description: [
      "💙 Learned and used new technologies like React JS, Next JS, Tailwind Css,...",
      "👏 Collaborated with 3 member with frontend team to development some comic websites.",
      "👌 Learned how to deploy projects in production environment."
    ],
  },
];

// home page projects data

export const projectsData: IProject[] = [
  {
    name: "Ziohair",
    description:
      "The site showcases services, stylist profiles, promotional offers, and facilitates easy booking inquiries.",
    techStack: [
      { icon: RiNextjsFill, techName: "NextJS" },
      { icon: BiLogoTypescript, techName: "TypeScript" },
      { icon: RiTailwindCssFill, techName: "TailwindCSS" },
      { icon: SiRadixui, techName: "Radix UI" },
      { icon: SiGreensock, techName: "Gsap" },
    ],
    projectURL: "https://ziohair.vn/",
    thumbnailURL: "/images/pjs/ziohair.png",
  },
  {
    name: "Hagiang Local",
    description:
      "A comprehensive tourism website dedicated to promoting Ha Giang's local culture, destinations, and services. The platform provides users with detailed information about tours, accommodations, cultural insights, and convenient booking functionalities.",
    techStack: [
      { icon: FaHtml5, techName: "Html" },
      { icon: FaCss3Alt, techName: "Css" },
      { icon: RiJavascriptFill, techName: "Javascript" },
      { icon: RiPhpFill, techName: "Php" },
      { icon: FaWordpress, techName: "Wordpress" },
      { icon: FaGithub, techName: "Aos" },
    ],
    projectURL: "https://motorbikevietnamtour.com/",
    thumbnailURL: "/images/pjs/hagiang.png",
  },
  {
    name: "Top of the Loop",
    description:
      "A comprehensive tourism website dedicated to promoting Ha Giang's local culture, destinations, and services. The platform provides users with detailed information about tours, accommodations, cultural insights, and convenient booking functionalities.",
    techStack: [
      { icon: FaHtml5, techName: "Html" },
      { icon: FaCss3Alt, techName: "Css" },
      { icon: RiJavascriptFill, techName: "Javascript" },
      { icon: RiPhpFill, techName: "Php" },
      { icon: FaWordpress, techName: "Wordpress" },
    ],
    projectURL: "https://banana.okhub-tech.com/",
    thumbnailURL: "/images/pjs/banana.png",
  },
  {
    name: "Saigon Uniform",
    description:
      "An e-commerce website specializing in providing highquality uniforms for businesses, schools, and organizations. The platform showcases product catalogs, enables online ordering, and facilitates customer inquiries for bulk purchases.",
    techStack: [
      { icon: FaHtml5, techName: "Html" },
      { icon: FaCss3Alt, techName: "Css" },
      { icon: RiJavascriptFill, techName: "Javascript" },
      { icon: RiPhpFill, techName: "Php" },
      { icon: FaWordpress, techName: "Wordpress" },
    ],
    projectURL: "https://saigonuniform.com/",
    thumbnailURL: "/images/pjs/saigon.png",
  },
];

// home page skills data

export const skillsData: ISkill[] = [
  {
    icon: RiNextjsFill,
    url: "https://nextjs.org/",
  },
  {
    icon: BiLogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: RiTailwindCssFill,
    url: "https://tailwindcss.com/",
  },
  { icon: FaHtml5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: FaCss3Alt, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: SiSass, url: "https://sass-lang.com/" },
  { icon: FaBootstrap, url: "https://getbootstrap.com/" },
  {
    icon: RiJavascriptFill,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { icon: FaReact, url: "https://react.dev/" },
  { icon: TbBrandRedux, url: "https://redux.js.org/" },
  { icon: AiOutlineAntDesign, url: "https://ant.design/" },
  { icon: SiShadcnui, url: "https://shadcn.com/" },
  { icon: FaNodeJs, url: "https://nodejs.org/en" },
  { icon: SiMongodb, url: "https://www.mongodb.com/" },
  { icon: CgFigma, url: "https://www.figma.com/" },
  { icon: FaWordpress, url: "https://wordpress.com/" },
];

// home page about data
export const aboutData: IAbout = {
  thumbnailURL: "/images/minh.png",
  desc: [
    "Hi, I’m Minh, started programming back in 2025 and turned it into a hobby",
    "My focus on front-end web development, but I also regularly learn and explore back-end with a view to fullstack web in the future.",
    "Besides programming, I also enjoy listening to music, swimming and playing video games.",
  ],
};

// home page contact data
export const contactData: IContact[] = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ng%E1%BB%8Dc-minh-ph%E1%BA%A1m-854312374/",
  },
  {
    icon: FaGithub,
    url: "https://github.com/NgocMinh10122001",
  },
  {
    icon: IoMdMail,
    url: "mailto:phamngocminh10122001@gmail.com",
  },
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/minh.pham.266142/",
  },
];

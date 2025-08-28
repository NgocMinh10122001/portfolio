import { INavigation } from "@/types/header.interface";
import { IAbout, IContact, IExperience, IProject, ISkill } from "@/types/home.interface";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiReact, SiJavascript, SiNodedotjs } from "react-icons/si";
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
import { IoLogoYoutube } from "react-icons/io";

// header links

export const navLinks: INavigation[] = [
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Experience",
    url: "#experience",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

// home page experience data

export const experienceData: IExperience[] = [
  {
    company: {
      companyName: "Amazon Web Services",
      companyURL: "https://aws.amazon.com/",
    },
    role: "Software Engineer",
    duration: " July 2024 - Present",
    description: [
      "💙 Selected as one of 10 CSUF students for the prestigious Amazon Student Fellowship program",
      "💙 Selected as one of 10 CSUF students for the prestigious Amazon Student Fellowship program 2",
    ],
  },
  {
    company: {
      companyName: "Amazon Web Services 2",
      companyURL: "https://aws.amazon.com/",
    },
    role: "Software Engineer 2",
    duration: " July 2024 - Present",
    description: [
      "💙 Selected as one of 10 CSUF students for the prestigious Amazon Student Fellowship program",
      "💙 Selected as one of 10 CSUF students for the prestigious Amazon Student Fellowship program 2",
    ],
  },
  {
    company: {
      companyName: "Amazon Web Services 3",
      companyURL: "https://aws.amazon.com/",
    },
    role: "Software Engineer 3",
    duration: " July 2024 - Present",
    description: [
      "💙 Selected as one of 10 CSUF students for the prestigious Amazon Student Fellowship program",
      "💙 Selected as one of 10 CSUF students for the prestigious Amazon Student Fellowship program 2",
    ],
  },
];

// home page projects data

export const projectsData: IProject[] = [
  {
    name: "Ziohair 2025",
    description:
      "ACM at CSUF 1-week virtual website hackathon for Spring 2024, animation built using GSAP",
    techStack: [
      { icon: RiNextjsFill, techName: "NextJS" },
      { icon: BiLogoTypescript, techName: "TypeScript" },
      { icon: RiTailwindCssFill, techName: "TailwindCSS" },
    ],
    projectURL: "#",
    thumbnailURL: "/images/ziohair_p.jpeg",
  },
  {
    name: "Another Project",
    description: "Another amazing project description",
    techStack: [
      { icon: SiReact, techName: "React" },
      { icon: SiJavascript, techName: "JavaScript" },
      { icon: SiNodedotjs, techName: "Node.js" },
    ],
    projectURL: "#",
    thumbnailURL: "/images/another_project.jpeg",
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
    }
    ,
    {icon: FaHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {icon: FaCss3Alt,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {icon: SiSass,
    url: "https://sass-lang.com/"
    },
    {icon: FaBootstrap,
    url: "https://getbootstrap.com/"
    },
    {icon: RiJavascriptFill,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {icon: FaReact,
    url: "https://react.dev/"
    },
    {icon: TbBrandRedux,
    url: "https://redux.js.org/"
    },
    {icon: AiOutlineAntDesign,
    url: "https://ant.design/"
    },
    {icon: SiShadcnui,
    url: "https://shadcn.com/"
    },
    {icon: FaNodeJs,
    url: "https://nodejs.org/en"
    },
    {icon: SiMongodb,
    url: "https://www.mongodb.com/"
    },
    {icon: CgFigma,
    url: "https://www.figma.com/"
    },
    {icon: FaWordpress,
    url: "https://wordpress.com/"}
]

// home page about data
export const aboutData: IAbout = 
    {
    thumbnailURL: "/images/_memoji.png",
    desc : [
        "I’m from Vietnam, started programming back in 2020 and turned it into a hobby",
        "My focus is fullstack web development, but I also create and explore other fields such as Data Science, Machine Learning",
        "Besides from programming, I also do graphic design, listen to music, go to the gym, and create content for my Youtube channel"
    ]
    }
    
// home page contact data
    export const contactData: IContact[] = [
    {
    icon: FaLinkedin,
    url: "https://nextjs.org/",
    },
{
    icon: FaGithub,
    url: "https://nextjs.org/",
    },
    {
    icon: IoMdMail,
    url: "https://nextjs.org/",
    },
    {
    icon: IoLogoYoutube,
    url: "https://nextjs.org/",
    },
]
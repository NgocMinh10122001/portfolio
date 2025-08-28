import { IconType } from "react-icons";

export interface IExperience {
   company :{
    companyName:string;
    companyURL:string;
   };
    role :string;
    duration :string;
    description : string[];
}

export interface IProject {
    name: string;
    description: string;
    techStack: { icon: IconType; techName: string }[];
    projectURL: string;
    thumbnailURL?: string;
}

export interface ISkill {
   icon: IconType;
   url: string;
}

export interface IAbout {
   thumbnailURL: string;
   desc : string[]
}

export interface IContact {
   icon: IconType;
   url: string;
}

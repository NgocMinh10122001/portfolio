import About from "./_components/About";
import Banner from "./_components/Banner";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Seperator from "./_components/Seperator";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import AOSInitializer from "./_components/AOSInit";
import {
  aboutData,
  contactData,
  experienceData,
  projectsData,
  skillsData,
} from "@/fake_data/mock";

export default function Home() {
  return (
    <main>
      <AOSInitializer />
      <Banner
        name="Ngoc Minh"
        position="Frontend Developer"
        resumeURL="https://github.com/NgocMinh10122001"
      />
      <Seperator />
      <Experience title="Experience" experiences={experienceData} />
      <Seperator />
      <Projects title="Projects" projects={projectsData} githubURL="https://github.com/NgocMinh10122001?tab=repositories" />
      <Seperator />
      <Skills
        title="Skills"
        skills={skillsData}
      />
      <Seperator />
      <About title="About" about={aboutData} />
      <Seperator />
      <Contact title="Contact" contact={contactData} />
    </main>
  );
}

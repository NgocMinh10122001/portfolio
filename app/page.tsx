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
        position="Frontend Web Developer"
        resumeURL="https://www.topcv.vn/documents/view/eyJpdiI6InJDc3UxRnVRT2pOUTR4aEFFVWVONXc9PSIsInZhbHVlIjoiUnNxL0d2cUR4UFZDdTM4ZEt2RUlzdHlTU3hPSXhrbXdIVGQvc2NBYldod3FoM3JhVFNOQzNtcFAvOFlRUHVzWHpFeHZlMmUwY2dlT1VWWXdSQXFUTXpsUTNERXM5eld0VnJvR1ZYelJOK082TEtmSGcranZQZkZBS0E4N1c2WlYiLCJtYWMiOiI0MWIxMTljZjUwZTY0MGIwYWNkM2ZjZTcwYjA0Y2M0ZDMyNGY3YzQ2YjI3OTBmNDlkNDFhMTQ4YTNkYzhhODM1IiwidGFnIjoiIn0="
      />
      <Seperator />
      <Experience title="Experience" experiences={experienceData} />
      <Seperator />
      <Projects title="Projects" projects={projectsData} githubURL="https://github.com/NgocMinh10122001" />
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

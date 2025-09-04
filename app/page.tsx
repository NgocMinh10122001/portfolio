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
        resumeURL="https://www.topcv.vn/documents/view/eyJpdiI6Ik03Q2pyMVVBd0Ixamk5enRIQkxCc1E9PSIsInZhbHVlIjoiMmpZU3U0K1U0MGxBMVE1eVJJbXdhbnVyRDNoNUZUTlYzMFhBclJXMmJ2c3ZvRDAwbExRSTB0ekJPRFhtcDBUT3Q2dER5MHF0cnhMTlRpODhyRWVkRmJKRHpwN1cvQTA1UVc4Yitia1AzRmUwLzIxU3J5RERMQXN1cVVMM05IY0giLCJtYWMiOiI1OTIzOWJhNGY3Mzc2MGZhMzE5NTlhOTY4ZDVhMDU2ZWRmNDE2Y2U2ZTE2YWM2Nzc2NDZiYjRkNzA2ZGEyNzIwIiwidGFnIjoiIn0="
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

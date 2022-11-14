import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  About,
  Contact,
  Header,
  Hero,
  Projects,
  Skills,
  WorkWxperience,
} from "../components";
import { PageInfo, Experience, Skill, Project, Social } from "../typing";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProject } from "../utils/fetchProject";
import { fetchSkill } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocial";
type Props = {
  pageInfo: PageInfo[];
  experience: Experience[];
  skill: Skill[];
  project: Project[];
  social: Social[];
};
export default function Home({experience,pageInfo,project,social,skill}: Props) {
    return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar scrollbar-thumb-[#f7ab01]/90 scrollbar-track-gray-400/20 scroll-smooth">
      <Head>
        <title>Mustak sk</title>
        <meta
          name="description"
          content="That is my personal portfolio web site..it was created by me😃"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header social={social}/>
      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section className="snap-center" id="about">
        <About pageInfo={pageInfo}/>
      </section>
      <section className="snap-center" id="experience">
        <WorkWxperience experience={experience}/>
      </section>
      <section className="snap-center" id="skills">
        <Skills skills={skill}/>
      </section>
      <section className="snap-center" id="projects">
        <Projects projects={project}/>
      </section>
      <section className="snap-center" id="contact">
        <Contact pageInfo={pageInfo}/>
      </section>
      <Link href="#hero" passHref>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );

}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const experience: Experience[] = await fetchExperience();
  const pageInfo:PageInfo[] = await fetchPageInfo();
  const project: Project[] = await fetchProject();
  const skill: Skill[] = await fetchSkill();
  const social: Social[] = await fetchSocial();
  return {
    props: {
      experience,pageInfo,project,social,skill
    },
  };
};

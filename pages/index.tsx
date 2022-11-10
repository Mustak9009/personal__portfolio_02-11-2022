import Head from "next/head";
import Link from "next/link";
import { About, Contact, Header, Hero, Projects, Skills, WorkWxperience } from "../components";

export default function Home() {
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
      <Header />
      <section className="snap-start" id="hero">
        <Hero />
      </section>
      <section className="snap-center" id="about">
        <About/>
      </section>
      <section className="snap-center" id="experience">
        <WorkWxperience/>
      </section>
      <section className="snap-center" id="skills">
        <Skills/>
      </section>
      <section className="snap-center" id="projects">
        <Projects/>
      </section>
      <section className="snap-center" id="contact">
        <Contact/>
      </section>
      <Link href='#hero' passHref>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        </div>
      </footer>
      </Link>
    </div>
  );
}

import Head from "next/head";
import { About, Header, Hero } from "../components";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Mustak sk</title>
        <meta
          name="description"
          content="That is my personal portfolio web site..it was created by me😃"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-center" id="about">
        <About/>
      </section>
    </div>
  );
}

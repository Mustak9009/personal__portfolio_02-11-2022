import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="flex flex-col h-screen relative text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="https://cdn.sanity.io/images/jax6vlq7/production/d142d5d58d21c984dfc99e401514d2b7de121af6-2400x2419.jpg"
        alt="Mustak sk"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />
      <section className="px-0 md:px-10">
        <h4 className="text-4xl font-semibold mb-4">
          Here is a <span className="text-[#f7ab0a]">little</span> abut me...
        </h4>
        <p className="text-md">
          I'm Mustak. Here's a little bit about me ...!{" "}
          <span className="text-[#f7ab0a]">
            With more than 2+ years of experience, I'm a Front-end web developer
            and a graphic web designer.
          </span>
          I started my developer journey back in 2020 up till now. As a
          front-end web developer, I've worked with startups and large
          corporations to help build & scale their companies. Along the journey,
          I create so many REAL-WORLD projects that help end users and
          corporations.
        </p>
      </section>
    </div>
  );
}

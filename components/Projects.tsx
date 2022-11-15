import React from "react";
import { motion } from "framer-motion";
import {Project} from '../typing';
import { urlFor } from "../sanity";
import {useRouter} from 'next/router';
interface Props{
  projects:Project[]
}
export default function Projects({projects}:Props) {
  const route = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center justify-evenly  items-center max-w-full mx-auto  z-0 snap-center h-screen md:flex-row  "
    >
      <h3 className="absolute top-32 sm:top-20 tracking-[20px] uppercase text-gray-500 text-xl sm:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-thumb-[#f7ab01]/70 scrollbar-track-gray-400/20">
        {projects.map((project, index) => (
          <div
            className="w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 cursor-pointer"
            key={index}
            onClick={()=>route.push(project.linkToBuild)}
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()!}
              alt="project"
              className="xl:w-1/2 w-full rounded-xl"
            />
            <div className="space-y-10 px-0 md:px-10 md:max-w-6xl  max-w-full">
              <h4 className="md:text-4xl font-semibold text-center text-2xl">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {index + 1} of {projects.length}:{" "}
                </span>
                {project.title}
              </h4>
              <p className="md:text-lg text-center md:text-left text-sm">
               {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

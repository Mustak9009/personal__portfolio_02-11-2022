import React from "react";
import { motion } from "framer-motion";
export default function ExperiencedCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity cursor-pointer duration-200 overflow-hidden">
      <motion.img
        src="https://www.upwork.com/favicon.ico"
        alt="upwork"
        initial={{
          y: -70,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Freelancing</h4>
        <p className="font-bold text-2xl mt-1 ">Upwork</p>
        <div className="flex space-x-2 my-2">
          <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" alt="javaScript" className="w-10 h-10 rounded-full"/>
          <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" alt="javaScript" className="w-10 h-10 rounded-full"/>
          <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" alt="javaScript" className="w-10 h-10 rounded-full"/>
        
        </div>
        <p className="uppercase py-5 text-gray-300">Started work...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summery point</li>
          <li>Summery point</li>
          <li>Summery point</li>
          <li>Summery point</li>
        </ul>
      </div>
    </article>
  );
}

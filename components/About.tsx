import React from "react";
import { motion } from "framer-motion";
import {PageInfo} from '../typing';
import { urlFor } from "../sanity";
interface Props{
    pageInfo:PageInfo[]
}
export default function About({pageInfo}:Props) {
  console.log(pageInfo);
  return (
    <div className="flex flex-col h-screen relative text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src={urlFor(pageInfo[0]?.profilePic).url()!}
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
         {pageInfo[0].backgroundInformation}
        </p>
      </section>
    </div>
  );
}

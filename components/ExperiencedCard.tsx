import React from "react";
import { motion } from "framer-motion";
import {Experience} from '../typing';
import {urlFor} from '../sanity';
import Link from 'next/link';
type Props = {
  data:Experience
}
export default function ExperiencedCard({data}:Props) {
  console.log(data)
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity cursor-pointer duration-200 overflow-hidden">
      <motion.img
        src={urlFor(data.companyImage).url()!}
        alt={data.jobTitle}
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
          className='w-1/2 rounded-md '
      />
      <div className="px-0 md:px-10">
     <Link href={data.url} passHref>
     <h4 className="text-4xl font-light">{data.jobTitle}</h4>
     </Link>
        <p className="font-bold text-xl mt-1 sm:text-2xl">Tecknowledge</p>
        <div className="flex space-x-2 my-2 flex-wrap">
          {data.technologies.map((data,i)=>(
            <img src={urlFor(data.image).url()!} alt={data.title} key={i} className="w-10 h-10 rounded-full object-cover"/> 
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(data.dateStart).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {data.points.map((point,i)=>(
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

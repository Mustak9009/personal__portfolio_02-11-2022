import React from "react";
import ExperiencedCard from "./ExperiencedCard";
import {Experience} from '../typing';
interface Props{
  experience:Experience[]
}
export default function WorkExperience({experience}:Props) {
  return (
    <div className="h-screen flex relative overflow-hidden  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-32 md:top-20 tracking-[20px] uppercase text-gray-500 text-xl sm:text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar scrollbar-thumb-[#f7ab01]/90 scrollbar-track-gray-400/20 mt-32">
        {experience.map((data)=>(
          <ExperiencedCard key={data._id} data={data}/>
        ))}
      </div>
    </div>
  );
}

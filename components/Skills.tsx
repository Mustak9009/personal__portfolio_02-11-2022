import React from "react";
import Skill from "./Skill";
export default function Skills() {
  return (
    <div className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl mb-16">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover hover a skill for currency proficiency</h3>
    <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/> 
        <Skill directionLeft={true}/>   
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
    </div>
   </div>
  );
}

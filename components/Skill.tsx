import React from 'react';
import {motion} from 'framer-motion';
import {Skill as SkillType} from '../typing';
import { urlFor } from '../sanity';
interface Props{
    directionLeft?:boolean;
    skill:SkillType;
}
export default function Skill({directionLeft,skill}:Props) {
    
    return (
    <div className='group relative  flex cursor-pointer flex-wrap'>
        <motion.img 
            initial={{
                x:directionLeft?-200:200,
                opacity:0
            }}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            src={urlFor(skill.image).url()!}
            alt={skill.title}
            className='rounded-full hidden md:block border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
         <motion.img 
            initial={{
                
                opacity:0
            }}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            src={urlFor(skill.image).url()!}
            alt={skill.title}
            className='rounded-full border block md:hidden border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out '
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl md:text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

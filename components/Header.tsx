import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import {Social} from '../typing';
interface Props{
  social:Social[]
}
export default function Header({social}:Props) {
  
  return (
    <header className="flex justify-between sticky top-0 items-start max-w-7xl mx-auto p-5 z-20 xl:items-center">
     <motion.div initial={{ x: -500, opacity: 0, scale: 0.5,}} animate={{ x: 0, opacity: 1, scale: 1,}} className="flex items-center justify-center">
        {social.map((data)=>(
          <SocialIcon
          url={data.url}
          bgColor="transparent"
          fgColor="gray"
          key={data._id}
          />
        ))}
      </motion.div>
     <Link href='#contact'>
     <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} className="flex justify-center items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4 text-gray-400 mt-3 md:mt-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
     </Link>
    </header>
  );
}

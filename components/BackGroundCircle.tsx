import React from 'react'
import {motion} from 'framer-motion';
export default function BackGroundCircle() {
 return (
    <motion.div initial={{opacity:0}} animate={{scale:[1,2,2,3,1],opacity:[0.1,0.2,0.4,0.8,1,1]}} transition={{duration:2}} className='relative flex justify-center items-center '>
        <div className='border border-[#333333] w-[200px] h-[200px] rounded-full animate-ping absolute '/>
        <div className='border border-[#333333] w-[300px] h-[300px] rounded-full absolute '/>
        <div className='border border-[#f7ab0a] w-[500px] h-[500px] rounded-full absolute opacity-20 animate-ping'/>
        <div className='border border-[#333333] opacity-20 animate-pulse w-[650px] h-[650px] rounded-full  absolute '/>
        
    </motion.div>
  )
}

import React from 'react'

export default function BackGroundCircle() {
 return (
    <div className='relative flex justify-center items-center border-2 border-green-400 h-screen'>
        <div className='border border-red-400 w-[200px] h-[200px] rounded-full animate-ping absolute'/>
        <div className='border border-red-400 w-[300px] h-[300px] rounded-full absolute'/>
        <div className='border border-red-400 w-[500px] h-[500px] rounded-full absolute'/>
        <div className='border border-red-400 opacity-20 animate-pulse w-[650px] h-[650px] rounded-full mx-auto animate-ping absolute'/>
        <div/>
    </div>
  )
}

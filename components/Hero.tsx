import React from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import BackGroundCircle from './BackGroundCircle';
export default function Hero() {
    const [text,count] = useTypewriter({
        words:['My name is mustak sk','I am a Front end developer'],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div>
        <BackGroundCircle/>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='orange'/>
        </h1>
    </div>
  )
}

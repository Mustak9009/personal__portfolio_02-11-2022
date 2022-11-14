import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackGroundCircle from "./BackGroundCircle";
import Image from "next/image";
import Link from "next/link";
import {PageInfo} from '../typing';
import {urlFor} from '../sanity';
type Props = {
   pageInfo:PageInfo[]
}
export default function Hero({pageInfo}:Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo[0].name} 😃`, `${pageInfo[0].profession}`],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8 overflow-hidden">
      <BackGroundCircle />
      <Image
        src={urlFor(pageInfo[0]?.heroImage).url()!}
        alt="Mustak sk"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-gray-500 uppercase tracking-[15px]  text-center ">
        {pageInfo[0].role}
      </h2>
      <h1 className="text-4xl font-semibold lg:text-5xl text-center">
        <span className="text-orange-400/80">{text}</span>
        <Cursor cursorColor="orange" />
      </h1>
      <div className="z-20">
        <Link href={"#about"}>
          <button className="heroButton">About</button>
        </Link>
        <Link href={"#experience"}>
          <button className="heroButton">Experience</button>
        </Link>
        <Link href={"#skills"}>
          <button className="heroButton">Skills</button>
        </Link>
        <Link href={"#projects"}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

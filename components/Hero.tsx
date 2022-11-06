import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackGroundCircle from "./BackGroundCircle";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Mustak 😃", "A Front-end web developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8 overflow-hidden">
      <BackGroundCircle />
      <Image
        src={
          "https://cdn.sanity.io/images/jax6vlq7/production/d142d5d58d21c984dfc99e401514d2b7de121af6-2400x2419.jpg"
        }
        alt="Mustak sk"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-gray-500 uppercase tracking-[15px]  text-center ">
        software engineer
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

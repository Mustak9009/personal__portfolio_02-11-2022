import React from "react";

export default function Contact() {
  return (
    <div className="h-screen relative flex flex-col text-center  md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Contact
      </h3>
      <div>
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk</span>
        </h4>
      </div>
    </div>
  );
}

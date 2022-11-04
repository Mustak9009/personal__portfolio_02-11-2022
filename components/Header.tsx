import React from "react";
import { SocialIcon } from "react-social-icons";
export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex items-center justify-center">
        <SocialIcon
          url="https://www.youtube.com/channel/UCjIG4ZXghHge_jcu7BPThtQ"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/mustak-sk-8b467b211/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://in.pinterest.com/MustakSk099/"
          bgColor="transparent"
          fgColor="gray"
        />
         <SocialIcon
          url="https://www.instagram.com/mustak_sk_official/"
          bgColor="transparent"
          fgColor="gray"
        />
      </div>
      <div className="flex justify-center items-center">
        <SocialIcon
          network="email"
          bgColor="transparent"
          fgColor="gray"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </div>
    </header>
  );
}

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between sticky top-0 items-start max-w-7xl mx-auto p-5 z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex items-center justify-center"
      >
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
      </motion.div>
     <Link href='#contact'>
     <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className="flex justify-center items-center"
      >
        <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
     </Link>
    </header>
  );
}

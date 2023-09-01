import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-16  bg-dark text-light dark:border-2  dark:border-solid dark:border-light
    text-2xl font-bold"
        whileHover={{
          scale: 1.5,
        }}
      >
        IEK
      </MotionLink>
    </div>
  );
};

export default Logo;

import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { Nextdotjs } from "./Icons";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Built with
          <motion.a
            target={"_blank"}
            className="w-6 mx-3 dark:fill-light"
            href="https://nextjs.org/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next.js by Vercel"
          >
            <Nextdotjs />
          </motion.a>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/ismail-el-khattab/"
            target="_blank"
            className="underline underline-offset-2 hover:text-primary"
          >
            Ismail El Khattab
          </Link>
        </div>

        <Link
          href="/EN_CV_Ismail_El_Khattab.pdf"
          target="_blank"
          className="underline underline-offset-2 hover:text-primary"
        >
          Download Resume
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

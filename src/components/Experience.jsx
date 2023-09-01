import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            {company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl xs:text-4xl md:mt-32">
        Education & Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* <Details
            position="IT Help Desk Agent"
            company="@ Arisoft inc"
            companyLink="https://google.com"
            time="2021"
            address="Montréal, QC (remote)"
            work="Leveraged a combination of test scripts, personal expertise, and probing questions to diagnose and evaluate user
problems, resulting in a high rate of successful issue resolution. Actively participated in weekly team meetings to enhance product and service knowledge, share best practices,
and collaborate on issue resolution strategies, resulting in an increased ability to resolve technical issues."
          /> */}

          <Details
            position="Freelance web developer"
            company=""
            companyLink="https://facebook.com"
            time="2021 - Present"
            address="Montréal, QC"
            work="Utilized the company's knowledge base to diagnose and resolve printer-related problems efficiently. Assisted customers in resolving technical challenges, ensuring smooth printer functionality and user satisfaction."
          />

          <Details
            position="Bachelor Of Science In Software Development"
            company=""
            companyLink="https://facebook.com"
            time="2023"
            address="Western Governors University"
            work="Utilized the company's knowledge base to diagnose and resolve printer-related problems efficiently. Assisted customers in resolving technical challenges, ensuring smooth printer functionality and user satisfaction."
          />

          <Details
            position="Software Developer intern"
            company="@ Aliaasoft"
            companyLink="https://amazon.com"
            time="2023"
            address="Montréal, QC"
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
        </ul>
      </div>
    </>
  );
};

export default Experience;

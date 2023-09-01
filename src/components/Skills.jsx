import React, { useRef } from "react";
import Spring from "../../public/images/skills/spring.png";
import Java from "../../public/images/skills/java.png";
import Reactjs from "../../public/images/skills/react.png";
import Nextdotjspng from "../../public/images/skills/nextjs.png";
import Nextdotjssvg from "../../public/images/svgs/nextdotjs.svg";
import { Nextdotjs } from "./Icons";
import Tailwind from "../../public/images/skills/tailwind.png";
import AWS from "../../public/images/skills/aws.png";
import Git from "../../public/images/skills/Git.png";
import SQL from "../../public/images/skills/sql.png";
import CSS from "../../public/images/skills/css.png";
import HTML from "../../public/images/skills/html.png";
import JS from "../../public/images/skills/javascript.png";
import TS from "../../public/images/skills/typescript.png";
import Image from "next/image";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const Skill = ({ name, img }) => {
  return (
    <div className="rounded-xl border-solid border-2 border-dark dark:border-light dark:bg-dark p-6 flex text-primary-dark-1 flex-col items-center justify-center gap-3 max-w-[200px] w-full bg-primary-gray-2 cursor-pointer hover:-translate-y-1 duration-200 hover:shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="m-auto">
          <Image src={img} width="64" height="64" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center pt-4">
          <h3 className="text-center font-semibold text-lg">{name}</h3>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  // function isDarkModeEnabled() {
  //   const computedStyles = getComputedStyle(document.querySelector("main"));
  //   return computedStyles.backgroundColor === "rgb(27, 27, 27)";
  // }

  // console.log(isDarkModeEnabled());
  const [mode] = useThemeSwitch();
  const isDarkModeEnabled = mode === "dark";
  console.log(isDarkModeEnabled);

  // if (isDarkModeEnabled()) {
  //   // Dark mode is enabled
  //   console.log("Dark mode is enabled.");
  // } else {
  //   // Dark mode is not enabled
  //   console.log("Dark mode is not enabled.");
  // }

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl xs:text-4xl md:mt-32">
        Skills
      </h2>
      <div className="flex flex-wrap gap-5 justify-center ">
        <Skill name="Java" img={Java} />
        <Skill name="Spring" img={Spring} />
        <Skill name="SQL" img={SQL} />
        <Skill name="Javascript" img={JS} />
        <Skill name="Typescript" img={TS} />
        <Skill name="React" img={Reactjs} />
        <Skill name="Next.js" img={Nextdotjssvg} />
        <Skill name="HTML" img={HTML} />
        <Skill name="CSS" img={CSS} />
        <Skill name="Tailwind" img={Tailwind} />
        <Skill name="AWS" img={AWS} />
        <Skill name="Git" img={Git} />
      </div>
    </>
  );
};

export default Skills;

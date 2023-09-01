import { motion } from "framer-motion";
import React, { useRef } from "react";
import OracleBadge from "../../public/images/certifications/OracleAssociatesBadge.png";
import AWSBadge from "../../public/images/certifications/AWS_CLF-C01.png";
import ITILv4Badge from "../../public/images/certifications/ITILv4.png";
import ComptiaBadge from "../../public/images/certifications/ComptiaA+.png";

import Image from "next/image";

const Certificate = ({ name, img }) => {
  return (
    <div className="rounded-xl border-solid border-2 border-dark dark:border-light dark:bg-dark p-6 flex text-primary-dark-1 flex-col items-center justify-center gap-3 max-w-[200px] w-full bg-primary-gray-2 cursor-pointer hover:-translate-y-1 duration-200 hover:shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="m-auto">
          <Image src={img} width="auto" height="72" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center pt-4">
          <h3 className="text-center font-semibold text-lg">{name}</h3>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl xs:text-4xl md:mt-32">
        Certifications
      </h2>
      <div className="flex flex-wrap gap-5 justify-center ">
        <Certificate name="Oracle Java 8 SE" img={OracleBadge} />
        <Certificate name="AWS cloud practitioner" img={AWSBadge} />
        <Certificate name="ITILv4" img={ITILv4Badge} />
        <Certificate name="Comptia A+" img={ComptiaBadge} />
      </div>
    </>
  );
};

export default Certifications;

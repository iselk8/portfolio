import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profile from "../../public/images/profile/memoji-waving.png";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";

export default function About() {
  return (
    <>
      <Head>
        <title>{`Ismail El Khattab&apos;s portfolio | About`}</title>
        <meta name="description" content="Learn more about myself." />
      </Head>
      <TransitionEffect />

      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="items-center grid w-full grid-cols-2 gap-16 sm:gap-8">
            <div
              className="col-span-1 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                {`Hi, I&apos;m <strong>Ismail</strong>, a recent graduate with a
                bachelor&apos;s degree in Software Development. I&apos;m all
                about creating awesome web applications! <strong>Java</strong>{" "}
                and the <strong>Spring</strong> framework are my go-to for
                building cool REST APIs and web apps.`}
              </p>
              <p className="my-4 font-medium">
                {`When it comes to user interfaces, I&apos;m a big fan of{" "}
                <strong>React</strong> and <strong>Next.js</strong> &#x2d; they
                make everything so smooth and interactive! These days, I&apos;m
                using <strong>Tailwind CSS</strong> to style my apps, but
                I&apos;ve also dabbled with <strong>Bootstrap</strong> in the
                past.`}
              </p>
              <p className="my-4 font-medium">
                {`When it&apos;s time to deploy, I love using <strong>AWS</strong>{" "}
                for its reliability and scalability. But I&apos;m an adventurous
                dev, so I enjoy exploring other lesser-known cloud services too.`}
              </p>
              <p className="my-4 font-medium">
                {`I&apos;m constantly learning and staying up-to-date with the
                latest tech trends. I&apos;ve even picked up a few well-known
                industry certifications along the way!`}
              </p>
              <p className="my-4 font-medium">
                {`Whether I&apos;m working on a website, mobile app, or other
                software product, my unwavering dedication shines through in my
                commitment to delivering top-notch results that truly cater to
                the needs of stakeholders.`}
              </p>
              <p className="font-medium">
                {`I&apos;m currently on the lookout for exciting new career
                opportunities! Let&apos;s build some cool stuff together! 🚀`}
              </p>
            </div>
            <div
              className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Ismail Waving"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
          <Skills />
          <Certifications />
          <Experience />
        </Layout>
      </main>
    </>
  );
}

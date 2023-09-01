import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/memoji-laptop.png";
import TransitionEffect from "@/components/TransitionEffect";
import UnderlinedAnimatedText from "@/components/UnderlinedAnimatedText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ismail El Khattab&apos;s portfolio | Home</title>
        <meta
          name="description"
          content="Explore my Next.js portfolio and 
        discover the latest projects I have worked on."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Ismail El Khattab memoji"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center mt-2">
              <AnimatedText
                text="Hey 👋🏼"
                className="font-medium normal-case !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="Nice to meet you!"
                className="font-normal normal-case !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              {/* <AnimatedText
                text="I'm Ismail El Khattab."
                className="font-bold normal-case !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              /> */}
              <UnderlinedAnimatedText
                text="I'm"
                underlined="Ismail El Khattab."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I&apos;m a junior software engineer always eager to learn and
                level up my skills. I love turning cool ideas into stuff people
                can actually use. If you&apos;re curious about me, want my
                resume, or just feel like checking out the cool stuff I&apos;ve
                been working on, you&apos;re in the right place!
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/EN_CV_Ismail_El_Khattab.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="/about"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base hover:text-primary"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}

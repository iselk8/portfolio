import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import picture from "../../public/images/profile/memoji-phone.png";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>{`Ismail El Khattab&apos;s portfolio | Contact`}</title>
        <meta
          name="description"
          content="Get in touch with me to discuss your next project idea."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Don't Be Shy, Say Hi!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="items-center grid w-full grid-cols-2 gap-16 sm:gap-8">
            <div
              className="col-span-1 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="!text-6xl !leading-tight mb-4 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-2 font-bold uppercase text-dark dark:text-light">
                Ismail <br /> El Khattab
              </h2>

              <h3 className="py-2 font-semibold !text-4xl !leading-tight lg:!text-3xl sm:!text-2xl xs:!text-xl sm:mb-8">
                Junior Software Engineer
              </h3>
              <p className="py-4">
                I am available for freelance or full-time positions. Contact me
                and let&apos;s talk!
              </p>

              <p className="py-2">
                <span className="font-semibold">E-mail: </span>
                <Link href="mailto:ielkhat@wgu.edu">
                  <span className="underline hover:text-primary cursor-pointer">
                    ielkhat@wgu.edu
                  </span>
                </Link>
              </p>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
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
                src={picture}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

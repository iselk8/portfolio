import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/memoji-laptop.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout classname="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex items-start justify-between w-full md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Ismail El Khattab profile picture"
                className="w-full h-auto"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

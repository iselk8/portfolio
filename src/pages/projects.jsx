import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const projects = () => {
  return (
    <>
      <Head>
        <title>Ismail El Khattab's portfolio | Projects</title>
        <meta
          name="description"
          content="Discover the latest web applications I have worked on."
        />
      </Head>

      <TransitionEffect />
    </>
  );
};

export default projects;
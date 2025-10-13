// pages/index.js
import Head from "next/head";
import Menu from "@/components/Menu";
import Landing from "@/section/Landing";
import { useState, useEffect, useRef } from "react";
import About from "@/section/About";
import ClickSpark from "@/components/ClickSpark";
import Projects from "@/section/Projects";
import Skills from "@/section/skills";
import Contact from "@/section/Contact";
// Import Spline dynamically to avoid SSR issues

export default function Home() {
  return (
    <div className="w-full  text-gray-300 bg-gray-900">
      <Head>
        <title>Achraf LAMARI</title>
        <meta name="description" content="3D scene using Spline in Next.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <main className="w-full  bg-gray-900">
          <Menu />
          <Landing />
          <About />
          <Projects/>
          <Skills/>
          <Contact/>
        </main>
      </ClickSpark>
    </div>
  );
}

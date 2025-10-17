// pages/index.js
import Head from "next/head";
import Menu from "@/components/Menu";
import Landing from "@/section/Landing";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import ClickSpark from "@/components/ClickSpark";

// Lazy load heavy components for better initial load
const About = dynamic(() => import("@/section/About"), { ssr: true });
const Projects = dynamic(() => import("@/section/Projects"), { ssr: true });
const Skills = dynamic(() => import("@/section/skills"), { 
  ssr: false,
  loading: () => <div className="w-full min-h-screen bg-gray-900" />
});
const Contact = dynamic(() => import("@/section/Contact"), { ssr: true });

export default function Home() {
  return (
    <div className="w-full  text-gray-300 bg-gray-900">
      <Head>
        <title>Achraf LAMARI - Software Developer</title>
        <meta name="description" content="Portfolio of Achraf LAMARI - Software Developer specializing in Next.js, React, and modern web technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#111827" />
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

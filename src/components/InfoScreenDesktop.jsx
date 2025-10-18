"use client";

import { useState, useEffect } from 'react';
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

export default function InfoScreenDesktop({ onBack, initialSection = 'about' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = {
    about: {
      title: "About me",
      icon: <FaUser className="text-3xl" />,
      content: [
        {
          company: "About",
          period: "",
          role: "Software Developer",
          description: "As a proficient Software Developer 💻, I look forward to the challenges that high-quality, performant applications present. I leverage Next.js, React.js, and Tailwind CSS ✨ to create sleek and responsive UI experiences. I design scalable and performant backends with Spring Boot and Express.js ⚡. My passion for mobile development involves building mobile apps with React Native 📱. Besides writing code, I'm an enthusiastic robotics nerd 🤖 with a keen interest in software and automation innovation."
        }
      ]
    },
    skills: {
      title: "My Skills",
      icon: <FaCode className="text-3xl" />,
      content: [
        { name: "Next.js", icon: "/nextjs.webp" },
        { name: "React.js", icon: "/reactjs.png" },
        { name: "TypeScript", icon: "/typescript.png" },
        { name: "JavaScript", icon: "/JavaScript-logo.png" },
        { name: "Tailwind CSS", icon: "/tailwind-css-logo-rounded-free-png.webp" },
        { name: "Three.js", icon: "/threejs.jpg" },
        { name: "C++", icon: "/c++.png" },
        { name: "Qt Creator", icon: "/Qt-logo.webp" },
        { name: "Spring Boot", icon: "/logo-java-spring-boot-cloud_.jpg" },
        { name: "Symfony", icon: "/symfony.png" },
        { name: "Python", icon: "/python.png" },
        { name: "Google Gemini AI", icon: "/gemini.png" }
      ]
    },
    projects: {
      title: "My Projects",
      icon: <FaBriefcase className="text-3xl" />,
      content: [
        {
          title: "SAFETY AI - Workplace Safety Solution",
          description: "AI-powered web application for workplace safety management with real-time PPE detection, AI-generated safety notifications, and analytics dashboard.",
          tags: ["Next.js", "Gemini AI", "Tailwind CSS"],
          liveUrl: "https://safetyai.vercel.app",
          githubUrl: "https://github.com/achraaflaamari/SafetyAi"
        },
        {
          title: "Cyber Security Card Game",
          description: "A digital duel game where you lead attacks while protecting your own server. Transforming cybersecurity concepts into an interactive adventure.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          liveUrl: "https://lnkd.in/efghhmht",
          githubUrl: "https://github.com/achraaflaamari/Cyber_Sec_Card_Game"
        },
        {
          title: "Push Tiles - Multiplayer Puzzle Game",
          description: "Real-time multiplayer puzzle game with innovative push and tile exchange mechanics. Built with Next.js 15, React 19, Three.js and WebSocket.",
          tags: ["Next.js", "React", "Three.js", "WebSocket"],
          liveUrl: "#",
          githubUrl: "https://github.com/achraaflaamari/push_tiles"
        },
        {
          title: "Styli - HTML/CSS ⇄ TailwindCSS Converter",
          description: "Web application that converts classic HTML/CSS code to HTML using TailwindCSS and vice versa. Uses Google GenAI for intelligent style conversion.",
          tags: ["Next.js", "Monaco Editor", "Google GenAI"],
          liveUrl: "#",
          githubUrl: "https://github.com/achraaflaamari/Styli"
        },
        {
          title: "Club CPU Resource Management",
          description: "Material resource management application for Club CPU. Allows inventory management, equipment allocation to members, and tracking of loans and returns.",
          tags: ["C++", "Qt Creator"],
          liveUrl: "#",
          githubUrl: "https://github.com/achraaflaamari/CPU_Materiel"
        },
        {
          title: "PFE Manager",
          description: "Complete management application for Final Year Projects. Facilitates tracking of students, teachers, supervisors, juries, and defense planning.",
          tags: ["Java", "Swing", "JDBC"],
          liveUrl: "#",
          githubUrl: "https://github.com/achraaflaamari/PFE-Manager"
        },
        {
          title: "COVID-19 Death Control App",
          description: "Desktop application for managing personal and medical data to monitor COVID-19 cases and identify high-risk individuals.",
          tags: ["Python", "PyQt5"],
          liveUrl: "#",
          githubUrl: "https://github.com/achraaflaamari/COVID-19-Control-App"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      icon: <FaEnvelope className="text-3xl" />,
      content: {
        email: "achraaflaamari@gmail.com",
        location: "Monastir, Tunisia",
        social: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/achraaflaamari/" },
          { name: "GitHub", url: "https://github.com/achraaflaamari" }
        ]
      }
    }
  };

  const navButtons = [
    { id: 'about', label: 'About me', icon: <FaUser className="text-2xl" /> },
    { id: 'skills', label: 'Skills', icon: <FaCode className="text-2xl" /> },
    { id: 'projects', label: 'Projects', icon: <FaBriefcase className="text-2xl" /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope className="text-2xl" /> }
  ];

  const renderContent = () => {
    const section = sections[activeSection];
    
    if (!section) {
      console.error('Section not found:', activeSection);
      return null;
    }

    if (activeSection === 'about') {
      return section.content.map((exp, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 ease-out hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)] hover:-translate-y-2 hover:scale-[1.01] border border-purple-100 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl text-slate-900 font-bold mb-2 leading-tight">{exp.company}</h3>
              <p className="text-base text-purple-600 font-semibold">{exp.period}</p>
            </div>
            <span className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-bold rounded-full shadow-sm border border-purple-200 flex-shrink-0">{exp.role}</span>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">{exp.description}</p>
        </div>
      ));
    }

    if (activeSection === 'skills') {
      return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {section.content.map((skill, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-md p-5 flex flex-col items-center justify-center transition-all duration-500 ease-out hover:shadow-[0_15px_40px_rgba(139,92,246,0.3)] hover:scale-110 hover:z-10 hover:-translate-y-1 border border-purple-50 hover:border-purple-300 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 relative mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xs font-bold text-slate-800 text-center transition-colors group-hover:text-purple-600 leading-tight">{skill.name}</h3>
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'projects') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {section.content.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg p-6 transition-all duration-600 ease-out hover:shadow-[0_25px_70px_rgba(139,92,246,0.35)] hover:-translate-y-3 hover:scale-[1.02] border border-purple-100 hover:border-purple-400 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header with status dot */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors flex-1 leading-snug pr-2">
                  {project.title}
                </h3>
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 group-hover:scale-150 group-hover:bg-purple-600 transition-all shadow-md flex-shrink-0 mt-1"></div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech Stack - Pill badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="inline-flex items-center px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-50 rounded-full hover:bg-purple-100 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-default border border-purple-200 hover:border-purple-300 active:scale-95"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Spacer to push button to bottom */}
              <div className="flex-1"></div>
              
              {/* Action Button - Always at bottom */}
              <div className="flex gap-3 pt-3 border-t border-slate-100 mt-auto">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-800 text-white text-sm font-semibold rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-md group-hover:shadow-purple-500/50"
                  >
                    <FaGithub className="text-base" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'contact') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Cards */}
          <div className={`group bg-white rounded-xl shadow-lg p-6 transition-all duration-600 ease-out hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)] hover:-translate-y-2 hover:scale-[1.02] border border-purple-100 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500 font-semibold mb-1.5">Email Address</p>
                <a href={`mailto:${section.content.email}`} className="text-base font-bold text-slate-900 hover:text-purple-600 transition-colors break-all">{section.content.email}</a>
              </div>
            </div>
          </div>

          <div className={`group bg-white rounded-xl shadow-lg p-6 transition-all duration-600 ease-out hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)] hover:-translate-y-2 hover:scale-[1.02] border border-purple-100 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500 font-semibold mb-1.5">Location</p>
                <p className="text-base font-bold text-slate-900">{section.content.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links - Full Width */}
          <div className={`lg:col-span-2 bg-white rounded-xl shadow-lg p-6 transition-all duration-700 ease-out border border-purple-100 hover:scale-[1.01] ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <p className="text-base text-slate-700 font-bold mb-4">Connect with me</p>
            <div className="grid grid-cols-2 gap-4">
              {section.content.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 h-14 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 active:scale-95 font-semibold text-base shadow-md"
                >
                  {social.name === 'LinkedIn' ? <FaLinkedin className="text-2xl" /> : <FaGithub className="text-2xl" />}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Overlay gradient pour profondeur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Layout Desktop - Modern UX */}
      <div className="relative z-10 flex h-screen">
        {/* Sidebar slim (20%) - Sticky Navigation */}
        <div className={`w-[20%] min-w-[280px] bg-purple-600/95 backdrop-blur-xl flex flex-col transition-all duration-700 sticky top-0 h-screen ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          {/* Profile Section */}
          <div className="p-6 border-b border-white/10">
            <div className="flex flex-col items-center gap-4">
              {/* Avatar */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-400/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-30 h-auto overflow-hidden rounded-2xl shadow-2xl border-2 border-white/30 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src="/avatar.png"
                    alt="Profile Avatar"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Name & Role */}
              <div className="text-center">
                <h1 className="text-lg font-black text-white drop-shadow-lg tracking-tight">
                  Achraf LAMARI
                </h1>
                <p className="text-white/80 text-xs font-semibold mt-1">
                  Software Developer
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3 px-2">Menu</p>
            <ul className="space-y-2">
              {navButtons.map((btn, index) => (
                <li key={btn.id}>
                  <button
                    onClick={() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        setActiveSection(btn.id);
                        setIsVisible(true);
                      }, 200);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      activeSection === btn.id 
                        ? 'bg-white text-purple-600 shadow-lg font-bold' 
                        : 'text-white hover:bg-white/10 hover:translate-x-1'
                    }`}
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <span className={`text-xl transition-transform group-hover:scale-110 ${
                      activeSection === btn.id ? 'text-purple-600' : 'text-white'
                    }`}>
                      {btn.icon}
                    </span>
                    <span className="text-sm font-semibold">{btn.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4">
            <div className="h-px w-full bg-white/20"></div>
            <p className="text-white/40 text-xs text-center mt-3 font-medium">Portfolio 2025</p>
          </div>
        </div>

        {/* Main Content Area - 80% width */}
        <div className="flex-1 h-screen overflow-hidden">
          <div className="h-full overflow-y-auto">
            {/* Hero Header Section */}
            <div className="sticky top-0 z-10 bg-purple-900/95 backdrop-blur-xl border-b border-white/10 px-12 py-8 transition-all duration-300">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6">
                    {sections[activeSection].icon}
                  </div>
                  <div>
                   <h1 className="text-4xl font-black text-white tracking-tight">
                      {sections[activeSection].title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-12 py-8">
              <div className="max-w-7xl mx-auto">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl pointer-events-none"></div>
    </div>
  );
}

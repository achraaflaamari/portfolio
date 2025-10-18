"use client";

import { useState, useEffect } from 'react';
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function InfoScreen({ onBack, initialSection = 'about' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = {
    about: {
      title: "About me",
      content: [
        {
          company: "About",
          period: "Software Developer",
          role: "Full Stack Developer",
          description: "As a proficient Software Developer 💻, I look forward to the challenges that high-quality, performant applications present. I leverage Next.js, React.js, and Tailwind CSS ✨ to create sleek and responsive UI experiences. I design scalable and performant backends with Spring Boot and Express.js ⚡. My passion for mobile development involves building mobile apps with React Native 📱. Besides writing code, I'm an enthusiastic robotics nerd 🤖 with a keen interest in software and automation innovation."
        }
      ]
    },
    skills: {
      title: "My Skills",
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
    { id: 'about', label: 'About me', icon: <FaUser className="text-xl text-white" /> },
    { id: 'skills', label: 'Skills', icon: <FaCode className="text-xl text-white" /> },
    { id: 'projects', label: 'Projects', icon: <FaBriefcase className="text-xl text-white" /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope className="text-xl text-white" /> }
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
          className={`bg-white rounded-3xl shadow-lg p-6 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-lg text-slate-800 font-bold mb-1">{exp.company}</h3>
              <p className="text-sm text-purple-600 font-medium">{exp.period}</p>
            </div>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">{exp.role}</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
        </div>
      ));
    }

    if (activeSection === 'skills') {
      return (
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {section.content.map((skill, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-xl hover:scale-110 hover:z-10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="w-16 h-16 relative mb-3 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 text-center transition-colors group-hover:text-purple-600">{skill.name}</h3>
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'projects') {
      return section.content.map((project, index) => (
        <div
          key={index}
          className={`group bg-white rounded-3xl shadow-lg p-6 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-purple-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors flex-1">{project.title}</h3>
            <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-150 transition-transform"></div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white text-sm font-medium rounded-xl hover:bg-slate-900 transition-all hover:scale-105 shadow-md hover:shadow-lg"
              >
                <FaGithub className="text-sm" />
                GitHub
              </a>
            )}
          </div>
        </div>
      ));
    }

    if (activeSection === 'contact') {
      return (
        <div className={`bg-white rounded-3xl shadow-lg p-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="space-y-5">
            <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 font-medium mb-1">Email</p>
                <a href={`mailto:${section.content.email}`} className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors break-all">{section.content.email}</a>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 font-medium mb-1">Location</p>
                <p className="text-sm font-semibold text-slate-900">{section.content.location}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 font-semibold mb-4">Connect with me</p>
              <div className="flex gap-3">
                {section.content.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 font-medium text-sm"
                  >
                    {social.name === 'LinkedIn' ? <FaLinkedin className="text-xl" /> : <FaGithub className="text-xl" />}
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center p-4 sm:p-6">
      {/* Overlay gradient pour profondeur - comme ProfileCard */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Header Card - Fixed */}
      <div 
        className={`relative w-full max-w-md bg-gradient-to-br from-purple-500/90 via-pink-500/90 to-purple-600/90 rounded-3xl shadow-2xl p-6 sm:p-8 mb-4 transition-all duration-700 flex-shrink-0 z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        {/* Back Button */}
        <button 
          onClick={() => {
            console.log('Back button clicked');
            onBack();
          }}
          className="absolute z-50 top-6 left-6 w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-xl transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Title */}
        <div className="text-center mb-6 mt-2">
          <h2 className="text-3xl font-extrabold text-white drop-shadow-lg">
            {sections[activeSection].title}
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {navButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setActiveSection(btn.id);
                  setIsVisible(true);
                }, 300);
              }}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                activeSection === btn.id 
                  ? 'bg-white/30 shadow-lg scale-105' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mb-1">{btn.icon}</span>
              <span className="text-xs text-white font-medium">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area - Scrollable */}
      <div className="w-full max-w-md flex-1 overflow-hidden z-10">
        <div className="h-full overflow-y-auto space-y-4 pb-6 px-2 scrollbar-hide">
          {renderContent()}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

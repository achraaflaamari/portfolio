"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

export default function WelcomeScreenDesktop({ onNext }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="relative grid h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cursor-pointer group"
      onClick={onNext}
    >
      {/* Overlay gradient pour plus de profondeur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/30 via-transparent to-purple-900/20 pointer-events-none" />

      {/* Contenu principal - Layout Desktop */}
      <div className="relative z-10 flex items-center justify-between max-w-7xl ml-auto w-full">
        {/* Section gauche - Texte */}
        <div className={`flex flex-col gap-10 max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className={`h-1.5 bg-purple-400 rounded-full transition-all duration-1500 delay-500 ${isVisible ? 'w-20' : 'w-0'}`}></div>
              <span className={`text-purple-300 text-sm font-bold uppercase tracking-widest transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Portfolio 2025</span>
            </div>
            
            <h1 className="text-white text-7xl font-black tracking-tight leading-tight mb-4">
              Welcome to my
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 mt-2">
                Creative Space
              </span>
            </h1>
            
            <div className={`h-1 bg-gradient-to-r from-purple-400/50 to-transparent rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'w-48' : 'w-0'}`}></div>
          </div>
          
          {/* Description */}
          <div className={`space-y-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/90 text-xl font-medium leading-relaxed">
              I'm <span className="text-purple-400 font-bold">Achraf LAMARI</span>, a passionate
              <span className="text-pink-400 font-bold"> Software Developer</span>
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Crafting innovative solutions with modern technologies.
              Specialized in full-stack development, mobile apps, and AI integration.
            </p>
          </div>

          {/* CTA Section */}
          <div className={`flex items-center gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-purple-400">
              <span className="text-white text-sm font-semibold">Click to explore</span>
              <FaChevronDown className="text-purple-400 text-sm animate-bounce" />
            </div>
          </div>
        </div>

        {/* Section droite - Image avec effet */}
        <div className={`relative flex-1 max-w-2xl h-full transition-all duration-1200 delay-400 ease-out ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-90'}`}>
          {/* Glow effect derrière l'avatar */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl scale-110 animate-pulse"></div>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/avatar.png"
              alt="Achraf LAMARI - Software Developer"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>



      {/* Decorative elements - Enhanced */}
      <div className="absolute top-20 right-40 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-purple-400/5 blur-2xl"></div>
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

export default function WelcomeScreen({ onNext }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="relative grid h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cursor-pointer"
      onClick={onNext}
    >
     {/* Texte Welcome vertical */}
     <div className={`absolute left-8 top-1/2 -translate-y-1/2 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
       <h1 
         className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-pink-400 to-purple-600 text-9xl font-extrabold tracking-wider drop-shadow-2xl z-10"
         style={{ writingMode: 'sideways-lr', textOrientation: 'sideways-right' }}
       >
         Welcome
       </h1>
     </div>

     {/* Overlay gradient pour plus de profondeur */}
     <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 via-transparent to-transparent pointer-events-none transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

     <div className={`absolute z-20 top-0 left-0 w-full h-full transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
       <Image
         src="/avatarmoitie.png"
         alt="Avatar"
         width={1000}
         height={1000}
         className="absolute z-50 right-0 h-full w-auto drop-shadow-2xl"
         priority
       />
     </div>

     {/* Click Indicator */}
     <div className={`absolute z-50 bottom-15 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
       <p className="text-white/80 text-sm font-medium animate-pulse">Click anywhere to continue</p>
       <FaChevronDown className="text-white/60 text-2xl animate-bounce" />
     </div>
    </div>
  );
}
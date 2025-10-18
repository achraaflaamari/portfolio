"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProfileCard({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 250, height: 250 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='relative grid min-h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-safe'>
      {/* Overlay gradient pour profondeur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/30 via-transparent to-transparent pointer-events-none" />
      
      <div className={`pt-6 px-4 w-full z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <button className='flex flex-col gap-1 w-8 h-8 justify-center hover:opacity-70 transition-all duration-300 group'>
          <span className='w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:from-pink-400 group-hover:to-purple-400 transition-all'></span>
          <span className='w-[60%] h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:from-pink-400 group-hover:to-purple-400 transition-all'></span>
        </button>
      </div>

      <div className='flex flex-col items-start h-full z-10'>
        <h1 className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 mx-4 drop-shadow-2xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          Achraf LAMARI
        </h1>
        <span className={`text-sm text-purple-200 mb-6 mx-4 font-medium tracking-wide transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          Software developer
        </span>
        <div className={`w-full h-full flex items-center justify-center overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Image 
            src="/avatar.png" 
            alt="Avatar" 
            width={1000} 
            height={1000} 
            className='object-cover w-auto h-full drop-shadow-2xl' 
            priority 
          />
        </div>
      </div>

      <div className={`absolute bottom-0 z-50 w-full rounded-t-4xl bg-white/98 px-6 py-6 border-t border-purple-300/40 shadow-2xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
        <div className='mb-6 grid grid-cols-2 gap-4 items-center'>
          <div className='w-full flex flex-col items-start'>
            <p className={`text-purple-600/80 text-sm font-medium mb-1 transition-all duration-500 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Can i help you ?
            </p>
            <h4 className={`text-xl font-bold text-purple-600 transition-all duration-500 delay-[800ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Let's work ? 
            </h4>
          </div>
          <div className={`w-full flex justify-end items-center transition-all duration-500 delay-[900ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <button 
              onClick={() => onNavigate('contact')}
              className='px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105'
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className='flex gap-6 justify-center'>
          <button 
            onClick={() => onNavigate('about')}
            className={`cursor-pointer text-slate-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} delay-[1000ms]`}
          >
            About me
          </button>
          <button 
            onClick={() => onNavigate('skills')}
            className={`cursor-pointer text-slate-700 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} delay-[1100ms]`}
          >
            Skills
          </button>
          <button 
            onClick={() => onNavigate('projects')}
            className={`cursor-pointer text-slate-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} delay-[1200ms]`}
          >
            Projects
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`cursor-pointer text-slate-700 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} delay-[1300ms]`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

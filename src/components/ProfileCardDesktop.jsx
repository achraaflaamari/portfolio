"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function ProfileCardDesktop({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='relative grid min-h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Overlay gradient pour profondeur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Layout Desktop - Deux colonnes */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-20 py-12">
        <div className="max-w-7xl w-full grid grid-cols-2 gap-12 items-center">
          
          {/* Colonne gauche - Image et Info */}
          <div className={`flex flex-col items-center gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative w-[500px] h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/avatar.png" 
                alt="Avatar" 
                width={500} 
                height={500} 
                className='object-cover w-full h-full' 
                priority 
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 mb-3 drop-shadow-2xl">
                Achraf LAMARI
              </h1>
              <span className="text-xl text-purple-200 font-medium tracking-wide">
                Software developer
              </span>
            </div>
          </div>

          {/* Colonne droite - Navigation et Actions */}
          <div className={`flex flex-col gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* Call to Action Card */}
            <div className="bg-white/98 rounded-3xl shadow-2xl p-8 border border-purple-300/40">
              <div className="mb-6">
                <p className="text-purple-600/80 text-base font-medium mb-2">
                  Can i help you ?
                </p>
                <h4 className="text-3xl font-bold text-purple-600 mb-6">
                  Let's work together
                </h4>
                <button 
                  onClick={() => onNavigate('contact')}
                  className='w-full px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105'
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => onNavigate('about')}
                className="group bg-white/95 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-purple-50"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <FaUser className="text-2xl text-purple-600" />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg group-hover:text-purple-600 transition-colors">About me</span>
                </div>
              </button>

              <button 
                onClick={() => onNavigate('skills')}
                className="group bg-white/95 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-pink-50"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                    <FaCode className="text-2xl text-pink-600" />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg group-hover:text-pink-600 transition-colors">Skills</span>
                </div>
              </button>

              <button 
                onClick={() => onNavigate('projects')}
                className="group bg-white/95 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-purple-50"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <FaBriefcase className="text-2xl text-purple-600" />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg group-hover:text-purple-600 transition-colors">Projects</span>
                </div>
              </button>

              <button 
                onClick={() => onNavigate('contact')}
                className="group bg-white/95 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-pink-50"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                    <FaEnvelope className="text-2xl text-pink-600" />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg group-hover:text-pink-600 transition-colors">Contact</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"></div>
    </div>
  );
}

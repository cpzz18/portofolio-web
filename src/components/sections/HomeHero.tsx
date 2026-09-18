import React from 'react';
import Typewriter from 'typewriter-effect';

const HERO_CONFIG = {
  // Main title / greeting
  headline: "Yo, I'm Robbin Chandra",

  // Looping role phrases typed at cursor
  roles: [
    'Student • AI Enthusiast',
    'Software Engineer',
    'AI & Machine Learning Explorer',
    'Fullstack & Systems Developer',
  ],

  // Typing speed in milliseconds
  typingSpeed: 60,
  deleteSpeed: 30,

  // Action links
  resumeUrl: '/resume.pdf',
};

interface HomeHeroProps {
  onNavigateProjects: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigateProjects }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 text-center select-none font-mono animate-fadeIn">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] text-[#52a5ff] drop-shadow-[0_0_6px_rgba(82,165,255,0.28)]">
        {HERO_CONFIG.headline}
      </h1>

      <div className="h-[2.5px] bg-[#52a5ff] shadow-[0_0_4px_rgba(82,165,255,0.35)] w-20 sm:w-32 md:w-36 mt-4 mb-3" />

      <div className="min-h-[2.6rem] flex items-center justify-center my-3 text-sm sm:text-lg md:text-2xl font-mono tracking-wider max-w-full px-2">
        <Typewriter
          options={{
            strings: HERO_CONFIG.roles,
            autoStart: true,
            loop: true,
            delay: HERO_CONFIG.typingSpeed,
            deleteSpeed: HERO_CONFIG.deleteSpeed,
            cursor: '█',
            cursorClassName: 'text-[#52a5ff] inline-block ml-1 animate-pulse drop-shadow-[0_0_6px_rgba(82,165,255,0.5)]',
            wrapperClassName: 'text-[#9ac4ff] font-medium tracking-wide drop-shadow-[0_0_5px_rgba(82,165,255,0.25)]',
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-5 w-full max-w-xs sm:max-w-none">
        <button
          type="button"
          onClick={onNavigateProjects}
          className="w-full sm:w-auto px-7 py-3 border border-[#2f4a66] bg-[#0c1620]/60 hover:bg-[#122434] hover:border-[#52a5ff] text-[#9ac4ff] hover:text-[#d0e4ff] text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-150 cursor-pointer active:scale-95 min-h-[42px] flex items-center justify-center"
        >
          VIEW PROJECTS
        </button>

        <a
          href={HERO_CONFIG.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto px-7 py-3 border border-[#9ac4ff] bg-[#9ac4ff] hover:bg-[#b8d7ff] text-[#080e14] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-150 cursor-pointer shadow-[0_0_10px_rgba(154,196,255,0.35)] active:scale-95 min-h-[42px] flex items-center justify-center"
        >
          RESUME.PDF
        </a>
      </div>
    </div>
  );
};

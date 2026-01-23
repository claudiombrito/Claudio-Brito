
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-extrabold tracking-[0.1em] text-white">
            Claudio Brito
          </h1>
          <span className="text-[10px] md:text-xs text-[#d4af37] font-semibold tracking-widest uppercase">
            Founder & CEO GLOBAL MENTORING GROUP
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://tidycal.com/claudiobrito/agenda"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm text-center"
          >
            Conversa Estratégica
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

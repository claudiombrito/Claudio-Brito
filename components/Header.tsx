
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Header Shell */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 pointer-events-none">
        <div 
          className={`pointer-events-auto flex items-center justify-between gap-6 md:gap-8 w-full max-w-5xl rounded-full border border-white/10 bg-[#121212]/90 backdrop-blur-md px-5 py-3 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.5)] ${
            scrolled ? 'py-2.5 bg-[#0f0f0f]/95 border-white/15' : ''
          }`}
        >
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] font-bold text-xs tracking-tighter group-hover:border-[#d4af37]/50 transition-colors">
              GMG
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white leading-tight group-hover:text-[#d4af37] transition-colors">
                CLAUDIO BRITO
              </span>
              <span className="text-[9px] font-mono-custom text-[#8a8a8a] uppercase tracking-widest hidden sm:inline-block">
                GLOBAL MENTORING
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#trajetoria" 
              className="text-[11px] font-mono-custom uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Trajetória
            </a>
            <a 
              href="#livro" 
              className="text-[11px] font-mono-custom uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-white transition-colors"
            >
              Livro
            </a>
            <a 
              href="#reels" 
              className="text-[11px] font-mono-custom uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-white transition-colors"
            >
              Insights
            </a>
            <a 
              href="#ai-mentoring" 
              className="text-[11px] font-mono-custom uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-white transition-colors"
            >
              Mentor IA
            </a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href="https://tidycal.com/claudiobrito/agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-[10px] sm:text-[11px] px-5 py-2"
            >
              Conversa Estratégica
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#8a8a8a] hover:text-white focus:outline-none"
              aria-label="Abrir Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-8 py-12 transition-all">
          <div className="flex flex-col gap-6 text-center">
            <span className="text-[10px] font-mono-custom uppercase tracking-[0.25em] text-[#d4af37] mb-2">
              Navegação Principal
            </span>
            <a 
              href="#trajetoria" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#d4af37] transition-colors"
            >
              A Trajetória
            </a>
            <a 
              href="#livro" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#d4af37] transition-colors"
            >
              O Livro & Método
            </a>
            <a 
              href="#reels" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#d4af37] transition-colors"
            >
              Reels & Insights
            </a>
            <a 
              href="#ai-mentoring" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#d4af37] transition-colors"
            >
              Mentor Estratégico IA
            </a>
            <div className="pt-8 border-t border-white/10 mt-4 flex flex-col gap-4">
              <a 
                href="https://tidycal.com/claudiobrito/agenda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center py-4 text-xs"
              >
                Agendar Conversa Estratégica
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

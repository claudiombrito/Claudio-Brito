
import React, { useEffect, useState, useRef } from 'react';
import { Stat } from '../types';

const STATS: Stat[] = [
  { value: '20K+', label: 'PROFISSIONAIS' },
  { value: '49+', label: 'PAÍSES ALCANÇADOS' },
  { value: '10K+', label: 'MENTORES TREINADOS' },
  { value: '9.3', label: 'AVALIAÇÃO GLOBAL' },
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoId = "1J27ufrw8qMy6neqV4grX-pUOIC5vfnXY";
  const videoSrc = `https://drive.google.com/uc?export=media&id=${videoId}`;
  const skyImageSrc = "/src/assets/images/dramatic_sky_hero_1786552900000.jpg";

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (window.scrollY < 1200) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.warn("Autoplay foi bloqueado ou falhou:", error);
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic scale factor based on scroll: 1.05 up to 1.35
  const skyScale = 1.05 + Math.min(scrollY * 0.0004, 0.3);
  const skyYOffset = scrollY * 0.12; // Subtle parallax movement

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-20 md:pt-44 md:pb-28 bg-[#0d0d0d] overflow-hidden border-b border-white/5">
      {/* Painterly Sky Backdrop with Dynamic Scroll Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={skyImageSrc}
          alt="Dramatic Sky Painting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] opacity-70 transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `scale(${skyScale}) translateY(${skyYOffset}px)`,
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920";
          }}
        />

        {/* Video Overlay with Blend Mode */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay filter saturate-[0.85]"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Atmospheric Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/40 to-[#0d0d0d]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0d0d0d]/30 to-[#0d0d0d]/95"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Kicker Tag */}
          <div className="mb-6 inline-flex items-center">
            <span className="kicker">
              GLOBAL MENTORING GROUP // LIDERANÇA ESTRATÉGICA
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold tracking-[-0.03em] leading-[1.04] max-w-4xl text-white mb-6">
            Transforme sua experiência em um <br className="hidden sm:inline" />
            <em className="italic text-[#d4af37] font-normal">negócio real.</em>
          </h1>

          {/* Lede Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#b8b8b8] max-w-2xl font-normal leading-relaxed mb-10">
            Método validado por líderes do MIT, Harvard e Vale do Silício para empacotar seu conhecimento, alcançar escala internacional e criar um legado autônomo.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 items-stretch sm:items-center">
            <a 
              href="https://tidycal.com/claudiobrito/agenda" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <span>Agendar Conversa Estratégica</span>
              <span className="text-xs">↗</span>
            </a>
            <a 
              href="https://globalmentoringgroup.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost"
            >
              <span>Visitar Global Mentoring</span>
            </a>
          </div>

          {/* Stats Bar (Minimalist 4-Column Box Grid with Hairline Borders) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1 p-5 md:p-7 bg-[#141414]/90 hover:bg-[#1a1a1a] transition-colors">
                <span className="text-2xl md:text-4xl font-semibold tracking-tight text-white font-mono-custom tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-[11px] font-mono-custom uppercase tracking-[0.16em] text-[#8a8a8a]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-12">
        <a href="#trajetoria" className="group flex flex-col items-center gap-2 text-xs font-mono-custom text-[#8a8a8a] uppercase tracking-widest hover:text-white transition-colors">
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2 bg-white/5 backdrop-blur-sm group-hover:border-[#d4af37]">
            <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

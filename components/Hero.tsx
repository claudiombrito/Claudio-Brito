
import React, { useEffect, useState } from 'react';
import { Stat } from '../types';

const STATS: Stat[] = [
  { value: '20k+', label: 'PROFISSIONAIS' },
  { value: '49+', label: 'PAÍSES' },
  { value: '7 DÍGITOS', label: 'EM 2 ANOS' },
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-gradient-to-br from-[#080808] to-[#121212]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-7xl font-bold leading-[1.1] max-w-4xl mb-12">
            Transforme sua experiência em um <br />
            <span className="gold-gradient">negócio real.</span>
          </h2>

          <div className="flex flex-wrap gap-10 md:gap-20 mb-16">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <strong className="text-3xl md:text-5xl font-bold text-[#d4af37] mb-2">{stat.value}</strong>
                <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-[0.15em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://tidycal.com/claudiobrito/agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-5 text-sm font-black uppercase tracking-widest text-center"
            >
              Agendar Conversa Estratégica
            </a>
            <a 
              href="https://globalmentoringgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 text-sm font-bold border border-white/20 hover:bg-white/5 transition-colors uppercase tracking-widest text-center"
            >
              Visitar Global Mentoring
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

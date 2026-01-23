
import React, { useEffect, useState, useRef } from 'react';
import { Stat } from '../types';

const STATS: Stat[] = [
  { value: '20k+', label: 'PROFISSIONAIS' },
  { value: '49+', label: 'PAÍSES' },
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // ID do vídeo do Google Drive fornecido pelo usuário
  const videoId = "1J27ufrw8qMy6neqV4grX-pUOIC5vfnXY";
  
  // Usando 'export=media' em vez de 'export=download' para facilitar o streaming direto no elemento video
  const videoSrc = `https://drive.google.com/uc?export=media&id=${videoId}`;

  useEffect(() => {
    setIsVisible(true);

    // Forçar o play e garantir que esteja mutado (requisito de navegadores para autoplay)
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.warn("Autoplay foi bloqueado ou falhou:", error);
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-40 md:pb-56 bg-[#080808]">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Elemento de vídeo com referência para controle via JS */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        
        {/* Overlay preto com gradiente para garantir contraste e legibilidade das fontes brancas/douradas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#080808] z-10"></div>
      </div>
      
      {/* Background decoration (brilho dourado sutil no canto) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d4af37]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 z-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-30">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-7xl font-bold leading-[1.1] max-w-4xl mb-12 drop-shadow-2xl">
            Transforme sua experiência em um <br />
            <span className="gold-gradient">negócio real.</span>
          </h2>

          <div className="flex flex-wrap gap-10 md:gap-20 mb-16">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <strong className="text-3xl md:text-5xl font-bold text-[#d4af37] mb-2 drop-shadow-lg">{stat.value}</strong>
                <p className="text-[10px] md:text-xs text-gray-300 font-bold tracking-[0.15em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="https://tidycal.com/claudiobrito/agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-12 py-5 text-sm font-black uppercase tracking-widest text-center shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all"
            >
              Agendar Conversa Estratégica
            </a>
            <a 
              href="https://globalmentoringgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-5 text-sm font-bold border border-white/30 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all uppercase tracking-widest text-center"
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

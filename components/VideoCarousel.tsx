
import React from 'react';

const SHORTS_IDS = [
  'v_emU4_x1q0',
  'spH_FBgcUa4',
  'kOrTnRy5dGQ',
  'H-9EnsP3uMw',
  'lieSfkaUaTI',
  'gDq80jijzk0',
  '3-teweVxaa4',
  'grVoZD-veNA',
  'fg-Qe_Q1uZ8'
];

const VideoCarousel: React.FC = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <section className="py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[#d4af37] text-sm font-black tracking-[0.2em] uppercase mb-4 block">
            Impacto Global em Movimento
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Nossa Jornada <span className="gold-gradient">na Prática.</span>
          </h2>
        </div>
        <p className="text-gray-400 max-w-md italic border-l border-[#d4af37]/30 pl-4">
          Vivências reais, estratégias aplicadas e a energia de quem está construindo o futuro do mercado de mentorias.
        </p>
      </div>

      <div className="relative">
        {/* Gradientes decorativos para o scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080808] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080808] to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-x-auto gap-6 px-6 pb-8 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          {SHORTS_IDS.map((id, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 shadow-2xl snap-center group relative"
            >
              {/* Placeholder/Loading State */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#111] z-0">
                <div className="w-8 h-8 border-2 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin"></div>
              </div>
              
              {/* YouTube Embed com youtube-nocookie para maior compatibilidade */}
              <iframe
                className="w-full h-full relative z-10"
                src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&origin=${origin}`}
                title={`Claudio Brito Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              {/* Overlay estético de borda gold ao passar o mouse */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/30 transition-all duration-500 rounded-xl pointer-events-none z-30"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-center md:justify-start">
        <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span>Arraste para navegar</span>
          <div className="w-12 h-[1px] bg-gray-800"></div>
          <div className="flex gap-1">
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-[#d4af37]' : 'bg-gray-800'}`}></div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default VideoCarousel;

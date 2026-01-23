
import React from 'react';

const REEL_IDS = [
  'DTNvlE_ks-N',
  'DTIGTCRCPkw',
  'DTBlLuiiCKh',
  'DS5NONZDp-U',
  'DTZzP4EiINZ',
  'DSxktD_CA08'
];

const VideoCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[#d4af37] text-sm font-black tracking-[0.2em] uppercase mb-4 block">
            Impacto no Instagram
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Estratégia em <span className="gold-gradient">Tempo Real.</span>
          </h2>
        </div>
        <p className="text-gray-400 max-w-md italic border-l border-[#d4af37]/30 pl-4">
          Acompanhe os insights diários e a rotina estratégica que movem o Global Mentoring Group diretamente do Instagram.
        </p>
      </div>

      <div className="relative">
        {/* Gradientes laterais decorativos */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] via-[#080808]/40 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] via-[#080808]/40 to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-x-auto gap-8 px-8 pb-12 scrollbar-hide snap-x snap-mandatory">
          {REEL_IDS.map((id, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[300px] md:w-[350px] flex flex-col gap-4 snap-center"
            >
              {/* Container do Reel */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl transition-all duration-500 hover:border-[#d4af37]/30">
                <div className="aspect-[9/16] relative">
                  {/* Loader (fundo) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-0">
                    <div className="w-8 h-8 border-2 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin"></div>
                  </div>
                  
                  {/* Iframe do Instagram Reel */}
                  <iframe
                    className="absolute inset-0 w-full h-full z-10"
                    src={`https://www.instagram.com/reel/${id}/embed`}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={`Instagram Reel ${index + 1}`}
                  ></iframe>
                </div>
              </div>

              {/* Link para o Instagram */}
              <a 
                href={`https://www.instagram.com/reel/${id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.339-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Ver no Instagram
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-4 flex justify-center md:justify-start">
        <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
          <div className="flex gap-1.5 items-center">
             <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse"></div>
             <span>Arraste para navegar</span>
          </div>
          <div className="w-16 h-[1px] bg-white/5"></div>
          <span>Total: {REEL_IDS.length} Conteúdos</span>
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

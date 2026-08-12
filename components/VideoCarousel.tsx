
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
    <section id="reels" className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="kicker mb-3 block">
            03 // INSIGHTS & REELS
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Estratégia em <em className="italic text-[#d4af37]">tempo real.</em>
          </h2>
        </div>
        <p className="text-[#8a8a8a] max-w-md text-sm md:text-base leading-relaxed">
          Acompanhe os insights diários e a rotina estratégica que movem o Global Mentoring Group diretamente do Instagram.
        </p>
      </div>

      <div className="relative">
        {/* Subtle Edge Scrim Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0f0f0f] to-transparent z-20 pointer-events-none hidden sm:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0f0f0f] to-transparent z-20 pointer-events-none hidden sm:block"></div>

        <div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-8 scrollbar-hide snap-x snap-mandatory max-w-[1400px] mx-auto">
          {REEL_IDS.map((id, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] sm:w-[320px] flex flex-col gap-3 snap-center"
            >
              {/* Card Frame */}
              <div className="glow-card p-2 rounded-2xl border border-white/10 bg-[#161616] overflow-hidden">
                <div className="aspect-[9/16] relative rounded-xl overflow-hidden bg-[#0d0d0d]">
                  {/* Subtle Spinner Loader */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d] z-0">
                    <div className="w-6 h-6 border-2 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin"></div>
                  </div>
                  
                  {/* Instagram Reel Embed */}
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

              {/* Action Button */}
              <a 
                href={`https://www.instagram.com/reel/${id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost py-2.5 text-[10px] w-full flex items-center justify-center gap-2"
              >
                <span>VER NO INSTAGRAM</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 flex justify-between items-center text-[10px] font-mono-custom text-[#8a8a8a] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-ping"></span>
          <span>ARRASTE PARA NAVEGAR</span>
        </div>
        <span>TOTAL: {REEL_IDS.length} CONTEÚDOS</span>
      </div>
    </section>
  );
};

export default VideoCarousel;

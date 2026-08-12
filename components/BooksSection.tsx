
import React from 'react';

const BooksSection: React.FC = () => {
  const booksImageUrl = "https://lh3.googleusercontent.com/d/1kP3HodxyLfYZoLguXLEioHZH3NG3ZgEd";
  const fallbackUrl = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200";

  return (
    <section id="livro" className="py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Kicker */}
        <div className="mb-12">
          <span className="kicker">02 // O LIVRO & O MÉTODO</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mt-4 max-w-3xl leading-tight">
            De Harvard ao pânico absoluto. <br />
            <em className="italic text-[#d4af37] font-normal">Você está pronto para a verdade?</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="glow-card p-3 rounded-2xl border border-white/10 bg-[#141414] shadow-2xl relative group">
              <div className="relative rounded-xl overflow-hidden bg-[#181818]">
                <img 
                  src={booksImageUrl} 
                  alt="Livros Mentor Extraordinário - Claudio Brito" 
                  className="w-full h-auto object-cover filter saturate-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== fallbackUrl) {
                      target.src = fallbackUrl;
                    }
                  }}
                />
              </div>

              {/* Top Tag Badge */}
              <div className="absolute top-6 right-6 font-mono-custom text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#0d0d0d]/90 border border-[#d4af37]/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                OBRA PUBLICADA
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="space-y-6 text-[#b8b8b8] text-base md:text-lg leading-relaxed font-normal mb-8">
              <p>
                Como queimei todas as pontes, vi economias evaporarem e, partindo do zero, construí uma rede que hoje forma mais de 10 mil mentores em 27 países. Do campus do MIT ao Vale do Silício, o sucesso comercial esconde cicatrizes reais.
              </p>
              
              <p>
                Este não é um livro de teorias abstratas; é a anatomia de um método que forçou 5 continentes a me avaliarem com nota 9,3. O registro sincero de uma trajetória que transformou incerteza em soberania profissional.
              </p>
            </div>

            {/* Pull Quote Box */}
            <div className="p-6 rounded-xl border border-white/10 bg-[#121212] mb-8 border-l-2 border-l-[#d4af37]">
              <p className="text-base md:text-lg font-medium italic text-white leading-relaxed">
                "O desafio é simples: Você tem a coragem de esvaziar seu copo e descobrir o que seu lado 'sabe-tudo' está te impedindo de realizar?"
              </p>
            </div>

            {/* CTA Link */}
            <div>
              <a 
                href="https://clubedeautores.com.br/livros/autores/claudio-brito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Conheça os Livros Publicados</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BooksSection;

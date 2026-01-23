
import React from 'react';

const Story: React.FC = () => {
  // Using a more reliable direct link format for Google Drive images
  const photoUrl = "https://lh3.googleusercontent.com/d/1FBuP0TIZDWCYfeJWOl7RlfGO5yoXKDIN";
  const fallbackUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-[#d4af37]/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative aspect-[4/5] bg-[#1a1a1a] border border-[#d4af37]/30 overflow-hidden flex items-center justify-center rounded-sm shadow-2xl">
               <img 
                src={photoUrl} 
                alt="Founder & CEO - Global Mentoring Group" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== fallbackUrl) {
                    target.src = fallbackUrl;
                  }
                }}
               />
               
               {/* Premium Overlay Badge */}
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#d4af37] mb-1">
                    Liderança Estratégica
                  </p>
                  <p className="text-sm text-white/90 font-medium italic">
                    "Transformando expertise em legado global."
                  </p>
               </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[#d4af37] text-sm font-black tracking-[0.2em] uppercase mb-4 block">
              A Trajetória
            </span>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Do zero ao <span className="text-white">impacto global.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Já estive no lugar onde o conhecimento sobrava, mas o resultado faltava. 
                Após captar meio milhão e ver uma empresa fechar, recomecei da sacada do meu apartamento.
              </p>
              <p>
                Hoje, morando em Portugal, ajudo profissionais a superarem a falta de método 
                e transformarem o que sabem em negócios lucrativos e autônomos.
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                'Imersões em Capitais Globais como Londres, Paris, Lisboa, Cambridge e San Francisco.',
                'Negócio enxuto, de baixo custo e alto retorno.',
                'Método validado por referências de Harvard, MIT e Vale do Silício'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-[#d4af37] flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

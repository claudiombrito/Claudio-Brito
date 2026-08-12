
import React from 'react';

const Story: React.FC = () => {
  const photoUrl = "https://lh3.googleusercontent.com/d/1FBuP0TIZDWCYfeJWOl7RlfGO5yoXKDIN";
  const fallbackUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";

  return (
    <section id="trajetoria" className="py-24 md:py-32 bg-[#0f0f0f] relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Kicker Header */}
        <div className="mb-12">
          <span className="kicker">01 // A TRAJETÓRIA & PROPÓSITO</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mt-4">
            Do zero ao <em className="italic text-[#d4af37]">impacto global.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#161616] shadow-2xl">
              <img 
                src={photoUrl} 
                alt="Founder & CEO - Global Mentoring Group" 
                className="w-full h-full object-cover filter saturate-[0.95] brightness-[0.9] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== fallbackUrl) {
                    target.src = fallbackUrl;
                  }
                }}
              />
              
              {/* Photo Scrim & Floating Badge */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent">
                <div className="p-4 rounded-xl border border-white/10 bg-[#121212]/80 backdrop-blur-md">
                  <p className="text-[10px] font-mono-custom uppercase tracking-[0.2em] text-[#d4af37] mb-1">
                    CLAUDIO BRITO
                  </p>
                  <p className="text-xs text-[#b8b8b8] font-medium italic">
                    "Transformando conhecimento técnico em negócios de escala internacional."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Principles Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-6 text-[#b8b8b8] text-base md:text-lg leading-relaxed font-normal mb-10">
              <p>
                Já estive no lugar onde o conhecimento sobrava, mas o resultado proporcional faltava. 
                Após captar meio milhão e ver uma empresa fechar, recomecei da sacada do meu apartamento.
              </p>
              <p>
                Hoje, morando em Portugal, ajudo profissionais de elite a superarem a falta de método 
                e transformarem o que sabem em negócios altamente lucrativos, autônomos e globais.
              </p>
            </div>

            {/* Principles Cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  num: '01',
                  title: 'Imersões Internacionais',
                  body: 'Presença e treinamentos conduzidos em capitais estratégicas como Londres, Paris, Lisboa, Cambridge e San Francisco.'
                },
                {
                  num: '02',
                  title: 'Modelo Enxuto & Autônomo',
                  body: 'Sistemas de mentoria de baixo custo operacional e altas margens de lucro, sem dependência de equipes gigantes.'
                },
                {
                  num: '03',
                  title: 'Método Validado',
                  body: 'Estruturas de aceleração fundamentadas em referências de inovação de Harvard, MIT e ecossistemas do Vale do Silício.'
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="glow-card p-5 md:p-6 rounded-xl flex gap-5 items-start transition-all"
                >
                  <span className="font-mono-custom text-xs font-semibold text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/20 flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#8a8a8a] text-xs md:text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;

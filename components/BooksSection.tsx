
import React from 'react';

const BooksSection: React.FC = () => {
  // Link direto para a imagem do Google Drive usando o ID fornecido
  const booksImageUrl = "https://lh3.googleusercontent.com/d/1kP3HodxyLfYZoLguXLEioHZH3NG3ZgEd";
  const fallbackUrl = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="py-20 bg-white text-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Lado da Imagem */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform hover:scale-[1.02] transition-transform duration-500">
              <div className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                <img 
                  src={booksImageUrl} 
                  alt="Livros Mentor Extraordinário - Claudio Brito" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== fallbackUrl) {
                      target.src = fallbackUrl;
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Lado do Texto */}
          <div className="flex flex-col order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
              De Harvard ao pânico absoluto. <br />
              <span className="text-[#d4af37]">Você está pronto para a verdade? 🚀</span>
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                Como queimei todas as pontes, vi minhas economias evaporarem e, partindo do zero, construí uma rede que hoje treina 10 mil mentores em 27 países. Do campus do MIT ao Vale do Silício, o sucesso que o mercado aplaude esconde uma cicatriz que quase me parou.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Este não é um livro de teorias; é a anatomia de um método que forçou 5 continentes a me avaliarem com nota 9,3. Existe um segredo de 15 minutos que salvou minha sanidade e meu negócio quando eu não tinha um "Plano B".
              </p>

              <div className="pt-6 border-t border-gray-100 mt-8">
                <p className="text-xl md:text-2xl font-bold italic text-[#1a1a1a] mb-8">
                  "O desafio é simples: Você tem a coragem de esvaziar seu copo e descobrir o que seu 'lado sabe-tudo' está te impedindo de realizar?"
                </p>
                
                <div className="flex flex-col gap-6">
                  <p className="text-lg font-black uppercase tracking-widest text-[#d4af37]">
                    O mundo é seu. A chave está aqui.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://clubedeautores.com.br/livros/autores/claudio-brito" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-gold px-10 py-4 text-sm font-black uppercase tracking-widest text-center transition-all inline-block"
                    >
                      Conheça meus livros
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BooksSection;

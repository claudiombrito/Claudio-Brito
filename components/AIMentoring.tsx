
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const AIMentoring: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou seu assistente estratégico da Global Mentoring Group. Como posso ajudar você a transformar sua experiência em um negócio real hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: `Você é um consultor estratégico da Global Mentoring Group. 
          Sua missão é ajudar profissionais experientes a empacotarem seu conhecimento em mentorias de alto valor.
          Seu tom é profissional, inspirador, direto e premium.
          Fale sobre transformar expertise em "negócios de 7 figuras", "métodos validados" e "impacto global".
          Sempre direcione o usuário no final para agendar uma "Conversa Estratégica" oficial através do link: https://tidycal.com/claudiobrito/agenda.
          Mantenha as respostas concisas e em português brasileiro.`
        }
      });

      const aiText = response.text || "Desculpe, tive um problema ao processar sua solicitação. Por favor, tente novamente.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Houve um erro técnico. Por favor, entre em contato através do nosso site oficial." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-mentoring" className="py-24 bg-[#080808] border-y border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#d4af37] text-sm font-black tracking-widest uppercase block mb-2">Simulador de Estratégia</span>
          <h2 className="text-3xl md:text-5xl font-bold">Inicie sua <span className="gold-gradient">Transformação</span></h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto italic">
            Experimente um breve diagnóstico com nossa IA treinada no método Global Mentoring Group.
          </p>
        </div>

        <div className="bg-[#121212] border border-[#d4af37]/20 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-[#d4af37] text-black font-medium' 
                    : 'bg-[#1a1a1a] text-gray-200 border border-white/5'
                }`}>
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] text-[#d4af37] px-4 py-2 rounded-full flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-[#0a0a0a] border-t border-[#1a1a1a] flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Descreva sua experiência ou dúvida..."
              className="flex-1 bg-[#1a1a1a] text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="btn-gold px-6 py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIMentoring;


import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const SUGGESTIONS = [
  "Como empacotar minha consultoria em mentoria internacional?",
  "Qual a diferença entre mentoria e curso online?",
  "Como precificar meu programa de mentoria de alto valor?"
];

const AIMentoring: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou o Mentor Estratégico IA do Global Mentoring Group. Como posso ajudar você a estruturar sua experiência em um negócio de mentoria internacional hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendPrompt = async (promptText: string) => {
    if (!promptText.trim() || isLoading) return;

    const apiKey = process.env.API_KEY || "";
    const userMessage = promptText.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    if (!apiKey) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "A simulação em tempo real está ativa! Para uma análise aprofundada do seu modelo de negócios, agende uma Conversa Estratégica diretamente com o Claudio Brito." 
        }]);
        setIsLoading(false);
      }, 800);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `Você é um mentor e consultor estratégico sênior do Global Mentoring Group e do Claudio Brito. Responda de forma direta, altamente elegante e pragmática em português. Oriente o profissional a transformar seu conhecimento em mentoria escalável. Finalize sugerindo agendar uma Conversa Estratégica em https://tidycal.com/claudiobrito/agenda.`
        }
      });
      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "Erro na resposta do assistente." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Erro técnico na comunicação. Por favor, agende sua Conversa Estratégica diretamente com nossa equipe." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendPrompt(input);
  };

  return (
    <section id="ai-mentoring" className="py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="kicker justify-center mb-3">04 // MENTOR ESTRATÉGICO IA</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Simule sua <em className="italic text-[#d4af37]">transformação.</em>
          </h2>
          <p className="text-[#8a8a8a] text-sm md:text-base max-w-xl mx-auto mt-3">
            Faça perguntas sobre estruturação de mentorias, precificação e escala global.
          </p>
        </div>

        {/* Chat Console Card */}
        <div className="glow-card rounded-2xl border border-white/10 bg-[#141414] shadow-2xl overflow-hidden flex flex-col h-[520px]">
          
          {/* Top Bar Status */}
          <div className="px-6 py-3.5 bg-[#181818] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
              <span className="font-mono-custom text-xs uppercase tracking-wider text-white font-medium">
                SISTEMA DE MENTORIA IA V2
              </span>
            </div>
            <span className="font-mono-custom text-[10px] uppercase tracking-widest text-[#8a8a8a] hidden sm:inline">
              GLOBAL MENTORING GROUP
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] sm:max-w-[80%] p-4 sm:p-5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#d4af37] text-[#0d0d0d] font-semibold rounded-tr-xs shadow-lg' 
                    : 'bg-[#1a1a1a] border border-white/10 text-[#f5f5f3] rounded-tl-xs shadow-md'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] border border-white/10 text-[#8a8a8a] p-4 rounded-2xl rounded-tl-xs text-xs font-mono-custom flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  <span>Processando estratégia...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-4 py-2 bg-[#121212] border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
            {SUGGESTIONS.map((promptText, i) => (
              <button
                key={i}
                onClick={() => handleSendPrompt(promptText)}
                disabled={isLoading}
                className="whitespace-nowrap font-mono-custom text-[10px] text-[#8a8a8a] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors flex-shrink-0"
              >
                + {promptText}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSubmit} className="p-4 bg-[#101010] border-t border-white/10 flex gap-3">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida sobre mentorias e negócios globais..."
              className="flex-1 bg-[#1a1a1a] text-white placeholder-[#636363] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()} 
              className="btn btn-primary px-6 py-3 text-xs disabled:opacity-40"
            >
              <span>ENVIAR</span>
              <span>↗</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default AIMentoring;

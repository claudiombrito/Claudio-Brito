
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import BooksSection from './components/BooksSection';
import VideoCarousel from './components/VideoCarousel';
import AIMentoring from './components/AIMentoring';
import WhatsAppButton from './components/WhatsAppButton';

const Footer: React.FC = () => (
  <footer className="py-16 bg-[#0a0a0a] border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-mono-custom text-xs font-semibold tracking-[0.22em] text-white uppercase">
            GLOBAL MENTORING GROUP
          </span>
          <p className="font-mono-custom text-[11px] text-[#8a8a8a] mt-2 uppercase tracking-widest">
            &copy; 2026 Claudio Brito. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] text-[#d4af37] uppercase mb-4 font-medium">
            REDES SOCIAIS
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/mentorclaudiobrito/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-[#8a8a8a] hover:text-white hover:border-[#d4af37]/40 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.339-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/claudiombrito/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-[#8a8a8a] hover:text-white hover:border-[#d4af37]/40 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a href="https://www.facebook.com/cmbfilho" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-[#8a8a8a] hover:text-white hover:border-[#d4af37]/40 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://www.youtube.com/c/GlobalMentoringGroup" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-[#8a8a8a] hover:text-white hover:border-[#d4af37]/40 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] text-[#d4af37] uppercase mb-2 text-center md:text-right font-medium">
            INSTITUCIONAL
          </p>
          <div className="flex gap-6 font-mono-custom text-[11px] tracking-widest text-[#8a8a8a] uppercase">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="https://wa.me/351913260225" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="font-mono-custom text-[11px] text-[#8a8a8a]">
          Global Mentoring Group — Expertise em legado e autoridade global.
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#d4af37] selection:text-black">
      <Header />
      <main>
        <Hero />
        <Story />
        <BooksSection />
        <VideoCarousel />
        <AIMentoring />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;

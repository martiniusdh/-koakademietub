
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import Logo from './Logo.tsx';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface AIMentorProps {
  hasAccess: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

const AIMentor: React.FC<AIMentorProps> = ({ hasAccess, onClose, onUnlock }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hei! Jeg er Økonomiakademiets AI-mentor. Trenger du hjelp med budsjett, sparing eller lån? Bare spør!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "Du er en vennlig og engasjerende økonomi-mentor for 'Økonomiakademiet UB'. Din oppgave er å forklare privatøkonomi på en enkel og lettfattelig måte for ungdom mellom 15-25 år. Hold svarene dine konsise og oppmuntrende.",
        },
      });

      setMessages(prev => [...prev, { role: 'assistant', text: response.text || "Beklager, jeg fikk et lite hikke." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Huff, jeg mistet forbindelsen. Prøv igjen om litt!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg h-[600px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-logo-blue p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-slate-200 p-1 overflow-hidden">
              <Logo />
            </div>
            <div>
              <p className="font-bold">UB Mentor AI</p>
              <p className="text-xs text-blue-100 opacity-80">Privatøkonomisk ekspert</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/20 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {!hasAccess ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50">
            <div className="w-20 h-20 bg-slate-200/50 rounded-full flex items-center justify-center mb-6 shadow-inner p-4">
               <div className="opacity-40 grayscale w-full h-full"><Logo /></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Låst innhold</h3>
            <p className="text-slate-600 mb-8 max-w-sm">
              UB Mentor AI er kun tilgjengelig for kunder med <strong>Prototype-pakken</strong>. Få tilgang til personlig veiledning og interaktive moduler i dag!
            </p>
            <button 
              onClick={onUnlock}
              className="bg-logo-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-logo-blue-dark shadow-lg shadow-slate-200 transition-all hover:-translate-y-1"
            >
              Oppgrader til Prototype-pakke
            </button>
            <button onClick={onClose} className="mt-4 text-sm text-slate-400 hover:text-slate-600">
              Kanskje senere
            </button>
          </div>
        ) : (
          <>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-logo-blue text-white rounded-tr-none' : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 rounded-tl-none flex gap-1">
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-logo-blue/40 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Spør om lån, sparing eller budsjett..."
                  className="flex-1 bg-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-logo-blue"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-logo-blue text-white p-3 rounded-xl hover:bg-logo-blue-dark disabled:opacity-50 transition-all shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIMentor;
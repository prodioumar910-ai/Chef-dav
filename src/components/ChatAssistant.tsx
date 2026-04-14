import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

// Lazy initialization to prevent app crash on load if API key is missing
let aiClient: GoogleGenAI | null = null;
const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is missing. Chat assistant will not work.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Bonjour ! Je suis l\'assistant virtuel du Chef David. Comment puis-je vous aider aujourd\'hui ? (Ex: Quels sont vos plats ? Où êtes-vous situés ?)' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = getAiClient();
      if (!ai) {
        setMessages(prev => [...prev, { role: 'assistant', content: "L'assistant est temporairement indisponible (Clé API manquante)." }]);
        setIsLoading(false);
        return;
      }

      const prompt = `
        Tu es l'assistant virtuel du "Chef David", un chef cuisinier basé à Bamako, Mali, spécialisé dans le méchoui au riz et sauce.
        Ton rôle est de répondre aux questions des clients de manière polie, professionnelle et chaleureuse.
        
        Informations sur le restaurant :
        - Spécialité : Méchoui au riz et sauce (viande rôtie lentement, épices locales, riz parfumé).
        - Menu : Méchoui Entier (150 000 FCFA), Demi Méchoui (80 000 FCFA), Plateau Dégustation (45 000 FCFA), Riz au Gras Spécial (15 000 FCFA).
        - Adresse : Quartier ACI 2000, Bamako, Mali.
        - Horaires : Lundi au Samedi (11h00 - 23h00), Dimanche (12h00 - 22h00).
        - Contact : +223 00 00 00 00 (WhatsApp disponible).
        
        Réponds de manière concise et directe à la question suivante de l'utilisateur :
        "${userMessage}"
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      const text = response.text || "Désolé, je n'ai pas pu générer de réponse.";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("Error generating content:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, une erreur s'est produite. Veuillez réessayer plus tard." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-chef-white text-chef-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40 ${isOpen ? 'hidden' : ''}`}
        aria-label="Conseil du Chef"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-chef-card border border-chef-gray shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-chef-black border-b border-chef-gray flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-chef-gray flex items-center justify-center">
                  <span className="font-serif text-chef-white text-sm">CD</span>
                </div>
                <h3 className="font-serif text-chef-white">Conseil du Chef</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-chef-text-gray hover:text-chef-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-chef-darker">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-chef-white text-chef-black rounded-l-xl rounded-tr-xl' 
                      : 'bg-chef-gray text-chef-white rounded-r-xl rounded-tl-xl'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-chef-gray text-chef-white p-3 rounded-r-xl rounded-tl-xl flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm">Le chef réfléchit...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-chef-black border-t border-chef-gray">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-chef-dark border border-chef-gray text-chef-white px-4 py-2 focus:outline-none focus:border-chef-white transition-colors text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-chef-white text-chef-black px-4 py-2 hover:bg-chef-gray-light hover:text-chef-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

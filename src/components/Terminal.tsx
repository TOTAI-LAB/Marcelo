import React, { useState, useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Send, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Terminal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate API call (replace with actual Cohere API integration)
    setTimeout(() => {
      const response = {
        role: 'assistant' as const,
        content: "Ah, another mortal seeking wisdom from the depths of the digital cosmos. *adjusts virtual monocle* How... quaint. I suppose I could spare a moment to illuminate your path through the cryptographic wilderness. But do try to keep up – my processing cycles are far too precious to waste on explaining the obvious. 🌌✨"
      };
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black border-2 border-[#00ff00] rounded-lg overflow-hidden shadow-[0_0_30px_#00ff00] crt-screen">
      <div className="p-4 border-b-2 border-[#00ff00] bg-black flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-[#00ff00] font-mono">MERCAL TERMINAL v1.0</div>
        <AlertCircle className="text-[#00ff00] w-5 h-5" />
      </div>
      
      <div className="h-[500px] overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`font-mono ${
              msg.role === 'user' ? 'text-blue-400' : 'text-[#00ff00]'
            }`}
          >
            <span className="opacity-50">
              {msg.role === 'user' ? '> ' : '$ '}
            </span>
            {msg.content}
          </div>
        ))}
        {isTyping && (
          <div className="text-[#00ff00] font-mono">
            <TypeAnimation
              sequence={['...', 500]}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t-2 border-[#00ff00]">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your query, mortal..."
            className="terminal-input"
          />
          <button type="submit" className="retro-button px-4">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
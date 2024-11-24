import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function Terminal() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black border-2 border-[#00ff00] rounded-lg overflow-hidden shadow-[0_0_30px_#00ff00] crt-screen">
      {/* Terminal Header */}
      <div className="p-4 border-b-2 border-[#00ff00] bg-black flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-[#00ff00] font-mono">MERCAL TERMINAL v1.0</div>
        <AlertCircle className="text-[#00ff00] w-5 h-5" />
      </div>

      {/* Terminal Body */}
      <div className="h-[500px] overflow-y-auto p-6 space-y-4">
        <div className="font-mono text-[#00ff00] text-sm leading-relaxed">
          <p>
            <span className="opacity-90">$ </span>In just 48 hours, we’ve developed and launched something truly groundbreaking: a sophisticated AI chatbot. Unlike basic larping Twitter bots, this is a fully functional, conversational AI designed to enhance user experience.
          </p>
          <br />
          <p>
            <span className="opacity-90">$ </span>To continue building and improving, we need your support. We’re raising funds for future development, including custom AI enhancements and website updates.
          </p>
          <br />
          <p>
            <span className="opacity-90">$ </span><strong>Wallet:</strong> y6CewDLJn5w2NNR9Rw2eTduZANpxnA1zP4JfdML38vp
          </p>
          <p>
            <span className="opacity-90">$ </span><strong>Minimum cap:</strong> 10 SOL [all services resume]
          </p>
          <p>
            <span className="opacity-90">$ </span><strong>Max:</strong> 100 SOL or 2% tokens.
          </p>
          <br />
          <p>
            <span className="opacity-90">$ </span>For transparency: <a href="https://llmpricecheck.com" target="_blank" rel="noopener noreferrer" className="underline text-[#00ff00]">llmpricecheck.com</a>
          </p>
          <br />
          <p>
            <span className="opacity-90">$ </span><strong>Note:</strong> Pausing all services until further notice.
          </p>
        </div>
      </div>
    </div>
  );
}
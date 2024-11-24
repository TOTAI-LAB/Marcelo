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
            <span className="opacity-90">$ </span>
          </p>
        </div>
      </div>
    </div>
  );
}
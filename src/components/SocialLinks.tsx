import React from 'react';
import { ExternalLink, MessageCircle, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <a
        href="#"
        className="retro-button flex items-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Telegram</span>
      </a>
      <a
        href="#"
        className="retro-button flex items-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="w-5 h-5" />
        <span>Twitter</span>
      </a>
      <a
        href="#"
        className="retro-button flex items-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="w-5 h-5" />
        <span>Launch DEX</span>
      </a>
    </div>
  );
}
import React from 'react';
import { ArrowUp, Heart, Sparkles, MapPin, Phone, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-[#F2EBD7] pt-20 pb-12 border-t-2 border-[#F2EBD7]/20 relative overflow-hidden">
      
      {/* Decorative Doodles Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Pixel Heading */}
        <div className="mb-14 sm:mb-20 text-center sm:text-left relative">
          
          {/* Handwritten top annotation */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 text-[#F5D900]">
            <Sparkles className="w-4 h-4" />
            <span className="font-hand text-2xl text-[#C4B5FD] transform -rotate-1">
              ~ the doors are open, coffee is brewing
            </span>
          </div>

          <h2
            id="footer-main-headline"
            className="font-pixel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2EBD7] uppercase leading-none drop-shadow-[4px_4px_0px_#000]"
          >
            SEE YOU AT{' '}
            <span className="text-[#F5D900] block sm:inline">
              PANCHATANTRA.
            </span>
          </h2>
        </div>

        {/* 3-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-[#F2EBD7]/15">
          
          {/* Brand Info & Devanagari Mark (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black border-2 border-[#F5D900] flex items-center justify-center rounded-sm shadow-[3px_3px_0px_#000]">
                <span className="text-[#F2EBD7] font-devanagari text-3xl font-bold">
                  प.
                </span>
              </div>

              <div>
                <h3 className="font-pixel text-xl font-bold text-[#F2EBD7] tracking-wider">
                  PANCHATANTRA
                </h3>
                <p className="font-mono-code text-xs text-[#F5D900]">
                  CAFE & CREATIVE HANGOUT
                </p>
              </div>
            </div>

            <p className="font-mono-code text-xs text-[#F2EBD7]/70 leading-relaxed max-w-sm">
              Lane Number 5, Brahman Wadi, Begumpet, Hyderabad, Telangana 500016.
              Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>

            <p className="font-hand text-lg text-[#C4B5FD]">
              "Unplanned hours, good conversations & crispy Chilli Paneer."
            </p>
          </div>

          {/* Quick Jump Links (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-mono-code text-xs font-bold">
            <h4 className="font-pixel text-xs text-[#F5D900] uppercase tracking-widest mb-4">
              QUICK JUMP
            </h4>

            <div className="flex flex-col gap-2.5">
              <a href="#menu" className="text-[#F2EBD7]/80 hover:text-[#F5D900] transition-colors flex items-center gap-2">
                <span>↳</span> <span>MENU & BLACKBOARD SPECIALS</span>
              </a>
              <a href="#story" className="text-[#F2EBD7]/80 hover:text-[#F5D900] transition-colors flex items-center gap-2">
                <span>↳</span> <span>THE STORY & MANIFESTO</span>
              </a>
              <a href="#vibe" className="text-[#F2EBD7]/80 hover:text-[#F5D900] transition-colors flex items-center gap-2">
                <span>↳</span> <span>THE VIBE & DAY RHYTHM</span>
              </a>
              <a href="#community" className="text-[#F2EBD7]/80 hover:text-[#F5D900] transition-colors flex items-center gap-2">
                <span>↳</span> <span>INSTAGRAM & POLAROIDS</span>
              </a>
              <a href="#location" className="text-[#F2EBD7]/80 hover:text-[#F5D900] transition-colors flex items-center gap-2">
                <span>↳</span> <span>LOCATION & DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Social & Contact Strip (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-pixel text-xs text-[#C4B5FD] uppercase tracking-widest mb-4">
              CONNECT
            </h4>

            <div className="space-y-3 font-mono-code text-xs">
              <a
                href="tel:09182853708"
                className="flex items-center gap-2 p-2.5 bg-[#1a1a1a] border border-[#F2EBD7]/20 rounded-sm hover:border-[#F5D900] hover:text-[#F5D900] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F5D900]" />
                <span>091828 53708</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 bg-[#1a1a1a] border border-[#F2EBD7]/20 rounded-sm hover:border-[#C4B5FD] hover:text-[#C4B5FD] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C4B5FD]" />
                <span>@panchatantra</span>
              </a>

              <a
                href="https://maps.google.com/?q=Panchatantra+Cafe+Lane+Number+5+Brahman+Wadi+Begumpet+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 bg-[#F5D900] text-[#171717] font-bold rounded-sm shadow-[2px_2px_0px_#000] hover:bg-yellow-300 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>MAP DIRECTIONS</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[#F2EBD7]/50 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Panchatantra Cafe, Begumpet, Hyderabad. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-hand text-[#F5D900] text-lg">
              Crafted for indie souls & coffee lovers
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2 bg-[#222] border border-[#F2EBD7]/30 text-[#F2EBD7] hover:text-[#171717] hover:bg-[#F5D900] hover:border-[#171717] rounded-sm transition-colors shadow-[2px_2px_0px_#000]"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

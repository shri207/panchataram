import React from 'react';
import { ArrowDownRight, Compass, Sparkles, MapPin, Coffee, BookOpen, Music, Heart } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen bg-[#171717] pt-24 sm:pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-grain border-b border-[#F2EBD7]/15"
    >
      {/* Background Decorative Line Grid & Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-hero" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(242, 235, 215, 0.4)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-hero)" />
        </svg>
      </div>

      {/* Hand-drawn Cityscape & Cafe Outlined Graphic Illustration */}
      <div className="absolute right-4 sm:right-12 top-28 sm:top-24 w-48 sm:w-80 md:w-96 lg:w-[460px] opacity-25 md:opacity-35 pointer-events-none select-none z-0">
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto stroke-[#F2EBD7]">
          {/* Outlined retro Hyderabad cityscape & cafe doodles */}
          <path d="M10 290 H390" strokeWidth="2" strokeDasharray="6 4" />
          {/* Building 1 */}
          <rect x="40" y="140" width="60" height="150" strokeWidth="1.5" />
          <line x1="55" y1="160" x2="85" y2="160" strokeWidth="1" />
          <line x1="55" y1="180" x2="85" y2="180" strokeWidth="1" />
          <line x1="55" y1="200" x2="85" y2="200" strokeWidth="1" />
          <line x1="55" y1="220" x2="85" y2="220" strokeWidth="1" />
          <rect x="58" y="250" width="24" height="40" strokeWidth="1" />
          
          {/* Cafe building with striped awning */}
          <rect x="120" y="110" width="130" height="180" strokeWidth="2" />
          <path d="M110 110 L260 110 L250 140 L120 140 Z" strokeWidth="1.5" fill="#F5D900" fillOpacity="0.1" />
          <line x1="140" y1="110" x2="135" y2="140" strokeWidth="1.5" />
          <line x1="165" y1="110" x2="165" y2="140" strokeWidth="1.5" />
          <line x1="190" y1="110" x2="190" y2="140" strokeWidth="1.5" />
          <line x1="215" y1="110" x2="220" y2="140" strokeWidth="1.5" />
          <line x1="240" y1="110" x2="245" y2="140" strokeWidth="1.5" />
          
          {/* Little cafe window & neon cup */}
          <rect x="140" y="160" width="90" height="60" strokeWidth="1.5" />
          <path d="M170 195 C170 205 190 205 190 195 L190 175 L170 175 Z" strokeWidth="1.5" />
          <path d="M190 180 C195 180 196 190 190 190" strokeWidth="1.5" />
          <path d="M176 168 C176 162 184 162 184 156" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Building 3 & towers */}
          <rect x="270" y="80" width="70" height="210" strokeWidth="1.5" />
          <line x1="305" y1="40" x2="305" y2="80" strokeWidth="2" />
          <circle cx="305" cy="35" r="4" strokeWidth="1.5" />
          <rect x="285" y="110" width="15" height="20" strokeWidth="1" />
          <rect x="310" y="110" width="15" height="20" strokeWidth="1" />
          <rect x="285" y="150" width="15" height="20" strokeWidth="1" />
          <rect x="310" y="150" width="15" height="20" strokeWidth="1" />
          <rect x="285" y="190" width="15" height="20" strokeWidth="1" />
          <rect x="310" y="190" width="15" height="20" strokeWidth="1" />
          
          {/* Hand-drawn stars & moon */}
          <path d="M50 70 L53 78 L61 81 L53 84 L50 92 L47 84 L39 81 L47 78 Z" strokeWidth="1" fill="#F5D900" fillOpacity="0.4" />
          <path d="M360 50 L362 55 L367 57 L362 59 L360 64 L358 59 L353 57 L358 55 Z" strokeWidth="1" />
          <circle cx="160" cy="50" r="16" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        
        {/* Top Stickers Badge Group */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          {/* Vivid Yellow Pill Sticker */}
          <span
            id="hero-sticker-location"
            className="sticker-pill bg-[#F5D900] text-[#171717] border border-[#171717] -rotate-1 cursor-default text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#000]"
          >
            <MapPin className="w-3.5 h-3.5" />
            BEGUMPET / HYDERABAD
          </span>

          {/* Secondary Lavender Sticker */}
          <span
            id="hero-sticker-motto"
            className="sticker-pill bg-[#C4B5FD] text-[#171717] border border-[#171717] rotate-2 cursor-default text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#000]"
          >
            <Heart className="w-3.5 h-3.5 fill-[#171717]" />
            GOOD FOOD. GOOD PEOPLE.
          </span>

          {/* Third Mini Tag */}
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-[#242424] border border-[#F2EBD7]/25 text-[#F2EBD7] text-[11px] font-mono-code -rotate-1 rounded-sm">
            <Sparkles className="w-3 h-3 text-[#F5D900]" />
            NO LAPTOP SURCHARGE · UNPLANNED HOURS
          </span>
        </div>

        {/* Main Retro Pixel Headline */}
        <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
          <div className="relative inline-block">
            {/* Washi Tape Accent */}
            <div className="washi-tape-yellow w-24 sm:w-36 -top-3 -left-4 -rotate-3"></div>
            
            <h1
              id="hero-main-title"
              className="font-pixel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2EBD7] uppercase leading-[1.05] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]"
            >
              PANCHATANTRA
            </h1>
          </div>

          <div className="flex flex-wrap items-baseline gap-3">
            <h2
              id="hero-subtitle"
              className="font-pixel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5D900] uppercase leading-tight"
            >
              CAFE & CREATIVE HANGOUT
            </h2>
            <span className="text-xs sm:text-sm font-devanagari text-[#C4B5FD] border border-[#C4B5FD]/40 px-2 py-0.5 rounded-sm">
              पंचतंत्र
            </span>
          </div>
        </div>

        {/* Supporting Line with Hand-drawn Feel */}
        <div className="max-w-2xl mb-8 sm:mb-10 relative">
          <p className="text-base sm:text-xl font-mono-code text-[#F2EBD7]/90 leading-relaxed">
            A cozy little corner in Begumpet for{' '}
            <span className="text-[#F5D900] font-bold underline decoration-[#F5D900] decoration-wavy decoration-1 underline-offset-4">
              good food
            </span>
            , artisanal coffee, spontaneous conversations & unplanned hours.
          </p>

          <p className="text-sm font-hand text-[#C4B5FD] text-lg mt-2 transform -rotate-1">
            * Warning: You might come for a 20-minute espresso and stay till dinner closing.
          </p>
        </div>

        {/* Graphic Sticker Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
          {/* VIEW MENU Button */}
          <button
            onClick={onExploreMenu}
            id="hero-view-menu-btn"
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-[#F5D900] text-[#171717] font-mono-code font-bold text-sm sm:text-base tracking-wider uppercase border-2 border-[#171717] rounded-sm transition-all duration-150 hover:-translate-y-1 hover:translate-x-1 shadow-[5px_5px_0px_#F2EBD7] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#F2EBD7] flex items-center gap-2"
          >
            <span>VIEW MENU</span>
            <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </button>

          {/* FIND US Button */}
          <a
            href="#location"
            id="hero-find-us-btn"
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-[#232323] text-[#F2EBD7] font-mono-code font-bold text-sm sm:text-base tracking-wider uppercase border-2 border-[#F2EBD7]/40 rounded-sm transition-all duration-150 hover:-translate-y-1 hover:border-[#F5D900] hover:text-[#F5D900] shadow-[5px_5px_0px_#000] active:translate-x-0 active:translate-y-0 flex items-center gap-2"
          >
            <Compass className="w-5 h-5 text-[#F5D900]" />
            <span>FIND US →</span>
          </a>

          {/* Quick Info Tag */}
          <div className="flex items-center gap-3 pl-2 sm:pl-4 text-xs font-mono-code text-[#F2EBD7]/70">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
            <span>LANE 5, BRAHMAN WADI, BEGUMPET</span>
          </div>
        </div>

        {/* Feature Icons Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-[#F2EBD7]/15">
          <div className="flex items-center gap-2.5 text-xs font-mono-code text-[#F2EBD7]/80">
            <Coffee className="w-4 h-4 text-[#F5D900]" />
            <span>Single Origin Arabica</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono-code text-[#F2EBD7]/80">
            <BookOpen className="w-4 h-4 text-[#C4B5FD]" />
            <span>Board Games & Reads</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono-code text-[#F2EBD7]/80">
            <Music className="w-4 h-4 text-[#F5D900]" />
            <span>Curated Vinyl & Indie</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono-code text-[#F2EBD7]/80">
            <Sparkles className="w-4 h-4 text-[#C4B5FD]" />
            <span>Work Friendly & Pets</span>
          </div>
        </div>

      </div>

      {/* Infinite Retro Marquee Ribbon */}
      <div className="w-full bg-[#F5D900] text-[#171717] py-2.5 border-y-2 border-[#171717] overflow-hidden select-none font-mono-code font-bold text-xs sm:text-sm tracking-widest uppercase mt-8 rotate-[-0.5deg]">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          <span>☕ FRESH PULL ESPRESSO</span>
          <span>✦</span>
          <span>THE OG CHILLI PANEER</span>
          <span>✦</span>
          <span>CO-WORKING HANGOUT</span>
          <span>✦</span>
          <span>LANE 5 BEGUMPET HYDERABAD</span>
          <span>✦</span>
          <span>NUTELLA COLD COFFEE</span>
          <span>✦</span>
          <span>CRISPY LOOSE PRAWNS</span>
          <span>✦</span>
          <span>BOARD GAMES & VINYL LO-FI</span>
          <span>✦</span>
          <span>KATSU CURRY CHICKEN</span>
          <span>✦</span>
          <span>OPEN EVERY DAY 11:00 AM – 11:00 PM</span>
          <span>✦</span>
          <span>☕ FRESH PULL ESPRESSO</span>
          <span>✦</span>
          <span>THE OG CHILLI PANEER</span>
          <span>✦</span>
          <span>CO-WORKING HANGOUT</span>
          <span>✦</span>
          <span>LANE 5 BEGUMPET HYDERABAD</span>
          <span>✦</span>
          <span>NUTELLA COLD COFFEE</span>
          <span>✦</span>
          <span>CRISPY LOOSE PRAWNS</span>
        </div>
      </div>
    </section>
  );
};

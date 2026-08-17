import React from 'react';
import { Sparkles, Coffee, Heart, CheckCircle2, Bookmark, Flame } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#171717] bg-chalkboard relative overflow-hidden border-b border-[#F2EBD7]/15">
      
      {/* Decorative Doodles & Coffee Ring */}
      <div className="absolute -left-12 top-1/4 w-48 h-48 rounded-full border-4 border-[#F5D900]/10 border-dashed pointer-events-none -rotate-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-code text-xs text-[#F5D900] bg-[#242424] border border-[#F5D900]/40 px-3 py-1 uppercase tracking-widest font-bold rounded-xs flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5" /> 01 // THE MANIFESTO
          </span>
          <span className="font-hand text-[#C4B5FD] text-xl transform rotate-1">
            ~ Est. in the leafy alleys of Brahman Wadi
          </span>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Big Catchphrase Statement */}
            <div className="relative">
              {/* Hand-drawn tape */}
              <div className="washi-tape w-28 -top-3 left-0 bg-[#C4B5FD]/70 -rotate-2"></div>
              
              <h2
                id="brand-statement-headline"
                className="font-pixel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EBD7] uppercase leading-[1.1] pt-2"
              >
                “COME FOR THE FOOD.{' '}
                <span className="text-[#F5D900] block mt-1">
                  STAY FOR THE VIBE.”
                </span>
              </h2>
            </div>

            {/* Conversational & Youthful Story Copy */}
            <div className="space-y-4 font-mono-code text-sm sm:text-base text-[#F2EBD7]/85 leading-relaxed">
              <p>
                Tucked away quietly inside <strong className="text-[#F2EBD7] font-bold">Lane Number 5 in Begumpet</strong>, 
                Panchatantra was born from a simple annoyance: cafes in Hyderabad had gotten either too corporate, too rushed, or too sterile.
              </p>
              
              <p>
                We wanted a place with <span className="text-[#C4B5FD] font-bold">warm charcoal walls</span>, scribbled art, 
                unpretentious honest food that actually explodes with flavor, and coffee made by people who actually care about your cup.
              </p>

              <p>
                Whether you're finishing a slide deck on your laptop, having your third iced latte on a first date, 
                or fiercely debating a Catan board move with three friends at 9 PM — there is no clock ticking here.
              </p>
            </div>

            {/* Quirky Bullet Manifestos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-[#202020] border border-[#F2EBD7]/15 rounded-sm flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#F5D900] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-pixel text-xs text-[#F2EBD7] font-bold uppercase">NO COOKIE-CUTTER MENU</h4>
                  <p className="text-xs font-mono-code text-[#F2EBD7]/70 mt-1">Everything from Katsu Curry to OG Chilli Paneer is cooked fresh in our wok.</p>
                </div>
              </div>

              <div className="p-3.5 bg-[#202020] border border-[#F2EBD7]/15 rounded-sm flex items-start gap-3">
                <Coffee className="w-5 h-5 text-[#C4B5FD] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-pixel text-xs text-[#F2EBD7] font-bold uppercase">ZERO RUSH POLICY</h4>
                  <p className="text-xs font-mono-code text-[#F2EBD7]/70 mt-1">Plug in your charger, read your book, or just stare at the raindrops on Lane 5.</p>
                </div>
              </div>
            </div>

            {/* Handwritten Sign-off */}
            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#F5D900]"></div>
              <p className="font-hand text-[#F5D900] text-2xl">
                Made with love, caffeine & zero pretension.
              </p>
            </div>

          </div>

          {/* Right Column: Indie Scrapbook & Polaroid Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Scrapbook Polaroid Frame 1 */}
            <div className="relative bg-[#222] p-4 sm:p-5 border-2 border-[#F2EBD7]/30 shadow-[6px_6px_0px_#000] rotate-1 group hover:rotate-0 transition-transform duration-300">
              {/* Tape on top right */}
              <div className="washi-tape-yellow w-24 -top-3.5 right-6 rotate-3"></div>
              
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111] mb-4 border border-[#F2EBD7]/20">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
                  alt="Panchatantra Cafe warm aesthetic seating and coffee"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-[#171717]/90 text-[#F5D900] text-[10px] font-mono-code px-2 py-0.5 border border-[#F5D900]/40 font-bold uppercase">
                  LANE 5 · BEGUMPET
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-pixel text-xs text-[#F2EBD7] font-bold">SNAPSHOT // CORNER 4</span>
                  <span className="text-[10px] font-mono-code text-[#F2EBD7]/60">OCTOBER 2024</span>
                </div>
                <p className="font-hand text-[#C4B5FD] text-xl leading-tight">
                  “The table where 12 startups and 80+ sketches were plotted.”
                </p>
              </div>
            </div>

            {/* Overlapping Mini Polaroid 2 */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 w-44 sm:w-56 bg-[#2a2a2a] p-3 border-2 border-[#F5D900] shadow-[5px_5px_0px_#000] -rotate-3 hover:rotate-0 transition-transform">
              <div className="aspect-square bg-black overflow-hidden mb-2 border border-[#F2EBD7]/20">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80"
                  alt="Fresh espresso pull at Panchatantra"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-pixel text-[10px] text-[#F5D900] font-bold">DARK ROAST</span>
                <span className="font-hand text-[#F2EBD7] text-sm">3:30 PM Pull</span>
              </div>
            </div>

            {/* Sticker Badge pinned */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#F5D900] text-[#171717] font-mono-code text-[11px] font-bold px-3 py-1.5 border-2 border-[#171717] rotate-6 shadow-[3px_3px_0px_#000]">
              ★ 100% INDIE VIBES
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { VIBE_TIMELINE } from '../data/vibeData';
import { Sparkles, Sun, Utensils, Coffee, Moon, Volume2, Music, BookmarkCheck, Heart } from 'lucide-react';
import { cafeAudio } from '../utils/audioSynth';

export const TheVibe: React.FC = () => {
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-4 h-4 text-[#F5D900]" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-[#C4B5FD]" />;
      case 'Coffee':
        return <Coffee className="w-4 h-4 text-[#F5D900]" />;
      case 'Moon':
        return <Moon className="w-4 h-4 text-[#C4B5FD]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#F5D900]" />;
    }
  };

  return (
    <section id="vibe" className="py-20 sm:py-28 bg-[#161616] bg-dot-grid relative overflow-hidden border-b border-[#F2EBD7]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-code text-xs text-[#C4B5FD] bg-[#242424] border border-[#C4B5FD]/40 px-2.5 py-1 font-bold uppercase rounded-xs">
              03 // ATMOSPHERE & AMBIENCE
            </span>
            <span className="font-hand text-[#F5D900] text-xl">
              ~ no sterile corporate vibes allowed
            </span>
          </div>

          <h2
            id="vibe-headline"
            className="font-pixel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2EBD7] uppercase leading-[1.05]"
          >
            A LITTLE CHAOTIC.{' '}
            <span className="text-[#F5D900] block mt-1">A LOT COZY.</span>
          </h2>

          <p className="font-mono-code text-sm sm:text-base text-[#F2EBD7]/85 mt-4 max-w-2xl leading-relaxed">
            Panchatantra is an unhurried, artsy sanctuary with different pockets of energy. 
            Come solo with a notebook, bring your laptop for uninterrupted flow, share an evening with friends over woks & fries, 
            or go on a first date where the conversation easily stretches for four hours.
          </p>
        </div>

        {/* Asymmetrical Photo Collage in Polaroid Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Polaroid 1: Warm Interior Lighting (md:col-span-5) */}
          <div className="md:col-span-5 bg-[#222] p-4 sm:p-5 border-2 border-[#F2EBD7]/30 shadow-[7px_7px_0px_#000] -rotate-1 hover:rotate-0 transition-transform duration-300 relative group">
            {/* Washi Tape */}
            <div className="washi-tape-yellow w-28 -top-3 left-10 -rotate-2"></div>
            
            <div className="aspect-[4/3] overflow-hidden bg-black mb-3 border border-[#F2EBD7]/20">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
                alt="Cozy ambient cafe seating at Panchatantra"
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs font-mono-code text-[#F2EBD7]/60">
                <span>WARM AMBER CORNERS</span>
                <span>PANCHATANTRA #01</span>
              </div>
              <p className="font-hand text-xl text-[#F5D900]">
                “Where the playlist actually matches the lighting.”
              </p>
            </div>
          </div>

          {/* Polaroid 2: Coffee & Laptop Work (md:col-span-4) */}
          <div className="md:col-span-4 bg-[#202020] p-4 sm:p-5 border-2 border-[#C4B5FD]/40 shadow-[7px_7px_0px_#000] rotate-2 hover:rotate-0 transition-transform duration-300 relative group md:mt-8">
            <div className="washi-tape w-24 -top-3 right-8 rotate-3 bg-[#F2EBD7]/80"></div>
            
            <div className="aspect-square overflow-hidden bg-black mb-3 border border-[#F2EBD7]/20">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
                alt="Books and coffee on table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs font-mono-code text-[#C4B5FD]">
                <span>READS & CHESS BOARDS</span>
                <span>TABLE 7</span>
              </div>
              <p className="font-hand text-xl text-[#F2EBD7]">
                “Pick a book from the rack or challenge someone to chess.”
              </p>
            </div>
          </div>

          {/* Polaroid 3: Nighttime Gathering & Snacks (md:col-span-3) */}
          <div className="md:col-span-3 bg-[#242424] p-4 border-2 border-[#F5D900]/50 shadow-[6px_6px_0px_#000] -rotate-2 hover:rotate-0 transition-transform duration-300 relative group">
            <div className="aspect-[3/4] overflow-hidden bg-black mb-3 border border-[#F2EBD7]/20">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Friends hanging out late at Panchatantra cafe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono-code text-[#F5D900] font-bold block">
                9:45 PM UNPLANNED HOURS
              </span>
              <p className="font-hand text-lg text-[#C4B5FD] leading-tight">
                “Nobody ever leaves on time here.”
              </p>
            </div>
          </div>

        </div>

        {/* Ambient Sound Bar Interaction Banner */}
        <div className="bg-[#212121] border-2 border-[#F2EBD7]/20 p-6 sm:p-8 rounded-sm shadow-[6px_6px_0px_#000] mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#F5D900] text-[#171717] rounded-sm flex items-center justify-center font-bold shadow-[2px_2px_0px_#000]">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-pixel text-lg text-[#F2EBD7] font-bold">
                THE PANCHATANTRA SOUNDSCAPE
              </h4>
              <p className="font-mono-code text-xs text-[#F2EBD7]/70">
                Warm lo-fi chords, gentle rain & subtle vinyl crackle synthesized in real-time.
              </p>
            </div>
          </div>

          <button
            onClick={() => cafeAudio.toggle()}
            className="px-5 py-3 bg-[#C4B5FD] text-[#171717] font-mono-code font-bold text-xs sm:text-sm border-2 border-[#171717] rounded-sm hover:bg-[#DDD6FE] transition-all shadow-[3px_3px_0px_#000] flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4" />
            <span>TOGGLE COZY AMBIENCE</span>
          </button>
        </div>

        {/* The 24-Hour Rhythm Timeline */}
        <div className="border-t border-[#F2EBD7]/15 pt-12">
          <div className="mb-8">
            <span className="font-mono-code text-xs text-[#F5D900] font-bold uppercase">
              A TYPICAL DAY IN LANE 5
            </span>
            <h3 className="font-pixel text-2xl sm:text-3xl text-[#F2EBD7] mt-1">
              CHOOSE YOUR HOUR
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIBE_TIMELINE.map((item, idx) => (
              <div
                key={item.time}
                className="bg-[#1e1e1e] p-5 border border-[#F2EBD7]/20 rounded-sm shadow-[4px_4px_0px_#000] relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-code text-xs font-bold text-[#F5D900] bg-[#141414] px-2 py-0.5 border border-[#F5D900]/30 rounded-xs">
                    {item.time}
                  </span>
                  {getTimelineIcon(item.icon)}
                </div>

                <h4 className="font-pixel text-base text-[#F2EBD7] font-bold mb-2">
                  {item.title}
                </h4>

                <p className="font-mono-code text-xs text-[#F2EBD7]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

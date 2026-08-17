import React from 'react';
import { COMMUNITY_POSTS } from '../data/vibeData';
import { Instagram, ArrowUpRight, Sparkles, Heart, Camera, Bookmark } from 'lucide-react';

export const CommunityZine: React.FC = () => {
  return (
    <section id="community" className="py-20 sm:py-28 bg-[#171717] bg-grain relative overflow-hidden border-b border-[#F2EBD7]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-code text-xs text-[#F5D900] bg-[#222] border border-[#F5D900]/40 px-2.5 py-1 font-bold uppercase rounded-xs">
                04 // COMMUNITY & ARCHIVE
              </span>
              <span className="font-hand text-[#C4B5FD] text-xl">
                ~ moments from the polaroid wall
              </span>
            </div>

            <h2
              id="community-section-title"
              className="font-pixel text-4xl sm:text-6xl font-bold tracking-tight text-[#F2EBD7] uppercase"
            >
              HANG OUT WITH US
            </h2>
          </div>

          {/* Captions Pills Row */}
          <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs font-bold">
            <span className="px-3 py-1 bg-[#282828] text-[#F5D900] border border-[#F5D900]/30 rounded-xs">
              COFFEE →
            </span>
            <span className="px-3 py-1 bg-[#282828] text-[#C4B5FD] border border-[#C4B5FD]/30 rounded-xs">
              CONVERSATIONS →
            </span>
            <span className="px-3 py-1 bg-[#282828] text-[#F2EBD7] border border-[#F2EBD7]/30 rounded-xs">
              FOOD →
            </span>
            <span className="px-3 py-1 bg-[#282828] text-[#F5D900] border border-[#F5D900]/30 rounded-xs">
              LONG HOURS →
            </span>
          </div>
        </div>

        {/* Zine Collage Grid with Polaroids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {COMMUNITY_POSTS.map((post) => (
            <div
              key={post.id}
              className={`bg-[#222] p-4 sm:p-5 border-2 border-[#F2EBD7]/25 shadow-[6px_6px_0px_#000] rounded-sm transition-all duration-300 ${post.rotation} hover:rotate-0 hover:border-[#F5D900] group relative`}
            >
              {/* Little tape detail */}
              <div className="washi-tape w-20 -top-2.5 right-10 -rotate-2"></div>

              {/* Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black mb-4 border border-[#F2EBD7]/20">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-[#171717]/90 text-[#F5D900] text-[10px] font-mono-code font-bold px-2 py-0.5 border border-[#F5D900]/40">
                  {post.tag}
                </span>
              </div>

              {/* Post Caption */}
              <div className="space-y-2">
                <h3 className="font-pixel text-lg text-[#F2EBD7] font-bold group-hover:text-[#F5D900] transition-colors">
                  {post.title}
                </h3>
                <p className="font-mono-code text-xs text-[#F2EBD7]/75 leading-relaxed">
                  {post.caption}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-4 pt-3 border-t border-[#F2EBD7]/10 flex items-center justify-between text-[11px] font-mono-code text-[#F2EBD7]/50">
                <span>#PanchatantraMoments</span>
                <span className="font-hand text-[#C4B5FD] text-base">Begumpet · Hyd</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Indie Instagram CTA Box */}
        <div className="mt-16 bg-[#1f1f1f] border-2 border-[#F5D900] p-8 sm:p-12 rounded-sm shadow-[8px_8px_0px_#000] relative text-center">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F5D900] text-[#171717] rounded-sm mb-2 shadow-[2px_2px_0px_#000]">
              <Instagram className="w-6 h-6" />
            </div>

            <h3 className="font-pixel text-2xl sm:text-4xl text-[#F2EBD7] uppercase font-bold tracking-tight">
              TAG YOUR POLAROIDS & MEMORIES
            </h3>

            <p className="font-mono-code text-xs sm:text-sm text-[#F2EBD7]/80 leading-relaxed">
              We frequently feature sketchbook doodles, vinyl recommendations, and table stories from our community.
            </p>

            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                id="instagram-community-cta"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-[#F5D900] text-[#171717] font-mono-code font-bold text-sm tracking-wider uppercase border-2 border-[#171717] rounded-sm shadow-[4px_4px_0px_#000] hover:-translate-y-1 transition-transform"
              >
                <span>SEE WHAT'S HAPPENING @PANCHATANTRA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

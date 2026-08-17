import React from 'react';
import { REVIEWS } from '../data/vibeData';
import { Star, MessageSquareQuote, CheckCircle2, Bookmark, Heart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#151515] bg-chalkboard relative overflow-hidden border-b border-[#F2EBD7]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Marker */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono-code text-xs text-[#F5D900] bg-[#242424] border border-[#F5D900]/40 px-3 py-1 uppercase tracking-widest font-bold rounded-xs">
            05 // WORD ON THE LANE
          </span>
          <span className="font-hand text-[#C4B5FD] text-xl">
            ~ real notes left by guests & regulars
          </span>
        </div>

        {/* Big Editorial Hero Quote Block */}
        <div className="bg-[#1c1c1c] border-2 border-[#F2EBD7]/30 p-8 sm:p-12 md:p-16 rounded-sm shadow-[8px_8px_0px_#000] relative mb-14">
          {/* Top tape */}
          <div className="washi-tape-yellow w-36 -top-3.5 left-12 rotate-1"></div>
          
          <div className="flex items-center gap-1.5 text-[#F5D900] mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#F5D900]" />
            ))}
            <span className="font-mono-code text-xs font-bold text-[#F2EBD7]/80 ml-2">
              4.6★ RATING ON GOOGLE & ZOMATO
            </span>
          </div>

          <blockquote className="font-pixel text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F2EBD7] uppercase font-bold leading-[1.15] mb-6">
            “THE PLACE IS SO COSY,{' '}
            <span className="text-[#F5D900] underline decoration-[#F5D900] decoration-wavy decoration-1 underline-offset-8">
              BEAUTIFUL AMBIENCE
            </span>{' '}
            AND LOVELY PEOPLE.”
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#F2EBD7]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F5D900] text-[#171717] font-bold font-mono-code flex items-center justify-center text-sm shadow-[2px_2px_0px_#000]">
                A
              </div>
              <div>
                <p className="font-mono-code text-sm font-bold text-[#F2EBD7]">Ananya Sharma</p>
                <p className="font-mono-code text-xs text-[#F2EBD7]/60">Verified Local Guide · Begumpet regular</p>
              </div>
            </div>

            <p className="font-hand text-2xl text-[#C4B5FD] transform -rotate-1">
              "Left 3 sketches in their guestbook on table 4!"
            </p>
          </div>
        </div>

        {/* Editorial Asymmetrical Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.slice(1).map((review, idx) => (
            <div
              key={review.id}
              className={`bg-[#202020] p-6 border border-[#F2EBD7]/20 hover:border-[#F5D900] transition-colors rounded-sm shadow-[4px_4px_0px_#000] flex flex-col justify-between ${
                idx % 2 === 0 ? '-rotate-0.5' : 'rotate-0.5'
              }`}
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#F5D900]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5D900]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-code bg-[#141414] text-[#C4B5FD] px-2 py-0.5 border border-[#C4B5FD]/30 font-bold">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-mono-code text-xs sm:text-sm text-[#F2EBD7]/85 leading-relaxed mb-4">
                  “{review.quote}”
                </p>

                {/* Handwritten Reviewer Sticky */}
                {review.handwrittenComment && (
                  <div className="p-2.5 bg-[#171717] border-l-2 border-[#F5D900] mb-4">
                    <p className="font-hand text-base sm:text-lg text-[#F5D900] leading-tight">
                      ↳ {review.handwrittenComment}
                    </p>
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-[#F2EBD7]/10 flex items-center justify-between text-xs font-mono-code text-[#F2EBD7]/60">
                <span className="font-bold text-[#F2EBD7]">{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

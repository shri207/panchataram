import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const address = 'Lane Number 5, Brahman Wadi, Begumpet, Hyderabad, Telangana 500016';
  const phoneNumber = '091828 53708';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#171717] bg-grain relative overflow-hidden border-b border-[#F2EBD7]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Marker */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono-code text-xs text-[#F5D900] bg-[#242424] border border-[#F5D900]/40 px-3 py-1 uppercase tracking-widest font-bold rounded-xs">
            06 // REACH THE CAFE
          </span>
          <span className="font-hand text-[#C4B5FD] text-xl">
            ~ tucked right into the heart of Begumpet
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Address, Phone & Actions (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            <div>
              <h2
                id="location-title"
                className="font-pixel text-4xl sm:text-6xl font-bold tracking-tight text-[#F2EBD7] uppercase mb-4"
              >
                FIND YOUR WAY HERE
              </h2>
              <p className="font-mono-code text-sm text-[#F2EBD7]/80 leading-relaxed">
                Take the quiet turn into Brahman Wadi off the main Begumpet road. Look out for the black awning, warm fairy bulbs, and chalkboard greeting.
              </p>
            </div>

            {/* Address Box with Copy Button */}
            <div className="bg-[#202020] p-6 border-2 border-[#F2EBD7]/30 rounded-sm shadow-[6px_6px_0px_#000] space-y-4">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5D900] shrink-0 mt-1" />
                <div>
                  <h3 className="font-pixel text-sm text-[#F5D900] uppercase font-bold mb-1">
                    EXACT LOCATION
                  </h3>
                  <p className="font-mono-code text-sm sm:text-base text-[#F2EBD7] font-bold leading-snug">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyAddress}
                  className="px-3.5 py-1.5 bg-[#171717] border border-[#F2EBD7]/30 text-xs font-mono-code text-[#F2EBD7] hover:border-[#F5D900] hover:text-[#F5D900] rounded-xs flex items-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY FULL ADDRESS</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Timings & Contact Info Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Hours Card */}
              <div className="bg-[#202020] p-5 border border-[#F2EBD7]/20 rounded-sm">
                <div className="flex items-center gap-2 text-[#C4B5FD] mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-pixel text-xs font-bold uppercase">OPEN HOURS</span>
                </div>
                <p className="font-mono-code text-base font-bold text-[#F2EBD7]">
                  11:00 AM – 11:00 PM
                </p>
                <p className="font-mono-code text-xs text-[#F2EBD7]/60 mt-1">
                  Monday to Sunday (All 7 Days)
                </p>
              </div>

              {/* Direct Phone Card */}
              <div className="bg-[#202020] p-5 border border-[#F2EBD7]/20 rounded-sm">
                <div className="flex items-center gap-2 text-[#F5D900] mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-pixel text-xs font-bold uppercase">DIRECT LINE</span>
                </div>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="font-mono-code text-base font-bold text-[#F2EBD7] hover:text-[#F5D900] transition-colors block"
                >
                  {phoneNumber}
                </a>
                <p className="font-mono-code text-xs text-[#F2EBD7]/60 mt-1">
                  For table holds & queries
                </p>
              </div>

            </div>

            {/* Action Sticker Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* GET DIRECTIONS */}
              <a
                href="https://maps.google.com/?q=Panchatantra+Cafe+Lane+Number+5+Brahman+Wadi+Begumpet+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-main-btn"
                className="px-6 py-3.5 bg-[#F5D900] text-[#171717] font-mono-code font-bold text-sm tracking-wider uppercase border-2 border-[#171717] rounded-sm hover:-translate-y-1 shadow-[4px_4px_0px_#000] flex items-center gap-2 transition-transform"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS →</span>
              </a>

              {/* CALL US */}
              <a
                href="tel:09182853708"
                id="call-us-main-btn"
                className="px-6 py-3.5 bg-[#252525] text-[#F2EBD7] font-mono-code font-bold text-sm tracking-wider uppercase border-2 border-[#F2EBD7]/40 rounded-sm hover:border-[#F5D900] hover:text-[#F5D900] shadow-[4px_4px_0px_#000] flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F5D900]" />
                <span>CALL US →</span>
              </a>
            </div>

            {/* Handy Landmark Tips */}
            <div className="p-4 bg-[#1b1b1b] border-l-2 border-[#C4B5FD] rounded-xs space-y-1">
              <span className="font-pixel text-xs text-[#C4B5FD] uppercase font-bold">
                LANDMARK GUIDE
              </span>
              <p className="font-mono-code text-xs text-[#F2EBD7]/75">
                Nearby landmarks: Close to Country Club & Begumpet Flyover junction. Easy bike parking available right outside lane 5.
              </p>
            </div>

          </div>

          {/* Right Column: Stylized Black-and-White Map / City-Grid Illustration (6 cols) */}
          <div className="lg:col-span-6 relative">
            
            <div className="bg-[#1c1c1c] p-5 sm:p-6 border-2 border-[#F2EBD7]/30 shadow-[8px_8px_0px_#000] rounded-sm relative">
              
              {/* Washi tape on map */}
              <div className="washi-tape-yellow w-32 -top-3.5 right-10 rotate-2"></div>

              <div className="flex items-center justify-between mb-4 border-b border-[#F2EBD7]/15 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-pixel text-xs text-[#F2EBD7] font-bold">
                    HYDERABAD SECTOR // BEGUMPET GRID
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-[#F5D900]">17.4442° N, 78.4718° E</span>
              </div>

              {/* Stylized Abstract Vector City Map Grid */}
              <div className="relative aspect-[4/3] bg-[#121212] border border-[#F2EBD7]/20 overflow-hidden select-none">
                
                <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="map-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(242, 235, 215, 0.08)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-pattern)" />

                  {/* Major Begumpet Roads in Stylized White/Cream Stroke */}
                  {/* Main Begumpet Highway / Road */}
                  <path d="M 20 280 Q 180 250 480 210" stroke="#F2EBD7" strokeWidth="8" strokeOpacity="0.4" />
                  <path d="M 20 280 Q 180 250 480 210" stroke="#121212" strokeWidth="2" strokeDasharray="6 6" />

                  {/* Brahman Wadi Connector Road */}
                  <path d="M 160 360 L 220 180 L 260 40" stroke="#F2EBD7" strokeWidth="5" strokeOpacity="0.5" />
                  
                  {/* Lane 5 Alley */}
                  <path d="M 220 180 L 340 160 L 370 110" stroke="#F5D900" strokeWidth="4" strokeDasharray="4 2" />

                  {/* Flyover / Rail Line */}
                  <path d="M 40 60 L 460 340" stroke="#C4B5FD" strokeWidth="3" strokeOpacity="0.3" strokeDasharray="8 4" />

                  {/* Blocks / Buildings Footprints */}
                  <rect x="70" y="160" width="60" height="70" fill="#202020" stroke="#F2EBD7" strokeWidth="1" strokeOpacity="0.2" />
                  <rect x="145" y="80" width="55" height="60" fill="#202020" stroke="#F2EBD7" strokeWidth="1" strokeOpacity="0.2" />
                  <rect x="250" y="210" width="90" height="70" fill="#202020" stroke="#F2EBD7" strokeWidth="1" strokeOpacity="0.2" />
                  <rect x="280" y="80" width="70" height="50" fill="#202020" stroke="#F2EBD7" strokeWidth="1" strokeOpacity="0.2" />
                  <rect x="360" y="180" width="80" height="80" fill="#202020" stroke="#F2EBD7" strokeWidth="1" strokeOpacity="0.2" />

                  {/* Country Club Landmark label */}
                  <circle cx="110" cy="220" r="4" fill="#C4B5FD" />
                  <text x="120" y="225" fill="#C4B5FD" fontSize="10" fontFamily="'DM Mono', monospace">COUNTRY CLUB</text>

                  {/* Flyover label */}
                  <text x="50" y="80" fill="rgba(242,235,215,0.4)" fontSize="9" fontFamily="'DM Mono', monospace" transform="rotate(32 50 80)">BEGUMPET FLYOVER</text>

                  {/* Main Road label */}
                  <text x="300" y="245" fill="rgba(242,235,215,0.6)" fontSize="10" fontFamily="'DM Mono', monospace">MAIN ROAD</text>

                  {/* Panchatantra Cafe Pinpoint */}
                  <g transform="translate(340, 155)">
                    {/* Pulsing Pin Ring */}
                    <circle cx="0" cy="0" r="22" fill="#F5D900" fillOpacity="0.2">
                      <animate attributeName="r" values="14;28;14" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="fillOpacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Logo pin 'प.' badge */}
                    <rect x="-18" y="-18" width="36" height="36" fill="#000" stroke="#F5D900" strokeWidth="2" rx="2" />
                    <text x="0" y="7" fill="#F2EBD7" fontSize="20" fontWeight="bold" fontFamily="'Rozha One', serif" textAnchor="middle">प.</text>

                    {/* Speech bubble indicator */}
                    <rect x="24" y="-30" width="125" height="28" fill="#F5D900" stroke="#000" strokeWidth="1.5" rx="2" />
                    <polygon points="24,-16 16,-12 24,-8" fill="#F5D900" stroke="#000" strokeWidth="1.5" />
                    <text x="86" y="-12" fill="#171717" fontSize="10" fontWeight="bold" fontFamily="'Pixelify Sans', monospace" textAnchor="middle">YOU ARE HERE!</text>
                  </g>
                </svg>

                {/* Open in Google Maps overlay button */}
                <a
                  href="https://maps.google.com/?q=Panchatantra+Cafe+Lane+Number+5+Brahman+Wadi+Begumpet+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 right-3 bg-[#171717]/95 border border-[#F5D900]/60 p-2 text-center text-xs font-mono-code text-[#F5D900] font-bold hover:bg-[#F5D900] hover:text-[#171717] transition-colors flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>OPEN INTERACTIVE GOOGLE MAPS</span>
                </a>
              </div>

              {/* Map Footer Note */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono-code text-[#F2EBD7]/70">
                <span>Lane 5 · Brahman Wadi</span>
                <span className="font-hand text-[#F5D900] text-lg">"Follow the aroma of fresh roast"</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

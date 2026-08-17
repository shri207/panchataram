import React, { useState, useEffect } from 'react';
import { Phone, Volume2, VolumeX, ShoppingBag, Menu as MenuIcon, X, MapPin, Sparkles } from 'lucide-react';
import { cafeAudio } from '../utils/audioSynth';
import { OrderItem } from '../types';

interface NavbarProps {
  orderItems: OrderItem[];
  onOpenOrderDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ orderItems, onOpenOrderDrawer }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const totalItemsCount = orderItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const playing = cafeAudio.toggle();
    setIsAudioPlaying(playing);
  };

  const navLinks = [
    { label: 'MENU', href: '#menu' },
    { label: 'STORY', href: '#story' },
    { label: 'SPECIALS', href: '#featured' },
    { label: 'THE VIBE', href: '#vibe' },
    { label: 'COMMUNITY', href: '#community' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'FIND US', href: '#location' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171717]/95 backdrop-blur-md border-b border-[#F2EBD7]/15 py-3 shadow-xl'
          : 'bg-[#171717]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Authentic Devanagari 'प.' Icon Box */}
          <div className="w-10 h-10 bg-black border border-[#F2EBD7]/30 flex items-center justify-center rounded-sm transition-transform duration-200 group-hover:scale-105 group-hover:border-[#F5D900] shadow-[2px_2px_0px_#000]">
            <span className="text-[#F2EBD7] font-devanagari text-2xl font-bold leading-none select-none">
              प.
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-lg sm:text-xl font-bold tracking-tight text-[#F2EBD7] group-hover:text-[#F5D900] transition-colors">
                PANCHATANTRA
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono-code bg-[#F5D900] text-[#171717] px-1.5 py-0.5 font-bold uppercase rounded-xs">
                CAFE
              </span>
            </div>
            <span className="text-[10px] font-mono-code text-[#F2EBD7]/60 tracking-wider">
              BEGUMPET · HYDERABAD
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono-code font-bold tracking-widest text-[#F2EBD7]/80 hover:text-[#F5D900] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#F5D900] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Quick Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Lo-Fi Toggle */}
          <button
            onClick={handleAudioToggle}
            id="lofi-audio-toggle"
            title="Toggle Cozy Cafe Lo-Fi Audio"
            className={`px-2.5 py-1.5 text-[11px] font-mono-code flex items-center gap-1.5 border rounded-sm transition-all ${
              isAudioPlaying
                ? 'bg-[#C4B5FD] text-[#171717] border-[#C4B5FD] font-bold shadow-[2px_2px_0px_#000]'
                : 'bg-transparent text-[#F2EBD7]/80 border-[#F2EBD7]/20 hover:border-[#F5D900] hover:text-[#F5D900]'
            }`}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#171717]" />
                <span className="hidden sm:inline">LO-FI: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LO-FI ATMOSPHERE</span>
              </>
            )}
          </button>

          {/* Table Order Slip / Shortlist Drawer Trigger */}
          <button
            onClick={onOpenOrderDrawer}
            id="navbar-order-slip-btn"
            className="relative px-3 py-1.5 text-xs font-mono-code font-bold bg-[#F5D900] text-[#171717] border border-[#171717] rounded-sm hover:bg-yellow-300 transition-transform active:scale-95 shadow-[2px_2px_0px_#000] flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ORDER SLIP</span>
            {totalItemsCount > 0 && (
              <span className="bg-[#171717] text-[#F5D900] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Quick Call Link */}
          <a
            href="tel:09182853708"
            id="navbar-quick-call"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code text-[#F2EBD7] border border-[#F2EBD7]/30 rounded-sm hover:border-[#F2EBD7] hover:bg-[#F2EBD7]/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F5D900]" />
            <span>091828 53708</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 text-[#F2EBD7] hover:text-[#F5D900] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#171717] border-b border-[#F2EBD7]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#F2EBD7]/10">
            <span className="text-xs font-mono-code text-[#F5D900] flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> OPEN TODAY · 11 AM - 11 PM
            </span>
            <span className="text-xs font-mono-code text-[#F2EBD7]/60">LANE 5, BEGUMPET</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-[#222] border border-[#F2EBD7]/15 rounded-sm text-xs font-mono-code font-bold text-[#F2EBD7] hover:border-[#F5D900] hover:text-[#F5D900] transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:09182853708"
              className="w-full text-center py-2.5 bg-[#262626] text-[#F2EBD7] text-xs font-mono-code font-bold border border-[#F2EBD7]/30 rounded-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F5D900]" />
              CALL: 091828 53708
            </a>
            <a
              href="https://maps.google.com/?q=Panchatantra+Cafe+Lane+Number+5+Brahman+Wadi+Begumpet+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-[#F5D900] text-[#171717] text-xs font-mono-code font-bold rounded-sm flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000]"
            >
              <MapPin className="w-4 h-4" />
              GET DIRECTIONS TO BEGUMPET
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

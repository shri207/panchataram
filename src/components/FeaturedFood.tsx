import React from 'react';
import { MenuItem } from '../types';
import { Sparkles, ArrowUpRight, Flame, Heart, Star } from 'lucide-react';

interface FeaturedFoodProps {
  onSelectDish: (item: MenuItem) => void;
  onAddToOrder: (item: MenuItem) => void;
}

export const FeaturedFood: React.FC<FeaturedFoodProps> = ({
  onSelectDish,
  onAddToOrder,
}) => {
  const featuredCards = [
    {
      id: 'katsu-curry',
      name: 'Katsu Curry Chicken',
      price: 380,
      badge: "DON'T LEAVE WITHOUT IT",
      badgeColor: 'bg-[#F5D900] text-[#171717]',
      handwrittenLabel: 'TRY THIS →',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
      description: 'Panko golden crumbed chicken breast with velvety aromatic Japanese curry sauce over sticky rice.',
      rotation: 'rotate-1',
      colSpan: 'lg:col-span-7',
    },
    {
      id: 'chilli-paneer',
      name: 'The OG Chilli Paneer',
      price: 260,
      badge: 'PANCHATANTRA FAV',
      badgeColor: 'bg-[#C4B5FD] text-[#171717]',
      handwrittenLabel: 'Lane 5 Classic!',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80',
      description: 'Crispy cottage cheese cubes tossed in scallions, garlic soy glaze & fresh green bird’s eye chillies.',
      rotation: '-rotate-1',
      colSpan: 'lg:col-span-5',
    },
    {
      id: 'loose-prawns',
      name: 'Loose Prawns',
      price: 410,
      badge: 'HYDERABAD CRUNCH',
      badgeColor: 'bg-[#F5D900] text-[#171717]',
      handwrittenLabel: 'CRISPY & JUICY →',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80',
      description: 'River prawns tossed in crushed Tellicherry black pepper, toasted curry leaves & roasted garlic.',
      rotation: '-rotate-2',
      colSpan: 'lg:col-span-4',
    },
    {
      id: 'nutella-cold-coffee',
      name: 'Nutella Cold Coffee',
      price: 220,
      badge: 'SWEET REFRESHMENT',
      badgeColor: 'bg-[#C4B5FD] text-[#171717]',
      handwrittenLabel: 'Double Espresso Base',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80',
      description: 'Rich espresso, cold whole milk, hefty swirls of hazelnut Nutella & vanilla ice cream scoop.',
      rotation: 'rotate-2',
      colSpan: 'lg:col-span-4',
    },
    {
      id: 'lamb-lasagna',
      name: 'Lamb Lasagna',
      price: 430,
      badge: 'SLOW-BAKED COMFORT',
      badgeColor: 'bg-[#F5D900] text-[#171717]',
      handwrittenLabel: 'CHEESY PULL →',
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80',
      description: 'Spiced minced lamb ragu, nutmeg bechamel, handmade pasta sheets & browned mozzarella crust.',
      rotation: '-rotate-1',
      colSpan: 'lg:col-span-4',
    },
  ];

  return (
    <section id="featured" className="py-20 sm:py-28 bg-[#171717] bg-grain relative overflow-hidden border-b border-[#F2EBD7]/15">
      
      {/* Background Graphic elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-code text-xs text-[#F5D900] bg-[#222] border border-[#F5D900]/40 px-2.5 py-1 font-bold uppercase rounded-xs">
                02 // EDITORIAL SHOWCASE
              </span>
              <span className="font-hand text-[#C4B5FD] text-xl">
                ~ the plates everyone photographs
              </span>
            </div>

            <h2
              id="featured-food-title"
              className="font-pixel text-4xl sm:text-6xl font-bold tracking-tight text-[#F2EBD7] uppercase"
            >
              FEATURED PLATES
            </h2>
          </div>

          <p className="font-mono-code text-xs sm:text-sm text-[#F2EBD7]/70 max-w-md">
            Prepared from scratch with no pre-packaged pastes. Here's what makes first-timers turn into Begumpet regulars.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {featuredCards.map((card) => (
            <div
              key={card.id}
              id={`featured-card-${card.id}`}
              className={`${card.colSpan} group relative bg-[#202020] p-4 sm:p-5 border-2 border-[#F2EBD7]/25 hover:border-[#F5D900] shadow-[6px_6px_0px_#000] rounded-sm transition-all duration-300 ${card.rotation} hover:rotate-0`}
            >
              {/* Sticker Badge on Image */}
              <div
                className={`absolute -top-3.5 left-6 ${card.badgeColor} font-mono-code text-[11px] font-bold px-3 py-1 border-2 border-[#171717] rotate-[-2deg] shadow-[3px_3px_0px_#000] z-20`}
              >
                {card.badge}
              </div>

              {/* Handwritten Label with Arrow */}
              <div className="absolute top-4 right-5 z-20 pointer-events-none">
                <span className="font-hand text-[#F5D900] text-xl sm:text-2xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {card.handwrittenLabel}
                </span>
              </div>

              {/* Photo Frame with Irregular Aesthetic */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#111] mb-4 border border-[#F2EBD7]/20">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Price Pill Floating */}
                <div className="absolute bottom-3 right-3 bg-[#171717]/90 text-[#F5D900] font-mono-code font-bold text-sm px-3 py-1 border border-[#F5D900]/50 shadow-[2px_2px_0px_#000]">
                  ₹{card.price}
                </div>
              </div>

              {/* Caption & Title Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#F2EBD7] group-hover:text-[#F5D900] transition-colors">
                    {card.name}
                  </h3>
                </div>

                <p className="font-mono-code text-xs text-[#F2EBD7]/80 leading-relaxed">
                  {card.description}
                </p>

                {/* Quick Action Buttons */}
                <div className="pt-3 flex items-center justify-between border-t border-[#F2EBD7]/10">
                  <span className="text-[11px] font-mono-code text-[#C4B5FD] flex items-center gap-1 font-bold">
                    <Flame className="w-3.5 h-3.5 text-[#F5D900]" /> FRESH INGREDIENTS
                  </span>

                  <a
                    href="#menu"
                    className="text-xs font-mono-code text-[#F5D900] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>ORDER ON MENU</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

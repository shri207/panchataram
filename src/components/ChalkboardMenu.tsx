import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem, MenuCategory, DietaryType, OrderItem } from '../types';
import { Sparkles, Plus, Search, Filter, Flame, Star, Check, Info } from 'lucide-react';

interface ChalkboardMenuProps {
  onAddToOrder: (item: MenuItem) => void;
  orderItems: OrderItem[];
  onSelectDish: (item: MenuItem) => void;
}

export const ChalkboardMenu: React.FC<ChalkboardMenuProps> = ({
  onAddToOrder,
  orderItems,
  onSelectDish,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('must_try');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory | 'all'; label: string; count: number }[] = [
    { id: 'must_try', label: '⭐ MUST TRY', count: MENU_ITEMS.filter((i) => i.isMustTry).length },
    { id: 'cafe_favourites', label: '☕ CAFE FAVOURITES', count: MENU_ITEMS.filter((i) => i.category === 'cafe_favourites').length },
    { id: 'small_plates', label: '🍟 SMALL PLATES', count: MENU_ITEMS.filter((i) => i.category === 'small_plates').length },
    { id: 'mains', label: '🍛 MAINS & BOWLS', count: MENU_ITEMS.filter((i) => i.category === 'mains').length },
    { id: 'burgers_sandwiches', label: '🥪 TOASTIES & BURGERS', count: MENU_ITEMS.filter((i) => i.category === 'burgers_sandwiches').length },
    { id: 'all', label: '📋 FULL BOARD', count: MENU_ITEMS.length },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory === 'must_try') {
        if (!item.isMustTry) return false;
      } else if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Dietary match
      if (dietaryFilter !== 'all' && item.dietary !== dietaryFilter) {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchNote = item.handwrittenNote?.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchNote) return false;
      }

      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  const getItemQuantityInOrder = (id: string) => {
    const found = orderItems.find((o) => o.menuItem.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#151515] bg-chalkboard relative border-b border-[#F2EBD7]/15">
      
      {/* Chalkboard frame top border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Chalk Typography */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#202020] border border-[#F5D900]/40 rounded-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D900]" />
            <span className="font-mono-code text-xs text-[#F5D900] font-bold tracking-widest uppercase">
              HANDWRITTEN DAILY SPECIALS
            </span>
          </div>

          <h2
            id="menu-section-title"
            className="font-pixel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2EBD7] uppercase drop-shadow-[3px_3px_0px_rgba(0,0,0,0.9)] mb-4"
          >
            WHAT'S COOKING
          </h2>

          <p className="font-hand text-2xl sm:text-3xl text-[#C4B5FD] transform -rotate-1">
            ~ blackboard staples, secret spice blends & fresh brews ~
          </p>

          {/* Doodled Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="text-[#F5D900]">★</span>
            <div className="w-24 h-[1.5px] bg-[#F2EBD7]/30 border-dashed"></div>
            <span className="font-devanagari text-lg text-[#F2EBD7]/70">पंचतंत्र</span>
            <div className="w-24 h-[1.5px] bg-[#F2EBD7]/30 border-dashed"></div>
            <span className="text-[#F5D900]">★</span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-[#1e1e1e] p-4 sm:p-6 border-2 border-[#F2EBD7]/25 rounded-sm shadow-[6px_6px_0px_#000] mb-10 space-y-4">
          
          {/* Categories Tab Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-mono-code font-bold tracking-wider rounded-sm transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#F5D900] text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_#000] -translate-y-0.5'
                    : 'bg-[#282828] text-[#F2EBD7]/80 border border-[#F2EBD7]/20 hover:border-[#F5D900] hover:text-[#F5D900]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-xs ${
                  activeCategory === cat.id ? 'bg-[#171717] text-[#F5D900]' : 'bg-[#171717]/60 text-[#F2EBD7]/60'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search & Dietary Sub-Filter Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#F2EBD7]/15">
            
            {/* Dietary Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-code text-[#F2EBD7]/60 uppercase flex items-center gap-1">
                <Filter className="w-3 h-3" /> DIET:
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1 text-xs font-mono-code rounded-xs ${
                  dietaryFilter === 'all'
                    ? 'bg-[#F2EBD7] text-[#171717] font-bold'
                    : 'bg-[#2a2a2a] text-[#F2EBD7]/70 hover:text-white'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-2.5 py-1 text-xs font-mono-code rounded-xs flex items-center gap-1 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-[#2a2a2a] text-emerald-400 hover:bg-emerald-950/40'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> VEG ONLY
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-2.5 py-1 text-xs font-mono-code rounded-xs flex items-center gap-1 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-rose-700 text-white font-bold'
                    : 'bg-[#2a2a2a] text-rose-400 hover:bg-rose-950/40'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500"></span> NON-VEG
              </button>
            </div>

            {/* Quick Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-[#F2EBD7]/50 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dish (e.g. Katsu, Paneer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#171717] border border-[#F2EBD7]/30 text-xs font-mono-code text-[#F2EBD7] pl-9 pr-3 py-1.5 rounded-sm focus:outline-none focus:border-[#F5D900]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#F2EBD7]/50 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Blackboard Menu Items List (Imperfect chalk layout with handwritten accents) */}
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center border-2 border-dashed border-[#F2EBD7]/30 bg-[#1e1e1e] rounded-sm">
            <p className="font-pixel text-xl text-[#F5D900] mb-2">NO DISHES MATCH YOUR CHALK FILTER</p>
            <p className="font-mono-code text-xs text-[#F2EBD7]/70">Try clearing your search keyword or switching dietary filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#F5D900] text-[#171717] font-mono-code text-xs font-bold rounded-sm shadow-[2px_2px_0px_#000]"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredItems.map((item, idx) => {
              const qty = getItemQuantityInOrder(item.id);
              
              return (
                <div
                  key={item.id}
                  id={`menu-dish-${item.id}`}
                  className="group relative bg-[#1c1c1c] p-5 sm:p-6 border-2 border-[#F2EBD7]/20 hover:border-[#F5D900] transition-all duration-200 shadow-[4px_4px_0px_#000] rounded-sm flex flex-col justify-between"
                >
                  {/* Imperfect chalk corner tag if Must Try or Fav */}
                  {item.isMustTry && (
                    <div className="absolute -top-3 -right-2 bg-[#F5D900] text-[#171717] font-mono-code text-[10px] font-bold px-2.5 py-0.5 border border-[#171717] rotate-2 shadow-[2px_2px_0px_#000] flex items-center gap-1 z-10">
                      <Star className="w-2.5 h-2.5 fill-[#171717]" /> MUST TRY
                    </div>
                  )}

                  {item.isFav && !item.isMustTry && (
                    <div className="absolute -top-3 -right-2 bg-[#C4B5FD] text-[#171717] font-mono-code text-[10px] font-bold px-2.5 py-0.5 border border-[#171717] -rotate-2 shadow-[2px_2px_0px_#000] z-10">
                      PANCHATANTRA FAV
                    </div>
                  )}

                  <div>
                    {/* Top Row: Name, Dietary badge & Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Dietary Icon indicator */}
                        <span
                          className={`w-3.5 h-3.5 border flex items-center justify-center p-0.5 rounded-xs shrink-0 ${
                            item.dietary === 'veg'
                              ? 'border-emerald-500'
                              : 'border-rose-500'
                          }`}
                          title={item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.dietary === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'
                            }`}
                          ></span>
                        </span>

                        <h3 className="font-pixel text-lg sm:text-xl font-bold text-[#F2EBD7] group-hover:text-[#F5D900] transition-colors leading-tight">
                          {item.name}
                        </h3>

                        {item.spiciness && item.spiciness > 1 && (
                          <span className="flex text-rose-400 text-xs" title={`Spiciness level ${item.spiciness}/3`}>
                            {'🌶️'.repeat(item.spiciness)}
                          </span>
                        )}
                      </div>

                      {/* Price in Chalkboard style */}
                      <div className="text-right shrink-0">
                        <span className="font-mono-code text-base sm:text-lg font-bold text-[#F5D900] bg-[#141414] px-2.5 py-1 border border-[#F5D900]/30 rounded-xs shadow-[2px_2px_0px_#000]">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>

                    {/* Dish Description */}
                    <p className="font-mono-code text-xs text-[#F2EBD7]/75 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Handwritten Chalk Note */}
                    {item.handwrittenNote && (
                      <div className="flex items-center gap-1.5 mb-4 text-[#C4B5FD]">
                        <span className="text-xs">↳</span>
                        <p className="font-hand text-base sm:text-lg italic leading-none">
                          "{item.handwrittenNote}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#F2EBD7]/10 mt-auto">
                    
                    {/* View Dish Photo / Details Button */}
                    <button
                      onClick={() => onSelectDish(item)}
                      className="text-[11px] font-mono-code text-[#F2EBD7]/70 hover:text-[#F5D900] flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>VIEW PHOTO & NOTES</span>
                    </button>

                    {/* Add to Order Button */}
                    <button
                      onClick={() => onAddToOrder(item)}
                      id={`add-order-btn-${item.id}`}
                      className={`px-3 py-1.5 text-xs font-mono-code font-bold rounded-sm border transition-all flex items-center gap-1.5 ${
                        qty > 0
                          ? 'bg-[#C4B5FD] text-[#171717] border-[#171717] shadow-[2px_2px_0px_#000]'
                          : 'bg-[#252525] text-[#F2EBD7] border-[#F2EBD7]/30 hover:bg-[#F5D900] hover:text-[#171717] hover:border-[#171717] shadow-[2px_2px_0px_#000]'
                      }`}
                    >
                      {qty > 0 ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>ADDED ({qty})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>+ ADD TO SLIP</span>
                        </>
                      )}
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Blackboard Chalk Footer Note */}
        <div className="mt-12 p-6 bg-[#1a1a1a] border border-[#F2EBD7]/20 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="font-pixel text-xs text-[#F5D900] uppercase font-bold">
              KITCHEN & BREW NOTES
            </span>
            <p className="font-mono-code text-xs text-[#F2EBD7]/80">
              All dishes cooked fresh to order. For customizations (less spicy, oat milk, extra cheese), just let our staff know!
            </p>
          </div>
          <a
            href="tel:09182853708"
            className="shrink-0 px-4 py-2 bg-[#252525] text-[#F2EBD7] border border-[#F2EBD7]/40 hover:border-[#F5D900] text-xs font-mono-code font-bold rounded-sm shadow-[2px_2px_0px_#000]"
          >
            ORDER VIA CALL → 091828 53708
          </a>
        </div>

      </div>
    </section>
  );
};

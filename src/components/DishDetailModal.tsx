import React from 'react';
import { MenuItem } from '../types';
import { X, Star, Plus, Check, Flame, Heart, Sparkles } from 'lucide-react';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToOrder: (item: MenuItem) => void;
  isInOrder: boolean;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  onAddToOrder,
  isInOrder,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
      ></div>

      {/* Modal Card */}
      <div className="relative bg-[#1c1c1c] border-2 border-[#F2EBD7]/30 max-w-lg w-full rounded-sm shadow-[10px_10px_0px_#000] z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Washi Tape */}
        <div className="washi-tape-yellow w-28 -top-3 left-8 rotate-1"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 bg-[#171717]/90 text-[#F2EBD7] hover:text-[#F5D900] border border-[#F2EBD7]/30 rounded-xs flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-[16/10] bg-black overflow-hidden border-b-2 border-[#F2EBD7]/20">
          <img
            src={item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span
              className={`px-2.5 py-0.5 text-[10px] font-mono-code font-bold rounded-xs uppercase ${
                item.dietary === 'veg'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-rose-600 text-white'
              }`}
            >
              {item.dietary === 'veg' ? '100% VEGETARIAN' : 'NON-VEGETARIAN'}
            </span>

            {item.isMustTry && (
              <span className="bg-[#F5D900] text-[#171717] text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-xs flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#171717]" /> MUST TRY
              </span>
            )}
          </div>

          <div className="absolute bottom-3 right-3 bg-[#171717]/90 text-[#F5D900] font-mono-code font-bold text-lg px-3 py-1 border border-[#F5D900]/50">
            ₹{item.price}
          </div>
        </div>

        {/* Dish Content */}
        <div className="p-6 space-y-4">
          
          <div>
            <h3 className="font-pixel text-2xl text-[#F2EBD7] font-bold">
              {item.name}
            </h3>
            <p className="font-mono-code text-xs text-[#F2EBD7]/80 mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Handwritten Chef Note */}
          {item.handwrittenNote && (
            <div className="p-3 bg-[#242424] border-l-2 border-[#F5D900] rounded-xs">
              <span className="text-[10px] font-mono-code text-[#F5D900] font-bold block mb-0.5">
                CHEF'S BLACKBOARD SCRAP
              </span>
              <p className="font-hand text-xl text-[#C4B5FD]">
                "{item.handwrittenNote}"
              </p>
            </div>
          )}

          {/* Spice and Preparation info */}
          <div className="flex items-center justify-between text-xs font-mono-code text-[#F2EBD7]/60 pt-2 border-t border-[#F2EBD7]/10">
            <span>Made fresh to order in wok</span>
            <span>Begumpet, Hyderabad</span>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                onAddToOrder(item);
                onClose();
              }}
              className="flex-1 py-3 bg-[#F5D900] text-[#171717] font-mono-code font-bold text-xs sm:text-sm tracking-wider uppercase border-2 border-[#171717] rounded-xs shadow-[3px_3px_0px_#000] hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>{isInOrder ? 'ADD ANOTHER TO ORDER SLIP' : 'ADD TO ORDER SLIP (₹' + item.price + ')'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

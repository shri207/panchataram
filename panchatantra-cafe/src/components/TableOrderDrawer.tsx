import React, { useState } from 'react';
import { OrderItem } from '../types';
import { X, Trash2, Plus, Minus, Copy, Check, ShoppingBag, Send, Sparkles, Users } from 'lucide-react';

interface TableOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearOrder: () => void;
}

export const TableOrderDrawer: React.FC<TableOrderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  const [splitCount, setSplitCount] = useState(1);
  const [copied, setCopied] = useState(false);
  const [tableNumber, setTableNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.menuItem.price * item.quantity,
    0
  );
  const perPerson = splitCount > 0 ? Math.ceil(subtotal / splitCount) : subtotal;

  const generateOrderText = () => {
    let text = `✦ PANCHATANTRA CAFE ORDER SLIP ✦\n`;
    if (tableNumber.trim()) text += `Table / Spot: ${tableNumber}\n`;
    text += `---------------------------------\n`;
    orderItems.forEach((item, index) => {
      text += `${index + 1}. ${item.menuItem.name} x${item.quantity} = ₹${item.menuItem.price * item.quantity}\n`;
    });
    text += `---------------------------------\n`;
    text += `Total: ₹${subtotal}\n`;
    if (splitCount > 1) {
      text += `Split between ${splitCount} people: ₹${perPerson} / person\n`;
    }
    text += `Begumpet, Hyderabad (Lane 5)\n`;
    return text;
  };

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(generateOrderText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#181818] border-l-2 border-[#F2EBD7]/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#F2EBD7]/20 bg-[#1f1f1f] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F5D900] text-[#171717] rounded-xs flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-pixel text-lg text-[#F2EBD7] font-bold">
                  MY TABLE ORDER SLIP
                </h3>
                <p className="font-mono-code text-[10px] text-[#F5D900]">
                  PANCHATANTRA SHORTLIST & TALLY
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#F2EBD7]/70 hover:text-white hover:bg-[#282828] rounded-xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Items list */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            
            {orderItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full border border-dashed border-[#F2EBD7]/40 mx-auto flex items-center justify-center text-[#F2EBD7]/40">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="font-pixel text-sm text-[#F5D900]">YOUR SLIP IS CURRENTLY EMPTY</p>
                <p className="font-mono-code text-xs text-[#F2EBD7]/60 max-w-xs mx-auto">
                  Browse the menu and click <strong>"+ ADD TO SLIP"</strong> on dishes you want to order or shortlist!
                </p>
              </div>
            ) : (
              <>
                {/* Table Number Optional Input */}
                <div className="bg-[#222] p-3 border border-[#F2EBD7]/15 rounded-xs flex items-center justify-between gap-2">
                  <span className="font-mono-code text-xs text-[#F2EBD7]/70 font-bold">
                    TABLE / NOTE:
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Table 4 / Corner"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="bg-[#151515] border border-[#F2EBD7]/20 text-xs font-mono-code text-[#F2EBD7] px-2 py-1 rounded-xs focus:outline-none focus:border-[#F5D900] w-40 text-right"
                  />
                </div>

                {/* Items Container */}
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="bg-[#202020] p-3.5 border border-[#F2EBD7]/15 rounded-xs flex items-center justify-between gap-3 shadow-[2px_2px_0px_#000]"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              item.menuItem.dietary === 'veg' ? 'bg-emerald-400' : 'bg-rose-500'
                            }`}
                          ></span>
                          <h4 className="font-pixel text-sm text-[#F2EBD7] truncate font-bold">
                            {item.menuItem.name}
                          </h4>
                        </div>
                        <p className="font-mono-code text-xs text-[#F5D900]">
                          ₹{item.menuItem.price} each
                        </p>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-2 bg-[#161616] border border-[#F2EBD7]/20 px-2 py-1 rounded-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="text-[#F2EBD7] hover:text-[#F5D900]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono-code text-xs font-bold text-[#F2EBD7] w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="text-[#F2EBD7] hover:text-[#F5D900]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-right shrink-0">
                        <span className="font-mono-code text-sm font-bold text-[#F2EBD7] block">
                          ₹{item.menuItem.price * item.quantity}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.menuItem.id)}
                          className="text-[#F2EBD7]/40 hover:text-rose-400 text-xs"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5 mt-0.5 ml-auto" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bill Splitter Tool */}
                <div className="p-3 bg-[#1e1e1e] border border-[#C4B5FD]/30 rounded-xs space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-[#C4B5FD] font-bold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> SPLIT THE BILL:
                    </span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          onClick={() => setSplitCount(num)}
                          className={`w-6 h-6 text-[11px] font-mono-code rounded-xs font-bold ${
                            splitCount === num
                              ? 'bg-[#C4B5FD] text-[#171717]'
                              : 'bg-[#2a2a2a] text-[#F2EBD7]/70'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {splitCount > 1 && (
                    <div className="flex justify-between text-xs font-mono-code text-[#F2EBD7] pt-1 border-t border-[#F2EBD7]/10">
                      <span>Per Person ({splitCount} people):</span>
                      <strong className="text-[#F5D900]">₹{perPerson}</strong>
                    </div>
                  )}
                </div>
              </>
            )}

          </div>

          {/* Footer Controls */}
          {orderItems.length > 0 && (
            <div className="p-5 border-t border-[#F2EBD7]/20 bg-[#1c1c1c] space-y-3">
              
              <div className="flex justify-between items-baseline font-mono-code">
                <span className="text-xs text-[#F2EBD7]/70">ESTIMATED TOTAL:</span>
                <span className="font-pixel text-2xl font-bold text-[#F5D900]">
                  ₹{subtotal}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {/* Copy Order */}
                <button
                  onClick={handleCopyOrder}
                  className="py-2.5 px-3 bg-[#262626] border border-[#F2EBD7]/30 text-xs font-mono-code font-bold text-[#F2EBD7] hover:border-[#F5D900] rounded-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY SLIP</span>
                    </>
                  )}
                </button>

                {/* Call & Place */}
                <a
                  href="tel:09182853708"
                  className="py-2.5 px-3 bg-[#F5D900] text-[#171717] text-xs font-mono-code font-bold rounded-xs flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000] hover:bg-yellow-300 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>CALL CAFE</span>
                </a>
              </div>

              <button
                onClick={onClearOrder}
                className="w-full text-center text-[11px] font-mono-code text-[#F2EBD7]/40 hover:text-rose-400 transition-colors"
              >
                Clear all items from slip
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

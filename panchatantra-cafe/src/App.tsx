import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ChalkboardMenu } from './components/ChalkboardMenu';
import { FeaturedFood } from './components/FeaturedFood';
import { TheVibe } from './components/TheVibe';
import { CommunityZine } from './components/CommunityZine';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { TableOrderDrawer } from './components/TableOrderDrawer';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuItem, OrderItem } from './types';
import { ShoppingBag, ArrowUpRight, Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>(() => {
    try {
      const saved = localStorage.getItem('panchatantra_order_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('panchatantra_order_items', JSON.stringify(orderItems));
    } catch {
      // safe fallback
    }
  }, [orderItems]);

  const handleAddToOrder = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((o) => o.menuItem.id === item.id);
      if (existing) {
        return prev.map((o) =>
          o.menuItem.id === item.id ? { ...o, quantity: o.quantity + 1 } : o
        );
      } else {
        return [...prev, { menuItem: item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((item) => {
          if (item.menuItem.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setOrderItems((prev) => prev.filter((item) => item.menuItem.id !== id));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const totalItemsCount = orderItems.reduce((acc, i) => acc + i.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] text-[#F2EBD7] flex flex-col selection:bg-[#F5D900] selection:text-[#171717]">
      
      {/* Fixed Indie Navbar */}
      <Navbar
        orderItems={orderItems}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreMenu={scrollToMenu} />

        {/* Intro / Brand Story Manifesto */}
        <BrandStory />

        {/* Featured Food Section with Editorial Layout */}
        <FeaturedFood
          onSelectDish={(dish) => setSelectedDish(dish)}
          onAddToOrder={handleAddToOrder}
        />

        {/* What's Cooking Blackboard Menu */}
        <ChalkboardMenu
          onAddToOrder={handleAddToOrder}
          orderItems={orderItems}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* The Vibe & Daily Rhythm */}
        <TheVibe />

        {/* Community & Instagram Zine */}
        <CommunityZine />

        {/* Customer Reviews & Sentiment */}
        <ReviewsSection />

        {/* Location & Directions */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Table Order Slip Drawer */}
      <TableOrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

      {/* Dish Photo / Notes Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToOrder={handleAddToOrder}
        isInOrder={orderItems.some((o) => o.menuItem.id === selectedDish?.id)}
      />

      {/* Floating Order Slip Button on Mobile if items are added */}
      {totalItemsCount > 0 && !isOrderDrawerOpen && (
        <button
          onClick={() => setIsOrderDrawerOpen(true)}
          id="floating-mobile-order-slip-btn"
          className="md:hidden fixed bottom-6 right-6 z-40 bg-[#F5D900] text-[#171717] px-4 py-3 border-2 border-[#171717] rounded-sm font-mono-code font-bold text-xs shadow-[4px_4px_0px_#000] flex items-center gap-2 animate-bounce"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>ORDER SLIP ({totalItemsCount})</span>
        </button>
      )}

    </div>
  );
}

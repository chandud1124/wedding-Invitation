import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-24 border-t border-accent/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-10">
          <h3 className="font-serif italic font-medium text-3xl sm:text-4xl md:text-5xl text-[#7A102B] mb-4 whitespace-nowrap py-1">
            M. V. Chiranjith & K. Thriveni
          </h3>
          <div className="text-lg font-serif italic text-[#7A102B]">
            Together, Always
          </div>
          <div className="text-sm font-sans font-medium text-foreground/60 tracking-[0.14em] uppercase mt-3">
            23 August 2026
          </div>
        </div>

        <div className="w-16 h-[1.5px] bg-accent/30 mx-auto my-8"></div>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="mb-6 text-base sm:text-lg font-sans font-light leading-relaxed text-foreground/80">
            With the blessings of our families and ancestors, we take our first steps into a life of togetherness. Bound in heart, spirit, and purpose, we vow to walk side by side, sharing a journey rooted in trust, unity, and devotion.
          </p>
          <p className="text-base font-serif font-medium text-[#7A102B] italic">
            We look forward to celebrating this special day with you.
          </p>
        </div>

        <div className="w-16 h-[1.5px] bg-accent/30 mx-auto my-8"></div>

        <div className="mt-8 text-center">
          <p className="text-xs font-sans text-foreground/50 tracking-widest uppercase flex items-center justify-center">
            Crafted with <Heart size={12} className="mx-1.5 text-[#7A102B] fill-[#7A102B]/20" /> for M. V. Chiranjith & K. Thriveni's Wedding
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

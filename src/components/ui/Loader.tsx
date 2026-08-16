import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 border-[1.5px] border-accent/20 border-t-accent rounded-full animate-spin"></div>
      <div className="mt-6 text-xl sm:text-2xl text-[#7A102B] font-serif italic tracking-wide">
        M. V. Chiranjith & K. Thriveni
      </div>
      <div className="mt-2 text-[10px] font-sans font-medium text-accent tracking-[0.25em] uppercase">
        Loading Invitation
      </div>
    </div>
  </div>
);

export default Loader;

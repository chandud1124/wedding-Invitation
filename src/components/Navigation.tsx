import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-750 ${
      scrolled
        ? 'bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm h-14 opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none h-14'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src="/image-2.svg" alt="Logo" className={`w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? 'w-8 h-8' : ''}`} style={{ display: 'block' }} />
            <div className="font-serif font-bold text-foreground hover:text-primary transition-colors duration-300 text-2xl tracking-wide">
              C & T
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Our Story', id: 'story' },
              { name: 'Sacred Details', id: 'details' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-base group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/5 backdrop-blur-xs animate-fade-in"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="md:hidden bg-background/95 backdrop-blur-md rounded-2xl shadow-xl mb-4 p-6 border border-border/40 absolute left-0 right-0 top-16 mx-4 animate-slide-down"
              style={{ animationDuration: '300ms' }}
              onClick={e => e.stopPropagation()}
            >
              {[
                { name: 'Home', id: 'home' },
                { name: 'Our Story', id: 'story' },
                { name: 'Sacred Details', id: 'details' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-base"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

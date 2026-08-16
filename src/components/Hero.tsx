import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { gtagEvent, getDeviceInfo } from '../lib/gtag';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [scrollY, setScrollY] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

  useEffect(() => {
    const targetDate = new Date('August 23, 2026 10:09:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsMarried(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDirectionsClick = () => {
    const device = getDeviceInfo();
    gtagEvent({
      action: 'click',
      category: 'Button',
      label: 'Get Directions (Hero)',
      value: device.deviceLabel,
      device_type: device.deviceType,
      device_vendor: device.deviceVendor,
      device_model: device.deviceModel,
      os: device.os,
      browser: device.browser,
      page_path: window.location.pathname,
      timestamp: Date.now(),
    });
    window.open('https://www.google.com/maps/search/Sri+Girijashankara+Kalyana+Mantapa', '_blank');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden flex flex-col justify-center bg-background"
    >
      {/* Background Image with Parallax Effect, Vignette and Ivory Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          scale: '1.1',
          filter: 'brightness(0.85) contrast(1.05) saturate(0.85)'
        }}
      >
      </div>
      {/* Warm Ivory Overlay */}
      <div className="absolute inset-0 bg-background/70 z-10"></div>
      {/* Radial vignette to keep center clean */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,243,234,0.2)_0%,rgba(247,243,234,0.85)_80%)] z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* ① Names - Cormorant Garamond Medium Italic, Burgundy */}
          <div className="mb-10 animate-fade-in-up duration-800">
            <h1 className="font-serif italic font-medium text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#7A102B] text-center whitespace-nowrap tracking-wide py-2">
              M. V. Chiranjith & K. Thriveni
            </h1>
          </div>

          {/* ② Date - Manrope Medium, 23 AUGUST 2026 */}
          <div 
            className="mb-12 animate-fade-in-up flex justify-center w-full"
            style={{ animationDelay: '300ms', animationFillMode: 'both' }}
          >
            <div className="inline-flex items-center bg-background/60 border border-accent/20 px-5 py-2.5 rounded-full shadow-sm mx-auto">
              <Calendar size={14} className="text-accent/80 mr-2.5" />
              <span className="font-sans font-medium text-[11px] sm:text-[13px] text-foreground tracking-[0.14em] uppercase">
                23 August 2026
              </span>
            </div>
          </div>

          {/* ③ Countdown Timer - Cormorant Garamond Medium, Manrope Medium Labels */}
          {!isMarried ? (
            <div 
              className="mb-14 animate-fade-in-up"
              style={{ animationDelay: '600ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center justify-center space-x-8 sm:space-x-12 max-w-md mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-serif font-medium text-foreground">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-sans font-medium text-accent uppercase tracking-widest mt-1.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div 
              className="mb-14 animate-fade-in-up"
              style={{ animationDelay: '600ms', animationFillMode: 'both' }}
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-primary tracking-wide">
                We Are Married!
              </h2>
            </div>
          )}

          {/* ④ Simple Elegant Quote - Cormorant Garamond Italic */}
          <div 
            className="mb-14 animate-fade-in-up"
            style={{ animationDelay: '900ms', animationFillMode: 'both' }}
          >
            <div className="text-[18px] sm:text-[20px] text-foreground/80 font-serif italic font-light max-w-xl mx-auto leading-relaxed tracking-wide">
              “Like sacred threads in a mangalsutra, our fates are woven together”
            </div>
            
            {/* Muted Gold/Ivory Dots */}
            <div className="flex justify-center items-center mt-6 gap-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`inline-block rounded-full transition-all duration-300 ${
                    i === 2 
                      ? 'w-1.5 h-1.5 bg-accent/60' 
                      : 'w-1 h-1 bg-accent/30'
                  }`}
                  style={{
                    verticalAlign: 'middle'
                  }}
                ></span>
              ))}
            </div>
          </div>

          {/* ⑤ Get Directions Button - Quiet Luxury Control */}
          <div 
            className="mb-6 animate-fade-in-up flex justify-center w-full"
            style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
          >
            <button 
              onClick={handleDirectionsClick}
              className="group inline-flex items-center justify-center h-[44px] px-6 bg-foreground text-background font-sans font-medium text-[11px] sm:text-xs rounded-full shadow-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.01] tracking-[0.08em] uppercase"
            >
              <ExternalLink className="mr-2 opacity-80" size={12} />
              <span>Get Directions</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

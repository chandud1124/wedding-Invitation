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
      {/* Background Image with Parallax Effect and Ivory Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          scale: '1.1'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Names with Elegant Typography on One Line */}
          <div className="mb-6 animate-fade-in-up">
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground tracking-wide text-center">
              M. V. Chiranjith <span className="text-primary italic font-light">&</span> K. Thriveni
            </h1>
          </div>

          {/* Wedding Date */}
          <div className="mb-10 animate-fade-in-up flex justify-center w-full">
            <div className="inline-flex items-center bg-background/50 border border-primary/20 px-6 py-2 rounded-full shadow-sm mx-auto">
              <Calendar size={18} className="text-primary mr-3" />
              <span className="font-sans font-medium text-xs sm:text-sm text-foreground/80 tracking-widest uppercase">
                August 23rd, 2026
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          {!isMarried ? (
            <div className="mb-10 animate-slide-up">
              <div className="flex items-center justify-center space-x-6 sm:space-x-8 max-w-md mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                      {item.value}
                    </div>
                    <div className="text-[10px] font-sans font-medium text-foreground/60 uppercase tracking-widest mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-10 animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary tracking-wide">
                We Are Married!
              </h2>
            </div>
          )}

          {/* Get Directions Button */}
          <div className="mb-10 animate-fade-in-up flex justify-center w-full">
            <button 
              onClick={handleDirectionsClick}
              className="group inline-flex items-center px-6 py-2.5 bg-primary text-white font-medium text-sm rounded-full shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-[1.02]"
            >
              <ExternalLink className="mr-2 animate-pulse" size={16} />
              <span className="font-sans tracking-wide">Get Directions</span>
            </button>
          </div>

          {/* Simple Elegant Quote */}
          <div className="mt-8">
            <div className="text-lg sm:text-xl text-foreground/80 font-serif font-light max-w-2xl mx-auto leading-relaxed italic">
              "Like sacred threads in a mangalsutra, our fates are woven together"
            </div>
            {/* Continuous Mangalsutra Dots */}
            <div className="flex justify-center items-center mt-6 gap-1.5">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-primary/40 animate-mangal-dot-continuous"
                  style={{
                    animationDelay: `${i * 0.18}s`,
                    verticalAlign: 'middle'
                  }}
                ></span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

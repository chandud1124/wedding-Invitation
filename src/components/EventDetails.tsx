import React, { useEffect } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { gtagEvent, getDeviceInfo } from '../lib/gtag';

const EventDetails = () => {
  const handleDirectionsClick = () => {
    const device = getDeviceInfo();
    gtagEvent({
      action: 'click',
      category: 'Button',
      label: 'Get Directions',
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

  // Track device info on page load
  useEffect(() => {
    const device = getDeviceInfo();
    gtagEvent({
      action: 'page_view',
      category: 'Page',
      label: window.location.pathname,
      value: device.deviceLabel,
      device_type: device.deviceType,
      device_vendor: device.deviceVendor,
      device_model: device.deviceModel,
      os: device.os,
      browser: device.browser,
      page_path: window.location.pathname,
      timestamp: Date.now(),
    });
  }, []);

  return (
    <section 
      id="details" 
      className="py-24 px-4 min-h-screen relative overflow-hidden bg-background"
      style={{
        backgroundImage: `url('/gallery/image-7.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Warm Ivory Overlay */}
      <div className="absolute inset-0 bg-background/85 z-10"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Main Text Panel */}
        <div className="bg-background/90 border border-accent/20 rounded-3xl shadow-sm px-6 py-12 md:px-16 md:py-16 mb-16 text-center animate-fade-in-up">
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#7A102B] mb-6 tracking-wide">
            Journey to Forever
          </h2>
          <div className="w-20 h-[1.5px] bg-accent/40 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Join us as we celebrate our wedding and begin our journey together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Wedding Ceremony */}
          <div
            className="glass rounded-2xl p-8 border opacity-100 animate-fade-in-left"
            style={{
              background: 'rgba(250, 249, 246, 0.95)',
              color: '#262626',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
              borderRadius: '1.5rem',
            }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-accent" size={28} />
              </div>
              <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
                Tying the Knot
              </h3>
              <div className="w-12 h-[1.5px] bg-accent/30 mx-auto"></div>
            </div>

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center">
                <Calendar className="text-accent mr-2" size={20} />
                <span className="text-foreground/80 font-medium text-base">Sunday, 23 August 2026</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="text-accent mr-2" size={20} />
                <span className="text-foreground/80 font-medium text-base">10:09 AM – 11:00 AM</span>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div
            className="glass rounded-2xl p-8 border opacity-100 animate-fade-in-right"
            style={{
              background: 'rgba(250, 249, 246, 0.95)',
              color: '#262626',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
              borderRadius: '1.5rem',
            }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-accent" size={28} />
              </div>
              <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
                Evening of Elegance
              </h3>
              <div className="w-12 h-[1.5px] bg-accent/30 mx-auto"></div>
            </div>

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center">
                <Calendar className="text-accent mr-2" size={20} />
                <span className="text-foreground/80 font-medium text-base">Saturday, 22 August 2026</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="text-accent mr-2" size={20} />
                <span className="text-foreground/80 font-medium text-base">6:30 PM onwards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Location */}
        <div
          className="glass rounded-3xl p-10 border opacity-100 animate-fade-in-up relative overflow-hidden max-w-5xl mx-auto flex items-center justify-center min-h-[400px]"
          style={{
            background: 'rgba(250, 249, 246, 0.95)',
            color: '#262626',
            border: '1px solid rgba(197, 160, 89, 0.25)',
            boxShadow: '0 4px 25px 0 rgba(0, 0, 0, 0.05)',
            borderRadius: '1.5rem',
          }}
        >
          {/* Venue background image with overlay */}
          <img 
            src="/image-3.png" 
            alt="Sri Girijashankara Kalyana Mantapa"
            className="absolute inset-0 w-full h-full object-cover opacity-15 rounded-3xl z-0"
            style={{filter: 'blur(1px)'}}
          />
          <div className="absolute inset-0 bg-background/60 z-0"></div>
          
          <div className="relative z-10 text-center flex flex-col items-center justify-center w-full">
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              The Setting of Our Story
            </h3>
            <div className="w-16 h-[1.5px] bg-accent/30 mx-auto mb-6"></div>
            <div className="max-w-2xl mx-auto space-y-4 text-foreground/80 leading-relaxed mb-8">
              <p className="text-lg font-medium italic text-[#7A102B]">
                "A place where culture and grace come together to write love’s most beautiful chapter"
              </p>
              <p className="text-base sm:text-lg">
                Experience the perfect blend of tradition and luxury at our chosen venue, Sri Girijashankara Kalyana Mantapa.
              </p>
            </div>
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

export default EventDetails;

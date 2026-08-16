import React, { useEffect, useRef } from 'react';

const OurStory = () => {
  // Intersection Observer for image zoom effect
  const firstMeetingImgRef = useRef<HTMLImageElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null); // Ref for hero image
  const finallyImgRef = useRef<HTMLImageElement>(null); // Ref for 'Finally, Here We Are' image
  // Refs for text animation
  const firstMeetingTextRef = useRef<HTMLDivElement>(null);
  const finallyTextRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const arrangementTextRef = useRef<HTMLDivElement>(null);
  const growingTextRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for The Arrangement text
  useEffect(() => {
    const text = arrangementTextRef.current;
    if (!text) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for Growing Together text
  useEffect(() => {
    const text = growingTextRef.current;
    if (!text) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for From Strangers to Soulmates text
  useEffect(() => {
    const text = heroTextRef.current;
    if (!text) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for First Meeting text
  useEffect(() => {
    const text = firstMeetingTextRef.current;
    if (!text) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for Finally, Here We Are text
  useEffect(() => {
    const text = finallyTextRef.current;
    if (!text) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const img = firstMeetingImgRef.current;
    if (!img) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.classList.add('in-view');
        } else {
          img.classList.remove('in-view');
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(img);
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for hero image
  useEffect(() => {
    const hero = heroImgRef.current;
    if (!hero) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hero.classList.add('in-view');
        } else {
          hero.classList.remove('in-view');
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for 'Finally, Here We Are' image
  useEffect(() => {
    const finallyImg = finallyImgRef.current;
    if (!finallyImg) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          finallyImg.classList.add('in-view');
        } else {
          finallyImg.classList.remove('in-view');
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(finallyImg);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const zoomElements = document.querySelectorAll('.image-zoom-container');
      zoomElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in-view');
        } else {
          el.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fullscreen clean rectangle with image slightly inset */}
      <section id="story" className="w-full min-h-screen flex items-center justify-center bg-background relative p-0 m-0 border-b border-border/20">
        <div className="glass flex flex-col lg:flex-row items-center w-full h-screen max-w-none mx-0 overflow-hidden relative rounded-none border-y-0 border-x-0">
          {/* Image left - KEEPING ORIGINAL DIMENSIONS AND CONTAINERS UNTOUCHED */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-2 md:p-4">
            <div
              className="image-container"
              style={{
                width: '100%',
                maxWidth: '1000px',
                aspectRatio: '3/2',
                background: 'transparent',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                margin: '16px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <img
                ref={heroImgRef}
                src="/gallery/image-5.jpeg"
                alt="From Strangers to Soulmates"
                className="rounded-image w-full h-full object-cover"
                style={{
                  borderRadius: '16px',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  aspectRatio: '3/2',
                  transition: 'transform 0.4s ease-out',
                  willChange: 'transform',
                  objectPosition: 'left',
                  objectFit: 'cover',
                  display: 'block',
                  minWidth: '300px',
                  minHeight: '300px',
                }}
              />
            </div>
          </div>
          {/* Text right */}
          <div
            ref={heroTextRef}
            className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 text-center md:text-left opacity-0 translate-y-8 transition-all duration-700"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">From Strangers to Soulmates</h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-6 font-light">Guided by family, nurtured by tradition, and sealed with eternal love</p>
            <p className="text-base md:text-lg text-primary font-medium italic mt-2">" A match made by PARENTS, a love made by US "</p>
          </div>
        </div>
        <style>{`
          .glass {
            background: rgba(250, 249, 246, 0.85);
            box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.04);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(197, 160, 89, 0.2);
          }
          .image-container {
            overflow: hidden;
            border-radius: 16px;
            border: 1px solid rgba(197, 160, 89, 0.2);
            background: transparent;
            margin: 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justifyContent: flex-start !important;
          }
          .rounded-image {
            border-radius: 16px;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            aspect-ratio: 3/2;
            transition: transform 0.4s ease-out;
            will-change: transform;
            object-fit: cover;
            object-position: left !important;
            display: block;
            transform: scale(0.95);
            min-width: 200px;
          }
          @media (max-width: 1024px) {
            .image-container {
              justify-content: flex-start !important;
            }
            .rounded-image {
              object-position: left !important;
              min-width: 200px !important;
            }
          }
          .rounded-image.in-view {
            transform: scale(1.05);
          }
          @media (max-width: 768px) {
            .image-container {
              max-width: 350px;
              min-width: 200px;
              aspect-ratio: 3/2;
              margin: 8px auto 8px 0 !important;
              justify-content: flex-start !important;
            }
            .rounded-image {
              aspect-ratio: 3/2;
              max-width: 100%;
              max-height: 100%;
              object-position: left !important;
              min-width: 200px !important;
            }
            .arrangement-section {
              background-position: 25% center !important;
            }
            .growing-section {
              background-position: center center !important;
            }
          }
          @supports (-webkit-touch-callout: none) {
            .arrangement-section, .growing-section {
              background-attachment: scroll !important;
            }
            @media (max-width: 768px) {
              .arrangement-section {
                background-position: 25% center !important;
              }
              .growing-section {
                background-position: center center !important;
              }
            }
          }
        `}</style>
      </section>

      {/* The Arrangement section with parallax/fixed background and animated text */}
      <section
        className="w-full min-h-screen flex items-center justify-end bg-background relative px-2 md:px-0 p-0 m-0 border-b border-border/20 arrangement-section"
        style={{ 
          height: '100vh', 
          overflowX: 'hidden',
          position: 'relative',
          backgroundImage: 'url(/gallery/image-5.jpeg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Subtle Transparent Ivory Overlay */}
        <div className="absolute inset-0 bg-background/15 z-10"></div>
        
        <div className="relative z-20 flex items-center min-h-screen w-full justify-end md:justify-end justify-center px-0 md:px-0">
          <div
            className="glass rounded-3xl shadow-sm sm:max-w-xs md:max-w-sm lg:max-w-md w-full mr-0 md:mr-20 p-4 sm:p-6 md:p-16 flex flex-col justify-center items-center text-center mx-auto md:mx-0 arrangement-content-box"
            style={{
              minHeight: '60vh',
              color: '#262626',
              background: 'rgba(247, 243, 234, 0.85)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
              borderRadius: '1.5rem',
            }}
          >
            <div ref={arrangementTextRef} className="opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-foreground">The Arrangement</h2>
              <p className="text-lg md:text-xl mb-4 font-light text-foreground/85 leading-relaxed">
                In the presence of tradition and the wisdom of our families, a match was made thoughtfully, respectfully, and with love from those who know us best.
              </p>
              <p className="text-base md:text-lg font-light text-foreground/80 leading-relaxed">
                What began as an arrangement between two families became the beginning of a meaningful journey of mutual understanding, shared values, and a bond that continues to grow each day.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .arrangement-content-box {
              min-height: 0 !important;
              max-height: 80vh !important;
              overflow-y: auto !important;
            }
          }
          @supports (-webkit-touch-callout: none) {
            section {
              background-attachment: scroll;
              background-position: left center;
            }
          }
        `}</style>
      </section>

      {/* First Meeting section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-background relative p-0 m-0 border-b border-border/20">
        <div className="glass flex flex-col lg:flex-row items-center w-full h-screen max-w-none mx-0 overflow-hidden relative rounded-none border-y-0 border-x-0">
          {/* Image left - KEEPING ORIGINAL DIMENSIONS AND CONTAINERS UNTOUCHED */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-2 md:p-4">
            <div
              className="image-container"
              style={{
                width: '100%',
                maxWidth: '750px',
                aspectRatio: '3/2',
                background: 'transparent',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                margin: '16px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                ref={firstMeetingImgRef}
                src="/gallery/image-6.jpeg"
                alt="First Meeting"
                className="rounded-image w-full h-full object-cover"
                style={{
                  borderRadius: '16px',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  aspectRatio: '3/2',
                  transition: 'transform 0.4s ease-out',
                  willChange: 'transform',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </div>
          {/* Text right */}
          <div
            ref={firstMeetingTextRef}
            className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 text-center md:text-left opacity-0 translate-y-8 transition-all duration-700"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">First Meeting</h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-6 font-light">There were butterflies, shy smiles, and a little nervousness in the air.</p>
            <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">But as we talked gently, naturally time seemed to pause. That first meeting, arranged lovingly by our families, held a quiet spark.</p>
            <p className="text-base md:text-lg text-foreground/80 font-light mt-2 leading-relaxed">It wasn’t love at first sight, but it was a beginning filled with warmth and hope.</p>
          </div>
        </div>
      </section>

      {/* Growing Together section */}
      <section
        className="w-full min-h-screen flex items-center justify-end bg-background relative px-2 md:px-0 p-0 m-0 border-b border-border/20 growing-section"
        style={{ 
          height: '100vh', 
          overflowX: 'hidden',
          position: 'relative',
          backgroundImage: 'url(/gallery/image-8.jpeg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Subtle Transparent Ivory Overlay */}
        <div className="absolute inset-0 bg-background/15 z-10"></div>

        <div className="relative z-20 flex items-center min-h-screen w-full justify-end md:justify-end justify-center px-0 md:px-0">
          <div
            className="glass rounded-3xl shadow-sm sm:max-w-xs md:max-w-sm lg:max-w-md w-full mr-0 md:mr-20 p-4 sm:p-6 md:p-16 flex flex-col justify-center items-center text-center mx-auto md:mx-0 arrangement-content-box"
            style={{
              minHeight: '60vh',
              color: '#262626',
              background: 'rgba(247, 243, 234, 0.85)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
              borderRadius: '1.5rem',
            }}
          >
            <div ref={growingTextRef} className="opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-foreground">Growing Together</h2>
              <p className="text-lg md:text-xl mb-4 font-light text-foreground/85 leading-relaxed">
                With every conversation, every shared smile, and every new experience, our bond deepened. We learned, adapted, and supported each other through joys and challenges alike.
              </p>
              <p className="text-base md:text-lg font-light text-foreground/80 leading-relaxed">
                Our journey is a beautiful mosaic of laughter, understanding, and growth—two souls, hand in hand, growing stronger together every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finally, Here We Are section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-background relative p-0 m-0">
        <div className="glass flex flex-col lg:flex-row items-center w-full h-screen max-w-none mx-0 overflow-hidden relative rounded-none border-y-0 border-x-0">
          {/* Image left - KEEPING ORIGINAL DIMENSIONS AND CONTAINERS UNTOUCHED */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-2 md:p-4">
            <div
              className="image-container"
              style={{
                width: '100%',
                maxWidth: '750px',
                aspectRatio: '3/2',
                background: 'transparent',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                margin: '16px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                ref={finallyImgRef}
                src="/gallery/image-6.jpeg"
                alt="Finally, Here We Are"
                className="rounded-image w-full h-full object-cover"
                style={{
                  borderRadius: '16px',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  aspectRatio: '3/2',
                  transition: 'transform 0.4s ease-out',
                  willChange: 'transform',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </div>
          {/* Text right */}
          <div
            ref={finallyTextRef}
            className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 text-center md:text-left opacity-0 translate-y-8 transition-all duration-700"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">Finally, Here We Are</h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-6 font-light leading-relaxed">Through every twist and turn, every moment of laughter and learning, we have arrived at this beautiful chapter—together.</p>
            <p className="text-base md:text-lg text-primary font-semibold italic mt-2">Our story is just beginning, and we can't wait to write the next pages hand in hand.</p>
          </div>
        </div>
        <style>{`
          .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          }
        `}</style>
      </section>
    </>
  );
};

export default OurStory;

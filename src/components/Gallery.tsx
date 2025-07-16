




import React from 'react';
import Masonry from 'react-masonry-css';

const images = [
  '/gallery/gallery_m/DSC09527.jpg',
  '/gallery/gallery_m/DSC08919.jpg',
  '/gallery/gallery_m/DSC08927.jpg',
  '/gallery/gallery_m/DSC08965 copy-min.jpg',
  '/gallery/gallery_m/DSC08973.jpg',
  '/gallery/gallery_m/DSC08991.jpg',
  '/gallery/gallery_m/DSC09127.jpg',
  '/gallery/gallery_m/DSC09157.jpg',
  '/gallery/gallery_m/DSC09190.jpg',
  '/gallery/gallery_m/DSC09248.jpg',
  '/gallery/gallery_m/DSC09419.jpg',
  '/gallery/gallery_m/DSC09479 copy-min.jpg',
  '/gallery/gallery_m/DSC09535 copy-min.jpg',
  '/gallery/gallery_m/DSC09542.jpg',
  '/gallery/gallery_m/DSC09495.jpg',
];


const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 px-4 min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-yellow-50">
      {/* Website color glowing background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-400 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-200 opacity-20 rounded-full blur-2xl animate-pulse z-0" style={{transform: 'translate(-50%, -50%)'}}></div>
      {/* Marriage heart icon as a glowing background */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-10 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 82s-30-18.5-30-40.5C20 27.5 35 20 50 35c15-15 30-7.5 30 6.5C80 63.5 50 82 50 82z" fill="#f472b6"/>
      </svg>
      {/* Floating wedding rings */}
      <svg className="absolute top-24 right-1/4 w-24 h-24 opacity-20 z-0 animate-spin-slow" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="32" rx="24" ry="10" stroke="#fbbf24" strokeWidth="4" fill="none"/>
        <ellipse cx="40" cy="32" rx="12" ry="5" stroke="#f472b6" strokeWidth="2" fill="none"/>
      </svg>
      {/* Sparkles */}
      <svg className="absolute bottom-24 left-1/4 w-16 h-16 opacity-20 z-0 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#f472b6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {/* Animated flowing hearts */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <svg
            key={i}
            className={`absolute animate-heart-float`}
            style={{
              left: `${Math.random() * 95}%`,
              bottom: `${Math.random() * 20 - 10}%`,
              width: `${18 + Math.random() * 24}px`,
              opacity: 0.12 + Math.random() * 0.18,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 6}s`,
            }}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 29s-11-6.5-11-14.5C5 8.5 11 6 16 12c5-6 11-3.5 11 2.5C27 22.5 16 29 16 29z"
              fill="#f472b6"
            />
          </svg>
        ))}
      </div>
<div className="container mx-auto relative z-10">
  {/* 
    Add to the bottom of the file for heart float animation 
    Tailwind CSS custom animation (add to your global CSS if not present):

    @keyframes heart-float {
      0% { transform: translateY(0) scale(1) rotate(-8deg); opacity: 0.2; }
      30% { opacity: 0.5; }
      100% { transform: translateY(-120vh) scale(1.2) rotate(8deg); opacity: 0; }
    }
    .animate-heart-float {
      animation: heart-float linear infinite;
    }
  */}
  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move text-center">
          Moments of Us
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          "Each frame holds a memory, each moment tells our story captured with love on the path to forever"
        </p>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-full max-w-6xl mx-auto gap-6"
          columnClassName="masonry-column"
        >
          {images.map((src, idx) => (
            <div key={src} className="mb-6 overflow-hidden rounded-2xl shadow-lg bg-gray-100">
              <img
                src={src}
                alt={`Gallery Image ${idx + 1}`}
                className="w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;

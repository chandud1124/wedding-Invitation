import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface ImageCardProps {
  image: {
    src: string;
    alt: string;
    span: string;
  };
  index: number;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index, onClick }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" }); // Trigger animation earlier

  return (
    <motion.div
      ref={ref}
      key={image.src}
      className={`relative overflow-hidden rounded-xl ${image.span} hover:z-10`}
      initial={{ opacity: 0, y: 30 }} // Reduced initial offset
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeIn"
        }
      } : {}}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeIn" }
      }}
      onClick={onClick}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          className="text-white text-lg font-medium"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          View
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const images = [
    { src: "/gallery/sc1.webp", alt: "Cover Image", span: "col-span-2 row-span-2" },
    { src: "/gallery/1.jpeg", alt: "Gallery Image 1", span: "col-span-1 row-span-1" },
    { src: "/gallery/2.jpg", alt: "Gallery Image 2", span: "col-span-1 row-span-2" },
    { src: "/gallery/3.jpeg", alt: "Gallery Image 3", span: "col-span-1 row-span-1" },
    { src: "/gallery/4.jpeg", alt: "Gallery Image 4", span: "col-span-1 row-span-1" },
    { src: "/gallery/5.webp", alt: "Gallery Image 5", span: "col-span-2 row-span-1" },
    { src: "/gallery/6.jpg", alt: "Gallery Image 6", span: "col-span-1 row-span-1" },
    { src: "/gallery/7.jpeg", alt: "Gallery Image 7", span: "col-span-1 row-span-2" },
    { src: "/gallery/8.avif", alt: "Gallery Image 8", span: "col-span-2 row-span-1" }
  ];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 px-4 bg-[#faf7f2]">
      {/* Top transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      
      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move">
            Moments of Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            "Each frame holds a memory, each moment tells our story captured with love on the path to forever"
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          {images.map((image, index) => (
            <ImageCard
              key={image.src}
              image={image}
              index={index}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[90vh] object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-rose-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

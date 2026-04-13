import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Méchoui Royal',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Riz aux Épices',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Saveurs Maliennes',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'L\'Art de la Viande',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1935&auto=format&fit=crop',
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 7000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-chef-black">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] h-full min-w-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" /> {/* Dark gradient overlay */}
              
              <div className="absolute inset-0 flex flex-col items-start justify-end px-8 md:px-16 lg:px-24 pb-32 md:pb-40 text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 50 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-7xl lg:text-8xl font-serif text-chef-white mb-8 tracking-tight max-w-4xl"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 30 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="#menu"
                    className="px-8 py-4 border border-chef-white text-chef-white hover:bg-chef-white hover:text-chef-black transition-all duration-500 uppercase tracking-wider text-sm font-medium"
                  >
                    Voir nos plats
                  </a>
                  <a
                    href="#menu"
                    className="px-8 py-4 border border-chef-white bg-chef-white/10 text-chef-white hover:bg-chef-white hover:text-chef-black transition-all duration-500 uppercase tracking-wider text-sm font-medium backdrop-blur-sm"
                  >
                    Commander maintenant
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-chef-white/30 flex items-center justify-center text-chef-white hover:bg-chef-white hover:text-chef-black transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-chef-white/30 flex items-center justify-center text-chef-white hover:bg-chef-white hover:text-chef-black transition-colors z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-chef-white w-8' : 'bg-chef-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

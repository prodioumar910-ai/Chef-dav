import { motion } from 'motion/react';
import SectionDots from './SectionDots';

const galleryItems = [
  { id: 1, name: 'Méchoui Royal', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Riz aux Épices', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Agneau Rôti', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Sauce Traditionnelle', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Assiette Dégustation', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Brochettes', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-chef-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-chef-white mb-4">Nos Réalisations</h2>
        <SectionDots className="mb-4" />
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <div key={`${item.id}-${index}`} className="relative w-72 md:w-96 mx-4 flex-shrink-0">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-chef-white font-medium tracking-wide">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

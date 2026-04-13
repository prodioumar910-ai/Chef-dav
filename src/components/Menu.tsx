import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionDots from './SectionDots';

const menuItems = [
  {
    id: 1,
    name: 'Méchoui Entier',
    price: '150 000 FCFA',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Demi Méchoui',
    price: '80 000 FCFA',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Plateau Dégustation',
    price: '45 000 FCFA',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Riz au Gras Spécial',
    price: '15 000 FCFA',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Menu() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleOrder = (itemName: string, price: string) => {
    const message = `Bonjour Chef David, je souhaite commander : ${itemName} — ${price}`;
    const whatsappUrl = `https://wa.me/22300000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-chef-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-chef-white mb-4">Nos Plats</h2>
            <SectionDots align="left" />
          </div>
          
          <div className="flex gap-2 md:gap-4">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-chef-gray flex items-center justify-center text-chef-white hover:bg-chef-white hover:text-chef-black transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-chef-gray flex items-center justify-center text-chef-white hover:bg-chef-white hover:text-chef-black transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {menuItems.map((item) => (
              <div key={item.id} className="pl-4 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <div className="bg-chef-card border border-chef-gray overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-serif text-chef-white mb-2">{item.name}</h3>
                    <p className="text-chef-text-gray mb-6">{item.price}</p>
                    <button
                      onClick={() => handleOrder(item.name, item.price)}
                      className="w-full py-3 border border-chef-gray-light text-chef-white hover:bg-chef-white hover:text-chef-black transition-colors uppercase tracking-wider text-sm"
                    >
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

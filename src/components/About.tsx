import { motion } from 'motion/react';
import SectionDots from './SectionDots';

export default function About() {
  return (
    <section id="about" className="py-24 bg-chef-dark relative overflow-hidden">
      {/* Decorative top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-chef-gray-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-chef-white mb-6">Chef Dav</h2>
            <SectionDots align="left" className="mb-8" />
            
            <div className="space-y-6 text-chef-text-gray font-light leading-relaxed">
              <p>
                Passionné par l'art culinaire depuis son plus jeune âge, le Chef David a fait de la gastronomie malienne son terrain d'expression favori. Établi au cœur de Bamako, il réinvente les classiques avec une touche de modernité et d'élégance.
              </p>
              <p>
                Sa spécialité incontestée : le méchoui au riz et sauce. Une viande sélectionnée avec soin, marinée dans un mélange secret d'épices locales, rôtie lentement pour une tendreté incomparable, accompagnée d'un riz parfumé et d'une sauce riche en saveurs.
              </p>
              <p>
                Chaque plat est une célébration du goût, préparé avec des ingrédients frais et locaux, dans le respect des traditions tout en visant l'excellence d'une cuisine haut de gamme.
              </p>
            </div>
            
            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Signature_of_David_Cameron.svg/1200px-Signature_of_David_Cameron.svg.png" 
                alt="Signature" 
                className="h-12 opacity-50 invert"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 border border-chef-gray-light translate-x-4 translate-y-4" />
              <img
                src="https://lh3.googleusercontent.com/d/1qKuatklN6T80q3IhwN0uXWOs3kf0PUDg"
                alt="Chef David"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

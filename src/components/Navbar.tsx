import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll('section');
    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Réalisations', href: '#gallery' },
    { name: 'Nos Plats', href: '#menu' },
    { name: 'Équipe', href: '#team' },
    { name: 'Contact', href: '#location' },
  ];

  const getLogoPosition = () => {
    switch(activeSection) {
      case 'home':
      case 'gallery':
      case 'team':
        return { left: '0%', x: '0%' };
      case 'about':
      case 'menu':
      case 'location':
        return { left: '100%', x: '-100%' };
      default:
        return { left: '0%', x: '0%' };
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 md:h-20 flex items-center justify-center">
        
        {/* Logo Animé */}
        <motion.a
          href="#home"
          className="absolute pointer-events-auto group z-50"
          initial={false}
          animate={getLogoPosition()}
          transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-chef-gray-light overflow-hidden flex items-center justify-center bg-chef-card group-hover:border-chef-white transition-colors shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1FqxfXTe45qfufzc2tgrkhZ1FOmUc5GFy" 
              alt="Logo Chef David" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2 bg-chef-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-chef-gray-light/30 pointer-events-auto shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'bg-chef-white text-chef-black font-bold'
                  : 'text-chef-offwhite hover:text-chef-white hover:bg-chef-gray/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 pointer-events-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-chef-white bg-chef-black/50 backdrop-blur-md p-3 rounded-full border border-chef-gray-light/30 focus:outline-none shadow-xl"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-chef-black/95 backdrop-blur-lg border border-chef-gray rounded-2xl overflow-hidden pointer-events-auto shadow-2xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 text-sm font-medium uppercase tracking-wider border-b border-chef-gray/50 last:border-0 transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-chef-white bg-chef-gray/30'
                      : 'text-chef-offwhite hover:text-chef-white hover:bg-chef-gray/20'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

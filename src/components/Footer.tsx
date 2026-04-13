import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-chef-black py-12 border-t border-chef-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <a href="#home" className="inline-block mb-4 group">
            <div className="w-12 h-12 rounded-full border border-chef-gray-light overflow-hidden flex items-center justify-center bg-chef-card group-hover:border-chef-white transition-colors">
              <img 
                src="https://lh3.googleusercontent.com/d/1FqxfXTe45qfufzc2tgrkhZ1FOmUc5GFy" 
                alt="Logo Chef David" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>
          <p className="text-chef-text-gray text-sm">Gastronomie Malienne Haut de Gamme</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-chef-text-gray hover:text-chef-white transition-colors">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-chef-text-gray hover:text-chef-white transition-colors">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </a>
          {/* WhatsApp icon using SVG since Lucide doesn't have it */}
          <a href="https://wa.me/22300000000" className="text-chef-text-gray hover:text-chef-white transition-colors">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>

        <div className="text-chef-text-gray text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Chef David. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}

import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import SectionDots from './SectionDots';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-chef-dark relative border-t border-chef-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-chef-white mb-4">Nous Trouver</h2>
          <SectionDots />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Block */}
          <div className="lg:col-span-1 bg-chef-card border border-chef-gray p-8 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-chef-white mb-6">Chef David</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-chef-text-gray">
                  <MapPin className="w-6 h-6 text-chef-white shrink-0" />
                  <div>
                    <p className="text-chef-white font-medium mb-1">Adresse</p>
                    <p>Quartier ACI 2000</p>
                    <p>Bamako, Mali</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-chef-text-gray">
                  <Phone className="w-6 h-6 text-chef-white shrink-0" />
                  <div>
                    <p className="text-chef-white font-medium mb-1">Téléphone</p>
                    <p>+223 00 00 00 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-chef-text-gray">
                  <Clock className="w-6 h-6 text-chef-white shrink-0" />
                  <div>
                    <p className="text-chef-white font-medium mb-1">Horaires</p>
                    <p>Lun - Sam : 11h00 - 23h00</p>
                    <p>Dimanche : 12h00 - 22h00</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Bamako,Mali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 border border-chef-white text-chef-white hover:bg-chef-white hover:text-chef-black transition-colors uppercase tracking-wider text-sm mt-auto"
            >
              <Navigation size={16} />
              M'y rendre
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 h-[400px] lg:h-auto border border-chef-gray relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d124673.81231846564!2d-8.077884112520638!3d12.612808209307373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM2JzQ2LjEiTiA4wrAwNCcwMC40Ilc!5e0!3m2!1sen!2sml!4v1620000000000!5m2!1sen!2sml"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

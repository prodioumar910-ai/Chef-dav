import { Phone } from 'lucide-react';
import SectionDots from './SectionDots';

const teamMembers = [
  {
    id: 1,
    name: 'Chef David',
    role: 'Chef Exécutif',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
    phone: '+22300000000',
  },
  {
    id: 2,
    name: 'Amadou Traoré',
    role: 'Sous-Chef Rôtisseur',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
    phone: '+22300000001',
  },
  {
    id: 3,
    name: 'Fatoumata Keita',
    role: 'Chef Saucier',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=800&auto=format&fit=crop',
    phone: '+22300000002',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-chef-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-chef-white mb-4">Notre Équipe</h2>
          <SectionDots />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-chef-card border border-chef-gray p-6 text-center group hover:border-chef-gray-light transition-colors">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-chef-gray group-hover:border-chef-white transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-serif text-chef-white mb-1">{member.name}</h3>
              <p className="text-chef-text-gray text-sm mb-6 uppercase tracking-wider">{member.role}</p>
              
              <a
                href={`tel:${member.phone}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-chef-gray/50 hover:bg-chef-white hover:text-chef-black text-chef-white transition-colors border border-chef-gray group-hover:border-chef-white"
              >
                <Phone size={16} />
                <span className="uppercase tracking-wider text-sm">Appeler</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

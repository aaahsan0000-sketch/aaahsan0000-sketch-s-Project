import Link from 'next/link';
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 pt-14 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary p-2 rounded-md">
              <Dumbbell size={20} className="text-white" />
            </span>
            <span className="font-heading text-2xl tracking-wide">
              IRON<span className="text-primary">CORE</span>
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Train hard. Live strong. A community built on discipline, sweat, and results.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-surface2 p-2 rounded-full hover:bg-primary transition-colors duration-200"
                aria-label="social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4 tracking-wide">Hours</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
            <li>Saturday: 6:00 AM - 9:00 PM</li>
            <li>Sunday: 7:00 AM - 7:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary shrink-0" /> 123 Fitness Ave, Lahore
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" /> +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary shrink-0" /> info@ironcoregym.com
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} IronCore Gym. All rights reserved.
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Dumbbell } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="bg-primary p-2 rounded-md group-hover:rotate-12 transition-transform duration-300">
            <Dumbbell size={22} className="text-white" />
          </span>
          <span className="font-heading text-2xl tracking-wide">
            IRON<span className="text-primary">CORE</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary hover:bg-primaryDark text-white text-sm uppercase tracking-widest font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:scale-105"
          >
            Join Now
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-t border-white/10 px-5 py-6 flex flex-col gap-5 animate-fade-up">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-base uppercase tracking-widest text-gray-300 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-center text-white text-sm uppercase tracking-widest font-semibold px-6 py-3 rounded-md"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}

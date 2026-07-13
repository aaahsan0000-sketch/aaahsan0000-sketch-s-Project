"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "PROGRAMS",   href: "#features" },
  { name: "METHOD",     href: "#how-it-works" },
  { name: "SCHEDULE",   href: "#infrastructure" },
  { name: "RESULTS",    href: "#metrics" },
  { name: "TRACK",      href: "#integrations" },
  { name: "GUARANTEE",  href: "#security" },
  { name: "APP",        href: "#developers" },
  { name: "PRICING",    href: "#pricing" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 8);
      setProgress(docH > 0 ? (scrollTop / docH) * 100 : 0);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050505]/95 backdrop-blur-sm border-b border-[#1e1e1e]" : "bg-transparent"
        }`}
      >
        {/* Top status bar */}
        <div className="border-b border-[#1e1e1e] px-6 lg:px-12 h-8 flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest uppercase">
            FITNESS REPUBLIC &nbsp;/&nbsp; EST. 2025
          </span>
          <div className="hidden md:flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#3a3a3a]">
              <span className="text-[#22c55e]">●</span>&nbsp;COACHING_SLOTS_OPEN
            </span>
            <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">NO EQUIPMENT? NO EXCUSE.</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-6 lg:px-12 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-7 h-7 border border-[#c6f752] flex items-center justify-center">
              <div className="w-2 h-2 bg-[#c6f752]" />
              <div className="absolute inset-0 bg-[#c6f752]/10 group-hover:bg-[#c6f752]/20 transition-colors" />
            </div>
            <span className="font-display text-2xl tracking-[0.12em] text-[#f2ede6]">FITNESS&nbsp;REPUBLIC</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.18em] text-[#5a5a5a] hover:text-[#c6f752] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="font-mono text-[11px] tracking-widest text-[#5a5a5a] hover:text-[#f2ede6] transition-colors">
              MEMBER_LOGIN
            </a>
            <a
              href="#pricing"
              className="font-mono text-[11px] tracking-widest bg-[#c6f752] text-[#050505] px-5 h-9 flex items-center hover:bg-[#d4ff6b] transition-colors font-semibold"
            >
              START_TODAY →
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#f2ede6] p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Scroll progress bar */}
        <div className="h-px w-full bg-transparent">
          <div
            className="h-full bg-[#c6f752] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] flex flex-col transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "89px" }}
      >
        <div className="border-t border-[#1e1e1e] flex flex-col overflow-y-auto">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[#1e1e1e] px-8 py-6 font-display text-4xl tracking-wider text-[#f2ede6] hover:text-[#c6f752] transition-all duration-300 flex items-center justify-between ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: open ? `${i * 55}ms` : "0ms" }}
            >
              {link.name}
              <span className="font-mono text-xs text-[#3a3a3a]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-auto p-8 border-t border-[#1e1e1e]">
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="w-full block text-center font-mono text-sm tracking-widest bg-[#c6f752] text-[#050505] py-5 font-semibold"
          >
            START_TODAY →
          </a>
        </div>
      </div>
    </>
  );
}

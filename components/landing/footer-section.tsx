"use client";

const LINKS = {
  PROGRAMS: [
    { name: "Fat Loss",        href: "#features" },
    { name: "Muscle Building",  href: "#features" },
    { name: "Strength",         href: "#infrastructure" },
    { name: "Home Workouts",    href: "#features" },
    { name: "Nutrition",        href: "#features" },
  ],
  COACHING: [
    { name: "How It Works",     href: "#how-it-works" },
    { name: "Meet the Coaches", href: "#security" },
    { name: "The App",          href: "#developers" },
    { name: "Results",          href: "#metrics" },
    { name: "Pricing",          href: "#pricing" },
  ],
  COMPANY: [
    { name: "About",            href: "#" },
    { name: "Blog",             href: "#" },
    { name: "Careers",          href: "#", badge: "HIRING" },
    { name: "Contact",          href: "#" },
  ],
  LEGAL: [
    { name: "Privacy",          href: "#" },
    { name: "Terms",            href: "#" },
    { name: "Guarantee",        href: "#security" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative border-t border-[#1e1e1e]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Top row — brand + tagline */}
        <div className="border-b border-[#1e1e1e] py-12 grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <a href="#" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-8 h-8 border border-[#c6f752] flex items-center justify-center relative">
                <div className="w-2.5 h-2.5 bg-[#c6f752]" />
                <div className="absolute inset-0 bg-[#c6f752]/10 group-hover:bg-[#c6f752]/20 transition-colors" />
              </div>
              <span className="font-display text-2xl tracking-[0.1em] text-[#f2ede6]">FITNESS&nbsp;REPUBLIC</span>
            </a>
            <p className="text-sm text-[#3a3a3a] leading-relaxed max-w-xs font-mono">
              Premium online coaching — personalized training, real nutrition, and a coach who keeps you accountable.
            </p>
            <div className="flex gap-5 mt-6">
              {["INSTAGRAM", "YOUTUBE", "TIKTOK"].map(s => (
                <a key={s} href="#" className="font-mono text-[10px] tracking-widest text-[#3a3a3a] hover:text-[#c6f752] transition-colors">
                  {s} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(LINKS).map(([section, links]) => (
              <div key={section}>
                <h3 className="font-mono text-[9px] tracking-[0.2em] text-[#c6f752] mb-5">{section}</h3>
                <ul className="space-y-3">
                  {links.map(l => (
                    <li key={l.name}>
                      <a href={l.href} className="font-mono text-[11px] text-[#3a3a3a] hover:text-[#f2ede6] transition-colors inline-flex items-center gap-2">
                        {l.name}
                        {"badge" in l && l.badge && (
                          <span className="text-[9px] border border-[#c6f752]/30 text-[#c6f752] px-1.5 py-0.5 tracking-wider">
                            {l.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#3a3a3a]">
            © 2025 FITNESS REPUBLIC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">TRAIN HARD · STAY CONSISTENT</span>
            <div className="flex items-center gap-2">
              <span className="status-pulse w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
              <span className="font-mono text-[10px] text-[#22c55e] tracking-widest">ACCEPTING_MEMBERS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

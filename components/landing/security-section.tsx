"use client";

import { useEffect, useRef, useState } from "react";

const CERTS = ["NASM_CPT", "NSCA_CSCS", "PRECISION_NUTRITION", "ISSA", "RD_CERTIFIED"];

const FEATURES = [
  {
    id: "01",
    tag: "EXPERTISE",
    title: "CERTIFIED COACHES",
    desc: "Every coach is credentialed, vetted, and experienced. No influencers — just professionals who've helped thousands reach their goals.",
  },
  {
    id: "02",
    tag: "EVIDENCE",
    title: "SCIENCE-BASED",
    desc: "Programming grounded in exercise science and real research. Progressive overload, sustainable nutrition — nothing faddy or extreme.",
  },
  {
    id: "03",
    tag: "SUPPORT",
    title: "ALWAYS IN REACH",
    desc: "Message your coach any day of the week and get answers fast. Weekly check-ins keep you moving, motivated, and accountable.",
  },
  {
    id: "04",
    tag: "GUARANTEE",
    title: "RESULTS OR REFUND",
    desc: "Follow your plan for 90 days. If you don't see real progress, we'll refund you — no forms, no fine print, no hassle.",
  },
];

export function SecuritySection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="security" ref={ref} className="relative border-t border-[#1e1e1e] bg-[#080808] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${vis ? "opacity-100" : "opacity-0"}`}
        >
          <div>
            <span className="sys-tag mb-3 block">WHY FITNESS REPUBLIC</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              COACHING YOU<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>CAN TRUST</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CERTS.map((c, i) => (
              <span
                key={c}
                className={`font-mono text-[9px] tracking-widest border border-[#2e2e2e] px-3 py-2 text-[#5a5a5a] hover:border-[#c6f752]/40 hover:text-[#c6f752] transition-all duration-200 cursor-default ${
                  vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${i * 50 + 200}ms` }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-b border-[#1e1e1e]">
          {FEATURES.map((f, i) => (
            <div
              key={f.id}
              className={`border-r border-[#1e1e1e] last:border-r-0 p-6 row-hover transition-all duration-500 group ${
                vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-10 mb-5 relative overflow-hidden">
                {i === 0 && (
                  <div className="grid grid-cols-8 gap-[4px] w-full h-full content-start pt-1">
                    {Array.from({ length: 24 }).map((_, d) => (
                      <span
                        key={d}
                        className="block w-[3px] h-[3px] rounded-full bg-[#c6f752]"
                        style={{
                          animationName: "dot-blink",
                          animationDuration: `${1.2 + (d % 4) * 0.4}s`,
                          animationTimingFunction: "step-start",
                          animationIterationCount: "infinite",
                          animationDelay: `${d * 80}ms`,
                          animationFillMode: "both",
                        }}
                      />
                    ))}
                  </div>
                )}

                {i === 1 && (
                  <div className="relative w-10 h-10">
                    {Array.from({ length: 8 }).map((_, d) => {
                      const angle = (d / 8) * 2 * Math.PI;
                      const r = 16;
                      const x = 20 + r * Math.cos(angle);
                      const y = 20 + r * Math.sin(angle);
                      return (
                        <span
                          key={d}
                          className="absolute block w-[3px] h-[3px] rounded-full bg-[#c6f752]"
                          style={{
                            left: x,
                            top: y,
                            animationName: "dot-blink",
                            animationDuration: "1.6s",
                            animationTimingFunction: "ease-in-out",
                            animationIterationCount: "infinite",
                            animationDelay: `${d * 200}ms`,
                            animationFillMode: "both",
                          }}
                        />
                      );
                    })}
                    <span className="absolute block w-[3px] h-[3px] rounded-full bg-[#c6f752]" style={{ left: 19, top: 19 }} />
                  </div>
                )}

                {i === 2 && (
                  <div className="flex items-center gap-[5px] h-full">
                    {Array.from({ length: 14 }).map((_, d) => (
                      <span
                        key={d}
                        className="block w-[3px] h-[3px] rounded-full bg-[#c6f752]"
                        style={{
                          animationName: "dot-scan",
                          animationDuration: "2s",
                          animationTimingFunction: "linear",
                          animationIterationCount: "infinite",
                          animationDelay: `${d * 140}ms`,
                          animationFillMode: "both",
                        }}
                      />
                    ))}
                  </div>
                )}

                {i === 3 && (() => {
                  const heights = [6, 14, 22, 28, 18, 32, 10, 26, 20, 8, 30, 16];
                  return (
                    <div className="flex items-end gap-[3px] h-full pb-0">
                      {heights.map((h, d) => (
                        <span
                          key={d}
                          className="block w-[4px] rounded-sm bg-[#c6f752]"
                          style={{
                            height: h,
                            opacity: 0.3 + (h / 32) * 0.7,
                            animation: `dot-pulse 1.4s ease-in-out infinite`,
                            animationDelay: `${d * 90}ms`,
                          }}
                        />
                      ))}
                    </div>
                  );
                })()}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="sys-tag text-[9px]">{f.tag}</span>
                <span className="font-mono text-[9px] text-[#2e2e2e]">{f.id}</span>
              </div>
              <h3 className="font-display text-2xl leading-[0.9] text-[#f2ede6] mb-3 group-hover:text-[#c6f752] transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-[#5a5a5a] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="py-5 flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#3a3a3a]">
            NO LONG-TERM CONTRACTS &amp; A 90-DAY RESULTS GUARANTEE ON EVERY PLAN
          </span>
          <a href="#pricing" className="font-mono text-[10px] text-[#c6f752] hover:underline tracking-wider">
            SEE THE GUARANTEE →
          </a>
        </div>
      </div>
    </section>
  );
}

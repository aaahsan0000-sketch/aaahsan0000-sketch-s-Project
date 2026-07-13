"use client";

import { useEffect, useRef, useState } from "react";

const DAYS = [
  { day: "Monday",    focus: "UPPER POWER",   split: "PUSH/PULL", volume: "18 sets", intensity: 88 },
  { day: "Tuesday",   focus: "LOWER POWER",   split: "SQUAT",     volume: "16 sets", intensity: 90 },
  { day: "Wednesday", focus: "RECOVERY",      split: "MOBILITY",  volume: "8k steps", intensity: 35 },
  { day: "Thursday",  focus: "UPPER VOLUME",  split: "HYPERTROPHY", volume: "22 sets", intensity: 72 },
  { day: "Friday",    focus: "LOWER VOLUME",  split: "HINGE",     volume: "20 sets", intensity: 76 },
  { day: "Saturday",  focus: "CONDITIONING",  split: "INTERVALS", volume: "20 min",  intensity: 65 },
];

export function InfrastructureSection() {
  const [vis, setVis]       = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % DAYS.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="infrastructure" ref={ref} className="relative border-t border-[#1e1e1e] bg-[#080808] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${vis ? "opacity-100" : "opacity-0"}`}
        >
          <div>
            <span className="sys-tag mb-3 block">YOUR WEEK</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              A PLAN FOR<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>EVERY DAY</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 text-right">
            {[
              { v: "40+",  l: "PROGRAMS" },
              { v: "500+", l: "EXERCISES" },
              { v: "4–6",  l: "DAYS / WEEK" },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display text-3xl text-[#c8a765]">{s.v}</div>
                <div className="font-mono text-[9px] text-[#3a3a3a] tracking-widest mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Split table */}
        <div className="border-b border-[#1e1e1e]">
          <div className="grid grid-cols-[1fr_110px_90px_90px_120px] border-b border-[#1e1e1e] px-6 py-3">
            {["DAY", "FOCUS", "SPLIT", "VOLUME", "INTENSITY"].map(h => (
              <span key={h} className="font-mono text-[9px] text-[#3a3a3a] tracking-widest">{h}</span>
            ))}
          </div>

          {DAYS.map((r, i) => (
            <div
              key={r.day}
              className={`grid grid-cols-[1fr_110px_90px_90px_120px] px-6 py-5 border-b border-[#1e1e1e] last:border-b-0 transition-all duration-300 ${
                active === i ? "bg-[#0e0e0e]" : "hover:bg-[#0a0a0a]"
              } ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors shrink-0 ${
                    active === i ? "bg-[#c8a765]" : "bg-[#2e2e2e]"
                  }`}
                />
                <span className={`font-mono text-sm ${active === i ? "text-[#f2ede6]" : "text-[#5a5a5a]"}`}>
                  {r.day}
                </span>
              </div>
              <span className={`font-mono text-[11px] tracking-wider self-center ${active === i ? "text-[#c8a765]" : "text-[#5a5a5a]"}`}>
                {r.focus}
              </span>
              <span className="font-mono text-[10px] text-[#3a3a3a] tracking-wider self-center">{r.split}</span>
              <span className="font-mono text-sm text-[#5a5a5a] self-center">{r.volume}</span>
              <div className="flex items-center gap-2 self-center">
                <div className="flex-1 h-1 bg-[#1e1e1e]">
                  <div
                    className="h-full bg-[#c8a765] transition-all duration-500"
                    style={{ width: `${r.intensity}%`, opacity: active === i ? 1 : 0.4 }}
                  />
                </div>
                <span className="font-mono text-[10px] text-[#3a3a3a] w-7 text-right">{r.intensity}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="py-4 flex justify-end">
          <span className="font-mono text-[10px] text-[#3a3a3a]">
            SAMPLE 6-DAY SPLIT &nbsp;· &nbsp;FULLY ADJUSTABLE TO YOUR SCHEDULE
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const ROW1 = [
  { name: "Apple Health", cat: "TRACKING" },
  { name: "Whoop",        cat: "RECOVERY" },
  { name: "Garmin",       cat: "WEARABLE" },
  { name: "Strava",       cat: "CARDIO" },
  { name: "Fitbit",       cat: "WEARABLE" },
  { name: "Oura Ring",    cat: "SLEEP" },
  { name: "MyFitnessPal", cat: "NUTRITION" },
  { name: "Cronometer",   cat: "NUTRITION" },
  { name: "Google Fit",   cat: "TRACKING" },
  { name: "Polar",        cat: "HEART RATE" },
];

const ROW2 = [
  { name: "Hevy",         cat: "LOGGING" },
  { name: "Renpho Scale", cat: "BODY COMP" },
  { name: "Zwift",        cat: "CYCLING" },
  { name: "Peloton",      cat: "CARDIO" },
  { name: "Samsung Health", cat: "WEARABLE" },
  { name: "Withings",     cat: "SCALE" },
  { name: "Coros",        cat: "WEARABLE" },
  { name: "Concept2",     cat: "ROWING" },
  { name: "Suunto",       cat: "GPS" },
  { name: "Eight Sleep",  cat: "SLEEP" },
];

function IntChip({ name, cat }: { name: string; cat: string }) {
  return (
    <div className="shrink-0 flex items-center gap-4 border border-[#1e1e1e] px-5 py-3.5 hover:border-[#c6f752]/40 hover:bg-[#c6f752]/5 transition-all duration-200 cursor-default group">
      <span className="font-mono text-[9px] text-[#3a3a3a] tracking-widest">{cat}</span>
      <span className="font-display text-lg text-[#5a5a5a] group-hover:text-[#f2ede6] transition-colors">
        {name}
      </span>
    </div>
  );
}

export function IntegrationsSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="integrations" className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${vis ? "opacity-100" : "opacity-0"}`}
        >
          <div>
            <span className="sys-tag mb-3 block">TRACK EVERYTHING</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              SYNCS WITH<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>YOUR GEAR</span>
            </h2>
          </div>
          <p className="font-mono text-[10px] text-[#3a3a3a] max-w-[220px] text-right hidden lg:block leading-relaxed">
            CONNECT YOUR WEARABLES &nbsp;/&nbsp; ONE DASHBOARD FOR EVERY METRIC
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="border-b border-[#1e1e1e] py-4 overflow-hidden">
        <div className="flex gap-3 marquee">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex gap-3 shrink-0">
              {ROW1.map(i => <IntChip key={`${i.name}-${ri}`} {...i} />)}
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-[#1e1e1e] py-4 overflow-hidden">
        <div className="flex gap-3" style={{ animation: "marquee 20s linear infinite reverse" }}>
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex gap-3 shrink-0">
              {ROW2.map(i => <IntChip key={`${i.name}-${ri}`} {...i} />)}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#3a3a3a]">+ MANUAL LOGGING FOR EVERYTHING ELSE</span>
        <a href="#" className="font-mono text-[10px] text-[#c6f752] hover:underline tracking-wider">
          SEE ALL SYNCS →
        </a>
      </div>
    </section>
  );
}

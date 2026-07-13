"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    id: "01",
    tag: "PROGRAMMING",
    title: "PERSONALIZED\nTRAINING",
    desc: "No cookie-cutter templates. Your coach builds a progressive program around your goals, schedule, injuries, and equipment — then adjusts it every week based on your real results.",
    stat: { v: "100%", l: "built for you" },
  },
  {
    id: "02",
    tag: "NUTRITION",
    title: "NUTRITION\nCOACHING",
    desc: "Flexible, macro-based nutrition that fits your life — no starvation, no banned foods. Get custom targets, meal frameworks, and adjustments that keep fat loss and muscle gain on track.",
    stat: { v: "0", l: "crash diets" },
  },
  {
    id: "03",
    tag: "ACCOUNTABILITY",
    title: "1-ON-1\nCOACHING",
    desc: "A dedicated coach in your pocket. Message anytime, submit form-check videos, and hop on weekly check-ins. Real humans who keep you honest when motivation runs out.",
    stat: { v: "24/7", l: "coach access" },
  },
  {
    id: "04",
    tag: "TRACKING",
    title: "PROGRESS\nTRACKING",
    desc: "Weight, strength, measurements, photos, and habits — all in one dashboard. See the trends that matter so every decision is driven by data, not guesswork or the scale alone.",
    stat: { v: "∞", l: "data points" },
  },
];

function FeatureRow({ f, index }: { f: typeof FEATURES[0]; index: number }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group border-b border-[#1e1e1e] transition-all duration-500 row-hover ${
        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="grid grid-cols-[56px_1fr] lg:grid-cols-[56px_260px_1fr_160px] gap-0">
        <div className="border-r border-[#1e1e1e] p-5 flex items-start pt-6">
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">{f.id}</span>
        </div>

        <div className="border-r border-[#1e1e1e] p-6 flex flex-col gap-3">
          <span className="sys-tag text-[9px]">{f.tag}</span>
          <h3 className="font-display text-3xl lg:text-4xl leading-[0.9] text-[#f2ede6] group-hover:text-[#c8a765] transition-colors duration-300 whitespace-pre-line">
            {f.title}
          </h3>
        </div>

        <div className="col-span-2 lg:col-span-1 border-r border-[#1e1e1e] p-6 flex items-center">
          <p className="text-sm text-[#5a5a5a] leading-relaxed max-w-lg">{f.desc}</p>
        </div>

        <div className="hidden lg:flex flex-col items-end justify-center p-6">
          <div className="font-display text-4xl text-[#c8a765]">{f.stat.v}</div>
          <div className="font-mono text-[9px] text-[#3a3a3a] tracking-widest mt-1 text-right">{f.stat.l}</div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`grid grid-cols-[56px_1fr] lg:grid-cols-[56px_260px_1fr_160px] border-b border-[#1e1e1e] transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="border-r border-[#1e1e1e] p-5" />
          <div className="col-span-2 lg:col-span-3 p-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="sys-tag mb-4 block">WHAT YOU GET</span>
              <h2 className="font-display text-6xl lg:text-8xl text-[#f2ede6] leading-[0.88] tracking-tight">
                EVERYTHING TO<br />
                <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                  GET IN SHAPE
                </span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-[#3a3a3a] tracking-widest max-w-[200px] text-right hidden lg:block">
              FOUR CORE PILLARS &nbsp;/ &nbsp;ONE COACH &nbsp;/ &nbsp;ZERO GUESSWORK
            </p>
          </div>
        </div>

        {FEATURES.map((f, i) => (
          <FeatureRow key={f.id} f={f} index={i} />
        ))}

        <div className="grid grid-cols-[56px_1fr] border-b border-[#1e1e1e]">
          <div className="border-r border-[#1e1e1e]" />
          <div className="p-6 flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#3a3a3a]">NOT SURE WHERE TO START? →</span>
            <a href="#pricing" className="font-mono text-xs text-[#c8a765] hover:underline tracking-wider">BOOK A FREE CALL</a>
          </div>
        </div>
      </div>
    </section>
  );
}

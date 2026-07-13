"use client";

import { useEffect, useRef, useState } from "react";

function AnimCounter({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(ease * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div
      ref={ref}
      className="font-display text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight text-[#f2ede6] tabular-nums"
    >
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </div>
  );
}

// Consistency heatmap: 0 = trained, 1 = light day, 2 = missed
const STREAK_DATA: number[] = (() => {
  const d: number[] = [];
  for (let i = 0; i < 90; i++) {
    if (i === 19 || i === 58) d.push(2);
    else if (i % 7 === 2 || i % 7 === 6) d.push(1);
    else d.push(0);
  }
  return d;
})();

const STATUS_COLOR: Record<number, string> = {
  0: "#c6f752",
  1: "#84cc16",
  2: "#3a3a3a",
};

const METRICS = [
  { end: 12000, suffix: "+", label: "MEMBERS TRANSFORMED", sub: "and counting worldwide" },
  { end: 94,    suffix: "%", label: "HIT THEIR GOAL", sub: "within their first program" },
  { end: 340000, suffix: "+", label: "COACHING HOURS", sub: "delivered by our team", display: "340K+" },
  { end: 49,    suffix: "", label: "AVG LBS LOST", sub: "top transformation this year", display: "4.8★" },
];

export function MetricsSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="metrics" ref={ref} className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">THE RESULTS</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              RESULTS YOU
              <br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>CAN SEE</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] text-[#3a3a3a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block animate-pulse" />
            <span className="text-[#22c55e]">UPDATED WEEKLY</span>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#1e1e1e]">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`border-r border-[#1e1e1e] last:border-r-0 border-b lg:border-b-0 p-6 lg:p-8 overflow-hidden transition-all duration-500 ${
                vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {m.display ? (
                <div className="font-display text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight text-[#f2ede6] tabular-nums">
                  {m.display}
                </div>
              ) : (
                <AnimCounter end={m.end} suffix={m.suffix} />
              )}
              <div className="mt-3 font-mono text-[10px] text-[#c6f752] tracking-[0.18em]">
                {m.label}
              </div>
              <div className="mt-1 font-mono text-[10px] text-[#3a3a3a]">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Consistency streak */}
        <div className="py-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest uppercase">
              Member consistency · last 90 days
            </span>
            <span className="font-mono text-[10px] text-[#c6f752] tracking-widest">
              91% adherence
            </span>
          </div>
          <div className="flex gap-[3px] items-end h-10">
            {STREAK_DATA.map((status, i) => (
              <div
                key={i}
                title={
                  status === 0 ? "Trained" : status === 1 ? "Light day" : "Rest"
                }
                className="flex-1 rounded-sm transition-opacity hover:opacity-80 cursor-default"
                style={{
                  height: status === 0 ? "100%" : status === 1 ? "70%" : "40%",
                  background: STATUS_COLOR[status],
                  alignSelf: "flex-end",
                  opacity: vis ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 8}ms, height 0.3s ease`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-[9px] text-[#3a3a3a]">90 days ago</span>
            <span className="font-mono text-[9px] text-[#3a3a3a]">Today</span>
          </div>
        </div>

      </div>
    </section>
  );
}

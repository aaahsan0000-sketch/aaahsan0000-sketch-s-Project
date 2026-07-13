"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const TABS = [
  {
    label: "WORKOUT",
    code: `TODAY · UPPER POWER

1  Barbell Bench     4 x 5   @ 175 lb
2  Weighted Pull-Up  4 x 6   @ +25 lb
3  Overhead Press    3 x 8   @ 95 lb
4  Barbell Row       3 x 10  @ 135 lb
5  Face Pull         3 x 15  @ 40 lb

REST 2–3 min · TEMPO 3-1-1
▶ Watch demo for each lift`,
  },
  {
    label: "NUTRITION",
    code: `DAILY TARGETS

CALORIES   2,180 kcal
PROTEIN    185 g   ████████░░  92%
CARBS      210 g   ██████░░░░  64%
FATS        60 g   ███████░░░  71%

MEAL IDEAS
• Greek yogurt + berries + granola
• Chicken, rice, roasted veg
• Salmon, sweet potato, greens`,
  },
  {
    label: "RECOVERY",
    code: `RECOVERY DASHBOARD

SLEEP        7h 24m   ●●●●○  good
HRV          62 ms    trending up
RESTING HR   54 bpm
SORENESS     legs (2/5)

TODAY
Mobility flow · 10 min
Hydration goal · 3.0 L`,
  },
  {
    label: "PROGRESS",
    code: `12-WEEK PROGRESS

WEIGHT     198 → 179 lb   (-19)
BENCH 1RM  155 → 195 lb   (+40)
WAIST      36" → 32.5"
PHOTOS     14 check-ins logged

STREAK     54 days
NEXT GOAL  Bodyweight bench x5`,
  },
];

const APP_PROPS = [
  { k: "iOS & Android app",  v: "Your plan, logging, and coach chat in one place." },
  { k: "500+ exercise videos", v: "HD demos with cues for every movement." },
  { k: "Habit & streak tracker", v: "Build consistency with daily check-offs." },
  { k: "Private community",  v: "Train alongside members chasing the same goals." },
];

export function DevelopersSection() {
  const [tab, setTab]     = useState(0);
  const [copied, setCopied] = useState(false);
  const [vis, setVis]     = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const copy = () => {
    navigator.clipboard.writeText(TABS[tab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" ref={ref} className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div
          className={`border-b border-[#1e1e1e] py-8 transition-all duration-500 ${vis ? "opacity-100" : "opacity-0"}`}
        >
          <span className="sys-tag mb-3 block">THE APP</span>
          <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
            YOUR GYM<br />
            <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>IN YOUR POCKET</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 border-b border-[#1e1e1e]">
          {/* Left — app features */}
          <div className="border-r border-[#1e1e1e]">
            <div className="border-b border-[#1e1e1e] p-6">
              <p className="text-sm text-[#5a5a5a] leading-relaxed max-w-md">
                Everything you need to train lives in one app — your programming, nutrition targets, progress photos, and a direct line to your coach. Open it, hit today&apos;s session, done.
              </p>
            </div>

            {APP_PROPS.map((p, i) => (
              <div
                key={p.k}
                className={`border-b border-[#1e1e1e] px-6 py-5 row-hover transition-all duration-400 ${
                  vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 60 + 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] text-[#c8a765] tracking-wider">{p.k}</span>
                  <span className="font-mono text-[10px] text-[#3a3a3a]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-1 text-sm text-[#5a5a5a]">{p.v}</p>
              </div>
            ))}

            <div className="p-6 flex items-center gap-6">
              <a href="#" className="font-mono text-[11px] text-[#c8a765] tracking-wider hover:underline">
                APP STORE ↗
              </a>
              <a href="#" className="font-mono text-[11px] text-[#5a5a5a] tracking-wider hover:text-[#f2ede6] transition-colors">
                GOOGLE PLAY ↗
              </a>
            </div>
          </div>

          {/* Right — in-app preview */}
          <div
            className={`flex flex-col transition-all duration-600 delay-200 ${
              vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Tabs */}
            <div className="flex border-b border-[#1e1e1e]">
              {TABS.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTab(i)}
                  className={`flex-1 py-3 font-mono text-[10px] tracking-[0.15em] transition-colors relative ${
                    tab === i
                      ? "text-[#c8a765] bg-[#0e0e0e]"
                      : "text-[#3a3a3a] hover:text-[#5a5a5a] hover:bg-[#0a0a0a]"
                  }`}
                >
                  {t.label}
                  {tab === i && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[#c8a765]" />
                  )}
                </button>
              ))}
              <button
                onClick={copy}
                className="px-4 border-l border-[#1e1e1e] text-[#3a3a3a] hover:text-[#c8a765] transition-colors"
                aria-label="Copy plan"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#c8a765]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Preview lines */}
            <div className="flex-1 bg-[#050505] p-6 font-mono text-[12px] min-h-[300px]">
              <pre className="whitespace-pre-wrap">
                {TABS[tab].code.split("\n").map((line, li) => (
                  <div
                    key={`${tab}-${li}`}
                    className="leading-7"
                    style={{ animation: `fade-up 0.25s ease ${li * 45}ms both` }}
                  >
                    <span className="text-[#5a5a5a]">{line}</span>
                  </div>
                ))}
              </pre>
            </div>

            {/* Footer */}
            <div className="border-t border-[#1e1e1e] px-6 py-3 flex items-center justify-between bg-[#080808]">
              <span className="font-mono text-[10px] text-[#3a3a3a]">Fitness Republic App · v3.1</span>
              <div className="flex items-center gap-2">
                <span className="status-pulse w-1.5 h-1.5 rounded-full bg-[#c8a765] inline-block" />
                <span className="font-mono text-[10px] text-[#c8a765]">SYNCED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

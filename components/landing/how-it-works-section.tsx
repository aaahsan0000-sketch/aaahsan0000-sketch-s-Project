"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: "01",
    tag: "ASSESS",
    title: "TELL US\nYOUR GOALS",
    desc: "Start with a deep-dive assessment: your goals, training history, injuries, schedule, and lifestyle. Your coach uses it to understand exactly where you are and where you want to be.",
    file: "intake-profile.txt",
    code: `GOAL          Lose 20 lbs · build strength
EXPERIENCE    Intermediate · 2 yrs lifting
TRAINING DAYS 4 / week · 45–60 min
EQUIPMENT     Home gym · dumbbells + rack
INJURIES      Left shoulder (managed)
SCHEDULE      Early mornings preferred

> Matched with Coach Maya R.
> Assessment complete.`,
  },
  {
    id: "02",
    tag: "BUILD",
    title: "GET YOUR\nCUSTOM PLAN",
    desc: "Within 48 hours you receive a fully personalized training and nutrition plan — progressive, sustainable, and mapped to your equipment and calendar. Nothing generic, ever.",
    file: "week-01-plan.txt",
    code: `MON  Upper Power     5 lifts · RPE 8
TUE  Lower Power     5 lifts · RPE 8
WED  Recovery        mobility + 8k steps
THU  Upper Hypertrophy
FRI  Lower Hypertrophy
SAT  Conditioning    intervals · 20 min

NUTRITION  2,180 kcal · 185g protein
HYDRATION  3.0 L / day`,
  },
  {
    id: "03",
    tag: "TRAIN",
    title: "TRAIN WITH\nA COACH",
    desc: "Log your workouts, send form videos, and check in weekly. Your coach reviews everything and adjusts your program so progress never stalls. You show up — we handle the rest.",
    file: "weekly-check-in.txt",
    code: `WEIGHT        -1.4 lbs this week ✓
BENCH 1RM     +5 lbs → 185 lbs
ADHERENCE     Training 100% · Nutrition 92%
SLEEP         7.2 hrs avg
FORM REVIEW   Squat depth approved ✓

COACH NOTE
"Great week. Adding volume to legs."`,
  },
];

export function HowItWorksSection() {
  const [active, setActive]   = useState(0);
  const [vis, setVis]         = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % STEPS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const step = STEPS[active];

  return (
    <section id="how-it-works" ref={ref} className="relative border-t border-[#1e1e1e] bg-[#080808] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${vis ? "opacity-100" : "opacity-0"}`}
        >
          <div>
            <span className="sys-tag mb-3 block">THE METHOD</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              HOW IT<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>WORKS</span>
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
            ASSESS &nbsp;·&nbsp; BUILD &nbsp;·&nbsp; TRAIN
          </span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[280px_1fr] border-b border-[#1e1e1e]">
          {/* Step nav */}
          <div className="border-r border-[#1e1e1e]">
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`w-full text-left border-b border-[#1e1e1e] p-6 transition-all duration-200 group ${
                  active === i ? "bg-[#0e0e0e]" : "hover:bg-[#0a0a0a]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] text-[#3a3a3a] tracking-widest">{s.tag}</span>
                  <span className="font-mono text-[10px] text-[#3a3a3a]">{s.id}</span>
                </div>
                <h3 className={`font-display text-2xl leading-[0.9] whitespace-pre-line transition-colors ${
                  active === i ? "text-[#c6f752]" : "text-[#3a3a3a] group-hover:text-[#5a5a5a]"
                }`}>
                  {s.title}
                </h3>
                {active === i && (
                  <div className="mt-4 h-px bg-[#1e1e1e] overflow-hidden">
                    <div
                      key={active}
                      className="h-full bg-[#c6f752]"
                      style={{ width: 0, animation: "draw-line 5s linear forwards" }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="grid lg:grid-cols-2">
            {/* Description */}
            <div className="border-r border-[#1e1e1e] p-8 flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#5a5a5a] leading-relaxed mb-8">{step.desc}</p>
                <a href="#pricing" className="inline-flex items-center gap-2 font-mono text-[11px] text-[#c6f752] tracking-wider hover:underline">
                  GET STARTED →
                </a>
              </div>
              <div className="mt-8 font-mono text-[10px] text-[#3a3a3a] border-t border-[#1e1e1e] pt-4">
                STEP &nbsp;{step.id} &nbsp;OF &nbsp;03
              </div>
            </div>

            {/* Plan preview block */}
            <div className="bg-[#050505]">
              <div className="border-b border-[#1e1e1e] px-5 py-3 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#3a3a3a]">{step.file}</span>
                <div className="flex items-center gap-2">
                  <span className="status-pulse w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                  <span className="font-mono text-[10px] text-[#22c55e]">SYNCED</span>
                </div>
              </div>
              <div className="p-6 font-mono text-[12px] min-h-[260px]">
                <pre className="whitespace-pre-wrap">
                  {step.code.split("\n").map((line, li) => (
                    <div
                      key={`${active}-${li}`}
                      className="leading-7"
                      style={{ animation: `fade-up 0.3s ease ${li * 60}ms both` }}
                    >
                      <span className="text-[#3a3a3a] select-none w-5 inline-block text-right mr-4">
                        {li + 1}
                      </span>
                      <span className={line.startsWith(">") || line.startsWith("\"") ? "text-[#c6f752]" : "text-[#5a5a5a]"}>{line}</span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

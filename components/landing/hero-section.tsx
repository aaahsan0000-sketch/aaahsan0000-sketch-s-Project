"use client";

import { useEffect, useState } from "react";
import { AgentParticleCanvas } from "./agent-particle-canvas";

const VERBS = ["TRANSFORM", "DOMINATE", "ENDURE", "EVOLVE", "CONQUER"];

export function HeroSection() {
  const [verbIdx, setVerbIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  useEffect(() => {
    const id = setInterval(() => setVerbIdx(v => (v + 1) % VERBS.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg pt-[88px]">
      {/* Particle canvas — right half of hero */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none z-0">
        <AgentParticleCanvas className="w-full h-full" />
      </div>
      {/* Lime radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(200,167,101,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[1fr] gap-12 lg:gap-20 items-start">
          <div>
            {/* Headline */}
            <div
              className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#c8a765] mb-4">
                — PREMIUM ONLINE COACHING · BUILT FOR RESULTS
              </p>

              <h1 className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-tight text-[#f2ede6] uppercase">
                TRAIN TO
              </h1>

              {/* Animated verb */}
              <div className="relative overflow-hidden h-[clamp(4rem,14vw,12rem)] leading-[0.88]">
                <h1
                  key={verbIdx}
                  className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-tight text-[#c8a765] uppercase absolute inset-0"
                  style={{ animation: "fade-up 0.5s ease forwards" }}
                >
                  {VERBS[verbIdx]}
                </h1>
              </div>

              <h1 className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-tight uppercase text-[#f2ede6]">
                YOUR BODY
              </h1>
            </div>

            {/* Subtext */}
            <div
              className={`mt-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <p className="text-base text-[#5a5a5a] leading-relaxed max-w-xl">
                Custom training, real nutrition, and a coach in your corner every single day. Fitness Republic pairs elite programming with 1-on-1 accountability so you actually finish what you start — from anywhere.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 w-fit">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-8 bg-[#c8a765] text-[#050505] font-mono text-sm tracking-widest px-6 py-4 hover:bg-[#dcc088] transition-colors font-semibold whitespace-nowrap"
                >
                  START YOUR JOURNEY
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#features"
                  className="group inline-flex items-center gap-8 border border-[#1e1e1e] text-[#f2ede6] font-mono text-sm tracking-widest px-6 py-4 hover:border-[#c8a765]/40 hover:text-[#c8a765] transition-colors whitespace-nowrap"
                >
                  VIEW PROGRAMS
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 mt-5">
                <div className="flex -space-x-2">
                  {["#84cc16","#c8a765","#c8a765","#a3e635"].map((c) => (
                    <div key={c} className="w-6 h-6 rounded-full border border-[#050505]" style={{ background: c }} />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-[#3a3a3a]">
                  12,000+ members transformed and counting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div
        className={`absolute bottom-0 left-0 right-0 border-t border-[#1e1e1e] py-5 transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="marquee-fast whitespace-nowrap flex gap-16">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="inline-flex items-center gap-16">
                {[
                  "PERSONALIZED PROGRAMMING",
                  "1-ON-1 COACHING",
                  "MACRO-BASED NUTRITION",
                  "WEEKLY CHECK-INS",
                  "PROGRESS TRACKING",
                  "TRAIN ANYWHERE",
                  "12,000+ TRANSFORMED",
                  "MONEY-BACK GUARANTEE",
                ].map(item => (
                  <span key={item} className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#3a3a3a]">
                    <span className="w-1 h-1 bg-[#c8a765] inline-block shrink-0" />
                    {item}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

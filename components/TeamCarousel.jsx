"use client";
import Image from "next/image";
import { useRef } from "react";

export default function TeamCarousel({ team }) {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex justify-between items-end mb-16">
        <div className="text-center md:text-left">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter uppercase">THE_OPERATORS</h2>
          <p className="font-mono text-[10px] md:text-xs text-slate-500 mt-2">ACTIVE_THREAT_DETECTION_TEAM</p>
        </div>
        <div className="hidden md:block h-[1px] flex-grow mx-12 bg-outline-variant/30" />
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll(-350)}
            className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll(350)}
            className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-8 snap-x hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {team.map((m) => (
          <div key={m.name} className="flex-none w-[280px] md:w-[320px] snap-center md:snap-start group relative bg-surface-container-high p-1 overflow-hidden shadow-[inset_0_0_1px_1px_rgba(97,244,216,0.2)]">
            {/* holographic shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg,rgba(97,244,216,0) 0%,rgba(97,244,216,0.1) 45%,rgba(97,244,216,0.3) 50%,rgba(97,244,216,0.1) 55%,rgba(97,244,216,0) 100%)", backgroundSize: "250% 250%" }}
            />
            <div className="relative bg-surface p-6 h-full flex flex-col">
              <div className="w-full aspect-square bg-slate-900 mb-6 overflow-hidden relative">
                <Image src={m.img} alt={m.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className={`absolute top-2 right-2 px-2 py-1 bg-${m.color} text-surface text-[10px] font-bold font-mono tracking-tighter`}>
                  {m.badge}
                </div>
              </div>
              <h3 className={`font-headline text-xl font-bold text-white mb-1 group-hover:text-${m.color} transition-colors`}>
                {m.name}
              </h3>
              <p className="font-mono text-[10px] text-slate-500 mb-4 uppercase tracking-widest">{m.role}</p>
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-primary/10">
                <span className={`material-symbols-outlined text-sm text-slate-500 group-hover:text-${m.color}`}>{m.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

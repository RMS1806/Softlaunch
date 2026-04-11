import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = { title: "FINOVA 2.0 | MISSION_SCHEDULE" };

const timelineEvents = [
  {
    side: "left", time: "08:00_STAGING", color: "primary",
    title: "PROTOCOL_BOOTSTRAP",
    desc: "Initial seed nodes broadcast. Decentralized consensus layer activation. Entropy collection for validator set rotation.",
    tags: ["NODE_CLUSTER_A", "GENESIS_BLOCK"],
    counter: "T_MINUS_12",
  },
  {
    side: "right", time: "12:30_INITIALIZE", color: "secondary",
    title: "LIQUIDITY_INJECTION",
    desc: "Cross-chain bridging protocol activation. Automated Market Maker (AMM) pool synchronization across 4 parallel sectors.",
    tags: ["VAULT_STABILIZER", "LP_REWARDS_ON"],
    counter: "T_MINUS_08",
  },
  {
    side: "left", time: "15:45_ENCRYPT", color: "primary",
    title: "TERMINAL_HANDSHAKE",
    desc: "Public interface release for Tier 1 operators. KYC-gated secure access for institutional liquidity providers.",
    tags: ["RSA_4096", "API_LEVEL_01"],
    counter: "T_MINUS_04",
  },
  {
    side: "right", time: "21:00_SIGNAL", color: "secondary",
    title: "GLOBAL_SYNCHRONIZATION",
    desc: "Mainnet parity achieved. Final stress testing of the automated risk mitigation module and fail-safe triggers.",
    tags: ["STRESS_TEST_PASS", "LATENCY_OPTIMIZED"],
    counter: "T_MINUS_01",
  },
];

const dates = [
  { month: "APRIL", day: "16", active: false },
  { month: "APRIL", day: "17", active: true },
  { month: "APRIL", day: "18", active: false },
  { month: "APRIL", day: "19", active: false },
];

export default function SchedulePage() {
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      <div className="fixed inset-0 crt-overlay z-[100] pointer-events-none opacity-20" />
      <Navbar />

      <main className="pt-24 min-h-screen">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-mono tracking-widest mb-4">
                  STATUS: SOFT_LAUNCH_ACTIVE
                </div>
                <h1 className="text-7xl font-black font-headline text-white tracking-tighter leading-none mb-4 uppercase">
                  Mission <span className="text-primary italic">Schedule</span>
                </h1>
                <p className="max-w-md text-on-surface-variant font-body text-sm leading-relaxed">
                  Chronological execution plan for the Finova 2.0 network initialization. All timestamps are
                  synchronized to UTC-0.
                </p>
              </div>
              <div className="flex gap-4">
                {dates.map((d) => (
                  <button
                    key={d.day}
                    className={
                      d.active
                        ? "bg-primary text-on-primary px-8 py-4 font-label font-bold text-xs tracking-widest flex flex-col items-center shadow-[0_0_30px_rgba(97,244,216,0.3)]"
                        : "bg-surface-container-highest border border-outline-variant px-8 py-4 font-label font-bold text-xs tracking-widest text-primary hover:bg-primary/10 transition-all flex flex-col items-center"
                    }
                  >
                    <span className={`text-[10px] ${d.active ? "text-on-primary/60" : "text-outline"}`}>{d.month}</span>
                    {d.day}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Timeline ─────────────────────────────────── */}
            <div className="relative">
              {/* Spine */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-outline-variant/30" />
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 h-2/3 w-[2px] md:w-[4px] shadow-[0_0_15px_#61f4d8]"
                style={{ background: "linear-gradient(to bottom, transparent, #61f4d8, #45fec9, #61f4d8, transparent)" }}
              />

              <div className="space-y-16 md:space-y-24 relative z-10">
                {timelineEvents.map((ev, i) => {
                  const isLeft = ev.side === "left";
                  return (
                    <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${!isLeft ? "md:flex-row-reverse" : ""}`}>
                      
                      {/* Desktop Spacer (Hidden on Mobile) */}
                      <div className="hidden md:block flex-1" />

                      {/* Node (Center on Desktop, Left on Mobile) */}
                      <div className="absolute left-[-16px] md:relative md:left-auto w-8 h-8 md:w-12 md:h-12 bg-surface text-primary border-2 md:border-4 border-primary rounded-full flex items-center justify-center z-20 shrink-0 md:mx-0">
                        <div className={`w-2 h-2 bg-primary ${i === 0 ? "animate-pulse" : ""}`} />
                      </div>

                      {/* Content Card (Full width on mobile, half on desktop) */}
                      <div className={`flex-1 w-full pl-8 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                        <div className={`bg-surface-container p-6 md:p-8 border-l-4 md:border-l-0 ${isLeft ? "md:border-r-4" : "md:border-l-4"} border-${ev.color}/40 hover:bg-surface-container-high transition-all`}>
                          <div className={`flex justify-between items-center mb-2`}>
                            <div className={`text-[10px] font-mono text-${ev.color} tracking-[0.3em]`}>{ev.time}</div>
                            <div className="md:hidden text-2xl font-black text-outline-variant/20 font-headline select-none">{ev.counter}</div>
                          </div>
                          <h3 className="text-xl md:text-2xl font-black font-headline text-white mb-4">{ev.title}</h3>
                          <p className="text-sm text-on-surface-variant font-body">{ev.desc}</p>
                          <div className={`mt-6 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                            {ev.tags.map((t) => (
                              <span key={t} className="px-2 py-1 bg-surface-container-lowest text-outline text-[9px] font-mono">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Desktop Counter (Hidden on Mobile) */}
                      <div className={`hidden md:block flex-1 ${isLeft ? "pl-16 text-left" : "pr-16 text-right"}`}>
                        <div className="text-6xl font-black text-outline-variant/20 font-headline select-none">{ev.counter}</div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Image Break ──────────────────────────────── */}
            <div className="mt-24 w-full h-80 relative overflow-hidden grayscale contrast-125 border border-primary/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATjtVsUJEXYFnCf1-QHr8j6tX5TfC9B4gnQhvCVcS1C_NEKZ1T35iQT2NMD83WvBR_LCOAwgwDFgj6SGomwaf1IyXdfkDCHIJtHbVIS8zNDbabYSvWxXaw8ILXZFdxX8g0trmeBC10hMLnlgTjfOFbnHnqVz6oSBopAGuWx6o38GveXrRFZBDk-TS26LEJLMo68usbHPtKfZ61BmukLQeCRay6itR4CKXbcbT4Wx-IBzvIFdZq3T_JyMhpzW8lSVFkXKIPaHq5JvwX"
                alt="Sector 7G Mainframe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="text-[10px] font-mono text-primary mb-1">SYSTEM_VISUAL_FEED</div>
                <div className="text-xl font-black font-headline text-white tracking-widest uppercase">Sector_7G Mainframe</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bento ──────────────────────────────────── */}
        <section className="px-6 md:px-12 py-16 bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-surface-container-highest p-8 border-b-2 border-primary/50">
              <div className="text-xs font-mono text-primary mb-2 uppercase tracking-widest">Network_Stability</div>
              <div className="text-4xl font-black font-headline text-white mb-2">99.999%</div>
              <div className="w-full bg-surface-container h-1 overflow-hidden">
                <div className="bg-primary h-full w-[99%]" style={{ boxShadow: "0 0 10px #61f4d8" }} />
              </div>
            </div>
            <div className="bg-surface-container p-8">
              <div className="text-xs font-mono text-on-surface-variant mb-2 uppercase tracking-widest">Active_Nodes</div>
              <div className="text-4xl font-black font-headline text-white">1,402</div>
            </div>
            <div className="bg-surface-container p-8">
              <div className="text-xs font-mono text-on-surface-variant mb-2 uppercase tracking-widest">Sector_Load</div>
              <div className="text-4xl font-black font-headline text-white">42%</div>
            </div>
            <div className="bg-surface-container p-8 md:col-span-4 flex justify-between items-center">
              <div>
                <div className="text-xs font-mono text-primary mb-1 uppercase">Transmission_Log</div>
                <div className="text-sm text-on-surface-variant font-mono">LAST_BLOCK: 0x48f...2e1 | DELTA: 0.002s</div>
              </div>
              <div className="flex items-end gap-2">
                {[4, 6, 8, 10].map((h, i) => (
                  <div key={i} className={`w-2 bg-primary/${20 + i * 20}`} style={{ height: h * 4, boxShadow: i === 3 ? "0 0 10px #61f4d8" : "none" }} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary flex items-center justify-center shadow-[0_0_30px_#61f4d8] active:scale-95 transition-all z-[60]">
        <span className="material-symbols-outlined font-bold text-3xl">add</span>
      </button>
    </div>
  );
}

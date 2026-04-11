"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    ref: "PROTOCOL_01",
    question: "HOW DO I INITIALIZE MY FIRST LIQUIDITY NODE?",
    answer: (
      <div>
        <p className="mb-4">
          To initialize a node, navigate to the{" "}
          <span className="text-primary">TERMINAL</span> sector and execute the{" "}
          <code className="bg-black/50 px-2 py-1 text-secondary">FINOVA_INIT</code> command. Ensure your vault
          is synced with the global ledger (at least 3 confirmations required).
        </p>
        <ul className="space-y-2 font-mono text-sm">
          <li className="flex items-center gap-2"><span className="text-primary">&gt;&gt;</span> Verified WALLET_SYNC status</li>
          <li className="flex items-center gap-2"><span className="text-primary">&gt;&gt;</span> Minimum fuel of 0.05 ETH for gas consumption</li>
          <li className="flex items-center gap-2"><span className="text-primary">&gt;&gt;</span> Biometric authorization check</li>
        </ul>
      </div>
    ),
  },
  {
    ref: "PROTOCOL_02",
    question: "WHAT IS THE PENALTY FOR EARLY LIQUIDITY WITHDRAWAL?",
    answer: (
      <div className="grid md:grid-cols-2 gap-8">
        <p>
          Withdrawing before the <span className="text-white font-bold">EPOCH_FINALIZATION</span> triggers a
          tactical reallocation fee of 15%. This maintains system stability during high-volatility events.
        </p>
        <div className="bg-surface-container-lowest p-4 border border-error/20">
          <h4 className="font-headline font-black text-xs text-error mb-2 tracking-widest">CRITICAL WARNING</h4>
          <p className="text-xs font-mono">
            Withdrawals during red-zone market depth may result in slippage beyond projected parameters.
          </p>
        </div>
      </div>
    ),
  },
  {
    ref: "PROTOCOL_03",
    question: "CAN I OPERATE MULTIPLE SECTOR IDENTIFIERS?",
    answer: (
      <p>
        Finova 2.0 supports multi-sector orchestration for Advanced Tier operators. You can link up to 5{" "}
        <span className="text-secondary font-mono italic">Sub-IDs</span> to a single master Command Key,
        allowing for distributed liquidity strategies across diverse signal feeds.
      </p>
    ),
  },
  {
    ref: "PROTOCOL_04",
    question: "HOW ARE HACKATHON TEAMS ASSEMBLED?",
    answer: (
      <p>
        Teams of 2–4 members can self-assemble via the <span className="text-primary">SQUAD_ASSEMBLY</span>{" "}
        dashboard. Solo pilots may request automatic squad matching through the{" "}
        <code className="bg-black/50 px-2 py-1 text-secondary font-mono">match_pilot --auto</code> command.
        All squads must be locked before the EPOCH begins.
      </p>
    ),
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:pl-12 md:pr-12 min-h-screen relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        <div className="crt-overlay fixed inset-0 z-10 opacity-30 pointer-events-none" />

        {/* Hero */}
        <header className="max-w-5xl mb-20 relative z-20">
          <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1 mb-6">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary">ENCRYPTED_KNOWLEDGE_BASE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline text-white leading-none tracking-tighter uppercase mb-6">
            Terminal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Protocols
            </span>
          </h1>
          <p className="text-on-surface-variant font-body text-xl max-w-2xl leading-relaxed">
            Access core system logic and operational parameters. If the intelligence you seek is not indexed,
            contact your sector commander immediately.
          </p>
        </header>

        {/* FAQ Section */}
        <section className="max-w-5xl relative z-20">
          {/* Category header */}
          <div className="flex items-end justify-between border-b-2 border-outline-variant pb-4 mb-4">
            <h2 className="font-headline font-bold text-2xl tracking-tighter text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">terminal</span>
              SYSTEM_OPERATIONS
            </h2>
            <span className="font-mono text-[10px] text-outline">BATCH_REF_4402</span>
          </div>

          <div className="space-y-2 mb-12">
            {faqs.map((faq, i) => (
              <div key={faq.ref} className="group">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full flex items-center justify-between p-8 bg-surface-container hover:bg-surface-container-high transition-all border-l-4 ${open === i ? "border-primary" : "border-transparent hover:border-primary"}`}
                >
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[10px] text-primary mb-1 tracking-widest">[ {faq.ref} ]</span>
                    <h3 className={`font-headline font-bold text-xl uppercase tracking-tight transition-colors ${open === i ? "text-primary" : "text-on-surface group-hover:text-primary"}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`material-symbols-outlined text-primary transition-transform ${open === i ? "rotate-45" : ""}`}>
                    add
                  </span>
                </button>
                {open === i && (
                  <div className="p-8 border-t border-primary/10 text-on-surface-variant font-body leading-relaxed"
                    style={{ backdropFilter: "blur(12px)", background: "rgba(30,35,67,0.4)", borderLeft: "2px solid rgba(97,244,216,0.2)" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Promo Module */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="md:col-span-2 bg-gradient-to-br from-primary-container to-secondary-container p-8 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
              <div className="relative z-10">
                <h4 className="font-headline font-black text-4xl text-white uppercase tracking-tighter mb-4">
                  Tactical Support<br />Live Terminal
                </h4>
                <p className="text-on-secondary-container max-w-sm mb-6 font-medium">
                  Need immediate tactical data? Our AI-driven support drones are active 24/7 in the Signal Feed.
                </p>
                <button className="inline-flex items-center gap-3 bg-white text-surface px-6 py-3 font-headline font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                  OPEN_COMM_LINK
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-highest border-t-4 border-primary p-8 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">security</span>
              <h4 className="font-headline font-bold text-xl mb-2">SECURITY_CORE</h4>
              <p className="text-xs text-outline font-mono uppercase tracking-widest">
                Quantum-Resistant<br />Encryption Active
              </p>
              <div className="mt-8 pt-8 border-t border-outline-variant w-full">
                <span className="font-mono text-[10px] text-primary">UPTIME: 99.9992%</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

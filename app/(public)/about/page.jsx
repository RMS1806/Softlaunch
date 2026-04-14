import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import TeamCarousel from "@/components/TeamCarousel";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "FINOVA 2.0 | ABOUT_CORE" };

export default async function AboutPage() {
  const supabase = createClient();
  const { data: operators, error } = await supabase.from("operators").select("*");

  const team = operators || [];

  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      <div className="crt-overlay fixed inset-0 z-[100] pointer-events-none" />
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary">GENESIS_RECORDS_LOG_001</span>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-8xl font-bold leading-none tracking-tighter mb-8">
              WE ARE THE <span className="text-primary italic">ANOMALY</span>.
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed max-w-3xl">
              Born in the latency gaps of high-frequency trading, Finova 2.0 isn't just a platform. It's a revolt
              against the static structures of legacy finance. We built a system that breathes data, moves with
              the speed of light, and empowers the individual to override the neural pathways of traditional banking.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="text-right font-mono text-xs text-slate-500 mb-2">COORD: 40.7128° N, 74.0060° W</div>
            <div className="w-full h-64 bg-surface-container-highest relative overflow-hidden group shadow-[inset_0_0_1px_1px_rgba(97,244,216,0.2)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRiJn1oeb96_L2qQULUGAN9GheJyLkMI_uwECW5apUYwL3EGDJHw3172UygpgSEnZryHCDcS75dZbwJc6jcnZNhyr4g4jSXvB5dMBH4gDM79s90kx4Cyrh-8WIG3-YvSU_by-zoLWSgo9NqAe0Pmfaiv0RvQrJvo4EkxDDP5ORW1DfVIQODtOEVTlzCunXvxsHQBireWuK8X9Cc6I7TampmbymwPXYzjUNzi3ntK-jF1DtEDvhETiObeQp8tKDlcLrWKMOusCiE-kG"
                alt="Archive" fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-primary">[VIEW_ARCHIVE]</div>
            </div>
          </div>
        </section>

        {/* ── Mission Terminal ──────────────────────────────── */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="bg-surface-container-lowest p-8 md:p-12 relative overflow-hidden shadow-[inset_0_0_1px_1px_rgba(97,244,216,0.2)]">
            {/* Terminal dots */}
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 bg-red-500/50" />
              <div className="w-3 h-3 bg-yellow-500/50" />
              <div className="w-3 h-3 bg-green-500/50" />
              <div className="ml-4 font-mono text-[10px] text-slate-500">MISSION_MANIFESTO.sh</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-6 uppercase tracking-tight" style={{ textShadow: "0 0 8px rgba(97,244,216,0.6)" }}>
                  SYSTEM_OBJECTIVES
                </h2>
                <div className="space-y-6 font-mono text-sm leading-relaxed text-slate-300">
                  <p className="flex gap-4"><span className="text-primary">&gt;</span> ELIMINATE ALL TRANSACTIONAL FRICTION ACROSS DISTRIBUTED LEDGERS.</p>
                  <p className="flex gap-4"><span className="text-primary">&gt;</span> DEPLOY HIGH-FIDELITY ANALYTICS FOR REAL-TIME ALPHA GENERATION.</p>
                  <p className="flex gap-4"><span className="text-primary">&gt;</span> ENSURE TOTAL ANONYMITY THROUGH ENCRYPTED NEURAL ARCHITECTURES.</p>
                </div>
              </div>
              <div className="relative flex flex-col justify-center border-l border-primary/20 pl-12">
                <p className="font-headline text-4xl md:text-5xl font-black text-white/10 leading-none absolute -left-4 top-1/2 -translate-y-1/2 select-none">OVERRIDE</p>
                <p className="font-headline text-xl italic text-on-surface leading-snug">
                  "The architecture of tomorrow is being written in the code of today. We don't predict the
                  market; we design the protocols that govern it."
                </p>
                <p className="mt-4 font-mono text-xs text-primary">— ARCHITECT_X</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team Grid ─────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto">
          {team.length > 0 ? (
            <TeamCarousel team={team} />
          ) : (
            <div className="text-center font-mono text-on-surface-variant p-10 border border-dashed border-outline-variant/30">
              NO OPERATORS FOUND IN DATABASE ARCHIVES
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

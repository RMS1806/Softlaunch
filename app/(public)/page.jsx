import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import CountdownHero from "./CountdownHero";

export const metadata = {
  title: "FINOVA 2.0 | HACKATHON",
  description: "48-hour fintech hackathon at MIT Manipal. Build the next generation of DeFi infrastructure.",
};

export default function HomePage() {
  return (
    <div className="bg-surface font-body text-on-surface">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="circuit-bg absolute inset-0 opacity-20 pointer-events-none" />
        <div className="crt-overlay absolute inset-0" />

        {/* Floating Badge – Prize Pool */}
        <div className="hidden md:block absolute top-1/4 left-10 md:left-24 animate-pulse z-10">
          <div className="bg-surface-container-highest/80 backdrop-blur-md border border-primary/30 p-4 shadow-[0_0_20px_rgba(97,244,216,0.2)]">
            <p className="font-mono text-[10px] text-primary tracking-widest">PRIZE_POOL</p>
            <p className="font-headline text-2xl font-black text-white">$15,000+</p>
          </div>
        </div>

        {/* Floating Badge – Builders */}
        <div className="hidden md:block absolute bottom-1/4 right-10 md:right-24 animate-bounce z-10">
          <div className="bg-surface-container-highest/80 backdrop-blur-md border border-secondary/30 p-4 shadow-[0_0_20px_rgba(69,254,201,0.2)]">
            <p className="font-mono text-[10px] text-secondary tracking-widest">ECOSYSTEM</p>
            <p className="font-headline text-2xl font-black text-white">600+ BUILDERS</p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="z-10 mt-20">
          <h1 className="liquid-chrome font-headline text-6xl md:text-[10rem] font-black leading-none tracking-tighter mb-4">
            SOFTLAUNCH 2.0
          </h1>
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              terminal
            </span>
            <p className="font-mono text-lg md:text-xl text-primary-fixed tracking-tight opacity-90">
              Finance × Technology × MIT Manipal_
            </p>
          </div>

          {/* Live Countdown */}
          <CountdownHero />

          <Link
            href="/register"
            className="group relative inline-block bg-primary-fixed px-12 py-5 font-headline font-black text-xl tracking-widest text-on-primary-container hover:shadow-[0_0_50px_rgba(97,244,216,0.6)] transition-all hover:-translate-y-1 active:scale-95"
          >
            INITIALIZE REGISTRATION
            <span className="absolute -right-2 -top-2 bg-white text-black text-[10px] px-1 font-mono">
              LIVE_NOW
            </span>
          </Link>
        </div>
      </section>

      {/* ── System Manifesto ─────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-black font-headline text-primary-fixed uppercase tracking-tighter">
            [SYSTEM_MANIFESTO]
          </h2>
          <div className="bg-surface-container-low p-8 border-l-4 border-primary-fixed font-mono text-on-surface-variant leading-relaxed">
            <p className="mb-4">&gt; FINOVA is the nexus where decentralized protocols meet academic excellence.</p>
            <p className="mb-4">&gt; We are re-engineering the financial stack from the ground up at MIT Manipal.</p>
            <p className="text-white">&gt; Deploying a 48-hour hackathon sprint to build the next generation of DeFi.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-primary text-3xl font-black">48H</span>
              <span className="font-mono text-[10px] uppercase">Sprint</span>
            </div>
            <div className="w-px h-12 bg-outline-variant" />
            <div className="flex flex-col">
              <span className="text-primary text-3xl font-black">$10K+</span>
              <span className="font-mono text-[10px] uppercase">Prize Pool</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
          <Image
            alt="Finova Core"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK1Lgtg26pZe64ojDXu8WQPsdBetxwieKYT3fKl0vy-XB12WBQnIZY7a8fL7l_VkVSv54OH9yMCvYbVsSRPvOiQqCNgUd1PObFI-9ioleIojdFENf7wLlHTFu6toIeYm1rGKYUntmIvzU0j316kF2JIGUVIQB32T38PhNwYsOga1r644_IqsjEQXu94xYSm3EbyUYZQC9FpfCSMRitU6RK6FJX3UAxcbgFMp7NoAeW2nfKKZUrPztt_Z3vd4wpAViv2UuW4PpfEFaf"
            width={1200}
            height={800}
            className="relative z-10 w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute top-0 right-0 p-4 z-20 font-mono text-xs text-primary">SCAN_001.JPG</div>
        </div>
      </section>

      {/* ── The Hackathon — Featured Section ──────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <p className="font-mono text-primary text-sm tracking-[0.4em] mb-2">THE_MAIN_EVENT</p>
              <h2 className="text-5xl font-black font-headline uppercase tracking-tighter">The Hackathon</h2>
            </div>
            <Link
              href="/events"
              className="font-mono text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
            >
              VIEW_DETAILS{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Single Full-Width Hackathon Card */}
          <div className="bg-surface-container-highest p-8 md:p-12 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="bg-primary/20 text-primary px-3 py-1 font-mono text-[10px] border border-primary/40">
                  PRIMARY_NODE
                </span>
                <h3 className="text-4xl md:text-5xl font-black font-headline mt-6 mb-4">THE FIN-SPRINT HACKATHON</h3>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-8">
                  48 hours of high-velocity development. Build the next generation of DeFi infrastructure. 
                  One event. One shot. Maximum impact.
                </p>
                <div className="flex flex-wrap gap-8 mb-8">
                  <div className="flex flex-col">
                    <span className="font-mono text-2xl text-primary font-black">$10K</span>
                    <span className="font-mono text-[9px] text-outline uppercase">PRIZE_POOL</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-2xl text-white font-black">48H</span>
                    <span className="font-mono text-[9px] text-outline uppercase">DURATION</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-2xl text-white font-black">200</span>
                    <span className="font-mono text-[9px] text-outline uppercase">MAX_SLOTS</span>
                  </div>
                </div>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-headline font-black text-on-primary-container uppercase tracking-widest hover:shadow-[0_0_30px_rgba(97,244,216,0.4)] transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined">bolt</span>
                  REGISTER NOW
                </Link>
              </div>
              <div className="flex-shrink-0">
                <span
                  className="material-symbols-outlined text-[12rem] text-primary/10 group-hover:text-primary/20 transition-colors"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  code
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sponsors Strip ───────────────────────────────────── */}
      <section className="py-12 border-y border-outline-variant bg-black">
        <Link href="/sponsors" className="block max-w-7xl mx-auto px-12 group">
          <p className="font-mono text-[10px] text-center text-on-surface-variant tracking-[0.5em] mb-8 uppercase group-hover:text-primary transition-colors">
            Synchronized Entities
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div className="flex items-center gap-2 font-headline font-bold text-2xl text-white">
              <span className="material-symbols-outlined text-primary">token</span> NEXUS_DEFI
            </div>
            <div className="flex items-center gap-2 font-headline font-bold text-2xl text-white">
              <span className="material-symbols-outlined text-secondary">security</span> VANGUARD
            </div>
            <div className="flex items-center gap-2 font-headline font-bold text-2xl text-white">
              <span className="material-symbols-outlined text-primary">rocket_launch</span> ORBITAL
            </div>
            <div className="flex items-center gap-2 font-headline font-bold text-2xl text-white">
              <span className="material-symbols-outlined text-secondary">database</span> CORE_DATA
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

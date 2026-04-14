import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "FINOVA 2.0 | THE_HACKATHON" };

const hackathon = {
  name: "Finova Hackathon 2.0",
  description: "The ultimate fintech hackathon to disrupt legacy systems. Assemble your squad and build the future of finance.",
  date: "Oct 24-26, 2024",
  venue: "MIT Manipal Innovation Center",
  slots: { filled: 85, total: 200 }
};
const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDU7sEQ4DYzbivY_0hrqs7Itd7swA1-Zh0oqeJiSmBA3gn471vmcZzFsVucX_u_CGd5GM-2S33XNLRx_MUWt9Dwy6CYdE5Ai0oC_eajRtYu0TmX3VXr6FoFYSdV9eW9kwmo5EOEYQSfusq4t1Tkqrt6AucV__VcOffWhck6WzSHedI0pL3mOym4TFE9MjYXX9KimOcoBXUyH0QfaXEKRp5ihNcPYItqVbHlP8rnVaw3PyfqkR6ywOqLSe0rVsKBpWLSlKo9puYBjg-1";

export default function EventsPage() {
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden min-h-screen">
      <div className="crt-overlay fixed inset-0 z-50 pointer-events-none opacity-20" />
      <Navbar />

      <main className="pt-24 pb-32 min-h-screen relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-3 border border-primary/20 bg-primary/10 px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-primary uppercase">Hackathon_Live</span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 border-b border-outline-variant/30 pb-12">
              <div className="max-w-3xl">
                <h1 className="liquid-chrome font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                  The<br />Hackathon
                </h1>
                <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-xl">
                  48 hours of high-velocity fintech development. Build the next generation of DeFi infrastructure at MIT Manipal. One event. One mission. No distractions.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-surface-container p-6 border border-primary/10">
                <p className="font-mono text-xs text-outline uppercase tracking-widest border-b border-primary/10 pb-2">Mission_Parameters</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="font-headline font-black text-2xl text-white">48H</p>
                    <p className="font-mono text-[9px] text-primary">DURATION</p>
                  </div>
                  <div>
                    <p className="font-headline font-black text-2xl text-white">200</p>
                    <p className="font-mono text-[9px] text-primary">MAX_OPERATORS</p>
                  </div>
                  <div>
                    <p className="font-headline font-black text-2xl text-white">{Math.round((hackathon.slots.filled / hackathon.slots.total) * 100)}%</p>
                    <p className="font-mono text-[9px] text-secondary">CAPACITY_REACHED</p>
                  </div>
                  <div>
                    <p className="font-headline font-black text-2xl text-white">$10K+</p>
                    <p className="font-mono text-[9px] text-secondary">PRIZE_POOL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Featured Hackathon Card — FULL WIDTH ────────── */}
            <div className="group relative bg-surface-container-low border border-primary/20 overflow-hidden hover:shadow-[0_0_40px_rgba(97,244,216,0.15)] transition-all duration-700">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={heroImage} 
                  alt={hackathon.name} 
                  fill 
                  className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity hover:mix-blend-normal" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              </div>

              <div className="relative z-10 p-8 md:p-16 flex flex-col h-full min-h-[500px]">
                <div className="flex justify-between items-start mb-auto">
                  <span className="inline-block bg-primary/20 border border-primary/50 text-primary font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                    PRIMARY_NODE
                  </span>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>

                <h2 className="font-headline font-black text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4 mt-12 md:max-w-2xl">
                  {hackathon.name}
                </h2>
                <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                  {hackathon.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-auto border-t border-primary/20 pt-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                    <span className="font-mono text-sm text-white">{hackathon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                    <span className="font-mono text-sm text-white">{hackathon.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                    <span className="font-mono text-sm text-white">48 Hours</span>
                  </div>
                  
                  <div className="ml-auto w-full md:w-auto mt-4 md:mt-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[9px] text-primary">SLOT_CAPACITY</span>
                      <span className="font-mono text-[9px] text-white">{hackathon.slots.filled}/{hackathon.slots.total}</span>
                    </div>
                    <div className="h-1.5 w-full md:w-48 bg-surface-container">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${(hackathon.slots.filled / hackathon.slots.total) * 100}%`, boxShadow: '0 0 10px #61f4d8' }} 
                      />
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/register" 
                    className="bg-primary px-10 py-4 font-headline font-black text-on-primary-container text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_40px_rgba(97,244,216,0.4)] transition-all active:scale-95 text-center"
                  >
                    INITIALIZE REGISTRATION
                  </Link>
                  <Link 
                    href="/login" 
                    className="border border-primary/40 px-10 py-4 font-headline font-bold text-primary text-sm tracking-[0.2em] uppercase hover:bg-primary/10 transition-all text-center"
                  >
                    ALREADY REGISTERED? LOGIN
                  </Link>
                </div>
              </div>
              
              {/* Overlay Hover Circle */}
              <div className="absolute top-1/3 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none hidden lg:flex">
                <div className="w-28 h-28 rounded-full border border-primary bg-surface/50 backdrop-blur-md flex items-center justify-center pointer-events-auto hover:bg-primary hover:text-surface text-primary transition-colors cursor-none">
                  <Link href="/register" className="font-headline font-bold text-xs tracking-widest w-full h-full flex items-center justify-center uppercase">
                    Deploy
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

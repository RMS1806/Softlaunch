import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { mockEvents } from "@/data/mockEvents";

export const metadata = { title: "FINOVA 2.0 | TACTICAL_OPERATIONS" };

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDU7sEQ4DYzbivY_0hrqs7Itd7swA1-Zh0oqeJiSmBA3gn471vmcZzFsVucX_u_CGd5GM-2S33XNLRx_MUWt9Dwy6CYdE5Ai0oC_eajRtYu0TmX3VXr6FoFYSdV9eW9kwmo5EOEYQSfusq4t1Tkqrt6AucV__VcOffWhck6WzSHedI0pL3mOym4TFE9MjYXX9KimOcoBXUyH0QfaXEKRp5ihNcPYItqVbHlP8rnVaw3PyfqkR6ywOqLSe0rVsKBpWLSlKo9puYBjg-1",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3cveRWbNCbupjYNXrAI278zgArIfGomy3nHgKtdTrXBpZUWxr26-drwSLVw4_LQ6BhFAyIB3EnwZtGIkC8o89KghqPPjCd_oqaC7YsApys-bFnutoGBua9kgaOMdLZVw2TqcZKYIJ-g2ioeN4jEBDozjysMbi0DP9I68Peb5SkZnaMYoL4XvMfWd74zBlGYQBAJkgIUSzXZOReriTYWZliC0NE3tczPRJ0AlNgXHD7WwcIZrzqz0xF1weoP7v1LzSmcG-CGp-yE9Z",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfThbLOjGiMpoP_fnDg3z99If26McXjPl5NqLQrhKO8N7J-UK0jEfqLlh2O_WVIytobprqIFnXWvX5PXAznVTVSZAyfA0TINHAIQJQdhrkKc4q8KUgoYtVaH7jBeezgagDhx0hrwSe743m3xp-n5S162TLTiTQsSK9KAlOCEAJ6hwEpiOxctTCpZe2iLYEC0B_szVwzloJCCju_edc3HozuoS5lOicvLz1pAoold4Adzt3YTe7F9yORxuUbDcWPW4UjId4Hy0Xj0uw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCRiJn1oeb96_L2qQULUGAN9GheJyLkMI_uwECW5apUYwL3EGDJHw3172UygpgSEnZryHCDcS75dZbwJc6jcnZNhyr4g4jSXvB5dMBH4gDM79s90kx4Cyrh-8WIG3-YvSU_by-zoLWSgo9NqAe0Pmfaiv0RvQrJvo4EkxDDP5ORW1DfVIQODtOEVTlzCunXvxsHQBireWuK8X9Cc6I7TampmbymwPXYzjUNzi3ntK-jF1DtEDvhETiObeQp8tKDlcLrWKMOusCiE-kG"
];

// Combine mock events with image data
const eventsList = mockEvents.map((e, index) => ({
  ...e,
  img: images[index % images.length],
  category: index === 0 ? "CORE_NODE" : index === 1 ? "TACTICAL_INTEL" : index === 2 ? "NETWORK_SYNC" : "STRESS_TEST",
  color: index % 2 === 0 ? "primary" : "secondary"
}));

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
              <span className="font-mono text-[10px] tracking-widest text-primary uppercase">Public_Ledger_Active</span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 border-b border-outline-variant/30 pb-12">
              <div className="max-w-3xl">
                <h1 className="liquid-chrome font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                  Tactical<br />Operations
                </h1>
                <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-xl">
                  Engage in high-stress financial combat modules. Analyze the available tactical nodes, assess risk, and commit your operator ID to secure access.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-surface-container p-6 border border-primary/10">
                <p className="font-mono text-xs text-outline uppercase tracking-widest border-b border-primary/10 pb-2">Global_Parameters</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="font-headline font-black text-2xl text-white">04</p>
                    <p className="font-mono text-[9px] text-primary">ACTIVE_NODES</p>
                  </div>
                  <div>
                    <p className="font-headline font-black text-2xl text-white">48H</p>
                    <p className="font-mono text-[9px] text-primary">TIMEFRAME</p>
                  </div>
                  <div>
                    <p className="font-headline font-black text-2xl text-white">78%</p>
                    <p className="font-mono text-[9px] text-secondary">CAPACITY_REACHED</p>
                  </div>
                  <div>
                    <p className="font-headline font-black text-2xl text-white">UTC+0</p>
                    <p className="font-mono text-[9px] text-secondary">SYNC_ZONE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Events Grid ────────────────────────────────── */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              
              {/* Featured Event (Hackathon) */}
              <div className="md:col-span-12 lg:col-span-8 group relative bg-surface-container-low border border-primary/20 overflow-hidden hover:shadow-[0_0_40px_rgba(97,244,216,0.15)] transition-all duration-700">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={eventsList[0].img} 
                    alt={eventsList[0].name} 
                    fill 
                    className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity hover:mix-blend-normal" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                </div>

                <div className="relative z-10 p-8 md:p-12 flex flex-col h-full min-h-[450px]">
                  <div className="flex justify-between items-start mb-auto">
                    <span className="inline-block bg-primary/20 border border-primary/50 text-primary font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                      {eventsList[0].category}
                    </span>
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>

                  <h2 className="font-headline font-black text-5xl md:text-6xl text-white uppercase tracking-tighter mb-4 mt-12 md:max-w-lg">
                    {eventsList[0].name}
                  </h2>
                  <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
                    {eventsList[0].description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mt-auto border-t border-primary/20 pt-6">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                      <span className="font-mono text-sm text-white">{eventsList[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                      <span className="font-mono text-sm text-white">{eventsList[0].venue}</span>
                    </div>
                    
                    <div className="ml-auto w-full md:w-auto mt-4 md:mt-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-[9px] text-primary">SLOT_CAPACITY</span>
                        <span className="font-mono text-[9px] text-white">{eventsList[0].slots.filled}/{eventsList[0].slots.total}</span>
                      </div>
                      <div className="h-1.5 w-full md:w-48 bg-surface-container">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${(eventsList[0].slots.filled / eventsList[0].slots.total) * 100}%`, boxShadow: '0 0 10px #61f4d8' }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Overlay Action Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                  <div className="w-24 h-24 rounded-full border border-primary bg-surface/50 backdrop-blur-md flex items-center justify-center pointer-events-auto hover:bg-primary hover:text-surface text-primary transition-colors cursor-none">
                    <Link href={`/events/${eventsList[0].slug}`} className="font-headline font-bold text-xs tracking-widest w-full h-full flex items-center justify-center uppercase">
                      Access
                    </Link>
                  </div>
                </div>
              </div>

              {/* Minor Events */}
              {eventsList.slice(1).map((e) => (
                <div key={e.slug} className="md:col-span-6 lg:col-span-4 group relative bg-surface-container border border-outline-variant/30 hover:border-white/20 transition-all flex flex-col h-full overflow-hidden">
                  <div className="h-48 w-full relative overflow-hidden border-b border-outline-variant/30">
                    <Image 
                      src={e.img} 
                      alt={e.name} 
                      fill 
                      className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    />
                    <div className={`absolute top-4 left-4 bg-surface px-2 py-1 border border-${e.color}/30 text-${e.color} font-mono text-[9px] tracking-widest uppercase`}>
                      {e.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline font-bold text-2xl text-white uppercase tracking-tight mb-2">
                      {e.name}
                    </h3>
                    <p className="text-sm text-on-surface-variant font-body mb-6">
                      {e.description}
                    </p>
                    
                    <div className="mt-auto space-y-4">
                      <div className="grid grid-cols-2 gap-2 pb-4 border-b border-outline-variant/20">
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] text-outline uppercase">Schedule</span>
                          <span className="font-mono text-xs text-white">{e.date}</span>
                        </div>
                        <div className="flex flex-col ml-auto text-right">
                          <span className="font-mono text-[9px] text-outline uppercase">Coordinates</span>
                          <span className="font-mono text-xs text-white">{e.venue}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-[10px] font-mono text-outline uppercase flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          {e.status}
                        </div>
                        <Link href={`/events/${e.slug}`} className={`text-xs font-headline font-bold uppercase tracking-widest text-${e.color} hover:text-white transition-colors flex items-center gap-1`}>
                          ENTER_PORTAL <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

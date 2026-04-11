import { mockEvents } from "@/data/mockEvents";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventDetail({ params }) {
  const event = mockEvents.find((e) => e.slug === params.slug) || mockEvents[0];
  
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden min-h-screen">
      <div className="crt-overlay fixed inset-0 z-50 pointer-events-none opacity-20" />
      <Navbar />

      <main className="pt-32 pb-32 min-h-screen relative px-6 md:px-12">
        {/* Background Gradients */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link href="/events" className="inline-flex items-center gap-2 font-mono text-[10px] text-outline hover:text-primary transition-colors uppercase tracking-[0.2em] mb-12">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Return to Tactical Operations
          </Link>

          {/* Header Info */}
          <div className="border border-outline-variant/30 bg-surface-container-low p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
            
            <div className="flex justify-between items-start mb-8">
              <span className="inline-block bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                {event.status === "Open" ? "SECURE_CONNECTION" : "RESTRICTED"}
              </span>
              <div className="flex flex-col text-right font-mono text-[10px] text-outline-variant uppercase">
                <span>NODE: {event.slug}</span>
                <span>STATUS: {event.status}</span>
              </div>
            </div>

            <h1 className="liquid-chrome font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
              {event.name}
            </h1>
            
            <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mb-12">
              {event.description}
            </p>

            {/* Event Stats Terminal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-outline-variant/30 mb-12">
              <div>
                <p className="font-mono text-[9px] text-outline uppercase tracking-widest mb-2">Schedule</p>
                <p className="font-headline font-bold text-lg text-white">{event.date}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-outline uppercase tracking-widest mb-2">Coordinates</p>
                <p className="font-headline font-bold text-lg text-white">{event.venue}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-outline uppercase tracking-widest mb-2">Capacity</p>
                <p className="font-headline font-bold text-lg text-white">{event.slots?.filled || 0} / {event.slots?.total || 100}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-outline uppercase tracking-widest mb-2">Clearance</p>
                <p className="font-headline font-bold text-lg text-secondary">Level 1</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-xs text-primary uppercase tracking-widest">Portal_Open</span>
              </div>
              <Link 
                href="/login" 
                className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 font-headline font-black uppercase tracking-[0.2em] hover:bg-white active:scale-95 transition-all shadow-[0_0_20px_rgba(97,244,216,0.2)] text-center"
              >
                INITIALIZE LOADOUT
              </Link>
            </div>
          </div>

          {/* Decorative Terminal Output */}
          <div className="mt-8 p-6 bg-surface-container-lowest border border-outline-variant/20 font-mono text-[10px] text-outline-variant leading-relaxed opacity-50">
            <p>&gt; Establishing secure handshake with {event.venue}...</p>
            <p>&gt; Connection established. Latency: 12ms.</p>
            <p>&gt; Uploading protocol payload [{event.slug}.sys]...</p>
            <p className="text-secondary">&gt; Awaiting operator confirmation.</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

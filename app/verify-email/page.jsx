import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "FINOVA 2.0 | VERIFY_EMAIL" };

export default function VerifyEmailPage() {
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden min-h-screen flex flex-col">
      <div className="crt-overlay fixed inset-0 z-[100] pointer-events-none" />
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-xl w-full text-center">
          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1 mb-8">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary">AWAITING_VERIFICATION</span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              CHECK YOUR MAIL
            </span>
          </h1>

          <p className="text-lg text-on-surface-variant font-mono leading-relaxed mb-10">
            A secure authentication link has been dispatched to your provided email address. 
            You must verify your identity before initializing your terminal session.
          </p>

          <div className="bg-surface-container-low border border-outline-variant/30 p-6 font-mono text-xs text-on-surface-variant text-left mb-10 shadow-[0_0_15px_rgba(40,45,71,0.5)]">
            <div className="text-primary mb-2 uppercase tracking-widest">[ SECURITY LOG ]</div>
            <div>&gt; Establishing operator profile... <span className="text-primary">OK</span></div>
            <div>&gt; Database sync initiated... <span className="text-primary">OK</span></div>
            <div>&gt; Dispatching auth payload... <span className="text-primary">OK</span></div>
            <div className="mt-2 text-secondary animate-pulse">&gt; Waiting for user confirmation...</div>
          </div>

          <Link href="/login" className="bg-primary/10 border border-primary text-primary px-8 py-3 font-headline font-bold uppercase tracking-widest hover:bg-primary/20 transition-all inline-block">
            PROCEED TO LOGIN
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

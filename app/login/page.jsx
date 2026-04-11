"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return setError("Valid email required");
    if (password.length < 8) return setError("Password must be at least 8 chars");
    localStorage.setItem("isLoggedIn", "true");
    document.cookie = "isLoggedIn=true; path=/";
    router.push("/dashboard");
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      {/* ── Cinematic Background ───────────────────────────── */}
      <div className="fixed inset-0 z-0 bg-surface">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 scanline-overlay" />
        {/* Technical corner decorations */}
        <div className="absolute top-10 left-10 font-label text-[10px] text-primary/30 uppercase tracking-[0.3em]">
          SYSTEM_STATUS: ENCRYPTED<br />
          LATENCY: 14MS<br />
          LOCATION: SECTOR_7G
        </div>
        <div className="absolute bottom-10 right-10 font-label text-[10px] text-primary/30 uppercase tracking-[0.3em] text-right">
          MNPL_NODE_v2.0.4<br />
          X: 45.221 | Y: 102.003
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────── */}
      <main className="relative z-10 min-h-screen flex items-center justify-center p-6 pb-40">
        <div className="w-full max-w-lg">
          {/* Back Button */}
          <Link href="/" className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] text-outline-variant hover:text-primary transition-colors uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            Return to Command
          </Link>
          
          {/* Branding Header */}
          <div className="mb-12 text-center">
            <h1 className="font-headline font-black text-6xl md:text-7xl text-white tracking-tighter leading-none mb-2 drop-shadow-[0_0_15px_rgba(97,244,216,0.3)]">
              AUTHENTICATE<br />
              <span className="text-primary">IDENTITY</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-[1px] w-12 bg-primary/30" />
              <p className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant">
                Accessing Finova Mainframe
              </p>
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
          </div>

          {/* Login Terminal Card */}
          <div className="bg-surface-container-low border border-primary/10 relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute inset-0 pointer-events-none border border-primary/5 shadow-[inset_0_0_40px_rgba(97,244,216,0.05)]" />

            <form className="p-10 space-y-8 relative z-10" onSubmit={submit}>
              {/* Email Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary/70">
                    Terminal Address
                  </label>
                  <span className="font-label text-[8px] text-outline-variant uppercase">
                    @mit.manipal.edu
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="PILOT_ID"
                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant py-4 px-0 font-label text-lg tracking-tight text-white placeholder:text-outline focus:ring-0 focus:border-primary transition-all duration-300 peer"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary shadow-[0_0_10px_#61f4d8] transition-all duration-500 peer-focus:w-full" />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary/70">
                    Access Key
                  </label>
                  <span className="material-symbols-outlined text-outline-variant text-sm">lock</span>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant py-4 px-0 font-label text-lg tracking-tight text-white placeholder:text-outline focus:ring-0 focus:border-primary transition-all duration-300 peer"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary shadow-[0_0_10px_#61f4d8] transition-all duration-500 peer-focus:w-full" />
                </div>
              </div>

              {error && (
                <p className="font-mono text-[11px] text-error bg-error/10 px-3 py-2 border border-error/30">
                  ⚠ {error}
                </p>
              )}

              {/* Actions */}
              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-on-primary font-headline font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 active:scale-95 transition-all duration-150 hover:shadow-[0_0_30px_rgba(97,244,216,0.4)]"
                >
                  <span className="material-symbols-outlined text-lg">fingerprint</span>
                  BIO-SYNC
                </button>

                <div className="flex items-center gap-4 py-2">
                  <div className="h-[1px] flex-1 bg-outline-variant/30" />
                  <span className="font-label text-[10px] text-outline-variant uppercase tracking-widest">
                    Protocol Override
                  </span>
                  <div className="h-[1px] flex-1 bg-outline-variant/30" />
                </div>

                <button
                  type="button"
                  className="w-full py-4 bg-surface-container-highest border border-outline-variant text-white font-label text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-surface transition-all duration-300"
                >
                  <span className="font-bold text-sm">G</span>
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </form>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40" />
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex justify-between items-center px-2">
            <Link href="/faq" className="font-label text-[10px] text-outline-variant uppercase tracking-widest hover:text-primary transition-colors">
              Emergency Protocol?
            </Link>
            <Link href="/register" className="font-label text-[10px] text-outline-variant uppercase tracking-widest hover:text-primary transition-colors">
              Request Access
            </Link>
          </div>
        </div>
      </main>

      {/* ── Decoration Layers ────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 -left-20 rotate-90 opacity-10">
          <span className="font-label text-[6rem] font-black text-primary leading-none select-none tracking-tighter">
            FINOVA_CORE
          </span>
        </div>
        <div className="absolute bottom-1/4 -right-20 -rotate-90 opacity-10">
          <span className="font-label text-[6rem] font-black text-primary leading-none select-none tracking-tighter">
            SEC_OVERRIDE
          </span>
        </div>
      </div>

      {/* ── Fixed Footer Bar ─────────────────────────────── */}
      <footer className="fixed bottom-0 w-full z-50 bg-[#080c22] border-t border-[#61f4d8]/30 px-10 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
          © 2024 FINOVA SOFTLAUNCH 2.0 // TACTICAL COMMAND
        </div>
        <div className="flex gap-8 mt-2 md:mt-0">
          <Link href="/about" className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-white hover:drop-shadow-[0_0_5px_rgba(97,244,216,0.8)] transition-all">
            PROTOCOL
          </Link>
          <Link href="/events" className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-white hover:drop-shadow-[0_0_5px_rgba(97,244,216,0.8)] transition-all">
            RESOURCES
          </Link>
          <Link href="/register" className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-white hover:drop-shadow-[0_0_5px_rgba(97,244,216,0.8)] transition-all">
            TERMINAL_ACCESS
          </Link>
          <Link href="/faq" className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-white hover:drop-shadow-[0_0_5px_rgba(97,244,216,0.8)] transition-all">
            SUPPORT
          </Link>
        </div>
      </footer>
    </div>
  );
}

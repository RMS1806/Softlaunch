"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { registerAction } from "@/app/actions";

export default function RegisterPage() {
  const [error, setError] = useState("");

  const submit = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    
    if (!name || !email) return setError("All required fields are mandatory");
    if (!email.includes("@")) return setError("Email format is invalid");
    if (password.length < 6) return setError("Access Key must be at least 6 characters");
    
    setError("");
    const res = await registerAction(formData);
    if (res?.error) {
      setError(res.error);
    }
  };

  const inputCls = "w-full bg-surface-container-high/50 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-white placeholder:text-on-surface-variant/30 font-mono text-sm py-3 px-4 transition-all outline-none";
  const labelCls = "block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 ml-1";

  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      {/* CRT + mesh overlays */}
      <div className="fixed inset-0 crt-overlay z-[60] pointer-events-none" />
      <div className="fixed inset-0 mesh-bg opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-tr from-surface via-surface-container-low to-primary/5 opacity-50 -z-10" />

      <Navbar />

      <main className="min-h-screen pt-32 pb-24 px-4 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-2xl bg-surface-container-lowest/80 border border-outline-variant/30 relative shadow-2xl backdrop-blur-sm">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-surface-container-high relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-primary w-[35%] shadow-[0_0_10px_#61f4d8]" />
            <div className="absolute inset-y-0 left-[35%] w-12 bg-white/20 animate-pulse" />
          </div>

          <div className="p-8 md:p-12">
            {/* Back Button */}
            <Link href="/" className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] text-outline-variant hover:text-primary transition-colors uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-[14px]">chevron_left</span>
              Abort Sequence
            </Link>

            {/* Header */}
            <header className="mb-12 border-l-4 border-primary pl-6">
              <p className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary mb-2">
                Protocol: Hackathon_v2.0
              </p>
              <h1 className="font-headline text-4xl font-black text-white tracking-tighter uppercase leading-none">
                Establish <span className="text-primary">Identity</span>
              </h1>
              <p className="text-on-surface-variant font-mono text-xs mt-2 uppercase tracking-tight">
                Register to access the Hackathon command center.
              </p>
            </header>

            {/* Form */}
            <form className="space-y-6" action={submit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Operator_Name</label>
                  <input className={inputCls} placeholder="COMMANDER NAME" type="text" name="name" required />
                </div>
                <div>
                  <label className={labelCls}>Operator_Email</label>
                  <input className={inputCls} placeholder="USER@EMAIL.COM" type="email" name="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelCls}>Roll_ID</label>
                  <input className={inputCls} placeholder="21XXXXXX" type="text" name="roll" required />
                </div>
                <div>
                  <label className={labelCls}>Sector_Branch</label>
                  <select className={inputCls} name="branch" defaultValue="CSE">
                    {["CSE", "IT", "CCE", "DSE", "OTHER"].map((b) => (
                      <option key={b} className="bg-surface-container">{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Pilot_Year</label>
                  <select className={inputCls} name="year" defaultValue="2022">
                    {["2021", "2022", "2023", "2024"].map((y) => (
                      <option key={y} className="bg-surface-container">{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Comms_Link (PH)</label>
                  <input className={inputCls} placeholder="+91 XXXX-XXXX" type="tel" name="phone" required />
                </div>
                <div>
                  <label className={labelCls}>Access_Key</label>
                  <input className={inputCls} placeholder="••••••••••••" type="password" name="password" required />
                </div>
              </div>

              {error && (
                <p className="font-mono text-[11px] text-error bg-error/10 px-3 py-2 border border-error/30">
                  ⚠ {error}
                </p>
              )}

              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full bg-primary py-5 font-headline font-black text-on-primary-container text-lg tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(97,244,216,0.3)] hover:shadow-[0_0_50px_rgba(97,244,216,0.5)] transition-all active:scale-[0.97] relative group overflow-hidden"
                >
                  <span className="relative z-10">INITIALIZE ACCOUNT</span>
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                </button>
              </div>

              <div className="text-center space-y-3 mt-4">
                <p className="font-mono text-[10px] text-on-surface-variant uppercase">
                  By deploying, you agree to the{" "}
                  <a href="#" className="text-primary hover:underline underline-offset-4">
                    Security Protocol 40.B
                  </a>
                </p>
                <p className="font-mono text-[11px] text-on-surface-variant">
                  Already initialized?{" "}
                  <Link href="/login" className="text-primary hover:underline underline-offset-4 font-bold uppercase tracking-wider">
                    Authenticate Here
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Card Footer */}
          <div className="p-4 bg-surface-container-low border-t border-outline-variant/20 flex justify-between items-center px-8">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-2 h-2 bg-outline-variant rounded-full" />
              <div className="w-2 h-2 bg-outline-variant rounded-full" />
            </div>
            <div className="font-mono text-[10px] text-on-surface-variant">
              NODE_TYPE: REGISTRATION_STATION_001
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

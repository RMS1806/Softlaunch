"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", roll: "", branch: "CSE", year: "2022", phone: "", password: "" });
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return setError("All required fields are mandatory");
    if (!form.email.includes("@")) return setError("Email format is invalid");
    if (form.password.length < 8) return setError("Password min length is 8");
    localStorage.setItem("isLoggedIn", "true");
    document.cookie = "isLoggedIn=true; path=/";
    router.push("/dashboard");
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
                Protocol: Softlaunch_v2.0
              </p>
              <h1 className="font-headline text-4xl font-black text-white tracking-tighter uppercase leading-none">
                Establish <span className="text-primary">Identity</span>
              </h1>
              <p className="text-on-surface-variant font-mono text-xs mt-2 uppercase tracking-tight">
                Accessing MIT Manipal secure node // Registration required.
              </p>
            </header>

            {/* Google OAuth */}
            <div className="mb-10">
              <button className="w-full group flex items-center justify-center gap-4 bg-surface-container-highest border border-outline-variant/40 py-4 hover:border-primary/60 transition-all active:scale-[0.98] relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-bold text-white text-sm">G</span>
                <span className="font-headline font-bold text-sm tracking-widest uppercase">
                  INITIALIZE WITH MIT EMAIL
                </span>
              </button>
              <div className="flex items-center gap-4 my-8">
                <div className="h-[1px] flex-1 bg-outline-variant/30" />
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">Manual Override</span>
                <div className="h-[1px] flex-1 bg-outline-variant/30" />
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={submit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Legal_Name</label>
                  <input className={inputCls} placeholder="COMMANDER NAME" type="text" onChange={set("name")} />
                </div>
                <div>
                  <label className={labelCls}>Email_Node (MIT)</label>
                  <input className={inputCls} placeholder="USER@LEARNER.MANIPAL.EDU" type="email" onChange={set("email")} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelCls}>Roll_ID</label>
                  <input className={inputCls} placeholder="21XXXXXX" type="text" onChange={set("roll")} />
                </div>
                <div>
                  <label className={labelCls}>Sector_Branch</label>
                  <select className={inputCls} onChange={set("branch")}>
                    {["CSE", "IT", "CCE", "DSE", "OTHER"].map((b) => (
                      <option key={b} className="bg-surface-container">{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Pilot_Year</label>
                  <select className={inputCls} onChange={set("year")}>
                    {["2021", "2022", "2023", "2024"].map((y) => (
                      <option key={y} className="bg-surface-container">{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Comms_Link (PH)</label>
                  <input className={inputCls} placeholder="+91 XXXX-XXXX" type="tel" onChange={set("phone")} />
                </div>
                <div>
                  <label className={labelCls}>Security_Key</label>
                  <input className={inputCls} placeholder="••••••••" type="password" onChange={set("password")} />
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

              <p className="text-center font-mono text-[10px] text-on-surface-variant uppercase mt-4">
                By deploying, you agree to the{" "}
                <a href="#" className="text-primary hover:underline underline-offset-4">
                  Security Protocol 40.B
                </a>
              </p>
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
              NODE_TYPE: REGISTRATION_STATION_004
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

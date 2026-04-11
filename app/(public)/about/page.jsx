import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = { title: "FINOVA 2.0 | ABOUT_CORE" };

const team = [
  {
    name: "VINCENZO_VOID", role: "LEAD_PROTOCOL_ARCHITECT", badge: "LVL_99", color: "primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTtgpy48bJMgZrZAk01OSCNhVv67z_QWLKaG8lHJ04DCSkZqCeUMl5i64n15EBTXxpZ1A7_dGxeuLahsu7rOGU_O4d05fxOJ0BGlCubM_zoII8quwD5718DVbvl5bWJvUTjG-75T8XU_so4fpKpgKtFWYZgK_o05RL0f7BuN0e0kzWc7xDc3WdDnTBxbLfQtsZCaSF5jevVK6_dPD6Kes8FF6FoNIdozcuZXfXFhN9osicGUHNYm96C7o-Y2nH2aAunp6TxmQLL9l8",
    icon: "terminal",
  },
  {
    name: "KARA_SIGNAL", role: "QUANT_STRATEGY_DEPT", badge: "ELITE", color: "secondary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHG0eEcrRcbYVNRGSm8AVNu4bxBCuER3TTC2861bwk6LHBL9UBPb3kcTS5HuzjIev9RaD81xYm7v1iCA6-vLz_fEOvrLC1E6TcKy3ni-Nu1fr0kHBk0LMYQLo_FiTx_UztlYpDILf_6sJ9fB7oNYQTTCG89fheNf2cMtb5_D0lquh415glz7hf1eC8kIwTWw7k1ytqAaq-EhN5feygywzUURd1qmC_VhUcoaT89FW-ojWnH2qytBFeXwabW8pQmXcIOH0rJkQDsd1Z",
    icon: "radar",
  },
  {
    name: "DRAKE_VAULT", role: "CYBER_SECURITY_CORE", badge: "ROOT", color: "primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvD4SmyRMESmXiAJmGxpCq39zO4JEBR4Ie6iuepyZSxfMjJVXQXQQEoBEC-JdPh-ltR-RkkXfc0gvDvhJFYgZR2765wE6_MZA5uVp8ja--2Jp677lCFUi8dyvUN9lHA5BbVbFeP6iYSnZ5_Xl5wC8WTgmqBmEdZvNxKWn1BREebt1_B7uasZwYCYqzPp7tqFwZJajDPsylCY5O52EAD3h8KSaYahdinrFq4uzBomtxb7wcwUrYXR_M5JvXsEI-B0T6zajrF4qfjSow",
    icon: "security",
  },
  {
    name: "MAYA_SYNAPSE", role: "NEURAL_INTERFACE_UX", badge: "CORE", color: "secondary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYS3MZox2ocw7IQ4kQ5NCdCWMZreZPRc-IMlu36IAkSmP3XR6HFLbX2ieut09TUueqV3zEFSNCl89qZjPo8xfZCxgmJYPe4h-zEhd-2JCsB60h19Y3T6Ng9pcY_MbWG8MlL6fwxuYOUCTWlSjQY0fPKdsoSiWe7W4BV6qaEI3orn35Pnm-Q6PTcUsUuGXdk5xiuJIbXsTMqKq7licrVHdT1FDLOKXl298GwmVqtz8s08k-zDy4s7RP1aAZY9USB0mYBfuZB_AhlxEe",
    icon: "psychology",
  },
];

export default function AboutPage() {
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
          <div className="flex justify-between items-end mb-16">
            <div className="text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter uppercase">THE_OPERATORS</h2>
              <p className="font-mono text-[10px] md:text-xs text-slate-500 mt-2">ACTIVE_THREAT_DETECTION_TEAM</p>
            </div>
            <div className="hidden md:block h-[1px] flex-grow mx-12 bg-outline-variant/30" />
            <div className="hidden md:flex gap-4">
              {["chevron_left", "chevron_right"].map((icon) => (
                <div key={icon} className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="group relative bg-surface-container-high p-1 overflow-hidden shadow-[inset_0_0_1px_1px_rgba(97,244,216,0.2)]">
                {/* holographic shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(135deg,rgba(97,244,216,0) 0%,rgba(97,244,216,0.1) 45%,rgba(97,244,216,0.3) 50%,rgba(97,244,216,0.1) 55%,rgba(97,244,216,0) 100%)", backgroundSize: "250% 250%" }}
                />
                <div className="relative bg-surface p-6 h-full flex flex-col">
                  <div className="w-full aspect-square bg-slate-900 mb-6 overflow-hidden relative">
                    <Image src={m.img} alt={m.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className={`absolute top-2 right-2 px-2 py-1 bg-${m.color} text-surface text-[10px] font-bold font-mono tracking-tighter`}>
                      {m.badge}
                    </div>
                  </div>
                  <h3 className={`font-headline text-xl font-bold text-white mb-1 group-hover:text-${m.color} transition-colors`}>
                    {m.name}
                  </h3>
                  <p className="font-mono text-[10px] text-slate-500 mb-4 uppercase tracking-widest">{m.role}</p>
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-primary/10">
                    <span className={`material-symbols-outlined text-sm text-slate-500 group-hover:text-${m.color}`}>{m.icon}</span>
                    <span className={`font-mono text-[10px] text-${m.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      ACCESS_RECORDS
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

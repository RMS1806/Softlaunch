import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = { title: "FINOVA 2.0 | ECOSYSTEM_AMPLIFIERS" };

const goldSponsors = [
  {
    name: "Void_Labs_Intl",
    desc: "System-wide encryption architecture for institutional cross-chain liquidity routing.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAalfM246Wq0Yr81gk7JT8kPVd4plCd_XUkGi2FqRdVx2oT0JhghKMAIdhyBV8IcGelDHRCuZ7zEbFkKJ3CT4Rowts5otAQFtCA3yqRBepKRGGMxsvYUfFn-7eFi9-i1ZTNmow2ugsqCINVNJjrkL5mVaLos65Z5BeD6Wx69MTIWRvnhGg8JEIMdWcQfNBzeubENxLppTXmwPV2mAdF7ezPbKdvwbpvSBP0ZN-m0j6o8hKi6NjuI5s6UqwvEWDF0t74sqmMvqpRZ2_d",
  },
  {
    name: "Spectre_Group",
    desc: "Real-time risk telemetry engines for high-frequency algorithmic derivatives.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABFj1cK1cngicrODe0i0oVP7BNT0bswkNACae3hndcFAWMyE7zUNjQ6GgTzhWp92eoTDTGbdF3WXBx-9wTHFwUJA51y7RdfE3aGb9yjICqZADg6MKKs7_KJX7ml6FShHG-GxJx3FQy1XYFRagL2wD79Rpo-Zk_BnZDf3q2D10S2z2w4_tWrLe88n3-CInUCQ2yUS0N4tHBE3ymUy3Uv-HivmNivJ7HHPQBeEWlEiC32w88BKsqB2__dBkS_1UQOFN_zSE7qwZnRYb3",
  },
  {
    name: "Qubit_Systems",
    desc: "Quantum-resistant security layers for cold storage vault integration.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfJJvEJlQYwa11m8YtsbQiUleWjM8oGSrsDca1fpwDdY-p1nJA4OIa_rGrRAZi1Vz752GhlqHqw9H8MwWj6RPv1MYQLo_FiTx_UztlYpDILf_6sJ9fB7oNYQTTCG89fheNf2cMtb5_D0lquh415glz7hf1eC8kIwTWw7k1ytqAaq-EhN5feygywzUURd1qmC_VhUcoaT89FW-ojWnH2qytBFeXwabW8pQmXcIOH0rJkQDsd1Z",
  },
];

const silverImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzhgQy0BBiEpD87WI9GRw-jslaCWYnqAoUeSLRbEbGe5EJqn0o94m4Q4_9FqtiJHYKlQBH91FKDLsJCblHg_712Tfqari1Ad6hwdJKF-YHyPuMUEPq1jITEVmXjOQJX-zWHVSOWYzua-Y3a-ykgoBBsUOAVpC0ZJKRz9biP4h69FR-Gezaz1rtzj04shGxaNNcuMmhBsqU4XPQ0XR_cUfifUzfT5-QTnZgtYG4mAswfO-GahWk_KUvw67kokAtt9YTiDnZjiw1KKEp",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCgYUIJsE0VrUSqAJ971qBg0wS6UtGF16VXvJusQ6jWVK-yRsinzhSEERK-oOqaSQ9-dw4-hE4-yO916vHKw9Q86s2fpMYOSvCfVv2f8BIYuDd0F0nNMxApomQnR1A0zdE4PxsacS-xEXS-YKeOLjrAYCQimt4tVFkd4uUmMiKnD7HTxh3W1TryMZ_HxlfznE5PC3z8uxaPyXHsqhlK1oDS3RTtn5ek1K71m4t6SqzG-LOTi2h_uQovPWasbkOfQBO2FBmQmJHGqajA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDcpK6IJZQmqeRC1GNvtvOrKfLRx2bHQZR0eRPeBtQUtX3PkD2FwF32BUj_GQr_8E2lqmwnAX2URcI15x4Z8Vq2v9AEE9ICVwfX7JSqS1lheeR56Cphf8mVfO8zeJVfpRQwaK5QEmUW9Ub8M_Mtmp0USbcg174LbDUwk430FvnyMpQEH9N6dGZsam5RLqyywTLF9BuK80N8pgRSZNfGOqfNb1Yre6TZWRNGUl_gsaOtJhcmi3oD2V3NPn4qYf918B5jBMvXNrUCh1tQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBgUAXogILhTECWQjIDnL_sNXeX8wwlqHJwbxE8v4uULmcSg1Ys8DSw6VZC0aq3bD9LiF_5JKDsyMgSig2eCTPJpHCxXgI3KNaGTBcKOxP_ii7V6BK6cdzdqPTwO3mvN-22G-cKKC-lRJ3SgcMNfemnF8m9akAvsI9B1BN-lHefBVk5SRErl3CutQosHqkwSPbXJD0V0bTLKOMDIF5DMe_ohij62EPvoLIJ0z0V5gPRyg9lSVDAXinS7sl7Ca6ZK4ihl3PP-ifhtTW-",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAdrw6rY43b9UzbJp3z66WTTcSZt8ep4f5_W4fc44iJ1PW4sSm0l6f0gDi6-7Nfrq02j5ad8cPlWXVJFbJRECoC5eqa5Os5Ps3YyrkcdD_DrD_ubHIEG72BfyZP5CA3g8EX8afT5BdnxJj1pD1O4G0JqDtoKWFoSHpeGuPAbEzLZJyXTJKdqHzFj3LRqPNRFchpf2oLHMiwvL-0T3EZiAZhAhcoSlEwc9VsQ7CLVdfXqb-vZlVxzWG_CQ5Uv-BvjhcA63b6AeH7_Epn",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJXNOmwLGG-Z3Rle0VDcM1oNFwMCiXDQPNRHQS9iLoWJ-auhDkKNvrG8E9kxP4E6H15WNSbR-80quJjCjo9FghIFN0r6svV86AQtRvPtYhTWj-anU3vfW1KKX_oTyIAInHMtLz1iCc8bre1vwhpxlb00w_cqJLwdFQaryyKIf2ZHugzX0SnlKi_-a6jWRZyPP93ap0VVbNoeZOlvqZKX_9L2oEJKkwb8WanGT0eVmsqWn5ihvoldA2A7si7c-Kn8I7mtUfX7ScEqSn",
];

export default function SponsorsPage() {
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      <Navbar />

      <main className="md:pl-0 pt-20">
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[614px] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(97,244,216,0.10),transparent_70%)] opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full crt-overlay opacity-20 pointer-events-none" />
          <h1 className="liquid-chrome text-6xl md:text-8xl font-black font-headline uppercase tracking-tighter text-center relative z-10 leading-none mb-6">
            Ecosystem<br />Amplifiers
          </h1>
          <p className="max-w-2xl text-center text-on-surface-variant font-mono text-sm tracking-widest uppercase mb-12 relative z-10">
            // Strategic partners fueling the next generation of decentralized infrastructure //
          </p>
          <div className="h-[2px] w-48 bg-primary relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-12 bg-white shadow-[0_0_15px_#fff] animate-pulse" />
          </div>
        </section>

        {/* ── Sponsors Grid ─────────────────────────────── */}
        <section className="px-6 md:px-12 py-16 md:py-24 space-y-24 md:space-y-32">
          {/* Title Sponsor */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="h-[1px] flex-grow bg-outline-variant/30" />
              <h2 className="font-headline text-primary font-bold tracking-[0.4em] uppercase text-xs">Apex_Entity</h2>
              <span className="h-[1px] flex-grow bg-outline-variant/30" />
            </div>
            <div className="flex justify-center">
              <div className="group relative p-12 w-full max-w-4xl hover:shadow-[0_0_50px_rgba(97,244,216,0.15)] transition-all duration-700"
                style={{ background: "rgba(30,35,67,0.4)", backdropFilter: "blur(12px)", border: "1px solid rgba(97,244,216,0.1)" }}
              >
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary" />
                <div className="flex flex-col items-center gap-8">
                  <div className="w-full aspect-[21/9] bg-surface-container-lowest flex items-center justify-center border border-primary/10 relative overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcFvkmUPSZPRrDSyo8_7WW3CjTl-4alK1j9yGqpDy5ZpDgxo4CUKv7yfT1MPfavJmcD_8tNCLB4xc_l36y8Ce0WEpnDrBKa3go5mosLlNG1v_V2a5OFXRcDMehDIIKYVmjF0wBamxlHpzVJPwJQ9ZWH_ZYJOEY7FLFGiXwTIPbAKKudZl-l_xd1wexJdidUa8s7V_l_CLZ_8xDmuIZmTtsEMRFd0bzyI0vaPYRy0CRXXDZHY4N-YV6zUoce8Z5pirHkyzGPvQHIGp2"
                      alt="Cyber Dynamics" width={600} height={200}
                      className="w-3/4 opacity-90 group-hover:scale-110 transition-transform duration-1000 object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
                    {[["Core Sector", "Neural Infrastructure"], ["Network Contribution", "Tier 0 Node Validation"], ["Protocol Access", "Omni-Channel Priority"]].map(([label, val]) => (
                      <div key={label} className="p-6 border border-primary/5 bg-primary/5">
                        <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">{label}</p>
                        <p className="text-sm font-headline font-bold text-white uppercase">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="h-[1px] flex-grow bg-outline-variant/30" />
              <h2 className="font-headline text-secondary font-bold tracking-[0.4em] uppercase text-xs">High_Frequency_Nodes</h2>
              <span className="h-[1px] flex-grow bg-outline-variant/30" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {goldSponsors.map((s) => (
                <div key={s.name} className="group relative overflow-hidden p-8 border border-white/5 hover:border-secondary/30 transition-all duration-500"
                  style={{ background: "rgba(30,35,67,0.4)", backdropFilter: "blur(12px)" }}
                >
                  <div className="h-32 bg-surface-container-lowest flex items-center justify-center mb-6 relative overflow-hidden">
                    <Image src={s.img} alt={s.name} width={200} height={48} className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-white font-headline font-bold uppercase mb-2">{s.name}</h3>
                  <p className="text-xs text-on-surface-variant font-mono leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="h-[1px] flex-grow bg-outline-variant/30" />
              <h2 className="font-headline text-slate-400 font-bold tracking-[0.4em] uppercase text-xs">Standard_Uplink</h2>
              <span className="h-[1px] flex-grow bg-outline-variant/30" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {silverImages.map((src, i) => (
                <div key={i} className="h-24 flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity bg-surface-container"
                  style={{ background: "rgba(30,35,67,0.4)", backdropFilter: "blur(12px)" }}
                >
                  <Image src={src} alt={`Partner ${i + 1}`} width={120} height={32} className="max-h-8 object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefit Matrix ────────────────────────────── */}
        <section className="px-6 md:px-12 py-16 md:py-32 bg-surface-container-low/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e2343_1px,transparent_1px),linear-gradient(to_bottom,#1e2343_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="text-4xl font-black font-headline tracking-tighter uppercase mb-4">Benefit_Matrix.sys</h2>
              <div className="h-1 w-24 bg-primary" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-mono text-xs uppercase tracking-wider">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left py-8 px-6 text-slate-500 font-medium">Provision_Parameter</th>
                    <th className="py-8 px-6 text-center text-primary bg-primary/5">Apex [Title]</th>
                    <th className="py-8 px-6 text-center text-secondary">High_Freq [Gold]</th>
                    <th className="py-8 px-6 text-center text-slate-400">Uplink [Silver]</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    ["Network_Node_Validation", "FULL_AUTH", "PARTIAL_AUTH", "READ_ONLY"],
                    ["Interface_Branding_Weight", "DISPLAY_ULTRA", "DISPLAY_MID", "LOG_ONLY"],
                    ["API_Call_Concurrency", "UNLIMITED", "10,000/SEC", "1,000/SEC"],
                    ["Priority_Alpha_Access", "✓", "✓", "✗"],
                    ["Governance_Voting_Multiplier", "5.0X", "2.5X", "1.0X"],
                  ].map(([param, apex, gold, silver]) => (
                    <tr key={param}>
                      <td className="py-6 px-6 text-white">{param}</td>
                      <td className="py-6 px-6 text-center bg-primary/5 text-primary">{apex}</td>
                      <td className="py-6 px-6 text-center text-secondary">{gold}</td>
                      <td className="py-6 px-6 text-center text-slate-600">{silver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-16 md:py-32">
          <div className="max-w-5xl mx-auto border border-primary/40 relative"
            style={{ background: "rgba(30,35,67,0.4)", backdropFilter: "blur(12px)" }}
          >
            <div className="bg-surface p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 p-4 font-mono text-[8px] text-primary/30 uppercase tracking-widest">
                Protocol_Handshake: Pending<br />Security_Layer: Active
              </div>
              <div className="absolute bottom-0 right-0 p-4 font-mono text-[8px] text-primary/30 uppercase tracking-widest">
                Connection_Encrypted<br />Node_Sync: 100%
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter mb-8 max-w-2xl leading-none">
                Secure your position in the <span className="text-primary">Core Network</span>
              </h2>
              <p className="text-on-surface-variant font-body mb-12 max-w-xl text-lg">
                Limited operational slots remain for Softlaunch 2.0. Apply for strategic sponsorship to leverage
                the Finova Liquidity Layer.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <button className="bg-primary text-on-primary-container px-12 py-4 font-headline font-black text-lg uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(97,244,216,0.3)]">
                  Become_A_Sponsor
                </button>
                <button className="border-2 border-outline text-white px-12 py-4 font-headline font-bold text-lg uppercase tracking-tighter hover:border-primary hover:text-primary transition-all">
                  Review_Protocol
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

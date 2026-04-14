import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";
import FAQAccordion from "./FAQAccordion";

export const metadata = { title: "FINOVA 2.0 | TERMINAL_PROTOCOLS" };

export default async function FAQPage() {
  const supabase = createClient();
  const { data: faqs } = await supabase
    .from("faqs")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:pl-12 md:pr-12 min-h-screen relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        <div className="crt-overlay fixed inset-0 z-10 opacity-30 pointer-events-none" />

        {/* Hero */}
        <header className="max-w-5xl mb-20 relative z-20">
          <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1 mb-6">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary">ENCRYPTED_KNOWLEDGE_BASE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline text-white leading-none tracking-tighter uppercase mb-6">
            Terminal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Protocols
            </span>
          </h1>
          <p className="text-on-surface-variant font-body text-xl max-w-2xl leading-relaxed">
            Access core system logic and operational parameters. If the intelligence you seek is not indexed,
            contact your sector commander immediately.
          </p>
        </header>

        {/* FAQ Section */}
        <section className="max-w-5xl relative z-20">
          {/* Category header */}
          <div className="flex items-end justify-between border-b-2 border-outline-variant pb-4 mb-4">
            <h2 className="font-headline font-bold text-2xl tracking-tighter text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">terminal</span>
              SYSTEM_OPERATIONS
            </h2>
            <span className="font-mono text-[10px] text-outline">{faqs?.length || 0} PROTOCOLS INDEXED</span>
          </div>

          {faqs && faqs.length > 0 ? (
            <FAQAccordion faqs={faqs} />
          ) : (
            <div className="text-center font-mono text-on-surface-variant p-10 border border-dashed border-outline-variant/30 mb-12">
              NO PROTOCOLS FOUND IN DATABASE
            </div>
          )}

          {/* Promo Module */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="md:col-span-2 bg-gradient-to-br from-primary-container to-secondary-container p-8 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
              <div className="relative z-10">
                <h4 className="font-headline font-black text-4xl text-white uppercase tracking-tighter mb-4">
                  Tactical Support<br />Direct Comms
                </h4>
                <p className="text-on-secondary-container max-w-sm mb-6 font-medium">
                  Have a query not covered in the protocols? Reach out directly to our command team.
                </p>
                <a href="mailto:finova.support@manipal.edu" className="inline-flex items-center gap-3 bg-white text-surface px-6 py-3 font-headline font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                  finova.support@manipal.edu
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            <div className="bg-surface-container-highest border-t-4 border-primary p-8 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">security</span>
              <h4 className="font-headline font-bold text-xl mb-2">SECURITY_CORE</h4>
              <p className="text-xs text-outline font-mono uppercase tracking-widest">
                Quantum-Resistant<br />Encryption Active
              </p>
              <div className="mt-8 pt-8 border-t border-outline-variant w-full">
                <span className="font-mono text-[10px] text-primary">UPTIME: 99.9992%</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

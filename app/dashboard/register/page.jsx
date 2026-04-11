"use client";
import { useState } from "react";
import { mockEvents } from "@/data/mockEvents";
import Link from "next/link";
import DashboardSidebar from "@/components/DashboardSidebar";

// Sub-components
const NeonCheckbox = ({ checked, onChange, label, category, spots }) => (
  <label className={`
    relative cursor-none flex items-start gap-4 p-5 border transition-all duration-300
    ${checked ? 'bg-primary/5 border-primary shadow-[inset_0_0_15px_rgba(97,244,216,0.15)]' : 'bg-surface-container border-outline-variant/30 hover:border-primary/50'}
  `}>
    <div className={`mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center border transition-colors ${checked ? 'bg-primary border-primary text-surface' : 'border-outline-variant'}`}>
      {checked && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
    </div>
    <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <span className={`font-headline font-bold text-lg uppercase ${checked ? 'text-white' : 'text-slate-300'}`}>{label}</span>
        <span className="font-mono text-[9px] text-outline border border-outline border-dashed px-1 py-0.5">{category}</span>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div className="h-1 w-full max-w-[100px] bg-surface-container-highest overflow-hidden">
          <div className={`h-full ${spots.filled / spots.total > 0.8 ? 'bg-error' : 'bg-primary'}`} style={{ width: `${(spots.filled / spots.total) * 100}%` }} />
        </div>
        <span className="font-mono text-[9px] text-outline whitespace-nowrap">{spots.filled}/{spots.total} SPOTS</span>
      </div>
    </div>
  </label>
);

export default function DashboardRegisterPage() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleEvent = (slug) => {
    setSelectedEvents(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvents.length === 0) return;
    
    setIsSubmitting(true);
    // Simulate network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/dashboard" className="text-outline hover:text-primary transition-colors flex items-center">
            <span className="material-symbols-outlined text-sm mr-1">arrow_back</span> Return
          </Link>
          <span className="text-outline-variant/30">/</span>
          <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">Node_Registration_Terminal</span>
        </div>
        <h1 className="liquid-chrome font-headline text-5xl font-black uppercase tracking-tighter leading-none">
          EVENT_SIGNUP_PROXY
        </h1>
      </header>

      {success ? (
        <div className="bg-surface-container border border-primary/30 p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(97,244,216,0.4)]">
            <span className="material-symbols-outlined text-surface text-4xl">done_all</span>
          </div>
          <h2 className="font-headline font-black text-3xl text-white uppercase tracking-widest mb-4">
            REGISTRATION_SYNCED
          </h2>
          <p className="text-on-surface-variant font-mono text-sm mb-8">
            Your pilot ID has been successfully assigned to {"{"}{selectedEvents.length}{"}"} operational nodes.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setSuccess(false)} className="border border-outline-variant px-6 py-3 font-mono text-xs uppercase hover:text-white hover:border-white transition-all">
              MODIFY_SELECTION
            </button>
            <Link href="/dashboard/my-events" className="bg-primary px-6 py-3 font-mono text-xs text-on-primary font-bold uppercase shadow-[0_0_20px_rgba(97,244,216,0.2)] hover:bg-white transition-all">
              VIEW_RECORDS
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Section 1 */}
              <div>
                <div className="flex items-center gap-4 mb-6 border-b border-outline-variant/30 pb-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-mono text-[10px] border border-primary/50">01</div>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-widest text-white">Select Operations</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mockEvents.map((e) => (
                    <NeonCheckbox 
                      key={e.slug}
                      label={e.name}
                      category={e.status}
                      spots={e.slots}
                      checked={selectedEvents.includes(e.slug)}
                      onChange={() => toggleEvent(e.slug)}
                    />
                  ))}
                </div>
              </div>

              {/* Form Section 2 */}
              <div className="opacity-50 pointer-events-none">
                <div className="flex items-center gap-4 mb-6 border-b border-outline-variant/30 pb-4">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-outline flex items-center justify-center font-mono text-[10px] border border-outline">02</div>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-widest text-outline">Squad Formulation (Locked)</h3>
                </div>
                <p className="font-mono text-[10px] text-outline mb-4">Squad creation is handled in the dedicated team dashboard.</p>
              </div>

              {/* Submit Line */}
              <div className="pt-8 flex items-center gap-6">
                <button 
                  type="submit" 
                  disabled={selectedEvents.length === 0 || isSubmitting}
                  className="bg-primary text-on-primary px-12 py-5 font-headline font-black uppercase text-lg tracking-[0.2em] hover:bg-white active:scale-95 transition-all shadow-[0_0_20px_rgba(97,244,216,0.2)] disabled:opacity-50 disabled:pointer-events-none flex items-center gap-3"
                >
                  {isSubmitting ? (
                    <><span className="material-symbols-outlined animate-spin text-xl">sync</span> SYNCING...</>
                  ) : (
                    <><span className="material-symbols-outlined text-xl">fingerprint</span> AUTHORIZE</>
                  )}
                </button>
                <div className="flex flex-col font-mono text-[10px]">
                  <span className="text-outline">TOTAL_SELECTED:</span>
                  <span className="text-primary font-bold">{selectedEvents.length} PROTOCOL(S)</span>
                </div>
              </div>

            </form>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest border border-primary/20 p-6 sticky top-8">
              <h4 className="font-headline font-bold uppercase text-primary border-b border-primary/20 pb-2 mb-4 tracking-widest">Clearance Protocol</h4>
              <ul className="space-y-4 font-mono text-xs text-on-surface-variant leading-relaxed mb-8">
                <li className="flex gap-2"><span className="text-primary">&gt;</span> Registering for structural hacks commits your ID.</li>
                <li className="flex gap-2"><span className="text-primary">&gt;</span> Workshop attendance is optional but augments your final squad rating.</li>
                <li className="flex gap-2"><span className="text-secondary">&gt;</span> WARNING: No overlapping slot assignments allowed.</li>
              </ul>
              
              <div className="p-4 border border-dashed border-outline-variant bg-surface mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[9px] uppercase text-outline">NETWORK_PING</span>
                  <span className="font-mono text-[9px] text-green-400">12ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] uppercase text-outline">ENCRYPTION</span>
                  <span className="font-mono text-[9px] text-white">AES-256</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

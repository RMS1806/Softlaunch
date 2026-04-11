import { mockRegistrations } from "@/data/mockRegistrations";
import StatusBadge from "@/components/StatusBadge";
export default function MyEventsPage() {
  return (
    <section>
      <h1 className="mb-8 font-headline text-5xl font-black uppercase tracking-tighter">Operational Log</h1>
      <div className="space-y-3">
        {mockRegistrations.map((r, i) => (
          <div key={r.qr} className="grid grid-cols-12 items-center gap-4 border border-outline-variant/20 bg-surface-container-high/50 p-6">
            <div className="col-span-1 font-mono text-xs text-primary/60">#{String(i + 482).padStart(4, "0")}</div>
            <div className="col-span-5">
              <div className="font-headline text-lg font-bold text-white">{r.event.toUpperCase()}</div>
              <div className="mt-1 font-mono text-[10px] text-on-surface-variant">UUID: {r.qr}</div>
            </div>
            <div className="col-span-3"><StatusBadge status={r.status} /></div>
            <div className="col-span-3 text-right">
              <button className="border border-outline-variant bg-surface-container-highest px-4 py-2 text-[10px] font-bold text-primary">DOWNLOAD QR CODE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

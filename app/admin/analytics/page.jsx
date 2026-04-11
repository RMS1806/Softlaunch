import { mockAdmin } from "@/data/mockAdmin";
export default function AdminAnalytics() {
  return (
    <section>
      <h1 className="mb-6 font-headline text-3xl font-black uppercase tracking-widest">GLOBAL_PULSE</h1>
      <div className="h-64 border border-outline-variant/30 bg-surface-container p-8">
        <div className="mb-4 text-xs text-primary/60">VELOCITY: 42.8 REQ/SEC // LATENCY: 14MS</div>
        <div className="flex h-40 items-end gap-1">{Object.values(mockAdmin.branchDistribution).map((v, i) => <div key={i} className="w-full bg-primary/20" style={{ height: `${v}%` }} />)}</div>
      </div>
    </section>
  );
}

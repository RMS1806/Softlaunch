import { createClient } from "@/lib/supabase/server";

export default async function AdminAnalytics() {
  const supabase = createClient();
  
  // To aggregate by branch we need to fetch all users (since Supabase JS doesn't natively expose group by easily on select without RPC)
  const { data: users } = await supabase.from("users").select("branch");
  
  const branches = ["CSE", "IT", "CCE", "DSE", "OTHER"];
  const counts = { CSE: 0, IT: 0, CCE: 0, DSE: 0, OTHER: 0 };
  
  if (users) {
    users.forEach(u => {
      if (counts[u.branch] !== undefined) {
        counts[u.branch]++;
      } else {
        counts.OTHER++;
      }
    });
  }

  const maxCount = Math.max(...Object.values(counts), 1);
  const distribution = branches.map(b => (counts[b] / maxCount) * 100);

  return (
    <section>
      <h1 className="mb-6 font-headline text-3xl font-black uppercase tracking-widest">GLOBAL_PULSE</h1>
      <div className="h-64 border border-outline-variant/30 bg-surface-container p-8">
        <div className="mb-4 text-xs text-primary/60">BRANCH DISTRIBUTION</div>
        <div className="flex h-40 items-end gap-1">
          {distribution.map((v, i) => (
            <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/60 transition-all relative group" style={{ height: `${v}%` }}>
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {branches[i]}: {counts[branches[i]]}
               </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-3 font-mono text-[9px] text-outline">
          {branches.map(b => <span key={b}>{b}</span>)}
        </div>
      </div>
    </section>
  );
}

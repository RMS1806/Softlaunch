import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = createClient();
  
  // Count total signups (users table)
  const { count: usersCount } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });

  // Count team formations
  const { count: teamsCount } = await supabase
    .from("teams")
    .select("*", { count: "exact", head: true });

  // Let's also grab CSE branch count to calculate load
  const { count: cseCount } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true })
    .eq("branch", "CSE");

  const branchLoad = usersCount ? Math.round((cseCount / usersCount) * 100) : 0;

  return (
    <section>
      <h1 className="mb-8 font-headline text-5xl font-black uppercase tracking-widest text-teal-300">SECTOR COMMAND</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="border border-teal-300/20 bg-surface-container-high p-6 group hover:border-teal-300/50 transition-all">
          <p className="text-xs uppercase tracking-widest text-primary/60">TOTAL_SIGNUPS</p>
          <p className="mt-6 font-headline text-5xl font-black text-white group-hover:text-primary transition-colors">{usersCount || 0}</p>
        </div>
        <div className="border border-teal-300/20 bg-surface-container-high p-6 group hover:border-teal-300/50 transition-all">
          <p className="text-xs uppercase tracking-widest text-primary/60">TEAM_FORMATIONS</p>
          <p className="mt-6 font-headline text-5xl font-black text-white group-hover:text-primary transition-colors">{teamsCount || 0}</p>
        </div>
        <div className="border border-teal-300/20 bg-surface-container-high p-6 group hover:border-teal-300/50 transition-all">
          <p className="text-xs uppercase tracking-widest text-primary/60">CSE_BRANCH_LOAD</p>
          <p className="mt-6 font-headline text-5xl font-black text-white group-hover:text-primary transition-colors">{branchLoad}%</p>
        </div>
      </div>
    </section>
  );
}

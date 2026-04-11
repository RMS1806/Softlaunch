import { mockAdmin } from "@/data/mockAdmin";

export default function AdminPage() {
  return (
    <section>
      <h1 className="mb-8 font-headline text-5xl font-black uppercase tracking-widest text-teal-300">SECTOR COMMAND</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="border border-teal-300/20 bg-surface-container-high p-6">
          <p className="text-xs uppercase tracking-widest text-primary/60">TOTAL_SIGNUPS</p>
          <p className="mt-6 font-headline text-5xl font-black">{mockAdmin.totalSignups}</p>
        </div>
        <div className="border border-teal-300/20 bg-surface-container-high p-6">
          <p className="text-xs uppercase tracking-widest text-primary/60">TEAM_FORMATIONS</p>
          <p className="mt-6 font-headline text-5xl font-black">{mockAdmin.teamFormations}</p>
        </div>
        <div className="border border-teal-300/20 bg-surface-container-high p-6">
          <p className="text-xs uppercase tracking-widest text-primary/60">BRANCH_LOAD</p>
          <p className="mt-6 font-headline text-5xl font-black">72%</p>
        </div>
      </div>
    </section>
  );
}

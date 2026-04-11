"use client";
import { useState } from "react";
import { mockTeam } from "@/data/mockTeam";
import TeamMemberSlot from "@/components/TeamMemberSlot";

export default function TeamPage() {
  const [code, setCode] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <section>
      <h1 className="mb-8 font-headline text-6xl font-black uppercase tracking-tighter">Team_Protocol</h1>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-5">
        {mockTeam.members.map((m, i) => <TeamMemberSlot key={i} member={m} />)}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border-l-4 border-secondary bg-surface-container-high p-8">
          <h3 className="mb-4 font-headline text-xl font-black uppercase">Join_via_Code</h3>
          <input value={code} onChange={(e)=>setCode(e.target.value)} className="w-full border-b-2 border-outline-variant bg-surface-container-lowest p-3" placeholder="X-7742-ALPHA-9" />
          <button onClick={()=>setOk(code.length>=6)} className="mt-4 w-full bg-secondary py-3 font-bold text-surface">Synchronize</button>
        </div>
        <div className="border-l-4 border-primary bg-surface-container-high p-8">
          <h3 className="mb-4 font-headline text-xl font-black uppercase">Deploy_Squad</h3>
          <input className="w-full border-b-2 border-outline-variant bg-surface-container-lowest p-3" placeholder="OMEGA_STRAT" />
          <button className="mt-4 w-full border-2 border-primary py-3 font-bold text-primary">Initialize_Core</button>
        </div>
      </div>
      {ok && <p className="mt-3 text-teal-300">Team joined!</p>}
    </section>
  );
}

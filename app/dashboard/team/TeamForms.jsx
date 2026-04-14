"use client";

import { useState } from "react";
import { createTeamAction, joinTeamAction } from "@/app/actions";

export default function TeamForms() {
  const [joinError, setJoinError] = useState("");
  const [createError, setCreateError] = useState("");
  const [createdCode, setCreatedCode] = useState(null);

  const handleJoin = async (formData) => {
    setJoinError("");
    const res = await joinTeamAction(formData);
    if (res?.error) setJoinError(res.error);
  };

  const handleCreate = async (formData) => {
    setCreateError("");
    const res = await createTeamAction(formData);
    if (res?.error) {
      setCreateError(res.error);
    } else if (res?.success) {
      setCreatedCode(res.code);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 mt-8">
      <div className="border-l-4 border-secondary bg-surface-container-high p-8">
        <h3 className="mb-4 font-headline text-xl font-black uppercase">Join_via_Code</h3>
        <form action={handleJoin}>
          <input name="inviteCode" required className="w-full border-b-2 border-outline-variant bg-surface-container-lowest p-3 text-white focus:outline-none focus:border-secondary" placeholder="X-7742-ALPHA-9" />
          {joinError && <p className="mt-2 font-mono text-[10px] text-error">⚠ {joinError}</p>}
          <button type="submit" className="mt-4 w-full bg-secondary hover:bg-secondary/80 py-3 font-bold text-surface transition-all">Synchronize</button>
        </form>
      </div>

      <div className="border-l-4 border-primary bg-surface-container-high p-8">
        <h3 className="mb-4 font-headline text-xl font-black uppercase">Deploy_Squad</h3>
        <form action={handleCreate}>
          <input name="squadName" required minLength={3} className="w-full border-b-2 border-outline-variant bg-surface-container-lowest p-3 text-white focus:outline-none focus:border-primary" placeholder="OMEGA_STRAT" />
          {createError && <p className="mt-2 font-mono text-[10px] text-error">⚠ {createError}</p>}
          <button type="submit" className="mt-4 w-full border-2 border-primary py-3 font-bold text-primary hover:bg-primary/10 transition-colors">Initialize_Core</button>
        </form>
        
        {createdCode && (
          <div className="mt-6 p-4 border border-dashed border-primary bg-primary/5">
            <p className="font-mono text-[10px] text-primary uppercase mb-1">Squad_Invite_Code_Generated:</p>
            <h4 className="font-headline font-black text-2xl text-white tracking-widest">{createdCode}</h4>
            <p className="font-mono text-[9px] text-on-surface-variant uppercase mt-2">Share this code with your members to synchronize.</p>
          </div>
        )}
      </div>
    </div>
  );
}

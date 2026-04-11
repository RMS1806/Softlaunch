"use client";
import { useState } from "react";
export default function SubmitPage() {
  const [done, setDone] = useState(false);
  return (
    <section>
      <h1 className="mb-4 font-headline text-6xl font-black leading-none tracking-tighter">PROJECT <span className="text-primary italic">DEPLOYMENT</span></h1>
      <p className="mb-8 max-w-xl text-on-surface-variant">Upload your core protocol artifacts. High-stakes validation is active.</p>
      <form onSubmit={(e)=>{e.preventDefault();setDone(true);}} className="space-y-4 border border-primary/20 bg-surface-container-low p-8">
        <input required className="w-full border-b-2 border-outline-variant bg-surface-container-highest p-3" placeholder="ENTER_ID"/>
        <input required className="w-full border-b-2 border-outline-variant bg-surface-container-highest p-3" placeholder="HTTPS://GITHUB.COM/..."/>
        <textarea required className="w-full border-b-2 border-outline-variant bg-surface-container-highest p-3" rows={4} placeholder="DESCRIBE_THE_MISSION_OBJECTIVES..."/>
        <button className="bg-primary px-10 py-4 font-headline text-lg font-black tracking-widest text-on-primary">EXECUTE_UPLOAD</button>
      </form>
      {done && <div className="mt-4 border border-teal-300 p-3 text-teal-200">Submission received</div>}
    </section>
  );
}

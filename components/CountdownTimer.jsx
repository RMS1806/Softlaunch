"use client";
import { useCountdown } from "@/hooks/useCountdown";

export default function CountdownTimer() {
  const t = useCountdown("2026-04-16T10:00:00+05:30");
  return (
    <div className="flex gap-4 font-bold">
      {["days", "hours", "minutes", "seconds"].map((k) => (
        <div key={k} className="w-20 border-y border-[#43465f] bg-black p-3 text-center">
          <div className="text-3xl">{String(t[k]).padStart(2, "0")}</div>
          <div className="text-[10px] uppercase text-slate-400">{k}</div>
        </div>
      ))}
    </div>
  );
}

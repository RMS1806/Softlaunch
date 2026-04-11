"use client";
import { useCountdown } from "@/hooks/useCountdown";

export default function CountdownDash() {
  const t = useCountdown("2026-04-26T10:00:00+05:30");

  const units = [
    { label: "DAYS",  value: t.days    },
    { label: "HOURS", value: t.hours   },
    { label: "MINS",  value: t.minutes },
    { label: "SECS",  value: t.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6 items-end">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-surface border border-outline-variant/30 px-4 py-3 min-w-[4rem] text-center">
            <span className="font-mono text-4xl md:text-5xl font-black text-white">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="font-mono text-[10px] text-primary mt-2 tracking-widest">{label}</span>
          {i < units.length - 1 && (
            <span className="absolute opacity-0">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

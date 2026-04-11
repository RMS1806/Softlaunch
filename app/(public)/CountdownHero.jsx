"use client";
import { useCountdown } from "@/hooks/useCountdown";

function Flap({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mechanical-flap bg-surface-container-lowest border-y border-outline-variant p-4 w-20 md:w-32">
        <span className="font-headline text-4xl md:text-6xl font-black text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-mono text-[10px] text-on-surface-variant mt-2">{label}</span>
    </div>
  );
}

export default function CountdownHero() {
  const t = useCountdown("2026-04-26T10:00:00+05:30");

  return (
    <div className="flex gap-4 justify-center items-center mb-16">
      <Flap value={t.days}    label="DAYS"  />
      <span className="text-primary text-4xl">:</span>
      <Flap value={t.hours}   label="HOURS" />
      <span className="text-primary text-4xl">:</span>
      <Flap value={t.minutes} label="MINS"  />
    </div>
  );
}

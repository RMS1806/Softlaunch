"use client";
import { usePathname } from "next/navigation";

export default function TransitionWrapper({ children }) {
  const key = usePathname();
  return <div key={key} className="animate-in fade-in duration-300">{children}</div>;
}

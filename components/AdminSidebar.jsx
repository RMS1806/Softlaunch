"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/admin", "Dashboard"], ["/admin/registrations", "Registrations"], ["/admin/teams", "Teams"],
  ["/admin/problems", "Problem Statements"], ["/admin/config", "Event Config"], ["/admin/analytics", "Analytics"], ["/admin/announcements", "Announcements"],
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return <aside className="w-64 border-r border-teal-300/10 bg-black p-4 pt-20">{links.map(([h, l]) => <Link key={h} href={h} className={`block p-3 ${pathname === h ? "text-teal-300 bg-teal-500/20" : "text-slate-400"}`}>{l}</Link>)}</aside>;
}

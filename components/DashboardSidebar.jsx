"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/dashboard",           icon: "dashboard",       label: "OVERVIEW"    },
  { href: "/dashboard/register",  icon: "event_available", label: "EVENT_SIGNUP"},
  { href: "/dashboard/my-events", icon: "list_alt",        label: "MY_RECORDS"  },
  { href: "/dashboard/team",      icon: "group",           label: "SQUAD"       },
  { href: "/dashboard/submit",    icon: "upload_file",     label: "PAYLOAD"     },
  { href: "/dashboard/profile",   icon: "person",          label: "PROFILE"     },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-surface-container-lowest border-b border-primary/10 sticky top-0 z-40 w-full">
        <div className="flex items-center gap-2">
          <p className="font-headline font-black text-lg text-primary tracking-tighter">FINOVA 2.0</p>
          <span className="font-mono text-[8px] text-on-surface-variant uppercase border border-outline-variant/30 px-1 py-0.5">MISSION_CONTROL</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Black Overlay for Mobile Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface-container-lowest border-r border-primary/10 flex flex-col h-screen overflow-y-auto transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky md:top-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Branding (Desktop) */}
        <div className="hidden md:block px-6 py-8 border-b border-outline-variant/20">
          <p className="font-headline font-black text-lg text-primary tracking-tighter">FINOVA 2.0</p>
          <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-1">MISSION_CONTROL</p>
        </div>

        {/* Operator Info */}
        <div className="px-6 py-6 border-b border-outline-variant/20 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
          <div>
            <p className="font-mono text-xs text-secondary font-bold">OPERATOR_01</p>
            <p className="font-mono text-[10px] text-on-surface-variant">SECTOR_7G</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {links.map(({ href, icon, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all ${
                  active
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-white border-l-4 border-transparent"
                }`}
              >
                <span className="material-symbols-outlined text-lg">{icon}</span>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="px-4 py-6 border-t border-outline-variant/20 space-y-2">
          <button className="w-full py-3 bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] tracking-widest hover:bg-primary/20 transition-all">
            DEPLOY_LIQUIDITY
          </button>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.cookie = "isLoggedIn=; path=/; max-age=0";
              localStorage.removeItem("isLoggedIn");
              window.location.href = "/login";
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-error font-mono text-[10px] uppercase transition-colors"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            TERMINATE_SESSION
          </button>
        </div>
      </aside>
    </>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",         label: "COMMAND"  },
  { href: "/about",    label: "VAULT"    },
  { href: "/events",   label: "TACTICAL" },
  { href: "/login",    label: "LOGIN" },
  { href: "/faq",      label: "LOGS"     },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-[#61f4d8]/20 shadow-[0_0_20px_rgba(97,244,216,0.1)] flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-[#61f4d8] drop-shadow-[0_0_8px_rgba(97,244,216,0.5)] font-headline"
        >
          FINOVA 2.0
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-headline uppercase tracking-widest text-sm font-bold transition-colors duration-300 ${
                  active
                    ? "text-[#61f4d8] border-b-2 border-[#61f4d8] pb-1"
                    : "text-slate-400 hover:text-[#61f4d8]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/register"
          className="hidden md:inline-block bg-[#61f4d8]/10 border border-[#61f4d8] px-6 py-2 font-headline uppercase tracking-widest text-sm font-bold text-[#61f4d8] hover:bg-[#61f4d8]/20 hover:shadow-[0_0_15px_rgba(97,244,216,0.3)] transition-all active:scale-95"
        >
          INITIALIZE
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-[#61f4d8] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Drawer (Solid Opaque, no CRT overlays for readability) */}
      <div 
        className={`fixed inset-0 z-40 bg-[#080c22] transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24 px-6 pb-6 border-l border-[#61f4d8]/20`}
      >
        <div className="flex flex-col gap-6 items-start flex-grow">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-headline uppercase tracking-widest text-3xl font-black transition-colors ${
                  active ? "text-[#61f4d8]" : "text-white hover:text-[#61f4d8]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        
        <Link
          href="/register"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full text-center bg-[#61f4d8]/10 border border-[#61f4d8] px-6 py-4 font-headline uppercase tracking-widest text-lg font-bold text-[#61f4d8] active:bg-[#61f4d8]/30 transition-all mt-auto"
        >
          INITIALIZE
        </Link>
      </div>
    </>
  );
}

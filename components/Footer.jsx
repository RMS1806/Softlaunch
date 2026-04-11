import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full py-12 border-t border-[#61f4d8]/30 bg-black bg-[linear-gradient(to_right,#1e2343_1px,transparent_1px),linear-gradient(to_bottom,#1e2343_1px,transparent_1px)] bg-[size:40px_40px] flex flex-col items-center gap-6 overflow-hidden">
      <div className="z-10 flex gap-8">
        <Link
          href="/about"
          className="font-mono text-[10px] tracking-[0.2em] text-slate-600 hover:text-[#45fec9] hover:drop-shadow-[0_0_5px_#45fec9] hover:tracking-[0.3em] transition-all duration-500 uppercase"
        >
          PROTOCOL
        </Link>
        <Link
          href="/events"
          className="font-mono text-[10px] tracking-[0.2em] text-slate-600 hover:text-[#45fec9] hover:drop-shadow-[0_0_5px_#45fec9] hover:tracking-[0.3em] transition-all duration-500 uppercase"
        >
          RECORDS
        </Link>
        <Link
          href="/faq"
          className="font-mono text-[10px] tracking-[0.2em] text-slate-600 hover:text-[#45fec9] hover:drop-shadow-[0_0_5px_#45fec9] hover:tracking-[0.3em] transition-all duration-500 uppercase"
        >
          SECURITY_CORE
        </Link>
        <a
          href="mailto:finova@learner.manipal.edu"
          className="font-mono text-[10px] tracking-[0.2em] text-slate-600 hover:text-[#45fec9] hover:drop-shadow-[0_0_5px_#45fec9] hover:tracking-[0.3em] transition-all duration-500 uppercase"
        >
          UPTIME
        </a>
      </div>
      <p className="z-10 font-mono text-[10px] tracking-[0.2em] text-[#61f4d8]">
        © 2124 FINOVA_SYSTEMS_GLOBAL // ENCRYPTED_CONNECTION
      </p>
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#61f4d8] to-transparent opacity-30" />
    </footer>
  );
}

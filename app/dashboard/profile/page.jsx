import { mockUser } from "@/data/mockUser";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <section>
      <h1 className="mb-8 font-headline text-5xl font-black uppercase tracking-tight">Commander Profile</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="border border-outline-variant/20 bg-surface-container-highest/40 p-8 md:col-span-4">
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuABaGDQirCY4mP76gLRqf76eNVPFV2uj5aMe0c4z5wm_MBG75lnaL2hhoM5G6Mb9noGUSNDDR6N1BamTA-ERnnNC0d2XeDJ1SaL0fXfngweDKAv-5deetQIBZ9QpVy1n6mrCGhO-X4TslIEPbMqEdneXLlXYnE6q8RuMveO8YJ7185brzDcTLP3YJ4GZVTXhWJdnSFmJRBB0OsEcd97siAPMPG7VWxChRNOwA6o_XQ-dXOgJshIbzXF9BQH-rSyOJKme4BVsg74CHBx" alt="profile" width={500} height={700} className="h-72 w-full object-cover grayscale" />
          <p className="mt-4 text-center font-headline text-xl font-bold">COMMANDER_REED</p>
        </div>
        <div className="border border-outline-variant/10 bg-surface-container-low/60 p-10 md:col-span-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input className="border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg" value={mockUser.name} readOnly />
            <input className="border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg" value="+1 (555) 012-9988" readOnly />
            <input className="border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg" value={mockUser.branch} readOnly />
            <input className="border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg" value={String(mockUser.year)} readOnly />
          </div>
          <button className="mt-10 bg-primary px-10 py-4 font-headline font-black tracking-[0.2em] text-on-primary-container">UPDATE_CREDENTIALS</button>
        </div>
      </div>
    </section>
  );
}

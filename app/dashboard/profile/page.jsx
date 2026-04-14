import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch from public.users table
  const { data: profile } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) {
    return <div className="p-8 text-error">Profile data not found. Contact administrator.</div>;
  }

  return (
    <section>
      <h1 className="mb-8 font-headline text-5xl font-black uppercase tracking-tight">Commander Profile</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="border border-outline-variant/20 bg-surface-container-highest/40 p-8 md:col-span-4">
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuABaGDQirCY4mP76gLRqf76eNVPFV2uj5aMe0c4z5wm_MBG75lnaL2hhoM5G6Mb9noGUSNDDR6N1BamTA-ERnnNC0d2XeDJ1SaL0fXfngweDKAv-5deetQIBZ9QpVy1n6mrCGhO-X4TslIEPbMqEdneXLlXYnE6q8RuMveO8YJ7185brzDcTLP3YJ4GZVTXhWJdnSFmJRBB0OsEcd97siAPMPG7VWxChRNOwA6o_XQ-dXOgJshIbzXF9BQH-rSyOJKme4BVsg74CHBx" alt="profile" width={500} height={700} className="h-72 w-full object-cover grayscale" />
          <p className="mt-4 text-center font-headline text-xl font-bold uppercase">{profile.name}</p>
        </div>
        <div className="border border-outline-variant/10 bg-surface-container-low/60 p-10 md:col-span-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-[10px] uppercase text-primary tracking-widest font-mono mb-1 block">Full Name</label>
              <input className="w-full border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg text-white outline-none focus:border-primary transition-colors" defaultValue={profile.name} readOnly />
            </div>
            <div>
              <label className="text-[10px] uppercase text-primary tracking-widest font-mono mb-1 block">Communications Link</label>
              <input className="w-full border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg text-white outline-none focus:border-primary transition-colors" defaultValue={profile.phone || "No Comms Setup"} readOnly />
            </div>
            <div>
              <label className="text-[10px] uppercase text-primary tracking-widest font-mono mb-1 block">Sector / Branch</label>
              <input className="w-full border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg text-white outline-none focus:border-primary transition-colors" defaultValue={profile.branch} readOnly />
            </div>
            <div>
              <label className="text-[10px] uppercase text-primary tracking-widest font-mono mb-1 block">Pilot Year</label>
              <input className="w-full border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg text-white outline-none focus:border-primary transition-colors" defaultValue={String(profile.year)} readOnly />
            </div>
            <div>
              <label className="text-[10px] uppercase text-primary tracking-widest font-mono mb-1 block">Roll ID</label>
              <input className="w-full border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg text-white outline-none focus:border-primary transition-colors" defaultValue={profile.roll_number} readOnly />
            </div>
            <div>
              <label className="text-[10px] uppercase text-primary tracking-widest font-mono mb-1 block">Reg Date</label>
              <input className="w-full border-b-2 border-outline-variant/30 bg-transparent py-2 text-lg text-white outline-none focus:border-primary transition-colors" defaultValue={new Date(profile.created_at).toLocaleDateString()} readOnly />
            </div>
          </div>
          <button className="mt-10 bg-primary px-10 py-4 font-headline font-black tracking-[0.2em] text-on-primary-container hover:shadow-[0_0_20px_rgba(97,244,216,0.3)] transition-all">UPDATE_CREDENTIALS</button>
        </div>
      </div>
    </section>
  );
}

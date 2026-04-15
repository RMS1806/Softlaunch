import { createClient } from "@/lib/supabase/server";
import TeamMemberSlot from "@/components/TeamMemberSlot";
import TeamForms from "./TeamForms";
import { cookies } from "next/headers";

export const metadata = { title: "FINOVA 2.0 | TEAM_PROTOCOL" };

export default async function TeamPage() {
  const supabase = createClient();

  // Get user from session cookie
  const cookieStore = cookies();
  const sessionEmail = cookieStore.get("session_email")?.value;

  let user = null;
  if (sessionEmail) {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", sessionEmail)
      .single();
    user = data;
  }

  let teamMembers = [];
  let userTeamId = null;
  let inviteCode = null;

  if (user) {
    const { data: userMember } = await supabase
      .from("team_members")
      .select("team_id")
      .eq("user_id", user.id)
      .single();

    if (userMember?.team_id) {
      userTeamId = userMember.team_id;
      
      const { data: teamData } = await supabase
        .from("teams")
        .select("invite_code")
        .eq("id", userTeamId)
        .single();
      
      if (teamData) inviteCode = teamData.invite_code;

      const { data: members } = await supabase
        .from("team_members")
        .select(`
          role,
          users (
            id,
            name,
            year
          )
        `)
        .eq("team_id", userTeamId);

      if (members) {
        teamMembers = members.map(m => ({
          name: m.users.name,
          role: m.role,
          year: m.users.year,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEcKWwyuv40UVxUYeTrniDm15pBOrjIQc1EQYZPaSwH5m0GgvQI_SchKQMY22C2Ke4hoAxiKgzM7uYoyo-XhCdEzChtzFN4OK0v5UO-jwpIdCFlc-XZrD2NqPxbPk7HnmCl1g3ID5nosNV1IQiP3L8YQsWH0PLE0zosjlVm0PVgkAasTQHNjcdvGfw1M0mp7D1CFZQJmJ2xrlGLY6ItHUxm9dO_GQKt2EA2zqzthoUjbAKS4e24qKB5TmpYlVvhAJJzpb2sIw-rVgS"
        }));
      }
    }
  }

  return (
    <section>
      <div className="flex justify-between items-end mb-8">
        <h1 className="font-headline text-6xl font-black uppercase tracking-tighter">Team_Protocol</h1>
        {inviteCode && (
          <div className="text-right border-r-2 border-primary pr-4">
            <p className="font-mono text-[9px] text-primary uppercase">Active Invite Code</p>
            <p className="font-headline text-2xl font-black">{inviteCode}</p>
          </div>
        )}
      </div>

      {teamMembers.length > 0 ? (
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {teamMembers.map((m, i) => <TeamMemberSlot key={i} member={m} />)}
          {Array.from({ length: Math.max(0, 5 - teamMembers.length) }).map((_, i) => (
             <div key={`empty-${i}`} className="flex flex-col items-center justify-center border border-dashed border-outline-variant/30 bg-surface-container-low/50 p-6 min-h-[200px]">
               <span className="material-symbols-outlined text-outline-variant/50 text-4xl mb-2">person_add</span>
               <span className="font-mono text-[10px] text-outline-variant/50 uppercase tracking-widest">Awaiting Sync</span>
             </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-primary/30 bg-primary/5 p-12 text-center">
          <p className="font-mono text-primary uppercase tracking-widest text-sm mb-2">NO SQUAD DETECTED</p>
          <p className="font-body text-outline-variant text-lg">You must form or join a squad to participate in the hackathon.</p>
        </div>
      )}

      {!userTeamId && <TeamForms />}

    </section>
  );
}

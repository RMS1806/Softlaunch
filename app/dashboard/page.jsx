import Link from "next/link";
import CountdownDash from "./CountdownDash";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "FINOVA 2.0 | MISSION_CONTROL" };

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // 1. Fetch announcements
  const { data: announcements } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  // 2. Fetch user's team members
  let teamMembers = [];
  let userTeamId = null;

  // Find their team_id 
  if (user) {
    const { data: userMember } = await supabase
      .from("team_members")
      .select("team_id")
      .eq("user_id", user.id)
      .single();

    if (userMember?.team_id) {
      userTeamId = userMember.team_id;
      // Get all users in that team
      const { data: members } = await supabase
        .from("team_members")
        .select(`
          role,
          users (
            id,
            name
          )
        `)
        .eq("team_id", userMember.team_id);
      
      if (members) {
        teamMembers = members.map(m => ({
          name: m.users.name,
          role: m.role,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEcKWwyuv40UVxUYeTrniDm15pBOrjIQc1EQYZPaSwH5m0GgvQI_SchKQMY22C2Ke4hoAxiKgzM7uYoyo-XhCdEzChtzFN4OK0v5UO-jwpIdCFlc-XZrD2NqPxbPk7HnmCl1g3ID5nosNV1IQiP3L8YQsWH0PLE0zosjlVm0PVgkAasTQHNjcdvGfw1M0mp7D1CFZQJmJ2xrlGLY6ItHUxm9dO_GQKt2EA2zqzthoUjbAKS4e24qKB5TmpYlVvhAJJzpb2sIw-rVgS" // Reusing placeholder aesthetic profile
        }));
      }
    }
  }

  // 3. Fetch performance metrics (fallback to empty array)
  let metrics = [];
  if (user) {
    const { data: fetchedMetrics } = await supabase
      .from("performance_metrics")
      .select("day_of_week, activity_level")
      .eq("user_id", user.id);
    
    if (fetchedMetrics && fetchedMetrics.length > 0) {
      metrics = fetchedMetrics;
    }
  }

  // The 7 days order
  const orderedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Create an array mapping activity_levels. 0 if no record found.
  const bars = orderedDays.map(day => {
    const record = metrics.find(m => m.day_of_week === day);
    return record ? record.activity_level : 0;
  });

  return (
    <div className="space-y-6">
      {/* ── Page Header ──────────────────────────────── */}
      <header className="mb-8">
        <h1 className="liquid-chrome font-headline text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
          MISSION_CONTROL
        </h1>
        <div className="flex items-center gap-3 mt-3">
          <div className="w-2 h-2 bg-primary animate-pulse" />
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
            Node_Status: OPERATIONAL // Hackathon_Mode // Uptime: 99.99% // USER: {user?.id.split('-')[0]}
          </p>
        </div>
      </header>

      {/* ── Main Bento Grid ──────────────────────────── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">

        {/* Countdown (8 cols) */}
        <div className="relative overflow-hidden border border-outline-variant/30 bg-surface-container-lowest p-8 md:col-span-8">
          <div className="absolute top-2 right-2 font-mono text-[10px] text-primary/40">SUBMISSION_TIMER</div>
          <h2 className="mb-6 text-sm uppercase tracking-widest text-on-surface-variant font-mono">
            Submission Countdown
          </h2>
          <CountdownDash />
          <Link
            href="/dashboard/submit"
            className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-3 font-headline font-bold text-on-primary-container uppercase tracking-widest hover:shadow-[0_0_20px_rgba(97,244,216,0.4)] transition-all"
          >
            <span className="material-symbols-outlined">upload_file</span>
            UPLOAD_PAYLOAD
          </Link>
          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40" />
        </div>

        {/* Announcements (4 cols) */}
        <div className="border border-primary/10 bg-surface-container-low/40 p-6 md:col-span-4 overflow-y-auto max-h-[300px]">
          <h2 className="mb-4 text-sm uppercase tracking-widest text-secondary font-mono sticky top-0 bg-surface-container-low/90 backdrop-blur-sm z-10 pb-2">
            Live Announcements
          </h2>
          <div className="space-y-3">
            {announcements && announcements.length > 0 ? announcements.map((a, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-outline-variant/10">
                <span className="font-mono text-[9px] text-primary bg-primary/10 px-1 py-[1px] shrink-0">{a.tag}</span>
                <p className="text-sm text-on-surface-variant">{a.text}</p>
              </div>
            )) : (
               <div className="text-xs text-on-surface-variant font-mono p-4 text-center border border-dashed border-outline-variant/20">NO COMMUNIQUES INTERCEPTED</div>
            )}
          </div>
        </div>

        {/* Team (6 cols) */}
        <div className="border border-outline-variant/20 bg-surface-container-low p-8 md:col-span-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm uppercase tracking-widest text-on-surface-variant font-mono">My Team</h3>
            <span className="font-mono text-[10px] text-primary">{teamMembers.length} MEMBERS</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {teamMembers.map((m) => (
              <div key={m.name} className="flex items-center gap-3 border border-outline-variant/20 bg-surface-container p-3 hover:border-primary/30 transition-all group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.img} alt={m.name} className="h-12 w-12 object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-on-surface-variant group-hover:text-white transition-colors">{m.name}</span>
                  <span className="font-mono text-[9px] text-primary uppercase">{m.role}</span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center border border-dashed border-outline-variant/40 bg-surface-container-low p-3 text-slate-500 font-mono text-xs hover:border-primary/50 transition-all">
              <Link href="/dashboard/team" className="hover:text-primary transition-colors flex items-center justify-center w-full h-full">CONFIGURE SQUAD →</Link>
            </div>
          </div>
        </div>

        {/* Performance Chart (6 cols) */}
        <div className="border border-outline-variant/20 bg-surface-container-low p-8 md:col-span-6">
          <h3 className="mb-6 text-sm uppercase tracking-widest text-on-surface-variant font-mono">Performance_Flux</h3>
          <div className="flex h-40 items-end gap-1">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 hover:bg-primary/60 transition-all relative group"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 font-mono text-[9px] text-outline">
            {orderedDays.map(day => <span key={day}>{day}</span>)}
          </div>
        </div>

        {/* Quick Actions Row */}
        <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: "/dashboard/team",       icon: "group_add",       label: "FORM_SQUAD",    color: "secondary" },
            { href: "/dashboard/submit",     icon: "upload",          label: "SUBMIT_WORK",   color: "primary" },
            { href: "/dashboard/profile",    icon: "manage_accounts", label: "EDIT_PROFILE",  color: "secondary" },
          ].map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`flex flex-col items-center gap-3 p-6 bg-surface-container border border-outline-variant/20 hover:border-${action.color}/40 hover:bg-surface-container-high transition-all group`}
            >
              <span className={`material-symbols-outlined text-3xl text-${action.color} group-hover:scale-110 transition-transform`}>
                {action.icon}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

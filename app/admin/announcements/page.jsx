import { createClient } from "@/lib/supabase/server";
import { PublishForm, DeleteButton } from "./AnnouncementForm";

export const metadata = { title: "FINOVA 2.0 | ADMIN_ANNOUNCEMENTS" };

export default async function AdminAnnouncements() {
  const supabase = createClient();

  const { data: announcements } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section>
      <h1 className="mb-2 font-headline text-3xl font-black uppercase tracking-widest">Announcements</h1>
      <p className="mb-8 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
        Broadcast messages to all operators via the dashboard feed
      </p>

      {/* Publish Form */}
      <PublishForm />

      {/* Existing Announcements */}
      <div className="mt-10">
        <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-secondary">
          Active Broadcasts ({announcements?.length || 0})
        </h2>

        {announcements && announcements.length > 0 ? (
          <div className="space-y-2">
            {announcements.map((a) => (
              <div key={a.id} className="flex items-center justify-between border border-outline-variant/20 bg-surface-container p-4 group hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[9px] text-primary bg-primary/10 px-2 py-1 shrink-0 uppercase tracking-widest">
                    {a.tag}
                  </span>
                  <div>
                    <p className="text-sm text-on-surface-variant">{a.text}</p>
                    <p className="font-mono text-[9px] text-outline mt-1">
                      {new Date(a.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
                <DeleteButton id={a.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-outline-variant/30 p-8 text-center">
            <p className="font-mono text-on-surface-variant text-sm">NO ACTIVE BROADCASTS</p>
            <p className="font-mono text-[10px] text-outline mt-1">Use the form above to publish your first announcement</p>
          </div>
        )}
      </div>
    </section>
  );
}

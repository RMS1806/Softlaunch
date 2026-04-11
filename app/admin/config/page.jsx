export default function AdminConfig() {
  return (
    <section>
      <h1 className="mb-6 font-headline text-3xl font-black uppercase tracking-widest">TACTICAL CONFIG</h1>
      <div className="space-y-4 border border-outline-variant/30 bg-surface-container p-6">
        <label className="flex items-center justify-between"><span>HACKATHON_GATE</span><input type="checkbox" defaultChecked /></label>
        <label className="flex items-center justify-between"><span>WORKSHOP_STREAM</span><input type="checkbox" defaultChecked /></label>
        <label className="flex items-center justify-between"><span>SPEAKER_PORTAL</span><input type="checkbox" /></label>
      </div>
    </section>
  );
}

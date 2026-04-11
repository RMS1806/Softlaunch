export default function AdminRegistrations() {
  return (
    <section>
      <h1 className="mb-6 font-headline text-3xl font-black uppercase tracking-widest">REGISTRATION DATASTREAM</h1>
      <div className="overflow-x-auto border border-outline-variant/30 bg-surface-container">
        <table className="w-full">
          <thead className="bg-surface-container-highest/50 text-left text-[10px] uppercase tracking-widest text-primary/60">
            <tr><th className="px-6 py-4">UID</th><th className="px-6 py-4">PARTICIPANT_NAME</th><th className="px-6 py-4">BRANCH</th><th className="px-6 py-4">STATUS</th></tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10 font-mono text-xs">
            <tr><td className="px-6 py-4">#00421</td><td className="px-6 py-4">Kaelen Vance</td><td className="px-6 py-4">CSE_AI</td><td className="px-6 py-4 text-secondary">VERIFIED</td></tr>
            <tr><td className="px-6 py-4">#00420</td><td className="px-6 py-4">Elena Rossi</td><td className="px-6 py-4">EEE_EMB</td><td className="px-6 py-4 text-primary-container">PENDING</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

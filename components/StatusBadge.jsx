export default function StatusBadge({ status }) {
  const tone = status === "Confirmed" ? "text-teal-300 border-teal-400/50" : "text-slate-300 border-slate-500/50";
  return <span className={`px-2 py-1 text-xs border ${tone}`}>{status}</span>;
}

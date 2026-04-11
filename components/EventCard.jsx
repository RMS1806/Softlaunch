import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <Link href={`/events/${event.slug}`} className="block border border-[#43465f] bg-[#131832] p-6 hover:border-[#61f4d8]">
      <h3 className="text-xl font-bold">{event.name}</h3>
      <p className="mt-2 text-slate-300">{event.description}</p>
    </Link>
  );
}

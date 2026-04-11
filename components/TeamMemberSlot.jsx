export default function TeamMemberSlot({ member }) {
  return (
    <div className="border border-[#43465f] bg-[#131832] p-4 text-center">
      {member?.filled ? <p>{member.name}</p> : <p className="text-slate-500">Awaiting Pilot...</p>}
    </div>
  );
}

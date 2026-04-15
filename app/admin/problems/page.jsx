import { createClient } from "@/lib/supabase/server";
import ProblemForm from "./ProblemForm";

export const metadata = { title: "FINOVA 2.0 | PROBLEM_STATEMENTS" };

export default async function AdminProblemsPage() {
  const supabase = createClient();

  const { data: problems } = await supabase
    .from("problem_statements")
    .select("*")
    .order("created_at", { ascending: false });

  const difficultyColor = {
    EASY: "text-green-400 bg-green-400/10 border-green-400/30",
    MEDIUM: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    HARD: "text-red-400 bg-red-400/10 border-red-400/30",
  };

  return (
    <section>
      <h1 className="mb-8 font-headline text-3xl font-black uppercase tracking-widest text-teal-300">
        PROBLEM_STATEMENTS
      </h1>

      {/* Add Problem Statement Form */}
      <ProblemForm />

      {/* Problem Statements Table */}
      <div className="mt-8 border border-teal-300/20 bg-surface-container-high overflow-hidden">
        <div className="px-6 py-4 border-b border-teal-300/10 flex justify-between items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-300/60">
            DEPLOYED STATEMENTS
          </span>
          <span className="font-mono text-xs text-teal-300">
            {problems?.length || 0} TOTAL
          </span>
        </div>

        {problems && problems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-teal-300/10 bg-black/30">
                  <th className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-teal-300/60">#</th>
                  <th className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-teal-300/60">Title</th>
                  <th className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-teal-300/60">Description</th>
                  <th className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-teal-300/60">Category</th>
                  <th className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-teal-300/60">Difficulty</th>
                  <th className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-teal-300/60">Actions</th>
                </tr>
              </thead>
              <tbody>
                {problems.map((p, i) => (
                  <tr key={p.id} className="border-b border-teal-300/5 hover:bg-teal-500/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</td>
                    <td className="px-6 py-4 text-sm text-white font-medium max-w-[200px]">{p.title}</td>
                    <td className="px-6 py-4 text-xs text-slate-400 max-w-[300px]">
                      <p className="line-clamp-2">{p.description}</p>
                    </td>
                    <td className="px-6 py-4 font-mono text-[10px] uppercase tracking-wider text-slate-400">{p.category}</td>
                    <td className="px-6 py-4">
                      <span className={`font-mono text-[10px] px-2 py-1 border ${difficultyColor[p.difficulty] || difficultyColor.MEDIUM}`}>
                        {p.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <ProblemDeleteButton id={p.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center font-mono text-sm text-slate-500 border-t border-teal-300/5">
            NO PROBLEM STATEMENTS DEPLOYED. USE THE FORM ABOVE TO ADD ONE.
          </div>
        )}
      </div>
    </section>
  );
}

// Server-rendered delete button wrapper
function ProblemDeleteButton({ id }) {
  return (
    <form action={async () => {
      "use server";
      const { deleteProblemStatementAction } = await import("@/app/actions");
      await deleteProblemStatementAction(id);
    }}>
      <button
        type="submit"
        className="font-mono text-[10px] text-red-400 hover:text-red-300 border border-red-400/30 hover:border-red-400/60 px-2 py-1 transition-all uppercase tracking-wider"
      >
        DELETE
      </button>
    </form>
  );
}

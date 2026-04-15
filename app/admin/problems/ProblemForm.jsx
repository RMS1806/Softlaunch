"use client";

import { useState } from "react";
import { addProblemStatementAction } from "@/app/actions";

export default function ProblemForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData) => {
    setError("");
    setSuccess(false);
    const res = await addProblemStatementAction(formData);
    if (res?.error) {
      setError(res.error);
    } else if (res?.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="border border-teal-300/20 bg-surface-container-high p-6">
      <h3 className="mb-4 font-headline text-sm font-black uppercase tracking-widest text-teal-300/80">
        + DEPLOY NEW STATEMENT
      </h3>
      <form action={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
              Title
            </label>
            <input
              name="title"
              required
              placeholder="Problem Statement Title"
              className="w-full border-b-2 border-teal-300/20 bg-black/30 p-3 text-white font-mono text-sm focus:outline-none focus:border-teal-300 transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                Category
              </label>
              <input
                name="category"
                placeholder="e.g. FINTECH"
                className="w-full border-b-2 border-teal-300/20 bg-black/30 p-3 text-white font-mono text-sm focus:outline-none focus:border-teal-300 transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                Difficulty
              </label>
              <select
                name="difficulty"
                defaultValue="MEDIUM"
                className="w-full border-b-2 border-teal-300/20 bg-black/30 p-3 text-white font-mono text-sm focus:outline-none focus:border-teal-300 transition-colors"
              >
                <option value="EASY" className="bg-black">EASY</option>
                <option value="MEDIUM" className="bg-black">MEDIUM</option>
                <option value="HARD" className="bg-black">HARD</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
            Description
          </label>
          <textarea
            name="description"
            required
            rows={3}
            placeholder="Detailed problem statement description..."
            className="w-full border-b-2 border-teal-300/20 bg-black/30 p-3 text-white font-mono text-sm focus:outline-none focus:border-teal-300 transition-colors resize-none"
          />
        </div>

        {error && (
          <p className="font-mono text-[11px] text-red-400 bg-red-400/10 px-3 py-2 border border-red-400/30">
            ⚠ {error}
          </p>
        )}
        {success && (
          <p className="font-mono text-[11px] text-green-400 bg-green-400/10 px-3 py-2 border border-green-400/30">
            ✓ Problem statement deployed successfully.
          </p>
        )}

        <button
          type="submit"
          className="bg-teal-300 text-black px-8 py-3 font-headline font-black text-sm uppercase tracking-widest hover:bg-teal-200 transition-all"
        >
          DEPLOY_STATEMENT
        </button>
      </form>
    </div>
  );
}

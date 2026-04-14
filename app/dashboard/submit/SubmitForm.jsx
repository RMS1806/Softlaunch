"use client";

import { useState } from "react";
import { submitProjectAction } from "@/app/actions";

export default function SubmitForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (formData) => {
    setPending(true);
    setError("");
    setSuccess(false);
    
    const res = await submitProjectAction(formData);
    
    setPending(false);
    if (res?.error) {
      setError(res.error);
    } else if (res?.success) {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="border border-primary bg-primary/10 p-12 text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-4 block">check_circle</span>
        <h2 className="font-headline text-3xl font-black text-primary tracking-widest uppercase mb-2">Payload Accepted</h2>
        <p className="font-mono text-outline-variant">Your submission has been securely documented in our archives.</p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4 border border-primary/20 bg-surface-container-low p-8">
      <input name="title" required className="w-full border-b-2 border-outline-variant bg-surface-container-highest p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="PROJECT_TITLE" />
      <input name="repo_url" type="url" required className="w-full border-b-2 border-outline-variant bg-surface-container-highest p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="HTTPS://GITHUB.COM/..." />
      <textarea name="description" required className="w-full border-b-2 border-outline-variant bg-surface-container-highest p-3 text-white focus:outline-none focus:border-primary transition-colors" rows={4} placeholder="DESCRIBE_THE_MISSION_OBJECTIVES..." />
      <input name="file_url" type="url" className="w-full border-b-2 border-outline-variant bg-surface-container-highest p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="OPTIONAL_FIGMA_OR_DRIVE_URL" />
      
      {error && <p className="font-mono text-xs text-error mt-2">⚠ ERROR: {error}</p>}
      
      <button disabled={pending} type="submit" className={`bg-primary px-10 py-4 font-headline text-lg font-black tracking-widest text-on-primary hover:shadow-[0_0_20px_rgba(97,244,216,0.3)] transition-all ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {pending ? "UPLOADING..." : "EXECUTE_UPLOAD"}
      </button>
    </form>
  );
}

"use client";

import { useState, useRef } from "react";
import { publishAnnouncementAction, deleteAnnouncementAction } from "@/app/actions";
import { useRouter } from "next/navigation";

export function PublishForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    setError("");
    setSuccess(false);
    const res = await publishAnnouncementAction(formData);
    if (res?.error) {
      setError(res.error);
    } else {
      setSuccess(true);
      formRef.current?.reset();
      router.refresh();
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-4 border border-primary/20 bg-surface-container-low p-6">
      <div className="flex gap-4">
        <div className="w-1/3">
          <label className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">Tag</label>
          <select name="tag" required className="w-full bg-surface-container-highest border border-outline-variant/30 p-3 text-white font-mono text-xs focus:outline-none focus:border-primary transition-colors">
            <option value="HACKATHON">HACKATHON</option>
            <option value="SYSTEM">SYSTEM</option>
            <option value="SECURITY">SECURITY</option>
            <option value="NETWORK">NETWORK</option>
            <option value="UPDATE">UPDATE</option>
            <option value="URGENT">URGENT</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">Message</label>
          <input name="text" required className="w-full bg-surface-container-highest border border-outline-variant/30 p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Enter announcement text..." />
        </div>
      </div>
      
      {error && <p className="font-mono text-xs text-error">⚠ {error}</p>}
      {success && <p className="font-mono text-xs text-primary">✓ Announcement published successfully</p>}
      
      <button type="submit" className="bg-primary px-8 py-3 font-headline font-bold text-on-primary-container uppercase tracking-widest hover:shadow-[0_0_20px_rgba(97,244,216,0.3)] transition-all">
        BROADCAST
      </button>
    </form>
  );
}

export function DeleteButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await deleteAnnouncementAction(id);
    if (!res?.error) {
      router.refresh();
    }
  };

  return (
    <button onClick={handleDelete} className="text-error/50 hover:text-error transition-colors" title="Delete">
      <span className="material-symbols-outlined text-sm">close</span>
    </button>
  );
}
